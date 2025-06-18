import React from 'react'
import { Row } from 'react-bootstrap'

const SideFilter = () => {
return (
    <div className="mt-3">
        <Row>
        <div className="d-flex flex-column mt-2">
            <div className="filter-title">Category</div>
            <div className="d-flex mt-3">
                <input  type="checkbox" value="0" />
                <div className="filter-sub me-2 ">All</div>
            </div>

            <div className="d-flex mt-3">
                <input  type="checkbox" value="0" />
                <div className="filter-sub me-2 ">Home appliances</div>
            </div>
        
            <div className="d-flex mt-3">
                <input  type="checkbox" value />
                <div className="filter-sub me-2 ">Home appliances</div>
                </div>
            </div>

            
        <div className="d-flex flex-column mt-2">
            <div className="filter-title mt-3">Brand</div>
            <div className="d-flex mt-3">
                <input o type="checkbox" value="0" />
                <div className="filter-sub me-2 ">All</div>
            </div>

            <div className="d-flex mt-3">
                <input type="checkbox"  />
                <div className="filter-sub me-2 ">Apple</div>
            </div>

        </div>

        <div className="filter-title my-3">the price</div>
        <div className="d-flex">
        <p className="filter-sub my-2">from:</p>
        <input className="m-2 text-center" type="number" style={{ width: "50px", height: "25px" }}/>
        </div>

        <div className="d-flex">
        <p className="filter-sub my-2">to:</p>
        <input className="m-2 text-center"type="number"style={{ width: "50px", height: "25px" }}/>
        </div>
        
    </Row >
    </div >
)
}

export default SideFilter