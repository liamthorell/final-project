<template>
  <Navbar :navColor="props.navColor" />
  <slot></slot>
  <Footer />
</template>
<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
const props = defineProps({
  navColor: String,
});
</script>
