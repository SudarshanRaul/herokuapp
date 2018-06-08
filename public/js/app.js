(function(appName){
    window[appName] = window[appName] ? window[appName] : new App(appName);

    var app = window[appName];

    function App(appName) {
        this.name = appName;
    }

    App.prototype.addController = function (controller) {
        this.controllers = this.controllers || [];
        this.controllers.push(controller);
    }

    app.addController(new Controller("mainController"));

    function Controller(controllerName) {
        this.name = controllerName;
        this.element = document.querySelectorAll('[data-controller="' + controllerName + '"]');
        this.model = {
            heading : "This is mock heading"
        };
    }

    console.log(myApp);

    Controller.prototype.initialize = function () {
        this.element[0].onload = function() {
            console.log(this.element[0].innerHTML);
            console.log(this.model);
            var html = this.element[0].innerHTML;
            var htmlBinding = new RegExp(Object.keys(this.model.getBindings()).join("|"),"gi");
            html = html.replace(htmlBinding, function(bindings) {
                return this.model[bindings]
            }.bind(this));
            this.element[0].innerHTML = html;



        }.bind(this);
    }

    myApp.controllers[0].initialize();

}("myApp"))
