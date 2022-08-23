import react from "react";
import { ReactCounter } from "./ReactCounter";
import { ReactSearch } from "./ReactSearch.js";
import { ReactList } from "./ReactList.js";
import { ReactItem } from "./ReactItem.js";
import { CreateReactButtom } from "../src/CreateReactButtom";
import MaterialTable from 'material-table';
import './App.css'


function App() {

  const ricts = [
    {
     title:'Usuario',
     field:'usuario'
    },
    {
     title:'ID',
     field:'id'
    },
    {
     title:'Moneda',
     field:'moneda'
    },
    {
     title:'Total',
     field:'total',
     type:"numeric"
    },
   ];

   const data =[
    { usuario: 'Jose', id: '#e212', moneda: 'Dolar', total: 1000 },
    { usuario: 'Jose', id: '#e212', moneda: 'Dolar', total: 1000 },
    { usuario: 'Jose', id: '#e212', moneda: 'Dolar', total: 1000 },
    { usuario: 'Jose', id: '#e212', moneda: 'Dolar', total: 1000 },
   ];

  return (
   <react.Fragment>
    <div>
    <MaterialTable 
      columns={ricts}
      data={data}
    />
    </div>
      <ReactCounter />    
      <ReactSearch />
      <ReactList>
        {ricts.map(rict => (
            <ReactItem key={rict.text} text={rict.text} />
        ))}
      </ReactList>
      <CreateReactButtom />      
   </react.Fragment>
  );
}

export default App;