<template>
  <div class="ofac">
    <h1>This page is used to test an API call.</h1>
    <br>
    {{ status }}
    <br>
    <br>
    <h2>This is testing if the injected data can be found on this page.</h2>
    <p>
      This is a test of the injected data's username:
      <strong>{{ getUser.userName || 'nothing found. :(' }}</strong>
    </p>
    <p>
      This is a test of the injected data's account.number:
      <strong>{{ getAccount.number|| 'nothing found. :(' }}</strong>
    </p>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      status: 'Sending request...',
    };
  },
  computed: {
    ...mapGetters(['getUser', 'getAccount']),
    /* This is where we could insert API information for making requests: */
    // token: () => process.env.AUTHTOKEN,
    // config() {
    //   return {
    //     headers: { Authorization: `Bearer ${this.token}` },
    //   };
    // },
  },
  mounted() {
    const makeRequest = () => {
      this.status = 'Awaiting response.';
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => {
          this.status = `Looks like we got a response: ${response.data.body}`;
          return response;
        })
        .then((json) => console.log(json));
    };

    setTimeout(makeRequest, 600);
  },
};
</script>
