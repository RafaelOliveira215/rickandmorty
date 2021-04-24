import axios from "axios";
import React, { useState, useEffect } from "react";
import { CharacterCard, P, Dead, Alive, Unkown, Img,Page } from "./characterStyle";
import { useHistory } from "react-router-dom";

const CharacterPage = () => {
  const history = useHistory();
  const [characters, setCharacters] = useState(undefined);

  const interval = (x, y) => {
    let result = [];
    let i = x + 1;
    while (i < y) {
        result.push(i);
        i++;
    }
    return result;  
}

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${interval(0,672)}`).then((response) => {
      setCharacters(response);

    });
  }, []);

  const characterStatus = (status) => {
    if (status === "Dead") {
      return <Dead>Dead</Dead>;
    } else if (status === "Alive") {
      return <Alive>Alive</Alive>;
    } else {
      return <Unkown>Unknown</Unkown>;
    }
  };

  const goToCharacterDetails = (character) => {
    const episodeList = [];
    character.episode.map((episode) =>
      episodeList.push(episode.match(/\d+/)[0])
    );
    history.push(`/characterdetails/${character.id}/${episodeList}`);
  };

  return (
    <Page>
      {characters ? (
        characters.data.map((character) => {
          return (
            <CharacterCard
              onClick={() => goToCharacterDetails(character)}
              key={character.id}
            >
              <P>{character.name}</P>
              <img src={character.image} alt={character.name} />

              <P>Status: {characterStatus(character.status)}</P>
            </CharacterCard>
          );
        })
      ) : (
        <Img
          src="https://media.giphy.com/media/kyKuZzsa6bShl3SaHe/giphy.gif"
          alt="carregando"
        />
      )}
    </Page>
  );
};
export default CharacterPage;