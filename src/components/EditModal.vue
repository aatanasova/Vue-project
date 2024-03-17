<!-- Modal.vue -->
<template>
    <div class="modal" v-if="isModalOpen">
      <div class="modal-content">
        <h2>Edit Item</h2>
        <label for="editedTitle">Title:</label>
        <input type="text" id="editedTitle" v-model="editedItem.title" />
        <label for="editedDescription">Description:</label>
        <textarea id="editedDescription" v-model="editedItem.description"></textarea>
        <button @click="saveChanges">Save Changes</button>
        <button @click="closeModal">Cancel</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';

  const { editedItem, isModalOpen } = defineProps(['editedItem', 'isModalOpen']);
  const emit  = defineEmits(['update-item', 'close-modal']);

  const closeModal = () => {
    emit('close-modal');
  };

  const saveChanges = () => {
    // Emit an event or call a method to update the parent component's data
    // In this example, emitting an event to the parent component
    emit('update-item', editedItem);
    closeModal();
  };
  </script>
  
<style scoped>
    .modal {
    /* display: none; Initially hide the modal */
    position: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    justify-content: center;
    align-items: center;
    }

    .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    width: 300px; /* Adjust the width as needed */
    }

    h2 {
    margin-bottom: 10px;
    }

    label {
    display: block;
    margin-bottom: 5px;
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

    button {
    background: #3498db;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }

    button:hover {
    background: #2980b9;
    }
</style>