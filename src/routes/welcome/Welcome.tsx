import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';

// import vilage from 'metamanita vilage.png'

export default function Welcome(Props: any) {
  return (
    <>
      <Container maxW={'3xl'} height={'6xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>

          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Metamanita <br />
            <Text as={'span'} color={'green.400'}>
              Permisionless NFT Launcher
            </Text>
            <Text as={'span'}
              color={'gray.400'}
              fontSize={{ base: 'xl', sm: '1xl', md: '3xl' }}>
              <br></br>...coming soon
            </Text>
          </Heading>

        </Stack>
        <img src='mushrooms_asset_mobile.png' alt='Metamanite cards' />
      </Container>
    </>
  )
}