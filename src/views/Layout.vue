<template>
    <div>
        <div class="header" v-if="showHeader"> 
            <div class="header-content" 
            :style="{ width : proxy.globalInfo.bodyWidth + 'px' }">
                <!-- logo -->
                <router-link to="/" class="logo">
                    <span v-for="item in logoInfo" :key="{item}" :style="{ color: item.color }">{{ item.letter }}</span>
                </router-link>
                <!-- 板块信息 -->
                <div class="menu-panel"></div>
                <!-- 登陆 注册 用户信息 -->
                <div class="user-info-panel">
                    <div class='op-btn'>
                        <el-button type="primary" class="op-btn">
                            发帖<span class="iconfont icon-add"></span>
                        </el-button>
                        <el-button type="primary" class="op-btn">
                            搜索<span class="iconfont icon-search"></span>
                        </el-button>
                        <el-button-group :style="{ 'margin-left' : '10px' }">
                            <el-button type="primary" plain>登陆</el-button>
                            <el-button type="primary" plain>注册</el-button>
                        </el-button-group>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div :style=" {height: '200px', background : 'red' }">1</div>
            <div :style=" {height: '200px', background : 'blue' }">2</div>
            <div :style=" {height: '200px', background : 'red' }">3</div>
            <div :style=" {height: '200px', background : 'blue' }">4</div>
            <div :style=" {height: '200px', background : 'red' }">5</div>
            <div :style=" {height: '200px', background : 'blue' }">6</div>
            <!-- <router-view /> -->
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const { proxy } = getCurrentInstance();
const router = useRouter;
const route = useRoute;

const logoInfo = ref([
    {
        letter: "E",
        color: "#3285FF",
    },
    {
        letter: "a",
        color: "#FB3624",
    },
    {
        letter: "s",
        color: "#FFBA02",
    },
    {
        letter: "y",
        color: "#3285FF",
    },
    {
        letter: "b",
        color: "#25B24E",
    },
    {
        letter: "b",
        color: "#FD3224",
    },
    {
        letter: "s",
        color: "#FFBA02",
    }
])

const showHeader = ref(true);

const getScrollTop = () => {
    let scrollTop = 
        document.getElementById.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;
    return scrollTop;
}

const initScroll = () => {
    let initScrollTop = getScrollTop();
    let scrollType = 0;
    window.addEventListener("scroll", () => {
        let currentScrollTop = getScrollTop();
        if (currentScrollTop > initScrollTop) {
            // 往下滚动
            scrollType = 1;
        }
        else {
            // 往上滚动
            scrollType = 0;
        }
        initScrollTop = currentScrollTop;
        if (scrollType == 1 && currentScrollTop > 100) {
            showHeader.value = false;
        }
        else {
            showHeader.value = true;
        }
    })
}

onMounted(() => {
    initScroll();
})
</script>

<style lang="scss">
.header {
    width: 100%;
    position: fixed;
    box-shadow: 0 2px 6px 0 #ddd;
    z-index: 1000;
    background: white;
    .header-content {
        margin :0px auto;
        align-items: center;
        padding: 0px; 
        height: 60px;
        display: flex;
        align-items: center;
        .logo {
            display: block;
            text-decoration: none;
            margin-right: 5px;
            span {
                font-size: 35px;
            }   
        }
    }
    .menu-panel {
        flex: 1px;
    }
    .user-info-panel {
        width:300px;
        display: flex;
        .op-btn {
            .iconfont {
                margin-left: 5px;
            }
            .el-button + .el-button {
                margin-left: 5px;
            }
        }
    }
}
</style>