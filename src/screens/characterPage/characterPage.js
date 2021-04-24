import axios from "axios"
import React, {useState,useEffect} from "react"
import {CharacterCard,P,Dead,Alive,Unkown} from "./characterStyle"
import { useHistory } from "react-router-dom";

const CharacterPage = () =>{
    const history = useHistory();
    const [characters,setCharacters] = useState()
    
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character").then(response=>{
            setCharacters(response)
        })
    },[])

    const characterStatus = (status) =>{
       if(status === "Dead"){
           return(
           <Dead>Dead</Dead>
           )
       }else if(status === "Alive"){
           return(
               <Alive>Alive</Alive>
           )
       }else{
           return(
               <Unkown>Unknown</Unkown>
           )
       }
    }

    const goToCharacterDetails = (character) =>{
        const episodeList = []
        character.episode.map((episode)=>{ 
            episodeList.push(episode.match(/\d+/)[0])    
        })
      history.push(`/characterdetails/${character.id}/${episodeList}`)
    }

    return(
        <div>
         {characters ? characters.data.results.map((character)=>{

             return(
                 <CharacterCard onClick={()=>goToCharacterDetails(character)} key={character.id}>
                     <P>{character.name}</P>
                     <img src={character.image} alt={character.name}/>
                     
                     <P>Status: {characterStatus(character.status)}</P>
                 </CharacterCard>
             )
         }):<span>loading</span>} 
        </div>
    )
}
export default CharacterPage