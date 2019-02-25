function hideIcon() {
    let i =document.getElementById('i');
    let search =document.getElementById('search');
    i.style.display = 'none';
    if(search.value===''){
        i.style.display = 'block';
    }
}


const headers = {
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'accept': 'application/json'
};

const corsMode = 'no-cors';
function requestData(url, type, body) {
    return fetch(url, {
        method: type,
        body: body,
        mode: corsMode
    }).then(result => result.json());
}

const a=requestData('https://www.google.com/','GET');


// $.ajax(
//     'https://repetitora.net/',
//     (data)=>{console.log(data)}
//     );