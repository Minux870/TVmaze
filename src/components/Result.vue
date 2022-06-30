<template>

    <b-col cols="2" class="vignette">
        <a v-bind:href="'/single/'+searchresult.show.name">
        <h2>{{ searchresult.show.name }}</h2>
        <img 
            fluid
            v-if="searchresult.show.image" 
            v-bind:src="searchresult.show.image.medium" 
            v-bind:alt="searchresult.show.name"
        >
        </a>            
    </b-col>

</template>

<script>

export default {
    name:'Result',
    props: ['searchresult'],
}
</script>

<style scoped>

.vignette {

    background-color: rgba(161, 156, 158, 0.3);
    margin: 20px 10px 0 10px;
    box-shadow: 0 0 4px 2px #8f9195;
    padding: 12px;
}


</style>