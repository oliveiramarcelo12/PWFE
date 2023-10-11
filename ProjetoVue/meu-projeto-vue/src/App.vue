<template>
  <div id="app">
    <header>
      <h1>Meu Catálogo de Filmes</h1>
    </header>
    <main>
      <CatalogoDeFilmes />
      <CatalogoDeLivros />
      
      
    </main>
  
    <Rodape />
    
 
  </div>
</template>

<script>
import CatalogoDeFilmes from "@/components/CatalogoDeFilmes.vue";
import CatalogoDeLivros from "./components/CatalogoDeLivros.vue";
import Rodape from "@/components/Rodape.vue"; // Importe o componente do rodapé


export default {
components: {
CatalogoDeFilmes,
CatalogoDeLivros,
Rodape
},
};
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 20px;
}

header {background-color: #35495e;
color: #fff;
padding: 10px 0;
}


</style>