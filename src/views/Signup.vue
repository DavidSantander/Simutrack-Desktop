<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card
          color="info"
          title="Registrate en Simutrack"
          text="Completa tu perfil"
        >
          <!-- <v-form ref="form" v-model="valid">
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="user"
                    label="Usuario"
                    class="info-input"
                    value=""
                  />
                </v-flex>

                 <v-flex xs12 md4>
                  <v-text-field
                    v-model="email"
                    label="Correo Electrónico"
                    class="info-input"
                    required
                  />

                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="password"
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
                    required
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="name"
                    label="Nombre"
                    class="info-input"
                    required
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="lastName"
                    label="Apellido"
                    class="info-input"
                    required
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="school"
                    label="Escuela"
                    class="info-input"
                    required
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="career"
                    label="Carrera"
                    class="info-input"
                    required
                  />
                </v-flex>
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="subject"
                    label="Materia"
                    class="info-input"
                    required
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="group"
                    label="Grupo"
                    class="info-input"
                    required
                  />
                </v-flex>
                <v-flex xs12 md6>
                  <v-select
                    color="blue"
                    :items="typeOfUsers"
                    label="Tipo de Usuario"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-textarea
                    class="info-input"
                    label="Acerca de mi"
                    value="¿Quien soy?"
                    v-model="aboutMe"
                  />
                </v-flex> 
                <v-flex xs12 text-xs-right>
                  <v-btn
                    :disabled="!valid"
                    @click="validate"
                    class="mx-0 font-weight-light"
                    color="info"
                  >
                    Registrarse
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form> -->

          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-container py-0>
              <v-layout wrap>
                <!-- User Input Field -->
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="user"
                    :counter="10"
                    :rules="userRules"
                    label="Usuario"
                    class="info-input"
                    required
                  ></v-text-field>
                </v-flex>
                <!-- Email Input Field -->
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Correo"
                    class="info-input"
                    required
                  ></v-text-field>
                </v-flex>
                <!-- Password input field -->
                <v-flex xs12 md4>
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
                <!-- Name Input Field -->
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="name"
                    label="Nombre"
                    class="info-input"
                    required
                  />
                </v-flex>
                <!-- Last Name Input Field -->
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="lastName"
                    label="Apellido"
                    class="info-input"
                    required
                  />
                </v-flex>
                <!-- School Input Field -->
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="school"
                    label="Escuela"
                    class="info-input"
                    required
                  />
                </v-flex>
                <!-- Career Input Field -->
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="career"
                    label="Carrera"
                    class="info-input"
                    required
                  />
                </v-flex>
                <!-- Subject Input Field -->
                <v-flex xs12 md4>
                  <v-text-field
                    v-model="subject"
                    label="Materia"
                    class="info-input"
                    required
                  />
                </v-flex>
                <!-- Group Input Field -->
                <v-flex xs12 md6>
                  <v-text-field
                    v-model="group"
                    label="Grupo"
                    class="info-input"
                    required
                  />
                </v-flex>
                <!-- Type of User Select Input -->
                <v-flex xs12 md6>
                  <v-select
                    v-model="select"
                    :items="userTypes"
                    :rules="[v => !!v || 'Elemento es requerido']"
                    label="Tipo de Usuario"
                    class="info-input"
                    required
                  ></v-select>
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
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    user: "",
    userRules: [
      v => !!v || "Usuario es requerido",
      v => (v && v.length <= 10) || "Usuario debe  de ser menor a 10 caracteres"
    ],
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
    name: "",
    lastName: "",
    school: "",
    career: "",
    subject: "",
    group: "",
    // User types
    select: null,
    userTypes: ["Profesor", "Alumno"],
    lazy: false
  }),
  methods: {
    onSubmit() {
      const formData = {
        user: this.user,
        email: this.email,
        password: this.password,
        name: this.name,
        lastName: this.lastName,
        school: this.school,
        career: this.career,
        subject: this.subject,
        userType: this.select
      };
      axios
        .post("https://simutrack-test.firebaseio.com/users.json", formData)
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }
};
</script>
