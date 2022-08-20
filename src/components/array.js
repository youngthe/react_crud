import { useState , useEffect} from 'react';

function Array() {


    const users = [
        {id : 1, name : 'a', age : 25},
        {id : 2, name : 'b', age : 24},
        {id : 3, name : 'c', age : 1}
    ]

    const renderUsers = users.map(user => {
        return (
            <div className="user" key={user.id}>
                <div>{user.name}</div>
                <div>{user.age}</div>
            </div>
        )
    })
    return (
        <div className="App">
            <h1>User List</h1>
            {renderUsers}
        </div>
    );

}

export default Array;