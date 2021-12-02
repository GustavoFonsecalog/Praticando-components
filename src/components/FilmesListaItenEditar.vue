<template>
    <div>
        <h2>Editar filme</h2>

        <div class="form-group">
            <label>Titulo:</label>
            <input type="text" class="form-control" placeholder="Insira o título" :value="filme.titulo"
            @input="filmeSelecionado = {propriedade : 'titulo', valor: $event.target.value}">
            <label>Ano:</label>
            <input type="text" class="form-control" placeholder="Insira o Ano" :value="filme.Ano"
            @input="filmeSelecionado = {propriedade : 'Ano', valor: $event.target.value}">
            
        </div>
        
        <button @click="saveMovie"> Salvar </button>

    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    props:{
        filme:{
        typeof: Object,
        require: true
        }
    },
    data(){
        return{
            filmeLocal: this.filme
        }
    },
    computed:{
        filmeSelecionado: {

             get(){
                    this.filme
            },

            set(dados){
                this.filmeLocal = Object.assign(
                    {},
                    this.filmeLocal,
                    { [dados.propriedade]: dados.valor }
                )
            },

        }
    },
    methods:{
        saveMovie(event){
            eventBus.attMovie(this.filmeLocal)
        }
    }
}
</script>