import React from 'react'
import { useParams } from 'react-router'
import NavBar from './NavBar';

const Association = ({data}) => {
  console.log(data)
  let { id } = useParams();
  const association =
   data.find(el=>el.id==id)
  return (



    <div>
          <div className="wrapper">
            {/* Sidebar */}
          {/* <SideBar></SideBar> */}
          <div className="main-panel">
            {/* Navbar
          <NavBar></NavBar> */}
            <div className="modal modal-search fade" id="searchModal" tabIndex={-1} role="dialog" aria-labelledby="searchModal" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="SEARCH" />
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <i className="tim-icons icon-simple-remove" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* End Navbar */}
            <div style={{width:"1000px",display:"inline-block",
  justifyContent: "center",
  marginBottom: "100px",
  marginTop: "80px"}}>
     
        <div class="row">
          
          <div class="col-12">
            <div class="card ">
              <div class="card-header">
                {/* <h4 class="card-title"> La liste des associations</h4> */}
              </div>
              <div class="card-body">
              <div class="card card-nav-tabs">
    <div class="card-header card-header-warning">
      les information 
    </div>
    <div class="card-body">
    
      
   
        <div className="col-12">
    <div className="card card-user">
      <div className="card-body">
        <p className="card-text">
        </p><div className="author">
          <div className="block block-one" />
          <div className="block block-two" />
          <div className="block block-three" />
          <div className="block block-four" />
          <a href="javascript:void(0)">
            <img className="avatar" src={association.img} alt="Card image cap"  />
            <h3 className="title">{association.nomAssociation}</h3>
          </a>
          <p  className="description">
          {association.description}
          </p>
        </div>
        <p />
        <div className="card-description">
        date de creation :{association.datecreation}
       
        </div>
        <div className="card-description">
        nom de presidente {association.nompresident}
       
        </div>
        <div className="card-description">
        adresse :{association.adresse}
        
        </div>
        <div className="card-description">
      
      email : {association.email} 
       </div>
        <div className="card-description">
      
       contact : {association.contact} 
        </div>
      </div>
      <div className="card-footer">
        <div className="button-container">
          <button href="javascript:void(0)" className="btn btn-icon btn-round btn-facebook">
            <i className="fab fa-facebook" />
          </button>
          <button href="javascript:void(0)" className="btn btn-icon btn-round btn-twitter">
            <i className="fab fa-twitter" />
          </button>
          <button href="javascript:void(0)" className="btn btn-icon btn-round btn-google">
            <i className="fab fa-google-plus" />
          </button>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
            </div>
          </div>
         
        </div>
      </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Association