<script setup>
</script>

<template>
    <div class="bottom dev-border">

        <span id="follow-us">Follow Us</span>
        <div class="follow dev-border">
            <span class="material-icons">rss_feed</span>
            <span class="material-icons">thumb_up</span>
            <span class="material-icons">adb</span>
        </div>

        <div class="navigation">
            <ul>
                <li><a href="https://github.com/Rizmi/Greeny.fy" target="_blank" class="font-6 nav-link">GitHub</a></li>
                <li><a href="https://greeny-fy.vercel.app/" target="_blank" class="font-6 nav-link">Hosting</a></li>
                <li><a href="https://greeny-fy.vercel.app/" target="_blank" class="font-6 nav-link">Terms</a></li>
                <li><a href="https://greeny-fy.vercel.app/" target="_blank" class="font-6 nav-link">Privacy Policy</a></li>
                <li><a href="https://greeny-fy.vercel.app/" target="_blank" class="font-6 nav-link">FAQ</a></li>
            </ul>
        </div>

    </div>
</template>

<style scoped>
.bottom {
    background-color: var(--gray-color);
    width: 100%;
    height: auto;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
}

.bottom #follow-us {
    color: var(--light-color);
    margin-bottom: 10px;
}

.bottom .follow span {
    background-color: var(--theme-color);
    padding: 10px;
    margin: 0 10px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 250ms ease;
}

.bottom .follow span:hover {
    color: var(--light-color);
}

.bottom .navigation ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    margin-top: 20px;
}

.bottom .navigation ul .nav-link {
    padding: 0 10px;
    cursor: pointer;
    transition: all 250ms ease;
    color: var(--line-color);
}

.bottom .navigation ul .nav-link:hover {
    padding: 0 20px;
    color: var(--light-color);
}
</style>
