<template>
  <div>
    <v-row no-gutters>
      <v-file-input
        :rules="rules"
        accept="image/png, image/jpeg, image/bmp"
        prepend-icon="mdi-Avatar"
      ></v-file-input>

      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="10"
        label="Name"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
    </v-row>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Relationship"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>

    <v-row no-gutters>
      <v-col>
        <v-btn block class="ma-1" height="175"> Facebook </v-btn>
        <v-btn block class="ma-1" height="175"> Instagram </v-btn>
        <v-btn block class="ma-1" height="175"> Whatsapp </v-btn>
      </v-col>
      <v-col>
        <v-btn block class="ma-1" height="175"> Telegram </v-btn>
        <v-btn block class="ma-1" height="175"> Twitter </v-btn>
        <v-btn block class="ma-1" height="175">other </v-btn>
      </v-col>
    </v-row>

    <!-- <v-fab-transition>
      <v-btn v-show="!hidden" color="pink" dark absolute bottom right>
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
    </v-fab-transition> -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
