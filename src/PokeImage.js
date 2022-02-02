import './App.css';
import React from 'react';
import pikachu_img from './images/pikachu.png';


import Pokemon_Canva from './PokeCanva';



function PokeImg() {
    return (
     <div id="Poke_image" className='Poke_div_class'>
    

          <img src={pikachu_img} onClick={'Click'} alt="" className="Poke_img_class" />
          {/* <img src={pikachu_img} alt="" className="Pokeback_img_class" /> */}
         


        </div>
        
    
)
}


export default PokeImg;
