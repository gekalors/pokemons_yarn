import './Poke_Canvass.css';
import React from 'react';
import pokemon_canvas from './images/pokemon_canva.png';




function Pokemon_Canva() {
    return (
     <div id="Poke_image" className='CanvaClass'>

          <img src={pokemon_canvas} alt="" className='Poke_backk' />


        </div>
        
    
)
}


export default Pokemon_Canva;