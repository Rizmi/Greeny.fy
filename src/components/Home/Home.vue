<script setup>
import Navbar from '../Navbar.vue'
import Bottom from '../Bottom.vue'

import { ref, onMounted } from 'vue';

const scrollAmount = 350;
const studies = ref(null);

const scroll_left = () => {
    studies.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
};

const scroll_right = () => {
    studies.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};
</script>

<template>

    <!-- MAIN CONTAINER -->
    <div class="container edge-border">

        <Navbar /> <!-- NAVIAGTION -->

        <!-- LANDING -->
        <div class="landing-area edge-border">
            <div class="main-section edge-border">
                <div class="follow edge-border">
                    <span class="material-icons">rss_feed</span>
                    <span class="material-icons">thumb_up</span>
                    <span class="material-icons">adb</span>
                    <span id="follow-us">Follow Us > </span>
                </div>
                <div class="main-text edge-border">
                    <p class="font-6 tagline">Improve Quality of life</p>
                    <p class="font-1 heading">Green Future, Smarter Cities Together</p>
                    <p class="font-p description">Discover how smart greening strategies can transform your city into a healthier, cleaner, and more sustainable place to live.</p>
                    <a href="#"><button class="font-6" id="lets-talk-btn">Let's Talk</button></a>
                    <a href="#area-goals"><button class="font-6" id="read-more-btn">Read More</button></a>
                </div>
                <div class="main-image edge-border">
                    <img src="../../assets/main-image.png" alt="Main Image">
                </div>
            </div>
            <div class="main-end edge-border">
                <div class="sub-item">
                    <span class="material-icons font-2">recycling</span>
                    <p class="font-4 title">Recycle</p>
                </div>
                <div class="sub-item">
                    <span class="material-icons font-2">health_and_safety</span>
                    <p class="font-4 title">Healthier Living</p>
                </div>
                <div class="sub-item">
                    <span class="material-icons font-2">timelapse</span>
                    <p class="font-4 title">Sustainable Future</p>
                </div>
                <div class="sub-item">
                    <span class="material-icons font-2">energy_savings_leaf</span>
                    <p class="font-4 title">Green Innovations</p>
                </div>
                <div class="sub-item">
                    <span class="material-icons font-2">air</span>
                    <p class="font-4 title">Clean Air</p>
                </div>
            </div>
        </div>
        <!-- LANDING -->

        <!-- RELATIVE / SCROLLERBEL CONTAINER -->
        <div class="relative-container">

            <!-- GOALS -->
            <div class="area-goals edge-border" id="area-goals">
                <p class="font-1 heading edge-border">~Our Goals~</p>
                <div class="goals edge-border">
                    <div class="sub-item edge-border">
                        <img src="../../assets/item-1.png" alt="">
                        <div class="text">
                            <p class="font-3 title">Recycle</p>
                            <p class=" description">Recycling is one of the simplest ways to reduce waste and conserve resources. By reprocessing materials like paper, plastic, and glass, we can prevent pollution, save energy, and reduce the need for raw materials. Let’s make recycling a habit in every corner of our cities to keep our environment clean and sustainable for future generations.</p>
                        </div>
                    </div>
                    <div class="sub-item edge-border">
                        <img src="../../assets/item-2.png" alt="">
                        <div class="text">
                            <p class="font-3 title">Healthier Living</p>
                            <p class="font-p description">A greener urban environment means healthier living. Trees, parks, and open spaces promote physical and mental well-being, while reducing stress and improving air quality. Healthy urban living fosters a sense of community, encourages outdoor activities, and leads to better overall health for residents.</p>
                        </div>
                    </div>
                    <div class="sub-item edge-border">
                        <img src="../../assets/item-3.png" alt="">
                        <div class="text">
                            <p class="font-3 title">Sustainable Future</p>
                            <p class="font-p description">Sustainability is key to ensuring that future generations inherit a planet that can support their needs. By adopting renewable energy sources, efficient waste management, and sustainable transport systems, we can build cities that minimize their environmental footprint and create a thriving, sustainable future for all.</p>
                        </div>
                    </div>
                    <div class="sub-item edge-border">
                        <img src="../../assets/item-4.png" alt="">
                        <div class="text">
                            <p class="font-3 title">Green Innovations</p>
                            <p class="font-p description">Green innovations are technological advancements that help reduce the environmental impact of urban life. From smart energy grids to eco-friendly building materials and electric public transport, these innovations lead the way in making cities more sustainable, efficient, and resilient to climate change.</p>
                        </div>
                    </div>
                    <div class="sub-item edge-border">
                        <img src="../../assets/item-5.png" alt="">
                        <div class="text">
                            <p class="font-3 title">Clean Air</p>
                            <p class="font-p description">Clean air is essential for a healthy and thriving community. Reducing pollution from vehicles, industries, and other sources through smart technologies and urban planning will improve air quality, reduce health risks, and enhance the quality of life in urban spaces. Clean air is a vital component of a livable, sustainable city.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- GOALS -->

            <!-- STUDIES -->
            <div class="area-studies edge-border">
                <p class="font-1 heading edge-border">~Studies~</p>
                <div class="studies-container edge-border">
                    <div class="studies edge-border" ref="studies">
                        <div class="sub-item edge-border">
                            <img src="../../assets/waste.png" alt="">
                            <p class="font-4 title">Waste</p>
                            <p class="font-p description">Unsorted and overflowing bins cause public health risks and degrade urban cleanliness.</p>
                        </div>
                        <div class="sub-item edge-border">
                            <img src="../../assets/background.jpg" alt="">
                            <p class="font-4 title">Polluted Air</p>
                            <p class="font-p description">Vehicle emissions and industrial activities worsen air quality, affecting public health.</p>
                        </div>
                        <div class="sub-item edge-border">
                            <img src="../../assets/background.jpg" alt="">
                            <p class="font-4 title">Traffic</p>
                            <p class="font-p description">Overcrowded roads and poor signal timing lead to long travel times and higher fuel usage.</p>
                        </div>
                        <div class="sub-item edge-border">
                            <img src="../../assets/background.jpg" alt="">
                            <p class="font-4 title">Power</p>
                            <p class="font-p description">Traditional street lighting consume excessive electricity, increasing carbon emissions.</p>
                        </div>
                        <div class="sub-item edge-border">
                            <img src="../../assets/background.jpg" alt="">
                            <p class="font-4 title">Water</p>
                            <p class="font-p description">Leaking pipes and unchecked usage result in significant loss of clean water daily.</p>
                        </div>
                        <div class="sub-item edge-border">
                            <img src="../../assets/background.jpg" alt="">
                            <p class="font-4 title">Transport</p>
                            <p class="font-p description">Dependence on fossil fuel transport adds to urban air and noise pollution.</p>
                        </div>
                        <div class="sub-item edge-border">
                            <img src="../../assets/background.jpg" alt="">
                            <p class="font-4 title">Solar</p>
                            <p class="font-p description">Many residents can't install solar panels due to lack of space or funding.</p>
                        </div>
                    </div>
                    <div class="scroll-btn">
                        <div class="scroll scroll-left edge-border" @click="scroll_left">
                            <span class="material-icons font-2">keyboard_double_arrow_left</span>
                        </div>
                        <div class="scroll scroll-right edge-border" @click="scroll_right">
                            <span class="material-icons font-2">keyboard_double_arrow_right</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- STUDIES -->

            <!-- OVERVIEW -->
            <div class="overview edge-border">
                <p class="font-1 heading edge-border">Greeny.fy?</p>
                <p class="description font-p edge-border"><span>Greenyfy</span> is a smart city awareness hub built to inspire and inform urban communities about sustainable living. We spotlight real local challenges—from traffic and waste to energy and air quality—and present smart, tech-driven solutions to create cleaner, healthier cities. With interactive tools, green innovations, and community-powered ideas, Greenyfy helps you take part in building a smarter, greener tomorrow.</p>
            </div>
            <!-- OVERVIEW -->

            <Bottom /> <!-- FOOTER -->

        </div>
        <!-- RELATIVE / SCROLLERBEL CONTAINER -->

    </div>
    <!-- MAIN CONTAINER -->
