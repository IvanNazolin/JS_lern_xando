import logo from './logo.svg';
import './App.css';



function Square({value}) {
  function handleClick(){
    console.log("clck");
  }


  return <button className="square" onClick={handleClick} >{value}</button>;
}

export default function Board() {
  return(
  <>
    <div className='board-row'>
      <Square value="1"/>
      <Square value="2"/>
      <Square value="3"/>
      <br></br>
      <Square value="4"/>
      <Square value="5"/>
      <Square value="6"/>
      <br></br>
      <Square value="7"/>
      <Square value="8"/>
      <Square value="9"/>
      <br></br>
    </div>
  </>
  );
}

