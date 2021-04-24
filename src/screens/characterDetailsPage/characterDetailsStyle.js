import styled from "styled-components";

export const CharacterCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  background-color:#87CEEB;
`;

export const P = styled.p`
  margin-left:10px;
  display: flex;
  margin-bottom:1px;
`;

export const Title = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
background-color:#00FF7F;
width:100%;
height:50px;
`

export const Name = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-weight:bold;
background-color:#00FF7F;
width:100%;
height:50px;
`
export const Page = styled.div`
background-image:URL("https://t4.ftcdn.net/jpg/02/89/72/69/360_F_289726988_cF9wzIATeSAOBxCg23NqnLeaKVfXWvdy.jpg");
background-attachment:scroll;
padding-top:20px;
min-height:100vh;
`

export const Button = styled.button`
position:fixed;
background-image:url("https://i.pinimg.com/originals/5b/53/73/5b537363393dc26c68b566fe482eb32d.png");
background-size:cover;
border-radius:20px;
height:50px;
margin-left:20px;
background-color:black;
border:none;
cursor: pointer;
`

export const Img = styled.img`
  display:flex;
  margin:auto;
  margin-left:30vw;
`;
