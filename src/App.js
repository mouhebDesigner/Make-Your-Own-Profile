import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
// import myImage from './images/sam.jpg';
import MyComponent from './block';
import MyButton from './MyButton';
import Wrapper from './Wrapper';
import Photo from './Photo';
import Title from './Title';
import img from './images/sam.jpg'
import MyProfile from './MyProfile';
function App() {
  let firstname = "Mouheb";
  let lastname = "abderrahim";
  return (

      <MyProfile Photo ={img} FirstName = "Mouheb" LastName="Abderrahim" ProfileLink = "www.faceboook.com"/>
 
    
  );
}

export default App;
