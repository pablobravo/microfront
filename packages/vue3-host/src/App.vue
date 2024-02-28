<template>
  <div class="layout-app">
    <h1>Aplicación microfront: Host Vue3, Microfronts Vue3, React, Vue2</h1>
    <section class="container">
      <div v-html="button"></div>
      <Card title="Card Vue 3 microfront"></Card>
      <div id="vue2RSection"></div>
      <RSectionDOM />
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ReactDOMServer from "react-dom/server"
import { defineAsyncComponent } from 'vue'
import RSection from 'vue2Microfront/vueSection'
import { vue2ToVue3 } from './utils'

const data = ref(null)

const button = computed(() => data.value )

const Card = defineAsyncComponent(() => import('vueMicrofront/CardModule'))
const RSectionDOM = vue2ToVue3(RSection, 'vue2RSection')

const fetchImport = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = (await import("reactMicrofront/Card")).default
      resolve(
        ReactDOMServer.renderToString(
          res({
            caption: "React Button",
          })
        )
      )
    } catch (err) {
      reject(err)
    }
  })
}

onMounted(async () => {
  data.value = await fetchImport()
})

</script>