</template>

<style scoped>
/* LANDING */
.landing-area {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--light-color);
    z-index: 1;
    max-width: var(--max-width);
}

.landing-area .main-section {
    display: flex;
    align-items: center;
    padding-top: 70px;
    height: 90%;
}

.landing-area .main-section .main-text {
    flex: 1;
    margin: 0 10px;
}

.landing-area .main-section .main-text .tagline {
    text-transform: uppercase;
    color: var(--theme-color);
    font-weight: 700;
}

.landing-area .main-section .main-text .heading {
    color: var(--dark-color);
    font-weight: 700;
    margin-bottom: 1rem;
}

.landing-area .main-section .main-text .description {
    color: var(--gray-color);
    margin-bottom: 2rem;
}

.landing-area .main-section .main-text button {
    padding: 10px 15px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: 250ms ease;
}

.landing-area .main-section .main-text #lets-talk-btn {
    background-color: var(--theme-color);
    color: var(--light-color);
    margin-right: 10px;
}

.landing-area .main-section .main-text #read-more-btn {
    background-color: var(--gray-color);
    color: var(--light-color);
    margin-right: 10px;
}

.landing-area .main-section .main-text button:hover {
    padding: 10px 20px;
}

.landing-area .main-section .main-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex: 1;
}

.landing-area .main-section .main-image img {
    width: 700px;
    position: relative;
}

