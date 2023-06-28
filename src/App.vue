<script setup lang="ts">
  import { inject, onBeforeMount } from "vue";
  const addSRHeading = inject("addSRHeading") as () => void;
  
  onBeforeMount(() => {
    addSRHeading();
  });
  </script>
  
  <template>
    <div>qwe</div>
  </template>
  
  <style lang="scss" scoped></style>
  