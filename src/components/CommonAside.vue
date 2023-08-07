<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          name: 'other',
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    //无子菜单
    noChildren() {
      return this.menuData.filter(item => !item.children)
    },
    //有子菜单
    hasChildren() {
      return this.menuData.filter(item => item.children)
    }
  }
}
</script>

<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
      <h3>后台管理系统</h3>
      <!-- 无子菜单 -->
      <el-menu-item v-for="item in noChildren" :key="item.name" :index="item.name" @click="$router.push(`${item.url}`)">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <!-- 有子菜单 -->
      <el-submenu v-for="item in hasChildren" :key="item.name" :index="item.name">
        <!-- 一级菜单 -->
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <!-- 二级菜单 -->
        <el-menu-item-group v-for="subitem in item.children" :key="subitem.name">
          <el-menu-item :index="subitem.name" :class="`el-icon-${subitem.icon}`">
            {{ subitem.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  height: 100vh;

  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>