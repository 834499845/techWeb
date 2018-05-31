// 签到
import Vue from 'vue'
const sign = {
    // 签到
    // 日常-导出签到数据
    signWebSignDailyExport: function signWebSignDailyExport(ip, postdata) {
        var ipstr = ip + '?&memberId=' + postdata.memberId + '&signDate=' + postdata.signDate
        // var ipstr = ip + '?userIds=' + postdata.userIds + '&deptIds=' + postdata.deptIds + '&signDate=' + postdata.signDate
        // window.open(ipstr);
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
    // 日常-按月统计签到信息
    signWebSignDailyStatistics: function signWebSignDailyStatistics(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 日常-按月统计签到信息详情
    signWebSignDailylist: function signWebSignDailylist(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 外出-导出签到数据
    signWebSignOutExport: function signWebSignOutExport(ip, postdata) {
        var ipstr = ip + '?&memberId=' + postdata.memberId + '&signDate=' + postdata.signDate
        // var ipstr = ip + '?userIds=' + postdata.userIds + '&deptIds=' + postdata.deptIds + '&signDate=' + postdata.signDate
        // window.open(ipstr);
        if (postdata.deptIds) {
            ipstr = ipstr + "&deptIds=" + postdata.deptIds
        }
        if (postdata.userIds) {
            ipstr = ipstr + "&userIds=" + postdata.userIds
        }
        // var ipstr = ip + '?userIds=' + postdata.userIds + '&deptIds=' + postdata.deptIds + '&signDate=' + postdata.signDate
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 外出-按月统计签到信息
    signWebSignOutStatistics: function signWebSignOutStatistics(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 外出-按月统计签到信息详情
    signWebSignOutlist: function signWebSignOutlist(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 签到设置
    signWebSignOutsetting: function signWebSignOutsetting(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 查看企业签到设置
    signWebSignOutgetsetting: function signWebSignOutgetsetting(ip, postdata) {
        var ipstr = ip + '?orgId=' + postdata.orgId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
}
export default sign