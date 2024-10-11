import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
 
const Username = () => {
    const [user, setUser] = useState([]) 
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    },[])
    return ( 

        <div>
        <h1>userlist</h1>
        <ul>
            {
                user.map(user=>(
                    <li key={user.id}  >
                        <Link to={`/user/${user.id}`}>{user.username}</Link>
                    </li>
                ))
            }
            </ul>    
        </div>
    );
}

export default Username;
