
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

import { useCall, useEthers } from '@usedapp/core'

import { NFTCollectionFactory } from '../../gen/types'
import factory from '../abi/NFTCollectionFactory.json'

import { ethers } from "ethers";
import { SetStateAction, useState } from 'react'



// const factoryInterface = new utils.Interface(factory.abi)
// const contract = new Contract(factory.networks[80001].address, factoryInterface) as NFTCollectionFactory

export const DeployedCounter = () => {
  const { account } = useEthers()
  const [ counter, setCounter ] = useState('')
  
//   // // @ts-ignore
//   const { value, error } = useCall({ contract, method: 'deployedCounter', args: [account ?? ''] }) ?? {}
const USDTContract = new ethers.Contract("0xdAC17F958D2ee523a2206206994597C13D831ec7", factory.abi)

USDTContract.deployedCounter().then((counter: SetStateAction<string>)=>{
    setCounter(counter);
})
//   if (error) {
//     return <div> {error.message} </div>
//   }

//   if (!value) {
//     return <div> Loading... </div>
//   }
  
//   return <div> Balance: {value[0]} </div>
}