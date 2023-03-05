<template>
  <div>teste de resposta</div>
</template>

<script>
export default {
  data() {
    return {
      username: this.$route.params.name,
      resultUser: [],
    };
  },
  async mounted() {
    this.$http.get("/" + this.username + "/repos?direction=desc").then((res) => {
      this.resultUser = res.data;
      console.log(this.resultUser);
    });
  },
};
</script>

<style></style>
