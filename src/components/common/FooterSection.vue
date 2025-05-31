<template>
  <footer class="bg-zinc-950 border-t border-white/10 w-full text-gray-300">
    <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
      <div class="space-y-4">
        <h2 class="text-white text-xl font-bold">Sobre</h2>
        <p class="text-sm leading-relaxed text-gray-400">
          Desenvolvido com dedicação e atenção aos detalhes. Este site é um reflexo da paixão por
          criar experiências memoráveis.
        </p>
      </div>

      <div class="space-y-4">
        <h2 class="text-white text-xl font-bold">Contato</h2>
        <ul class="space-y-2 text-sm">
          <li>
            Email:
            <a href="mailto:contact@thiago-vieira.com" class="text-orange-400 hover:underline"
              >contact@thiago-vieira.com</a
            >
          </li>
          <li>
            GitHub:
            <a
              href="https://github.com/DEV-Thiago-Vieira"
              target="_blank"
              class="text-orange-400 hover:underline"
              >github.com/DEV-Thiago-Vieira</a
            >
          </li>
          <li>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/thiago-vieira-899655214/"
              target="_blank"
              class="text-orange-400 hover:underline"
              >linkedin.com/in/thiago-vieira-899655214/</a
            >
          </li>
        </ul>
      </div>

      <div class="space-y-4">
        <h2 class="text-white text-xl font-bold">Navegação</h2>
        <div class="text-sm flex gap-[2rem]">
          <div class="flex flex-col gap-1">
            <a href="#home" class="hover:text-white">Início</a>
            <a href="#about" class="hover:text-white">Sobre</a>
            <a href="#technologies" class="hover:text-white">Tecnologias</a>
          </div>
          <div class="flex flex-col gap-1">
            <a href="#projects" class="hover:text-white">Projetos</a>
            <a href="#indications" class="hover:text-white">Indicações</a>
            <a href="#contact" class="hover:text-white">Contatos</a>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 text-center py-6 text-sm text-gray-500">
      © {{ new Date().getFullYear() }} Thiago Vieira. Todos os direitos reservados.
    </div>
  </footer>
</template>
