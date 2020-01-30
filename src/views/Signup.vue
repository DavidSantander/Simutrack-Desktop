<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="info"
          title="Registrate en Simutrack"
          text="Completa tu perfil"
        >
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field label="Usuario" class="info-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field class="info-input" label="Correo Electrónico" />
                </v-flex>
                <v-flex xs12 md4>
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
                <v-flex xs12 md6>
                  <v-text-field label="Nombre" class="info-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Apellido" class="info-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Escuela" class="info-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Carrera" class="info-input" />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field label="Materia" class="info-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field label="Grupo" class="info-input" />
                </v-flex>
                <v-flex xs12 md6>
                  <v-select
                    color="blue"
                    :items="typeOfUsers"
                    label="Tipo de Usuario"
                  ></v-select>
                </v-flex>

                <v-flex xs12>
                  <v-textarea
                    class="info-input"
                    label="Acerca de mi"
                    value="¿Quien soy?"
                  />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="info">
                    Registrarse
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
import axios from "axios";
export default {
  data() {
    return {
      // Data to be stored
      password: "",
      user: "",
      email: "",
      name: "",
      lastName: "",
      school: "",
      career: "",
      subject: "",
      typeOfUsers: ["Profesor", "Alumno"],
      show: false,
      rules: {
        required: value => !!value || "Requerido.",
        min: v => v.length >= 8 || "Mínimo 8 caracteres",
        emailMatch: () => "El correo y contraseña no coinciden"
      }
    };
  },
  methods: {}
};
</script>
