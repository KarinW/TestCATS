//var testCATS = angular.module('testCATS');
var app = {
    // Application Constructor
    initialize: function () {
        console.log("initializing");
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        console.log("initializing bindevents");
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        console.log("initializing ondeviceready");
        //app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = angular.element(document.getElementById(id));
        var listeningElement = angular.element(document.querySelector('.listening'));
        var receivedElement = angular.element(document.querySelector('.received'));
        listeningElement.attr('style', 'display:none;');
        receivedElement.attr('style', 'display:block;');
        console.log("initializing done");
    }
};
/*
// Called from main.ts after bootstrap
export function initialize(): void {
    initializeCordova();
}


// Waits for Cordova or if not on a device and cordova is not needed, don't wait and call onDeviceReady.
function initializeCordova(): void {
    if (!window.cordova) {
        onDeviceReady();
    } else {
        document.addEventListener('deviceready', onDeviceReady, false);
    }
}

function onDeviceReady(): void {
    console.log('Cordova: on device ready');
    
    var parentElement = document.getElementById('deviceready');
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: deviceready');
}
*/ 
//# sourceMappingURL=init.js.map