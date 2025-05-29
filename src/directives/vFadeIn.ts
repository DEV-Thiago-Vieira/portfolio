import type { Directive } from 'vue'

const vFadeIn: Directive = {
  beforeMount(el: HTMLElement) {
    el.classList.add(
      'opacity-0',
      'transition-opacity',
      'duration-[1000ms]',
      'ease-in-out',
      'will-change',
      'delay-[100ms]'
    )
  },

  mounted(el: HTMLElement) {
    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100')
          el.classList.remove('opacity-0')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
  }
}

export default vFadeIn
