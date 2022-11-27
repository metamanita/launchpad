import './App.css';
import { Alert, AlertDescription, AlertIcon, ChakraProvider} from "@chakra-ui/react";
import Layout from './components/Layouts';
import NavigationBar from './components/NavigationBar';
import theme from './theme'
import { BrowserRouter} from "react-router-dom";
import AppRouter from './AppRouter';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Alert status='error' wordBreak={'break-word'} maxW="100%">
                    <AlertIcon />
                    <AlertDescription>
                        <b>WARNING! FOR TEST ONLY.</b> This is a working prototype without any waranty! If you know what are you doing, connect with Metamask and Evmos chain!
                    </AlertDescription>
                </Alert>
        <BrowserRouter>
          <NavigationBar>
            <AppRouter />
          </NavigationBar>
          
        </BrowserRouter>
        
      </Layout>
       
    </ChakraProvider>
  );
}

export default App;
