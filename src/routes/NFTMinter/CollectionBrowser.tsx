
// import { utils } from 'ethers'
// import { Contract } from '@ethersproject/contracts'

// import { useCall, useEthers } from '@usedapp/core'

// import { NFTCollectionFactory } from '../../gen/types'
// import factory from '../abi/NFTCollectionFactory.json'


// const factoryInterface = new utils.Interface(factory.abi)
// const contract = new Contract(factory.networks[80001].address, factoryInterface) as NFTCollectionFactory

// export const DeployedCounter = () => {
//   const { account } = useEthers()

//   // // @ts-ignore
//   const { value, error } = useCall({ contract, method: 'deployedCounter', args: [account ?? ''] }) ?? {}

//   if (error) {
//     return <div> {error.message} </div>
//   }

//   if (!value) {
//     return <div> Loading... </div>
//   }

//   return <div> Balance: {value[0]} </div>
// }



import { useCall, useEthers } from '@usedapp/core'

import factory from '../../abi/NFTCollectionFactory.json'
import { ethers } from "ethers";
import CollectionPanel from './CollectionPanel';
import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react';



// const factoryInterface = new utils.Interface(factory.abi)
// const contract = new Contract(factory.networks[80001].address, factoryInterface) as NFTCollectionFactory

export const CollectionBrowser = () => {
  const { account } = useEthers()

  const contractAddress = factory.networks[80001].address
  const contract = new ethers.Contract(contractAddress, factory.abi)

  const { value, error } = useCall({ contract, method: 'deployedContracts', args: [] }) ?? {}

  if (error) {
    return <div> {error.message} </div>
  }

  if (!value) {
    return <div> Loading... </div>
  }

  return <div> Available Collections:  <SimpleGrid minChildWidth='350px'  autoFlow={'row'} spacing={'10px'} > {value[0].map((item: any, index: any) => {
    return (
     
        <div><CollectionPanel key={index} address={item} /></div>
      

    )
  })} </SimpleGrid></div>

}