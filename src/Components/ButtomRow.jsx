import React from 'react';
import { styled } from '@mui/material/styles';


const MyBottomRow = styled('div')`
 background-color: #EBEBEB;
 color: #3D3D3D;
 width: 100%;
 height: 50px;
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 align-items: center;
 & a {
  color: #3D3D3D;
  display: flex;
  text-decoration: none;
 }
`

function BottomRow() {
 return ( 
  <MyBottomRow>
    <a href="">Terms of Service</a>
    <a href="">Privacy Policy</a>
    <a href="">© 2020 Mockup. All Rights Reserved.</a>
  </MyBottomRow>
  );
}

export default BottomRow;
