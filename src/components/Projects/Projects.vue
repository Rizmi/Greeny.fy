<script setup>
import Navbar from '../Navbar.vue'
import Bottom from '../Bottom.vue'
</script>

<template>

    <!-- MAIN CONTAINER -->
    <div class="container edge-border">

        <Navbar /> <!-- NAVIAGTION -->

        <!-- HEADER -->
        <div class="header">

            <div class="right">
                <p class="font-1 main-heading">Solutions</p>
                <p class="font-4 tagline">We got you covered.</p>
            </div>
            <div class="left"></div>


        </div>
        <!-- HEADER -->

        <Bottom /> <!--- FOOTER --->

    </div>
    <!-- MAIN CONTAINER -->

</template>

<style scoped>
/* HEADER */
.header {
    background-image: url(../../assets/projects.png);
    background-size: cover;
    background-position: center center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header .right {
    background-color: var(--theme-color);
    width: 100%;
    height: 100%;
}

.header .left {
    background-color: bisque;
    width: 100%;
    height: 100%;
}

.header .main-heading {
    color: var(--light-color);
    font-weight: 700;
    font-size: 10rem;
    margin-top: 50px;
}

.header .tagline {
    color: var(--light-color);
    margin-top: 50px;
}

/* HEADER */
</style>
