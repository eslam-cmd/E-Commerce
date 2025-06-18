import React from 'react'
import AdminAllProductCard from './AdminAllProductCard'
import { Row } from 'react-bootstrap'
const AdminAllProductContainer = () => {
    return (

        <div> 
            <div className='admin-content-text my-2'>Manage All Orders</div>
        <Row className='justify-content-start'>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
        </Row>
    </div>
    )
}

export default AdminAllProductContainer
