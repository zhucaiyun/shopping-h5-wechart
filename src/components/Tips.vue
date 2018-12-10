<template>
  <!-- 提示弹层 -->
  <div class="tips" v-show="$store.state.tips.show">
    <h3>{{$store.state.tips.title}}</h3> 
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Tips extends Vue {
  tips: any = this.$store.state.tips
}
</script>
<style scoped lang="scss">
.tips{
	display: flex;
	justify-content: center;
  flex-direction: column;
	align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  color: #fff;
  h3{
    padding: .1rem .2rem;
    font-size: 12px;
    line-height: 12px;
    background-color: rgba(0,0,0,0.8);
    border-radius: 4px;
  }
}
</style>
