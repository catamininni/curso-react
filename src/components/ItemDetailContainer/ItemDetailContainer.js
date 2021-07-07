import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [localProduct, setLocalProduct] = useState([]);
    const {id} = useParams();
    
    useEffect(  () => {
        const producto = [
            {
              id: 1, 
              name: 'Computadora Mac',
              price: 300000,
              img:"./images/apple1.jpeg",
              description:"Computadora Mac. Caracteristicas color grey space 13 inch. Estado: usada pero en perfectas condiciones."
            },
            {
              id: 2, 
              name: 'Computadora Lenovo',
              price: 250000,
              img:"./images/lenovo-01-2.jpeg",
              description:"Computadora Lenovo. Color gris oscuro, sin usar y con 258 espacio de memoria."
             },
             {
              id: 3, 
              name: 'Computadora Asus',
              price: 200000,
              img:"./images/asus.jpg",
              description:"Computadora Asus. Color gris claro, espaciado, usada con caja abierta, 13 inch ."
             }
                        ]

        const productId = productList.filter(item => item.id == id);
        const [filteredProduct] = productId; 

        const getProducto = (producto) =>{
         return new Promise((resolve,reject) => {
                setTimeout(() => {
                resolve(producto);
                }, 1000);
            });
        }
        getProducto(producto)
            .then(result=>setLocalProduct(result))
    },[])

    return (
        <div className="container-fluid container__IDT">{
            <ItemDetail id= {localProduct.id}  
            name= {localProduct.name} 
            price={localProduct.price} 
            img={localProduct.img} 
            description={localProduct.description}/>
        }</div>
    );
};

export default ItemDetailContainer;