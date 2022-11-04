<template>
  <q-page class="row items-center justify-evenly">
    <q-card class="my-card">
      <q-card-section>
        {{ text }}
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const text = computed(() => {
  return 'Hello World';
});
</script>
