import React from 'react'
import { Link } from 'react-router-dom'

const CardAssociation = ({association}) => {
  
  return (
    <div className="card" style={{width: '20rem',backgroundColor:"#32325d"}}>
    <img className="card-img-top" style={{height:"220px"}} src={association.img} alt="Card image cap" />
    <div className="card-body">
      <h3 className="card-title">{association.nomAssociation}</h3>
      <p className="card-text">{association.description}</p>
    
      <Link to={`/association/${association.id}`}><a href="#" className="btn btn-primary">info</a></Link>
    </div>
  </div>
  )
}

export default CardAssociation