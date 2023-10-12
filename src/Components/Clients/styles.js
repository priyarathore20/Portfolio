import styled from "styled-components";

export const ClientWrapper = styled.div`
overflow:hidden;
width: 100vw;
min-height: calc(100vh - 4rem);
max-width: 75rem;
display: flex;
flex-direction: column;
align-items: center;
/* justify-content: center; */
margin: 0 auto;
text-align: center;
`
export const ClientHeader = styled.div`
font-size: 3rem;
font-weight: 600;
padding-top: 3rem;
margin-bottom: 1.25rem;
`
export const ClientDescription = styled.div`
font-size: 1rem;
font-weight: 300;
max-width: 50rem;
padding: 0 2rem;
margin-bottom: 1rem;
`
export const ClientCards = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 2rem;

img{
    max-width: 12rem;
    object-fit: cover;

    @media screen and (max-width:640px) {
        max-width: 40vw;
    }
}
`