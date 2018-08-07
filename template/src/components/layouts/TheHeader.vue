<template>
  <Header :style="{background: '#363e4f'}">
    <img class="layout-logo" :src="GvtLogo" alt="GvtLogo">
    <Dropdown :style="{float: 'right'}">
        <Button type="text" :style="{color: '#fff'}">
          \{{ user.username }}
          <Icon type="arrow-down-b"></Icon>
        </Button>
        <DropdownMenu slot="list">
            <DropdownItem>
              返回UMS
            </DropdownItem>
            <DropdownItem>
              注销
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  </Header>
</template>

<script>
import GvtLogo from "../../assets/images/gvt_logo.png";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["user"])
  },
  data() {
    return {
      GvtLogo
    };
  }
};
</script>