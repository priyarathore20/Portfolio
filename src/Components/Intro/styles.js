import styled from "styled-components";

export const IntroWrapper = styled.section`
  height: calc(100vh - 4rem);
  width: 100vw;
  max-width: 75rem;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;
export const IntroContent = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 2rem;
  font-size: 3rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const Intro = styled.span`
  font-size: 1.75rem;
  font-weight: 100;
`;
export const IntroPara = styled.p`
font-size: medium;
font-weight: 100;

button{
    background-color: white;
    margin: 1rem 0;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    gap: 10px;
    border: none;
    border-radius: 3rem;
}
`;
export const IntroText = styled.span`
  span {
    color: yellow;
  }
`;
export const IntroImg = styled.img`
  position: absolute;
  top: -4rem;
  z-index: -1;
  object-fit: cover;
  right: 0;
  height: 100vh;
`;
