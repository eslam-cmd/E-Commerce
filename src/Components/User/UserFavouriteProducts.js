import React from 'react'
import {Row } from 'react-bootstrap'
import ProductCard from '../Products/ProductCard'
import Pagenation from '../Utilities/Pagenation'
export const UserFavouriteProducts = () => {
    return (
        <div>
            <div className='admin-content-text pb-4'>Favorites list</div>
            <Row className="justify-content-start">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Row>
            <Pagenation/>
        </div>
    )
}
