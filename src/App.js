import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [lineaSuperior,setLineaSuperior]=useState('');
  const [lineaInferior,setLineaInferior]=useState('');
  const [imagen,setImagen]=useState('');

  const textSuperior  = function(e) {
     setLineaSuperior(e.target.value);
  }
  const textInferior = function(e){
    setLineaInferior(e.target.value)
  }
  const cambioImagen = function(e){
    setImagen(e.target.value);
    console.log(e.target.value)
  }
  const btnExportar = function (e){
    html2canvas(document.querySelector("#memecito")).then(canvas => {
      console.log(lineaSuperior+" "+lineaInferior)
      var img= canvas.toDataURL("image/png");
      var link =document.createElement('a');
      link.download=`${lineaSuperior+lineaInferior+"#meme"}.png`;
      link.href=img;
      link.click();

  });
  }

  return (
    <div className="App">
      <h1>Generador de memes</h1>
     <select onChange={cambioImagen}>
       <option>Escoge una opcion</option>
       <option value="fire">Casa en llamas</option>
       <option value="futurama">Futurama</option>
       <option value="philosoraptor" >Philosoraptor</option>
       <option value="smart">Smart guy</option>
       <option value="matrix">Matrix</option>
       <option value="history">History channel</option>
     </select>
     <br />
         
         <input type="text" onChange={textSuperior} placeholder='Linea superior' />
         <input type="text" placeholder='Linea inferior' onChange={textInferior}/> <br />
         <button onClick={btnExportar}>Exportar</button>

         <div id='memecito'>
           <span className='span1' >{lineaSuperior}</span> <br />
           <span className='span2'>{lineaInferior}</span>
           <img src={"/imagenes/" + imagen + ".jpg"} alt="" />
         </div>

         <a className='my-link' href="https://briansotalin.github.io/mypage/">Powered by <i class="fas fa-dragon"></i>sota </a>

    </div>
  );
}

export default App;
