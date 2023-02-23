<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input id="username" type="text" v-model="username" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input id="password" type="password" v-model="password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SimpleLogin',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      // Send login request to server using username and password
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.username, password: this.password })
      });

      if (response.ok) {
        // Save authentication token in local storage or Vuex store
        localStorage.setItem('authToken', 'myAuthToken');
        // Emit login success event
        this.$emit('login-success');
      } else {
        // Handle login error
        alert('Invalid username or password');
      }
    }
  }
}
</script>
