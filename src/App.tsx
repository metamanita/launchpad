import './App.css';
import { ChakraProvider} from "@chakra-ui/react";
import Layout from './components/Layouts';
import NavigationBar from './components/NavigationBar';
import theme from './theme'
import { BrowserRouter} from "react-router-dom";
import AppRouter from './AppRouter';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Layout>
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
