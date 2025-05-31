<template>
  <header-menu />
  <home-section />
  <about-section />
  <technologies-section />
  <projects-section />
  <indications-section />
  <contact-section />
  <footer-section />
</template>

<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue'
import HomeSection from '@/components/HomeSection.vue'
import IndicationsSection from '@/components/IndicationsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import FooterSection from '@/components/FooterSection.vue';
import AboutSection from '@/components/AboutSection.vue';
import TechnologiesSection from '@/components/TechnologiesSection.vue';
</script>

<style scoped></style>
