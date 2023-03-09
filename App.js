
import './App.css';

function App() { 

  return ( 

   <div className='App'> 
   <Family name1="jaison"/>
   <Family name1="johnson"/> 
   <Family name1="jose"/>
   </div>
  );
} 





export default App;  

function Family(props){ 


  return(<div className="Fam"> 
     <img src="#" alt="name"/> 
    <h1>{props.name1}</h1> 
     <p>d43</p>
   
  </div>)
}

