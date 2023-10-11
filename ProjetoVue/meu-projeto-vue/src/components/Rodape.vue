<template>
  <footer class="rodape">
    <!-- Conteúdo do rodapé, por exemplo, informações de direitos autorais -->
    <p>&copy; {{ new Date().getFullYear() }} Seu Nome. Todos os direitos reservados.</p>
  </footer>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */ // Desabilita temporariamente a regra do ESLint
export default {
  name: 'Rodape', // Você pode manter o nome do componente atual se preferir
};
</script>

<style scoped>
.rodape {
  background-color: #35495e;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}
</style>
