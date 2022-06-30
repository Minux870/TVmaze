<template>
    <b-container>
        <b-row class="row">
            <b-col cols="6" class="colpeople">

            <h2>{{ showpeople.name }}</h2>
            
            <img 
                v-if="showpeople.image.medium" 
                :src="showpeople.image.medium"
                :alt="showpeople.name"
            >
            </b-col>
            <b-col cols="6" class="othertitle">
                <div 
                    v-if="othertitles" 
                    class="rowr" 
                >
                <h2>Autres Series</h2>
                    <div 
                        class="othertitles"
                        v-for="show, index in othertitles"
                        v-bind:key="index"
                    >
                        <a v-bind:href="'/single/'+show._embedded.show.name">{{ show._embedded.show.name }}</a>
                    </div>
                </div>   
            </b-col>
        </b-row>
    </b-container>

</template>

<script>
import axios from 'axios'

export default {
    name: 'People',
    data:function() {
        return {
            showpeople: Object,
            othertitles: Array
        }
    },
    mounted:function() {
        axios
            .get('https://api.tvmaze.com/people/'+this.$route.params.id)
            .then( response => (this.showpeople = response.data))

        axios
            .get('https://api.tvmaze.com/people/'+this.$route.params.id+'/castcredits?embed=show')
            .then(response => (this.othertitles = response.data ))
    }
}
</script>

<style scoped>

body {
    background-color: rgba(138, 137, 128, 0.841);
}
.row {
    background-color: rgba(161, 156, 158, 0.3);
    box-shadow: 0 0 4px 2px #8f9195;
}
.rowr {
    margin: 0 30%;
}
h2 {
    padding-top: 10px;
    text-transform:uppercase;
    color: blue;
}
.colpeople {
    box-shadow: 0 0 20px 2px #878d98;

}
.othertitles {
    text-align: left;
}

</style>