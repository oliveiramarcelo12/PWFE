<template>
    <div class="catalogo-livros">
    <h2>Catálogo de Livros</h2>
    <input v-model="novolivro" @keyup.enter="adicionarLivro"
    placeholder="Digite um novo livro" />
    <ul>
    <li v-for="(livro, index) in livros" :key="index">
    {{ livro.titulo }}
    <button @click="alternarStatus(livro)">Marcar como {{
    livro.assistido ? 'Não Lido' : 'Lido' }}</button>
    
    </li>
    <li v-for="(livro, index) in livros" :key="index">
  {{ livro.titulo }}
  <button @click="alternarStatus(livro)">Marcar como {{ livro.assistido ? 'Não Assistido' : 'Assistido' }}</button>
  <button @click="removerLivro(index)">Excluir</button>
</li>

    </ul>
    </div>
    </template>
    
    <script>
    export default {
    data() {
    return {
    novolivro: "",
    livros: [],
    };
    },
    methods: {
    adicionarLivro() {
    if (this.novolivro.trim() !== "") {
    this.livros.push({ titulo: this.novolivro, assistido: false });
    this.novolivro = "";
    }
    },
    alternarStatus(livro) {
    livro.assistido = !livro.assistido;
    },
    removerLivro(index) {
    this.livros.splice(index, 1);
  },
    },
    };
    </script>
    
    <style scoped>
    .catalogo-livros {
    margin: 20px;
    }
    
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    margin: 10px 0;
    }
    </style>