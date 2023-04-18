<template>
    <header class="position-relative">
        <nav id="index" class="d-flex justify-content-between wrapper">
            <img src="img/favicon.ico" class="py-3" alt="dc logo">
            <ul class="d-flex m-0 h-100 align-items-center ">
                <li v-for="page in pages" class="h-100 px-2 "><a href="#" class="h-100 text-uppercase">{{ page }}</a></li>
            </ul>
        </nav>
        <section id="bg">

        </section>
        <section class="py-3">
            <h4 class="bg-primary text-uppercase position-absolute">current series</h4>
            <div class="h-100 wrapper  p-3">
                <CardSection v-if="store.arrayCards" class="row"></CardSection>
                <h3 v-else>Content goes Here</h3>
            </div>
        </section>
        
        <nav id="services" class="bg-primary">
            <div class="wrapper h-100">
                <ul class="d-flex m-0 px-3 h-100 align-items-center justify-content-between ">
                    <li v-for="service in services" class="h-100 px-2">
                        <img class="h-50" :src="service.img" :alt="service.name">
                        <a href="#" class="px-2 text-white  h-100 text-uppercase">{{service.name}}</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import { store } from '../data/store'
    import CardSection from './CardSection.vue'
    export default {
        name:'HeaderComponent',
        components: {
            CardSection
        },
        data(){
            return{
                store,
                pages: [
                    'characters', 'comics', 'movies', 'tv', 'games', 'collectibles', 'videos', 'fans', 'news', 'shop'
                ],
                sectionText: '',
                services:[
                    {
                        img: 'img/buy-comics-digital-comics.png',
                        name: 'digital comics'
                    },
                    {
                        img: 'img/buy-comics-merchandise.png',
                        name: 'DC Merchandise'
                    },
                    {
                        img: 'img/buy-comics-shop-locator.png',
                        name: 'Comic Shop Locator'
                    },
                    {
                        img: 'img/buy-comics-subscriptions.png',
                        name: 'Subscription'
                    },
                    {
                        img: 'img/buy-dc-power-visa.svg',
                        name: 'dc power visa'
                    }

                ]
            }
        },
        methods:{
            
        }
    }
</script>

<style lang="scss" scoped>
    header{
        #index{
            height: 100px;
        }
        
        #services{
            height: 100px;
        }

        li a{
            display: inline-block;
            line-height: 100px;
            font-size: .9rem;
        }
        li a:hover{
            color: rgb(2, 130, 249);
            border-bottom: 5px solid rgb(2, 130, 249);
        }

        section{
            background-color: rgb(28, 28, 28);
            color: white
        }

        #services img{
            height: 80px;
            max-width: 60px;
        }
        
        #bg{
            height: 400px;
            width: 100%;
            background-image: url('./img/jumbotron.jpg');
            background-size: cover;
            background-position: 50% 0%;
        }

        h4{
            padding: .6rem ;
            left: 15%;
            top: 42%;
            border-radius: 10px;
        }
    }

    
</style>