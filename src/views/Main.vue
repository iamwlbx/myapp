<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <!-- 小驼峰命名法 -->
        <common-aside />
      </el-aside>
      <el-container>
        <el-header>
          <router-link to="home">HOME</router-link> |
          <router-link to="user">USER</router-link> |
          <router-link to="/">返回主页</router-link>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';

export default {
  name: 'Main',

  data() {
    return {
      myname: '主路由Main',


    };
  },
  components: {
    CommonAside
  },


};
</script>

<style lang="scss" scoped></style>