<template>
<div class="text-center">
    <div v-for="product in productsData" :key="product.productcode">
        <p><b>productcode:</b> {{ product.productcode }} </p>
        <p><b>productname:</b> {{ product.productname }}</p>
        <p><b>productdescription:</b> {{ product.productdescription }}</p>
        <p><b>productprice:</b> {{ product.productprice }}</p>
        <p><b>releasedate:</b> {{ product.releasedate }}</p>
        <p><b>brandid:</b> {{ product.brand.brandid }}</p>
        <p><b>brandname:</b> {{ product.brand.brandname }}</p>
        <div v-for="productcolor in product.productcolors" :key="productcolor.colorValues">
            <p><b>colorNames:</b> {{productcolor.colorNames}} </p>
            <p><b>colorValues:</b> {{productcolor.colorValues}} </p>
        </div>
        <br>
    </div>
    <div v-for="brands in brandsData" :key="brands.brandid">
        <p>{{ brands.brandid }} {{ brands.brandname }}</p>
    </div>
    <div v-for="colors in colorsData" :key="colors.colorid">
        <p>{{ colors.colorid }} {{ colors.colorname }}</p>
    </div>
</div>
</template>

<script>

export default {
  name: 'Deck',
  props:{},
  components: {
    
  },

  data() {
    return {
      productsUrl: 'http://localhost:3000/products',
      brandsUrl: 'http://localhost:3000/brands',
      colorsUrl: 'http://localhost:3000/colors',
      productsData:[],
      brandsData:[],
      colorsData:[],
    }
  },
  methods: { 

    async getBackEndData(url){
      try{
      const res = await fetch(url)
      const data = await res.json()
      return data
      }
      catch(error){
        console.log(`Could not get! ${error}`)
      }
    },
  },
  
  async created(){
        this.productsData = await this.getBackEndData(this.productsUrl);
        this.brandsData = await this.getBackEndData(this.brandsUrl);
        this.colorsData = await this.getBackEndData(this.colorsUrl);
    },
}
</script>
