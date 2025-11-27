<template>
  <div class="column items-center q-my-md">
    <div class="row q-gutter-lg text-center">
      <div class="column">
        <div class="text-h4">{{ timeLeft.days }}</div>
        <div class="text-subtitle2">Dní</div>
      </div>
      <div class="column">
        <div class="text-h4">{{ timeLeft.hours }}</div>
        <div class="text-subtitle2">Hodín</div>
      </div>
      <div class="column">
        <div class="text-h4">{{ timeLeft.minutes }}</div>
        <div class="text-subtitle2">Minút</div>
      </div>
      <div class="column">
        <div class="text-h4">{{ timeLeft.seconds }}</div>
        <div class="text-subtitle2">Sekúnd</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  target: { type: String, required: true }
});

const targetDate = new Date(props.target);

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
.text-h4 {
  font-weight: bold;
}
</style>
