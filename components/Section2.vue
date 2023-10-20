<template>
    <div class="flex justify-between px-5 py-3 items-center">
        <section class="text-gray-600 hidden md:flex items-center justify-between gap-5">
            <p>Hour</p>
            <p>Day</p>
            <p class="text-primary-600">Week</p>
            <p>Mouth</p>
            <p>Year</p>
        </section>
        <section class="text-gray-600 flex md:hidden items-center justify-between gap-5">
            <select name="time" id="time">
                <option value="Hour">Hour</option>
                <option value="Day">Day</option>
                <option selected value="Week">Week</option>
                <option value="Mouth">Mouth</option>
                <option value="Year">Year</option>
            </select>
        </section>
        <section>
            <p class="md:font-bold flex items-center text-xs md:text-base">
                Week of April 1 to April 05 2021
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
            </p>
        </section>
        <section class="md:flex gap-3 hidden">
            <div>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer">
                    <div
                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                    </div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Weekends</span>
                </label>
            </div>
            <p class="text-xl">+</p>
            <p class="text-xl">-</p>
        </section>
    </div>
</template>

<script setup>

</script>