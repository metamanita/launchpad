import { Alert, AlertDescription, AlertIcon, Box, Button, chakra, HStack, Link, Stack, Text } from "@chakra-ui/react";

import { useContractFunction } from '@usedapp/core'
import minter from '../../abi/NFTCollection.json'
import { ethers } from "ethers";
import { parseEther } from "@ethersproject/units";



export default function CollectionPanel(Props: any) {
    const contractAddress = Props.address;

    const contract = new ethers.Contract(contractAddress, minter.abi)
    const price = '0.001'

    const { state, send } = useContractFunction(contract, 'mintNFTs', {
        transactionName: 'mintNFTs',
        gasLimitBufferPercentage: 10,
    })

    const mint = () => {
        void send(1, { value: parseEther(price) })
        // void send()
    }

    return (
        <Box
            maxW="xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}
            border={'1px'} borderColor={'gray.700'} margin={'1'} paddingBottom={'4'}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'sm'}
                fontWeight={'italic'}>
                {contractAddress}
            </chakra.h1>
            <Text color={'gray.500'}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ut? Fuga tempora nulla porro sapiente nostrum quisquam provident nemo adipisci dicta vitae officia optio labore unde id, velit rem eos.
            </Text>

            {(state.status === "Exception") ?
                <Alert status='error' wordBreak={'break-word'} maxW="100%">
                    <AlertIcon />
                    <AlertDescription>
                        <Link color='teal.500' href={`https://mumbai.polygonscan.com/tx/${state.receipt?.transactionHash}`} isExternal>
                            <b>Error! </b> {state.errorMessage};
                            
                        </Link>
                    </AlertDescription>
                </Alert>
                : ""}

            {(state.status === "Success") ?
                <Alert status='success' wordBreak={'break-word'} maxW="100%">
                    <AlertIcon />
                    <AlertDescription>
                        <Link color='teal.500' href={`https://mumbai.polygonscan.com/tx/${state.receipt?.transactionHash}`} isExternal>
                            <b>Success! </b>Click to see you transaction in https://mumbai.polygonscan.com/tx/{state.receipt?.transactionHash}
                        </Link>
                    </AlertDescription>
                </Alert>
                : ""}

            <Stack>
                <HStack>
                    <Button
                        onClick={() => mint()}
                        bg={'blue'}>Mint this</Button>
                    <Text float={'right'}>
                        {(state.status !== "None") ? state.status : ""}
                    </Text>
                </HStack>
            </Stack>
        </Box>
    )
}