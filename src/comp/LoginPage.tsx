import React, {useLayoutEffect} from 'react';
import { login } from '../services/api-servise';

const LoginPage = () => {
useLayoutEffect(() => {
    login({
        username: 'emilys', password: 'emilyspass', expiresInMins: 1
    })
})


    return (
        <div>
            <form action=""></form>
            </div>
    );
};

export default LoginPage;