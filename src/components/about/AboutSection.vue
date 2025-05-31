<template>
  <section
    id="about"
    class="bg-zinc-900 text-white w-full min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 gap-12"
    v-fade-in
  >
    <h1 class="text-4xl font-bold text-center text-white" v-fade-in>Sobre mim</h1>

    <div class="flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full" v-fade-in>
      <div
        class="bg-zinc-800 p-2 rounded-full shadow-lg min-w-44 h-44 md:min-w-56 md:h-56 flex items-center justify-center"
      >
        <img
          src="/src/assets/img/Profile.png"
          alt="Thiago Vieira - Desenvolvedor Full Stack"
          class="object-contain w-full h-full rounded-full"
        />
      </div>

      <div class="text-center md:text-left max-w-2xl">
        <h2 class="text-2xl font-semibold text-white mb-2">Thiago Vieira</h2>
        <p class="text-orange-400 font-medium mb-4">Desenvolvedor Full Stack</p>

        <p class="text-gray-300 text-lg leading-relaxed mb-4">
          Sou graduado em <strong>Análise e Desenvolvimento de Sistemas</strong> e atuo há mais de 2 anos como desenvolvedor full stack e front-end. Tenho paixão por criar soluções práticas e essencialistas — sempre com foco no que o projeto realmente demanda.
        </p>

        <p class="text-gray-400 text-base leading-relaxed">
          Tenho experiência prática no desenvolvimento de aplicações completas, da interface ao backend,
          e sou movido pela pura curiosidade de aprender coisas novas, uma atividade que nunca tem fim.
        </p>

        <cite class="block mt-4 text-sm font-medium text-gray-500 italic">
          — Sempre aprendendo, sempre construindo.
        </cite>
      </div>
    </div>
  </section>
</template>
