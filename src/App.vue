<template>
  <div id="app" class="app">
    <el-container class="container">
      <el-header class="header">
        <div class="headerLeft">
          <el-tooltip :content="isCollaps? '展开侧边栏':'收起侧边栏'" placement="bottom">
            <i 
              class="iconfont iconmodular" 
              style="fontSize:26px;cursor:pointer"
              @click="isCollaps=!isCollaps"
            ></i>
          </el-tooltip>
        </div>
        <div class="headerCenter">毕业设计选题系统</div>
        <div class="headerRight">
          <el-dropdown :hide-on-click="false">
            <span class="el-dropdown-link">
              {{"登陆账号"}} <i class="iconfont iconuser" style="fontSize:26px;cursor:pointer"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <i class="iconfont iconsupplierinfo"></i>
                我的信息
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconsupplierinfo"></i>
                修改密码
              </el-dropdown-item>
              <el-dropdown-item>
                <i class="iconfont iconsupplierinfo"></i>
                退出登录
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return{
      isCollaps:true,
    }
  }
}
</script>
<style>
.app{
  height: 100%;
}
.container{
  width: 100%;
}
.header{
  display: flex;
  z-index: 20;
  align-items: center;
  font-size: 12px;
  background-color:   ;
  box-shadow: 1 2px 10px rgba(0, 0, 0, 0.05);
  
}
.headerLeft{
    flex: 0 0 160px;
    text-align: center;
  }
.headerCenter{
  flex: 1;
  overflow-x: auto;
}
.headerRight{
  text-align: right;
}
</style>
