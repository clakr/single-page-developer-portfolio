<script lang="ts" setup>
import TheButton from "./TheButton.vue";
import TheNav from "./TheNav.vue";
</script>

<template>
  <footer>
    <h3>Contact</h3>
    <p>
      I would love to hear about your project and how I could help. Please fill
      in the form, and I'll get back to you as soon as possible.
    </p>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" rows="3" />
      <TheButton>Send Message</TheButton>
    </form>
    <TheNav />
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--dark-grey);
  padding: 6rem 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  row-gap: 2rem;
  background-image: url(/pattern-rings.svg);
  background-repeat: no-repeat;
  background-position: top 43.6rem right 18.8rem;
}

h3 {
  text-align: center;
  font-size: 4rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: -0.1136rem;
}

p {
  color: var(--grey);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;
}

form {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  padding-bottom: 8.7rem;
  border-bottom: 1px solid white;
}

input,
textarea {
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.6rem;
  letter-spacing: -0.0222rem;
  background-color: transparent;
  border-bottom: 1px solid white;
  padding: 1.6rem 2.4rem;
}

:is(input, textarea)::placeholder {
  text-transform: uppercase;
  opacity: 0.5;
}

form > button {
  margin-top: 1.6rem;
  align-self: flex-end;
}
</style>
