<template>
    <div class="menu_container container">
        <div class="top" v-scroll-reveal>
            <h2>Menu</h2>
        </div>
        <div class="buttons" v-scroll-reveal="2500">
            <md-button
                v-for="(button, index) in buttons" :key="index"
                :class="button.active ? 'md-raised' : ''"
                @click="changeMenu(index)"
            >
                {{button.name}}
            </md-button>
        </div>
        <div class="products_items" v-scroll-reveal="5000">
            <md-card v-for="(product, index) in filteredProducts" :key="index">
                <md-card-media md-ratio="16:9">
                    <img :src="require(`../../assets/images/products/${product.img}`)" alt="meal">
                </md-card-media>
                <md-card-header>
                    <h2 class="title">{{ product.name }}</h2>
                    <div class="md-subhead">
                        <span>$ {{ product.price }}</span>
                    </div>
                </md-card-header>
                <md-card-content>
                    {{ product.desc }}
                </md-card-content>
            </md-card>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            buttons:[
                {name: "pizza", active: true},
                {name: "burgers", active: false},
                {name: "salads", active: false},
                {name: "dessert", active: false}
            ],
            activeProduct: "pizza",
            products: []
        }
    },
    methods: {
        changeMenu(index){
            for (let button of this.buttons){
                button.active = false;
            }
            this.buttons[index].active = true;
            this.activeProduct = this.buttons[index].name;
        }
    },
    created(){
        this.$http.get('products.json')
        .then(response => response.json())
        .then(data => {
            let list = [];
            for (let key in data){
                list.push({
                    ...data[key],
                    id: key
                })
            }
            this.products = list;
        })
        .catch(error => console.log(error))
    },
    computed: {
        filteredProducts(){
            let filtered = [];
            for(let product of this.products){
                if(product.type === this.activeProduct) filtered.push(product);
            }
            return filtered;
        }
    }
}
</script>

<style scoped>
    .md-card {
        width: 32%;
        margin-bottom: 20px;
    }
    .products_items {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>