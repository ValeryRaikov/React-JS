import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { url } from '../url';
import { deleteUser } from '../redux/userSlice';

export default function DeleteUser() {
    const navigate = useNavigate();
    const { id } = useParams();

    const users = useSelector(state => state.users.users);
    const user = users.find(u => u.id === id);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.delete(`${url}/delete/${id}`)
            .then(response => {
                dispatch(deleteUser(id)); 
                navigate('/'); 
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submitHandler}>
                    <h2>Delete User</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Enter name..."
                            className="form-control"
                            value={name}
                            disabled
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Enter email..."
                            className="form-control"
                            value={email}
                            disabled
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age:</label>
                        <input 
                            type="number" 
                            name="age"
                            placeholder="Enter age..."
                            className="form-control"
                            value={age}
                            disabled
                        />
                    </div>
                    <div className="d-flex gap-3">
                        <button type="submit" className="btn btn-success">Delete</button>
                        <button type="button" className="btn btn-danger" onClick={() => navigate('/')}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}