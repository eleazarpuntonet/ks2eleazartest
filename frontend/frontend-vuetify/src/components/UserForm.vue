<template>
  <v-dialog v-model="open" max-width="500px">
    <v-card>
      <v-card-title>
        <span v-if="!editMode">Crear Usuario</span>
        <span v-else>Editar Usuario</span>
      </v-card-title>
      <v-card-text>
        <v-text-field v-model="localUser.name" label="Name" required></v-text-field>
        <v-text-field v-model="localUser.email" label="Email" required></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1"  @click="close">Cancelar</v-btn>
        <v-btn color="blue darken-1"  @click="saveUser">Guardar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { User } from '@/interfaces/User.interface';
import userService from '@/services/UserService';

export default defineComponent({
  name: 'UserForm',
  props: {
    user: {
      type: Object as () => Partial<User>,
      required: true,
    },
    editMode: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close', 'save'],
  setup(props, { emit }) {
    const open = ref(true);
    const localUser = ref<Partial<User>>({ ...props.user });

    const close = () => {
      open.value = false;
      emit('close');
    };

    const saveUser = async () => {
      try {
        if (props.editMode) {
          await userService.updateUser(localUser.value.id!, localUser.value);
        } else {
          await userService.createUser(localUser.value);
        }
        emit('save');
        close();
      } catch (error) {
        console.error('Error saving user:', error);
      }
    };

    watch(props.user, (newUser) => {
      localUser.value = { ...newUser };
    });

    return {
      open,
      localUser,
      close,
      saveUser,
    };
  },
});
</script>
