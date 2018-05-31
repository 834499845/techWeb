// 主页
<template>
    <div class="homedata">
        <div class="homeData-left">
            <div class="DataLeft-img">
                <div>
                    <img :src="orgLogo | orgLogoFun" alt="">
                </div>
                <div>
                    {{OrgOBj.companyName}}
                </div>
            </div>
            <div class="DataLeft-data">
                <div class="DataLeft-dataList">
                    <div>
                        企业人数：
                    </div>
                    <div>
                        {{OrgOBj.memberCount | strFun}}&nbsp;人
                    </div>
                </div>
                <div class="DataLeft-dataList">
                    <div>
                        部门数：
                    </div>
                    <div>
                        {{OrgOBj.deptCount | strFun}}&nbsp;个
                    </div>
                </div>
                <div class="DataLeft-dataList">
                    <div>
                        昨日使用人数：
                    </div>
                    <div>
                        {{useCount | strFun}}&nbsp;人
                    </div>
                </div>
            </div>
        </div>
        <div class="homeData-right">
            <div class="homeData-rightTop">
                <div class="homeDataSwipe">
                    <!-- <template>
                        <el-carousel class="carousel">
                            <el-carousel-item class="carousel" v-for="(item,index) in swipeLists" :key="index">
                                <img :src="item.img" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </template> -->
                    <div>
                      <img src="/static/img/banner.png" alt="">
                    </div>
                </div>
            </div>
            <div class="homeData-rightBottom">
                <div class="homeDatashortcut">
                    <div class="homeData-shortcut-title">
                        快捷入口
                    </div>
                    <div class="homeData-shortcut-list">
                        <ul>
                            <li class="shortcutLi" v-for="(item,index) in lists" :key="index" @click="listClick(index)">
                                <div>
                                    <img :src="item.logo" alt="">
                                </div>
                                <div>
                                    <div class="shortcutLi-text-top">
                                        {{item.name}}
                                    </div>
                                    <div class="shortcutLi-text-bot" v-if="item.type == 1">
                                        1人未激活
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      useCount: 0,
      OrgOBj: {},
      appIdLists: [], // 快捷入口权限
      subDataLists: [],
      orgLogo: "",
      swipeLists: [], //轮播
      lists: [] //快捷入口列表
    };
  },
  created: function() {
    var self = this;
    var accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      // 权限管理
      self.orgHome();
    } else {
      // var warningStr = "没有登录不允许访问,点击确定跳转登录页面";
      // this.$alert(warningStr, "提示", {
      //   confirmButtonText: "确定",
      //   type: "info"
      // })
      //   .then(() => {
          this.$router.push({
            path: "/login"
          });
        // })
        // .catch(() => {
        //   this.$router.push({
        //     path: "/login"
        //   });
        // });
    }
  },
  watch: {},
  filters: {
    strFun(val) {
      if (val) {
        return val;
      } else {
        return "0";
      }
    },
    orgLogoFun(val) {
      if (val) {
        return val;
      } else {
        return "/static/img/默认图片.png";
      }
    },
    timeFun(val) {
      if (val) {
        var standardTime = new Date(val * 1);
        var y, m, d, h, f;
        y = standardTime.getFullYear();
        m = standardTime.getMonth() + 1;
        m = m > 9 ? m : "0" + m;
        d = standardTime.getDate();
        d = d > 9 ? d : "0" + d;
        h = standardTime.getHours();
        h = h > 9 ? h : "0" + h;
        f = standardTime.getMinutes();
        f = f > 9 ? f : "0" + f;
        return m + "-" + d;
      } else {
        return "暂无";
      }
    }
  },
  methods: {
    // 应用列表
    listFun() {
      var self = this;
      self
        .getRpcOrgAppWorkIndex({
          orgId: sessionStorage.getItem("ORGID")
        })
        .then(data => {
          if (data.statusCode == 200) {
            if (data.data) {
              if (data.data.indexVos) {
                self.lists = [];
                data.data.indexVos.forEach(function(elel, ind1) {
                  self.appIdLists.forEach(function(eler, indr) {
                    if (elel.appKey == eler) {
                      if (elel.name == "日志") {
                        self.lists.push({
                          name: "日志",
                          path: "loglist",
                          logo: elel.logo
                        });
                      } else if (elel.name == "审批") {
                        self.lists.push({
                          name: "审批",
                          path: "examine",
                          logo: elel.logo
                        });
                      } else if (elel.name == "签到") {
                        self.lists.push({
                          name: "签到",
                          path: "sign",
                          logo: elel.logo
                        });
                      } else if (elel.name == "资讯") {
                        self.lists.push({
                          name: "资讯",
                          path: "information",
                          logo: elel.logo
                        });
                      } else if (elel.name == "公告") {
                        self.lists.push({
                          name: "公告",
                          path: "notice",
                          logo: elel.logo
                        });
                      } else {
                        self.lists.push({
                          name: "工作台",
                          path: "network",
                          logo: elel.logo
                        });
                      }
                    }
                  });
                });
              }
            }
          } else if (data.statusCode == "200003") {
            self.$message({
              type: "info",
              message: data.statusMessage
            });
            this.$router.push({
              path: "/login"
            });
          } else {
            self.$message({
              type: "info",
              message: data.statusMessage
            });
          }
        })
        .catch(msg => {
          self.$message({
            type: "info",
            message: "服务器异常"
          });
        });
    },
    // 企业主页
    orgHome() {
      var self = this;
      var obj = {
        companyId: sessionStorage.getItem("ORGID"),
        passportId: sessionStorage.getItem("passportPwdId")
      };
      if (sessionStorage.getItem("ORGID")) {
        self
          .getapiorghome({
            companyId: sessionStorage.getItem("ORGID"),
            passportId: sessionStorage.getItem("passportPwdId")
          })
          .then(data => {
            if (data.statusCode == 200) {
              if (data.data) {
                self.OrgOBj = data.data;
                var standardTime = new Date();
                var y, m, d, h, f;
                y = standardTime.getFullYear();
                m = standardTime.getMonth() + 1;
                m = m > 9 ? m : "0" + m;
                d = standardTime.getDate();
                d = d - 1;
                d = d > 9 ? d : "0" + d;
                var time = y + "-" + m + "-" + d;
                for (var key in data.data.memberRecord) {
                  if (time == key) {
                    if (data.data.memberRecord[key]) {
                      self.useCount = data.data.memberRecord[key].length;
                    }
                  }
                }
                self.orgLogo = data.data.orgLogo;
                if (data.data.subData) {
                  sessionStorage.setItem(
                    "memberId",
                    data.data.subData.memberId
                  );
                  sessionStorage.setItem(
                    "adminType",
                    data.data.subData.adminType
                  );
                  if (data.data.subData.appIds) {
                    self.appIdLists = data.data.subData.appIds;
                  }
                }

                if (data.data.member) {
                  sessionStorage.setItem("mobile", data.data.member.mobile);
                  sessionStorage.setItem(
                    "memberName",
                    data.data.member.memberName
                  );
                }
                self.listFun();
              } else {
                self.OrgOBj = {};
              }
            } else if (data.statusCode == "200003") {
              this.$router.push({
                path: "/login"
              });
            } else {
              this.$router.push({
                path: "/login"
              });
            }
          })
          .catch(msg => {
            self.$message({
              type: "info",
              message: "服务器异常"
            });
          });
      }
    },
    listClick(index) {
      this.$router.push({
        path: "/home/" + this.lists[index].path
      });
    },
    ...mapActions(["getapiorghome", "getRpcOrgAppWorkIndex"])
  }
};
</script>
<style scoped>
.shortcutLi {
  display: flex;
  width: 185px;
  height: 57px;
  align-items: center;
  border: 1px solid #c3c6ce;
  margin-right: 70px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 25px;
}

