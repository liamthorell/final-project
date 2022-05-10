<template>
  <Layout>
    <section class="bg-orange">
      <div class="page-container container flex hero">
        <div>
          <h1>Play</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            quaerat aperiam esse repellendus velit ipsa harum, consectetur
            voluptates voluptatem neque dolorum ducimus sequi? Minus, minima nam
            voluptates quas nulla quibusdam.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="page-container container flex cards">
        <div class="card bg-blue">
          <h3>Tic tac toe</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            obcaecati? Velit reprehenderit veniam consequatur voluptatem eum
            animi quibusdam ex quidem modi quaerat enim vitae at quia illum
            tempora, eos qui.
          </p>
          <router-link :to="{ name: 'TicTacToe' }">
            <div class="button">Play</div>
          </router-link>
        </div>
        <div class="card bg-orange">
          <h3>Game clicker</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            obcaecati? Velit reprehenderit veniam consequatur voluptatem eum
            animi quibusdam ex quidem modi quaerat enim vitae at quia illum
            tempora, eos qui.
          </p>
          <router-link :to="{ name: 'GameClicker' }">
            <div class="button">Play</div>
          </router-link>
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
a {
  text-decoration: none;
  color: inherit;
}
.hero {
  min-height: 50vh;
  & > div {
    margin: 50px 20px 20px;
  }
}

.cards {
  flex-wrap: wrap;
  margin: 40px auto;
}

.card {
  width: 40%;
  min-width: 220px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: $box-shadow;
  padding: 20px;
  h3 {
    font-size: 20px;
    margin: 10px 0;
  }
  p {
    margin: 0;
  }
  .button {
    @extend %base-button;
    margin-top: 10px;
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
