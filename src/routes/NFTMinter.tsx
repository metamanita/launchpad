import { Box, chakra, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CollectionBrowser } from "./NFTMinter/CollectionBrowser";



export default function NFTMinter(Props: any) {

    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Mint from Collection
            </chakra.h1>
            <Text color={'gray.500'}>
            </Text>
            <CollectionBrowser></CollectionBrowser>
        </Box>
    )
}