import { styled } from '@mui/system';
import React from 'react';
const StyledHeader = styled('header')`
  height: 106px;
  padding: 1rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-direction: row;
  font-size: 1rem;
  align-items: center;
 .input-group{
  height: 48px;
  width: 106px;
  border-radius: 8px;
  margin-right: 15rem;
 }
 a{
  text-decoration: none;
 }
.rightnav {
  margin-right: 12rem;
 width: 60%;
 justify-content: space-between;
 display: flex;
 flex-direction: row;
 align-content: space-between;
  align-items: center;
 a {
  display: flex;
  color: #8B8B8B;
  :hover {
    color: #395E98;
  }
 }
}
.leftnav {
 width: 20%;
 display: flex;
 gap: 1rem;
 .user{
   border-radius: 8px;
   background-color: #395E98;
    height: 48px;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 .cart{
   border-radius: 8px;
   height: 48px;
   width: 48px;
   background-color: white;
   border: 1px #D3D3D3 solid;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 img{
   height: 30px;
   width: 30px;
 }
}`

export function Header ()    {
    return(
        <StyledHeader>
            <nav className="rightnav">
                <a href="">
                    <img src="https://picsum.photos/48" alt=""/>
                </a>
                <a href="">صفحه اصلی</a>
                <a href="">وبلاگ</a>
                <a href="">دوره ها</a>
                <a href="">خدمات</a>
                <a href="">درباره ما</a>
                <a href="">تماس با ما</a>
                <div className="input-group ">
                    <input type="search" className="form-control" placeholder="جستجو..."/>
                </div>
            </nav>
            <nav className="leftnav">
                <div className="cart">
                    <img src="asset\shopping_cart_512px.png" alt=""/>
                </div>
                <div className="user">
                    <img src="asset\user_512px.png" alt=""/>
                </div>
            </nav>
        </StyledHeader>
    )
}
