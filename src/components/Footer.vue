<template>
  <section class="container footer-wrapper">
    <ul>
      <li>
        <router-link :to="{ name: 'Home' }" class="link">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Courses' }" class="link"
          >Courses</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'Play' }" class="link">Play</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }" class="link">About us</router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

onMounted(() => {
  const el = document.getElementsByClassName(
    "footer-wrapper"
  )[0] as HTMLDivElement;

  if (route.name == "Home") {
    el.style.scrollSnapAlign = "center";
    el.classList.add("pink");
  } else if (route.name == "Courses") {
    el.classList.add("blue");
  } else if (route.name == "About") {
    el.classList.add("orange");
  } else if (route.name == "Play") {
    el.classList.add("pink");
  }
});
</script>
<style scoped lang="scss">
.container {
  padding: 50px 0;
}
.pink {
  background-color: $pink;
}
.orange {
  background-color: $orange;
}
.blue {
  background-color: $blue;
}
ul {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
}
li {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  a:hover {
    color: #5e5e5e;
  }
}
a {
  color: inherit;
  text-decoration: none;
}
@media (max-width: $breakpoint-sm) {
  ul {
    flex-direction: column;
  }
  li {
    margin-bottom: 10px;
  }
}
</style>
