<template>
    <div class="t-main-wrap">
        <!-- 布局容器组件 -->
        <a-layout style="height: 100%">
          <!-- 左侧容器组件 -->
          <a-layout-sider>
              <a-menu
                @click="handleClickMenu"
                :selected-keys="[this.$route.path]"
                theme="dark"
                style="width: 100%"
                mode="inline">
                <a-menu-item key="/home">首页</a-menu-item>
                <a-menu-item key="/about">介绍页</a-menu-item>
            </a-menu>
          </a-layout-sider>
          <a-layout>
            <!-- 顶部容器组件 -->
            <a-layout-header style="background: #fff">
                 <a-dropdown>
                    <a-avatar>USER</a-avatar>
                    <a-menu slot="overlay">
                        <a-menu-item key="logout">退出登录</a-menu-item>
                    </a-menu>
                </a-dropdown>
            </a-layout-header>
            <!-- 内容容器组件 -->
            <a-layout-content>
                <!-- 路由视图渲染组件 -->
                <router-view></router-view>
            </a-layout-content>
          </a-layout>
        </a-layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    name: 'TMain'
})
export default class TMain extends Vue {
     public handleClickMenu({item, key, keyPath}) {
        this.$router.push(key)
    }
}
</script>

<style lang="less">
.t-main-wrap{
    height: 100%;
}
</style>