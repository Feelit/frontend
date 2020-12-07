import styled from "styled-components"

export const NavbarContainer = styled.div`
height: 130px;
display: flex;
justify-content:center;
align-items: center;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
position:fixed;
bottom:0;
width:100%;
background: #FAFBFC;

@media (max-width: 768px) {
    height: 80px;
  }
`

export const LogoContainer = styled.figure`

margin: 0;

@media (max-width: 768px) {
    display:none;
  }
`

export const ButtonsContainer = styled.div`
width: 80%;
display:flex;
justify-content: space-around;
align-items:center;
`

