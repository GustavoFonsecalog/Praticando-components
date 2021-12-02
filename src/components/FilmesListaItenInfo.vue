<template>
    <div>
        <h2>Filme selecionado</h2>

        <div class="card">
            <div class="card-body" v-if="filme">
                <h5 class="card-title">{{filme.titulo}} {{filme.Ano}}</h5>
                <button @click="editar" class="btn btn-danger float-right">Editar</button>
            </div>
            <p v-else>Selecione um Filme!</p>
        </div>

        

    </div>
</template>

<script>
import { eventBus } from './../main'
export default {
    data(){
        return{
            filme: undefined
        }
    },
    created(){
        eventBus.$on('movieSelect', (filmeSelect) => {
            this.filme = filmeSelect
       });
    },
    methods:{
        editar(){
            this.$emit('editarFilme', this.filme)
        }
    }    
}

</script>