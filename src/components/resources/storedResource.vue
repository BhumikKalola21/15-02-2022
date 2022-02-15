<template>
  <ul>
    <reserve-data
      v-for="data in resource"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :description="data.resource"
      :link="data.link"
    >
    </reserve-data>
  </ul>
</template>
<script>
import reserveData from './reserveData.vue';
export default {
  components: {
    reserveData,
  },
  inject: ['resource'],
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
