import styled from "styled-components";

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
margin:auto;
`

export const Dead = styled.span`
color:red;
`

export const Alive = styled.span`
color:green;
`

export const Unkown = styled.span`
color:gray;
`
