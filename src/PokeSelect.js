import './Poke_Canvass.css';
import React, {Component} from 'react';
import Pokemon_TextArea from './PokeTextArea';




export default class Pokemon_Select extends Component{
  
    constructor(props){
      super(props);
      
      this.state = {
        isLoaded: false,
        pokemon_name: [],
        
      };
    }
    
  
    componentDidMount(){
       
        fetch('https://pokeapi.co/api/v2/pokemon?limit=' + 151)
              .then(response => response.json())
              .then(
                  (result) => {
              this.setState({
                  pvalue: 0,
                  isLoaded: true, 
                  pokemon_name: result.results,
              
              } );
         },
         
      (error)=>{
          this.setState({
              isLoaded: true,
              error
          });
      }
      )
    
      
  }
    _

    render(){
      
      const {error,isLoaded,pokemon_name,pokemon_gen}=this.state;
      if(error){
          return <p>Error {error.message}</p>
      }else if(!isLoaded){
          return <p>Loading...</p>
      }else{
          
              return(
              <div >
                  
            <select 
                  id="list_of_pokemons"
                  
                  placeholder='Choose a pokemon'
            style={
                {position: "absolute",
                margin:"0",
                width: "230px",
                left:"1%",
                top:"5%",
                height:"45px",
                objectFit: "cover",
                zIndex: "1",
                overflowY:"hidden",
                paddingBottom: "0",
                backgroundColor: "#ffdf00",
                fontSize: "22px",
                fontFamily: "Verdana",
           
   
   
   
               }
       }
                
            
            >
                
                {pokemon_name.map(pokemon=>(
                      <option key={pokemon.results}  >{pokemon.name}</option>
                      
                 ))}
                
                
            </select>
               
               </div>
               
              );
          }   
          
      }
     
      
  }


  