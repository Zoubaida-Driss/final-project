import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div> <ul className="nav">
    {/* <li className="nav-item">
   <Link to={"/"}><a className="nav-link active" href="#">Accueil</a></Link>   
    </li> */}
     
    <li className="nav-item">
    <Link to={"/listAssociation"}> <a className="nav-link" href="#">Associations</a></Link>  
    </li>
    <li className="nav-item">
    <Link to={"/add"}> <a className="nav-link" href="#">+ Association</a></Link>  
    </li>
    {/* <li className="nav-item">
    <Link to={"/listProjet"}> <a className="nav-link" href="#">Projets</a></Link>  
    </li>
    <li className="nav-item">
    <Link to={"/addProjet"}> <a className="nav-link" href="#">+ Projet</a></Link>  
    </li>
    <li className="nav-item">
    <Link to={"/addUser"}> <a className="nav-link" href="#">+ User</a></Link>  
    </li> */}
    <li className="nav-item">
    <a className="nav-link" href="#">Logout</a>
    </li>
    
    
   
      
        
       
  </ul>
  
  </div>
  )
}

export default Nav