<template>
  <v-toolbar id="core-toolbar" app flat prominent style="background: #eee;">
    <div class="v-toolbar-title">
      <v-toolbar-title class="tertiary--text font-weight-light">
        <v-btn
          v-if="responsive"
          class="default v-btn--simple"
          dark
          icon
          @click.stop="onClickBtn"
          color="#00adad"
        >
          <v-icon>mdi-view-list</v-icon>
        </v-btn>
        {{ title }}
      </v-toolbar-title>
    </div>
    <v-spacer />
    <v-toolbar-items>
      <v-flex align-center layout py-2>
        <!-- Link to signup View -->
        <!-- <router-link
          v-if="auth"
          v-ripple="{ class: 'info--text' }"
          class="toolbar-items"
          to="/signup"
          color="purple"
        >
          Registrate
        </router-link> -->
        <!-- Link to signin View -->
        <router-link
          v-if="!auth"
          v-ripple="{ class: 'info--text' }"
          class="toolbar-items"
          to="/signin"
          color="purple"
        >
          Acceder
        </router-link>
        <!-- Link to signout  -->
        <router-link
          v-if="auth"
          @click="onLogout"
          v-ripple="{ class: 'info--text' }"
          class="toolbar-items"
          to="/signin"
          color="purple"
          @click.native="onLogout()"
        >
          Salir
        </router-link>
        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition"
        >
          <router-link
            v-ripple="{ class: 'info--text' }"
            slot="activator"
            class="toolbar-items"
            to="/notifications"
          >
            <v-badge color="error" overlap>
              <template slot="badge">
                {{ notifications.length }}
              </template>
              <v-icon color="tertiary">mdi-bell</v-icon>
            </v-badge>
          </router-link>
          <v-card>
            <v-list dense>
              <v-list-tile
                v-for="notification in notifications"
                :key="notification"
                @click="onClick"
              >
                <v-list-tile-title v-text="notification" />
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>
        <router-link
          v-ripple="{ class: 'info--text' }"
          class="toolbar-items"
          to="/user-profile"
        >
          <v-icon color="tertiary">mdi-account</v-icon>
        </router-link>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  import { mapMutations, mapState, mapActions } from "vuex";
  export default {
    data: () => ({
      notifications: [
        "Mike, John responded to your email",
        "You have 5 new tasks",
        "You're now a friend with Andrew",
        "Another Notification",
        "Another One"
      ],
      title: null,
      responsive: false
    }),
    computed: {
      auth() {
        return this.$store.getters.isAuthenticated;
      }
    },
    watch: {
      $route(val) {
        console.log("TCL: $route -> val", val.name);
        console.log("TCL: $route -> val.name", typeof val.name);
        switch (val.name) {
          case "Dashboard":
            this.title = "Dashboard";
            break;
          case "Tasks":
            this.title = "Tareas";
            break;
          default:
            this.title = "Por asignar";
        }
        // this.title = val.name;
      }
    },
    mounted() {
      this.onResponsiveInverted();
      window.addEventListener("resize", this.onResponsiveInverted);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.onResponsiveInverted);
    },
    methods: {
      ...mapActions(["logout"]),
      ...mapMutations("app", ["setDrawer", "toggleDrawer"]),
      onClickBtn() {
        this.setDrawer(!this.$store.state.app.drawer);
      },
      onClick() {
        //
      },
      onResponsiveInverted() {
        if (window.innerWidth < 991) {
          this.responsive = true;
        } else {
          this.responsive = false;
        }
      },
      onLogout() {
        this.$store.dispatch("logout");
      }
    }
  };
</script>

<style>
  #core-toolbar a {
    text-decoration: none;
  }
</style>
