import styled from "styled-components";

export const WorkWrapper = styled.div`
overflow:hidden;
width: 100vw;
min-height: calc(100vh - 4rem);
max-width: 65rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
text-align: center;

button{
    padding: 0.5rem 2.5rem;
    border: none;
    background-color: white;
    border-radius: 1.5rem;
    margin: 2rem 0;
    font-size: 1rem;
    font-weight: 300;
}
`
export const WorkHead = styled.header`
font-size: 3rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 1.25rem;
`
export const WorkText = styled.p`
font-size: 1rem;
font-weight: 300;
max-width: 50rem;
padding: 0 2rem;
margin-bottom: 1rem;
`
export const WorkCards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 2rem;
`
export const WorkCard = styled.div`
/* margin-top: 2rem ; */

img{
    height: 20rem;
    object-fit: cover;
    border-radius: 1rem;

    @media screen and (max-width: 585px) {
        height: 48vw;
    }
}
`
