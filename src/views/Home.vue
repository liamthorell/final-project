<template>
  <Layout :navColor="navColor">
    <section class="bg-pink snappy hero-section">
      <div class="page-container container flex">
        <div class="hero-text">
          <h1>Game development does not have to be hard</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga
            illum reprehenderit suscipit. Laudantium, id. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <div class="button">Get started</div>
        </div>
        <div>
          <img src="@/assets/gaming.jpg" alt="Game developer" />
        </div>
      </div>
    </section>
    <section class="snappy courses-section" ref="courses">
      <div class="page-container container flex">
        <div class="card">
          <h2>We offer courses to help you progress in game development</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas harum
            quam quia sapiente, quisquam nesciunt voluptatem ullam ipsum officia
            aut? Possimus sequi, modi aperiam cum repudiandae accusamus sunt
            accusantium! Officiis.
          </p>
          <div class="button">Learn more</div>
        </div>
      </div>
    </section>
    <section class="bg-blue features-section">
      <div class="page-container container flex">
        <h2>Why you should get into gamedev</h2>
        <div class="card snappy">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z"
            />
          </svg>
          <h3>Fun experience</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sit
            quas quaerat voluptatibus libero deleniti beatae ducimus animi
            veniam veritatis, tempore quos similique adipisci nam ipsum
            exercitationem quis atque vel.
          </p>
        </div>
        <div class="card snappy">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15,4A8,8 0 0,1 23,12A8,8 0 0,1 15,20A8,8 0 0,1 7,12A8,8 0 0,1 15,4M15,6A6,6 0 0,0 9,12A6,6 0 0,0 15,18A6,6 0 0,0 21,12A6,6 0 0,0 15,6M14,8H15.5V11.78L17.83,14.11L16.77,15.17L14,12.4V8M2,18A1,1 0 0,1 1,17A1,1 0 0,1 2,16H5.83C6.14,16.71 6.54,17.38 7,18H2M3,13A1,1 0 0,1 2,12A1,1 0 0,1 3,11H5.05L5,12L5.05,13H3M4,8A1,1 0 0,1 3,7A1,1 0 0,1 4,6H7C6.54,6.62 6.14,7.29 5.83,8H4Z"
            />
          </svg>
          <h3>Easy and simple</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sit
            quas quaerat voluptatibus libero deleniti beatae ducimus animi
            veniam veritatis, tempore quos similique adipisci nam ipsum
            exercitationem quis atque vel.
          </p>
        </div>
        <div class="card snappy">
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M14.94 19.5L12 17.77L9.06 19.5L9.84 16.16L7.25 13.92L10.66 13.63L12 10.5L13.34 13.63L16.75 13.92L14.16 16.16M20 2H4V4L8.86 7.64A8 8 0 1 0 15.14 7.64L20 4M18 15A6 6 0 1 1 10.82 9.12A5.86 5.86 0 0 1 13.18 9.12A6 6 0 0 1 18 15M12.63 7H11.37L7.37 4H16.71Z"
            />
          </svg>
          <h3>Rewarding</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sit
            quas quaerat voluptatibus libero deleniti beatae ducimus animi
            veniam veritatis, tempore quos similique adipisci nam ipsum
            exercitationem quis atque vel.
          </p>
        </div>
      </div>
    </section>
    <section class="bg-orange snappy games-section">
      <div class="page-container container flex">
        <div>
          <img src="@/assets/gaming-console.jpg" alt="Game" />
        </div>
        <div class="card">
          <h2>Share your game with the world</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga
            illum reprehenderit suscipit. Laudantium, id. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsam fuga illum reprehenderit
            suscipit. Laudantium, id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div class="button">Learn more</div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from "../layouts/DefaultLayout.vue";
import { ref, onUnmounted } from "vue";

const courses = ref<HTMLDivElement | null>(null);
const navColor = ref("white");

const handleScroll = () => {
  const height = courses.value?.clientHeight || 0;
  if (window.scrollY - height >= 0 && window.scrollY - 2 * height + 100 < 0) {
    navColor.value = "orange";
  } else {
    navColor.value = "white";
  }
};

window.addEventListener("scroll", handleScroll);
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  & > div {
    margin: 0 20px;
  }
}
.snappy {
  scroll-snap-align: center;
}
.hero-section {
  img {
    border-radius: 10px;
    width: 40vw;
    max-width: 450px;
    display: block;
  }
  h1 {
    font-size: 30px;
  }
  .button {
    @extend %base-button;
  }
  .hero-text {
    margin: 50px 0 0;
  }
}
.courses-section {
  .card {
    width: 80vw;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: $box-shadow;
    background-color: $orange;
    padding: 20px;
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 15px;
    }
    .button {
      @extend %base-button;
    }
  }
}

.features-section {
  .flex {
    flex-wrap: wrap;
    align-content: center;
  }
  h2 {
    font-size: 25px;
    text-align: center;
    flex-basis: 100%;
    margin-top: -70px;
  }
  .card {
    width: 80vw;
    margin: 0 10px;
    border-radius: 10px;
    box-shadow: $box-shadow;
    background-color: white;
    padding: 20px;
    flex-basis: calc(33.33% - 60px);
  }
  h3 {
    font-size: 18px;
    text-align: center;
    margin-top: 8px;
  }
  svg {
    height: 42px;
    width: 42px;
    margin: 0 auto;
    display: block;
  }
  p {
    font-size: 13px;
    text-align: center;
  }
}
.games-section {
  img {
    border-radius: 10px;
    width: 40vw;
    max-width: 400px;
    display: block;
  }
  .card {
    width: 80vw;
    max-width: 600px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: $box-shadow;
    background-color: white;
    padding: 20px;
    h2 {
      font-size: 25px;
      margin-top: 8px;
    }
    p {
      font-size: 13px;
    }
    .button {
      @extend %base-button;
      background-color: $orange;
    }
  }
}

@media (max-width: $breakpoint-md) {
  .flex {
    flex-direction: column;
  }
  .hero-section {
    img {
      width: 65vw;
      margin: 0 auto;
    }
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
    }
    .button {
      margin: 0 auto 20px;
    }
  }
  .features-section {
    .card {
      margin: 10px 0;
    }
    h2 {
      margin-top: 0;
    }
    .flex {
      padding: 30px 0;
    }
  }
  .games-section {
    img {
      width: 65vw;
      margin: 0 auto;
    }
    .card {
      margin-top: 20px;
    }
  }
}
@media (max-width: $breakpoint-sm) {
  .hero-section {
    img {
      width: 80vw;
      max-width: 425px;
    }
    h1 {
      font-size: 25px;
    }
    p {
      font-size: 14px;
    }
  }
  .courses-section {
    .card {
      h2 {
        font-size: 22px;
      }
      p {
        font-size: 13px;
      }
    }
  }
  .features-section {
    h2 {
      font-size: 22px;
    }
    .card {
      padding: 10px;
    }
  }
  .games-section {
    img {
      width: 80vw;
      max-width: 425px;
    }
  }
}
</style>
