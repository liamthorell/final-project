<template>
  <Layout>
    <section class="white" ref="bg">
      <div class="page-container container flex">
        <div>
          <h1>{{ props.title }}</h1>
          <div class="card">
            <slot></slot>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
<script setup lang="ts">
import Layout from "./DefaultLayout.vue";
import { ref, onMounted } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Game",
  },
  backgroundColor: {
    type: String,
    default: "white",
  },
});
const bg = ref<HTMLDivElement | null>(null);
onMounted(() => {
  bg.value?.classList.add(props.backgroundColor);
});
</script>
<style lang="scss" scoped>
.white {
  background-color: #ffffff;
}
.orange {
  background-color: $orange;
}
.blue {
  background-color: $blue;
}
.pink {
  background-color: $pink;
}

h1 {
  font-size: 50px;
  text-align: center;
}
.container {
  min-height: 100vh;
  div {
    margin: 50px 0;
  }
}
.card {
  position: relative;
  width: 80vw;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: $box-shadow;
  background-color: white;
  padding: 20px;
  p {
    font-size: 15px;
    margin: 0;
  }
}
@media (max-width: $breakpoint-md) {
  h1 {
    font-size: 40px;
  }
  .card p {
    font-size: 14px;
  }
}
@media (max-width: $breakpoint-sm) {
  h1 {
    font-size: 35px;
  }
  .card p {
    font-size: 13px;
  }
}
</style>
