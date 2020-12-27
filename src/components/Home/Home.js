import React from 'react'; 
import styled from 'styled-components'; 

const MenuItem = styled.div`
  color: #AFAFAF;
  padding: 5px;
  &:hover  {
    color: #000;
  }
`
const SubMenuItem = styled.div`
  color: #AFAFAF;
  padding: 5px;
  padding-left: 30px;
  &:hover  {
    color: #000;
  }
`

const Home = (props) => {
  return (
    <div>
        <MenuItem>About</MenuItem>
        <MenuItem>Feed</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>References</MenuItem>
        <br/>
        <div>
          <SubMenuItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</SubMenuItem>
          <SubMenuItem>sed do eiusmod tempor incididunt ut labore</SubMenuItem>
          <SubMenuItem>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </SubMenuItem>
          <SubMenuItem>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</SubMenuItem>
          <SubMenuItem>Lorem ipsum dolor sit amet, consectetur adipiscing elit</SubMenuItem>
          <SubMenuItem>sed do eiusmod tempor incididunt ut labore</SubMenuItem>
          <SubMenuItem>et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </SubMenuItem>
          <SubMenuItem>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</SubMenuItem>
        </div>
        <br/>
        <MenuItem>Contact</MenuItem>
    </div>
  )
}

export default Home; 