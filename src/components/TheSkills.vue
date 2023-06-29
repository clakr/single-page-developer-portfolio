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
  padding: 4rem 1.6rem 8rem;
  background-image: url(/pattern-rings.svg);
  background-repeat: no-repeat;
  background-position: bottom 1.6rem right -34.3rem;
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

article:last-of-type {
  border-bottom: 1px solid white;
  padding-bottom: 4rem;
}

@media screen and (min-width: 768px) {
  section {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 5.2rem;
    text-align: start;
    padding: 5.2rem 3.2rem 10rem;
    background-position: bottom 3.5rem right -33.2rem;
  }

  article {
    display: flex;
    flex-direction: column;
    row-gap: 1.4rem;
  }

  h4 {
    font-size: 4.8rem;
    line-height: 5.6rem;
    letter-spacing: -0.15rem;
  }

  span {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  article:last-of-type {
    border-bottom: unset;
    padding-bottom: unset;
  }
}

@media screen and (min-width: 1440px) {
  section {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 5.28rem;
    padding: 7.2rem 17rem 14rem;
    background-position: bottom 8.5rem right -23.9rem;
  }

  article {
    display: flex;
    flex-direction: column;
    row-gap: 1.4rem;
  }

  h4 {
    font-size: 4.8rem;
    line-height: 5.6rem;
    letter-spacing: -0.15rem;
  }

  span {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }

  article:last-of-type {
    border-bottom: unset;
    padding-bottom: unset;
  }
}
</style>
