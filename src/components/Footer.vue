<template>
    <footer>
        <div class="container">
            <p>Copyright © {{ new Date() | moment('YYYY') }} {{company}}. All rights reserved. Made by : <a href="google.fr">
                    {{ author}} </a></p>
        </div>
    </footer>
</template>
<script>
    export default {
        name: 'Footer',
        props: {
            company: String,
            author: String,
        },
    }
</script>

<style lang="scss">
    footer {
        background-color: #1f232c;
        border-top: 1px solid rgba(255, 255, 255, 0.1);


        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 100;
            font-size: 0.8em;
            color: #fff;
            min-height: 50px;

            a {
                color: #29ad65;
                font-weight: bolder;
            }

            a:hover {
                text-decoration: none;
                opacity: 0.7;
            }

            p {
                margin: 0;
                text-align: center;
            }
        }
    }
</style>