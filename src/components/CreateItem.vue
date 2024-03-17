<template>
    <form>
        <label>Title</label>
        <input  type="text" v-model="title"  value="title"/>

        <div>{{ title }}</div>

        <label>Description</label>
        <input v-if="!isEditing" type="text" v-model="description" @input="startEditing" value="description"/>
        <textarea v-else type="text" v-model="description" @blur="stopEditing"></textarea>

        {{ description }}

        <button @click.prevent="addItem">Add</button>
    </form>

</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const title = ref('');
const description = ref('');
const isEditing = ref(false);

const startEditing = () => {
  isEditing.value = true;
};

const stopEditing = () => {
  isEditing.value = false;
};

const addItem = () => { 
    const item = {
        title: title.value,
        description: description.value,
        complited: false,
        id: Math.random()
    }
    store.dispatch('addItem', item)

    title.value = '';
    description.value = '';
}

</script>

<style scoped>
    form {
    max-width: 700px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    }

    input,
    textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    }

    textarea {
    resize: vertical;
    }

    button {
    background: #3498db;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    }

    button:hover {
    background: #2980b9;
    }
</style>