<template>

<b-container>
    <b-row class="row">
        <b-col cols="6" class="col_left">
            <div>
                <h2>{{ showdetails.name }}</h2>
            </div>
            <div class="imgleft">
                <img 
                v-if="showdetails.image" 
                v-bind:src="showdetails.image.medium" 
                v-bind:alt="showdetails.name"
                class="imgleftb"
                >
            </div>
        </b-col>
        <b-col cols="6" class="col_right">
            <div class="col_right_content">
                <h2>Cast</h2>
                <ul>
                    <li 
                        v-for="actor, index in showdetails._embedded.cast"
                        v-bind:key="index"
                    >
                    <a :href="'/people/'+actor.person.id">{{ actor.person.name }}</a>
                    </li>
                </ul>
            </div>
        </b-col>
    </b-row>
    <b-row class="row">
        <b-col cols="10" class="">
        
            <div v-html="showdetails.summary" class="contentdecrip"></div>
        </b-col>
    </b-row>
</b-container>

</template>

<script>
import axios from 'axios'

export default {
    name: 'Single',
    data:function() {
        return {
            showdetails: Object
        }
    },
    mounted:function() {
        axios
            .get('https://api.tvmaze.com/singlesearch/shows?q='+this.$route.params.name+'&embed=cast')
            .then( response => (this.showdetails = response.data))
    }
}
</script>

<style scoped>
body {
    background-color: rgba(138, 137, 128, 0.841);
}
h2 {
    text-transform:uppercase;
    color: blue;
}
.row {
    background-color: rgba(161, 156, 158, 0.3);
    margin: 20px 10px 0 10px;
    box-shadow: 0 0 4px 2px #8f9195;
}

.col_left {
    box-shadow: 0 0 20px 2px #878d98;
 
}

.imgleft {
    margin: 20% 0;
}

.col_right {
    text-align:left;
}
.col_right_content {
    margin: 0 30%;
}
ul {
    padding-left: 0;
}

li {
    list-style: none;
}
.contentdecrip {
        padding: 14px;
}

</style>