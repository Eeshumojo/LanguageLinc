import React from 'react';
import '../App.css';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
        <video src="videos/video-2.mp4" autoPlay loop muted />
        <h1>LanguageLinc: Bridging the world’s languages with AI Education</h1>
        <p>Convert videos with one click</p>
        <div className='main-btns'>
            {/* <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
            </Button> */}
            
            
        </div>
    </div>
  )
}

export default MainSection