import { Box, chakra, Button } from "@chakra-ui/react";
import { Contract } from '@ethersproject/contracts'
import { useContractFunction } from "@usedapp/core";
import { parseEther } from '@ethersproject/units'
import  myContract from "../abi/superNFT.json"
import { useEffect } from "react";

export default function ContractInteraction(Props: any) {
    const contractAddress = '0x4C536d0413699e73681b1e73834c5e5F940257e4';
    const contractAbi = myContract.abi;
    const contract = new Contract(contractAddress, contractAbi) as any
    const price = '0.001'

    const { state, send } = useContractFunction(contract, 'freeMint', {
        transactionName: 'freeMint',
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

    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
      }, [status]);

    return (
        
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} textAlign={'center'}>
            <>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Contract Interaction
            </chakra.h1>
            <Button 
                onClick={() => freeMint()}>
                Free Mint
            </Button>
            <p>Status: {status} </p>
            </>
        </Box>
        
    )
}