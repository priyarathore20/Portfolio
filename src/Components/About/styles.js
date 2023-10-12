import styled from "styled-components";

export const AboutWrapper = styled.div`
overflow:hidden;
width: 100vw;
max-width: 65rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
text-align: center;
`
export const AboutHeader = styled.header`
font-size: 3rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 1.25rem;
`
export const AboutPara = styled.p`
font-size: 1rem;
font-weight: 300;
max-width: 50rem;
padding: 0 2rem;
`
export const AboutCards = styled.div`
max-width: 45rem;
width: 100vw;
margin-top: 2rem;
`
export const AboutCard = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
border: none;
border-radius: 2rem;
background-color: rgb(50, 50, 50);
margin-bottom: 1.5rem;
padding: 2rem;
max-height: 7rem;

img{
height: 3.5rem;
}
`
export const AboutText = styled.div`
width: 100%;
h2{
text-align: left;
font-size: 1.5rem;
}
p{
font-size: small;
}
`