<template>
  <div class="container">
    <svg-icon name="user"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api/user'
import SvgIcon from '@/components/SvgIcon/index.vue'

let a: Nullable<number> = 111
console.log(a)

login({
  username: 'admin',
  password: '123456'
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
