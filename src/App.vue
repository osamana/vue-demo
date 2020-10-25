<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">

        <div class="news-thumb">
            <h1 class="title">Latest posts from our blog</h1>
            <p class="detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, molestiae.</p>
        </div>
        <LatestPosts title="Here I display my latest blog posts" sub_title="this is a sub title"></LatestPosts>
    </div>
</template>

<script>
    import LatestPosts from "./components/LatestPosts";

    export default {
        name: 'App',
        components: {
            LatestPosts
        }
    }
</script>

<style lang="scss">
    $theme-color: blue;
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .news-thumb .title{
        color: blue;
    }
    .news-thumb .detail{
        color: red;
    }

    .news-thumb{
        .title{

        }
        .detail{

        }
    }

</style>
