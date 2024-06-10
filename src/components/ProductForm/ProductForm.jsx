import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import Toast from "../../utils/Toast";
import Form from 'react-bootstrap/Form';
import "./productForm.scss";

const ProductForm = ({ title, onAddProduct, isEdit, productToEdit, onEditProduct, children }) => {
  const [product, setProduct] = useState({
    productName: "",
    color: "",
    category: "HOME",
    price: "",
    ...productToEdit,
  });


  useEffect(() => {
    setProduct({ ...product, ...productToEdit });
  }, [productToEdit]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const valueCapitalLetter = value.charAt(0).toUpperCase() + value.slice(1);

    name == "productName" &&
      setProduct({
        ...product,
        [name]: valueCapitalLetter,
      });

    name == "color" &&
      setProduct({
        ...product,
        [name]: valueCapitalLetter
      });

    (name == "price" || name == "category") &&
      setProduct({
        ...product,
        [name]: value,
      });
  };

  const handleAdd = (event) => {
    event.preventDefault();

    if (product.productName && product.color && product.price) {
      const newProduct = {
        ...product,
      };

      if (isEdit) {
        onEditProduct(newProduct);
        Toast.fire({
          icon: "success",
          title: "Product successfully upgraded!",
        });
      } else {
        onAddProduct(newProduct);
        Toast.fire({
          icon: "success",
          title: "New product added!",
        });
      }

      isEdit && newProduct ? onAddProduct(newProduct) : null;

      setProduct({
        product_name: "",
        color: "",
        category: "",
        price: "",
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "All fields are required",
      });
    }
  };

  return (
    <aside className="form-container">
      <h1 className="form__title">{title}</h1>

      <form className="form" onSubmit={handleAdd}>
        <label htmlFor="productName">PRODUCT NAME</label>
        <input
          type="text"
          name="productName"
          className="form__product-name"
          onChange={handleChange}
          placeholder="your product name"
          value={product.productName}
          autoComplete="off"
        />

        <label htmlFor="color">COLOR</label>
        <input
          type="text"
          name="color"
          className="form__product-color"
          onChange={handleChange}
          placeholder="silver, black, white, etc"
          value={product.color}
          title="Letters only"
          autoComplete="off"
        />

        <label htmlFor="category">CATEGORY</label>
        <Form.Select
          aria-label="Default select example"
          size="sm"
          name="category"
          className="form__product-category"
          onChange={handleChange}
        >
          <option>Choose a category</option>
          <option value="HOME">Home</option>
          <option value="MUSIC">Music</option>
          <option value="BABY">Baby</option>
          <option value="BOOKS">Books</option>
        </Form.Select>

        <label htmlFor="price">PRICE</label>
        <input
          type="number"
          min={0}
          name="price"
          className="form__product-price"
          onChange={handleChange}
          placeholder="$1999.99"
          value={product.price}
        />

        {children}
      </form>
    </aside>
  );
};

ProductForm.propTypes = {
  title: PropTypes.string.isRequired, 
  onAddProduct: PropTypes.func.isRequired, 
  isEdit: PropTypes.bool.isRequired, 
  productToEdit: PropTypes.object, 
  onEditProduct: PropTypes.func.isRequired, 
  children: PropTypes.node 
};

export default ProductForm;
