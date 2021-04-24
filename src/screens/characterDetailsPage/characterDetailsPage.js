import React, {useEffect,useState} from "react"
import { useHistory,useParams } from "react-router-dom";
import axios from "axios"

const CharacterDetailsPage = () =>{
    const history = useHistory();
    const pathParams = useParams()
    const [character,setCharacter] = useState()
    const [episodes,setEpisodes] = useState()
    
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
         {episodes && character ? <div>{character.data.name} <img src={character.data.image}/> {episodes.map((episode)=>{
             return(
             <div>-{episode.name}</div>
             )
         })}</div>:<span>loading</span>}
         <button onClick={()=>returnPage()}>Voltar</button>

        </div>
    )
   
}

export default CharacterDetailsPage