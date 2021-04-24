import styled from "styled-components";

export const Page = styled.div`
display:grid;
grid-template-columns: 30% 30% 30%;
background-image:URL("https://t4.ftcdn.net/jpg/02/89/72/69/360_F_289726988_cF9wzIATeSAOBxCg23NqnLeaKVfXWvdy.jpg");
background-attachment:scroll;
min-height:100vh; 
@media(max-width: 768px) {
  display:flex;
  margin:auto;
  flex-direction:column;
  }
`;
export const CharacterCard = styled.div`
background-color:white;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: auto;
  border: solid 2px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const Name = styled.div`
  display:flex;
  justify-content:center;
  background-color:#00FF7F;
  width:100%;
`;
export const Status = styled.div`
  display:flex;
  justify-content:center;
  background-color:#87CEEB;
  width:100%;
`;


export const Dead = styled.span`
  color: red;
`;

export const Alive = styled.span`
  color: green;
`;

export const Unkown = styled.span`
  color: gray;
`;
export const Img = styled.img`
  display:flex;
  margin:auto;
  margin-left:30vw;
`;
