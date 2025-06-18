import React from 'react'
import { Col, Row } from 'react-bootstrap'
import deletion from "../../images/deletion.png"
import { Link } from 'react-router-dom'
export const UserAddressCard = () => {

    
    return (
        <div className="user-address-card my-3 px-2">
            <Row className="d-flex justify-content-between  ">
                <Col xs="6">
                    <div className="p-2">home</div>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                            <div className="d-flex mx-2">
                                <img
                                    alt=""
                                    className="ms-1 mt-2"
                                    src={deletion}
                                    height="17px"
                                    width="15px"
                                />
                                <Link to="/User/EditAdress" style={{textDecoration:"none"}}>
                                <p className="item-delete-edit"> Update</p>
                                </Link>    
                            </div>
                        
                        <div  className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deletion}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> Delete</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                            Aleppo Medan
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}>
                       phone number: 0958359136      
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Cairo",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        
                    </div>
                </Col>
            </Row>
        </div>
    )
}
