/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-layout', require('./components/layouts/AdminLayout.vue').default);

/** ITEMS */
Vue.component('items-index', require('./components/admin/items/Index.vue').default);
Vue.component('items-create', require('./components/admin/items/Create.vue').default);
Vue.component('items-edit', require('./components/admin/items/Edit.vue').default);
// Vue.component('items-view', require('./components/admin/items/View.vue').default);

/** SUPPLIERS */
Vue.component('suppliers-index', require('./components/admin/suppliers/Index.vue').default);
Vue.component('suppliers-create', require('./components/admin/suppliers/Create.vue').default);

/** PURCHASE ORDERS */
Vue.component('purchase-index', require('./components/admin/purchase/Index.vue').default);

/** DELIVERY */
Vue.component('delivery-index', require('./components/admin/delivery/Index.vue').default);

/** STOCKS */
Vue.component('stocks-index', require('./components/admin/stocks/Index.vue').default);
Vue.component('history', require('./components/admin/stocks/History.vue').default);
Vue.component('add', require('./components/admin/stocks/Add.vue').default);

/** POINT OF SALES */
Vue.component('pos-index', require('./components/admin/pos/Index.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';


Vue.use(Vuetify);


const vuetify = new Vuetify();

export default new Vuetify({
  theme: {
    dark: true,
  },
});

Vue.prototype.$permission = function(module, name){
  const modules = window.Laravel.routes.username.permissions;

  const results = modules.find((val)=>{
    if(val.module === module){
      return val;
    }
  })

  const settings = results.settings;
  const result = settings.find((val)=>{
    if(val.name === name){
      return val;
    }
  })

  if(result){
    return result.value;
  }else{
    return true;
  }
}


window.onload = function(){
    const app = new Vue({
        vuetify,

        el: '#app',

    });
}

