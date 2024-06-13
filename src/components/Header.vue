<!-- 
<template>
    <header class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="https://via.placeholder.com/150" alt="Logo">
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <span>Employee: D16135</span>
        </div>
        <div class="navbar-item">
          <button class="button is-light" @click="logout">Logout</button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import { useApplicationStore } from '../stores/index';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Header',
    setup() {
      const store = useApplicationStore();
      const router = useRouter();
  
      const logout = () => {
        store.logout();
        router.push('/login');
      };
  
      return {
        logout
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    border-bottom: 1px solid #ddd;
  }
  </style>
   -->
<!-- ******************************************************************************* -->

<!-- <template>
    <header class="navbar">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <img src="https://via.placeholder.com/150" alt="Logo">
            </router-link>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <span>Role: {{userRole}}</span>
            </div>
            <div class="navbar-item">
                <button class="button is-light" @click="logout">Logout</button>
            </div>
        </div>
    </header>
</template>

<script>
import { useApplicationStore } from '../stores/index';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

export default {
    name: 'Header',
    setup() {
        const store = useApplicationStore();
        const router = useRouter();
        
        const userRole = computed(() => store.userRole);

        const logout = () => {
            store.logout();
            router.push('/login');
        };

        return {
            logout
        };
    }
};
</script>

<style scoped>
.navbar {
    border-bottom: 1px solid #ddd;
}
</style> -->

<!-- ******************************************************************************* -->

<!-- 
<template>
    <header class="navbar">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item">
                <img src="https://via.placeholder.com/150" alt="Logo">
            </router-link>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <span>{{ userRole }}</span>
            </div>
            <div class="navbar-item">
                <button class="button is-light" @click="logout">Logout</button>
            </div>
        </div>
    </header>
</template>

<script>
import { useApplicationStore } from '../stores/index';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Header',
    setup() {
        const store = useApplicationStore();
        const router = useRouter();

        const logout = () => {
            store.logout();
            router.push('/login');
        };

        const userRole = computed(() => store.userRole || '');

        return {
            logout,
            userRole,
        };
    }
};
</script>

<style scoped>
.navbar {
    border-bottom: 1px solid #ddd;
}
</style> -->

<!-- ******************************************************************************* -->

<!-- <template>
    <header class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="https://via.placeholder.com/150" alt="Logo">
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
           <span>EmployeeId: 460079</span>
        </div>
        <div class="navbar-item">
          <button class="button is-light" @click="logout">Logout</button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import { useApplicationStore } from '../stores/index';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Header',
    setup() {
      const store = useApplicationStore();
      const router = useRouter();
  
      const logout = () => {
        store.logout();
        router.push('/login');
      };
  
      return {
        logout,
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    border-bottom: 1px solid #ddd;
  }
  </style>
   -->

   <!-- ******************************************************************************* -->
   <template>
    <header class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="https://via.placeholder.com/150" alt="Logo">
        </router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <span>Role: {{ userRole }}</span>
        </div>
        <div class="navbar-item">
          <button class="button is-light" @click="logout">Logout</button>
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import { useApplicationStore } from '../stores/index';
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'Header',
    setup() {
      const store = useApplicationStore();
      const router = useRouter();
  
      const logout = () => {
        store.logout();
        router.push('/login');
      };
  
      const userRole = computed(() => store.userRole);
  
      return {
        logout,
        userRole,
      };
    }
  };
  </script>
  
  <style scoped>
  .navbar {
    border-bottom: 1px solid #ddd;
  }
  </style>
  