var path = require('path');
var express = require('express');
var proxyMiddleware = require('http-proxy-middleware')

// // var proxyMiddleware = require('proxy-middleware');
var history = require('connect-history-api-fallback');
var app = express()
app.use(history({
    // 查看记录
    // verbose: true  
}))
require('./API/config.js')
app.use(express.static(path.join(__dirname, '/dist/')))
var proxyTable = {
    // 
    '/approval': {
        target: global.httpStr + global.workIp + ":" + global.workport,
        changeOrigin: true
    },
}

Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options
        }
    }
    app.use(proxyMiddleware(context, options))
})
app.listen(3001, function (err) {
    if (err) {
        console.log(err);
        return
    }
    console.log('server start 1200')
})
