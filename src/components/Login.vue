<template>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-one-third">
              <div class="box login-box">
                <h1 class="title has-text-centered">Login</h1>
                <form @submit.prevent="login">
                  <div class="field">
                    <label class="label">Email or Name</label>
                    <div class="control">
                      <input class="input" type="text" placeholder="e.g. alex@example.com or Alex" v-model="username" required>
                    </div>
                  </div>
                  <div class="field">
                    <label class="label">Password</label>
                    <div class="control">
                      <input class="input" type="password" placeholder="********" v-model="password" required>
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <button class="button is-primary is-fullwidth">Login</button>
                    </div>
                  </div>
                  <p v-if="loginError" class="has-text-danger">{{ loginError }}</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useApplicationStore } from '../stores/index';
  
  export default {
    name: 'Login',
    setup() {
      const store = useApplicationStore();
      const router = useRouter();
      const username = ref('');
      const password = ref('');
  
      const loginError = computed(() => store.loginError);

      if (store.isAuthenticated) {
          router.push('/home');
        }
  
      const login = () => {
        store.login(username.value, password.value);
        if (store.isAuthenticated) {
          router.push('/home');
        } else {
            router.push('/login');
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
  
  <style>
  .hero {
      background: linear-gradient(135deg, #ece9e6 0%, #ffffff 100%);
  }
  
  .login-box {
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .input {
      border-color: #f0f0f0;
      box-shadow: none;
      border-radius: 4px;
      padding: 1rem;
  }
  
  .input:focus {
      border-color: transparent;
      box-shadow: 0 0 0 0.125rem rgba(10, 10, 10, 0.25);
  }
  
  .button.is-primary {
      background-color: #3273dc;
      border-color: transparent;
      color: white;
      border-radius: 4px;
  }
  
  .button.is-primary:hover {
      background-color: #276cda;
  }
  
  .has-text-danger {
      color: #ff3860;
  }
  </style>
  
