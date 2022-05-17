<template>
  <Layout>
    <section class="bg-orange">
      <div class="page-container container flex hero">
        <div>
          <h1>Courses</h1>
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
        <div class="card flex bg-blue">
          <div>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, eveniet ad! Quaerat sequi fugit, vitae optio
              culpa, incidunt ut exercitationem totam eligendi non impedit
              quidem mollitia, maiores illum? Deserunt, alias!
            </p>
            <div class="button">Purchase</div>
          </div>
          <img
            src="https://r2j4y6x9.map2.ssl.hwcdn.net/wp-content/uploads/2018/06/Adding-Polish-to-Games.webp"
            alt="Game control"
          />
        </div>
        <div class="card flex bg-pink">
          <div>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, eveniet ad! Quaerat sequi fugit, vitae optio
              culpa, incidunt ut exercitationem totam eligendi non impedit
              quidem mollitia, maiores illum? Deserunt, alias!
            </p>
            <div class="button">Purchase</div>
          </div>
          <img
            src="https://r2j4y6x9.map2.ssl.hwcdn.net/wp-content/uploads/2018/06/Adding-Polish-to-Games.webp"
            alt="Game control"
          />
        </div>
        <div class="card flex bg-orange">
          <div>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, eveniet ad! Quaerat sequi fugit, vitae optio
              culpa, incidunt ut exercitationem totam eligendi non impedit
              quidem mollitia, maiores illum? Deserunt, alias!
            </p>
            <div class="button">Purchase</div>
          </div>
          <img
            src="https://r2j4y6x9.map2.ssl.hwcdn.net/wp-content/uploads/2018/06/Adding-Polish-to-Games.webp"
            alt="Game control"
          />
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
p {
  font-size: 15px;
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
  & > div {
    margin: 20px 0;
  }
}
.card {
  width: 80vw;
  max-width: 600px;
  margin: 0 auto;
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
  img {
    object-fit: cover;
    height: 100px;
    width: 100px;
    border-radius: 10px;
  }
}
@media (max-width: $breakpoint-md) {
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 14px;
  }
  .card {
    &.flex {
      flex-direction: column-reverse;
    }
    img {
      height: 150px;
      width: 150px;
    }
  }
}
@media (max-width: $breakpoint-sm) {
  h1 {
    font-size: 35px;
  }
  p {
    font-size: 13px;
  }
  .card img {
    height: 120px;
    width: 120px;
  }
}
</style>
