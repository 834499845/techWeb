// 登陆
import Vue from 'vue'
const exam = {
    // 退出
    OauthRemoveToken: function OauthRemoveToken(ip, postdata) {
        var ipstr = ip + '?passportId=' + postdata.passportId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 获取企业开通应用信息
    RpcOrgAppWorkIndex: function RpcOrgAppWorkIndex(ip, postdata) {
        var ipstr = ip + '?orgId=' + postdata.orgId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 登陆
    apipassportuserloginpwd: function apipassportuserloginpwd(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 上传
    fileuploadPic: function fileuploadPic(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 上传
    fileupload: function fileupload(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 企业数据
    apiorgdata: function apiorgdata(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 企业数据-企业根据状态获取用户
    apiorgmembers: function apiorgmembers(ip, postdata) {
        // var ipstr = ip + '?companyId=' + postdata.companyId 
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },

    // 企业主页
    apiorghome: function apiorghome(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId + '&passportId=' + postdata.passportId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 企业主页
    apibookselectdeptinfo: function apibookselectdeptinfo(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    }
}
export default exam