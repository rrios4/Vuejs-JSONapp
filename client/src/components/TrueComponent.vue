<template>
    <div class="container">
        <h1>JSON Documents made into GET with Express</h1><br>
        <hr/><br>
        <div class="persons-container">
            <h3 class="h3-false">List of False Boolean</h3>
            <div class="person_false"
                v-for="(person, index) in persons"
                v-bind:item="person"
                v-bind:key="index"
            >
                <p class="text"  v-if="!person.isActive" v-bind:class="{false: true}" >{{person.name}}</p>
                <p class="text" v-if="!person.isActive" v-bind:class="{false: true}" >{{person.age}}</p>
            </div>
            <h3 class="h3-true">List of True Boolean</h3>
            <div class="person_true"
                v-for="(person, index) in persons"
                v-bind:item="person"
                v-bind:key="index"  
            >
                <p class="text"  v-if="person.isActive" v-bind:class="{true: true}" >{{person.name}}</p>
                <p class="text" v-if="person.isActive" v-bind:class="{true: true}" >{{person.age}}</p>
            </div>
            <div class="total"
                v-for="(person, index) in persons"
                v-bind:item="person"
                v-bind:key="index"   
            >
                <p>{{}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import JsonService from "../JsonService";

export default {
    name: "True",
    data(){
        return {
            persons: [],
            json: "",
            error: "",
        };
    },
    async created(){
        try{
            this.persons = await JsonService.getJson();
        } catch(err){
            this.error = err.message;
        }
        
    },
    methods: {
        async getTotal(){
            this.json = await JsonService.getJson();
            this.total = 0

        }
    },
}
</script>

<style scoped>
.true{
    color: green;
    font-weight: 100;
    background-color: white;
    padding: 1px;
}
.false{
    color: red;
    font-weight: 100;
    background-color: white;
    padding: 1px;
}
.h3-false{
    background-color: darkslategray;
    color: white; 
    padding: 1rem;
}
.h3-true{
    background-color: #323232;
    color: white; 
    padding: 1rem;
}
</style>