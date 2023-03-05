<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-auto userInfo border-solid">
          <div id="">
            <img class="avatarUser" :src="resultUser.avatar_url" alt="" srcset="" />
            <div class="alignInfoUser">
              <h2 class="userName">{{ resultUser.name }}</h2>
              <h3 class="userName">{{ resultUser.login }}</h3>
              <p>
                <img src="@/assets/icons/briefcase-fill.svg" />
                <span>{{ " " + resultUser.company }}</span>
              </p>
              <p>
                <img src="@/assets/icons/geo.svg" />
                <span>
                  {{ " " + resultUser.location == null ? "" : resultUser.location }}</span
                >
              </p>
              <p>
                <img src="@/assets/icons/archive.svg" />
                <span> {{ " " + resultRep.length }}</span>
              </p>
              <p>
                <img src="@/assets/icons/people.svg" />
                <span> {{ " " + resultUser.followers }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col border-solid">
          <div class="repCss" v-for="rep in resultRep" :key="rep.id">
            <h2>{{ rep.name }}</h2>
            <h4>{{ rep.description }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$route.params.name,
      resultRep: [],
      resultUser: [],
    };
  },
  async mounted() {
    await this.$http.get("/" + this.username + "/repos?direction=desc").then((res) => {
      this.resultRep = res.data;
      console.log(this.resultRep);
    });
    await this.$http.get("/" + this.username).then((res) => {
      this.resultUser = res.data;
      console.log(this.resultUser);
    });
  },
};
</script>

<style></style>
