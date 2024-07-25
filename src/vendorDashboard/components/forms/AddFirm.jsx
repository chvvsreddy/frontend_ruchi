import React, { useState } from "react";
import { API_URL } from "../../helpers/ApiPath";

const AddFirm = () => {
  const [formData, setFormData] = useState({
    firmName: "",
    area: "",
    category: [],
    region: [],
    offer: "",
    file: null,
  });

  const onChangeHandler = (event) => {
    if (event.target.name === "category") {
      let copy = { ...formData };
      if (event.target.checked) {
        copy.category.push(event.target.value);
      } else {
        copy.category = copy.category.filter((el) => el !== event.target.value);
      }
      setFormData(copy);
    } else if (event.target.name === "region") {
      let copy = { ...formData };
      if (event.target.checked) {
        copy.region.push(event.target.value);
      } else {
        copy.region = copy.region.filter((el) => el !== event.target.value);
      }
      setFormData(copy);
    }else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }    
  };

  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setFile(selectedImage);
   
  };

  const handleFirmSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const loginToken = localStorage.getItem("loginToken");
      if (!loginToken) {
        console.error("User not authenticated");
      }
  
      const response = await fetch(`${API_URL}/firm/add-firm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: `${loginToken}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log(data);
        alert("Firm added Successfully");
      } else if (data.message === "vendor can have only one firm") {
        alert("Firm Exists 🥗. Only 1 firm can be added  ");
      } else {
        alert("Failed to add Firm1");
      } 
      const firmId = data.firmId;
      localStorage.setItem('firmId', firmId)

    } catch (error) {
      console.error("failed to add Firm2");
      alert("failed to add Firm2");
    } finally {
    }
  };

  return (
    <>
      <div className="w-6/12 p-6">
        <div className="border border-gray-900/10 p-12 bg-white rounded-xl">
          <h2 className="text-base font-bold leading-7 text-gray-900 mb-7">
            Add Firm
          </h2>
          <form onSubmit={handleFirmSubmit}>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Firm Name
              </label>
              <div className="mt-2">
                <input
                  name="firmName"
                  type="text"
                  placeholder="Enter Firm Name"
                  onChange={onChangeHandler}
                  value={formData.username}
                  className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="area"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Area
              </label>
              <div className="mt-2">
                <input
                  name="area"
                  type="text"
                  onChange={onChangeHandler}
                  value={formData.area}
                  className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Category
              </label>
              <div className="mt-2 relative flex gap-x-3">
                <div>
                  <input
                    name="category"
                    type="checkbox"
                    value="veg"
                    onChange={onChangeHandler}
                    checked={formData.category.indexOf("veg") !== -1}
                    className="h-4 w-4 rounded focus:ring-indigo-600 mr-2"
                  />
                  <label htmlFor="" className="">
                    Veg
                  </label>
                </div>
                <div>
                  <input
                    name="category"
                    type="checkbox"
                    value="non-veg"
                    onChange={onChangeHandler}
                    checked={formData.category.indexOf("non-veg") !== -1}
                    className="h-4 w-4 rounded focus:ring-indigo-600 mr-2"
                  />
                  <label htmlFor="" className="">
                    Non-veg
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Region
              </label>
              <div className="mt-2 relative flex gap-x-3">
                <div>
                  <input
                    name="region"
                    type="checkbox"
                    value="south-indian"
                    onChange={onChangeHandler}
                    checked={formData.region.indexOf("south-indian") !== -1}
                    className="h-4 w-4 rounded focus:ring-indigo-600 mr-2"
                  />
                  <label htmlFor="" className="">
                    South indian
                  </label>
                </div>
                <div>
                  <input
                    name="region"
                    type="checkbox"
                    value="north-indian"
                    onChange={onChangeHandler}
                    checked={formData.region.indexOf("north-indian") !== -1}
                    className="h-4 w-4 rounded focus:ring-indigo-600 mr-2"
                  />
                  <label htmlFor="" className="">
                    North indian
                  </label>
                </div>
                <div>
                  <input
                    name="region"
                    type="checkbox"
                    value="chinese"
                    onChange={onChangeHandler}
                    checked={formData.region.indexOf("chinese") !== -1}
                    className="h-4 w-4 rounded focus:ring-indigo-600 mr-2"
                  />
                  <label htmlFor="" className="">
                    Chinese
                  </label>
                </div>
                <div>
                  <input
                    name="region"
                    type="checkbox"
                    value="bakery"
                    onChange={onChangeHandler}
                    checked={formData.region.indexOf("bakery") !== -1}
                    className="h-4 w-4 rounded focus:ring-indigo-600 mr-2"
                  />
                  <label htmlFor="" className="">
                    Bakery
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor=""
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Offer
              </label>
              <div className="mt-2">
                <input
                  name="offer"
                  type="text"
                  onChange={onChangeHandler}
                  value={formData.offer}
                  className="block w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            {/* <div className="mb-4">
        <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">Image</label>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">            
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input name="file" type="file" onChange={handleImageUpload}  />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
    </div>  */}
            <button
              type="submit"
              className="rounded-md bg-indigo-600 p-3 font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
            >
              Add Firm
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFirm;
