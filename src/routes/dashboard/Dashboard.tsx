import { useEtherBalance, useEthers, useChainMeta, ChainId, useGasPrice } from "@usedapp/core";
import { formatEther, formatUnits } from "@ethersproject/units";
import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import Balance from "./Balance";

interface StatsCardProps {
    title: string;
    stat: any;
}

function StatsCard(props: StatsCardProps) {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} >
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    );
}
export default function Dashboard(Props: any) {
    const { account, chainId, } = useEthers()
    const etherBalance = useEtherBalance(account)
    // const chainMeta = useChainMeta(chainId as ChainId)
    const gasPrice = useGasPrice()

    return ( 
        
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                Dashboard
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                {/* <StatsCard title={'Network'} stat={chainMeta?.chainName} /> */}
                {/* <StatsCard title={'Your Balance'} stat={etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)} /> */}
                {/* <StatsCard title={'Gas Price in gwei'} stat={gasPrice && parseFloat(formatUnits(gasPrice, 'gwei')).toFixed(3)} /> */}
            </SimpleGrid>
            <Balance chainId={chainId?chainId.toString():'1'} address={account?account:'demo.eth'}></Balance>
        </Box>
    )
}