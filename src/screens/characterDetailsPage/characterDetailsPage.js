import React, {useEffect,useState} from "react"
import { useHistory,useParams } from "react-router-dom";
import axios from "axios"

const CharacterDetailsPage = () =>{
    const history = useHistory();
    const pathParams = useParams()
    const [character,setCharacter] = useState()
    const [episodes,setEpisodes] = useState()
   console.log(character)
    console.log(episodes)
    useEffect(()=>{

        axios.get(`https://rickandmortyapi.com/api/character/${pathParams.id}`).then(response=>{
            setCharacter(response)
        })
        axios.get(`https://rickandmortyapi.com/api/episode/${pathParams.episodes}`).then(response=>{
            setEpisodes(response.data)
        })
    },[])
        
    const returnPage = () => {
          history.goBack()
    }

    return(
        <div>
         {/* {episodes ? <div>{episodes}</div>:<span>loading</span>} */}
         <button onClick={()=>returnPage()}>Voltar</button>

        </div>
    )
   
}

export default CharacterDetailsPage