.landing-area .main-section .main-image::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 400px;
    height: 400px;
    background-color: var(--blur-color);
    filter: blur(100px);
    border-radius: 50%;
}

.landing-area .main-section .follow {
    display: flex;
    flex: 0 0 300px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.landing-area .main-section .follow span {
    padding: 15px 0;
}

.landing-area .main-section .follow .material-icons {
    cursor: pointer;
    transition: 250ms ease;
}

.landing-area .main-section .follow .material-icons:hover {
    color: var(--theme-color);
}

.landing-area .main-section .follow #follow-us {
    rotate: 270deg;
    position: relative;
    margin-top: 20px;
}

.landing-area .main-end {
    height: 10%;
    width: 100%;
    background-color: var(--theme-color);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: var(--light-color);
}

.landing-area .main-end .sub-item {
    display: inline-flex;
}

.landing-area .main-end .sub-item span {
    color: var(--light-color);
    padding: 0 10px;
}

.landing-area .main-end .sub-item .title {
    color: var(--light-color);
    font-weight: 500;
}

/* LANDING */

/* RELATIVE */
.relative-container {
    position: relative;
    top: 100vh;
    width: 100%;
    background-color: var(--light-color);
    z-index: 2;
}
/* RELATIVE */

/* GOALS */
.area-goals {
    padding-top: 70px;
    background: linear-gradient(to bottom, #e6f3e8, var(--light-color));
}

.area-goals .heading {
    text-align: center;
    color: var(--dark-color);
    font-weight: 700;
}

.area-goals .goals {
    width: 90%;
    padding-top: 20px;
    gap: 50px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr, 1fr;
}

.area-goals .goals .sub-item {
    display: flex;
    gap: 40px;
    position: relative;
    justify-content: center;
    align-items: center;
    transition: 250ms ease;
}

.area-goals .goals .sub-item:hover {
    transform: scale(1.05);
}

.area-goals .goals .sub-item:last-child {
    width: 50%;
    margin: auto;
    grid-column: span 2;
}

.area-goals .goals .sub-item .text {
    display: flex;
    flex-direction: column;
}

.area-goals .goals .sub-item .text .title {
    color: var(--theme-color);
    margin-bottom: 1rem;
    font-weight: 700;
}

.area-goals .goals .sub-item .text .description {
    text-align: justify;
    padding-right: 1rem;
    color: var(--gray-color);
}

.area-goals .goals .sub-item img {
    height: 200px;
    z-index: 1;
}

.area-goals .goals .sub-item::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 150px;
    height: 150px;
    background-color: var(--blur-color);
    filter: blur(50px);
    border-radius: 50%;
    z-index: 0;
}

