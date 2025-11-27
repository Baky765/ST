<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat dense round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Stranger Things Odpočet
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <!-- TOTO je správny drawer -->
    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" class="st-drawer">

      <div class="drawer-title">THE UPSIDE DOWN</div>

      <div class="drawer-text">
        Rána jsou na kafe a na rozjímání<br><br>
        Přátelé jsi nikdy nelžou<br>
        <br>
        🔻TUUUUUUURN AROUND LOOK AT WHAT YOU SEEEEEEEEEEEEEEEEEEEEEEEEEEEE
      </div>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
