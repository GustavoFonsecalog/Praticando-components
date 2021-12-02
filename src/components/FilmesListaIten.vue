<template>
    <li class="list-group-item">
        <span>{{ filme.titulo }} {{filme.Ano}} </span>
        <button @click="selecionarFilme" class="btn btn-success float-right">Selecionar</button>
    </li>
</template>

<script>

import {eventBus} from './../main'

export default {

    props: {
        filme: {
        typeof: Object,
        require: true
        }
    },
    methods: {
        selecionarFilme(){
            eventBus.$emit('movieSelect', this.filme)
        }
    }
}   
</script>
