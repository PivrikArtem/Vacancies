let search = document.getElementById('search');
let dataList = document.getElementById('json-datalist');
function hideIcon() {
    let i = document.getElementById('i');

    i.style.display = 'none';
    if (search.value === '') {
        i.style.display = 'block';
    } else {

        getRequest();
    }
}
function getRequest(){
    $.ajax('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json',{
            success:function (data) {
                // Parse the JSON
//             var jsonOptions = JSON.parse(data);
// console.log(jsonOptions);
                // Loop over the JSON array.
                data.forEach(function(item) {
                    // Create a new <option> element.
                    var option = document.createElement('option');
                    // Set the value using the item in the JSON array.
                    option.value = item;
                    // Add the <option> element to the <datalist>.
                    dataList.appendChild(option);
                });

                // Update the placeholder text.
                // input.placeholder = "e.g. datalist";
            }
        }
    )
}
$.ajaxPrefilter( function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
});

// // Get the <datalist> and <input> elements.
// var dataList = document.getElementById('json-datalist');
// var input = document.getElementById('ajax');
//
// // Create a new XMLHttpRequest.
// var request = new XMLHttpRequest();
//
// // Handle state changes for the request.
// request.onreadystatechange = function(response) {
//     if (request.readyState === 4) {
//         if (request.status === 200) {
//             // Parse the JSON
//             var jsonOptions = JSON.parse();
//
//             // Loop over the JSON array.
//             jsonOptions.forEach(function(item) {
//                 // Create a new <option> element.
//                 var option = document.createElement('option');
//                 // Set the value using the item in the JSON array.
//                 option.value = item;
//                 // Add the <option> element to the <datalist>.
//                 dataList.appendChild(option);
//             });
//
//             // Update the placeholder text.
//             input.placeholder = "e.g. datalist";
//         } else {
//             // An error occured :(
//             input.placeholder = "Couldn't load datalist options :(";
//         }
//     }
// };
//
// // Update the placeholder text.
// input.placeholder = "Loading options...";
//
// // Set up and make the request.
// request.open('GET', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json', true);
// request.send();
//
// //
// // const headers = {
// //     'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
// //     'accept': 'application/json'
// // };
// //
// // const corsMode = 'no-cors';
// //
// // function requestData(url, type) {
// //     fetch(url,
// //         {
// //             method: type,
// //             mode: corsMode,
// //             // headers: headers
// //         })  .then(
// //         function(data) {
// //             // if (response.status !== 200) {
// //             //     console.log('Looks like there was a problem. Status Code: ' +
// //             //         response.status);
// //             //     return;
// //             // }
// //
// //             // Examine the text in the response
// //             // response.json().then(function(data) {
// //                 console.log(data);
// //             // });
// //         }
// //     )
// //         .catch(function(err) {
// //             console.log('Fetch Error :-S', err);
// //         });
// //
// //
// // }
