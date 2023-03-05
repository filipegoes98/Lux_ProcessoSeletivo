<template>
  <div>
    <div v-if="Object.keys(result).length == 0" class="home">
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
        <input type="text" class="inputHome" v-model="searchUser" />

        <button class="button-icon" @click="searchGit">
          <img
            class="icon"
            src="@/assets/icons/magnifying-glass-solid.svg"
            alt="icon-search"
          />
        </button>
      </div>
    </div>
    <div class="pageResult" v-else>
      <div
        @click="selectUser(user.login)"
        class="container result"
        v-for="user in result"
        :key="user.name"
      >
        <div class="row adjust-row">
          <div class="col-md-auto border-solid">
            <img class="avatar" :src="user.avatar_url" :alt="user.name" />
          </div>
          <div class="col infoUser border-solid">
            <h5>{{ user.name }}</h5>
            <h5>{{ user.company }}</h5>
          </div>
        </div>
      </div>
      <button @click="result = []">Voltar e pesquisar</button>
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
      searchUser: "",
      result: [
        {
          login: "fbatera1998",
          id: 83172085,
          node_id: "MDQ6VXNlcjgzMTcyMDg1",
          avatar_url: "https://avatars.githubusercontent.com/u/83172085?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/fbatera1998",
          html_url: "https://github.com/fbatera1998",
          followers_url: "https://api.github.com/users/fbatera1998/followers",
          following_url:
            "https://api.github.com/users/fbatera1998/following{/other_user}",
          gists_url: "https://api.github.com/users/fbatera1998/gists{/gist_id}",
          starred_url: "https://api.github.com/users/fbatera1998/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/fbatera1998/subscriptions",
          organizations_url: "https://api.github.com/users/fbatera1998/orgs",
          repos_url: "https://api.github.com/users/fbatera1998/repos",
          events_url: "https://api.github.com/users/fbatera1998/events{/privacy}",
          received_events_url: "https://api.github.com/users/fbatera1998/received_events",
          type: "User",
          site_admin: false,
          name: "Filipe Emanuel de Góes",
          company: "Prefeitura de Tatuí",
          blog: "",
          location: null,
          email: null,
          hireable: null,
          bio: null,
          twitter_username: null,
          public_repos: 4,
          public_gists: 0,
          followers: 0,
          following: 1,
          created_at: "2021-04-25T13:57:48Z",
          updated_at: "2023-03-04T14:13:56Z",
        },
      ],
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
      if (this.buttonSelect1 == false && this.buttonSelect2 == false) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Nenhum botão foi selecionado, volte e selecione o tipo de pesquisa ",
        });
        return;
      } else if (this.searchUser == "") {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text:
            "Nenhum item está sendo pesquisado, preencha o campo determinado e tente novamente",
        });
        return;
      }
      this.$http.get("/" + this.searchUser).then(
        (res) => {
          this.$swal({
            position: "center",
            icon: "success",
            title: "Usuario Encontrado!",
            confirmButtonColor: "#32CD32",
            timer: 3000,
          });
          this.result.push(res.data);
          console.log(this.result);
        },
        () =>
          this.$swal({
            position: "center",
            icon: "error",
            title: "Desculpe!",
            text: " Não foi possível encontrar o repositório ou usuário desejado! ",
            confirmButtonColor: "#d33",
            timer: 2000,
          })
      );
    },
    selectUser(user) {
      this.$router.push("/usuario/" + user);
    },
  },
  mounted() {
    // alert("Resultado: " + this.result.length);
  },
};
</script>
