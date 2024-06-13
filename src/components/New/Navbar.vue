<!-- <template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="https://via.placeholder.com/150x30?text=Company+Logo" alt="Company Logo">
            </a>
        </div>
        <div class="navbar-menu is-active">
            <div class="navbar-start">
                <div class="navbar-item">
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Options</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    Profile
                                </a>
                                <a href="#" class="dropdown-item">
                                    Settings
                                </a>
                                <a href="#" class="dropdown-item">
                                    Help
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Hi, User</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item" @click="logout">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { useApplicationStore } from '../../stores/index';
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

<style>
.navbar {
    background-color: #000;
}
</style> -->

<!-- ***************************************************************************** -->

<!-- <template>
    <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="https://via.placeholder.com/150x30?text=Company+Logo" alt="Company Logo">
            </a>
        </div>
        <div class="navbar-menu is-active">
            <div class="navbar-start">
                <div class="navbar-item">
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Options</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    Profile
                                </a>
                                <a href="#" class="dropdown-item">
                                    Settings
                                </a>
                                <a href="#" class="dropdown-item">
                                    Help
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="dropdown is-hoverable">
                        <div class="dropdown-trigger">
                            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Hi, User</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item" @click="logout">
                                    Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/index';

export default {
    setup() {
        const router = useRouter();
        const userStore = useUserStore();

        const logout = () => {
            userStore.logout();
            router.push('/login');
        };

        return {
            logout
        };
    }
};
</script>

<style>
.navbar {
    background-color: #fff;
}

.navbar.dark-mode {
    background-color: #1a1a1a;
}

.navbar .navbar-menu .navbar-item .dropdown-trigger .button {
    background-color: #3273dc;
    color: white;
}

.navbar .navbar-menu .navbar-item .dropdown-trigger .button:hover {
    background-color: #276cda;
}

.dark-mode .navbar .navbar-menu .navbar-item .dropdown-trigger .button {
    background-color: #4a90e2;
    color: white;
}

.dark-mode .navbar .navbar-menu .navbar-item .dropdown-trigger .button:hover {
    background-color: #3a78d2;
}
</style> -->

<!-- ************************************************************************************ -->
<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="../../assets/Axis_Bank_logo.svg" alt="Logo">
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <!-- <a class="navbar-item">
                    Home
                </a> -->

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Products
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Supernova
                        </a>
                        <a class="navbar-item is-selected">
                            Midas
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-light" @click="logout">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { useApplicationStore } from '../../stores/index';
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
