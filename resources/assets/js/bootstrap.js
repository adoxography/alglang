import Form from './utilities/Form';
import axiosRetry from 'axios-retry';

window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = require('jquery');
require('jquery-ui');
//require('bootstrap-sass');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');
// require('vue-resource');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};
window.axios.defaults.timeout = 10000;

axiosRetry(window.axios, {retries: 5 });

window.Form = Form;

// Core
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'

// Plugins
import 'tinymce/plugins/table/plugin'
import 'tinymce/plugins/charmap/plugin'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/lists/plugin'

// tinymce.init({
// 	selector: '#tinymce',
// 	skin_url: '/css/skins/lightgray',
// 	skin: "lightgrey"
// });

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

// Vue.http.interceptors.push((request, next) => {
//     request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);

//     next();
// });

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
