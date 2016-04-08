var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(require('vue-resource'));
Vue.use(VueRouter);



// components
var Clients = Vue.extend({
    template: '<div>wtf?</div>'
});
var Header = Vue.extend({
    template: '<h1>open function computers</h1>'
});
var MainNav = Vue.extend({
    template: '<nav>' +
              '<a v-link="{ path: \'/\' }">Home</a>' +
              '<a v-link="{ path: \'clients\' }">Clients</a>' +
              '<a v-link="{ path: \'tools\' }">Tools</a>' +
              '</nav>'
});
var Tools = Vue.extend({
    template: '<ul>' +
              '<li>Laravel</li>' +
              '<li>Vue.js</li>' +
              '<li>MODX</li>' +
              '<li>Wordpress (boo)</li>' +
              '</ul>'
});




var App = Vue.extend({
    template: '<div><ofc></ofc><menu></menu>' +
              '<router-view></router-view><a v-link="{ path: \'clients\' }">Clients</a></div>',
    components: {
        ofc: Header,
        menu: MainNav
    }
});





var router = new VueRouter();

router.map({
    '/clients': {
        component: Clients
    },
    '/tools': {
        component: Tools
    }
});

router.start(App, '#app');