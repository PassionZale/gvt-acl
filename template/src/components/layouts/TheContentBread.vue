<template>
    <Breadcrumb :style="{margin: '16px 0'}">
        <BreadcrumbItem v-for="nav in navs" :key="nav.name">{{ nav.meta.title }}</BreadcrumbItem>
    </Breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      navs: []
    };
  },

  created() {
    this.navs = this.$route.matched;
  },

  watch: {
    $route(to, from) {
      this.navs = this.$route.matched;
    }
  }
};
</script>

