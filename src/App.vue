<template>
  <v-app>
    <core-toolbar />
    <core-drawer />
    <core-view />
  </v-app>
</template>
<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  created() {
    console.log(this.router);
    this.$store.dispatch("tryAutoSignin", this.$router);
  }
};
</script>
<style lang="scss">
@import "@/styles/index.scss";
/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
