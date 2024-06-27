// const baseUrl = 'https://jsonplaceholder.typicode.com'
//
//
// const getAllUsers = async () => {
//     return await fetch(baseUrl + '/users').then(res => res.json())
//         .then(value => value.json())
// }
// const getPostsOfUserById = async (id: number) => {
//     return await fetch(baseUrl + '/users/' + id + '/posts')
//         .then(value => value.json())
// }
//
// export {getAllUsers, getPostsOfUserById}

import axios from 'axios';


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});

axiosInstance.interceptors.request.use(request => {
    request.headers.set('Content-Type', 'application/json',);
    request.headers.set('asdasdas', 'qwewqe',);
    request.headers.set('kjdsagfhsdgfh', 'eiwuguyewtryewf',);
    return request;
})


const getAllUsers = async () => {
    return await axiosInstance.get('/users').then((response) => response.data);
}
let getPostsOfUserById = async (id: number) => {
    return await axiosInstance.get('/users/' + id + '/posts').then((response) => response.data)
};

export {getAllUsers, getPostsOfUserById}



