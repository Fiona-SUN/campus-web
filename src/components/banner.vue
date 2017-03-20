<template>
    <div class="banner">
        <div id="banner" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#banner" v-for="(banImg,index) in banImgs" :data-slide-to="index" :class="{active:index==0}"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <a v-for="(banImg,index) in banImgs" :class="{active:index==0,item:true}" href="javascript:void(0);">
                    <img :src="banImg.img" alt>
                    <div class="carousel-caption">
                        {{banImg.desc}}
                    </div>
                </a>
            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#banner" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#banner" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name:'banner',
        data(){
            return{
                banImgs:[
                    {
                        img:'/dist/img/banner-01.jpg',
                        desc:'知明行笃，立诚致广'
                    },
                    {
                        img:'/dist/img/banner-02.jpg',
                        desc:'知明行笃，立诚致广'
                    },
                    {
                        img:'/dist/img/banner-03.jpg',
                        desc:'知明行笃，立诚致广'
                    }
                ]
            }
        }
    }
</script>