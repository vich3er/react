import React, {useLayoutEffect} from 'react';
import { login } from '../services/api-servise';
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const LoginPage = () => {

    const axiosInstance = axios.create({ // аксіос кріейт щоб посилати запити
        baseURL: 'https://dummyjson.com/auth',
        headers: {}
    })
    type loginData = {
        username: string,
        password: string,
        expiresInMins: number
    }
    const loadUser= ( {username, password, expiresInMins}: loginData)=> createAsyncThunk(
        'userSlice/loadUser',
        async ( _, thunkAPI) => {

            try {
                // const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
                //     .then(value => value.json());
                // thunkAPI.dispatch(userSliceActions.changeLoadState(true));
                const {data: userWithTok} = await axiosInstance.post('/login', {username, password, expiresInMins})
                console.log(userWithTok);
                console.log(1);
                localStorage.setItem('user', JSON.stringify(userWithTok));
                return thunkAPI.fulfillWithValue(userWithTok);

                // throw new Error();
            } catch (e) {
                console.log(e);
                return thunkAPI.rejectWithValue('some error');
            }
        }
    );

    // login({
    //     username: 'emilys', password: 'emilyspass', expiresInMins: 1
    // })
    loadUser({
           username: 'emilys', password: 'emilyspass', expiresInMins: 1
         })





    return (
        <div>
            <form action=""></form>
            </div>
    );
};

export default LoginPage;