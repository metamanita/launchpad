import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

export default function Welcome(Props: any) {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Awesome dapp template <br />
            <Text as={'span'} color={'green.400'}>
              for fast integration
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          ... actually it aint much, it connects to wallet and looks kinda cool, but its an honest way to get started! <br></br>

            Compatible with Ethereum, Polygon, Arbitrum and all EVM chains. <br></br>
            Using React, Typescript, Chakra UI, useDapp
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
            <Box>
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Start using it for free!
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}