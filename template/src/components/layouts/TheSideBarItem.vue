<template>
<div  class="menu-wrapper">
    <div v-if="!item.hidden && item.children">
        <template v-if="item.children && item.children.length">
            <Submenu :name="item.name">
                <template slot="title">
                    <Icon :type="item.meta.icon"></Icon>
                    \{{ item.meta.title }}
                </template>
                <router-link v-for="child in item.children" :key="child.name" :to="{name: child.name}">
                    <MenuItem :name="child.name">
                        \{{ child.meta.title }}
                    </MenuItem>
                </router-link>
            </Submenu>
        </template>
    </div>
    <div v-if="item.name === 'console'">
        <router-link :to="{name: item.name}">
            <MenuItem :name="item.name">
                <Icon :type="item.meta.icon"></Icon>
                \{{ item.meta.title }}
            </MenuItem>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

