<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="info"
          title="Accede a Simutrack"
          text="Completa tu perfil"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12>
                  <v-text-field label="Correo Electrónico" class="info-input" />
                </v-flex>
                <v-flex xs12 md12>
                  <v-text-field
                    color="blue"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="show ? 'text' : 'password'"
                    name="input-10-2"
                    hint="Almenos 8 caracteres"
                    value="wqfasds"
                    @click:append="show = !show"
                    label="Contraseña"
                    class="info-input"
                  />
                </v-flex>

                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="info">
                    Acceder
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
export default {
  data() {
    return {
      show: false,
      password: "",
      rules: {
        required: value => !!value || "Requerido.",
        min: v => v.length >= 8 || "Mínimo 8 caracteres",
        emailMatch: () => "El correo y contraseña no coinciden"
      }
    };
  }
};
</script>
