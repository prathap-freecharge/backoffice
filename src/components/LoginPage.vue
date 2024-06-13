<template>
  <div class="login-page">
    <div class="login-box">
      <h1 class="title">Login</h1>
      <form @submit.prevent="login">
        <div class="field">
          <label class="label">Username</label>
          <div class="control">
            <input class="input" type="text" v-model="username" required />
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" v-model="password" required />
          </div>
        </div>

        <div class="field">
          <div class="control">
            <button class="button is-primary" type="submit">Login</button>
          </div>
        </div>

        <p v-if="loginError" class="has-text-danger">{{ loginError }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import { useApplicationStore } from '../stores/index';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

export default {
  name: 'LoginPage',
  setup() {
    const store = useApplicationStore();
    const router = useRouter();
    const username = ref('');
    const password = ref('');

    const loginError = computed(() => store.loginError);

    const login = () => {
      store.login(username.value, password.value);
      if (store.isAuthenticated) {
        router.push('/');
      }
    };

    return {
      username,
      password,
      login,
      loginError,
    };
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}
</style>

<!-- <template>
  <div class="login-container">
    <div class="login-form">
      <h1>Login</h1>
      <p class="login-subtext">By logging in, you accept our <a href="#">terms and privacy policy</a>.</p>
      <form @submit.prevent="login" class="form">
        <div class="input-group">
          <input type="text" placeholder="Email" v-model="username" required>
        </div>
        <div class="input-group">
          <input type="password" placeholder="Password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
        <p v-if="loginError" class="error-message">{{ loginError }}</p>
      </form>
      <div class="social-logins">
        <button class="google-login">Login with Google</button>
        <button class="apple-login">Login with Apple</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
}

.login-form {
  width: 100%;
  max-width: 360px;
  padding: 2rem;
  background: var(--form-background);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 0.5rem;
}

.login-subtext {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 1rem;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #007aff;
  margin-bottom: 1rem;
}

.social-logins button {
  width: 100%;
  margin-top: 0.5rem;
}

.google-login {
  background-color: #4285F4;
}

.apple-login {
  background-color: #000;
}

.error-message {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 1rem;
}

a {
  color: #007aff;
}

:root {
  --background-color: #f5f5f5;
  --form-background: #ffffff;
  --text-color: #333;
  --text-secondary: #666;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #121212;
    --form-background: #333;
    --text-color: #fff;
    --text-secondary: #bbb;
  }
}
</style>


<script setup>
console.log('Hello from Login!');
</script> -->