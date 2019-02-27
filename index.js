$.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
        options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
    }
});

class AjaxRequest {
    constructor() {
        this.search = document.getElementById('search');
        this.dataList = document.getElementById('json-datalist');
        this.i = document.getElementById('i');
        this.option = null;

    }

    hideIcon() {

        this.i.style.display = 'none';
        if (this.search.value === '') {
            this.i.style.display = 'block';
        } else {

            const promise = this.getRequest();
            promise.then(this.getCallback.bind(this));
        }
    }

    getRequest() {
        return $.ajax('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4621/html-elements.json')
    }

    getCallback(data) {
        data.forEach((item)=> {
            this.option = document.createElement('option');
            this.option.value = item;
            this.dataList.appendChild(this.option);
        });

    }

}

const ajax = new AjaxRequest();
const inputSearch = ajax.hideIcon.bind(ajax);


