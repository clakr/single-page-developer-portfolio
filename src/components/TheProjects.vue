<script lang="ts" setup>
import TheButton from "./TheButton.vue";

type Project = {
  image: {
    small: string;
    large: string;
  };
  name: string;
  skills: string[];
};

const projects: Project[] = [
  {
    image: {
      small: "/thumbnail-project-1-small.webp",
      large: "/thumbnail-project-1-large.webp",
    },
    name: "Design Portfolio",
    skills: ["HTML", "CSS"],
  },
  {
    image: {
      small: "/thumbnail-project-2-small.webp",
      large: "/thumbnail-project-2-large.webp",
    },
    name: "e-Learning Landing Page",
    skills: ["HTML", "CSS"],
  },
  {
    image: {
      small: "/thumbnail-project-3-small.webp",
      large: "/thumbnail-project-3-large.webp",
    },
    name: "Todo Web App",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: {
      small: "/thumbnail-project-4-small.webp",
      large: "/thumbnail-project-4-large.webp",
    },
    name: "Entertainment Web App",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: {
      small: "/thumbnail-project-5-small.webp",
      large: "/thumbnail-project-5-large.webp",
    },
    name: "Memory Game",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: {
      small: "/thumbnail-project-6-small.webp",
      large: "/thumbnail-project-6-large.webp",
    },
    name: "Art Gallery Showcase",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];
</script>

<template>
  <section>
    <div>
      <h3>Projects</h3>
      <TheButton>Contact Me</TheButton>
    </div>
    <article v-for="({ image, name, skills }, index) in projects" :key="index">
      <img
        :src="image.small"
        alt=""
        :srcset="`${image.small} 1x, ${image.large} 2x`"
      />
      <h4>{{ name }}</h4>
      <div>
        <span v-for="(skill, skillIndex) in skills" :key="skillIndex">
          {{ skill }}
        </span>
      </div>
      <div>
        <Button>View Project</Button>
        <Button>View Code</Button>
      </div>
    </article>
  </section>
</template>

<style scoped>
section {
  padding: 8rem 1.5rem;
  display: grid;
  row-gap: 4rem;
}

section > div {
  display: flex;
  justify-content: space-between;
}

h3 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: -0.1136rem;
}

article {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  text-transform: uppercase;
}

h4 {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
}

article > div {
  display: flex;
}

article > div:first-of-type {
  margin-top: -1.3rem;
  column-gap: 2rem;
}

span {
  color: var(--grey);
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 2.8rem;
}

article > div:last-of-type {
  column-gap: 3.2rem;
}
</style>
