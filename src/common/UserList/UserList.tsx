import { useEffect, useState } from "react";
import axios, { CanceledError } from 'axios';
import userService, { User } from "../../services/user-service";



const UserList = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        const { request, cancel } = userService.getAllUsers();

        request
            .then((res) => {
                setUsers(res.data);
                setLoading(false)
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => cancel();
    }, []);

    const deleteUser = (user: User) => {
        const originalUsers = [...users];

        setUsers(users.filter(u => u.id !== user.id));

        userService.deleteUser(user.id).catch(err => {
            setError(err.message);
            setUsers(originalUsers);
        })
    }

    const updateUser = (user: User) => {
        const updatedUser = { ...user, name: user.name + '!' };
        const originalUsers = [...users];
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));

        userService.updateUser(updatedUser).catch(err => {
            setError(err.message);
            setUsers(originalUsers);
        })
    }

    const addUser = () => {
        const newUser = { id: 11, name: 'vivek' };
        userService.createUser(newUser).then(res => {
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