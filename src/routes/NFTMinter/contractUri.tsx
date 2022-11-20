import axios from "axios"
import { useEffect, useState } from "react"

export default function useContractUri(_contractUri: String) {
    console.log("Translate: ", _contractUri)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [externalLink, setExternalLink] = useState("")
    const [sellerFeeBasisPoints, setSellerFeeBasisPoints] = useState("")
    const [feeRecipient, setFeeRecipient] = useState("")
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        try {

        let ipfsHash = _contractUri[0]
        
        if(ipfsHash.slice(0, 7) !== "ipfs://") {
            setError("Only Ipfs supported")
            throw new Error('Only IPFS supported')
        }
        
        if(ipfsHash.slice(-1) ==="/") ipfsHash = ipfsHash.slice(0,-1) 
        console.log("ipfsHash=", ipfsHash)
        const uri = "https://" + ipfsHash?.substring(7) + ".ipfs.nftstorage.link"
        console.log("axios uri: ", uri)
        axios
            .get(uri)
            .then((response) => {
                setName(response.data.name)
                setDescription(response.data.description)
                setImage(response.data.image)
                setExternalLink(response.data.external_link)
                setSellerFeeBasisPoints(response.data.seller_fee_basis_points)
                setFeeRecipient(response.data.fee_recipient)
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoaded(true))     
            
        } catch (error) {
            setError("" + error)
        }
          
    },[_contractUri])
    return { name, description, image, externalLink, sellerFeeBasisPoints, error, feeRecipient, loaded}
}