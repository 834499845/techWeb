// 登陆
import Vue from 'vue'
const org = {
    // 分页查询日志信息
    weblogmanagefindpage: function weblogmanagefindpage(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 删除日志信息
    weblogmanagedelete: function weblogmanagedelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 导出日志数据
    weblogsearchexport: function weblogsearchexport(ip, postdata) {
        var ipstr = ip + '?&orgId=' + postdata.orgId + '&memberId=' + postdata.memberId + '&submitType=' + postdata.submitType
        if (postdata.startDate) {
            ipstr = ipstr + "&startDate=" + postdata.startDate
        }
        if (postdata.endDate) {
            ipstr = ipstr + "&endDate=" + postdata.endDate
        }
        if (postdata.deptIds) {
            ipstr = ipstr + "&deptIds=" + postdata.deptIds
        }
        if (postdata.userIds) {
            ipstr = ipstr + "&userIds=" + postdata.userIds
        }
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 版本信息管理-分页查询版本信息
    weblogmanagedelete: function weblogmanagedelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 版本信息管理-分页查询版本信息
    webversionfindservicelist: function webversionfindservicelist(ip, postdata) {
        return Vue.http.get(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 版本信息管理-修改版本信息
    webversionupdate: function webversionupdate(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 版本信息管理-新增版本信息
    webversionsave: function webversionsave(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
}
export default org