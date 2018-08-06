<template>
    <gvt-sidebar></gvt-sidebar>
    <div>
        <gvt-header></gvt-header>
        <gvt-footer></gvt-footer>
    </div>
</template>

<script>
import cHeader from './TheHeader.vue'
import cSidebar from  './TheSidebar.vue'
import cFooter from './TheFooter.vue'
export default {
    components: {cHeader, cSidebar, cFooter}
}
</script>

