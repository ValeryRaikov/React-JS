import Search from '../search/Search'
import UserList from './user-list/UserList'
import Pagination from './pagination/Pagination'
import UserAdd from './user-add/UserAdd'
import { useEffect, useState } from 'react';
import UserDetails from './user-details/UserDetails';
import UserDelete from './user-delete/UserDelete';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetails, setShowUserDetails] = useState(null);
    const [showUserDelete, setShowUserDelete] = useState(null);
    const [searchCriteria, setSearchCriteria] = useState('');
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);

                if (!response.ok) {
                    throw new Error('Error fetching users from server!');
                }

                const result = await response.json();
                const data = Object.values(result);
                setUsers(data);
            } catch (err) {
                alert(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        getUsers();
    }, []);

    const searchHandler = (criteria, value) => {
        setSearchCriteria(criteria);
        setSearchValue(value);
    };

    const filteredUsers = users.filter(user => {
        if (!searchValue) 
            return true; 

        const userValue = user[searchCriteria] || '';

        return userValue.toLowerCase().includes(searchValue.toLowerCase());
    });

    /* User add functionality */
    const addUserClickHandler = () => setShowAddUser(true);
    const addUserCloseHandler = () => setShowAddUser(false);

    const addUserSaveHandler = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        /* const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData.entries()),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }; */

        const form = e.currentTarget;
        const userData = {
            firstName: form.elements['firstName'].value,
            lastName: form.elements['lastName'].value,
            email: form.elements['email'].value,
            phoneNumber: form.elements['phoneNumber'].value,
            imageUrl: form.elements['imageUrl'].value,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            address: {
                country: form.elements['country'].value,
                city: form.elements['city'].value,
                street: form.elements['street'].value,
                streetNumber: form.elements['streetNumber'].value,
            }
        }

        try {
            const response = await fetch(`${baseUrl}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Error fetching users from server!');
            }
    
            const newUser = await response.json();
    
            setUsers(prevUsers => [...prevUsers, newUser]);
    
            setShowAddUser(false);
        } catch (err) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    /* User details functionality */
    const userDetailsClickHandler = (userId) => setShowUserDetails(userId);
    const userDetailsCloseHandler = () => setShowUserDetails(null);

    /* User delete functionality */
    const userDeleteClickHandler = (userId) => setShowUserDelete(userId);

    const userDeleteHandler = async (userId) => {
        setIsLoading(true);

        try {
            const response = await fetch(`${baseUrl}/users/${userId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Error fetching users from server!');
            }

            setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
        } catch (err) {
            alert(err.message);
        } finally {
            setIsLoading(false);
        }

        userDeleteCloseHandler();
    }

    const userDeleteCloseHandler = () => setShowUserDelete(null);

    return (
        <section className="card users-container">

            <Search onSearch={searchHandler} />

            <UserList 
                isLoading={isLoading}
                users={users} 
                onUserDetailsClick={userDetailsClickHandler}
                onUserDeleteClick={userDeleteClickHandler}
            />

            {showAddUser && <UserAdd 
                                onClose={addUserCloseHandler}
                                onSave={addUserSaveHandler} 
                            />
            }

            {showUserDetails && <UserDetails 
                                    user={users.find(user => user._id === showUserDetails)}
                                    onClose={userDetailsCloseHandler}
                                />
            }

            {showUserDelete && <UserDelete 
                                    userId={showUserDelete}
                                    onClose={userDeleteCloseHandler}
                                    onUserDeleteClick={userDeleteHandler}
                                />
            }

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />
        </section>
    );
}