import { Box } from "@chakra-ui/react";
import { Contract } from '@ethersproject/contracts'
import { useContractFunction } from "@usedapp/core";
import { parseEther } from '@ethersproject/units'
import myContract from "../abi/NFTCollectionFactoryEvmos.json"
import { useEffect } from "react";
import DeployCollectionForm from "../components/DeployCollectionForm";

export default function DeployCollection(Props: any) {
    const contractAddress = myContract.networks[9001].address;
    const contractAbi = myContract.abi;
    const contract = new Contract(contractAddress, contractAbi) as any
    // const price = '0.001'

    const { state, send } = useContractFunction(contract, 'createInstance', {
        transactionName: 'createInstance',
        gasLimitBufferPercentage: 10,
    })
    const { status } = state
    

    const deployCollection = (
        baseUri: string,
        tokenName: string, 
        tokenSymbol: string, 
        contractURI: string, 
        tokenMaxSupply: number, 
        price: number, 
        maxPerMint: number) => {
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
                <DeployCollectionForm deploy={deployCollection}></DeployCollectionForm>
                <p>Status: {status} </p>
            </>
        </Box>

    )
}