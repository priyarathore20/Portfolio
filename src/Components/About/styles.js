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
max-width: 80%;
width: 100vw;
text-align: left;
width: 100vw;
margin-top: 2rem;
`
export const AboutCard = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
border: none;
border-radius: 0.5rem;
background-color: rgb(50, 50, 50);
margin-bottom: 1.5rem;
padding: 2rem;
/* max-height: 7rem; */

img{
height: 3rem;
width: 3rem;
margin-right: 2rem;
object-fit: cover;

@media screen and (max-width: 480px){
    height: 2.25rem;
    width: 2.25rem;
}
}
`
export const AboutText = styled.div`
width: 100%;
h2{
text-align: left;
font-size: 1.5rem;

@media screen and (max-width: 480px){
    font-size: 5vw;
}
}
p{
font-size: 0.9rem;
font-weight: 200;

@media screen and (max-width: 720px){
    font-size: 3vw;
}

@media screen and (max-width: 480px){
    font-size: 3vw;
}
}
`