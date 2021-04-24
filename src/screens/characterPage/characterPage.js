import axios from "axios"
import React, {useState,useEffect} from "react"

const CharacterPage = () =>{
    const [characters,setCharacters] = useState()
    
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character").then(response=>{
            setCharacters(response)
        })
    },[])
    console.log(characters)
   

    return(
        <div>
         {characters.data.results.map((character)=>{
             return(
                 <div>
                     {character.name}
                     <img src={character.image}/>
                     {character.status}
                 </div>
             )
         })}
        </div>
    )
}
export default CharacterPage