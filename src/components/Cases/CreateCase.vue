<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Create Case</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
            v-model="student.description"
            required
          />
        </div>

        <div class="form-group">
          <label>Judge</label>
          <input
            type="text"
            class="form-control"
            v-model="student.judge"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Create</button>
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
      student: {
        name: "",
        description: "",
        judge: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "https://ff37-105-163-2-54.ngrok.io/api/create-case";

      axios
        .post(apiURL, this.student)
        .then(() => {
          this.$router.push("/view-case");
          this.student = {
            name: "",
            description: "",
            judge: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
