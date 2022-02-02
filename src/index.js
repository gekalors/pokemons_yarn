import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './PokeImage';
import Pokemon_Name from './PokeName';
import reportWebVitals from './reportWebVitals';
import Pokemon_Video from './PokeVideo';
import Pokemon_Canva from './PokeCanva';
import Pokemon_TextArea from './PokeTextArea';
import Pokemon_Select from './PokeSelect';


ReactDOM.render(
  <React.StrictMode>
    <Pokemon_Video/>
    <Pokemon_Canva/>
    
    <Pokemon_TextArea/>
    <Pokemon_Select/>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
