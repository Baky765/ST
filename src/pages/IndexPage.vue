<template>
  <q-page class="column items-center q-pa-xl">

    <div class="text-h3 neon-red glitch q-mb-xl" data-text="Stranger Things – Finálna séria">
      Stranger Things – Finálna séria
    </div>

    <!-- Prvé 4 -->
    <div class="countdown-card q-mb-xl text-center">
      <div class="text-h5 neon-red glitch q-mb-sm"
           data-text="Prvé 4 epizódy – 27. november o 02:00">
        🎬 Prvé 4 epizódy – 27. november
      </div>

      <Countdown target="2025-11-27T02:00:00+01:00" />
    </div>

    <!-- ďalšie 3 -->
    <div class="countdown-card q-mb-xl text-center">
      <div class="text-h5 neon-red glitch q-mb-sm"
           data-text="Ďalšie 3 epizódy – 26. december o 02:00">
        🎬 Ďalšie 3 epizódy – 26. december
      </div>

      <Countdown target="2025-12-26T02:00:00+01:00" />
    </div>

    <!-- finále -->
    <div class="countdown-card q-mb-xl text-center">
      <div class="text-h5 neon-red glitch q-mb-sm"
           data-text="Finále – 1. január o 02:00">
        🔥 Finále – 1. január
      </div>

      <Countdown target="2026-01-01T02:00:00+01:00" />
    </div>

  </q-page>
</template>

<script setup>
import Countdown from "src/components/Countdown.vue";
</script>