.shortcutLi:hover {
  border: 1px solid #38add3;
}

.shortcutLi > div:nth-child(1) {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  overflow: hidden;
  margin-left: 23px;
}

.shortcutLi > div:nth-child(1) img {
  width: 100%;
  height: 100%;
}

.shortcutLi > div:nth-child(2) {
  margin-left: 20px;
}

.shortcutLi-text-bot {
  font-size: 12px;
  color: #9c9c9c;
  height: 12px;
  line-height: 12px;
  margin-top: 7px;
}

.shortcutLi-text-top {
  font-size: 15px;
  color: #575757;
  height: 16px;
  line-height: 16px;
}

.homeData-shortcut-list ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.homeData-shortcut-list {
  width: 100%;
  min-height: 60px;
  margin-top: 25px;
}

.homeData-shortcut-title {
  height: 20px;
  font-size: 19px;
  width: 100%;
  color: #000;
}

.homeDatashortcut {
  width: 800px;
  min-height: 235px;
}

.homeData-rightBottom {
  min-height: 280px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.carousel {
  width: 800px;
  height: 235px !important;
  overflow: hidden;
  border-radius: 5px;
}

.carousel img {
  width: 800px;
  height: 235px !important;
  border-radius: 5px;
}

.homeDataSwipe {
  width: 800px;
  height: 320px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.homeDataSwipe img {
  width: 800px;
  height: 320px;
}

.homeData-rightTop {
  height: 240px;
  width: 100%;
  margin-top: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.DataLeft-data {
  width: 300px;
  min-width: 400px;
  overflow: hidden;
}

.DataLeft-dataList {
  display: flex;
  justify-content: space-between;
  width: 270px;
  height: 20px;
  margin-left: 15px;
  margin-top: 20px;
}

.DataLeft-dataList > div:nth-child(1) {
  color: #929292;
  text-align: left;
}

.DataLeft-dataList > div:nth-child(2) {
  color: #575757;
}

.DataLeft-img > div {
  width: 100%;
  text-align: center;
  font-size: 15px;
}

.DataLeft-img > div:nth-child(1) {
  height: 70px;
  display: flex;
  margin-top: 25px;
  justify-content: center;
}

.DataLeft-img > div:nth-child(2) {
  margin-top: 17px;
  height: 15px;
}

.DataLeft-img > div:nth-child(1) img {
  height: 70px;
  width: 70px;
}

.DataLeft-img {
  width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.DataLeft-img::after {
  position: absolute;
  bottom: 0;
  left: 15px;
  width: 270px;
  height: 1px;
  background-color: #ccc;
  content: "";
}

.homeData-left {
  width: 300px;
  background-color: #f4f6f8;
}

.homeData-right {
  width: 899px;
  background-color: #fff;
  border-left: 1px solid #dedede;
}

.homedata {
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  min-height: 497px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>