<script>
import ButtonCounter from "@/components/counter/CounterComponent.vue";

export default {
  components: {
    ButtonCounter
  }
}
</script>



<template>
    <div>
      <h2>Über uns</h2>
      <p>Dies ist eine Beispielanwendung, die Vue.js verwendet.</p>
    </div>
    <div>
      <h1>Here is a child component!</h1>
      <ButtonCounter />
    </div>
</template>
  