import React from 'react'
import UnopDropdown from "unop-react-dropdown";
import sort from "../../images/sort.png"
    const SearchResult = ({title}) => {

        const handler =()=>{

        }
    return (
        <div className='d-flex justify-content-between pt-3 px-2'>
            <div className='sub-title'>{title}</div>
                <div className='search-count-text d-flex'>
                <UnopDropdown
                onAppear={handler}
                onDisappearStart={handler}
                trigger={<p className='mt-2'>
                    <img width="20px" height="20px" className='ms-1' src={sort} alt=""/>
                    sort by
                </p>}
                delay={300}
                align="CENTER"
                hover>
                <div className='card-filter '>
                    <div className='border-bottom card-filter-item'>best seller</div>
                    <div className='border-bottom card-filter-item'>Most rated</div>
                    <div className='border-bottom card-filter-item'> Highest to lowest price</div>
                    <div className='border-bottom card-filter-item'> Lowest price to highest</div>
                </div>
            </UnopDropdown>
            </div>
        </div>
    )
}

export default SearchResult
