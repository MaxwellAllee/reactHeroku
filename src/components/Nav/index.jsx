import styled from "styled-components";
import NavTab from "../NavTab"

const Nav = () => {
  return (
    <>
      <NavArea>
        <NavLinks>
          <NavTab link='/' name="home" />
          <NavTab link='/cats' name="cats" />
        </NavLinks>
        <Title>
          Some Cool Website
      </Title>
      </NavArea>
    </>
  )
}
export default Nav;
const NavLinks = styled.div`
grid-area: nav;
display: flex;
justify-content: flex-start;
align-items: flex-end;
`;
const Title = styled.h1`
display: flex;
justify-content: center;
grid-area: header
font-size: 40px;
color: #00A6FB;
font-family: 'Permanent Marker', serif;
`;
const NavArea = styled.div`
display: grid;
grid-template-columns: 33.3% auto 33.3%;
grid-template-areas: "nav header other";
background-color: #6622CC;
@media (max-width: 926px) {
  grid-template-columns: auto ;
  grid-template-areas: "header" "nav";
}
`;