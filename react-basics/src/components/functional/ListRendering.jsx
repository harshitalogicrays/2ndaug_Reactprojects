import React, { useState } from 'react'
import allproducts from '../../assets/productlist'

const ListRendering = () => {
    const fruits = ["apple","banana","pear","Papaya","mango","kiwi","apple"]
  
    const [products]=useState(allproducts)
    
    // console.log(products)
  return (
   <>
    {/* {fruits} */}

    {/* {fruits.map((item,i)=>{
        return <h1>{item}</h1>
    })} */}

    {/* {fruits.length== 0 && <h1>No Item Found</h1>}
    {fruits.map((item,i)=><h1 key={i}>{item}</h1>)} */}

    {/* {products.map((product)=><p key={product.id}>{JSON.stringify(product)}</p>)} */}

    {/* {products.map((product)=><p key={product.id}>{product.name}</p>)} */}

        <div  class="table-responsive" >
            <table class="table table-bordered table-striped table-hover" >
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th><th>Category</th><th>Price</th><th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length==0 && <tr><td colSpan={6}>No product found</td> </tr>}
                    {/* {products.map((product)=>
                        <tr key={product.id}>
                            <td scope="row">{product.id}</td>
                            <td>{product.name}</td>
                            <td><img src={product.image} height={50} width={50}/></td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                            <td>{product.stock}</td>
                        </tr>
                    )} */}
{/* 
            {products.map((product)=>{
                      return  <tr key={product.id}>
                                <td scope="row">{product.id}</td>
                                <td>{product.name}</td>
                                <td><img src={product.image} height={50} width={50}/></td>
                                <td>{product.category}</td>
                                <td>${product.price}</td>
                                <td>{product.stock}</td>
                            </tr>})} */}

             
            {products.map((product)=>{
                let {id,name,image,category,stock,price}=product
                      return  <tr key={id}>
                                <td scope="row">{id}</td>
                                <td>{name}</td>
                                <td><img src={image} height={50} width={50}/></td>
                                <td>{category}</td>
                                <td>${price}</td>
                                <td>{stock}</td>
                            </tr>} )}
                </tbody>
            </table>
        </div>
        

   </>
  )
}

export default ListRendering
