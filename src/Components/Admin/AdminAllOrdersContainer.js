import React from 'react'
import AdminAllOrdersCard from './AdminAllOrdersCard'
import { Row } from 'react-bootstrap'

const AdminAllOrdersContainer = () => {
    return (
        <div>
            <div className='admin-content-text my-2'>Manage All Orders</div>
            <Row className='justify-content-center'>
                <AdminAllOrdersCard/>
                <AdminAllOrdersCard/>
                <AdminAllOrdersCard/>
            </Row>
        </div>
    )
}

export default AdminAllOrdersContainer
