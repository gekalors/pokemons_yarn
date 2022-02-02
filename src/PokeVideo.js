import React from 'react';

import pokemon_back from './videos/pokemon_background.mp4'
function Pokemon_Video(){
 return(
     <div>
         <video 
         autoPlay
         loop
         muted
         style={
             {position: "absolute",
             margin:"0",
             width: "100%",
             left:"50%",
             top:"50%",
             height:"100%",
             objectFit: "cover",
             transform: "translate(-50%, -50%)",
             zIndex: "-1",
             overflowY:"hidden",
             paddingBottom: "0",
        



            }
    }
             
         
         >
             <source src={pokemon_back} type="video/mp4"/>
         </video>

     </div>
 )
}
export default Pokemon_Video;