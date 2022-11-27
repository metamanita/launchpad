import axios from "axios"
import { useEffect, useState } from "react"

export default function useTokenUri(_tokenUri: String) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [attributes, setAttributes] = useState([])
    const [error, setError] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        try {

        let ipfsHash = _tokenUri[0]
        
        if(ipfsHash.slice(0, 7) !== "ipfs://") {
            setError("Only Ipfs supported")
            throw new Error('Only IPFS supported')
        }

        const uri = ipfsHash?.replace("ipfs://", "https://cf-ipfs.com/ipfs/")
        axios
            .get(uri)
            .then((response) => {
                setName(response.data.name)
                const imageSrc = response?.data?.image.replace("ipfs://", "https://cf-ipfs.com/ipfs/")
                setImage(imageSrc)
                setAttributes(response?.data?.attributes)
            })
            .catch((error) => setError(error.message))
            .finally(() => setLoaded(true))     
            
        } catch (error) {
            setError("" + error)
        }
          
    },[_tokenUri])
    return { name, image, attributes, error, loaded}
}