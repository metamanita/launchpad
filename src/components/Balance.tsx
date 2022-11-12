import {  Image, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from 'axios'

interface BalanceRequest {
    chainId: string;
    address: string;
}

export default function Balance(Props: BalanceRequest) {
    const [balance, setBalance] = useState<any[]>([]);
    const url = 'https://api.covalenthq.com/v1/'+ Props.chainId +'/address/' + Props.address  +'/balances_v2/?key=' + process.env.REACT_APP_COVALENT_API_KEY
    console.log("url=", url)

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setBalance(response?.data.data.items)
            }).catch((error) => { console.log("error in axios") })
    }, [url])

    if (!balance) return null;

    return (
        <div>
            <TableContainer width={'100%'}>
                <Table variant='simple' size={'sm'} wordBreak={'break-word'} whiteSpace={'unset'} >
                    <TableCaption> Balance of address {Props.address}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th> Logo</Th>
                            <Th  w ={'sm'}> Token  </Th>
                            <Th> Amount </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {balance.map((item, index) => {
                            return (
                                <Tr key={index}>
                                    <Td> <Image boxSize={'25px'} src={item?.logo_url} alt="logo"/> </Td>
                                    <Td>{item?.contract_name}</Td>
                                    <Td>{item?.balance / (10**item?.contract_decimals)}</Td>
                                </Tr>
                            );
                        }).sort()}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>

    )
}