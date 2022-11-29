import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';
import FeaturesThreeColumns from './features';

// import vilage from 'metamanita vilage.png'

export default function Welcome(Props: any) {
  return (
    <>
      <Container maxW={'3xl'} height={'6xl'}>
      
        <Stack
          as={Box}
          textAlign={'center'} alignItems={'center'}
          spacing={{ base: 8, md: 8 }}
          py={{ base: 2, md: 2 }}>

          <Heading
            fontWeight={600} 
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Metamanita <br />
            <img src={'royal_mushroom.png'} alt={'Metamanita'} />
            <Text as={'span'}
              color={'green.400'}
              fontSize={{ base: 'm', sm: 'xl', md: '2xl' }}
              fontWeight={600}>
              Permisionless NFT Launcher
            </Text>
            {/* <Text as={'span'}
              color={'gray.400'}
              fontSize={{ base: 'sm', sm: 'm', md: 'l' }}>
              <br></br>...coming soon
              
            </Text> */}
            
          </Heading>
          
          <FeaturesThreeColumns></FeaturesThreeColumns>
        </Stack>
      </Container>
    </>
  )
}