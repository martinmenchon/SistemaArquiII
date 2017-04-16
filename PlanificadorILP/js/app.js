requirejs.config({
    baseUrl: 'js/app',
    paths: {
        libs: '../libs'
    },
    waitSeconds : 15,
    urlArgs: "bust=" + (new Date()).getTime()
});

requirejs(['main']);