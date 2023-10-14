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
 width: 100vw;
 max-width: 80%;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 2rem; 
`
export const WorkCard = styled.div`
display: flex;
max-width: 50rem;
width: 100vw;
justify-content: space-around;
background-color: ${({color}) => color};
border-radius: 1.5rem;
padding: 20px;

div{
    display: flex;
justify-content: center;
gap: .75rem;
align-items: center;
}


h4{
    text-transform: capitalize;
font-size: 1.75rem;
margin-bottom:0.5rem;
}

p{
font-size: 14px;
text-wrap: balance;
margin-bottom:0.5rem;
}
a:hover{
    background-color: ${({hover})=> hover};
}

a{
    color: white;
    margin-bottom: 10px;
    border: 1px solid white;
    padding: 4px;
}

span{
    font-size: 16px;
    font-weight: 600;
}

img{
    height: 10rem;
    object-fit: cover;
    border-radius: 1rem;


    @media screen and (min-width: 585px) {
        height: 8rem;
    }
}

@media screen and (max-width: 360px) {
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
@media screen and (max-width: 470px) {
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media screen and (max-width: 585px) {
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
