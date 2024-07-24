import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const baseUrl = 'http://localhost:3000/products';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(`${baseUrl}?_sort=id&_order=desc`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                throw new Error('Error fetching data from server!');
            })
            .then(data => setProducts(data))
            .catch(err => alert(err.message));
    }

    useEffect(getProducts, []);

    const deleteProductHandler = (productId) => {
        fetch(`${baseUrl}/${productId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                getProducts();
            } else {
                throw new Error('Error deleting product.');
            }
        })
        .catch(err => {
            alert(err.message);
        });
    }

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Products</h2>

            <div className="row mb-3">
                <div className="col">
                    <Link className="btn btn-primary me-1" to="/admin/products/create" role="button">Create Product</Link>
                    <button type="button" className="btn btn-outline-primary" onClick={getProducts}>Refresh</button>
                </div>
                <div className="col">

                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.category}</td>
                                <td>{product.price}$</td>
                                <td>
                                    <img 
                                        src={`http://localhost:3000/images/${product.imageFilename}`} 
                                        alt={product.imageFilename}
                                        width="100"
                                    />
                                </td>
                                <td>{product.createdAt.slice(0, 10)}</td>
                                <td style={{width: "10px", whiteSpace: "nowrap"}}>
                                    <Link 
                                        className="btn btn-primary btn-sm me-1" 
                                        to={`/admin/products/edit/${product.id}`}
                                    >
                                        Edit
                                    </Link>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteProductHandler(product.id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}