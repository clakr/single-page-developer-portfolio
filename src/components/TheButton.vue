<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
button {
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.6rem;
  letter-spacing: 0.2286rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--green);
  width: fit-content;
  text-transform: uppercase;
}
</style>
