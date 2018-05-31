import Vue from 'vue'
require("../../API/config")
import notice from '../assets/notice'
import login from '../assets/login'
import sign from '../assets/sign'
import info from '../assets/info'
import approval from '../assets/approval'
import setting from '../assets/setting'
import log from '../assets/log'
import book from '../assets/book'
export default {
    // 通讯录-----------------------------------
    // 通讯录-获取通讯录树接口
    getbookapibookselectbooktree({ }, postdata) {
        return book.bookapibookselectbooktree(global.bookapibookselectbooktreePath, postdata)
    },
    // 通讯录-部门信息接口
    getbookapibookselectdepttree({ }, postdata) {
        return book.bookapibookselectdepttree(global.bookapibookselectdepttreePath, postdata)
    },
    // 通讯录-企业信息接口
    getbookapibookselectcompanytree({ }, postdata) {
        return book.bookapibookselectcompanytree(global.bookapibookselectcompanytreePath, postdata)
    },
    // 通讯录-公司-编辑更新公司
    getbookapibookcompanymodify({ }, postdata) {
        return book.bookapibookcompanymodify(global.bookapibookcompanymodifyPath, postdata)
    },
    // 通讯录-公司-子公司列表
    getbookapibookcompanylist({ }, postdata) {
        return book.bookapibookcompanylist(global.bookapibookcompanylistPath, postdata)
    },
    // 通讯录-公司-添加子公司
    getbookapibookchildrencompanycreate({ }, postdata) {
        return book.bookapibookchildrencompanycreate(global.bookapibookchildrencompanycreatePath, postdata)
    },
    // 通讯录-公司-修改子公司
    getbookapibookchildrencompanymodify({ }, postdata) {
        return book.bookapibookchildrencompanymodify(global.bookapibookchildrencompanymodifyPath, postdata)
    },
    // 通讯录-公司-删除子公司
    getbookapibookchilrencompanydelete({ }, postdata) {
        return book.bookapibookchilrencompanydelete(global.bookapibookchilrencompanydeletePath, postdata)
    },
    // 通讯录-部门-部门列表
    getbookapibookdeptlist({ }, postdata) {
        return book.bookapibookdeptlist(global.bookapibookdeptlistPath, postdata)
    },
    // 通讯录-部门-添加部门
    getbookapibookdeptcreate({ }, postdata) {
        return book.bookapibookdeptcreate(global.bookapibookdeptcreatePath, postdata)
    },
    // 通讯录-部门-编辑部门
    getbookapibookdeptmodify({ }, postdata) {
        return book.bookapibookdeptmodify(global.bookapibookdeptmodifyPath, postdata)
    },
    // 通讯录-部门-部门排序
    getbookapibookdeptsort({ }, postdata) {
        return book.bookapibookdeptsort(global.bookapibookdeptsortPath, postdata)
    },
    // 通讯录-部门-删除部门
    getbookapibookchildrendeptdelete({ }, postdata) {
        return book.bookapibookchildrendeptdelete(global.bookapibookchildrendeptdeletePath, postdata)
    },
    // 通讯录-成员-成员列表
    getbookapibookuserlist({ }, postdata) {
        return book.bookapibookuserlist(global.bookapibookuserlistPath, postdata)
    },
    // 通讯录-成员-调整部门
    getbookapibookuseradjustdept({ }, postdata) {
        return book.bookapibookuseradjustdept(global.bookapibookuseradjustdeptPath, postdata)
    },
    // 通讯录-成员-调整排序
    getbookapibookusersort({ }, postdata) {
        return book.bookapibookusersort(global.bookapibookusersortPath, postdata)
    },
    // 通讯录-成员-删除成员
    getbookapiuserbatchdelete({ }, postdata) {
        return book.bookapiuserbatchdelete(global.bookapiuserbatchdeletePath, postdata)
    },
    // 通讯录-成员-检索成员信息
    getbookapibookmemberquery({ }, postdata) {
        return book.bookapibookmemberquery(global.bookapibookmemberqueryPath, postdata)
    },
    // 通讯录-成员-添加成员
    getbookapibookmembercreate({ }, postdata) {
        return book.bookapibookmembercreate(global.bookapibookmembercreatePath, postdata)
    },
    // 通讯录-成员-成员详情
    getbookapibookuserdetailinfo({ }, postdata) {
        return book.bookapibookuserdetailinfo(global.bookapibookuserdetailinfoPath, postdata)
    },
    // 通讯录-成员-修改成员
    getbookapibookuserbatchdelete({ }, postdata) {
        return book.bookapibookuserbatchdelete(global.bookapibookuserbatchdeletePath, postdata)
    },
    // 编辑更新公司接口
    getcompanymodifycompany({ }, postdata) {
        return book.companymodifycompany(global.companymodifycompanyPath, postdata)
    },
    // 获取子公司信息接口
    getcompanychildrencompanydetail({ }, postdata) {
        return book.companychildrencompanydetail(global.companychildrencompanydetailPath, postdata)
    },
    // 添加子公司接口
    getcompanycreatechildrencompany({ }, postdata) {
        return book.companycreatechildrencompany(global.companycreatechildrencompanyPath, postdata)
    },
    // 删除子公司信息接口
    getcompanydeletechildrencompany({ }, postdata) {
        return book.companydeletechildrencompany(global.companydeletechildrencompanyPath, postdata)
    },
    // 编辑子公司信息接口
    getcompanymodifychildrencompany({ }, postdata) {
        return book.companymodifychildrencompany(global.companymodifychildrencompanyPath, postdata)
    },
    // 添加成员接口
    getmembercreatemember({ }, postdata) {
        return book.membercreatemember(global.membercreatememberPath, postdata)
    },
    // 获取成员详情接口
    getmembermemberdetail({ }, postdata) {
        return book.membermemberdetail(global.membermemberdetailPath, postdata)
    },
    // 编辑成员
    getmembermodifymember({ }, postdata) {
        return book.membermodifymember(global.membermodifymemberPath, postdata)
    },
    // 检索成员信息
    getmembermemberquery({ }, postdata) {
        return book.membermemberquery(global.membermemberqueryPath, postdata)
    },
    // 删除成员
    getmemberbatchdeletemember({ }, postdata) {
        return book.memberbatchdeletemember(global.memberbatchdeletememberPath, postdata)
    },
    // 调整部门
    getmemberuseradjustdept({ }, postdata) {
        return book.memberuseradjustdept(global.memberuseradjustdeptPath, postdata)
    },
    // 成员排序
    getmembermembersort({ }, postdata) {
        return book.membermembersort(global.membermembersortPath, postdata)
    },
    // 通讯录获取地区信息
    getapisystemapiareagetarea({ }, postdata) {
        return book.apisystemapiareagetarea(global.apisystemapiareagetareaPath, postdata)
    },
    // 导入通讯录
    getbookupload({ }, postdata) {
        return book.bookupload(global.bookuploadPath, postdata)
    },
    // 确认导入通讯录
    getbookconfirm({ }, postdata) {
        return book.bookconfirm(global.bookconfirmPath, postdata)
    },





    // 签到-----------------------------------
    // 日常-导出签到数据
    getsignWebSignDailyExport({ }, postdata) {
        return sign.signWebSignDailyExport(global.signWebSignDailyExportPath, postdata)
    },
    // 日常-按月统计签到信息
    getsignWebSignDailyStatistics({ }, postdata) {
        return sign.signWebSignDailyStatistics(global.signWebSignDailyStatisticsPath, postdata)
    },
    // 日常-按月查询我的签到列表详情
    getsignWebSignDailylist({ }, postdata) {
        return sign.signWebSignDailylist(global.signWebSignDailylistPath, postdata)
    },
    // 外出-按月查询我的签到列表详情
    getsignWebSignOutlist({ }, postdata) {
        return sign.signWebSignOutlist(global.signWebSignOutlistPath, postdata)
    },
    // 外出-按月统计签到信息
    getsignWebSignOutStatistics({ }, postdata) {
        return sign.signWebSignOutStatistics(global.signWebSignOutStatisticsPath, postdata)
    },
    // 外出-导出签到数据
    getsignWebSignOutExport({ }, postdata) {
        return sign.signWebSignOutExport(global.signWebSignOutExportPath, postdata)
    },
    // 签到设置
    getsignWebSignOutsetting({ }, postdata) {
        return sign.signWebSignOutsetting(global.signWebSignOutsettingPath, postdata)
    },
    // 查看企业签到设置
    getsignWebSignOutgetsetting({ }, postdata) {
        return sign.signWebSignOutgetsetting(global.signWebSignOutgetsettingPath, postdata)
    },
    // 资讯-------------------------------------
    // 资讯-新增资讯接口
    getWebInfoInsert({ }, postdata) {
        return info.WebInfoInsert(global.WebInfoInsertPath, postdata)
    },
    // 资讯-查询资讯分类列表
    getWebInfoParent({ }, postdata) {
        return info.WebInfoParent(global.WebInfoParentPath, postdata)
    },
    // 资讯-新增目录结构
    getWebInfoCategoryAdd({ }, postdata) {
        return info.WebInfoCategoryAdd(global.WebInfoCategoryAddPath, postdata)
    },
    // 资讯-分页查询资讯类目列表
    getWebInfoList({ }, postdata) {
        return info.WebInfoList(global.WebInfoListPath, postdata)
    },
    // 资讯-删除类目
    getWebInfoCategoryDelete({ }, postdata) {
        return info.WebInfoCategoryDelete(global.WebInfoCategoryDeletePath, postdata)
    },
    // 资讯-删除资讯
    getWebInfoDelete({ }, postdata) {
        return info.WebInfoDelete(global.WebInfoDeletePath, postdata)
    },
    // 资讯-类目修改
    getWebInfoCategoryUpdate({ }, postdata) {
        return info.WebInfoCategoryUpdate(global.WebInfoCategoryUpdatePath, postdata)
    },
    // 资讯-资讯修改
    getWebInfoUpdate({ }, postdata) {
        return info.WebInfoUpdate(global.WebInfoUpdatePath, postdata)
    },
    // 资讯-类目排序接口
    getWebInfoCategorySort({ }, postdata) {
        return info.WebInfoCategorySort(global.WebInfoCategorySortPath, postdata)
    },
    // 资讯-资讯排序接口
    getWebInfoSort({ }, postdata) {
        return info.WebInfoSort(global.WebInfoSortPath, postdata)
    },
    // 资讯-资讯隐藏显示接口
    getWebInfoShowHide({ }, postdata) {
        return info.WebInfoShowHide(global.WebInfoShowHidePath, postdata)
    },
    // 资讯-类目隐藏显示接口
    getWebInfoCategoryShowHide({ }, postdata) {
        return info.WebInfoCategoryShowHide(global.WebInfoCategoryShowHidePath, postdata)
    },
    // 资讯-查询资讯详情接口
    getWebInfoDetail({ }, postdata) {
        return info.WebInfoDetail(global.WebInfoDetailPath, postdata)
    },
    // 审批-------------------------------------
    // 审批-审批模板列表
    getapprovalmodellist({ }, postdata) {
        return approval.approvalmodellist(global.approvalmodellistPath, postdata)
    },
    // 审批-审批模板排序
    getapprovalmodelsort({ }, postdata) {
        return approval.approvalmodelsort(global.approvalmodelsortPath, postdata)
    },
    // 审批-编辑表单-未完成
    getapprovalm1odellist({ }, postdata) {
        return approval.approvalm2odellist(global.approvalmodellistPath, postdata)
    },
    // 审批-默认审批流程（不分条件）-未完成
    getapprovalm2odellist({ }, postdata) {
        return approval.approval3modellist(global.approvalmodellistPath, postdata)
    },
    // 审批-分条件审批流程-未完成
    getapproval3modellist({ }, postdata) {
        return approval.approval4modellist(global.approvalmodellistPath, postdata)
    },
    // 审批-设置审批模板是否停用
    getapprovalmodelisdisabled({ }, postdata) {
        return approval.approvalmodelisdisabled(global.approvalmodelisdisabledPath, postdata)
    },
    // 审批-移动某个审批模板到其他分组中
    getapprovalmodelmoveto({ }, postdata) {
        return approval.approvalmodelmoveto(global.approvalmodelmovetoPath, postdata)
    },
    // 审批-创建新审批-未完成
    getapproval4modellist({ }, postdata) {
        return approval.approvalm5odellist(global.approvalmodellistPath, postdata)
    },
    // 审批-新建分组-重命名分组
    getapprovalcategorycreateorrename({ }, postdata) {
        return approval.approvalcategorycreateorrename(global.approvalcategorycreateorrenamePath, postdata)
    },
    // 审批-分组排序
    getapprovalcategorysort({ }, postdata) {
        return approval.approvalcategorysort(global.approvalcategorysortPath, postdata)
    },
    // 审批-删除分组
    getapprovalcategorydelete({ }, postdata) {
        return approval.approvalcategorydelete(global.approvalcategorydeletePath, postdata)
    },
    // 审批-导出审批数据-未完成
    getapprovalc2ategorycreateorrename({ }, postdata) {
        return approval.approvalcategorycreat1eorrenames(global.approvalcategorycreat1eorrenamePath, postdata)
    },
    // 审批-查询审批数据列表
    getapprovaldatalist({ }, postdata) {
        return approval.approvaldatalist(global.approvaldatalistPath, postdata)
    },
    // 审批-分页获取审批导出记录列表
    getapprovaldatalog({ }, postdata) {
        return approval.approvaldatalog(global.approvaldatalogPath, postdata)
    },
    // 审批-分页获取审批导出记录列表
    getapprovalmodelgetlogo({ }, postdata) {
        return approval.approvalmodelgetlogo(global.approvalmodelgetlogoPath, postdata)
    },
    // 审批-保存审批模型接口
    getapprovaleditmodelsave({ }, postdata) {
        return approval.approvaleditmodelsave(global.approvaleditmodelsavePath, postdata)
    },
    // 审批-编辑表单时获取模型数据接口
    getapprovaleditmodelget({ }, postdata) {
        return approval.approvaleditmodelget(global.approvaleditmodelgetPath, postdata)
    },
    // 审批流程-按条件设置审批人-获取审批条件
    getapprovalconditionget({ }, postdata) {
        return approval.approvalconditionget(global.approvalconditiongetPath, postdata)
    },
    // 审批流程-保存默认审批流程
    getapprovalsetupdatedefaultprocess({ }, postdata) {
        return approval.approvalsetupdatedefaultprocess(global.approvalsetupdatedefaultprocessPath, postdata)
    },
    // 审批流程-调整按条件设置的审批流程排序
    getapprovalconditionsort({ }, postdata) {
        return approval.approvalconditionsort(global.approvalconditionsortPath, postdata)
    },
    // 审批流程-获取审批条件及对应审批人的列表
    getapprovalconditiongetapproverlist({ }, postdata) {
        return approval.approvalconditiongetapproverlist(global.approvalconditiongetapproverlistPath, postdata)
    },
    // 审批流程-编辑时获取审批条件及对应审批人
    getapprovalconditiongetapprover({ }, postdata) {
        return approval.approvalconditiongetapprover(global.approvalconditiongetapproverPath, postdata)
    },
    // 审批流程-保存条件审批人
    getapprovalconditionsave({ }, postdata) {
        return approval.approvalconditionsave(global.approvalconditionsavePath, postdata)
    },
    // 审批流程-获取默认审批人和抄送人
    getapprovalsetgetdefaultprocess({ }, postdata) {
        return approval.approvalsetgetdefaultprocess(global.approvalsetgetdefaultprocessPath, postdata)
    },
    // 审批流程-清空审批流程
    getapprovalsetdeleteprocess({ }, postdata) {
        return approval.approvalsetdeleteprocess(global.approvalsetdeleteprocessPath, postdata)
    },
    // 审批流程-获取分组列表
    getapprovalcategorylist({ }, postdata) {
        return approval.approvalcategorylist(global.approvalcategorylistPath, postdata)
    },
    // 数据导出-审批首页
    getapprovalindex({ }, postdata) {
        return approval.approvalindex(global.approvalindexPath, postdata)
    },
    // 数据导出-查询审批数据列表
    // getapprovaldatalist({ }, postdata) {
    //     return approval.approvaldatalist(global.approvaldatalistPath, postdata)
    // },
    // 数据导出-删除审批数据
    getapprovaldatadelete({ }, postdata) {
        return approval.approvaldatadelete(global.approvaldatadeletePath, postdata)
    },
    // // 数据导出-分页获取审批导出记录列表
    // getapprovaldataexportlog({ }, postdata) {
    //     return approval.approvaldataexportlog(global.approvaldataexportlogPath, postdata)
    // },
    // 登陆-------------------------------------
    // 登陆-
    getapipassportuserloginpwd({ }, postdata) {
        return login.apipassportuserloginpwd(global.apipassportuserloginpwdPath, postdata)
    },
    // 上传
    getfileuploadPic({ }, postdata) {
        return login.fileuploadPic(global.fileuploadPicPath, postdata)
    },
    getfileupload({ }, postdata) {
        return login.fileupload(global.fileuploadPath, postdata)
    },
    // 企业数据
    getapiorgdata({ }, postdata) {
        return login.apiorgdata(global.apiorgdataPath, postdata)
    },
    // 企业数据-企业根据状态获取用户
    getapiorgmembers({ }, postdata) {
        return login.apiorgmembers(global.apiorgmembersPath, postdata)
    },
    // 企业主页
    getapiorghome({ }, postdata) {
        return login.apiorghome(global.apiorghomePath, postdata)
    },
    // 主页
    // 退出
    getOauthRemoveToken({ }, postdata) {
        return login.OauthRemoveToken(global.OauthRemoveTokenPath, postdata)
    },
    // 获取企业开通应用信息
    getRpcOrgAppWorkIndex({ }, postdata) {
        return login.RpcOrgAppWorkIndex(global.RpcOrgAppWorkIndexPath, postdata)
    },
    // 设置-------------------------------------
    // 修改登录密码
    getapiSettingChangePassword({ }, postdata) {
        return setting.apiSettingChangePassword(global.apiSettingChangePasswordPath, postdata)
    },
    // 更换主管理员-发送短信验证码
    getapiSettingSendCode({ }, postdata) {
        return setting.apiSettingSendCode(global.apiSettingSendCodePath, postdata)
    },
    // 更换主管理员-校验验证码
    getapiSettingVerifyCode({ }, postdata) {
        return setting.apiSettingVerifyCode(global.apiSettingVerifyCodePath, postdata)
    },
    // 更换主管理员-更换主管理员
    getwebOrgSettingChangeMaster({ }, postdata) {
        return setting.webOrgSettingChangeMaster(global.webOrgSettingChangeMasterPath, postdata)
    },
    // 企业信息操作-获取信息
    getapiorgbookcompanyfind({ }, postdata) {
        return setting.apiorgbookcompanyfind(global.apiorgbookcompanyfindPath, postdata)
    },
    // 企业信息操作-编辑
    getapiorgbookcompanymodify({ }, postdata) {
        return setting.apiorgbookcompanymodify(global.apiorgbookcompanymodifyPath, postdata)
    },
    //查看企业标签
    getapiorgbookgetLabels({ }, postdata) {
        return setting.apiorgbookgetLabels(global.apiorgbookgetLabelsPath, postdata)
    },
    //添加企业标签
    getapiorgbookadd({ }, postdata) {
        return setting.apiorgbookadd(global.apiorgbookaddPath, postdata)
    },
    //修改企业标签
    getapiorgbookupdate({ }, postdata) {
        return setting.apiorgbookupdate(global.apiorgbookupdatePath, postdata)
    },
    //删除企业标签
    getapiorgbookdelete({ }, postdata) {
        return setting.apiorgbookdelete(global.apiorgbookdeletePath, postdata)
    },
    //查看所有子管理员信息
    getapiorgsettinglist({ }, postdata) {
        return setting.apiorgsettinglist(global.apiorgsettinglistPath, postdata)
    },
    //添加子管理员
    getapiorgsettingadd({ }, postdata) {
        return setting.apiorgsettingadd(global.apiorgsettingaddPath, postdata)
    },
    //修改子管理员
    getapiorgsettingupdate({ }, postdata) {
        return setting.apiorgsettingupdate(global.apiorgsettingupdatePath, postdata)
    },
    //删除子管理员
    getapiorgsettingdelete({ }, postdata) {
        return setting.apiorgsettingdelete(global.apiorgsettingdeletePath, postdata)
    },
    //查看子管理员信息
    getapiorgsettingget({ }, postdata) {
        return setting.apiorgsettingget(global.apiorgsettinggetPath, postdata)
    },
    //查看企业应用
    getapiorgsettinggetapp({ }, postdata) {
        return setting.apiorgsettinggetapp(global.apiorgsettinggetappPath, postdata)
    },
    // 公告-------------------------------------
    // 公告-查询公告列表接口
    getapinoticeselectnoticepage({ }, postdata) {
        return notice.apinoticeselectnoticepage(global.apinoticeselectnoticepagePath, postdata)
    },
    // 公告-公告详情
    getapinoticeselectnoticedetail({ }, postdata) {
        return notice.apinoticeselectnoticedetail(global.apinoticeselectnoticedetailPath, postdata)
    },
    // 公告-新增公共
    getapinoticeinsertnoticepage({ }, postdata) {
        return notice.apinoticeinsertnoticepage(global.apinoticeinsertnoticepagePath, postdata)
    },
    //公告-删除公告
    getapinoticedeletenoticepage({ }, postdata) {
        return notice.apinoticedeletenoticepage(global.apinoticedeletenoticepagePath, postdata)
    },
    // 日志-------------------------------------
    // 日志-分页查询日志信息
    getweblogmanagefindpage({ }, postdata) {
        return log.weblogmanagefindpage(global.weblogmanagefindpagePath, postdata)
    },
    // 日志-删除日志信息
    getweblogmanagedelete({ }, postdata) {
        return log.weblogmanagedelete(global.weblogmanagedeletePath, postdata)
    },
    // 日志-导出日志数据
    getweblogsearchexport({ }, postdata) {
        return log.weblogsearchexport(global.weblogsearchexportPath, postdata)
    },
    // 弹出框选择人和部门-------------------------------------
    // 弹出框选择人和部门
    // getapibookselectdeptinfo({ }, postdata) {
    //     return login.apibookselectdeptinfo(global.bookapibookselectdepttreePath, postdata)
    // },
    // 版本信息管理-分页查询版本信息
    getwebversionfindservicelist({ }, postdata) {
        return log.webversionfindservicelist(global.webversionfindservicelistPath, postdata)
    },
    // 版本信息管理-版本信息查看
    getwebversioninfo({ }, postdata) {
        return log.webversioninfo(global.webversioninfoPath, postdata)
    },
    // 版本信息管理-修改版本信息
    getwebversionupdate({ }, postdata) {
        return log.webversionupdate(global.webversionupdatePath, postdata)
    },
    // 版本信息管理-新增版本信息
    getwebversionsave({ }, postdata) {
        return log.webversionsave(global.webversionsavePath, postdata)
    },
}
