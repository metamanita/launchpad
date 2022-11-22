import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme';

import { DAppProvider, Config, Mumbai, Polygon } from '@usedapp/core'

console.log(process.env.REACT_APP_POLYGON_PROVIDER)

const config: Config = {
  readOnlyChainId: Mumbai.chainId,
  readOnlyUrls: {
     '9001': process.env.REACT_APP_EVMOS_MAINNET_PROVIDER as string,
  },
  multicallAddresses: {
    [9001]: `0xcA11bde05977b3631167028862bE2a173976CA11`
  },
  multicallVersion: 2,
  pollingInterval: 10000
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <DAppProvider config={config}>
        
      <App />
      
    </DAppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
