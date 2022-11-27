import { useState } from "react";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Select,
} from '@chakra-ui/react';

export default function DeployCollectionForm({ deploy }: any) {
    const [tokenName, setTokenName] = useState('')
    const [tokenSymbol, setTokenSymbol] = useState('')
    const [baseURI, setBaseUri] = useState('');
    const [tokenMaxSupply, setTokenMaxSupply] = useState('');
    const [contractURI, setContractURI] = useState('');
    const [price, setPrice] = useState('');
    const [maxPerMint, setMaxPerMint] = useState('');

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Launch your NFT Collection</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Learn everything about it with <Link color={'blue.400'}>Zero to Hero docs</Link> and deploy your own collection ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="collection">
                        <FormLabel>Network</FormLabel>
                            <Select placeholder='Select network'>
                                <option disabled={true} value='80001'>Polygon Mumbai</option>
                                <option selected={true} value='evmos_9000-4'>Evmos</option>
                            </Select>

                            <FormLabel>Token Name:</FormLabel>
                            <Input type="text"
                                placeholder="Not Bored NFT Creator Club"
                                value={tokenName}
                                onChange={(e) => setTokenName(e.target.value)} />

                            <FormLabel>Token Symbol:</FormLabel>
                            <Input type="text"
                                placeholder="NBNCC"
                                value={tokenSymbol}
                                onChange={(e) => setTokenSymbol(e.target.value)} />

                            <FormLabel>Base URI:</FormLabel>
                            <Input type="url"
                                placeholder="ipfs://bafybeiecs3qivqpqgdupiwi2zvrqnxfki4xuh3m743edxxlj2p6icuaexm/galaxyGwFtM8/"
                                value={baseURI}
                                onChange={(e) => setBaseUri(e.target.value)} />

                            <FormLabel>Contract URI:</FormLabel>
                            <Input type="url"
                                placeholder="ipfs://bafkreifocdinpnibbztphdu72tsvzvqoz2fsqoku456x3ajeorug3joc4u/"
                                value={contractURI}
                                onChange={(e) => setContractURI(e.target.value)} />

                            <FormLabel>Token Max Supply:</FormLabel>
                            <Input type="number"
                                placeholder="10000"
                                value={tokenMaxSupply}
                                onChange={(e) => setTokenMaxSupply(e.target.value)} />

                            <FormLabel>Mint Price:</FormLabel>
                            <Input type="number"
                                placeholder="0.1"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)} />

                            <FormLabel>Max Per Mint:</FormLabel>
                            <Input type="number"
                                placeholder="5"
                                value={maxPerMint}
                                onChange={(e) => setMaxPerMint(e.target.value)} />

                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>I accept <Link color={'blue.400'}>terms and conditions</Link></Checkbox>
                                <Link color={'blue.400'}>Quick Help</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={() => deploy(baseURI, tokenName, tokenSymbol, contractURI, tokenMaxSupply, price, maxPerMint)}>
                                Deploy
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
