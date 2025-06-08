<script setup>
import Navbar from '../Navbar.vue'
import Bottom from '../Bottom.vue'
import projectsData from './ProjectsData.json' //BACKEND DATA
</script>

<template>

    <!-- MAIN CONTAINER -->
    <div class="container dev-border">

        <Navbar /> <!-- NAVIAGTION -->

        <!-- HEADER -->
        <div class="header dev-border">
            <p class="font-0 main-heading">Projects</p>
            <p class="font-4 tagline">Progress of how we change the world.</p>
            <div class="box dev-border"></div>
            <a href="#space"><span class="material-icons font-1">arrow_circle_down</span></a>
        </div>
        <!-- HEADER -->

        <!-- HEADING -->
        <div id="space"></div>
        <p class="font-1 heading">Progress</p>
        <!-- HEADING -->

        <!-- CARDS -->
         <div class="cards">
            <div v-for="(project, index) in projectsData" :key="index" class="sub-item dev-border">
                <div class="top dev-border">
                    <div class="column column-1 dev-border"></div>
                    <div class="column column-2 dev-border">
                        <div class="cover">
                            <p class="font-3">Contribute</p>
                        </div>
                        <p class="font-3 title">{{project.title}}</p>
                        <p class="font-5 location">{{project.location}} | {{project.year}}</p>
                    </div>
                    <div class="column column-3 dev-border"></div>
                </div>
                <div class="middle edge border"></div>
                <div class="bottom dev-border">
                    <div class="column column-1 dev-border">
                        <img :src="project['image-a']" alt="Image" class="image" />
                    </div>
                    <div class="column column-2 dev-border">
                        <p class="font-5 status">Status : {{project.status}}</p>
                        <p class="font-p description">{{project.description_1}}</p>
                        <p class="font-p description">{{project.description_2}}</p>
                    </div>
                    <div class="column column-3 dev-border">
                        <img :src="project['image-b']" alt="Image" class="image" />
                    </div>
                    <div class="box"></div>
                </div>
            </div>
         </div>
        <!-- CARDS -->

        <Bottom /> <!--- FOOTER --->

    </div>
    <!-- MAIN CONTAINER -->

</template>

<style scoped>
/* HEADER */
.header {
    background-image: url(../../assets/projects.jpg);
    background-size: cover;
    background-position: center center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.header .main-heading {
    color: var(--light-color);
    font-weight: 700;
    z-index: 1;
    transition: all 250ms ease;
}

.header .main-heading:hover {
    letter-spacing: 100px;
}

.header .tagline {
    color: var(--light-color);
    z-index: 1;
    transform: translate(50%);
}

.header .box {
    background-color: var(--theme-color);
    width: 100%;
    height: 15rem;
    position: absolute;
    z-index: 0;
    opacity: 0.8;
}

.header .material-icons {
    position: absolute;
    bottom: 5rem;
    background-color: var(--light-color);
    border-radius: 50px;
    cursor: pointer;
    transition: all 250ms ease;
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    transform: translateX(-50%);
}

.header .material-icons:hover {
    padding: 5px;
}

@keyframes blink {
    0% {
        color: var(--dark-color);
        bottom: 5rem;
    }
    50% {
        color: var(--theme-color);
        bottom: 6rem;
    }
    100% {
        color: var(--dark-color);
        bottom: 5rem;
    }
}
/* HEADER */
 
/* HEADING */
#space {
    height: 5rem;
}

.heading {
    text-align: center;
    color: var(--dark-color);
    font-weight: 700;
}
/* HEADING */

/* CARDS */
.cards .sub-item {
    margin-top: 50px;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.cards .sub-item .top {
    width: 100%;
    height: 17%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.cards .sub-item .middle {
    width: 100%;
    height: 3%;
}

.cards .sub-item .bottom{
    position: relative;
    width: 100%;
    height: 75%;
    display: flex;
    align-items: space-evenly;
    justify-content: space-evenly;
}

.cards .sub-item .column {
    width: 25%;
    height: 100%;
    border-radius: 20px;
}

.cards .sub-item .bottom .box {
    position: absolute;
    background-color: var(--line-color);
    width: 100%;
    height: 200px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
}

.cards .sub-item .bottom .column-1,
.cards .sub-item .bottom .column-3 {
    background-color: var(--line-color);
}

.cards .sub-item .bottom .column-2 {
    background-color: var(--light-color);
    border: 3px var(--theme-color) solid;
    overflow: hidden;
}

.cards .sub-item .top .column-1,
.cards .sub-item .top .column-3 {
    display: none;
}

.cards .sub-item .top .column-2 {
    position: relative;
    background-color: var(--theme-color);
    cursor: pointer;
    overflow: hidden;
}

.cards .sub-item .top .column-2:hover .cover {
    top: 0%;
}

.cards .sub-item .top .column-2 .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background-color: var(--light-color);
    top: -100%;
    border: 3px solid var(--theme-color);
    transition: all 250ms ease;
}

.cards .sub-item .top .column-2 .cover p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    color: var(--theme-color);
}

.cards .sub-item .top .column-2 .title {
    font-weight: 600;
    text-align: center;
    color: var(--light-color);
}

.cards .sub-item .top .column-2 .location {
    text-align: center;
    color: var(--light-color);
}

.cards .sub-item .bottom .column-2 .status {
    padding: 0 20px;
    text-align: center;
    background-color: var(--theme-color);
    width: 100%;
    height: auto;
    color: var(--gray-color);
}

.cards .sub-item .bottom .column-2 .description {
    padding: 20px 20px 0px 20px;
    text-align: justify;
}

.cards .sub-item .bottom .column-1 .image,
.cards .sub-item .bottom .column-3 .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 20px;
}
/* CARDS */
</style>
