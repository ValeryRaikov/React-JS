import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { url } from './url';
import { getUser } from './redux/userSlice';
import Users from "./components/Users";
import CreateUser from './components/CreateUser';
import UpdateUsers from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                dispatch(getUser(response.data));
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='/create' element={<CreateUser />} />
                <Route path='/edit/:id' element={<UpdateUsers />} />
                <Route path='/delete/:id' element={<DeleteUser />} />
            </Routes>
        </>
    );
}

export default App;
