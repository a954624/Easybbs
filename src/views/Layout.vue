<template>
    <div>
        <div class="header">
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
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue';
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
</script>

<style lang="scss">
.header {
    width: 100%;
    position: fixed;
    box-shadow: 0 2px 6px 0 #ddd;
    .header-content {
        margin :0px auto;
        align-items: center;
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