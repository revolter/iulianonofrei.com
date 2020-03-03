<template>
    <a :href="href" target="_blank"><slot></slot></a>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class ExternalLink extends Vue {
        @Prop({
            required: true
        })
        public href!: string;
    }
</script>
