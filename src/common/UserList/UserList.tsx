import { useEffect, useState } from "react";
import axios, { CanceledError } from 'axios';

interface User {
    id: number,
    name: string
}

const UserList = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axios.get<User[]>("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
            .then((res) => { setUsers(res.data); setLoading(false) })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    const deleteUser = (user: User) => {
        const originalUsers = [...users];

        setUsers(users.filter(u => u.id !== user.id));

        axios.delete("https://jsonplaceholder.typicode.com/users/" + user.id)
            .catch(err => {
                setError(err.message);
                setUsers(originalUsers);
            })
    }

    const updateUser = (user: User) => {
        const updatedUser = { ...user, name: user.name + '!' };
        const originalUsers = [...users];
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));

        axios.patch("https://jsonplaceholder.typicode.com/users/" + user.id, updatedUser)
            .then(res => {

            })
            .catch(err => {
                setError(err.message);
                setUsers(originalUsers);
            })
    }
    return <div>
        {isLoading && <div className="spinner-border"></div>}
        {error && <p className="text-danger">{error}</p>}
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