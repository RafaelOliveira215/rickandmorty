import styled from "styled-components";

export const Page = styled.div`
display:grid;
grid-template-columns: 30% 30% 30%;
@media(max-width: 768px) {
  display:flex;
  margin:auto;
  flex-direction:column;
  }
`;
export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: auto;
  border: solid 1px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const P = styled.p`
  margin: auto;
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
  display: flex;
  margin: auto;
`;
