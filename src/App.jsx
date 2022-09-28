import { useState, useEffect } from 'react';
import { Forms } from './components/Forms'
import Header from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'

function App() {
  
 const [pacientes, setPacientes] = useState([]);
 const [paciente, setPaciente]= useState({})

useEffect(()=>{
  const obtenerLS= ()=>{
    const pacientesLS= JSON.parse(localStorage.getItem('pacientes')) ?? []
   if(pacientesLS.length>0){
     setPacientes(pacientesLS);
   }
   
  }
  obtenerLS(); 
  

}, [])

 useEffect(()=>{
localStorage.setItem('pacientes', JSON.stringify(pacientes))

 },[pacientes])

 const eliminarPaciente= (id)=>{
  const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
  setPacientes(pacientesActualizados)
}
  return (
    <div className="App container mx-auto mt-20">
      <Header 

      
      />
      <div className='mt-12 md:flex'>
        <Forms 
          setPacientes= {setPacientes}
          paciente = {paciente}
          pacientes={pacientes}
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
       setPaciente= {setPaciente}
       eliminarPaciente= {eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App
