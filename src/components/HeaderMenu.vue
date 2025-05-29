<template>
  <header class="flex justify-between items-center w-full  p-5 md:p-8 fixed bg-neutral-50 z-1000" v-fade-in>
    <img src="../assets/img/Icon.svg" alt="Logo" class="z-30" />

    <nav class="hidden md:flex space-x-8 text-xl font-medium">
      <a
        v-for="item in menuItems"
        :key="item.href"
        :href="item.href"
        :class="[
          'cursor-pointer transition hover:opacity-70 hover:underline',
          activeSection === item.href ? 'text-[#FBAC1F]' : 'text-black',
        ]"
      >
        {{ item.label }}
      </a>
    </nav>

    <button
      @click="toggleMenu"
      class="flex flex-col justify-center items-center w-8 h-8 space-y-1 z-30 cursor-pointer transition duration-300 md:hidden"
    >
      <span :class="[baseLineClass, menuOpen ? 'rotate-45 translate-y-1.5' : '']" />
      <span
        :class="[baseLineClass, 'transition-opacity', menuOpen ? 'opacity-0' : 'opacity-100']"
      />
      <span :class="[baseLineClass, menuOpen ? '-rotate-45 -translate-y-1.5' : '']" />
    </button>

    <Transition name="fade">
      <div
        v-show="menuOpen"
        class="fixed inset-0 bg-neutral-50 bg-opacity-80 backdrop-blur-sm flex flex-col justify-center items-center space-y-10 text-2xl font-medium transition-opacity duration-300 z-20 md:hidden"
      >
        <a
          v-for="item in menuItems"
          :key="item.href"
          :href="item.href"
          @click="closeMenu"
          :class="[
            'cursor-pointer transition hover:opacity-70 hover:underline',
            activeSection === item.href ? 'text-[#FBAC1F]' : '',
          ]"
        >
          {{ item.label }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const activeSection = ref('')

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

const baseLineClass = 'w-8 h-0.5 bg-black transform transition duration-300 ease-in-out'

const menuItems = [
  { label: 'Início', href: '#home' },
  { label: 'Indicações', href: '#indications' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Contatos', href: '#contatos' },
]

const updateActiveSection = () => {
  const scrollY = window.scrollY
  for (const item of menuItems) {
    const section = document.querySelector(item.href)
    if (section) {
      const rect = (section as HTMLElement).getBoundingClientRect()
      const offsetTop = rect.top + scrollY
      if (scrollY >= offsetTop - 100) {
        activeSection.value = item.href
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
