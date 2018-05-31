// 登陆
import Vue from 'vue'
const org = {
    // 修改登录密码
    apiSettingChangePassword: function apiSettingChangePassword(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 更换主管理员-发送短信验证码
    apiSettingSendCode: function apiSettingSendCode(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 更换主管理员-校验验证码
    apiSettingVerifyCode: function apiSettingVerifyCode(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 更换主管理员-更换主管理员
    webOrgSettingChangeMaster: function webOrgSettingChangeMaster(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 编辑企业信息
    apiorgbookcompanymodify: function apiorgbookcompanymodify(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })        
    },
    // 查询企业信息
    apiorgbookcompanyfind: function apiorgbookcompanyfind(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //查看企业标签
    apiorgbookgetLabels:function apiorgbookgetLabels(ip,postdata){
        var ipstr=ip+'?companyId='+postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //添加企业标签
    apiorgbookadd:function apiorgbookadd(ip,postdata){
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //修改企业标签
    apiorgbookupdate:function apiorgbookupdate(ip,postdata){
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //删除企业标签
    apiorgbookdelete:function apiorgbookdelete(ip,postdata){
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //查看所有子管理员信息
    apiorgsettinglist:function apiorgsettinglist(ip,postdata){
        var ipstr = ip + '?orgId=' + postdata.orgId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //添加子管理员
    apiorgsettingadd:function apiorgsettingadd(ip,postdata){
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //修改子管理员
    apiorgsettingupdate:function apiorgsettingupdate(ip,postdata){
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //删除子管理员
    apiorgsettingdelete:function apiorgsettingdelete(ip,postdata){
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //查看子管理员信息
    apiorgsettingget:function apiorgsettingget(ip,postdata){
        var ipstr = ip + '?id=' + postdata.id
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //查看企业应用
    apiorgsettinggetapp:function apiorgsettinggetapp(ip,postdata){
        var ipstr = ip + '?orgId=' + postdata.orgId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    }
}
export default org