<script setup>
import Navbar from '../Navbar.vue'
import Bottom from '../Bottom.vue'
import forumData from './ForumData.json' //BACKEND DATA

import { ref } from 'vue'

const author = ref('')
const city = ref('')
const topic = ref('')
const description = ref('')

const submitForm = () => {
    const newPost = {
        author: author.value,
        city: city.value,
        topic: topic.value,
        description: description.value,
        date: new Date().toLocaleDateString(),
    }

    forumData.unshift(newPost)

    author.value = ''
    city.value = ''
    topic.value = ''
    description.value = ''
}
</script>

<template>
    <!-- MAIN CONTAINER -->
    <div class="container edge-border">

        <Navbar /> <!-- NAVIAGTION -->

        <!-- HEADING -->
        <p class="font-1 heading">Our Community</p>
        <!-- HEADING -->

        <!-- FORUM -->
        <div class="forum edge-border">

            <!-- CREATE -->
            <div class="create edge-border">
                <p class="font-3 sub-heading">Create a Post</p>
                <form  @submit.prevent="submitForm" class="form">
                    <div class="form-row">
                        <label for="author" class="font-5">Name:</label>
                        <input type="text" v-model="author" id="author" class="font-p" required>
                        
                        <label for="city" class="font-5">City:</label>
                        <input type="text" v-model="city" id="city" class="font-p" required>
                    </div>
                    <div class="form-row">
                        <label for="topic" class="font-5">Topic :</label>
                        <input type="text" v-model="topic" id="topic" class="font-p" required>
                    </div>
                    <div class="form-row">
                        <label for="description" class="font-5">Description:</label>
                        <textarea v-model="description" id="description" rows="4" class="font-p" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">Post</button>
                </form>
            </div>
            <!-- CREATE -->
            
            <!-- PREVIOUS FORUMS -->
            <div class="forums">
                <p class="font-3 sub-heading">Previous Posts</p>
                <div v-for="(forum, index) in forumData" :key="index" class="sub-item edge-border">
                    <p class="font-4 topic">{{forum.topic}}</p>
                    <p class="font-6 author">By : {{forum.author}} | {{forum.city}}<span>{{forum.date}}</span></p>
                    <p class="font-p description">{{forum.description}}</p>
                </div>
            </div>
            <!-- PREVIOUS FORUMS -->

        </div>
        <!-- FORUM -->

        <Bottom /> <!-- FOOTER -->

    </div>
    <!-- MAIN CONTAINER -->
</template>

<style scoped>
/* HEADING */
.heading {
    margin: 130px 0 50px;
    text-align: center;
    color: var(--dark-color);
    font-weight: 700;
}
/* HEADING */

/* FORUM */
.forum {
    width: 90%;
    margin: auto;
}

.forum .sub-heading {
    position: relative;
    color: var(--theme-color);
    font-weight: 700;
    margin-bottom: 30px;
}

.forum .sub-heading::before {
    content: "";
    width: 50px;
    height: 4px;
    bottom: -5px;
    left: 0;
    border-radius: 10px;
    position: absolute;
    background-color: var(--theme-color);
}
/* FORUM */

/* CREATE */
.forum .create {
    padding: 40px;
    border: 1px solid var(--line-color);
    background-color: var(--line-color);
    border-radius: 20px;
}

.forum .create .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.forum .create .form-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 3rem;
}

.forum .create .form-row label {
    width: 100px;
    font-weight: 600;
}

.forum .create .form-row label[for="city"] {
    margin-right: -80px;
}

.forum .create input {
    color: var(--gray-color);
}

.forum .create input[type="text"],
.forum .create textarea {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid var(--line-color);
    border-radius: 10px;
    transition: all 250ms ease;
}

.forum .create input:focus,
.forum .create textarea:focus {
    outline: none;
    border-color: var(--theme-color);
    box-shadow: 0 0 0 3px var(--line-color);
}

.forum .create .submit-button {
    align-self: flex-end;
    background-color: var(--theme-color);
    color: var(--light-color);
    padding: 10px 25px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 250ms ease;
}

.forum .create .submit-button:hover {
    padding: 10px 35px;
}
/* CREATE */

/* FORUMS */
.forums {
    padding: 40px;
    border: 1px solid var(--line-color);
    margin-top: 30px;
}

.forums .sub-item {
    width: 100%;
    padding: 20px;
    background-color: var(--line-color);
    margin-bottom: 30px;
    border-radius: 20px;
    transition: all 250ms ease;
}

.forums .sub-item:hover {
    box-shadow: 5px 5px 10px -5px var(--gray-color);
}

.forums .sub-item .topic {
    font-weight: 600;
}

.forums .sub-item .author span,
.forums .sub-item .author {
    color: var(--gray-color);
}

.forums .sub-item .author span {
    float: right;
}

.forums .sub-item .description {
    text-align: justify;
    padding: 20px 0 0 20px;
}
/* FORUMS */
</style>
