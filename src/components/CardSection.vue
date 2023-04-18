<template>
    <div class="row">
        <CardComponent v-for="card in store.arrayCards" :card = 'card'></CardComponent>
    </div>
    <button class="btn btn-primary text-uppercase">Learn More</button>
</template>

<script>
    import CardComponent from './CardComponent.vue';
    import {store} from '../data/store'
    export default {
        name:'CardSection',
        components:{
            CardComponent
        }, 
        data(){
            return{
               store
            }
        }
    }
</script>

<style lang="scss" scoped>
    button{
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
</style>