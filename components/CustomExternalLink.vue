<template>
    <span v-if="type == 'ruby'">
        <external-link href="https://www.ruby-lang.org">Ruby</external-link>{{ " " }}<logo-image :name="type" />
    </span>
    <span v-else-if="type == 'swift'">
        <external-link href="https://swift.org">Swift</external-link>{{ " " }}<logo-image :name="type" />
    </span>

    <span v-else-if="type == 'mondly'">
        <external-link href="https://mondly.com" :class="type">Mondly</external-link>{{ " " }}<logo-image :name="type" />
    </span>

    <external-link v-else-if="type == 'fastlane'" href="https://fastlane.tools"><em>{{ type }}</em></external-link>
    <span v-else-if="type == 'fastlane-team'">
        <external-link href="https://docs.fastlane.tools#fastlane-team" class="fastlane">team</external-link>{{ " " }}<logo-image name="fastlane" alt="fastlane logo" />
    </span>

    <external-link v-else-if="type == 'db4s'" href="http://sqlitebrowser.org">DB Browser for SQLite</external-link>
    <span v-else-if="type == 'db4s-org'">
        <external-link href="https://github.com/orgs/sqlitebrowser/people" class="db4s">organization</external-link>{{ " " }}<logo-image name="db4s" alt="DB Browser for SQLite logo" />
    </span>

    <span v-else-if="type == 'github'">
        <external-link href="https://github.com/revolter/" :class="type">GitHub</external-link>{{ " " }}<logo-image :name="type" alt="GitHub logo" />
    </span>
    <span v-else-if="type == 'twitter'">
        <external-link href="https://twitter.com/Revolt666" :class="type">Twitter</external-link>{{ " " }}<logo-image :name="type" />
    </span>
    <span v-else-if="type == 'stackoverflow'">
        <external-link href="https://stackoverflow.com/users/865175/iulian-onofrei" :class="type">Stack Overflow</external-link>{{ " " }}<logo-image :name="type" alt="Stack Overflow logo" />
    </span>
    <span v-else-if="type == 'linkedin'">
        <external-link href="https://www.linkedin.com/in/iulianonofrei/" :class="type">LinkedIn</external-link>{{ " " }}<logo-image :name="type" alt="LinkedIn logo" />
    </span>
</template>

<style scoped lang="scss">
    a {
        color: inherit;
    }

    .mondly {
        color: #f50;
    }

    .fastlane {
        color: #0b7bff;
    }

    .db4s {
        color: #9ddcff;
    }

    .github {
        color: #fff;
    }

    .twitter {
        color: #1ca1f2;
    }

    .stackoverflow {
        color: #f48024;
    }

    .linkedin {
        color: #0077b5;
    }
</style>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    import ExternalLink from '@/components/ExternalLink.vue';
    import LogoImage from '@/components/LogoImage.vue';

    @Component({
        components: {
            ExternalLink,
            LogoImage
        }
    })
    export default class CustomExternalLink extends Vue {
        @Prop({
            required: true
        })
        public type!: string;
    }
</script>
