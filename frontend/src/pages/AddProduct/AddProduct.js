import React from 'react';
import './addProduct.css';

function AddProduct() {

  // send product name, description, price, quantity, category, options and product image to the Spring Boot backend
  function sendProduct(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('description', e.target.description.value);
    formData.append('price', e.target.price.value);
    formData.append('quantity', e.target.quantity.value);
    formData.append('category', e.target.category.value);
    formData.append('options', e.target.options.value);
    formData.append('product_image', e.target.product_image.files[0]);

    fetch('http://localhost:8080/api/v1/items/newItem', {
      method: 'POST',
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        alert('Product added successfully!');
      } else {
        alert('Error adding product. Please try again.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

  return (

    <div className='middle_1'>
      <h1 className='title1'>Add Product</h1>
      <form onSubmit={sendProduct}>
        <table border="0">
          <tbody>
            <tr>
              <td className="input4">
                <h2>Name</h2>
              </td>
              <td colSpan="2">
                <input type="text" name="name" className="first" />
              </td>
            </tr>
            <tr>
              <td className="input4">
                <h2>Description</h2>
              </td>
              <td colSpan="3">
                <input type="text" name="description" className="second1" />
              </td>
            </tr>
            <tr>
              <td className="input4">
                <h2>Price</h2>
              </td>
              <td className="input3">
                <input type="text" name="price" className="third" />
              </td>
              <td className="input4">
                <h2 className="new">Quantity</h2>
              </td>
              <td>
                <input type="text" name="quantity" className="third" />
              </td>
            </tr>
            <tr>
              <td className="input4">
                <h2>Category</h2>
              </td>
              <td className="input3">
                <input type="text" name="category" className="third" />
              </td>
              <td className="input4">
                <h2 className="new">Options</h2>
              </td>
              <td>
                <input type="text" name="options" className="third" />
              </td>
            </tr>
            <tr>
              <td className="input4">
                <h2>Image</h2>
              </td>
              <td colSpan="3">
                <input
                  type="file"
                  accept="image/jpg"
                  name="product_image"
                  className="box3"
                  style={{ color: 'black' }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="4" className="input1">
                <input
                  type="submit"
                  className="btn2"
                  name="Add_product"
                  value="Add product"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default AddProduct;


