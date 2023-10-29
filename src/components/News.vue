<script>
import NewsItem from './NewsItem.vue';

export default {
  name: "App",
  components:{
    NewsItem,
  },
  data() {
    return{
      news: [
        {
            id:1,
            img:"./src/assets/img/news.png",
            title:"Tin tức 1",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id:2,
            img:"./src/assets/img/news.png",
            title:"Tin tức 2",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id:3,
            img:"./src/assets/img/news.png",
            title:"Tin tức 3",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id:4,
            img:"./src/assets/img/news.png",
            title:"Tin tức 4",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id:1,
            img:"./src/assets/img/news.png",
            title:"Tin tức 1",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id:2,
            img:"./src/assets/img/news.png",
            title:"Tin tức 2",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id:3,
            img:"./src/assets/img/news.png",
            title:"Tin tức 3",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            id:4,
            img:"./src/assets/img/news.png",
            title:"Tin tức 4",
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
      ]
    };
  },
  methods:"",
};
</script>
<template >
    <header>
    <div class="wrapper">
        <p class="news-title">
            News
        </p>        
    </div>
    </header>
    <div class="box-news">
        <NewsItem v-for="item in news" :key="item.id">
            <template #pic> <span class="pic-news"><img :src="item.img" /></span></template>
            <template  #title >{{ item.title }}</template>
            <template #desc>{{ item.desc }}</template>  
        </NewsItem>
    </div>
</template>
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