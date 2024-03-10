import { useNavigate } from "react-router-dom";
import myContext from "./myContext";
import React, { useEffect, useState } from 'react'

const MyState = (props) => {
    const sendAlert = (message, type) => {
        alert(message);
    }
    const navigate = useNavigate();
    const host = 'https://loc-2024-backend.onrender.com';
    // const host = 'http://127.0.0.1:3000';
    const apiCall = async (method, url, body) => {
        console.log(body);
        let response;
        try {
            if (method === "GET" || method === "DELETE") {
                response = await fetch(`${host}${url}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        "authToken": localStorage.getItem('authToken')
                    }
                });
            } else {
                response = await fetch(`${host}${url}`, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                        "authToken": localStorage.getItem('authToken'),
                    },
                    body: JSON.stringify(body)
                });
            }
            const data = await response.json();
            return data;
        } catch (err) {
            console.log(err);
            sendAlert("Something Went Wrong!!!", "danger");
        }
    }
    const signupAdmin = async (data) => {
        const res = await apiCall('POST', '/user/register', data);
        if (res.authToken) {
            localStorage.setItem('authToken', res.authToken);
            localStorage.setItem('name', res.user.name);
            localStorage.setItem('email', res.user.email);
            navigate('/');
        } else {
            sendAlert(res.message);
        }
    }
    const login = async (data) => {
        console.log(data);
        const res = await apiCall('POST', '/user/login', data);
        if (res.authToken) {
            localStorage.setItem('authToken', res.authToken);
            localStorage.setItem('name', res.user.name);
            localStorage.setItem('email', res.user.email);
            navigate('/');
        } else {
            sendAlert(res.message);
        }
    }
    const addStaff = async (data) => {
        console.log(localStorage.getItem('authToken'));
        const res = await apiCall('POST', '/user/createStaff', data);
        if (res)
            sendAlert(res.message);
        else
            sendAlert('Something Went Wrong');
        return res?.success ? true : false;
    }
    const getAllStaff = async () => {
        const res = await apiCall('GET', '/user/getAllStaff');
        return res.staff;
    }
    const deleteStaff = async (staffId) => {
        const res = await apiCall('DELETE', `/user/deleteStaff/${staffId}`);
        // console.log(res);
        return res?.success ? true : false;
    }
    const getFloorDetails = async (floorNo) => {
        const data = await apiCall('GET', `/room/floorStatus/${floorNo}`);
        console.log(data);
        return data?.result ? data.result : [false, false, false, false, false, false];
    }
    const fetchRoomInfo = async (roomNo, sectionName) => {
        const res = await apiCall('GET', `/room/roomData/${roomNo}`)
        if (!res.success || !res.room[sectionName]) {
            sendAlert('Data For This Room Not Uploaded Yet!!!');
            // navigate(-1);
            return -1;
        }
        return res.room;
    }
    useEffect(() => {
        if (!localStorage.getItem('authToken'))
            navigate('/loginsignup');
    }, []);
    const [floorNo, setFloorNo] = useState(1);
    return (
        <myContext.Provider value={{ floorNo, setFloorNo, signupAdmin, login, addStaff, getAllStaff, deleteStaff, getFloorDetails, fetchRoomInfo }}>
            {props.children}
        </myContext.Provider>
    )
}

export default MyState
