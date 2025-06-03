<script setup>
import Navbar from '../Navbar.vue'
import Bottom from '../Bottom.vue'


import { ref } from 'vue'

const led = ref('')
const led_qty = ref('')

const cfl = ref('')
const cfl_qty = ref('')

const tv = ref('')
const tv_qty = ref('')

const ceiling_fan = ref('')
const ceiling_fan_qty = ref('')

const table_fan = ref('')
const table_fan_qty = ref('')

const daily = ref(0)
const monthly = ref(0)

const submitForm = () => {

    const cal_daily = (
        (led.value * led_qty.value * 9) + (cfl.value * cfl_qty.value * 15) + (tv.value * tv_qty.value * 40) + (ceiling_fan.value * ceiling_fan_qty.value * 70) +
        (table_fan.value * table_fan_qty.value * 40)
    ) / 1000;

    daily.value = cal_daily.toFixed(2)
    monthly.value = (cal_daily * 30).toFixed(2)
}

</script>

<template>
    <!-- MAIN CONTAINER -->
    <div class="container edge-border">

        <Navbar /> <!-- NAVIAGTION -->

        <!-- HEADING -->
        <p class="font-1 heading">Calculators</p>
        <!-- HEADING -->

        <!-- CALCULATORS -->
        <div class="calculators edge-border">

            <!-- CAL -->
            <div class="cal edge-border">
                <p class="font-3 sub-heading">Energy Usage Calculator</p>
                <form  @submit.prevent="submitForm" class="form">
                    <div class="form-row">
                        <label for="led" class="font-5 hours-label">LED Lights (9W):</label>
                        <input type="number" v-model="led" id="led" class="font-p" placeholder="Hours Per Day">
                        <label for="led_qty" class="font-5">QTY :</label>
                        <input type="number" v-model="led_qty" id="led_qty" class="font-p qty-input" placeholder="How Many">
                    </div>

                    <div class="form-row">
                        <label for="cfl" class="font-5 hours-label">CFL Bulb (15W):</label>
                        <input type="number" v-model="cfl" id="cfl" class="font-p" placeholder="Hours Per Day">
                        <label for="cfl_qty" class="font-5">QTY :</label>
                        <input type="number" v-model="cfl_qty" id="cfl_qty" class="font-p qty-input" placeholder="How Many">
                    </div>

                    <div class="form-row">
                        <label for="tv" class="font-5 hours-label">LED TV (40W):</label>
                        <input type="number" v-model="tv" id="tv" class="font-p" placeholder="Hours Per Day">
                        <label for="tv_qty" class="font-5">QTY :</label>
                        <input type="number" v-model="tv_qty" id="tv_qty" class="font-p qty-input" placeholder="How Many">
                    </div>

                    <div class="form-row">
                        <label for="ceiling_fan" class="font-5 hours-label">Ceiling Fan (70W):</label>
                        <input type="number" v-model="ceiling_fan" id="ceiling_fan" class="font-p" placeholder="Hours Per Day">
                        <label for="ceiling_fan_qty" class="font-5">QTY :</label>
                        <input type="number" v-model="ceiling_fan_qty" id="ceiling_fan_qty" class="font-p qty-input" placeholder="How Many">
                    </div>

                    <div class="form-row">
                        <label for="table_fan" class="font-5 hours-label">Table Fan (40W):</label>
                        <input type="number" v-model="table_fan" id="table_fan" class="font-p" placeholder="Hours Per Day">
                        <label for="table_fan_qty" class="font-5">QTY :</label>
                        <input type="number" v-model="table_fan_qty" id="table_fan_qty" class="font-p qty-input" placeholder="How Many">
                    </div>
                    <p class="font-5 result">Daily Usage: {{ daily }} KW</p>
                    <p class="font-5 result">Monthly Usage: {{ monthly }} KW</p>
                    <button type="submit" class="submit-button">Calculate</button>
                </form>
            </div>
            <!-- CAL -->

        </div>
        <!-- CALCULATORS -->

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

/* CALCULATORS */
.calculators {
    width: 50%;
    margin: auto;
}

.calculators .sub-heading {
    position: relative;
    color: var(--theme-color);
    font-weight: 700;
    margin-bottom: 30px;
}

.calculators .sub-heading::before {
    content: "";
    width: 50px;
    height: 4px;
    bottom: -5px;
    left: 0;
    border-radius: 10px;
    position: absolute;
    background-color: var(--theme-color);
}
/* CALCULATORS */

/* CAL */
.calculators .cal {
    padding: 40px;
    border: 1px solid var(--line-color);
    background-color: var(--line-color);
    border-radius: 20px;
}

.calculators .cal .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.calculators .cal .form-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
}

.calculators .cal .form-row label {
    font-weight: 600;
}

.calculators .cal input {
    color: var(--gray-color);
}

.calculators .cal .form-row .qty-input {
    max-width: 200px;    
}

.calculators .cal .form-row .hours-label {
    min-width: 200px;    
}

.calculators .cal input[type="number"] {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid var(--line-color);
    border-radius: 10px;
    width: 3rem;
    transition: all 250ms ease;
}

.calculators .cal input:focus{
    outline: none;
    border-color: var(--theme-color);
    box-shadow: 0 0 0 3px var(--line-color);
}

.calculators .cal .result {
    font-weight: 700;
    align-self: flex-end;
}

.calculators .cal .submit-button {
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

.calculators .cal .submit-button:hover {
    padding: 10px 35px;
}
/* CAL */
</style>
