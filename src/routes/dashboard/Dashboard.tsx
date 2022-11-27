import { useEthers } from "@usedapp/core";
import { Box, chakra } from '@chakra-ui/react';
import Balance from "./Balance";

export default function Dashboard(Props: any) {
    const { account, chainId, } = useEthers()
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Dashboard
            </chakra.h1>
            <Balance chainId={chainId ? chainId.toString() : '1'} address={account ? account : 'demo.eth'}></Balance>
        </Box>
    )
}