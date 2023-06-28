<script setup lang="ts">
import TheHero from "@/components/TheHero.vue";
import TheSkills from "@/components/TheSkills.vue";
import TheProjects from "./components/TheProjects.vue";
import { inject, onBeforeMount } from "vue";

const addSRHeading = inject("addSRHeading") as () => void;

onBeforeMount(() => {
  addSRHeading();
});
</script>

<template>
  <TheHero />
  <TheSkills />
  <TheProjects />
</template>

<style scoped></style>
