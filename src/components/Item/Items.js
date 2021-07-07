import React from 'react'
import './Item.css'
import '../ItemList/ItemList'
import Counter from'../Counter/Counter'

const Items = ({name, price, img, stock}) => {
    return(
        <div className='card'>
            <h1>{name}</h1>
            <img src={img} alt='' width='700px' height='300px'/>
            <h2>${price}</h2>
            <h1>{stock}</h1>

        </div>
    )
}

export default Items;