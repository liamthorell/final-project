<template>
  <Layout title="Tic Tac Toe" backgroundColor="orange">
    <p>
      Rules: <br />
      Win against the AI
    </p>
    <div class="wrapper">
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../../layouts/GameLayout.vue";
import { onMounted } from "vue";

onMounted(() => {
  const c = document.getElementById("canvas") as HTMLCanvasElement;
});
</script>

<style lang="scss" scoped>
canvas {
  display: block;
  margin: 0 auto;
}
</style>
