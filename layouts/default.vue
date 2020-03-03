<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <nuxt />
    </div>
</template>

<style lang="scss">
    html {
        background-color: #2d2d2d;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #9eb3c9;
        text-align: center;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #55789b;

            &.nuxt-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
