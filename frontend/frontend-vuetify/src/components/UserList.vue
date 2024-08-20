<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="10"
          class="elevation-1"
          @click:row="onRowClick"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Administración de Usuarios</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn @click="openCreateDialog" color="primary">Agregar Usuario</v-btn>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn icon @click="editUser(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteUser(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>

    <UserForm
      v-if="dialog"
      :user="currentUser"
      :edit-mode="editMode"
      @close="closeDialog"
      @save="fetchUsers"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import userService from '@/services/UserService.ts';
import { User } from '@/interfaces/User.interface';
import UserForm from '@/components/UserForm.vue';

export default defineComponent({
  name: 'UserList',
  components: { UserForm },
  setup(props, { emit }) {
    const users = ref<User[]>([]);
    const dialog = ref(false);
    const editMode = ref(false);
    const currentUser = ref<Partial<User>>({});

    const headers = [
      { text: 'ID', value: 'id' },
      { text: 'Name', value: 'name' },
      { text: 'Email', value: 'email' },
      { text: 'Actions', value: 'actions', sortable: false },
    ];

    const fetchUsers = async () => {
      try {
        const response = await userService.getUsers();
        users.value = response.data.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    const onRowClick = (event ,{item}) => {
      emit('selectUser', item.id);
    };

    const openCreateDialog = () => {
      currentUser.value = {};
      editMode.value = false;
      dialog.value = true;
    };

    const editUser = (user: User) => {
      currentUser.value = { ...user };
      editMode.value = true;
      dialog.value = true;
    };

    const deleteUser = async (id: number) => {
      try {
        await userService.deleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error('Error eliminando usuario:', error);
      }
    };

    const closeDialog = () => {
      dialog.value = false;
    };

    onMounted(fetchUsers);

    return {
      users,
      headers,
      dialog,
      currentUser,
      editMode,
      openCreateDialog,
      editUser,
      deleteUser,
      closeDialog,
      fetchUsers,
      onRowClick,
    };
  },
});
</script>
