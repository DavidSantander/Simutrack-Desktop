<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="info"
          title="Registrate en Simutrack"
          text="Completa tu perfil"
        >
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-container py-0>
              <v-layout wrap>
                <!-- Email Input Field -->
                <v-flex xs12 md12>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Correo"
                    class="info-input"
                    required
                  ></v-text-field>
                </v-flex>
                <!-- Password input field -->
                <v-flex xs12 md12>
                  <v-text-field
                    v-model="password"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :passwordRules="[passwordRules.required, passwordRules.min]"
                    :type="show ? 'text' : 'password'"
                    name="input-10-1"
                    label="Contraseña"
                    hint="At least 8 characters"
                    counter
                    class="info-input"
                    @click:append="show = !show"
                    color="blue"
                    required
                  ></v-text-field>
                </v-flex>
                <!-- Register Button for Sign Up Form -->
                <v-flex xs12 text-xs-right>
                  <v-btn
                    :disabled="!valid"
                    class="mx-0 font-weight-light"
                    color="info"
                    @click="onSubmit()"
                  >
                    Registrate!
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    show: false,
    passwordRules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters"
    },
    lazy: false
  }),
  methods: {
    ...mapActions("app", ["signup", "signin"]),
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signin", {
        email: formData.email,
        password: formData.password
      });
    }
  }
};
</script>
