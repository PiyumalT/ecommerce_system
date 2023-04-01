import React from 'react';
import './addProduct.css';

function AddProduct() {
  return (
   
    <div>
      <h1>Add product</h1>
      <form action="add_item.php" method="post" enctype="multipart/form-data">
        <table border="0">
          <tbody>
            <tr>
              <td className="input4">
                <h2>Name</h2>
              </td>
              <td colspan="3">
                <input type="text" name="name" className="first" />
              </td>
            </tr>
            <tr>
              <td>
                <h2>Description</h2>
              </td>
              <td colspan="3">
                <input type="text" name="description" className="second" />
              </td>
            </tr>
            <tr>
              <td>
                <h2>Price</h2>
              </td>
              <td className="input3">
                <input type="text" name="price" className="third" />
              </td>
              <td>
                <h2 className="new">Quantity</h2>
              </td>
              <td>
                <input type="text" name="quantity" className="third" />
              </td>
            </tr>
            <tr>
              <td>
                <h2>Category</h2>
              </td>
              <td className="input3">
                <input type="text" name="category" className="third" />
              </td>
              <td>
                <h2 className="new">Options</h2>
              </td>
              <td>
                <input type="text" name="options" className="third" />
              </td>
            </tr>
            <tr>
              <td>
                <h2>Image</h2>
              </td>
              <td colspan="3">
                <input
                  type="file"
                  accept="image/jpg"
                  name="product_image"
                  className="box"
                  style={{ color: 'black' }}
                />
              </td>
            </tr>
            <tr>
              <td colspan="4" className="input1">
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


