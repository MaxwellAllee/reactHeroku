import styled from 'styled-components';
import{Link, useLocation} from 'react-router-dom'

const NavTab =({link, name})=>{
  const location = useLocation();

  return(
  <NavItem background={location.pathname === link}>
    <Link to ={link} >
      {name}
    </Link>
  </NavItem>
)};
export default NavTab;

const NavItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({background})=> !background ? "#7D7D7D" : "white"};
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-top: 1px solid black;
  padding: 0 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 1px;
  height: 30px;
  @media (max-width: 500px) {
    width: 50%;
    margin-left: 1px;
  }
  a {
    display: flex;
    text-decoration: none;
    color: ${({background})=> !background ? "white" : "black"};
    align-items: center;
  }
`;
