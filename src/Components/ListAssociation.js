import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAssociation } from "../redux/actions";

const ListAssociation = ({ associations }) => {
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  
  return (
    <div>
      <div className="wrapper">
        <div className="main-panel">
          {/* Navbar */}
          <Nav></Nav>
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
          <div
            style={{
              width: "1000px",
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
                    {/* les elements de la liste ici */}

                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-center">id</th>
                          <th>Nom D'association </th>
                          <th>email</th>
                          <th>Date de création</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {associations.map((association, index) => (
                          <tr data-index={index}>
                            <td>{association.id}</td>

                            <td>{association.nomAssociation}</td>
                            <td>{association.email}</td>
                            <td>{association.datecreation}</td>
                            <td className="td-actions ">
                              <Link to={`/association/${association.id}`}>
                                <button
                                  type="button"
                                  rel="tooltip"
                                  className="btn btn-info btn-sm  btn-round btn-icon"
                                >
                                  <i className="tim-icons icon-single-02" />
                                </button>
                              </Link>
                              <Link to={`/editAssociation/${association.id}`}>
                                {" "}
                                <button
                                  type="button"
                                  rel="tooltip"
                                  className="btn btn-success btn-sm btn-round btn-icon"
                                >
                                  <i className="tim-icons icon-settings" />
                                </button>
                              </Link>

                              <button
                                data-toggle="modal"
                                data-target="#exampleModal"
                                type="button"
                                rel="tooltip"
                                className="btn btn-danger btn-sm btn-round btn-icon"
                              >
                                <i className="tim-icons icon-simple-remove" />
                              </button>

                              <div
                                class="modal fade"
                                id="exampleModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div class="modal-dialog" role="document">
                                  <div class="modal-content">
                                    <div class="modal-header">
                                      <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                      >
                                        Supprimer
                                      </h5>
                                      <div class="modal-body">
                                        <p>
                                          voulez vous supprimer l'association ?
                                        </p>
                                      </div>
                                      <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-hidden="true"
                                      >
                                        <i class="tim-icons icon-simple-remove"></i>
                                      </button>
                                    </div>
                                    <div class="modal-body">...</div>
                                    <div class="modal-footer">
                                      <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          dispatch(
                                            deleteAssociation(association.id)
                                          )
                                        }
                                        data-dismiss="modal"
                                        class="btn btn-primary"
                                      >
                                        oui
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAssociation;
