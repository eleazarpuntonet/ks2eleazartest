<template>
  <v-card v-if="user" class="mx-auto" max-width="400">
    <v-card-title>{{ user.name }}</v-card-title>
    <v-card-subtitle>{{ user.email }}</v-card-subtitle>
    <v-card-text>
      <div><strong>ID:</strong> {{ user.id }}</div>
      <div><strong>Created At:</strong> {{ formatDate(user.createdAt) }}</div>
      <div><strong>Updated At:</strong> {{ formatDate(user.updatedAt) }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="goBack" color="primary">Atras</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import userService from '@/services/UserService';
import { User } from '@/interfaces/User';

const user = ref<Partial<User>>({});
const route = useRoute();
const router = useRouter();

const fetchUser = async (userId: number) => {
  try {
    const response = await userService.getUser(userId);
    user.value = response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleString();
};

const goBack = () => {
  router.push('/users');
};

onMounted(() => {
  fetchUser(Number(route.params.userId));
});

// Escucha los cambios en los parámetros de la ruta y actualiza el usuario
watch(
  () => route.params.userId,
  (newUserId) => {
    fetchUser(Number(newUserId));
  }
);
</script>
