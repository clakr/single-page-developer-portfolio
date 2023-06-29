<script setup lang="ts">
import { inject, onBeforeMount } from "vue";
import TheHero from "@/components/TheHero.vue";
import TheSkills from "@/components/TheSkills.vue";
import TheProjects from "./components/TheProjects.vue";
import TheFooter from "./components/TheFooter.vue";

const addSRHeading = inject("addSRHeading") as () => void;

onBeforeMount(() => {
  addSRHeading();
});
</script>

<template>
  <TheHero />
  <TheSkills />
  <TheProjects />
  <TheFooter />
</template>

<style scoped></style>
