import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const baseUrl = 'http://localhost:3000/products';

export default function EditProduct() {
    const [validationErrors, setValidationErrors] = useState({});
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    const getProduct = () => {
        fetch(`${baseUrl}/${params.productId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                throw new Error('Unable to fetch product.');
            })
            .then(data => setProduct(data))
            .catch(err => {
                alert(err.message);
            });
    }

    useEffect(getProduct, []);

    const submitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const product = Object.fromEntries(formData.entries());

        if (!product.name || !product.brand || !product.category || !product.price || !product.description) {
            alert('Please fill all the fields!');
            return;
        }

        try {
            const response = await fetch(`${baseUrl}/${params.productId}`, {
                method: 'PATCH',
                body: formData
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/admin/products');
            } else if (response.status === 400) {
                setValidationErrors(data);
            } else {
                alert('Unable to update product!');
            }
        } catch (err) {
            alert('Unable to connect to the server!');
        }
    }

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5">Edit Product</h2>
                    <div className="row mb-3">
                        <label className="col-sm-4 col-form-label">ID</label>
                        <div className="col-sm-8">
                            <input className="form-control-plaintext" readOnly defaultValue={params.productId} />
                        </div>
                    </div>
                    { product &&
                    <form onSubmit={submitHandler}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="name" defaultValue={product.name} />
                                <span className="text-danger">{validationErrors.name}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Brand</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="brand" defaultValue={product.brand} />
                                <span className="text-danger">{validationErrors.brand}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Category</label>
                            <div className="col-sm-8">
                                <select className="form-select" name="category" defaultValue={product.category}>
                                    <option value="Phones">Phones</option>
                                    <option value="Computers">Computers</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Printers">Printers</option>
                                    <option value="Cameras">Cameras</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span className="text-danger">{validationErrors.category}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Price</label>
                            <div className="col-sm-8">
                                <input className="form-control" name="price" type="number" step="0.01" min="1" defaultValue={product.price} />
                                <span className="text-danger">{validationErrors.price}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <textarea className="form-control" name="description" rows="4" defaultValue={product.description} />
                                <span className="text-danger">{validationErrors.description}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="offset-sm-4 col-sm-8">
                                <img src={`http://localhost:3000/${product.imageFilename}`} alt="..." width="150" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Created At</label>
                            <div className="col-sm-8">
                                <input className="form-control-plaintext" readOnly defaultValue={product.createdAt} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn btn-secondary" to="/admin/products" role="button">Cancel</Link>
                            </div>
                        </div>
                    </form>
                    }
                </div>
            </div>
        </div>
    );
}