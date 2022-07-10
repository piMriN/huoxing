<template>
  <div class="navbar">
    <div class="navbar-left">
      <el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ $route.meta.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="navbar-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ $store.getters.userInfo.userName }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{
              $store.getters.userInfo.userEmail
            }}</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup>
import { useStore } from 'vuex'
// import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowRight } from '@element-plus/icons-vue'
const router = useRouter()

const store = useStore()

// const breadcrumbdata = computed(() => {
//   return route.matched.filter((item) => item.meta.title)
// })
// console.log(breadcrumbdata, '面包屑')
const logout = async () => {
  await store.dispatch('user/logout')
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
}
.navbar-left {
  display: flex;
}
.el-icon {
  width: 30px;
}
</style>
