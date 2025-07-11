import React from 'react'
import { Row,Col } from 'react-bootstrap'
import deletion from "../../images/deletion.png"

const UserProfile = () => {
    return (
        <div>
            <div className="admin-content-text">Personal page</div>

            <div className="user-address-card my-3 px-2">
                <Row className="d-flex justify-content-between pt-2">
                    <Col xs="6" className="d-flex">
                        <div className="p-2">name:</div>
                        <div className="p-1 item-delete-edit">Islam hadaya</div>
                    </Col>
                    <Col xs="6" className="d-flex justify-content-end">
                        <div  className="d-flex mx-2">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deletion}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> Update</p>
                        </div>
                    </Col>
                </Row>

                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">phone number: 0958359136</div>
                        <div className="p-1 item-delete-edit"></div>
                    </Col>
                </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">Email: hdayaaslam34@gmail.com</div>
                        <div className="p-1 item-delete-edit"></div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col xs="10" sm="8" md="6" className="">
                        <div className="admin-content-text">change password</div>
                        <input
                            type="password"
                            className="input-form d-block mt-1 px-3"
                            placeholder="Enter the old password"
                        />
                        <input
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Enter the new password"
                        />
                        <input
                            
                            type="password"
                            className="input-form d-block mt-3 px-3"
                            placeholder="Confirm new password"
                        />
                    </Col>
                </Row>

                <Row>
                    <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
                        <button className="btn-save d-inline mt-2 ">Save the password</button>
                    </Col>
                </Row>
            </div>
        
        </div>
    )
}

export default UserProfile
