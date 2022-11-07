import { Box, chakra, Text } from "@chakra-ui/react";

export default function About(Props: any) {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={'center'}
                fontSize={'4xl'}
                py={10}
                fontWeight={'bold'}>
                About
            </chakra.h1>
            <Text color={'gray.500'}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, ut? Fuga tempora nulla porro sapiente nostrum quisquam provident nemo adipisci dicta vitae officia optio labore unde id, velit rem eos.
            </Text>
        </Box>
    )
}