<template>
  <div class="home">
    <div class="iconsGithub">
      <img src="../../assets/img/github-mark.png" alt=" Git_Logo" />
    </div>
    <div class="buttons">
      <button
        class="B-margin button-choose"
        :class="{ buttonSelected: buttonSelect1 }"
        @click="selectButtons('b1')"
      >
        Repositório
      </button>
      <button
        class="button-choose"
        :class="{ buttonSelected: buttonSelect2 }"
        @click="selectButtons('b2')"
      >
        Usuário
      </button>
    </div>
    <div class="inputSearch">
      <input type="text" class="inputHome" />

      <button class="button-icon" @click="searchGit">
        <img
          class="icon"
          src="@/assets/icons/magnifying-glass-solid.svg"
          alt="icon-search"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      buttonSelect1: false,
      buttonSelect2: false,
    };
  },
  methods: {
    selectButtons(ref) {
      if (ref == "b1") {
        this.buttonSelect1 = true;
        this.buttonSelect2 = false;
      } else {
        this.buttonSelect1 = false;
        this.buttonSelect2 = true;
      }
    },
    searchGit() {
      alert("Searching");
    },
  },
};
</script>
