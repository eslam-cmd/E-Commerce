import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

export const UserAllOrders = () => {
    return (
        <div>
        <div className="admin-content-text pb-4">Hello Islam</div>
        <Row className='justify-content-between'>
            <UserAllOrderItem />
            <UserAllOrderItem />
            <UserAllOrderItem />
        </Row>
        </div>
    )
}
