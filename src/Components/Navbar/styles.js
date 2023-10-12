import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  height: 5rem;
  width: 100vw;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: rgb(30, 30, 30);
  z-index: 5;

  img {
    object-fit: cover;
    height: 3rem;
    width: 4rem;
  }
`;
export const DesktopMenu = styled.div`
  a {
    color: white;
    font-size: 18px;
    margin: 1rem;
    cursor: pointer;
  }

  a:hover{
    border-bottom: 3px solid yellow;
    color: yellow;
    padding-bottom: 0.5rem;
  }
`;
export const DesktopMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border: none;
  background-color: white;
  color: black;
  border-radius: 2rem;
letter-spacing: 0.7px;
  font-size: 14px;
  
  img {
    height: 1rem;
    width: 1rem;
    margin: 1rem;
    object-fit: cover;
  }
`;
