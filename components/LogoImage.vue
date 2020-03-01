<template>
  <img class="icon" :alt="alt" :src="src" :srcset="srcset">
</template>

<style scoped lang="scss">
  .icon {
    vertical-align: middle;
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  const LOGOS_BASE_PATH = 'static/images/logos';

  @Component
  export default class LogoImage extends Vue {
    @Prop({
      required: true
    })
    public name!: string;

    @Prop({
      default (this: LogoImage) {
        const name = this.name;

        return name.charAt(0).toUpperCase() + name.substr(1) + ' logo';
      }
    })
    public alt!: string;

    get srcs () {
      const
        name = this.name,
        srcs = new Map<string, string>();

      for (let density = 1; density <= 3; density++) {
        srcs.set(density + 'x', require(`@/${LOGOS_BASE_PATH}/${name}/${name}@${density}x.png`));
      }

      return srcs;
    }

    get srcset () {
      const srcset = Array.from(this.srcs, ([density, src]) => `${src} ${density}`);

      return srcset.join(', ');
    }

    get src () {
      return this.srcs.get('1x');
    }
  }
</script>
