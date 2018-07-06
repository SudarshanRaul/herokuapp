(function(appName){
    console.log(window.innerWidth);
    var loadController = [];
    if(window.innerWidth < 480) {

    }
    var MainControllerView = document.querySelectorAll('[data-view="MainControllerView"]')[0];
    console.log(MainControllerView);
    getRequest('/view/addItem.html', function (response) {
        console.log(response);
        MainControllerView.innerHTML += response;
    });
}("ExpApp"));

function getView(view, model) {
    getRequest(view, function (response) {
        return response;
    });
}

function getRequest(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function() {
        callback(request.response);
    };
    request.send();
}
