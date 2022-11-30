<template>
  <div>
    <router-link
      :to="{ name: 'createJudge'}"
      class="btn btn-success"
      >Create Judge
    </router-link>
    <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="judge in Judges" :key="judge._id">
            <td>{{ judge.name }}</td>
            <td>{{ judge.email }}</td>
            <td>{{ judge.phone }}</td>
            <td>
              <router-link
                :to="{ name: 'editJudge', params: { id: judge._id } }"
                class="btn btn-success"
                >Edit
              </router-link>
              <button
                @click.prevent="deleteJudge(judge._id)"
                class="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Judges: [],
    };
  },
  created() {
    let apiURL = "https://31c8-105-163-2-54.ngrok.io/api/get-judges";
    axios
      .get(apiURL)
      .then((res) => {
        this.Judges = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteJudge(id) {
      let apiURL = `https://31c8-105-163-2-54.ngrok.io/api/delete-judge/${id}`;
      let indexOfArrayItem = this.Judges.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Judges.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
