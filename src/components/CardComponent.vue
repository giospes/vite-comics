<template>
    <div class="col-6 col-md-4 col-lg-2 d-flex flex-column align-items-center">
        <img :src="card.thumb" class alt="">
        <span class="d-block mb-3">{{ card.series }}</span>
    </div>
</template>

<script>
    export default {
       name: 'CardComponent',
       props: {
        card : Object
       }
    }
</script>

<style lang="scss" scoped>
    img{
      height: 150px;  
      width: 150px;
      object-fit: cover;
    }
    @media all and (max-width: 990px){
        img{
        height: 200px;  
        width: 200px;
        } 
    }
    @media all and (max-width: 768px){
        img{
        height: 250px;  
        width: 250px;
        } 
    }
</style>