import request from '../core/utils/axios';

const loginService = (user) => {
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };

    const bodyParameters = {
        ...user
    };

    return request.post(
        'users/signin',
        bodyParameters
    )
}

const signupService = (user) => {
    // const config = {
    //     headers: { Authorization: `Bearer ${token}` }
    // };
    delete user.confirmPassword
    const bodyParameters = {
        ...user
    };

    return request.post(
        'users/signup',
        bodyParameters
    )
}

export { loginService, signupService }