import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ParticleAnimation from 'react-particle-animation'
import NavigationBar from './navigationBar/NavigationBar'
import Header from './screens/header/Header'
import AboutMe from './screens/aboutMe/AboutMe'
import Technologies from './screens/technologies/Technologies'
import ContactMe from './screens/contactMe/ContactMe'
// import Projects from './screens/projects/Projects';



function App() {
  return (
    <div >
       {/* <Projects/> */}
       
      <NavigationBar />
      <Header/>
      <ParticleAnimation
      style = {{height: '96vh'}}
        background={{ r:21 , g:22 , b:23 , a:1}}
        particleSpeed = {0.3}
        particleRadius= {2}
        color = {{ r: 58, g: 317, b: 149, a: 255 }}
      />
      <AboutMe/>
     
      <Technologies/>

      <ContactMe/> 


    </div>
  );
}

export default App;
