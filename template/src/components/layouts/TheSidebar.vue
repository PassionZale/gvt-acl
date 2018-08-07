<template>
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu theme="dark" width="auto" :active-name="activeRoute" :open-names="openNames">
            <gvt-side-bar-item 
                v-for="item in sideBarRouters" 
                :key="item.name"
                :item="item">
            </gvt-side-bar-item>
        </Menu>
    </Sider>
</template>

<script>
import GvtSideBarItem from "./TheSideBarItem.vue";
import { mapGetters } from "vuex";
export default {
  components: { GvtSideBarItem },
  computed: {
    ...mapGetters(["sideBarRouters"])
  },
  watch: {
    $route(to, from) {
      this.initActiveRoute();
    }
  },
  data() {
    return {
      activeRoute: "",
      openNames: []
    };
  },
  created() {
    this.initActiveRoute();
    this.initOpenNames();
  },
  methods: {
    initActiveRoute() {
      let arr = this.$route.name.split("-");
      if (arr.length >= 2) {
        this.activeRoute = `${arr[0]}-${arr[1]}`;
      } else {
        this.activeRoute = this.$route.name;
      }
    },
    initOpenNames() {
      let arr = this.$route.name.split("-");
      if (arr.length > 1) {
        this.openNames.push(arr[0]);
      }
    }
  }
};
</script>