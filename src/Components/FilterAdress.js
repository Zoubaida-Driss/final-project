import React from 'react'

const FilterAdress = ({filterAdress,handlefilterchange}) => {
  return (
    <div> 
        {/* <ul className="navbar-nav ml-auto ">
    <li className="search-bar input-group">
      <button className="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal"><i className="tim-icons icon-zoom-split" />
        <input  value ={filterAdress} onChange={(e)=>handlefilterchange(e.target.value)} className="d-lg-none d-md-block"/>
      </button>
     
    </li>
  </ul> */}
   <input type="text" value ={filterAdress} onChange={(e)=>handlefilterchange(e.target.value)} />
  </div>
  )
}

export default FilterAdress