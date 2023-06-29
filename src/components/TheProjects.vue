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
      <div class="wrapper--image">
        <img
          :src="image.small"
          :alt="`${name} preview`"
          :srcset="`${image.small} 1x, ${image.large} 2x`"
        />
        <div>
          <TheButton>View Project</TheButton>
          <TheButton>View Code</TheButton>
        </div>
      </div>
      <h4>{{ name }}</h4>
      <div>
        <span v-for="(skill, skillIndex) in skills" :key="skillIndex">
          {{ skill }}
        </span>
      </div>
      <div>
        <TheButton>View Project</TheButton>
        <TheButton>View Code</TheButton>
      </div>
    </article>
  </section>
</template>

<style scoped>
section {
  padding: 0 1.5rem 8rem;
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

.wrapper--image > div {
  display: none;
}

img {
  width: 100%;
}

h4 {
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 3.2rem;
}

article > div:not(:first-of-type) {
  display: flex;
}

article > div:nth-of-type(2) {
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

@media screen and (min-width: 768px) {
  section {
    padding: 0 3.2rem 10rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 6rem 2rem;
  }

  section > div {
    grid-column: span 2 / span 2;
  }

  section > div > button {
    align-self: flex-start;
  }

  h3 {
    font-size: 7.2rem;
    line-height: 7.2rem;
    letter-spacing: -0.2045rem;
  }
}

@media screen and (min-width: 1440px) {
  section {
    padding: 0 16.5rem 13.9rem;
    gap: 6.9rem 3rem;
  }

  h3 {
    font-size: 8.8rem;
    line-height: 8.8rem;
    letter-spacing: -0.25rem;
  }

  article > div:last-of-type {
    display: none;
  }

  .wrapper--image {
    position: relative;
  }

  .wrapper--image:hover > div {
    display: flex;
  }

  .wrapper--image:hover::after {
    display: block;
  }

  .wrapper--image > div {
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    z-index: 1;
    flex-direction: column;
    align-items: center;
    row-gap: 4.8rem;
  }

  .wrapper--image::after {
    display: none;
    content: "";
    position: absolute;
    inset: 0;
    background: #000;
    opacity: 0.75;
    z-index: 0;
  }
}
</style>
