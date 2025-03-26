import React from 'react'

function List({name , price , description}) {
    console.log(name);
    
    return (
        <>
            <div className='headPriceDiv'>
                <h5 className='iteamHead'>{name}</h5>
                <h5 className='iteamHead'>${price}</h5>
            </div>
            <span className='desc'>{description}</span>
        </>
    )
}

export default List
