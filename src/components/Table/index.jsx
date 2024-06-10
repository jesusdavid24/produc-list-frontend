import PropTypes from 'prop-types';
import Toast from "../../utils/Toast";
import Table from 'react-bootstrap/Table';
import "./index.scss";

const TableForm = ({ products = [], onDeleteProduct, onEditProduct }) => {
  const handleDeleteButton = (id) => {
    onDeleteProduct(id);
    Toast.fire({
      icon: "success",
      title: "Product deleted!",
    });
  };

  const handleEditButton = (productToEdit) => {
    onEditProduct(productToEdit);
  };

  return (
    <div className="table">
      <Table className="table__container" responsive>
        <thead>
          <tr key="table-head">
            <th>PRODUCT NAME</th>
            <th>COLOR</th>
            <th>CATEGORY</th>
            <th>PRICE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!products.length && (
            <tr className="table-void">
              <td className="table--void__td" 
                colSpan="5">There are not products to show
              </td>
            </tr>
          )}
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productName}</td>

              <td>{product.color}</td>

              <td>{product.category}</td>

              <td>{`$${product.price}`}</td>

              <td className="products-table__buttons-td">
                <div className="d-flex">
                  <button
                    className="products-table__edit-button"
                    onClick={() => handleEditButton(product)}>
                    Edit
                  </button>
                  <span>|</span>
                  <button
                    className="products-table__delete-button"
                    onClick={() => handleDeleteButton(product.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};


TableForm.propTypes = {
  products: PropTypes.array.isRequired,
  onDeleteProduct: PropTypes.func.isRequired,
  onEditProduct: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default TableForm;
