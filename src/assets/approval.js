// 审批
import Vue from 'vue'
const sign = {
    // 审批-审批模板列表
    approvalmodellist: function approvalmodellist(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-审批模板排序
    approvalmodelsort: function approvalmodelsort(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-编辑表单-未完成
    approvalm2odellist: function approvalm2odellist(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-默认审批流程（不分条件）-未完成
    approval3modellist: function approval3modellist(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-分条件审批流程-未完成
    approval4modellist: function approval4modellist(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-移动某个审批模板到其他分组中
    approvalmodelmoveto: function approvalmodelmoveto(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-设置审批模板是否停用
    approvalmodelisdisabled: function approvalmodelisdisabled(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-创建新审批-未完成
    approvalm5odellist: function approvalm5odellist(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-新建分组-重命名分组
    approvalcategorycreateorrename: function approvalcategorycreateorrename(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-分组排序
    approvalcategorysort: function approvalcategorysort(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-删除分组
    approvalcategorydelete: function approvalcategorydelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-导出审批数据-未完成
    approvalcategorycreat1eorrenames: function approvalcategorycreat1eorrenames(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-查询审批数据列表
    // approvaldatalist: function approvaldatalist(ip, postdata) {
    //     return Vue.http.post(ip, postdata).then(response => {
    //         if (response.status === 200) {
    //             return Promise.resolve(response.body)
    //         } else {
    //             return Promise.reject(response.data.message)
    //         }
    //     })
    // },
    // 审批-分页获取审批导出记录列表
    // approvaldataexportlog: function approvaldataexportlog(ip, postdata) {
    //     return Vue.http.post(ip, postdata).then(response => {
    //         if (response.status === 200) {
    //             return Promise.resolve(response.body)
    //         } else {
    //             return Promise.reject(response.data.message)
    //         }
    //     })
    // },
    // 审批-审批模板图标
    approvalmodelgetlogo: function approvalmodelgetlogo(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-保存审批模型接口
    approvaleditmodelsave: function approvaleditmodelsave(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批-编辑表单时获取模型数据接口
    approvaleditmodelget: function approvaleditmodelget(ip, postdata) {
        var ipstr = ip + '?modelId=' + postdata.modelId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-按条件设置审批人-获取审批条件
    approvalconditionget: function approvalconditionget(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-保存默认审批流程
    approvalsetupdatedefaultprocess: function approvalsetupdatedefaultprocess(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-调整按条件设置的审批流程排序
    approvalconditionsort: function approvalconditionsort(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-获取审批条件及对应审批人的列表
    approvalconditiongetapproverlist: function approvalconditiongetapproverlist(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-编辑时获取审批条件及对应审批人
    approvalconditiongetapprover: function approvalconditiongetapprover(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-保存条件审批人
    approvalconditionsave: function approvalconditionsave(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-获取默认审批人和抄送人
    approvalsetgetdefaultprocess: function approvalsetgetdefaultprocess(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-清空审批流程
    approvalsetdeleteprocess: function approvalsetdeleteprocess(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-获取分组列表
    approvalcategorylist: function approvalcategorylist(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    //审批流程-审批首页
    approvalindex: function approvalindex(ip, postdata) {
        var ipstr = ip + '?companyId=' + postdata.companyId
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-查询审批数据列表
    approvaldatalist: function approvaldatalist(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-删除审批数据
    approvaldatadelete: function approvaldatadelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 审批流程-分页获取审批导出记录列表
    approvaldatalog: function approvaldatalog(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
}
export default sign