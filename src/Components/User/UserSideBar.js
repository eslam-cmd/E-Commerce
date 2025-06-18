import React from 'react'
import { Link } from 'react-router-dom'

const UserSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/User/AllOrders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-1 border-bottom p-2 mx-auto text-center">
                        Order management
                    </div>
                </Link>
                <Link to="/User/FavoriteProducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Favorite products
                    </div>
                </Link>
                <Link to="/User/AllAddresses" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Personal addresses
                    </div>
                </Link>

                <Link to="/User/Profile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Profile
                    </div>
                </Link>


            </div>
        </div>
    )
}
export default UserSideBar