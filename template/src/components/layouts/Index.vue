<template>
    <div class="layout">
        <gvt-side-bar></gvt-side-bar>
        <Layout :style="{marginLeft: '200px'}">
            <gvt-header></gvt-header>
            <gvt-content></gvt-content>
        </Layout>
    </div>
</template>

<script>
import GvtHeader from "./TheHeader.vue";
import GvtSideBar from "./TheSideBar.vue";
import GvtContent from "./TheContent.vue";
export default {
  components: { GvtHeader, GvtSideBar, GvtContent }
};
</script>
