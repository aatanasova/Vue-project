<template>
    <h2>TO DO LIST: {{ itemList.length }}</h2>
    <div>Completed items: {{ completedItems.length }} </div>
    <ul>
        <li v-for="(item, index) in itemList" :key="index" @click="openModal(item)">
            {{ item.title }}
            <button @click.prevent="completeItem(item.id)">Complete</button>
            <button @click.prevent="deleteItem(item.id)">Delete</button>
        </li>
    </ul>
    <EditModal v-if="isModalOpen" :editedItem="editedItem" :isModalOpen="isModalOpen" @update-item="updateItem"  @close-modal="closeModal"/>

</template>

<script setup>
    import { computed, ref} from 'vue'
    import { useStore } from 'vuex'
    import EditModal from './EditModal.vue';

    const store = useStore()

    const itemList = computed(() => store.state.toDoList);
    const completedItems = computed(() => store.state.completedItems);

    const isModalOpen = ref(false);

    const editedItem = ref({ title: '', description: '' });

    const openModal = (item) => {
        editedItem.value = { ...item }; // Clone the item to avoid modifying the original data directly
        console.log("EDITEM ITEM", editedItem.value)
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
    };

    const deleteItem = (id) => {
        store.dispatch('deleteItem', id)
        isModalOpen.value = false
    }

    const completeItem = (id) => {
        store.dispatch('completeItem', id)
        isModalOpen.value = false
    }

    const updateItem = (editedItem) => {
        store.dispatch('updateItem', editedItem)
        isModalOpen.value = false;
    }


</script>

<style scoped>
    h2 {
    color: #333;
    }

    div {
    color: #555;
    margin-bottom: 10px;
    }

    ul {
    list-style-type: none;
    padding: 0;
    }

    li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 5px 0;
    background-color: #f8f8f8;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    li:hover {
    background-color: #e0e0e0;
    }

    button {
    margin-left: 10px;
    padding: 6px 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    button:hover {
    background-color: #2980b9;
    }
</style>