<template>
  <div
    id="contact"
    class="relative bg-zinc-900 w-full flex min-h-[80vh] flex-col gap-6 items-center justify-center p-8 overflow-hidden pt-[100px] z-10"
    v-fade-in
  >
    <canvas
      id="canvas"
      class="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      v-fade-in
    ></canvas>
    <div class="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm z-[5] md:hidden"></div>

    <h1
      class="relative text-3xl font-bold mt-10 text-center text-white z-10"
      style="text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8)"
    >
      O site acabou... <br />
      Mas não precisa ser nossa despedida.
    </h1>

    <blockquote class="text-center max-w-xl italic text-gray-300 px-4 z-10 relative">
      <p class="text-lg leading-relaxed">
        "Todo trabalho é um autorretrato da pessoa que o realizou. Autografe sua obra com
        excelência!"
      </p>
      <cite class="block mt-2 text-sm not-italic font-medium text-gray-400">
        — Ivonete Vieira
      </cite>
    </blockquote>

    <Transition name="fade-scale" mode="out-in">
      <div
        v-if="formStatus === 'idle'"
        class="w-full max-w-xl bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-8 mt-6 space-y-8 z-10 relative"
      >
        <form @submit.prevent="submitForm" novalidate class="space-y-8">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-200 mb-2">
              Nome <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              :class="[inputClass(errors.name)]"
              placeholder="Seu nome"
              @input="clearErrorOnInput('name')"
            />
            <Transition name="fade-error">
              <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
            </Transition>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-200 mb-2">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              :class="[inputClass(errors.email)]"
              placeholder="Seu email"
              @input="clearErrorOnInput('email')"
            />
            <Transition name="fade-error">
              <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
            </Transition>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-200 mb-2">
              Mensagem <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              :class="[inputClass(errors.message)]"
              placeholder="Escreva sua mensagem aqui..."
              @input="clearErrorOnInput('message')"
            ></textarea>
            <Transition name="fade-error">
              <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
            </Transition>
          </div>

          <button
            type="submit"
            class="w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200 shadow-lg cursor-pointer"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>

      <div
        v-else-if="formStatus === 'success'"
        class="w-full max-w-xl bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-8 mt-6 text-center text-green-400 font-semibold z-10 relative"
      >
        <SuccessIcon />
        <p class="mt-4 text-lg">Mensagem enviada com sucesso!</p>
      </div>

      <div
        v-else-if="formStatus === 'error'"
        class="w-full max-w-xl bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-8 mt-6 text-center text-red-400 font-semibold z-10 relative"
      >
        <ErrorIcon />
        <p class="mt-4 text-lg">Falha ao enviar a mensagem.</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import SuccessIcon from './contact/SuccessIcon.vue'
import ErrorIcon from './contact/ErrorIcon.vue'
import { BlobCanvas } from '@/assets/animations/BlobCanvas'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const formStatus = ref<'idle' | 'success' | 'error'>('idle')

const validateField = (field: keyof typeof form) => {
  const value = form[field].trim()
  if (!value) {
    errors[field] = 'Campo obrigatório'
  } else {
    errors[field] = ''
    if (field === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) errors.email = 'Email inválido'
    }
  }
}

const clearErrorOnInput = (field: keyof typeof form) => {
  const value = form[field].trim()
  if (!value) {
    errors[field] = 'Campo obrigatório'
    return
  }
  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    errors.email = emailRegex.test(value) ? '' : 'Email inválido'
  } else {
    errors[field] = ''
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('message')
  return !errors.name && !errors.email && !errors.message
}

const submitForm = () => {
  if (!validateForm()) return
  setTimeout(() => {
    const success = Math.random() > 0.3
    formStatus.value = success ? 'success' : 'error'
    if (success) {
      form.name = ''
      form.email = ''
      form.message = ''
    }
    setTimeout(() => {
      formStatus.value = 'idle'
    }, 3000)
  }, 1000)
}

const inputClass = (error: string) =>
  `w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-400 border focus:outline-none focus:ring-2 ${
    error ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-orange-400'
  }`

let canvasApp: BlobCanvas

onMounted(() => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement
  if (canvas) {
    canvasApp = new BlobCanvas(canvas)
    canvasApp.start()
  }
})

onBeforeUnmount(() => {
  canvasApp?.stop()
})
</script>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.4s ease;
}
.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to {
  opacity: 1;
  transform: scale(1);
}
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-error-enter-active,
.fade-error-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-error-enter-from,
.fade-error-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
.fade-error-enter-to,
.fade-error-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
