// 公告
import Vue from 'vue'
const exam = {
    // 通讯录-获取通讯录树接口
    bookapibookselectbooktree: function bookapibookselectbooktree(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId + '&memberId=' + postdata.memberId + '&appId=' + postdata.appId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-部门信息接口
    bookapibookselectdepttree: function bookapibookselectdepttree(ip, postdata) {
        var ipstr = ip + '?deptId=' + postdata.deptId
        if (postdata.memberId) {
            ipstr = ip + '?deptId=' + postdata.deptId + '&memberId=' + postdata.memberId
        }
        if (postdata.appid) {
            ipstr = ip + '?deptId=' + postdata.deptId + '&memberId=' + postdata.memberId + '&appId=' + postdata.appid
        }
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-企业信息接口
    bookapibookselectcompanytree: function bookapibookselectcompanytree(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-公司-编辑更新公司
    bookapibookcompanymodify: function bookapibookcompanymodify(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-公司-子公司列表
    bookapibookcompanylist: function bookapibookcompanylist(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-公司-添加子公司
    bookapibookchildrencompanycreate: function bookapibookchildrencompanycreate(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-公司-修改子公司
    bookapibookchildrencompanymodify: function bookapibookchildrencompanymodify(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-公司-删除子公司
    bookapibookchilrencompanydelete: function bookapibookchilrencompanydelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-部门-部门列表
    bookapibookdeptlist: function bookapibookdeptlist(ip, postdata) {
        var ipstr = ip + '?deptId=' + postdata.deptId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-部门-添加部门
    bookapibookdeptcreate: function bookapibookdeptcreate(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-部门-编辑部门
    bookapibookdeptmodify: function bookapibookdeptmodify(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-部门-部门排序
    bookapibookdeptsort: function bookapibookdeptsort(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-部门-删除部门
    bookapibookchildrendeptdelete: function bookapibookchildrendeptdelete(ip, postdata) {
        var ipstr = ip + '?deptId=' + postdata.deptId
        return Vue.http.delete(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-成员-成员列表
    bookapibookuserlist: function bookapibookuserlist(ip, postdata) {
        var ipstr = ip + '?deptId=' + postdata.deptId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-成员-调整部门
    bookapibookuseradjustdept: function bookapibookuseradjustdept(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-成员-调整排序
    bookapibookusersort: function bookapibookusersort(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-成员-删除成员
    bookapiuserbatchdelete: function bookapiuserbatchdelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-成员-检索成员信息
    bookapibookmemberquery: function bookapibookmemberquery(ip, postdata) {
        var ipstr = ip + "?companyId=" + postdata.companyId + "&current=" + postdata.current + "&queryName=" + postdata.queryName + "&size=" + postdata.size
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-成员-添加成员
    bookapibookmembercreate: function bookapibookmembercreate(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-成员-成员详情
    bookapibookuserdetailinfo: function bookapibookuserdetailinfo(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-成员-修改成员
    bookapibookuserbatchdelete: function bookapibookuserbatchdelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 编辑更新公司接口
    companymodifycompany: function companymodifycompany(ip, postdata) {
        return Vue.http.put(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 获取子公司信息接口
    companychildrencompanydetail: function companychildrencompanydetail(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 添加子公司接口
    companycreatechildrencompany: function companycreatechildrencompany(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 删除子公司信息接口
    companydeletechildrencompany: function companydeletechildrencompany(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.delete(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 编辑子公司接口
    companymodifychildrencompany: function companymodifychildrencompany(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 添加成员接口
    membercreatemember: function membercreatemember(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 获取成员详情接口
    membermemberdetail: function membermemberdetail(ip, postdata) {
        var ipstr = ip + '?memberId=' + postdata.memberId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 编辑成员
    membermodifymember: function membermodifymember(ip, postdata) {
        return Vue.http.put(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 检索成员信息
    membermemberquery: function membermemberquery(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId + '&memberId=' + postdata.memberId + '&appId=' + postdata.appId + '&deptId=' + postdata.deptId + "&queryName=" + postdata.queryName + "&current=1&size=100"
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 删除成员
    memberbatchdeletemember: function memberbatchdeletemember(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId + '&deptId=' + postdata.deptId + "&memberIds=" + postdata.memberIds
        return Vue.http.delete(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 调整部门
    memberuseradjustdept: function memberuseradjustdept(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 成员排序
    membermembersort: function membermembersort(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 通讯录-获取通讯录树接口
    apisystemapiareagetarea: function apisystemapiareagetarea(ip, postdata) {
        var ipstr = ip + '?pid=' + postdata.pid
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 导入通讯录
    bookupload: function bookupload(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 确认导入通讯录
    bookconfirm: function bookconfirm(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
}
export default exam