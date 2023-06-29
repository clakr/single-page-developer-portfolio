<script lang="ts" setup>
type Skill = { name: string; years: number };

const skills: Skill[] = [
  {
    name: "HTML",
    years: 4,
  },
  {
    name: "CSS",
    years: 4,
  },
  {
    name: "JavaScript",
    years: 4,
  },
  {
    name: "Accessibility",
    years: 4,
  },
  {
    name: "React",
    years: 3,
  },
  {
    name: "Sass",
    years: 3,
  },
];
</script>

<template>
  <section>
    <article v-for="(skill, index) in skills" :key="index">
      <h4>{{ skill.name }}</h4>
      <span>{{ skill.years }} Years Experience</span>
    </article>
  </section>
</template>

<style scoped>
section {
  display: grid;
  align-items: center;
  row-gap: 2.4rem;
  text-align: center;
  padding-block: 4rem;
  margin-inline: 1.6rem;
  border-bottom: 1px solid white;
}

h4 {
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: -0.1rem;
}

span {
  color: var(--grey);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;
}
</style>
