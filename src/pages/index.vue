<template>
    <div>
        <hd-part></hd-part>
        <banner></banner>

        <div class="main-part">
            <div class="news-part">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-xs-12 news-wrapper">
                            <div class="news-header clearfix">
                                <div class="title">师大要闻</div>
                                <a href="javascript:void(0);" class="more">所有新闻</a>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 col-xs-6 news-content content-part" v-for="(news,index) in newsPart" v-if="index < 2">
                                <a href="javascript:void(0);">
                                    <div class="thumbnail img-box">
                                        <img class="img-wrapper" v-if="news.img" :src="news.img" alt>
                                        <div class="caption">
                                            <div class="news-txt-title">{{news.title}}</div>
                                            <div class="news-date">{{news.date}}</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-sm-6 col-xs-6 news-content content-part" v-for="(news,index) in newsPart" v-if="index >= 2">
                                <a href="javascript:void(0);">
                                    <div class="thumbnail img-box">
                                        <img class="img-wrapper" v-if="news.img" :src="news.img" alt>
                                        <div class="caption">
                                            <div class="news-txt-title">{{news.title}}</div>
                                            <div class="news-date">{{news.date}}</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            </div>
                        </div>

                        <div class="col-sm-4 col-xs-12 media-wrapper">
                            <div class="media-header clearfix">
                                <div class="title">媒体师大</div>
                                <a href="javascript:void(0);" class="more">所有新闻</a>
                            </div>
                            <div class="media-content content-part" v-for="media in medium">
                                <div class="row">
                                    <div class="media-content-box pull-left">
                                        <a href="javascript:void(0);">
                                            <div class="media-content-title">{{media.title}}</div>
                                            <div class="media-owner">{{media.owner}}</div>
                                        </a>
                                    </div>
                                    <div class="media-date-box pull-left">
                                        <div class="media-date-wrapper">
                                            <div class="media-date-day">{{media.date.day}}</div>
                                            <div class="media-date-month">{{media.date.month}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-part">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8 col-xs-12 info-wrapper">
                            <div class="info-header clearfix">
                                <a href="javascript:void(0);" class="title">通知公告</a>
                            </div>
                            <div class="content-part info-content clearfix" v-for="info in infos">
                                <div class="content-wrapper">
                                    <a href="javascript:void(0);">
                                        <div class="content-title">{{info.title}}</div>
                                    </a>
                                </div>
                                <div class="date-wrapper">
                                    {{info.date.year+'.'+info.date.month+'.'+info.date.day}}
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12 class-wrapper">
                            <div class="class-header clearfix">
                                <a href="javascript:void(0)" class="title">学术讲堂</a>
                            </div>
                            <div class="class-content content-part clearfix"  v-for="speech in speeches">
                                <div class="class-content-box pull-left">
                                    <a href="javascript:void(0);">
                                        <div class="class-content-title">{{speech.title}}</div>
                                        <div class="class-owner">{{speech.date.year+'-'+speech.date.month+'-'+speech.date.day}}</div>
                                    </a>
                                </div>
                                <div class="class-date-box pull-left">
                                    <div class="class-date-wrapper">
                                        <div class="class-date-day">{{speech.date.day}}</div>
                                        <div class="class-date-month">{{speech.date.year+'.'+speech.date.month}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="more-class">
                                <a href="javascript:void(0)">更多</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <link-part></link-part>

        <footerPart></footerPart>
    </div>
</template>

<script>
    import hdPart from '../components/header.vue';
    import banner from '../components/banner.vue';
    import linkPart from '../components/link.vue';
    import footerPart from '../components/footer.vue';

    export default{
        data(){
            return{
                newsPart:[
                    {
                        title:'李岚清同志赠送我校校训篆刻印章',
                        img:'./dist/img/news-01.jpg',
                        date:'2017-03-19'
                    },
                    {
                        title:'我校举行2016年度“谢投八奖学金”颁发仪式',
                        img:'./dist/img/news-02.jpg',
                        date:'2017-03-17'
                    },
                    {
                        title:'哈佛大学杰弗里・琼斯教授应邀来校作学术报告 ',
                        img:'./dist/img/news-03.jpg',
                        date:'2017-03-17'
                    },
                    {
                        title:'省委教育工委来校检查2016年度全面从严治党主体责任落实情况',
                        img:'./dist/img/news-04.jpg',
                        date:'2017-03-14'
                    }
                ],
                medium:[
                    {
                        title:'福建师大马院入选第二批全国重点马克思主义学院',
                        date:this.yearMonth('2017.3.14','.'),
                        owner:'福建日报'
                    },
                    {
                        title:'明代科举的海上明珠——金门岛',
                        date:this.yearMonth('2017.3.14','.'),
                        owner:'福建日报'
                    },
                    {
                        title:'南音：我的文化基因',
                        date:this.yearMonth('2017.3.13','.'),
                        owner:'泉州晚报'
                    },
                    {
                        title:'福州送别著名海军史专家陈贞寿',
                        date:this.yearMonth('2017.3.11','.'),
                        owner:'福州晚报'
                    },
                    {
                        title:'福建师大旅游学院学生探索革命老区旅游精准扶贫机制获奖',
                        date:this.yearMonth('2017.3.09','.'),
                        owner:'东南网'
                    },
                    {
                        title:'福建师范大学闽南科技学院国家级大学生创新创业项目启动',
                        date:this.yearMonth('2017.3.03','.'),
                        owner:'泉州晚报'
                    }
                ],
                infos:[
                    {
                        title:'关于推荐我校优秀本科生申请国家留学基金委优秀本科生国际交流项目的通知 （第一批）',
                        date:this.splitDate('2017-3-13','-')
                    },
                    {
                        title:'关于举行创新创业教育改革形势报告会的通知 ',
                        date:this.splitDate('2017-3-08','-')
                    },
                    {
                        title:'关于2016年度纳税人自行申报个人所得税的通知',
                        date:this.splitDate('2017-3-06','-')
                    }
                ],
                speeches:[
                    {
                        title:'海岛民间信仰与闽南社会',
                        date:this.splitDate('2017-3-09','-')
                    },
                    {
                        title:'IT职业人成长之路——服务外包理念下的腾飞',
                        date:this.splitDate('2017-3-06','-')
                    }
                ]
            }
        },
        methods: {
            // 获取分割后的日期
            splitDate(date,splitTag) {
                var newDate = date.split(splitTag);
                return{
                    year:newDate[0],
                    month:newDate[1],
                    day:newDate[2]
                }
            },
            // 合并年月
            yearMonth(olddate,splitTag,addTag){
                var date = this.splitDate(olddate,splitTag);
                addTag = addTag || '.';
                return{
                    month:date.year+addTag+date.month,
                    day:date.day
                }
            }

        },
        components:{
            hdPart,
            banner,
            linkPart,
            footerPart
        }
    }
</script>