import { useNavigate } from "react-router-dom";
import myContext from "./myContext";
import React, { useEffect, useState } from 'react'

const MyState = (props) => {
    const sendAlert = (message,type)=>{
        alert(message);
    }
    const navigate = useNavigate();
    const host = 'http://127.0.0.1:3000';
    const apiCall = async (method, url, body) => {
        let response;
        try {
            if (method === "GET" || method === "DELETE") {
                response = await fetch(`${host}${url}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('authToken')
                    }
                });
            } else {
                response = await fetch(`${host}${url}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('authToken'),
                    },
                    body: JSON.stringify(body)
                });
            }
            const data = await response.json();
            return data;
        } catch (err) {
            sendAlert("Something Went Wrong!!!", "danger");
        }
    }
    const signupAdmin = async (data) => {
        const res = await apiCall('POST', '/user/register', data);
        if (res.authToken) {
            localStorage.setItem('authToken', res.authToken);
            navigate('/');
        } else {
            sendAlert(res.message);
        }
    }
    const login = async (data) => {
        const res = await apiCall('POST', '/user/register', data);
        if (res.authToken) {
            localStorage.setItem('authToken', res.authToken);
            navigate('/');
        } else {
            sendAlert(res.message);
        }
    }
    useEffect(() => {
        if (!localStorage.getItem('authToken'))
            navigate('/loginsignup');
    }, []);
    const [floorNo, setFloorNo] = useState(1);
    return (
        <myContext.Provider value={{ floorNo, setFloorNo, signupAdmin }}>
            {props.children}
        </myContext.Provider>
    )
}

export default MyState
