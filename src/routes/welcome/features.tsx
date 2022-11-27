import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcInTransit, FcReading, FcShop } from 'react-icons/fc';

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
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
                />
                <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={'Launch your own NFT Collection'}
                    text={
                        'Select from template and deploy your own collection in one simple form'
                    }
                />
                <Feature
                    icon={<Icon as={FcReading} w={10} h={10} />}
                    title={'Learn everything about NFT'}
                    text={
                        'Learn everything you need to build your own NFT collections.'
                    }
                />
            </SimpleGrid>
        </Box>
    );
}