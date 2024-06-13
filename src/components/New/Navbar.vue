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
import { useUserStore } from '../stores/index';  // Correct path to store.js

export default {
    setup() {
        const router = useRouter();
        const userStore = useUserStore();

        const logout = () => {
            localStorage.removeItem('loggedInUser');
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
</style> -->

<template>
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
import { useUserStore } from '../../stores/index'; // Correct path to store.js

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
</style>