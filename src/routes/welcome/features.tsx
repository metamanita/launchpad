import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Link, Button } from '@chakra-ui/react';
import { FcInTransit, FcReading, FcShop } from 'react-icons/fc';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as ReachLink } from 'react-router-dom'

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
    richText: ReactElement;
}

const Feature = ({ title, text, icon, richText }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
            {richText}
        </Stack>
    );
};

export default function FeaturesThreeColumns() {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={FcShop} w={10} h={10} />}
                    title={'Mint NFTs'}
                    text={
                        'Mint fresh NFT drops! Permissionless! Find tallented new artists and join DAO communities.' 
                    }
                    richText={<div>
                        Check out the 
                        <Link as={ReachLink} textDecoration={"underline"} color={'teal'} to='/minter'> community built collections </Link> 
                        and mint your own</div>}
                />
                <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={'Launch your own NFT Collection'}
                    text={
                        'Select from template and deploy your own collection in one simple form'
                    }
                    richText={<div>
                        Go to launchpad 
                        <Link as={ReachLink} textDecoration={"underline"} color={'teal'} to='/launcher'> and launch your own </Link> 
                        </div>}
                />
                <Feature
                    icon={<Icon as={FcReading} w={10} h={10} />}
                    title={'Learn everything about NFT'}
                    text={
                        'Learn everything you need to build your own NFT collections.'
                    }
                    richText={<div>Check our <Link textDecoration={"underline"} color={'teal'} href='https://github.com/metamanita' isExternal> Github repo <ExternalLinkIcon mx='2px' /> </Link>
                    and find dapp-boilerplate, smart contracts and sample collections</div>}
                />
            </SimpleGrid>
        </Box>
    );
}