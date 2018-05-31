export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        // 登陆
        path: '/login',
        component: function (resolve) {
            require(['./components/login.vue'], resolve)
        },
    }
]

