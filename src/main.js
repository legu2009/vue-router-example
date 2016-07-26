import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import index from 'VIEW/index/index.vue'
import goods from 'VIEW/goods/goods.vue'
import reserve from 'VIEW/reserve/reserve.vue'
import auth from 'VIEW/auth/auth.vue'

import $ from 'jquery'

var goLogin = () => {
	var href = window.location.href;
	var login_url = 'http://m.mall.snail.com/login.html?goto=' +encodeURIComponent(href);
	window.location.href=login_url;
}

// install router
Vue.use(Router);

// register filters globally
Vue.filter('fromNow', fromNow);
Vue.filter('domain', domain);

// routing
var router = new Router()
router.map({
	'/index': {
		component: index
	},
	'/goods': {
		component: goods
	},
    '/reserve': {
		component: reserve,
        auth: true
	},
    '/auth': {
		component: auth,
        auth: true
	}
})
router.beforeEach((transition) => {
	window.scrollTo(0, 0);
    if (transition.to.auth) {
        /*登录验证*/
		transition.next()
    } else {
		transition.next()
	}
})
router.redirect({
	'*': '/index'
})
router.start(App, '#app');

var $win = $(window);
var $doc = $(document);
$win.scroll(() => {
    var $backTop = $(".back-top");
    if($backTop.length == 0)  {
        return;
    }
    if ($win.scrollTop() > 20) {
        $backTop.show(200);
    } else {
        $backTop.hide();
    }
});
$doc.on('click', '.back-top', function () {
    $win.scrollTop(0);
}).on('focus', 'input', function () {
    $(".footer-btn").css("position","static");
}).on('blur', 'input', function () {
    $(".footer-btn").css("position","fixed");
});