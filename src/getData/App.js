
import React, {useState} from "react";
import axios from "axios";

function Login(){

    const [userID, setUserID] = useState('');
    const [Password, setPassword] = useState('');

    const onSubmit= (event) => {
        event.preventDefault(); // submit 시 웹페이지가 리로딩 되는걸 막아줌
        console.log(userID, Password);

        const user = {
            id : userID,
            pw : Password,
        };

        axios({
            method: 'post',
            url: 'http://localhost:8080/',
            params: user
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }



    return(
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={(e) => {setUserID(e.target.value)}} placeholder="userID" /><br/>
                <input onChange={(e) => {setPassword(e.target.value)}} placeholder="password" /><br/>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default Login;