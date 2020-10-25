<template>
    <div>
        <h2>{{ title }}</h2>
        <h3>{{ sub_title }}</h3>
        <ul>
            <li v-for="post in posts" :key="post">
                {{post.question_text}}
            </li>
        </ul>
    </div>
</template>

<script>
    /* eslint-disable */
    import axios from 'axios'

    export default {
        name: "LatestPosts",
        props: {
            title: String,
            sub_title: String,
        },
        data() {
            return {
                posts: null,
                message:''
            }
        },
        created() {
            // fetch data from api or data source
            console.log('Fetching data...')
            let configs = {
                responseType: 'json',
            }
            axios.get('http://localhost:8000/whatever', configs)
                .then(response => {
                    // save response data
                    console.log('response has arrived')
                })
                .catch(error => {
                    //print error
                    console.log('some error happened')
                })
            console.log('Done fetching.')


        },

    }
</script>


<style>

</style>
