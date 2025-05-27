<script setup>
import Navbar from '../Navbar.vue'
import Bottom from '../Bottom.vue'
</script>

<template>

    <!-- MAIN CONTAINER -->
    <div class="container edge-border">

        <Navbar /> <!-- NAVIAGTION -->

        <div class="header">
            <p class="font-1">Solutions</p>
        </div>

        <!-- <Bottom /> FOOTER -->

    </div>
    <!-- MAIN CONTAINER -->

</template>

<style scoped>

.header {
    background-image: url(../../assets/solutions.jpg);
    background-size: cover;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header p {
    color: var(--light-color);
    font-weight: 700;
    font-size: 10rem;
}

</style>
