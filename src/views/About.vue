<template>
  <Layout>
    <section class="bg-blue">
      <div class="page-container container flex">
        <div>
          <h1>About us</h1>
          <div class="card">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
              quaerat aperiam esse repellendus velit ipsa harum, consectetur
              voluptates voluptatem neque dolorum ducimus sequi? Minus, minima
              nam voluptates quas nulla quibusdam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Eum, praesentium dolorum? Saepe quos
              adipisci veritatis, enim eveniet quam ducimus inventore distinctio
              accusamus vel tempore nisi neque voluptas necessitatibus minima
              repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati neque tempore voluptates voluptas facere, possimus
              aliquid perspiciatis odit, facilis magnam qui iusto nesciunt amet
              quas accusantium maxime a vero molestiae.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>
<script lang="ts" setup>
import Layout from "../layouts/DefaultLayout.vue";
</script>
<style lang="scss" scoped>
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
