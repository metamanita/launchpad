import { Alert, Image, useColorModeValue, AlertDescription, AlertIcon, Box, Button, chakra, HStack, Link, Stack, Text, color } from "@chakra-ui/react";

import { useCall, useContractFunction } from '@usedapp/core'
import minter from '../../abi/NFTCollection.json'
import { ethers } from "ethers";
import { parseUnits } from "@ethersproject/units";
import useContractUri from "./contractUri"



export default function CollectionPanel(Props: any) {
    const contractAddress = Props.address;

    const contract = new ethers.Contract(contractAddress, minter.abi)
    const tokenDecimals = 18

    const { value: price } = useCall({ contract, method: 'PRICE', args: [] }) ?? {}
    const parsedPrice = price?.toString() / (10 ** tokenDecimals)

    const { value: tokenName } = useCall({ contract, method: 'name', args: [] }) ?? {}

    const { value: symbol } = useCall({ contract, method: 'symbol', args: [] }) ?? {}

    const { value: maxSupply } = useCall({ contract, method: 'MAX_SUPPLY', args: [] }) ?? {}
    const parsedMaxSupply = maxSupply?.toString()

    const { value: maxPerMint } = useCall({ contract, method: 'MAX_PER_MINT', args: [] }) ?? {}
    const parsedMaxPerMint = maxPerMint?.toString()

    const { value: contractURI } = useCall({ contract, method: 'contractURI', args: [] }) ?? {}

    const { name: contractName,
         description, 
         image, 
         externalLink, 
         sellerFeeBasisPoints, 
         feeRecipient,  
         error, loaded } = useContractUri(contractURI)

    console.log("Returns out: ", contractName, error, loaded)


    const { state, send } = useContractFunction(contract, 'mintNFTs', {
        transactionName: 'mintNFTs',
        gasLimitBufferPercentage: 10,
    })

    const mint = () => {
        console.log("ParseEther",price)
        void send(1, { value: parseUnits(parsedPrice.toString(), "ether") })
        // void send()
    }

    return (
        <Box key={Props.key}
            maxW="xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}
            border={'1px'} borderColor={'gray.700'} margin={'1'} paddingBottom={'4'}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'m'}
                fontWeight={'Bold'}>
                {tokenName}
            </chakra.h1>
            <chakra.h2
                textAlign={'center'}
                fontSize={'sm'}
                fontWeight={'italic'}>
                {contractAddress}
            </chakra.h2>
            <Text
                fontWeight={'Bold'}>
                {contractName} ❖ ${symbol}
            </Text>
            <Text >
                {description}
            </Text>
            <Image src={image.replace("ipfs://", "https://ipfs.io/ipfs/")} alt={image}>

            </Image>
            <HStack fontWeight={'italic'}
                fontSize={'sm'}
                m={'1px'} p={'1px'}>
                <Text>
                    ❖ Max Supply: {parsedMaxSupply}
                </Text>
                <Text>
                    ❖ Max Per Mint: {parsedMaxPerMint}
                </Text>
                <Text>
                    ❖ Mint price: {parsedPrice}
                </Text>
                <Text>
                    ❖ Royalties: {parseInt(sellerFeeBasisPoints)/100}% 
                </Text>
            </HStack>



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
                        bg={useColorModeValue('blue', 'blue')}
                        color={useColorModeValue('white', 'white')}
                    >Mint this</Button>
                    <Text float={'right'}>
                        {(state.status !== "None") ? state.status : ""}
                    </Text>
                </HStack>
            </Stack>
        </Box>
    )
}