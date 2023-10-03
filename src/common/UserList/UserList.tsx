import { useEffect, useState } from "react";
import axios, { CanceledError } from 'axios';
import userService, { User } from "../../services/user-service";
import useUsers from "../../hooks/useUsers";



const UserList = () => {

    const { users, error, isLoading, setUsers, setError } = useUsers();

    const deleteUser = (user: User) => {
        const originalUsers = [...users];

        setUsers(users.filter(u => u.id !== user.id));

        userService.delete(user.id).catch(err => {
            setError(err.message);
            setUsers(originalUsers);
        })
    }

    const updateUser = (user: User) => {
        const updatedUser = { ...user, name: user.name + '!' };
        const originalUsers = [...users];
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));

        userService.update(updatedUser).catch(err => {
            setError(err.message);
            setUsers(originalUsers);
        })
    }

    const addUser = () => {
        const newUser = { id: 11, name: 'vivek' };
        userService.create(newUser).then(res => {
            setUsers([newUser, ...users]);
        }).catch(err => {
            setError(err.message)
        });
    }
    return <div>
        {isLoading && <div className="spinner-border"></div>}
        {error && <p className="text-danger">{error}</p>}
        <button onClick={() => addUser()} className="btn primary">Add</button>
        <ul className="list-group">
            {users.map((user) => <li className="list-group-item d-flex justify-content-between" key={user.id}>
                {user.name}
                <div>
                    <button className="btn btn-outline-primary mx-1" onClick={() => updateUser(user)}>Update</button>
                    <button className="btn btn-outline-danger" onClick={() => deleteUser(user)}>Delete</button>
                </div>

            </li>)}
        </ul>
    </div>;
}

export default UserList;