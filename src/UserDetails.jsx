import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const [user, setUser] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => res.json())
        .then(data=>{
            setUser(data)
        })
    }, [id])
    return (
        <div>
        <h1>User Details</h1>
        {user && (
          <div>
            <p>Name: {user.name}</p>
            <p>UserName: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        )}
        <Link to="/">Go Home</Link>
      </div>
    );
}

export default UserDetails;
