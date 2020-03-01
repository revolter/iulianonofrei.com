<template>
  <div class="about">
    <div class="terminal">
      <div class="bar">
        <div class="close"></div><div class="minimize"></div><div class="maximize"></div>
        <span class="title">iulianOnofrei</span>
      </div>
      <div class="content">
        <terminal-command time="I" dir="am">
          <template><abbr title="Yet Another Developer">YAD</abbr>{{ " " }}<code>name</code>d Iulian Onofrei 💻</template>
        </terminal-command>
        <terminal-command time="I" dir="am">
          <template>{{ age }} <code>year</code>s old 👨🏼‍💻</template>
        </terminal-command>
        <terminal-command time="Falling" dir="in love">
          <template>with <code><custom-external-link type="ruby" /></code></template>
        </terminal-command>
        <terminal-command time="Working" dir="as">
          <template>an <code>iOS</code> developer at <custom-external-link type="mondly" /></template>
        </terminal-command>
        <terminal-command time="Proud" dir="member" :lines="[1, 2, 3]">
          <template slot="line-1">of the</template>
          <template slot="line-2"><custom-external-link type="fastlane" />{{ " " }}<custom-external-link type="fastlane-team" /></template>
          <template slot="line-3"><custom-external-link type="db4s" />{{ " " }}<custom-external-link type="db4s-org" /></template>
        </terminal-command>
        <terminal-command time="Present" dir="on" :lines="[1, 2, 3, 4]">
          <template slot="line-1"><custom-external-link type="github" /></template>
          <template slot="line-2"><custom-external-link type="twitter" /></template>
          <template slot="line-3"><custom-external-link type="stackoverflow" /></template>
          <template slot="line-4"><custom-external-link type="linkedin" /></template>
        </terminal-command>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @mixin linear-gradient($from, $to) {
    background: $to;
    background: linear-gradient(to bottom, $from 0%,$to 100%);
  }

  .about {
    color: #839496;

    font-size: 1.5em;
    font-weight: bold;

    .terminal {
      position: relative;
      background-color: #002834;

      text-align: left;
      border-radius: 10px;

      overflow: hidden;

      &:before {
        content: "";

        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;

        border-radius: inherit;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
        pointer-events: none;
      }

      .bar {
        @include linear-gradient(#434549, #37383b);
        line-height: 0;

        %bar-icon {
          $margin: 10px;
          $size: 12px;

          display: inline-block;
          margin: $margin 0 $margin $margin;

          width: $size;
          height: $size;

          border-radius: $size / 2;
        }

        .close {
          @extend %bar-icon;

          background-color: #ff6259;
        }

        .minimize {
          @extend %bar-icon;

          background-color: #ffbd2e;
        }

        .maximize {
          @extend %bar-icon;

          background-color: #28ca42;
        }

        .title {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);

          color: #b8b9bc;
          line-height: normal;
        }
      }
    }
  }

  abbr {
    font-variant: none;
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }

  code {
    color: #859900;

    font-size: 1.23077em;
    border-radius: 0.2em;
    padding: 0 0.1em;
    word-break: keep-all;
  }
</style>

<script lang="ts">
  import moment from 'moment';
  import { Component, Vue } from 'vue-property-decorator';

  import CustomExternalLink from '@/components/CustomExternalLink.vue';
  import TerminalCommand from '@/components/TerminalCommand.vue';

  @Component({
    components: {
      CustomExternalLink,
      TerminalCommand
    },
    head () {
      return {
        title: 'Iulian Onofrei | About'
      };
    }
  })
  export default class About extends Vue {
    get age () {
      const
        birthDate = moment([1992, 6 - 1, 14]),
        currentDate = moment(),
        age = currentDate.diff(birthDate, 'years', true).toFixed(3);

      return age;
    }
  }
</script>
