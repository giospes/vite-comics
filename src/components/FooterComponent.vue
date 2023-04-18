<template>
    <footer>
        <section id="up" class="py-3 wrapper">
            <ul class="d-flex">
                <li v-for="section in sections" class="px-3">
                    <h3 class="text-uppercase text-white">{{section.title}}</h3>
                    <ul class="p-0">
                        <li id="text-footer" class="text-secondary" v-for="link in section.links" >{{ link }}</li>
                    </ul>
                </li>
            </ul>
        </section>
        <section id="down" class="">
            <div class="wrapper d-flex justify-content-between align-items-center h-100">
                <button class="">Sign-up Now!</button>
                <div>
                    <span class="text-uppercase text-primary fs-5 px-4">Follow us</span>
                    <fa class="text-secondary px-2" :icon="['fab', 'facebook']" />
                    <fa class="text-secondary px-2" :icon="['fab', 'youtube']" />
                    <fa class="text-secondary px-2" :icon="['fab', 'instagram']" />
                    <fa class="text-secondary px-2" :icon="['fab', 'linkedin']" />
                    <fa class="text-secondary px-2" :icon="['fab', 'amazon']" />
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComponent',
        data(){
            return {
                sections: [
                    {
                        title: 'dc comics',
                        links: ['Characters', 'comics', 'Movies', 'Tv', 'Games', 'Videos', 'News']
                    },
                    {
                        title: 'shop',
                        links: ['Shop DC', 'ShopDc Collectibles']
                    },
                    {
                        title: 'DC',
                        links: ['Terms of Use', 'Privacy policy','AD Choices', 'Advertising', 'Jobs', 'Subscription', 'Talent Workshops', 'CPSC Certificates', 'Ratings', 'Shop Help', 'Contact Us'] 
                    },
                    {
                        title: 'Sites',
                        links: ['Dc', 'Mad magazine', 'Dc Kids', 'Dc Universe', 'Dc Power Visa'] 
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    footer{
        background-image: url('img/footer-bg.jpg');
        background-size: cover;
        height: 400px;
        #up{
            height: 80%;
        }
        #down{
            height: 20%;
            background-color: rgb(36, 36, 36);
        }
        #text-footer{
            font-size: .9rem;
        }
    }
</style>