<template>
  <nav class="container white" ref="nav">
    <div class="page-container wrapper">
      <ul class="list">
        <li>
          <img src="@/assets/logo.webp" width="30" height="37" alt="Logo" />
        </li>
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
          <router-link :to="{ name: 'About' }" class="link"
            >About us</router-link
          >
        </li>
        <li class="menu-button" @click="isMenuOpen = true">
          <svg style="width: 32px; height: 32px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            />
          </svg>
        </li>
      </ul>
      <div class="overlay-menu" v-if="isMenuOpen">
        <span class="close-button" @click="isMenuOpen = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
        </span>
        <ul class="mobile-list">
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
            <router-link :to="{ name: 'About' }" class="link">
              About us
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const nav = ref<HTMLDivElement | null>(null);

const props = defineProps({
  navColor: {
    type: String,
    default: "white",
  },
});

// When the navColor prop changes, change the background color of the navbar
watch(
  () => props.navColor,
  () => {
    if (props.navColor) {
      const colors = ["white", "orange", "blue", "pink"];
      nav.value?.classList.remove(...colors);
      nav.value?.classList.add(props.navColor);
    }
  }
);
const isMenuOpen = ref(false);
</script>

<style scoped lang="scss">
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

.container {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 60px;
  z-index: 5;
  position: fixed;
  width: 100%;
  transition: background-color 0.5s ease;
}
.wrapper {
  height: 100%;
}
ul {
  list-style: none;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100%;

  &.mobile-list {
    flex-direction: column;
  }
}
li {
  margin-left: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  &:not(:last-child) > a:hover {
    color: #5e5e5e;
  }
}
.list li {
  margin-left: 20px;
}
.mobile-list li {
  margin: 8px 0 8px;
}

a {
  color: inherit;
  text-decoration: none;
}
.menu-button {
  margin-top: 5px;
  margin-right: 15px;
  display: none;
  cursor: pointer;
}
.close-button {
  position: absolute;
  top: 14px;
  right: 18px;
  cursor: pointer;
}
.overlay-menu {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media (max-width: $breakpoint-sm) {
  .menu-button {
    display: block;
  }
  .list {
    justify-content: space-between;
  }
  .list :not(:first-child, :last-child) {
    display: none;
  }
  .overlay-menu {
    display: block;
  }
  li a:hover {
    color: #5e5e5e;
  }
}
</style>
