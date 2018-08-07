<template>
    <Content :style="{padding: '0 16px 16px'}">
        <gvt-content-bread></gvt-content-bread>
        <Card>
            <div style="min-height: 600px">
                <router-view></router-view>
            </div>
        </Card>
    </Content>    
</template>

<script>
import GvtContentBread from "./TheContentBread.vue";
export default {
  components: { GvtContentBread }
};
</script>