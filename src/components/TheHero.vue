<script setup lang="ts">
import TheButton from "./TheButton.vue";
import TheNav from "./TheNav.vue";
</script>

<template>
  <section>
    <picture>
      <img src="/image-profile-mobile.webp" alt="Picture of Adam Keyes" />
    </picture>
    <TheNav />
    <div class="introduction">
      <h3>Nice to meet you! I'm <span>Adam Keyes.</span></h3>
      <p>
        Based in the UK, I'm a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <TheButton>Contact Me</TheButton>
    </div>
  </section>
</template>

<style scoped>
section {
  background-image: url(/pattern-rings.svg), url(/pattern-circle.svg);
  background-repeat: no-repeat;
  background-position: top 12.4rem left -34.2rem, top 25.4rem right -6.5rem;
}

picture {
  width: 17.4rem;
  height: 38.3rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.introduction {
  margin-top: 33rem;
  margin-inline: 1.6rem;
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  text-align: center;
  align-items: center;
  padding-bottom: 8rem;
  border-bottom: 1px solid white;
}

h3 {
  font-size: 4rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: -0.1136rem;
}

span {
  position: relative;
}

span::after {
  content: "";
  position: absolute;
  inset: 0;
  top: 90%;
  left: 0;
  height: 0.4rem;
  background-color: var(--green);
}

p {
  color: var(--grey);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;
}
</style>
