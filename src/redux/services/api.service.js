import axios from "axios";
import { urls } from "../../constants";

const client = axios.create({
    baseURL: urls.APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'App-Track-Version': 'v1',
        'App-Device-Type': 'ios',
        'App-Store-Version': '1.0',
        'App-Device-Model': 'Simulator',
        'App-Os-Version': '10.2',
        'App-Secret': 'Kv9TnOO9o5Q2QG2e8cKv5uqub',
        'Auth-Token': localStorage.getItem('token')
    },
});

export async function getMissionariesFeed(authToken) {
    return client.post(urls.GET_MISSIONARIESLIST_URL, { user_time_zone: 'Asia/Kolkata' }, {
        headers: { 'Auth-Token': authToken },
    });
}

export async function getAllSponsors(authToken) {
    return client.get(urls.GET_SPONSORSLIST_URL, {
        headers: { 'Auth-Token': authToken },
    });
}

export async function login(params) {
    let { data } = await client.post(urls.USER_SIGNIN_URL, params);
    if (data.status === 1) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(data);
    }
}

export async function registration(params) {
    let { data } = await client.post(urls.USER_REGISTRATION_URL, params);
    if (data.status === 1) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(data);
    }
}

export async function forgotPassword(params) {
    let { data } = await client.post(urls.USER_FORGOT_URL, params);
    if (data.status === 1) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(data);
    }
}

export async function resetPassword(params) {
    let { data } = await client.post(urls.USER_RESET_PASSWORD_URL, params);
    if (data.status === 1) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(data);
    }
}

export async function logout() {
    let { data } = await client.get(urls.USER_LOGOUT_URL);
    if (data.status === 1) {
        return Promise.resolve(data);
    } else {
        return Promise.reject(data);
    }
}