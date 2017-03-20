/**
 * Created by FIONA on 2017/3/16/016.
 */
import Vue from 'vue';
import './public/css/index.scss';

const app = new Vue({
    el: '#app',
    render (h) {
        const page = require('./pages/index.vue');
        return h(page);
    }
});
