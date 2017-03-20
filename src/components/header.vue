<template>
    <div class="hd">
        <div class="hd-top">
            <div class="container visible-xs hd-top-xs"></div>
            <div class="container hidden-xs clearfix">
                <div class="hd-top-left pull-left">
                    <ul class="clearfix">
                        <li v-for="role in roles">
                            <a href="javascript:void(0);">{{role}}</a>
                        </li>
                    </ul>
                </div>
                <div class="hd-top-right pull-right">
                    <ul>
                        <li v-for="tool in tools">
                            <a href="javascript:void(0);">{{tool}}</a>
                        </li>
                        <li class="spcial-li">
                            <form class="search-box">
                                <div class="search-btn-wrapper">
                                    <a class="search-btn" href="javascript:void(0);">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </a>
                                </div>
                                <input type="text" class="search-part" placeholder="search..">
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="hd-center">
            <div class="container hidden-xs clearfix">
                <div class="logo-wrapper img-box pull-left">
                    <img src="../public/img/logo.png" alt="福建师范大学">
                </div>
                <div class="navigator-wrapper pull-right">
                    <ul class="clearfix">
                        <li class="nav-item" v-for="(nav,index) in navBar">
                            <a href="javascript:void(0);" class="nav-title">
                                {{nav.title}}
                                <span class="caret"></span>
                            </a>
                            <div class="nav-content">
                                <div class="row">
                                    <div class="col-xs-7">
                                        <div class="caption">
                                            <div class="row">
                                                <div class="col-xs-6 img-box">
                                                    <img :src="nav.img" alt>
                                                </div>
                                                <div class="col-xs-6 description">{{nav.desc}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-5 nav-second-title">
                                        <div class="row">
                                            <ul class="col-lg-5 col-xs-6">
                                                <li v-for="(secTitle,index) in nav.secTitle" v-if="index<4">
                                                    <a href="javascript:void(0);">{{secTitle}}</a>
                                                </li>
                                            </ul>
                                            <ul class="col-lg-5 col-xs-6">
                                                <li v-for="(secTitle,index) in nav.secTitle" v-if="index>=4">
                                                   <a href="javascript:void(0);">{{secTitle}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="hd-xs visible-xs">
            <div class="logo-wrapper img-box pull-left">
                <img src="../public/img/logo.png" alt="福建师范大学">
            </div>
            <div class="navigator-wrapper-xs navbar navbar-default">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#xs-nav" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse nav-menu-box-xs" id="xs-nav">
                    <div class="container">
                        <div class="nav-menu-xs row">
                            <a href="javascript:void(0);" class="col-xs-12" v-for="nav in navBar">{{nav.title}}</a>
                        </div>
                        <div class="search-box-xs row">
                            <form class="search-wrapper col-xs-12">
                                <div class="search-btn-wrapper">
                                    <a class="search-btn" href="javascript:void(0);">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </a>
                                </div>
                                <input type="text" class="search-part" placeholder="search..">
                            </form>
                        </div>
                        <div class="nav-top-xs row">
                            <div class="nav-left-xs col-xs-6 clearfix">
                                <a href="javascript:void(0);" v-for="role in roles">{{role}}</a>
                            </div>
                            <div class="nav-right-xs col-xs-6 clearfix">
                                <a href="javascript:void(0);" v-for="tool in tools">{{tool}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'hdPart',
        data(){
            return {
                roles:['学生','教职工','家长','校友','访客'],
                tools:['邮箱','BBS','图书馆','信息公开','English'],
                navBar:[
                    {
                        title:'师大概况',
                        desc:'师大是常为新的，\n改进的运动的先锋，\n 要使中国向着好的，\n往上的道路走。',
                        img:'./dist/img/campus.jpg',
                        secTitle:['师大简介','组织机构','现任领导','历任领导','历史名人','绿色风景']
                    },
                    {
                        title:'招生就业',
                        desc:'校园风景美不胜收,\n恰似你将要留在这里的青春年华。\n\n福建师范大学欢迎你！',
                        img:'./dist/img/campus.jpg',
                        secTitle:['本科生','研究生','留学生','继续教育','网路教育','就业指导中心']
                    },
                    {
                        title:'教育教学',
                        desc:'思想自由、兼容并包。\n\n教育应指导社会，而非追逐社会！',
                        img:'./dist/img/campus.jpg',
                        secTitle:['师资队伍','社会科学研究','研究生教育','精品课程','课程平台','教学系统']
                    },
                    {
                        title:'科学研究',
                        desc:'博学之，审问之，\n\n慎思之，明辨之，笃行之。',
                        img:'./dist/img/campus.jpg',
                        secTitle:['科学技术研究','本科生教育','师大学报—自然版','师大学报—哲学版','科研创新平台','人文社科研究基地']
                    },
                    {
                        title:'校园生活',
                        desc:'秋冬春夏，\n伴随着四时的运行，\n青春和师大融为一体，\n师大成为永恒。\n',
                        img:'./dist/img/campus.jpg',
                        secTitle:['师大快讯','动态信息','媒体师大','师大校报','广播电台','学生电视台']
                    }
                ]
            }
        }
    }
</script>