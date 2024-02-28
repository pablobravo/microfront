<template>
  <div class="card-module">
    <p class="title-1 mb-02 aside-info__title">
      {{ title || 'Título vue 3 microfront' }}
      <button
        type="button"
        class="link"
      >
        {{ buttonText || 'Botón vue 3 microfront' }}
      </button>
    </p>
  </div>
</template>

<script setup>
import "./CardModule.css"

const props = defineProps({
  title: String,
  buttonText: String,
})
</script>