
import React from 'react';

var pokename = "Pikachu";
function Pokemon_Name(){
 return(
     <div>
         <h1 style={{
             position:"absolute",
             display: 'flex',
             font: '24px',
             fontFamily:'Verdana',
             width: "66%",
             justifyContent: "center",
             top: "15%",
             color: 'yellow',
             overflowY:"hidden",
             paddingBottom:"0",
             margin:"0",
         }}>{pokename}</h1>

     </div>
 )
}
export default Pokemon_Name;