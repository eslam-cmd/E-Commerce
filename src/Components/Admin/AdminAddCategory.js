import React from 'react'
import { Row,Col } from 'react-bootstrap'
import avatar from "../../images/avatar.png"

const AdminAddCategory = () => {
    return (
        <div>
            <Row className='justify-content-start'>
                <div className='admin-content-text pb-4'>Add new category</div>
                <Col sm="8">
                    <div className='text-form pb-2'>Category image</div>
                    <img alt='' src={avatar} style={{width:"120px",height:"120px",cursor:"pointer"}}/>
                    <input type='text' className='input-form mt-3 px-3 d-block text-center' placeholder="Category name"/>
                </Col>
                <Col sm="8" className='d-flex justify-content-end'>
                    <button className='btn-save mt-2 d-inline'>Save changes</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddCategory