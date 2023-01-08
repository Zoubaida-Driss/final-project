import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Await,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Accueil from './Components/Accueil';
import Login from './Components/Login';
import Association from './Components/Association';
import ListAssociation from './Components/ListAssociation';
import { useState } from 'react';
import FilterAdress from './Components/FilterAdress';
import AddAssociation from './Components/AddAssociation';
import EditAssociation from './Components/EditAssociation';

function App() {
  const data = useSelector(state=>state.data)
  const [filterAdress, setFilterAdress] = useState("")
  console.log("filterAdress",filterAdress)
  const handlefilterchange=(val)=>{
    setFilterAdress(val)
    }
  return (
    <div className="App">
       <Router>
       {/* <FilterAdress></FilterAdress> */}
        <Routes>
         <Route path="/add" element={<AddAssociation></AddAssociation>}></Route>
          <Route path="/" element={<Accueil  filterAdress={filterAdress} handlefilterchange={handlefilterchange}  data={data.filter(el=>el.adresse.toLowerCase().includes(filterAdress.toLowerCase()))}></Accueil>} />
          {/* data={data.filter(el=>el.adresse.toLocaleLowerCase().includes(filterAdress.toLocaleLowerCase()))} */}
          <Route path="/login" element={<Login></Login>}></Route>
          {/* editAssociation */}
          <Route path="/editAssociation/:id" element={<EditAssociation data={data}/>}></Route>
          <Route path="/association/:id" element={<Association data={data}></Association>}></Route>
          <Route path="/listAssociation" element={<ListAssociation  associations={data}></ListAssociation>}></Route>

          </Routes>
          </Router>
    </div>
  );
}

export default App;
