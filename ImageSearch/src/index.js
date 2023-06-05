const ACCESS_KEY = 'RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw';
const API_URL = 'https://api.unsplash.com';



let page = 1;
let inputData = 'card'

const url = `${API_URL}/search/photos?page=${page}&query=${inputData}&client_id=${ACCESS_KEY}`;

fetch(url)
.then(resp => {
    return resp.json()
})
.then(data => {
    console.log(data);
})
