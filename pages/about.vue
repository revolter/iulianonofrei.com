<template>
    <div class="about">
        <mac-window>
            <template v-slot:title>iulianOnofrei</template>
            <template v-slot:content>
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
            </template>
        </mac-window>
    </div>
</template>

<style scoped lang="scss">
    .about {
        $padding: 10px;

        color: #839496;

        font-size: 1.5em;
        font-weight: bold;

        padding: 0 $padding $padding $padding;
    }

    abbr {
        @media (hover: hover) {
            &[title] {
                font-variant: none;
                text-decoration-line: underline;
                text-decoration-style: dotted;
                cursor: help;
            }
        }

        @media (hover: none) {
            &[title]:after {
                content: " (" attr(title) ")";
            }
        }
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
    import MacWindow from '@/components/MacWindow.vue';
    import TerminalCommand from '@/components/TerminalCommand.vue';

    @Component({
        components: {
            CustomExternalLink,
            MacWindow,
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
