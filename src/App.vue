<template>
  <div class="container">
    <svg-icon name="user"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon/index.vue'

fetch('/index.php/admin/areas')
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
}
</style>
