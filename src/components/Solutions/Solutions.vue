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
            <p class="font-0 main-heading">Solutions</p>
            <p class="font-4 tagline">We got you covered.</p>
        </div>
        <!-- HEADER -->
        
        <!-- CONTENT -->
        <div class="content edge-border">
            <div class="sub-item edge-border">
                <img src="../../../public/500.jpg" alt="">
                <div class="sub-item-content edge-border">
                    <p class="font-3 heading">🗑️ Waste → Smart Waste Bins</p>
                    <p class="font-p description">Install sensor-equipped waste bins that detect fill levels and guide users to separate recyclables from regular waste. Some models notify collectors when full.</p>
                    <p class="font-4 sub-heading">Impact :</p>
                    <p class="font-p sub-description">Cleaner streets, higher recycling rates, and fewer overflowing bins.</p>
                    <a href="#"><button class="font-6 contribute-btn">Contribute</button></a>
                    <a href="#"><button class="font-6 read-more-btn">Read More</button></a>
                </div>
            </div>
            <div class="sub-item edge-border">
                <img src="../../../public/500.jpg" alt="">
                <div class="sub-item-content edge-border">
                    <p class="font-3 heading">🌫️ Polluted Air → Green Urban Zones</p>
                    <p class="font-p description">Introduce low-emission zones, plant vertical gardens, and increase green cover around traffic-heavy areas and schools to filter air naturally.</p>
                    <p class="font-4 sub-heading">Impact :</p>
                    <p class="font-p sub-description">Cleaner breathing spaces, better public health, and reduced urban heat.</p>
                    <a href="#"><button class="font-6 contribute-btn">Contribute</button></a>
                    <a href="#"><button class="font-6 read-more-btn">Read More</button></a>
                </div>
            </div>
            <div class="sub-item edge-border">
                <img src="../../../public/500.jpg" alt="">
                <div class="sub-item-content edge-border">
                    <p class="font-3 heading">🚦 Traffic → AI Traffic Control</p>
                    <p class="font-p description">Implement AI-driven traffic signals and real-time traffic monitoring to adjust signal timing based on congestion patterns.</p>
                    <p class="font-4 sub-heading">Impact :</p>
                    <p class="font-p sub-description">Less idle time, smoother traffic flow, and reduced fuel waste.</p>
                    <a href="#"><button class="font-6 contribute-btn">Contribute</button></a>
                    <a href="#"><button class="font-6 read-more-btn">Read More</button></a>
                </div>
            </div>
            <div class="sub-item edge-border">
                <img src="../../../public/500.jpg" alt="">
                <div class="sub-item-content edge-border">
                    <p class="font-3 heading">💡 Power → Solar Streetlights</p>
                    <p class="font-p description">Switch to solar-powered streetlights with motion sensors for energy savings and consistent lighting even during blackouts.</p>
                    <p class="font-4 sub-heading">Impact :</p>
                    <p class="font-p sub-description">Lower power bills and reduced reliance on the grid.</p>
                    <a href="#"><button class="font-6 contribute-btn">Contribute</button></a>
                    <a href="#"><button class="font-6 read-more-btn">Read More</button></a>
                </div>
            </div>
            <div class="sub-item edge-border">
                <img src="../../../public/500.jpg" alt="">
                <div class="sub-item-content edge-border">
                    <p class="font-3 heading">💧 Water → Smart Water Meters</p>
                    <p class="font-p description">Install IoT-based water meters in homes and buildings to monitor usage, detect leaks, and send usage reports to residents.</p>
                    <p class="font-4 sub-heading">Impact :</p>
                    <p class="font-p sub-description">Reduced water wastage, early leak detection, and more responsible use.</p>
                    <a href="#"><button class="font-6 contribute-btn">Contribute</button></a>
                    <a href="#"><button class="font-6 read-more-btn">Read More</button></a>
                </div>
            </div>
            <div class="sub-item edge-border">
                <img src="../../../public/500.jpg" alt="">
                <div class="sub-item-content edge-border">
                    <p class="font-3 heading">📡 Overhead Wiring → Smart Underground Cabling</p>
                    <p class="font-p description">Adopt underground cabling and centralized utility ducts to replace chaotic overhead wiring with organized, concealed systems.</p>
                    <p class="font-4 sub-heading">Impact :</p>
                    <p class="font-p sub-description">Improved urban aesthetics, reduced risk of wire damage, fewer outages, and better tree management.</p>
                    <a href="#"><button class="font-6 contribute-btn">Contribute</button></a>
                    <a href="#"><button class="font-6 read-more-btn">Read More</button></a>
                </div>
            </div>
            <div class="sub-item edge-border">
                <img src="../../../public/500.jpg" alt="">
                <div class="sub-item-content edge-border">
                    <p class="font-3 heading">🌧️ Clogged Drains → Smart Drainage System</p>
                    <p class="font-p description">Install covered, sensor-equipped drains that alert for blockages and filter out debris before entry.</p>
                    <p class="font-4 sub-heading">Impact :</p>
                    <p class="font-p sub-description">Prevents flooding, protects pedestrians, ensures cleaner streets, and supports better water flow year-round.</p>
                    <a href="#"><button class="font-6 contribute-btn">Contribute</button></a>
                    <a href="#"><button class="font-6 read-more-btn">Read More</button></a>
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
    background-image: url(../../assets/solutions.jpg);
    background-size: cover;
    background-position: center center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.header .main-heading {
    color: var(--light-color);
    font-weight: 700;
}

.header .tagline {
    color: var(--light-color);
}

/* HEADER */
/* CONTENT */

.content {
    margin-top: 100px;
}

.content .sub-item {
    display: flex;
    width: 70%;
    margin: 0 auto;
    justify-content: left;
    margin-top: 50px;
    align-items: center;
}

.content .sub-item img {
    width: 300px;
    box-shadow: 10px 10px 0px var(--gray-color);
}

.content .sub-item .sub-item-content {
    padding: 0 50px 0 70px;
}

.content .sub-item .sub-item-content .heading {
    font-weight: 600;
    position: relative;
}

.content .sub-item .sub-item-content .heading::before {
    content: "";
    width: 100%;
    height: 5%;
    bottom: 0;
    border-radius: 10px;
    position: absolute;
    z-index: -1;
    background-color: var(--theme-color);
}

.content .sub-item .sub-item-content .description {
    margin-top: 10px;
}

.content .sub-item .sub-item-content .sub-heading {
    font-weight: 700;
    margin-top: 20px;
    color: var(--gray-color)
}

.content .sub-item .sub-item-content .sub-description {
    color: var(--gray-color)
}

.content .sub-item .sub-item-content .contribute-btn,
.content .sub-item .sub-item-content .read-more-btn {
    padding: 10px 10px;
    border-radius: 10px;
    margin-top: 20px;
    color: var(--light-color);
    transition: all 250ms ease;
}

.content .sub-item .sub-item-content .contribute-btn {
    background-color: var(--theme-color);
}

.content .sub-item .sub-item-content .read-more-btn {
    margin-left: 10px;
    background-color: var(--gray-color);
}

.content .sub-item .sub-item-content .contribute-btn:hover,
.content .sub-item .sub-item-content .read-more-btn:hover {
    cursor: pointer;
    color: var(--light-color);
    padding: 10px 15px;
}
/* CONTENT */
</style>
