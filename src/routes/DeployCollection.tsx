import { Box, chakra, Button } from "@chakra-ui/react";
import { Contract } from '@ethersproject/contracts'
import { Ether, useContractFunction } from "@usedapp/core";
import { parseEther, parseUnits } from '@ethersproject/units'
import myContract from "../abi/NFTCollectionFactory.json"
import { useEffect } from "react";
import DeployCollectionForm from "../components/DeployCollectionForm";

export default function DeployCollection(Props: any) {
    const contractAddress = myContract.networks["80001"].address;
    const contractAbi = myContract.abi;
    const contract = new Contract(contractAddress, contractAbi) as any
    // const price = '0.001'

    const { state, send } = useContractFunction(contract, 'createInstance', {
        transactionName: 'createInstance',
        gasLimitBufferPercentage: 10,
    })
    const { status } = state
    const { receipt } = state
    const { errorCode } = state
    const { errorMessage } = state

    const freeMint = () => {
        // void send(1, {value: parseEther(price)})
        void send()
    }

    const deployCollection = (
        baseUri: string,
        tokenName: string, 
        tokenSymbol: string, 
        contractURI: string, 
        tokenMaxSupply: number, 
        price: number, 
        maxPerMint: number) => {
        console.log(baseUri, tokenName, tokenSymbol, contractURI, tokenMaxSupply, price, maxPerMint)
        // const BNprice = parseUnits(price.toString())
        const BNPrice = parseEther(price.toString());

        void send(baseUri, tokenName, tokenSymbol ,contractURI, tokenMaxSupply, BNPrice, maxPerMint);
    }

    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
    }, [status]);

    return (

        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} textAlign={'center'}>
            <>
                {/* <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Contract Interaction
            </chakra.h1> */}
                <DeployCollectionForm deploy={deployCollection}></DeployCollectionForm>
                <p>Status: {status} </p>
            </>
        </Box>

    )
}