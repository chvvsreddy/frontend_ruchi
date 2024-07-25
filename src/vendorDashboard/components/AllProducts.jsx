import React,{ useState, useEffect } from 'react';
import { API_URL } from '../helpers/ApiPath';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    const productsHandlar = async() =>{       
        const firmId = localStorage.getItem('firmId');

        try{
            const response = await fetch(`${API_URL}/product/${firmId}/products`);
            const newProductsData = await response.json();

            setProducts(newProductsData.products);
            console.log(newProductsData);

        }catch(error){
            console.log("Failed fetch products", error)
        }

   }

   useEffect(()=>{     
        productsHandlar()
    },[])

    const deleteProductById = async (productId)=>{
        try{
            const response = await fetch(`${API_URL}/product/${productId}`,{
                method:'DELETE'
            })
            if(response.ok){
                setProducts(products.filter(product => product._id !== productId));
                confirm("are sure you wnat to delete?")
                alert("Product Deleted successfully")
            }
        }catch(error){
            console.log('Fialed to delete')
        }

    }

  return (
    <>
    <div className="w-full p-6">
        <div className="border border-gray-900/10 p-8 bg-white rounded-xl">
          <h2 className="text-base font-bold leading-7 text-gray-900 mb-7">
            All Products
          </h2>
          {products.length === 0 ? (
            <p>No products</p>
          ):(
            <table class="table-auto w-full">
                <thead>
                    <th className='border px-4 py-2 text-start'>Product Name</th>
                    <th className='border px-4 py-2 text-start'>Price</th>
                    <th className='border px-4 py-2 text-start'>Image</th>
                    <th className='border px-4 py-2 text-start'>Action</th>
                </thead>
                <tbody>
                        {
                            products.map((item)=>{
                                return(
                                     <tr key={item._id}>
                                        <td className='border px-4 py-2'>{item.productName}</td>
                                        <td className='border px-4 py-2'>{item.price}</td>
                                        <td className='border px-4 py-2 img-m-full'>
                                            {item.image && (
                                                <img  src={`${API_URL}/uploads/${item.image}`} alt={item.productName}/>
                                            )
                                            }
                                        </td>
                                        <td className='border px-4 py-2'>
                                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>deleteProductById(item._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                      </tbody>
            </table>
          )}
        </div>
    </div>
    </>
  )
}

export default AllProducts