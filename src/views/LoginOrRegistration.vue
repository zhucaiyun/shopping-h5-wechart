<template>
  <div>
    <!-- <img class="welcome" src="./images/welcome.png"> -->
    <div class="form">
      <div>
        <span>+86</span>
        <input class="mobile" type='number' placeholder="请输入手机号码" v-model="mobile" maxlength="11">
      </div>
      <div>
        <input class="registerCode" type='number' placeholder="请输入验证码" v-model="registerCode" maxlength="6">
        <button class="btn" :disabled="!mobileTrue" @click="askForSendingCode">{{codeBtnText}}</button>
      </div>
      <button class="btn buy" :disabled="verifyFlag" @click="toBuy">进入课程购买</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  registerCode: string  = ''    // 验证码
  codeBtnText:  string  = '获取验证码'
  mobileTrue:   boolean = false // 手机号是否正确
  verifyFlag:   boolean = false // 手机号和验证码格式是否正确，默认false
  mobile:       string  = ''

  @Watch('mobile') watchMobile () {
    this.verifyMR()
  }
  askForSendingCode () {
    if (this.codeBtnText !== '发送验证码') { return }
    this.timer(61);
    // 请求发送验证码
    (this as any).$get('User/Leaduser/sendCode', {
      mobile: this.mobile
    }).then((res: any) => {
      // this.bus.$emit('tips',{
      //   show:true,
      //   title:res.data.message||''
      // })
    })
  }

  verifyMR () {
    const reg = /^1\d{10}$/,
          regR = /^[\da-zA-Z]{6}$/;
    if (!reg.test(this.mobile)) {
      this.verifyFlag = false
      return 
    }
    if (!regR.test(this.registerCode)) {
      this.verifyFlag = false
      return
    }
    this.verifyFlag = true
  }
  timer (seconds: number) {
    seconds--;
    if (seconds === 0) {
      this.codeBtnText = '获取验证码';
    } else {
      this.codeBtnText = seconds + 's';
      setTimeout(() => {
        this.timer(seconds);
      }, 1000)
    }
  }
  toBuy () {
    this.$store.commit('changeTips', { show: true, title: '我是提示' })
  }
}
</script>
