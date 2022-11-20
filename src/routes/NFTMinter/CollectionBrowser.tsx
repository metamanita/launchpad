import { useCall } from '@usedapp/core'

import factory from '../../abi/NFTCollectionFactory.json'
import { ethers } from "ethers";
import CollectionPanel from './CollectionPanel';
import { SimpleGrid } from '@chakra-ui/react';

export const CollectionBrowser = () => {

  const contractAddress = factory.networks[80001].address
  const contract = new ethers.Contract(contractAddress, factory.abi)

  const { value: contracts, error } = useCall({ contract, method: 'deployedContracts', args: [] }) ?? {}

  if (error) {
    return <div> {error.message} </div>
  }

  if (!contracts) {
    return <div> Loading... </div>
  }

  return <div>
    Available Collections:
    <SimpleGrid minChildWidth='350px' autoFlow={'row'} spacing={'10px'} >
      {contracts[0].slice(0).reverse().map((item: any, index: any) => {
        return (
          <div><CollectionPanel key={index} address={item} /></div>
        )
      })}
    </SimpleGrid></div>
}