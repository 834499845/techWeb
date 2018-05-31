// 资讯
import Vue from 'vue'
const sign = {
    // 资讯-新增资讯接口
    WebInfoInsert: function WebInfoInsert(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-查询资讯分类列表
    WebInfoParent: function WebInfoParent(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-新增目录结构
    WebInfoCategoryAdd: function WebInfoCategoryAdd(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }            
        })
    },
    // 资讯-分页查询资讯类目列表
    WebInfoList: function WebInfoList(ip, postdata) {
        var ipstr;
        if (postdata.parentId) { 
            if (postdata.title) {
                ipstr = ip + "?pageNo=" + postdata.pageNo + "&pageSize=" + postdata.pageSize +  "&orgId=" + postdata.orgId + "&parentId=" + postdata.parentId + "&title=" + postdata.title
            } else {
                ipstr = ip + "?pageNo=" + postdata.pageNo + "&pageSize=" + postdata.pageSize +  "&orgId=" + postdata.orgId + "&parentId=" + postdata.parentId
            }  
        } else if(postdata.catalogId){ 
            if (postdata.title && postdata.catalogId) {
                ipstr = ip + "?pageNo=" + postdata.pageNo + "&pageSize=" + postdata.pageSize +  "&orgId=" + postdata.orgId  + "&title=" + postdata.title + "&catalogId=" + postdata.catalogId
            } else {
                ipstr = ip + "?pageNo=" + postdata.pageNo + "&pageSize=" + postdata.pageSize +  "&orgId=" + postdata.orgId + "&catalogId=" + postdata.catalogId
            }
        }         
        return Vue.http.get(ipstr, {}).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-删除类目
    WebInfoCategoryDelete: function WebInfoCategoryDelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-删除资讯
    WebInfoDelete: function WebInfoDelete(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-类目修改
    WebInfoCategoryUpdate: function WebInfoCategoryUpdate(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-资讯修改
    WebInfoUpdate: function WebInfoUpdate(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-类目排序接口
    WebInfoCategorySort: function WebInfoCategorySort(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-资讯排序接口
    WebInfoSort: function WebInfoSort(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-资讯隐藏显示接口
    WebInfoShowHide: function WebInfoShowHide(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-类目隐藏显示接口
    WebInfoCategoryShowHide: function WebInfoCategoryShowHide(ip, postdata) {
        return Vue.http.post(ip, postdata).then(response => {
            if (response.status === 200) {
                return Promise.resolve(response.body)
            } else {
                return Promise.reject(response.data.message)
            }
        })
    },
    // 资讯-查询资讯详情接口
    WebInfoDetail: function WebInfoDetail(ip, postdata) {
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