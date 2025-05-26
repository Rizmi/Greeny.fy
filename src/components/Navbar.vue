<script setup>
import { ref, onMounted } from 'vue';

const navigation_links = ref(null);

const mobile_navbar_open = () => {
    if (navigation_links.value.style.right === '-100%') {
        navigation_links.value.style.right = '0';
    } else {
        navigation_links.value.style.right = '-100%';
    }
};

const mobile_navbar_close = () => {
    navigation_links.value.style.right = '-100%';
};
</script>

<template>
    <div class="nav-container edge-border">
        <nav class="edge-border">
            <div class="logo edge-border">
                <a href="#" class="font-2 logo-text">Greeny.fy</a>
            </div>
            <button id="mobile-navbar-open" @click="mobile_navbar_open">
                <span class="material-icons">menu_open</span>
            </button>
            <ul class="navigation-links edge-border" ref="navigation_links">
                <button id="mobile-navbar-close" @click="mobile_navbar_close">
                    <span class="material-icons">menu_open</span>
                </button>
                <li><router-link class="font-5 nav-link" to="/">Home</router-link></li>
                <li><router-link class="font-5 nav-link" to="/solutions">Solutions</router-link></li>
                <li><router-link class="font-5 nav-link" to="/events">Events</router-link></li>
                <li><router-link class="font-5 nav-link" to="/feedback">Feedback</router-link></li>
                <li><router-link class="font-5 nav-link" to="/contact">Contact</router-link></li>
            </ul>
            <ul class="navigation-btn edge-border">
                <li><span class="material-icons search font-4">search</span></li>
                <li><a href="#area-goals" class="font-5 nav-btn">Explore ></a></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.nav-container {
    max-width: var(--max-width);
    width: 100%;
    height: 70px;
    box-shadow: 0 3px 7px var(--line-color);
    background-color: var(--light-color);
    position: fixed;
    z-index: 3;
    top: 0;
}

.nav-container nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 70%;
    height: 70px;
}

.nav-container nav .logo .logo-text {
    font-weight: 700;
    color: var(--theme-color);
}

.nav-container nav .navigation-links {
    display: flex;
}

.nav-container nav .navigation-links #mobile-navbar-close {
    display: none;
}

.nav-container nav #mobile-navbar-open {
    display: none;
}

.nav-container nav .navigation-links li {
    padding: 0px 20px;
    margin: auto;
}

.nav-container nav .navigation-links li .nav-link {
    color: var(--dark-color);
    transition: 250ms ease;
}

.nav-container nav .navigation-links li .nav-link:hover {
    color: var(--theme-color);
}

.nav-container nav .navigation-links li span {
    color: var(--dark-color);
    cursor: pointer;
}

.nav-container nav .navigation-links .nav-active {
    color: var(--theme-color) !important;
    position: relative;
}

.nav-container nav .navigation-links .nav-active::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 5px;
    background-color: var(--theme-color);
    border-radius: 50%;
}

.nav-container nav .navigation-btn {
    display: inline-flex;
    align-items: center;
}

.nav-container nav .navigation-btn .nav-btn {
    background-color: var(--theme-color);
    padding: 10px;
    border-radius: 10px;
    color: var(--light-color) !important;
    transition: 250ms ease;
    text-wrap: nowrap;
    margin-left: 40px;
}

.nav-container nav .navigation-btn span {
    margin-top: 7px;
}

.nav-container nav .navigation-btn .nav-btn:hover {
    padding: 10px 15px;
}

/* MEDIA */

@media (max-width: 1500px) {
    .nav-container nav {
        width: 80%;
    }
}

@media (max-width: 1250px) {
    .nav-container nav {
        width: 90%;
    }
}

@media (max-width: 1000px) {
    .nav-container nav .navigation-links li {
        padding: 0px 10px;
    }

    .nav-container nav .navigation-btn .nav-btn {
        margin-left: 20px;
    }
}

@media (max-width: 900px) {
    .nav-container nav .navigation-links {
        flex-direction: column;
        position: absolute;
        top: 0;
        right: -100%;
        height: 100vh;
        width: 250px;
        align-items: start;
        background-color: var(--light-color);
        box-shadow: 0 3px 7px var(--line-color);
        transition: 500ms ease;
    }

    .nav-container nav .navigation-links li {
        padding: 20px 0;
        width: 100%;
        margin: 0;
        border-bottom: 1px solid var(--line-color);
    }

    .nav-container nav .navigation-links li:hover {
        background-color: var(--line-color);
    }

    .nav-container nav .navigation-links li .nav-link {
        padding: 0 30px;
        text-align: left;
    }

    .nav-container nav .navigation-links #mobile-navbar-close {
        display: block;
        height: 70px;
        margin-bottom: 30px;
        width: 100%;
        rotate: 180deg;
        background-color: var(--light-color);
        border-top: 1px solid var(--line-color);
    }

    .nav-container nav #mobile-navbar-open {
        display: block;
        padding: 10px 30px;
        background-color: var(--line-color);
        border-radius: 10px;
    }

    .nav-container nav .navigation-links #mobile-navbar-close:hover {
        background-color: var(--line-color);
    }
}

@media (max-width: 750px) {
    .nav-container {
        height: 50px;
    }

    .nav-container nav {
        height: 50px;
    }

    .nav-container nav .navigation-btn .nav-btn {
        padding: 5px;
    }

    .nav-container nav #mobile-navbar-open {
        padding: 5px 20px;
    }
}

@media (max-width: 450px) {
    .nav-container nav .navigation-btn span {
        display: none;
    }
}

@media (max-width: 400px) {
    .nav-container nav {
        width: 95%;
    }
}
</style>
