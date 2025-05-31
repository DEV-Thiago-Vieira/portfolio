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
      <cite class="block mt-2 text-sm not-italic font-medium text-gray-400">— Ivonete Vieira</cite>
    </blockquote>

    <Transition name="fade-scale" mode="out-in">
      <div
        v-if="formStatus === 'idle'"
        class="w-full max-w-xl bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-xl p-8 mt-6 space-y-8 z-10 relative"
      >
        <form @submit.prevent="onSubmit" novalidate class="space-y-8 relative">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-200 mb-2">
              Título <span class="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              v-model="form.title"
              :class="[inputClass(errors.title)]"
              placeholder="Assunto da mensagem"
              @input="clearErrorOnInput('title')"
            />
            <Transition name="fade-error">
              <p v-if="errors.title" class="text-red-500 text-sm mt-1">{{ errors.title }}</p>
            </Transition>
          </div>

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

          <div class="text-xs text-gray-400 text-center">
            <p v-if="errorMessage" class="text-red-400 mt-1">
              {{ errorMessage }}
            </p>
            <button
              type="submit"
              :disabled="loading"
              class="mb-3 w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200 shadow-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <svg
                v-if="loading"
                class="animate-spin h-5 w-5 text-white transition-opacity duration-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-20"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-80"
                  fill="currentColor"
                  d="M12 2a10 10 0 00-9.95 9H4a8 8 0 118 8v2a10 10 0 000-20z"
                />
              </svg>
              <span>{{ loading ? 'Enviando...' : 'Enviar Mensagem' }}</span>
            </button>
            <span class="mt-3 inline-flex items-center gap-1 justify-center">
              <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.11v5.58c0 4.25-2.94 8.16-7 9.38-4.06-1.22-7-5.13-7-9.38V6.29l7-3.11zM11 10h2v6h-2v-6zm0-4h2v2h-2V6z"
                />
              </svg>
              Protegido por ReCAPTCHA
            </span>
            <p class="mt-1">
              Este site é protegido pelo reCAPTCHA e se aplicam a
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener"
                class="text-blue-400 underline hover:text-blue-300"
                >Política de Privacidade</a
              >
              e os
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener"
                class="text-blue-400 underline hover:text-blue-300"
                >Termos de Serviço</a
              >
              do Google.
            </p>
          </div>
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
        <p class="mt-4 text-lg">{{ errorMessage ?? 'Falha ao enviar a mensagem.' }}</p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import SuccessIcon from './contact/SuccessIcon.vue'
import ErrorIcon from './contact/ErrorIcon.vue'
import { BlobCanvas } from '@/assets/animations/BlobCanvas'
import { useChallengeV3 } from 'vue-recaptcha/head'
import emailjs from '@emailjs/browser'

const STORAGE_KEY = 'contact-form-data'
const { execute } = useChallengeV3('submit')
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const form = reactive({
  title: '',
  name: '',
  email: '',
  message: '',
})

const errors = reactive({
  title: '',
  name: '',
  email: '',
  message: '',
})

const formStatus = ref<'idle' | 'success' | 'error'>('idle')
const errorMessage = ref<string | null>(null)
const loading = ref(false)

watch(
  form,
  (newForm) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newForm))
  },
  { deep: true },
)

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
  validateField('title')
  validateField('name')
  validateField('email')
  validateField('message')
  return !errors.title && !errors.name && !errors.email && !errors.message
}

const onSubmit = async () => {
  if (!validateForm()) return;
  loading.value = true;

  let token: string | null = null;

  try {
    token = await execute();
  } catch (error) {
    console.error('reCAPTCHA execution failed:', error);
    formStatus.value = 'error';
    errorMessage.value = 'ReCAPTCHA falhou. Verifique a chave ou recarregue a página. Seus dados não serão perdidos.';
    loading.value = false;
    return;
  }

  console.log(token)

  if (!token) {
    formStatus.value = 'error';
    errorMessage.value = 'ReCAPTCHA não retornou um token válido.';
    loading.value = false;
    return;
  }

  const time = new Date().toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  });

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: form.name,
        email: form.email,
        title: form.title,
        message: form.message,
        time,
      },
      publicKey,
    );

    if (response.status === 200) {
      formStatus.value = 'success';
      form.title = '';
      form.name = '';
      form.email = '';
      form.message = '';
      localStorage.removeItem(STORAGE_KEY);
    } else {
      throw new Error('Erro ao enviar');
    }
  } catch (err) {
    console.error('EmailJS Error:', err);
    formStatus.value = 'error';
    errorMessage.value = 'Erro ao enviar mensagem. Tente novamente mais tarde.';
  } finally {
    loading.value = false;
    setTimeout(() => {
      formStatus.value = 'idle';
    }, 3000);
  }
};


const inputClass = (error: string) =>
  `w-full px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-400 border focus:outline-none focus:ring-2 ${
    error ? 'border-red-500 focus:ring-red-500' : 'border-white/20 focus:ring-orange-400'
  }`

let canvasApp: BlobCanvas

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    Object.assign(form, JSON.parse(saved))
  }

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
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
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
