import { Box, Heading, Text, Image, HStack } from "@chakra-ui/react";

export default function TheGame(Props: any) {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <Heading
            fontWeight={600} 
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'60%'}>
            Metamanita: The Game <br />
            {/* <Text as={'span'}
              color={'green.400'}
              fontSize={{ base: 'm', sm: 'xl', md: '2xl' }}
              fontWeight={600}>
              Permisionless NFT Launcher
            </Text> */}
            <Text as={'span'}
              color={'gray.400'}
              py={'1px'}
              my={'1'}
              lineHeight={'60%'}
              fontSize={{ base: 'sm', sm: 'm', md: 'l' }}>
                ...coming soon <br></br>
              "Metamanita The Game" will be an NFT collection that will demonstrate all the features that you can build with the launchpad.
              <br></br> They will blend with community artist's creations and they will create new NFTs and magical worlds!
              <br></br> Soulbound, Breeding, Evolving, Governace, DAO, and other utilities will become clear with this inspiring game of colors!
            </Text>
            <HStack>
            <Image maxWidth={'300px'} src={'mushrooms_asset_mobile.png'} alt={'Metamanita: The Game'} />
            </HStack>
            
          </Heading>
        </Box>
    )
}