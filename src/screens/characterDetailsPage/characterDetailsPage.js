import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { CharacterCard, P, Title, Name,Page, Button,Img } from "./characterDetailsStyle";


const CharacterDetailsPage = () => {
  const history = useHistory();
  const pathParams = useParams();
  const [character, setCharacter] = useState();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${pathParams.id}`)
      .then((response) => {
        setCharacter(response);
      }).catch(()=>{history.push("/error")});
    axios
      .get(`https://rickandmortyapi.com/api/episode/${pathParams.episodes}`)
      .then((response) => {
        setEpisodes(response.data);
      }).catch(()=>{history.push("/error")});
  }, [pathParams.id, pathParams.episodes,history]);

  const returnPage = () => {
    history.goBack();
  };

  return (
    <Page>
      <Button onClick={() => returnPage()}>Voltar</Button>

      {episodes && character ? (
        <CharacterCard>
          <Name>{character.data.name}</Name>
          <img src={character.data.image} alt={character.name} />
          <Title>Episodios em que aparece:</Title>
          {episodes.constructor === Array ? episodes.map((episode) => {
            return <P key={episode.id}>-{episode.name}</P>;
          }):<P>-{episodes.name}</P>}
        </CharacterCard>
      ) : (
        <Img
          src="https://media.giphy.com/media/kyKuZzsa6bShl3SaHe/giphy.gif"
          alt="carregando"
        />
      )}
    </Page>
  );
};

export default CharacterDetailsPage;
