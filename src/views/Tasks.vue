<template>
  <v-container fill-height fluid>
    <v-layout justify-center align-center>
      <v-flex xs12>
        <material-card
          color="info"
          title="Tareas"
          text="Escoge una tarea a realizar"
        >
          <v-layout>
            <!-- List of Tasks -->
            <v-flex lg2 md4>
              <v-card>
                <v-data-table
                  :headers="headers"
                  :items="items"
                  hide-actions
                  color="primary"
                >
                  <template slot="headerCell" slot-scope="{ header }">
                    <span
                      class="subheading font-weight-light text-info text--darken-5"
                      v-text="header.text"
                    />
                  </template>
                  <template slot="items" slot-scope="{ item }">
                    <td>{{ item.name }}</td>
                    <td>{{ item.country }}</td>
                    <td>{{ item.city }}</td>
                    <td class="text-xs-right">{{ item.salary }}</td>
                  </template>
                </v-data-table>
              </v-card>
            </v-flex>
          </v-layout>
          <!-- Start Task Button -->
          <v-layout>
            <v-spacer></v-spacer>
            <v-flex lg4 md4 xs12 class="text-xs-right">
              <v-btn
                large
                class="mx-0 font-weight-light"
                color="info"
                target="_blank"
                @click="openImage()"
              >
                <v-icon left>mdi-play-circle</v-icon>
                <span>Iniciar tarea</span>
              </v-btn>
            </v-flex>
          </v-layout>
          <canvas></canvas>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  const cv = require("opencv4nodejs");
  const path = require("path");
  export default {
    data: () => ({
      headers: [
        {
          sortable: false,
          text: "Escoge una tarea a realizar",
          value: "name"
        }
      ],
      items: [
        {
          name: "Dakota Rice"
        },
        {
          name: "Minerva Hooper"
        },
        {
          name: "Sage Rodriguez"
        },
        {
          name: "Philip Chanley"
        },
        {
          name: "Doris Greene"
        },
        {
          name: "Mason Porter"
        }
      ]
    }),
    methods: {
      async openImage() {
        await this.openWebcam();
      },
      async openWebcam() {
        const devicePort = 0;
        const camera = new cv.VideoCapture(devicePort);
        camera.readAsync((err, frame) => {
          cv.imshowWait("Image", frame);
        });
      }
    }
  };
</script>

<style lang="scss"></style>
