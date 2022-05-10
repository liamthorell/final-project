<template>
  <Layout title="Game Clicker" backgroundColor="orange">
    <p>Rules: Click on the game to earn G-bucks</p>

    <div class="separator"></div>
    <p>G-bucks: {{ money }}</p>
    <p>GPS (G-bucks per second): {{ gps }}</p>
    <p>GPC (G-bucks per click): {{ clickAmount }}</p>

    <img
      src="https://cdn-icons-png.flaticon.com/512/13/13973.png"
      width="200"
      class="game-image"
      @click="money += clickAmount"
    />
    <div class="upgrades">
      <div>
        <p>Click Upgrades:</p>
        <!-- Display all click upgrades -->
        <div v-for="upgrade in clickUpgrades">
          <p>{{ upgrade.name }} {{ upgrade.cost }}$</p>
          <div class="button" @click="upgradeClick(upgrade.id)">Upgrade</div>
        </div>
      </div>
      <div>
        <p>GPS Upgrades:</p>
        <!-- Display all GPS upgrades -->
        <div v-for="upgrade in GPSUpgrades">
          <p>{{ upgrade.name }} {{ upgrade.cost }}$</p>
          <div class="button" @click="upgradeGPS(upgrade.id)">Upgrade</div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import Layout from "../../layouts/GameLayout.vue";

const clickUpgrades = ref([
  {
    id: 0,
    name: "Playstation 1 (+1)",
    cost: 50,
    amount: 1,
    priceMultiplier: 1.05,
  },
  {
    id: 2,
    name: "Xbox (+5)",
    cost: 400,
    amount: 5,
    priceMultiplier: 1.05,
  },
  {
    id: 3,
    name: "Playstation 3 (+20)",
    cost: 2000,
    amount: 20,
    priceMultiplier: 1.05,
  },
  {
    id: 4,
    name: "Xbox 360 (+50)",
    cost: 10000,
    amount: 50,
    priceMultiplier: 1.03,
  },
  {
    id: 5,
    name: "Playstation 4 (+200)",
    cost: 40000,
    amount: 200,
    priceMultiplier: 1.025,
  },
  {
    id: 6,
    name: "Xbox one (+500)",
    cost: 100000,
    amount: 500,
    priceMultiplier: 1.025,
  },
  {
    id: 7,
    name: "Balastation fayyyv (+2000)",
    cost: 500000,
    amount: 2000,
    priceMultiplier: 1.02,
  },
]);

const GPSUpgrades = ref([
  {
    id: 0,
    name: "Super mario (+5)",
    cost: 50,
    amount: 5,
    priceMultiplier: 1.05,
  },
  {
    id: 2,
    name: "Muck (+25)",
    cost: 400,
    amount: 25,
    priceMultiplier: 1.05,
  },
  {
    id: 3,
    name: "Crab game (+100)",
    cost: 2000,
    amount: 100,
    priceMultiplier: 1.05,
  },
  {
    id: 4,
    name: "Untitled voxel game (+250)",
    cost: 10000,
    amount: 250,
    priceMultiplier: 1.03,
  },
  {
    id: 5,
    name: "Untitled party game (+1000)",
    cost: 40000,
    amount: 1000,
    priceMultiplier: 1.025,
  },
  {
    id: 6,
    name: "Karlson (+2500)",
    cost: 100000,
    amount: 2500,
    priceMultiplier: 1.025,
  },
  {
    id: 7,
    name: "Waltman (+10000)",
    cost: 500000,
    amount: 10000,
    priceMultiplier: 1.02,
  },
]);

// Add money every second based on the GPS amount
onMounted(() => {
  setInterval(() => {
    gps.value = money.value - prevmoney.value;
    prevmoney.value = money.value;

    money.value += GPSAmount.value;
  }, 1000);
});

const clickAmount = ref(1);
const GPSAmount = ref(0);

const money = ref(0);
const prevmoney = ref(0);
const gps = ref(0);

// Purchase a click upgrade
const upgradeClick = (id: number) => {
  const upgrade = clickUpgrades.value.find((upgrade) => upgrade.id === id);

  // Check if upgrade is allowed
  if (upgrade && money.value >= upgrade.cost) {
    money.value -= upgrade.cost;
    clickAmount.value += upgrade.amount;
    upgrade.cost = Math.floor(Math.pow(upgrade.cost, upgrade.priceMultiplier));
  }
};

// Purchase a GPS upgrade
const upgradeGPS = (id: number) => {
  const upgrade = GPSUpgrades.value.find((upgrade) => upgrade.id === id);

  // Check if upgrade is allowed
  if (upgrade && money.value >= upgrade.cost) {
    money.value -= upgrade.cost;
    GPSAmount.value += upgrade.amount;
    upgrade.cost = Math.floor(Math.pow(upgrade.cost, upgrade.priceMultiplier));
  }
};
</script>
<style lang="scss">
.game-image {
  display: block;
  margin: 0 auto;
}
p {
  margin: 4px 0;
}
.separator {
  border-top: solid 1px $orange;
  margin: 10px 0;
}
.upgrades {
  display: flex;
  justify-content: space-around;

  & > div > div {
    margin: 10px 0;
  }
}
.button {
  @extend %base-button;
  background-color: $orange;
}
@media (max-width: $breakpoint-sm) {
  .game-image {
    width: 100px;
  }
}
</style>
