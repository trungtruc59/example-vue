<script>
    import NewsItem from '../components/NewsItem.vue'
    export default {
    components:{
        NewsItem,
    },
    data() {
        return{
        newsDtail: null,
        };
    },
    created(){
        fetch("http://localhost:3000/news/"+this.$route.params.id).then((response) => response.json()).then((data) => (this.newsDtail = data));
    },
};
</script>
<template>
    <div class="box-news" v-if="newsDtail">
        <NewsItem >
            <template #pic> <span class="pic-news w-100" ><img :src="'../src/assets/img/'+newsDtail.img" /></span></template>
            <template  #title >{{ newsDtail.title }}</template>
            <template #desc>{{ newsDtail.desc }}</template>  
        </NewsItem>
    </div>
    <div v-else>Loading News... PLease wait</div>
</template>
<style scoped>
.box-news .news-items{background: transparent; color: #fff; box-shadow: none;}
.pic-news.w-100 img{width: 60%;}
</style>