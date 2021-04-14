import React, { useState } from 'react';import './App.css';

const App=()=>{
  const [like, setLike] = useState(false)
  const image = like?'smile.png':'cry.png';
  const text = like?'Thank you so much !':'Make him better';
  const containerClass = like?'container-liked':'container-not-liked';
  const buttonClass = like?'btn-like btn-liked':'btn-like btn-not-liked';
  return(
    <div class={containerClass}>
    <img class='like-icon' src={image} alt='Logo'/>
    <button class={buttonClass} onClick={()=>setLike(!like)}>{text}</button>
    </div>
  )
}

export default App;
