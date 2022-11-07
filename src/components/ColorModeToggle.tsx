import { Button, useColorMode } from "@chakra-ui/react";


export default function ConnectButton(Props: any) {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
        </Button>
      </header>
    )
}