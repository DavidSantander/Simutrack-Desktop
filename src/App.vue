<template>
  <v-app>
    <core-toolbar />
    <core-drawer />
    <core-view />
  </v-app>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("tryAutoSignin");
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
