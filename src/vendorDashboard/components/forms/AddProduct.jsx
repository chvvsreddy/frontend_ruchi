import React,{useState} from 'react';
import { API_URL } from '../../helpers/ApiPath';


const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleCategoryChange = (event)=>{
    const value = event.target.value;
      if(category.includes(value)){
        setCategory(category.filter((item)=> item !== value));
      }else{
        setCategory([...category, value])
      }
  }

  const handleBestSeller = (e) =>{
    const value = e.target.value ==='true'
    setBestSeller(value)
  }

  const handleImageUpload =(event)=>{
    const selectedImage = event.target.files[0];
    setImage(selectedImage)
}

  const handleAddProduct = async(e) => {
    e.preventDefault()
    try{
      const firmId = localStorage.getItem('firmId')
      const loginToken = localStorage.getItem("loginToken");
      if(!firmId || !loginToken){
        console.error("User not authenticated");
      }
      const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('bestSeller', bestSeller)
        formData.append('image', image)

        category.forEach((value)=>{
          formData.append('category', value)
        });

        const response = await fetch(`${API_URL}/product/add-product/${firmId}`,{
          method:'POST',
          body: formData
        })

        const data = await response.json();
        if(response.ok){
          alert("product added successfully")
        }

    }catch(error){
      //console.error(data.message);
      alert("Failed to add Product")
    }
  }

  return (
    <>
    <div className="w-6/12 p-6">
        <div className="border border-gray-900/10 p-8 bg-white rounded-xl">
          <h2 className="text-base font-bold leading-7 text-gray-900 mb-7">Add Product</h2>
     <form onSubmit={handleAddProduct}>
     <div className="mb-4">
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
        <div className="mt-2">
        <input name="productName" type="text" placeholder='Enter Product Name' value={productName} onChange={(e)=>setProductName(e.target.value)}
            className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"/>
        </div>
    </div>
     <div className="mb-4">
        <label htmlFor="area" className="block text-sm font-medium leading-6 text-gray-900">Price</label>
        <div className="mt-2">
        <input name="price" type="text" value={price} onChange={(e)=>setPrice(e.target.value)} className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"/>
        </div>
    </div>
    <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Category</label>
        <div className="mt-2 grid grid-cols-12">
            <div className='py-2 col-span-3'>
                <input name="veg" type="checkbox" value="veg" checked ={category.includes('veg')} onChange={handleCategoryChange} className="h-4 w-4 rounded focus:ring-indigo-600 mr-2" />
                <label htmlFor="" className="">Veg</label>
            </div>
            <div className='py-2 col-span-3'>
                <input name="non-veg" type="checkbox" value="non-veg" checked ={category.includes('non-veg')} onChange={handleCategoryChange} className="h-4 w-4 rounded focus:ring-indigo-600 mr-2" />
                <label htmlFor="" className="">Non-veg</label>
            </div>
        </div>
    </div>

    <div className="mb-4">
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Best Sellar</label>
        <div className="mt-2 grid grid-cols-12">
        <div className='py-2 col-span-3'>Yes <input type="radio" value="true" checked = {bestSeller=== true} onChange={handleBestSeller}/></div>
        <div className='py-2 col-span-3'>No <input type="radio" value="false" checked = {bestSeller=== false} onChange={handleBestSeller}/></div>     
        </div>
    </div>
    <div className="mb-4">
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
        <div className="mt-2">
        <input name="" type="text" value={description}  onChange={(e)=>setDescription(e.target.value)} className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"/>
        </div>
    </div>
    <div className="mb-4">
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
        <div className="mt-2">
          <input name="file-upload" type="file" onChange={handleImageUpload} />
              
              </div>
    </div>
    <button type="submit" className="rounded-md bg-indigo-600 p-3 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full" >Add Product</button>
     </form>
     </div>
     </div>
    </>
  )
}

export default AddProduct