<template>
  <div class="login">
    <div class="login-two">
      <h1>火星</h1>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item prop="userName">
          <el-input
            v-model="ruleForm.userName"
            prefix-icon="user"
            placeholder="请输入用户名"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            v-model="ruleForm.userPwd"
            type="password"
            prefix-icon="View"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLoginSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const ruleFormRef = ref(null)
const ruleForm = reactive({
  userName: '',
  userPwd: ''
})

const rules = {
  userName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  userPwd: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
}

const handleLoginSubmit = () => {
  ruleFormRef.value.validate(async (valid) => {
    if (valid) {
      store.dispatch('user/UserApi')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  background-color: rgb(242, 255, 251);
  width: 100%;
  height: 100%;
  .login-two {
    width: 500px;
    height: 300px;
    border: 1px solid rgb(240, 237, 237);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    margin: auto;
    background-color: white;
    h1 {
      margin-top: 25px;
    }
  }
}
.demo-ruleForm {
  width: 400px;
  margin-top: 35px;
}
.el-button {
  width: 400px;
}
</style>
