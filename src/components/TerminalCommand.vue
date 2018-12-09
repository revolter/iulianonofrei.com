<template>
  <div class="command">
    <div class="prompt">
      <span class="time">{{ time }}</span>
      <span class="dir">{{ dir }}</span>
    </div>
    <div class="lines">
      <div class="line" v-for="index in lines" :key="index">
        <slot :name="'line-' + index" v-if="lines.length > 1"></slot>
        <slot v-else></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @mixin style($background-color, $text-color) {
    background-color: $background-color;
    color: $text-color;
  }

  .command {
    $prompt-normal-margin: 0.4em;
    $prompt-small-margin: $prompt-normal-margin / 2;

    $separator-width: 0.34375em;
    $bug-margin: 0.04em;

    @mixin prompt($background-color, $text-color) {
      @include style($background-color, $text-color);

      &:after {
        // @include style($background-color, $text-color);
        @include style(inherit, inherit);
      }
    }

    margin: 5px;

    .prompt {
      margin-bottom: $prompt-small-margin;

      &:not(:first-child) {
        margin-top: $prompt-small-margin;
      }

      >span {
        padding-right: $prompt-normal-margin;
      }

      >span:first-child {
        padding-left: $prompt-normal-margin;
      }

      >span:not(:first-child) {
        padding-left: $prompt-normal-margin * 2;
      }

      >span:after {
        content: "";
        display: inline-block;

        width: $separator-width;
        height: 1.375em;

        margin-left: $prompt-normal-margin;
        margin-right: - ($separator-width + $prompt-normal-margin) + $bug-margin;
        margin-bottom: -0.37em;

        clip-path: polygon(0 0, 0 100%, 100% 50%);
      }

      >span.time {
        @include prompt(white, #003541);
      }

      >span.dir {
        @include prompt(#278bd2, white);
      }
    }

    .line {
      %placeholder-text {
        display: inline-block;

        color: #586e75;
      }

      &:first-child:before {
        @extend %placeholder-text;

        content: ">";

        margin-right: $prompt-small-margin;
      }

      &:not(:last-child):after {
        @extend %placeholder-text;

        content: "\\";

        margin-left: $prompt-small-margin;
      }
    }
  }
</style>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class TerminalCommand extends Vue {
    @Prop({required: true})
    public time!: string;

    @Prop({required: true})
    public dir!: string;

    @Prop({
      default: function () {
        return [1];
      }
    })
    public lines!: Array<number>;
  }
</script>
