<template>
  <div class="row">

    <!-- coluna 1 -->
    <div class="col-8">

      <h2>Filmes</h2>

      <ul class="list-group list-group-flush">

        <FilmesListaIten 
        v-for="filme in filmes" 
        :key="filme.id" 
        :filme="filme" 
        @movieSelect='filmeSelecionado = $event'
        />

      </ul>
    </div>

    <!-- coluna 2 -->
    <div class="col-4">

      <FilmesListaItenInfo v-if="!editar"
      :filme="filmeSelecionado"
      @editarFilme='editarFilme'
      />

      <filmes-lista-iten-editar
      :filme='filmeSelecionado'
       v-else/>

    </div>

  </div>
</template>

<script>
import { eventBus } from '../main'

import FilmesListaIten from './FilmesListaIten.vue'
import FilmesListaItenEditar from './FilmesListaItenEditar.vue'
import FilmesListaItenInfo from './FilmesListaItenInfo.vue'

export default {
  components: {
    FilmesListaIten,
    FilmesListaItenInfo,
    FilmesListaItenEditar
  },
  data(){
    return{
      filmes: [
        { id: 1, titulo: "Vingadores: Guerra Infinita", Ano:2002},
        { id: 2, titulo: "Pantera Negra", Ano:2019},
        { id: 3, titulo: "Hulk", Ano:2005},
        { id: 4, titulo: "Deadpool 2", Ano:2010}
      ],
      filmeSelecionado: undefined,
      editar: false
    }
  },
  methods:{
    editarFilme(filme){
      this.editar = true
      this.filmeSelecionado = filme
    },
    attMovie(movieAtt){
      const indice = this.filmes.findIndex(filme => filme.id === movieAtt.id )
      this.filmes.splice(indice, 1, movieAtt)
      this.filmeSelecionado = undefined
      this.FilmesListaItenEditar = false
    }
  },
  created(){
    eventBus.$on('attMovie', this.attMovie)
  }
}
</script>

<style>

</style>
