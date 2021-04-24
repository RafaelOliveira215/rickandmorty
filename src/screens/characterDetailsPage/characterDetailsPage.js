import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { CharacterCard, P } from "./characterDetailsStyle";

const CharacterDetailsPage = () => {
  const history = useHistory();
  const pathParams = useParams();
  const [character, setCharacter] = useState();
  const [episodes, setEpisodes] = useState([]);
console.log(episodes)
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${pathParams.id}`)
      .then((response) => {
        setCharacter(response);
      });
    axios
      .get(`https://rickandmortyapi.com/api/episode/${pathParams.episodes}`)
      .then((response) => {
        setEpisodes(response.data);
      });
  }, [pathParams.id, pathParams.episodes]);

  const returnPage = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={() => returnPage()}>Voltar</button>

      {episodes && character ? (
        <CharacterCard>
          <P>{character.data.name}</P> <br />
          <img src={character.data.image} alt={character.name} />
          <P>Episodios em que aparece:</P>
          {episodes.constructor === Array ? episodes.map((episode) => {
            return <P key={episode.id}>-{episode.name}</P>;
          }):<P>-{episodes.name}</P>}
        </CharacterCard>
      ) : (
        <img
          src="https://media.giphy.com/media/kyKuZzsa6bShl3SaHe/giphy.gif"
          alt="carregando"
        />
      )}
    </div>
  );
};

export default CharacterDetailsPage;
