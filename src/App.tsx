import React, { useEffect, useState } from 'react';
import './App.css';
import User from './components/user/user';
import IUser from './services/models/user.model';
import UserService from './services/user';

function App()
{
    const [users, setUsers] = useState<Array<IUser>>([]);

    useEffect(() => {
        UserService.getUsers().then(response => {
            setUsers(response || [])
        });
    }, []);

  return (
    <div className="App">
        { users.map(user => <User key={user.email} user={user} />) }
    </div>
  );
}

export default App;
