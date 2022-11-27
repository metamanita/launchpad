import { Alert, Image, useColorModeValue, AlertDescription, AlertIcon, Box, Button, chakra, HStack, Link, Stack, Text, color } from "@chakra-ui/react";

import { useCall, useContractFunction } from '@usedapp/core'
import collection from '../../abi/NFTCollection.json'
import { ethers } from "ethers";
import { parseUnits } from "@ethersproject/units";
import useTokenUri from "./tokenUri"



export default function TokenPanel(Props: any) {
    const contractAddress = Props.contractAddress;
    const tokenId = Props.tokenId;

    const contract = new ethers.Contract(contractAddress, collection.abi)
    const tokenDecimals = 18

    const { value: tokenUri } = useCall({ contract, method: 'tokenURI', args: [tokenId] }) ?? {}

    const { name, image, attributes, error } = useTokenUri(tokenUri)




    const { value: tokenName } = useCall({ contract, method: 'name', args: [] }) ?? {}


    return (
        <Box key={contractAddress + tokenId}
            maxW="xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}
            border={'1px'} borderColor={'gray.700'} margin={'1'} paddingBottom={'4'}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'m'}
                fontWeight={'Bold'}>
                {tokenName}
            </chakra.h1>
            <Text
                fontWeight={'Bold'}>
                ❖ Name {name}
            </Text>

            <Image src={image} alt={image}></Image>
            <HStack fontWeight={'italic'} gap='6'
                fontSize={'sm'}
                m={'1px'} p={'1px'}>
                <Text borderWidth='1px' borderRadius='lg'>
                    ❖ Atributes: {
                        attributes.map((item: any, value) => {
                            return (
                                <HStack key={contractAddress+tokenId+Math.random()} borderWidth='1px' borderRadius='lg'>
                                    <Box>
                                        {item?.trait_type?.toString()}:
                                    </Box>
                                    <Box>
                                        {item?.value?.toString()}
                                    </Box>
                                </HStack>
                            )
                        })
                    }
                </Text>
                <Box margin-right='1px'>
                    <Button margin={'5px'} colorScheme='red' onClick={() => { alert('coming soon') }}>Burn</Button>
                    <Button margin={'5px'} colorScheme='blue' onClick={() => { alert('coming soon') }}>Sell</Button>
                </Box>
            </HStack>
           
        </Box>
    )
}