<template>
  <Layout title="Dice game" backgroundColor="pink">
    <p>
      Rules: <br />
      Win dice game
    </p>
    <div class="wrapper">
      <canvas id="canvas" width="250" height="250"></canvas>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../../layouts/GameLayout.vue";
import { onMounted } from "vue";

onMounted(async () => {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d");

  if (!ctx) return;

  ctx.font = "20px Poppins";
  ctx.fillText("Roll dice now XD", 10, 50);

  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(75, 75, 100, 100);

  function delay(t: number, v?: unknown) {
    return new Promise(function (resolve) {
      setTimeout(resolve.bind(null, v), t);
    });
  }
  let i = 1;
  while (true) {
    ctx.clearRect(0, 0, 250, 250);
    await delay(1000);
    ctx.fillText(i.toString(), 100, 50);
    if (i == 6) i = 1;
    else i++;
  }
});
</script>

<style lang="scss" scoped>
canvas {
  display: block;
  margin: 0 auto;
}
</style>
