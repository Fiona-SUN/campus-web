<template>
    <div class="footer-part">
        <div class="container">
            <div class="row">
                <div class="logo-wrapper col-md-7 col-sm-6 col-xs-12">
                    <div class="logo-box img-box">
                        <img src="../public/img/logo-2.png" alt>
                    </div>
                    <div class="media-wrapper">
                        <a href="javascript:void(0);" class="media-box media-weibo"></a>
                        <a href="javascript:void(0);" class="media-box media-wechat"></a>
                        <a href="javascript:void(0);" class="media-box media-qq"></a>
                    </div>
                </div>
                <div class="list-wrapper col-md-5 col-sm-6 hidden-xs">
                    <div class="role-wrapper">
                        <a href="javascript:void(0)" v-for="role in roles">
                            {{role}}
                        </a>
                    </div>
                    <hr>
                    <div class="item-wrapper">
                        <div class="row">
                            <div class="col-sm-6" v-for="item in items">
                                <a href="javascirpt:void(0)">
                                    {{item}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-wrapper">
                <div class="row">
                    <div class="col-sm-6 col-xs-12 copyright-box">
                        版权所有©福建师范大学
                    </div>
                    <div class="col-sm-6 col-xs-12 copyright-box">
                        地址：福建省福州市仓山区上三路8号
                    </div>
                    <div class="col-sm-6 col-xs-12 copyright-box">
                        邮编：350007
                    </div>
                    <div class="col-sm-6 col-xs-12 copyright-box">
                        闽ICP备05000146号
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'footerPart',
        data() {
            return{
                roles:['学生','教职工','家长','校友','访客'],
                items:['师大概况','招生资助','院系设置','教育教学','科学研究','合作交流','校园生活','观光访问']
            }
        }
    }
</script>