<template>
  <Layout title="Tic Tac Toe" backgroundColor="blue">
    <p>
      Rules: <br />
      Win against the AI. Click the boxes to place a marker.
    </p>
    <p v-if="checkWin" class="win-text">
      {{
        checkWin == "human" ? "You won" : checkWin == "tie" ? "Tie" : "You lost"
      }}
    </p>
    <p class="score">Score: {{ score }}</p>
    <div class="button" v-if="checkWin" @click="restart">Play again</div>
    <div class="wrapper" ref="wrapper">
      <div @click="boxClick(i - 1)" v-for="i in 9"></div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "../../layouts/GameLayout.vue";
import { ref, computed } from "vue";
const playersTurn = ref(true);
const wrapper = ref<HTMLDivElement | null>(null);

const boxes = ref<Record<number, unknown>>({
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
});

const winOutcomes = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const score = ref(0);

const filLBox = (index: number, isPlayer: boolean) => {
  if (wrapper.value) {
    (wrapper.value.children[index] as HTMLDivElement).style.backgroundColor =
      isPlayer ? "#ffcce2" : "#ffe4ca";
    (wrapper.value.children[index] as HTMLDivElement).style.borderColor =
      isPlayer ? "#ffe4ca" : "#ffcce2";
  }

  boxes.value[index] = isPlayer ? "human" : "ai";
};

const checkBoxesExist = () => {
  let exists = false;
  Object.values(boxes.value).forEach((e) => {
    if (!e) exists = true;
  });
  return exists;
};

const checkWin = computed(() => {
  let winner = null;

  winner = Object.values(boxes.value).every((e) => !!e) ? "tie" : null;

  ["human", "ai"].forEach((player) => {
    winOutcomes.forEach((outcome) => {
      const [a, b, c] = outcome;
      if (
        boxes.value[a] == player &&
        boxes.value[b] == player &&
        boxes.value[c] == player
      ) {
        winner = player;
      }
    });
  });
  if (winner == "human") score.value++;
  if (winner == "ai") score.value = 0;

  return winner;
});

const boxClick = (number: number) => {
  if (
    playersTurn.value &&
    checkBoxesExist() &&
    !checkWin.value &&
    boxes.value[number] == null
  ) {
    playersTurn.value = false;
    filLBox(number, true);

    ai();

    playersTurn.value = true;
  }
};

const ai = () => {
  if (checkBoxesExist() == false || checkWin.value) return;

  let aiBox: number | null = null;

  winOutcomes.forEach((outcome) => {
    const [a, b, c] = outcome;
    if (
      boxes.value[a] == "human" &&
      boxes.value[b] == "human" &&
      boxes.value[c] == null
    ) {
      aiBox = c;
    }
    if (
      boxes.value[b] == "human" &&
      boxes.value[c] == "human" &&
      boxes.value[a] == null
    ) {
      aiBox = a;
    }
    if (
      boxes.value[a] == "human" &&
      boxes.value[c] == "human" &&
      boxes.value[b] == null
    ) {
      aiBox = b;
    }
  });

  if (aiBox == null) {
    console.log("random");
    while (true) {
      aiBox = Math.floor(Math.random() * 9);
      if (boxes.value[aiBox] == null) {
        break;
      }
    }
  }

  filLBox(aiBox || 0, false);
};

const restart = () => {
  if (!wrapper.value) return;

  Object.keys(boxes.value).forEach((key) => {
    boxes.value[key as unknown as number] = null;
  });

  for (let item of wrapper.value?.children) {
    (item as HTMLDivElement).style.backgroundColor = "";
    (item as HTMLDivElement).style.borderColor = "#d2f9ff";
  }
};
</script>

<style lang="scss" scoped>
canvas {
  display: block;
  margin: 0 auto;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  margin: 0 10%;
}
.wrapper > div {
  margin-top: 20px;
  border: 2px solid $blue;
  border-radius: 5px;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.win-text {
  text-align: center;
  font-size: 25px;
  margin: 0;
}
.score {
  position: absolute;
  top: 0;
  right: 30px;
  font-size: 20px;
}
.button {
  @extend %base-button;
  background-color: $blue;
  margin: 0 auto;
}
@media (max-width: $breakpoint-sm) {
  .wrapper > div {
    height: 50px;
    width: 50px;
  }
}
</style>
