
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { useCall, useEthers } from '@usedapp/core'
import { SimpleGrid } from '@chakra-ui/react';
import collection from '../../abi/NFTCollection.json'
import TokenPanel from "./TokenPanel";


export const CollectionDetails = (Props: any) => {
  const { contractAddress } = useParams()
  const { account } = useEthers()
  const contract = new ethers.Contract(contractAddress as string, collection.abi)

  const { value: tokens, error } = useCall({ contract, method: 'tokensOfOwner', args: [account] }) ?? {}
  const { value: owner} = useCall({ contract, method: 'owner', args: [account] }) ?? {}

  if (error) {
    return <div> {error.message} </div>
  }

  if (!tokens) {
    return <div> Loading... </div>
  }

  return <div>
    Owner: {owner}
    Your tokens on {contractAddress}:
    <SimpleGrid minChildWidth='350px' autoFlow={'row'} spacing={'10px'} key={contractAddress}>
      {tokens[0].slice(0).reverse().map((item: any, index: any) => {
        return (
           <TokenPanel key={index + contractAddress} contractAddress={contractAddress} tokenId={item?.toString()}></TokenPanel>
        )
      })}
    </SimpleGrid></div>
}
