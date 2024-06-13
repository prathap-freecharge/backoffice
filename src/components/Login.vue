<template>
    <section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-one-third">
                        <div class="box login-box">
                            <h1 class="title has-text-centered">Login</h1>
                            <form @submit.prevent="submitForm">
                                <div class="field">
                                    <label class="label">Email or Name</label>
                                    <div class="control">
                                        <input class="input" type="text" placeholder="e.g. alex@example.com or Alex"
                                            v-model="identifier" required>
                                    </div>
                                </div>
                                <div class="field">
                                    <label class="label">Password</label>
                                    <div class="control">
                                        <input class="input" type="password" placeholder="********" v-model="password"
                                            required>
                                    </div>
                                </div>
                                <div class="field">
                                    <div class="control">
                                        <button class="button is-primary is-fullwidth">Login</button>
                                    </div>
                                </div>
                                <p v-if="error" class="has-text-danger">{{ error }}</p>
                            </form>
                            <div class="has-text-centered">
                                <a href="#" class="forgot-password">Forgot Password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            identifier: '',
            password: '',
            error: ''
        };
    },
    mounted() {
        // Check if user is already logged in
        if (localStorage.getItem('loggedInUser')) {
            this.$router.push('/');
        }
    },
    methods: {
        submitForm() {
            const users = [
                {
                    id: 1,
                    uniqueId: 'e60b75db-a378-46eb-b90c-e0a5fc633927',
                    name: 'Prathap',
                    email: 'prathap@freecharge.com',
                    password: '1234',
                    products: {
                        midas: { 'loan-recovery': 'RM' },
                        supernova: { 'credit-underwriter': 'L1', 'field-investigation': 'CPA' }
                    }
                },
                {
                    id: 2,
                    uniqueId: 'f0ed5ee6-7be5-455c-8441-36fcd2842e7e',
                    name: 'Aniket',
                    email: 'aniket@freecharge.com',
                    password: '1234',
                    products: {
                        supernova: { 'credit-underwriter': 'L1', 'field-investigation': 'CM' }
                    }
                },
                {
                    id: 3,
                    uniqueId: 'bb462a2b-6b4d-42c6-8e25-01f20555cc69',
                    name: 'Rohit',
                    email: 'rohit@freecharge.com',
                    password: '1234',
                    products: {
                        midas: { 'loan-recovery': 'RM' },
                        supernova: { 'credit-underwriter': 'L2', 'field-investigation': 'CPA' }
                    }
                },
                {
                    id: 4,
                    uniqueId: '19d39a6a-90c1-465a-be93-8fda54b5e19c',
                    name: 'Dauleshwar',
                    email: 'Dauleshwar@freecharge.com',
                    password: '1234',
                    products: {
                        midas: { 'loan-recovery': 'LA' },
                        supernova: { 'credit-underwriter': 'L4', 'field-investigation': 'CPA' }
                    }
                },
                {
                    id: 5,
                    uniqueId: '37ac2c51-87c9-471f-a2d9-f5cf9f432f97',
                    name: 'Aalind',
                    email: 'Aalind@freecharge.com',
                    password: '1234',
                    products: {
                        midas: { 'loan-recovery': 'RA' },
                        supernova: { 'credit-underwriter': 'L6', 'field-investigation': 'CM' }
                    }
                },
                {
                    id: 6,
                    uniqueId: 'acc4e632-3012-4bcb-abb9-f9b554505891',
                    name: 'Spandana',
                    email: 'spandana@freecharge.com',
                    password: '1234',
                    products: {
                        midas: { 'loan-recovery': 'RM' }
                    }
                },
                {
                    id: 7,
                    uniqueId: 'b2561885-2ad3-4570-b039-c7e503373e38',
                    name: 'Naveen',
                    email: 'naveen@freecharge.com',
                    password: '1234',
                    products: {
                        supernova: { 'credit-underwriter': 'L2', 'field-investigation': 'CM' }
                    }
                }
            ];

            const user = users.find(
                (user) => (user.email === this.identifier || user.name === this.identifier) && user.password === this.password
            );

            if (user) {
                // Login successful
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                this.$router.push('/');
            } else {
                // Login failed
                this.error = 'Invalid credentials';
            }
        }
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
    /* background-color: #f0f0f0; */
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

.forgot-password {
    margin-top: 1rem;
    color: #3273dc;
    text-decoration: none;
}

.forgot-password:hover {
    text-decoration: underline;
}

.has-text-danger {
    color: #ff3860;
}
</style>