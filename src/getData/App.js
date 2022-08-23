
import React, {useState, useEffect} from "react";
import axios from "axios";
import ReactDOM from 'react-dom';

function Login(){
    const [userID, setUserID] = useState('');
    const [Password, setPassword] = useState('');

    const [Data, setData] = useState({
        jwt_token: '',
        resultCode: '',
    });


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
            headers: {
                'Content-Type': 'application/json',
                jwt_token : localStorage.getItem('jwt-token'),
                test : "test",
            },
            params: user
        })
            .then(function (res) {
                console.log(res);
                setData(res.data);

            }).then(function(res){
                localStorage.setItem('jwt-token', Data.jwt_token);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const onTest= (event) => {
        event.preventDefault(); // submit 시 웹페이지가 리로딩 되는걸 막아줌
        console.log(userID, Password);

        const test = {
            one : "the",
            two : "what",
        };

        axios({
            method: 'post',
            url: 'http://localhost:8080/page',
            headers: {
                'Content-Type': 'application/json',
                jwt_token : localStorage.getItem('jwt-token'),
                test : "test",
            },
            params: test
        })
            .then(function (res) {
                console.log(res);
                console.log("테스트");
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
                <div>{Data.resultCode}</div>
                <div>{Data.jwt_token}</div>
            </form>

            <form onSubmit={onTest}>
                <button type="submit">Test</button>
            </form>
        </div>

    );
}

function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

export default Login;