/* GOALS */

/* STUDIES */
.area-studies .heading {
    margin-top: 80px;
    text-align: center;
    color: var(--dark-color);
    font-weight: 700;
}

.area-studies .studies-container {
    width: 95%;
    margin: auto;
    position: relative;
    margin-top: 30px;
}

.area-studies .studies-container .studies {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(350px, auto);
    gap: 40px;
    padding: 40px;
    width: 90%;
    margin: auto;
    overflow: auto;
    z-index: 0;
    background-color: var(--line-color);
    border-radius: 20px;
}

.area-studies .studies-container .studies::-webkit-scrollbar {
    display: none;
}

.area-studies .studies-container .studies .sub-item {
    height: 450px;
    border-radius: 20px;
    text-align: center;
    overflow: hidden;
    position: relative;
    transition: 250ms ease;
    background-color: var(--light-color);
}

.area-studies .studies-container .studies .sub-item:hover {
    background-color: var(--theme-color);
    transform: scale(1.05);
}

.area-studies .studies-container .studies .sub-item:hover .title {
    color: var(--theme-color);
    background-color: var(--light-color);
}

.area-studies .studies-container .studies .sub-item:hover .description {
    color: var(--light-color);
}

.area-studies .studies-container .studies .sub-item img {
    height: 70%;
    cursor: not-allowed;
}

.area-studies .studies-container .studies .sub-item .title {
    position: absolute;
    color: var(--light-color);
    background-color: var(--theme-color);
    margin-top: -30px;
    padding: 5px 20px;
    border-radius: 50px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    text-wrap: nowrap;
    font-weight: 600;
}

.area-studies .studies-container .studies .sub-item .description {
    color: var(--gray-color);
    margin-top: 30px;
    padding: 0 20px;
}

