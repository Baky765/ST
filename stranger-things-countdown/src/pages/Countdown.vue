<template>
  <q-page class="flex flex-center column q-pa-xl">
    <div class="text-h4 text-center q-mb-xl">
      Odpočet do finálnej série Stranger Things
    </div>

    <div class="row q-gutter-xl text-center">
      <div class="column">
        <div class="text-h2">{{ timeLeft.days }}</div>
        <div class="text-subtitle1">Dni</div>
      </div>
      <div class="column">
        <div class="text-h2">{{ timeLeft.hours }}</div>
        <div class="text-subtitle1">Hodiny</div>
      </div>
      <div class="column">
        <div class="text-h2">{{ timeLeft.minutes }}</div>
        <div class="text-subtitle1">Minúty</div>
      </div>
      <div class="column">
        <div class="text-h2">{{ timeLeft.seconds }}</div>
        <div class="text-subtitle1">Sekundy</div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const targetDate = new Date("2025-11-27T02:00:00+01:00"); // Slovensko

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return;
  }

  timeLeft.value = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

let interval;

onMounted(() => {
  updateCountdown();
  interval = setInterval(updateCountdown, 1000);
});

onUnmounted(() => clearInterval(interval));
</script>

<style scoped>
.text-h2 {
  font-weight: bold;
}
</style>
