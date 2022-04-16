import { styled } from '@mui/system';
import React from 'react';

const StyledFooter = styled('div')`
 direction:rtl;
 width: 100%;
 height: 510px;
 background-color: #22385B;
 color: white;
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 gap: 7rem;
 & .column {
  display: flex;
  flex-direction: column;
  font-size: 18px;
  text-align: right;
  & a {
    text-align: right;
    color: #FFFFFF;
    margin: 1rem;
    text-decoration: none;
  }
  & .icons{
    display: flex;
    flex-direction: row;
    button{
      border-radius: 100%;
      background-color: white;
      height: 48px;
      width:48px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      & img{
        width:14px;
        height: 14px;
      }
    }
  }
 }`
 
function Footer() {
 return ( 
  <StyledFooter>
     <div className="column">
     <h1 className="mb-5">هولدینگ نکویی</h1>
     <p style={{ width: '344px' }} >
      لورم ایپسوم متن ساختگی با تولید سادگی 
     نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
      چاپگرها و متون بلکه روزنامه
      و</p>
     <div className="icons mt-4">
      <button ><img src="asset\icons\SVG\instagram.svg" alt=""/></button>
      <button ><img src="asset\icons\SVG\instagram.svg" alt=""/></button>
      <button ><img src="asset\icons\SVG\instagram.svg" alt=""/></button>
      <button ><img src="asset\icons\SVG\instagram.svg" alt=""/></button>
      <button ><img src="asset\icons\SVG\instagram.svg" alt=""/></button>

     </div>
    </div>
    <div className="column">
     <h2>دسترسی سریع</h2>
     <a href="">لینک</a>
     <a href="">لینک</a>
     <a href="">لینک</a>
     <a href="">لینک</a>
    </div>
    <div className="column">
     <h2>لینک های منتخب</h2>
     <a href="">لینک</a>
     <a href="">لینک</a>
     <a href="">لینک</a>
     <a href="">لینک</a>
   </div>
  </StyledFooter>
  );
}

export default Footer;
