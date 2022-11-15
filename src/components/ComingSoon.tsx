import { Box, chakra, Text } from "@chakra-ui/react";

export default function ComingSoon(Props: any) {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                ...coming soon
            </chakra.h1>
            <Text color={'gray.500'}>
                
            </Text>
        </Box>
    )
}