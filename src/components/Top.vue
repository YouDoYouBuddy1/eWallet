<template>
    <div class = "body">
        <h1>{{topText}}</h1>
        <p>{{botText}}</p>
    </div>
</template>

<script>
export default {
    data: function() { return {
        
    }},
    props: {
        topText: String,
        botText: String
    }
}
</script>

<style scoped>
    .body {
        background-color: white;
    }
</style>