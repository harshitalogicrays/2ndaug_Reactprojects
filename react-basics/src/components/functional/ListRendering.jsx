import React from 'react'
import Image1 from '../../assets/images/a.jpg'
import Image2 from '../../assets/images/b.jpg'
import Image3 from '../../assets/images/d.jpg'
import Image4 from '../../assets/images/c.jpeg'
import Image5 from '../../assets/images/about-image.png'
import Image6 from '../../assets/images/car1.jpg'
import Image7 from '../../assets/images/chair2.png'
import Image8 from '../../assets/images/chair5.jpg'
import Image9 from '../../assets/images/findcar.jpg'

const ListRendering = () => {
    const fruits = ["apple","banana","pear","Papaya","mango","kiwi","apple"]
    const products = [
        {id:1,name:"product1",category:"cat1",image:Image1,price:9000,stock:10},
        {id:2,name:"product2",category:"cat3",image:Image2,price:1000,stock:1},
        {id:3,name:"product3",category:"cat2",image:Image3,price:9000,stock:100},
        {id:4,name:"product4",category:"cat1",image:Image4,price:2000,stock:0},
        {id:5,name:"product5",category:"cat2",image:Image5,price:9000,stock:20},
        {id:6,name:"product6",category:"cat1",image:Image6,price:3000,stock:90},
        {id:7,name:"product7",category:"cat1",image:Image7,price:900,stock:20},
        {id:8,name:"product8",category:"cat3",image:Image8,price:100,stock:10},
        {id:9,name:"product9",category:"cat1",image:Image9,price:9000,stock:1}
    ]
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
