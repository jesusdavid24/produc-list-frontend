import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductForm from "./components/ProductForm";
import Header from "./components/Header";
import TableForm from "./components/Table";
import Contact from "./components/Contact";
import "./App.scss";

import {
  getProduct,
  postProduct,
  editProduct,
  deleteProduct
} from "./api/product";


function App() {
  const [viewPage, setViewPage] = useState("products");
  const [showForm, setShowForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    getProduct().then((x) => {
      setProducts(x);
      setIsLoading(false);
    });
  }, []);

  const handleAddButtonClick = () => {
    !showForm && (setIsEdit(false), setProductToEdit(null));
    setShowForm(!showForm);
  };

  const handleViewPage = (newViewPage) => {
    setViewPage(newViewPage);
  };

  const handleAddProduct = async (newProduct) => {
    const { id } = newProduct;
    if (isEdit) {
      const data = await editProduct(id, newProduct);

      const editedProductsList = products.map((product) =>
        product.id == data.id ? data : product
      );

      setProducts(editedProductsList);
      setShowForm(false)

    } else {
      const data = await postProduct(newProduct);
      setProducts([...products, data]);
      setShowForm(false)
    }
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id), setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (productToEdit) => {
    setProductToEdit(productToEdit);
    setIsEdit(true);
    setShowForm(true);
  };

  return (
    <div className="container-fluid p-0">
      <Header handleViewPage={handleViewPage} />

      {viewPage === "products" ? (
        <div className="app-form">
          <div className="table-container">
            <div className="presentation">
              <h1 className="presentation__title">Products List</h1>
              <button className="presentation__add-button" onClick={handleAddButtonClick}>
                {showForm ? "Hide" : "Add"}
              </button>
            </div>

            {isLoading ? (
              <div className="dot-spinner">
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
                <div className="dot-spinner__dot"></div>
              </div>
            ) : (
              <TableForm
                products={products}
                onDeleteProduct={handleDeleteProduct}
                onEditProduct={handleEditProduct}
              />
            )}

          </div>

          {showForm && (
            <ProductForm
              title={isEdit ? "Edit Product" : "Add Product"}
              products={products}
              isEdit={isEdit}
              onAddProduct={handleAddProduct}
              onEditProduct={handleEditProduct}
              productToEdit={productToEdit}>
              {isEdit ? (
                <div className="edit-buttons-container">
                  <button
                    type="button"
                    className="form__cancel-button"
                    onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="form__update-button">
                    Update
                  </button>
                </div>
              ) : (
                <button type="submit" className="form__add-button">
                  Add
                </button>
              )}
            </ProductForm>
          )}
        </div>
      ) : (
        <Contact />
      )}
    </div>
  );
}
export default App;
