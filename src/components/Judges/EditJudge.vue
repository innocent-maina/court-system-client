<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Update Judge</h3>
      <form @submit.prevent="handleUpdateForm">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="judge.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="judge.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Phone</label>
          <input
            type="text"
            class="form-control"
            v-model="judge.phone"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Update</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      judge: {},
    };
  },
  created() {
    let apiURL = `https://e16d-105-163-2-54.ngrok.io/api/edit-judge/${this.$route.params.id}`;

    axios.get(apiURL).then((res) => {
      this.judge = res.data;
    });
  },
  methods: {
    handleUpdateForm() {
      let apiURL = `https://e16d-105-163-2-54.ngrok.io/api/update-judge/${this.$route.params.id}`;

      axios
        .put(apiURL, this.judge)
        .then((res) => {
          console.log(res);
          this.$router.push("/view-judge");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
n