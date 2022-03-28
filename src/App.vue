<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
}
html {
  scroll-snap-type: y mandatory;
  scroll-snap-type: mandatory; /* for older browsers */
  scroll-snap-points-y: repeat(100vh); /* for older browsers */
}
</style>
