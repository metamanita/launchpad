import { Button, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

export default function ConnectButton(Props: any) {
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);
    const background = useColorModeValue('gray.100', 'gray.700')
    const innerBackground = useColorModeValue('gray.300', 'gray.600')

    function handleConnectWallet() {
        const ethereum = (window as any).ethereum;
        if (!ethereum){
            alert("No Metamask browser extension found. Please install or activate MetaMask")
        }
        else {
            activateBrowserWallet();
        }
    }

    return account ? (
        <Box
            display="flex"
            alignItems="center"
            background={background}
            borderRadius="xl"
            py="0"

        >
            <Box px="3">
                <Text fontSize="sm">
                    {etherBalance && parseFloat(formatEther(etherBalance)).toFixed(3)}
                </Text>
            </Box>
            <Button
                border="1px solid transparent"
                bg={innerBackground}
                _hover={{
                    border: "1px",
                    borderStyle: "solid",
                    borderColor: "blue.400",
                }}
                borderRadius="xl"
                m="1px"
                px={3}
                height="38px"
            >
                <Text fontSize="md" fontWeight="medium" mr="2" >
                    {account &&
                        `${account.slice(0, 6)}...${account.slice(
                            account.length - 4,
                            account.length
                        )}`}
                </Text>
                <Identicon />
            </Button>
        </Box>
    ) : (
        <Button onClick={handleConnectWallet}>Connect to a wallet</Button>
    );
}