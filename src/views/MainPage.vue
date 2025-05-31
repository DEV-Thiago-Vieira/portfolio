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
import HeaderMenu from '@/components/common/HeaderMenu.vue'
import HomeSection from '@/components/home/HomeSection.vue'
import IndicationsSection from '@/components/indications/IndicationsSection.vue';
import ProjectsSection from '@/components/projects/ProjectsSection.vue';
import ContactSection from '@/components/contact/ContactSection.vue';
import FooterSection from '@/components/common/FooterSection.vue';
import AboutSection from '@/components/about/AboutSection.vue';
import TechnologiesSection from '@/components/technologies/TechnologiesSection.vue';
</script>

<style scoped></style>
