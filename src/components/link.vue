<template>
    <div class="link-part">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 col-xs-6 link-wrapper" v-for="(link,index) in links">
                    <a href="javascript:void(0);" class="link-box">
                        <div class="hidden-xs link-img-wrapper img-box">
                            <img :src="link.img" alt>
                        </div>
                        <div class="link-txt-wrapper" :id="'link-txt-'+index">
                            <span :class="link.className"></span>
                            {{link.title}}
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'linkPart',
        data() {
            return{
                links:[
                    {
                        title:'信息公开',
                        img:'dist/img/link-info.jpg',
                        className:'glyphicon glyphicon-user'
                    },
                    {
                        title:'图书馆',
                        img:'dist/img/link-library.jpg',
                        className:'glyphicon glyphicon-th-large'
                    },
                    {
                        title:'校园地图',
                        img:'dist/img/link-campus.jpg',
                        className:'glyphicon glyphicon-asterisk'
                    },
                    {
                        title:'BBS',
                        img:'dist/img/link-web.jpg',
                        className:'glyphicon glyphicon-tree-deciduous'
                    },
                    {
                        title:'校内门户',
                        img:'dist/img/link-net.jpg',
                        className:'glyphicon glyphicon-home'
                    },
                    {
                        title:'领导信箱',
                        img:'dist/img/link-email.jpg',
                        className:'glyphicon glyphicon-envelope'
                    },
                    {
                        title:'网络服务',
                        img:'dist/img/link-web.jpg',
                        className:'glyphicon glyphicon-globe'
                    },
                    {
                        title:'相关友链',
                        img:'dist/img/link-relative.jpg',
                        className:'glyphicon glyphicon-link'
                    }
                ]
            }
        }
    }
</script>