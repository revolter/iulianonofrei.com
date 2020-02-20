<template>
  <div class="home">
    <span>Under construction</span>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import VueMeta from 'vue-meta';

  Vue.use(VueMeta);

  @Component({
    metaInfo: {
      title: 'Iulian Onofrei'
    }
  })
  export default class Home extends Vue {}
</script>
