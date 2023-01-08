import React from 'react'
import NavBar from './NavBar'
import Carousel from "react-bootstrap/Carousel";
import CardAssociation from './CardAssociation';
import FilterAdress from './FilterAdress';
const Accueil = ({data,filterAdress,handlefilterchange}) => {
    console.log(data)
  return (
    <div>
    <div >
      {/* Sidebar */}

      <div className="main-panel">
        {/* Navbar */}
        <NavBar></NavBar>
        
        <div
          className="modal modal-search fade"
          id="searchModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="searchModal"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  placeholder="SEARCH"
                />
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Navbar */}
        
        <Carousel>
          <Carousel.Item>
            <img
              className=" w-100"
              style={{ width: "50px", height: "400px" }}
              src="https://as2.ftcdn.net/v2/jpg/02/09/43/97/1000_F_209439761_ST3D8ajw1yvInnURzrsyReYqAuPq3oSL.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" w-100"
              style={{ width: "0px", height: "400px" }}
              src="https://img.freepik.com/free-photo/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office_7861-2682.jpg?w=826&t=st=1670952470~exp=1670953070~hmac=15e89c87b81c6fc2b12a6786acf7e0a93382de425c875fd898fc630ad196a7ac"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" w-100"
              src="https://as1.ftcdn.net/v2/jpg/02/74/79/46/1000_F_274794608_nRKM9hhJpFvhQvavS16fsx6vIGDZSv85.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div
          style={{
            width: "1100px",
            display: "inline-block",
            justifyContent: "center",
            marginBottom: "100px",
            marginTop: "80px",
          }}
        >
          <div class="row">
            <div class="col-12">
              <div class="card ">
                <div class="card-header">
                  <h4 class="card-title"> La liste des associations</h4>
                </div>
                <div class="card-body">
                  <FilterAdress  filterAdress={filterAdress} handlefilterchange={handlefilterchange}></FilterAdress>
                  <div className="row">

                    {/* .map de tab des associations et passer association comme props */}
                    {
                        data.map(el=><div className="col-md-4 pl-md-1">
                        <CardAssociation association={el}/>
                      </div>)
                    }
                    {/* <div className="col-md-4 pr-md-1">
                      <CardAssociation />
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <CardAssociation />
                    </div>
                    <div className="col-md-4 pl-md-1">
                      <CardAssociation />
                    </div> */}
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

export default Accueil