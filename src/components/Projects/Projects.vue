<script setup>
import Navbar from '../Navbar.vue'
import Bottom from '../Bottom.vue'
</script>

<template>

    <!-- MAIN CONTAINER -->
    <div class="container edge-border">

        <Navbar /> <!-- NAVIAGTION -->

        <!-- HEADER -->
        <div class="header edge-border">
            <p class="font-0 main-heading">Projects</p>
            <p class="font-4 tagline">Progress of how we change the world.</p>
            <div class="box edge-border"></div>
            <a href="#space"><span class="material-icons font-1">arrow_circle_down</span></a>
        </div>
        <!-- HEADER -->

        <!-- CONTENT -->
        <div id="space"></div>
        <div class="content" id="content">
            <p class="font-1 heading">~Progress~</p>

            <div class="sub-item edge-border">
                <div class="top edge-border">
                    <div class="column column-1 edge-border"></div>
                    <div class="column column-2 edge-border">
                        <p class="font-3 topic">Project Viva 2025</p>
                        <p class="font-5 description">Wattala | 2025</p>
                    </div>
                    <div class="column column-3 edge-border"></div>
                </div>
                <div class="middle edge border"></div>
                <div class="bottom edge-border">
                    <div class="column column-1 edge-border"></div>
                    <div class="column column-2 edge-border">
                        <p class="font-5 status">Status : On Going</p>
                        <p class="font-p about">Adipisicing elit. Corporis reiciendis at consequatur ad porro minima laboriosam provident tenetur quos facere, expedita dolorum doloribus nulla dolore nam recusandae, deserunt esse ab! <br> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate in culpa mollitia deleniti! Officiis, hic temporibus ratione corporis similique voluptatum placeat, consequuntur aliquid enim debitis quisquam optio velit vero rem.</p>
                    </div>
                    <div class="column column-3 edge-border"></div>
                    <div class="box"></div>
                </div>
            </div>

        </div>
        <!-- CONTENT -->

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
 
/* CONTENT */
#space {
    height: 5rem;
}

.content .heading {
    text-align: center;
    color: var(--dark-color);
    font-weight: 700;
}

.content .sub-item {
    margin-top: 50px;
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.content .sub-item .top {
    width: 100%;
    height: 17%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.content .sub-item .middle {
    width: 100%;
    height: 3%;
}

.content .sub-item .bottom{
    position: relative;
    width: 100%;
    height: 75%;
    display: flex;
    align-items: space-evenly;
    justify-content: space-evenly;
}

.content .sub-item .column {
    width: 25%;
    height: 100%;
    border-radius: 20px;
}

.content .sub-item .bottom .box {
    position: absolute;
    background-color: var(--line-color);
    width: 100%;
    height: 200px;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;
}

.content .sub-item .bottom .column-1,
.content .sub-item .bottom .column-3 {
    background-color: var(--line-color);
}

.content .sub-item .bottom .column-2 {
    background-color: var(--light-color);
    border: 3px var(--theme-color) solid;
    overflow: hidden;
}

.content .sub-item .top .column-1,
.content .sub-item .top .column-3 {
    display: none;
}

.content .sub-item .top .column-2 {
    background-color: var(--theme-color);
}

.content .sub-item .top .column-2 .topic {
    font-weight: 600;
    text-align: center;
    color: var(--light-color);
}

.content .sub-item .top .column-2 .description {
    text-align: center;
    color: var(--light-color);
}

.content .sub-item .bottom .column-2 .status {
    padding: 0 20px;
    text-align: center;
    background-color: var(--theme-color);
    width: 100%;
    height: auto;
    color: var(--gray-color);
}

.content .sub-item .bottom .column-2 .about {
    padding: 20px;
    text-align: justify;
}
/* CONTENT */
</style>