.area-studies .studies-container .scroll-btn .scroll {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.area-studies .studies-container .scroll-btn .scroll-left {
    left: 0;
}

.area-studies .studies-container .scroll-btn .scroll-right {
    right: 0;
}

.area-studies .studies-container .scroll-btn .scroll span {
    padding: 10px;
    border-radius: 50px;
    background-color: var(--line-color);
    cursor: pointer;
    transition: 250ms ease;
}

.area-studies .studies-container .scroll-btn .scroll span:hover {
    background-color: var(--theme-color);
    color: var(--light-color);
}

/* STUDIES */

/* OVERVIEW */
.overview .heading {
    margin-top: 70px;
    text-align: center;
    color: var(--dark-color);
    font-weight: 700;
    width: 100%;
}

.overview .description {
    text-align: justify;
    text-align-last: center;
    width: 80%;
    margin: auto;
    margin-top: 20px;
    background-color: var(--theme-color);
    padding: 20px;
    color: var(--light-color);
    border-radius: 20px;
    transition: 250ms ease;
    user-select: none;
}

.overview .description span {
    font-weight: 600;
    color: var(--light-color);
}

.overview .description:hover {
    box-shadow: 5px 5px 10px -5px var(--gray-color);
    filter: brightness(105%);
}

/* OVERVIEW */

/* MEDIA */
@media (max-width: 1600px) {
    .landing-area .main-section .main-image img {
        width: 650px;
    }

    .landing-area .main-section .follow {
        flex: 0 0 200px;
    }
}

@media (max-width: 1500px) {
    .landing-area .main-section .main-image img {
        width: 600px;
    }

    .landing-area .main-section .follow {
        flex: 0 0 150px;
    }
}

@media (max-width: 1350px) {
    .area-goals .goals {
        grid-template-columns: 1fr;
    }

    .area-goals .goals .sub-item:last-child {
        width: auto;
        grid-column: 1;
    }

    .landing-area .main-section .main-image {
        flex: 0 0 550px;
    }
}

@media (max-width: 1250px) {
    .landing-area .main-section .main-image img {
        width: 500px;
    }

    .landing-area .main-section .main-image {
        flex: 0 0 400px;
    }

    .landing-area .main-section .follow {
        flex: 0 0 100px;
    }
}

@media (max-width: 1100px) {
    .relative-container {
        top: 0;
    }

    .area-goals {
        position: static;
        top: auto;
    }

    .landing-area {
        height: auto;
        position: static;
        top: auto;
    }

    .landing-area .main-section {
        flex-direction: column;
    }

    .landing-area .main-section .follow {
        flex-direction: row;
        order: 3;
        align-items: center;
    }

    .landing-area .main-section .follow span {
        padding: 0px 15px;
    }

    .landing-area .main-section .follow #follow-us {
        rotate: 360deg;
        order: 1;
        margin-top: 0px;
    }

    .landing-area .main-section .follow .material-icons {
        order: 2;
    }

    .landing-area .main-section .main-text {
        padding: 50px;
        text-align: center;
        order: 2;
    }

    .landing-area .main-section .main-text #lets-talk-btn {
        margin-right: 0px;
        margin: 5px;
    }

    .landing-area .main-section .main-text #read-more-btn {
        margin-right: 0px;
        margin: 5px;
    }

    .landing-area .main-section .main-image {
        order: 1;
    }

    .landing-area .main-end {
        width: 100%;
    }

    .landing-area .main-end .sub-item {
        padding: 20px 0;
    }

    .area-studies .studies-container {
        width: 100%;
    }

    .area-studies .studies-container .studies {
        width: 100%;
        border-radius: 0px;
        grid-auto-columns: minmax(300px, auto);
        gap: 30px;
        padding: 30px;
    }

    .area-studies .studies-container .studies .sub-item {
        height: 450px;
    }

    .area-studies .studies-container .studies .sub-item img {
        height: 60%;
    }

    .area-studies .studies-container .scroll-btn {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-self: center;
        background-color: var(--line-color);
        padding: 10px 0;
    }

    .area-studies .studies-container .scroll-btn .scroll {
        position: relative;
        transform: translateY(0);
    }

    .area-studies .studies-container .scroll-btn .scroll span {
        background-color: var(--light-color);
    }
}

@media (max-width: 900px) {
    .landing-area {
        position: relative;
    }

    .landing-area .main-end {
        display: grid;
        grid-template-areas:
            "a b c"
            "d e .";
    }

    .landing-area .main-end .sub-item {
        padding: 10px 0;
    }
}

@media (max-width: 750px) {
    .landing-area .main-section {
        padding-top: 50px;
    }

    .landing-area .main-section .main-image img {
        width: 300px;
    }

    .landing-area .main-section .main-image {
        padding: 0;
    }

    .landing-area .main-section .main-text {
        padding: 0;
    }
}

@media (max-width: 600px) {
    .area-goals .goals .sub-item {
        flex-direction: column;
    }

    .area-goals .goals .sub-item .text .title {
        text-align: center;
    }

    .area-goals .goals .sub-item::before {
        top: 0%;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 100px;
    }

    .landing-area .main-section {
        padding: 0 30px;
    }

}

@media (max-width : 650px) {
    .landing-area .main-end {
        display: grid;
        grid-template-areas:
            "a b"
            "c d"
            "e .";
    }
}

@media (max-width: 450px) {
    .landing-area .main-section .main-text button {
        padding: 10px 15px;
    }

    .area-studies .studies-container .studies {
        grid-auto-columns: minmax(250px, auto);
    }
}

@media (max-width: 400px) {
    .landing-area .main-end {
        display: grid;
        grid-template-areas:
            "a"
            "b"
            "c"
            "d"
            "e";
    }

    .landing-area .main-end .sub-item {
        padding: 5px 0;
    }
}
/* MEDIA */
</style>
