<template>
  <v-container fluid>
    <v-row>
      <!-- Columna para la tabla de usuarios -->
      <v-col cols="8">
        <UserList @selectUser="selectUser" />
      </v-col>

      <!-- Columna para el detalle del usuario -->
      <v-col cols="4">
        <router-view />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import UserList from '@/components/UserList.vue';

const router = useRouter();

const selectUser = (userId) => {
  router.push(`/users/${userId}`);
};
</script>
