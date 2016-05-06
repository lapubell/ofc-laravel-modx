var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(require('vue-resource'));
Vue.use(VueRouter);


import Home from './components/Home.vue';
import Clients from './components/Clients.vue';
import Menu from './components/Menu.vue';
import Tools from './components/Tools.vue';



var App = Vue.extend({
    components: {
        menu: Menu
    }
});





var router = new VueRouter();

router.map({
    '/home': {
      component: Home
    },
    '/clients': {
        component: Clients
    },
    '/tools': {
        component: Tools
    }
});

router.redirect({
    '*': '/home'
});

router.start(App, '#app');