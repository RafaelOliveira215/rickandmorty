import React from "react"
import {useHistory} from "react-router-dom"
import {Page, Button,Image} from "./errorStyle"

const ErrorPage = () =>{
    const history = useHistory()

   const goToCharacterPage=()=>{
        history.push("/")
    }
    return(
        <Page> 
            <Button onClick={()=>goToCharacterPage()}>Home</Button>
            <Image src="https://media.giphy.com/media/l41lSoOlTm3gyLdXq/giphy.gif" alt="Algo deu errado"/>
        </Page>
    )
}

export default ErrorPage