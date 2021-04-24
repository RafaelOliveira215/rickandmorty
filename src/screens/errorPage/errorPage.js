import React from "react"
import {useHistory} from "react-router-dom"

const ErrorPage = () =>{
    const history = useHistory()

   const goToCharacterPage=()=>{
        history.push("/")
    }
    return(
        <div>
            <img src="https://media.giphy.com/media/l41lSoOlTm3gyLdXq/giphy.gif" alt="Algo deu errado"/>
            <button onClick={()=>goToCharacterPage()}>Home</button>
        </div>
    )
}

export default ErrorPage