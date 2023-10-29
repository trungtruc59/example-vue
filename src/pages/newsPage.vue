
    

<template>
    <h2>News</h2>
    <div class="box-news">
        <NewsItem v-for="item in news" :key="item.id">
            <template #pic> <span class="pic-news"><img :src="'./src/assets/img/'+item.img" /></span></template>
            <template  #title ><router-link :to="`/news/${item.id}`">{{ item.title }}</router-link ></template>
            <template #desc>{{ item.desc }}</template>  
        </NewsItem>
    </div>
</template>

<script>
import NewsItem from '../components/NewsItem.vue'
export default {
    components:{
        NewsItem,
    },
    data() {
        return{
        news: null,
        };
    },
    created(){
        fetch("http://localhost:3000/news").then((response) => response.json()).then((data) => (this.news = data));
    },
};
</script>
<style scoped>
header{
    margin-top: 50px;
}
.news-title{
    font-weight: 700;
    font-size: 35px;
    color: #fff;
    text-align: center;
}
.box-news{
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3,1fr);
}
.box-news img{
    width: 100%;
    border-radius: 15px 15px 0 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    display: block;
  }
.box-news img:hover{
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
}

.box-news .pic-news{display: block;overflow: hidden;}

@media (max-width: 990px) {
    .box-news{
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3,1fr);
    }
}
@media (max-width: 768px) {
    .box-news{
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(2,1fr);
    }
   
}
</style>