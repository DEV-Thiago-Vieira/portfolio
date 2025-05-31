<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRecaptchaProvider } from 'vue-recaptcha/head'

useRecaptchaProvider()
</script>
<template>
  <div>
    <router-view />
  </div>
</template>
