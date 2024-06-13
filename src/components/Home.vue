<template>
    <div>
        <nav class="navbar is-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img height="500px" src="https://w7.pngwing.com/pngs/461/399/png-transparent-axis-bank-logo-bank-logos-thumbnail.png" alt="Company Logo">
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <div class="navbar-item">
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="text" placeholder="Search">
                                <span class="icon is-left">
                                    <i class="fas fa-search"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
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
                                        <hr class="dropdown-divider">
                                        <a href="#" class="dropdown-item">
                                            Log Out
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <button class="button is-light" @click="logout">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="columns">
            <aside class="column is-2">
                <p class="menu-label">Modules</p>
                <ul class="menu-list">
                    <li><a @click="selectModule('Name Match')">Name Match</a></li>
                    <li><a @click="selectModule('Field Investigation')">Field Investigation</a></li>
                    <li><a @click="selectModule('Hunter')">Hunter</a></li>
                </ul>
            </aside>

            <div class="column is-10">
                <div class="box">
                    <div class="tabs is-toggle">
                        <ul>
                            <li :class="{ 'is-active': filter === 'all' }" @click="filter = 'all'">
                                <a>All</a>
                            </li>
                            <li :class="{ 'is-active': filter === 'assigned' }" @click="filter = 'assigned'">
                                <a>Assigned To Me</a>
                            </li>
                            <li :class="{ 'is-active': filter === 'not_assigned' }" @click="filter = 'not_assigned'">
                                <a>Not Assigned</a>
                            </li>
                        </ul>
                    </div>
                    <table class="table is-fullwidth is-hoverable">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Product</th>
                                <th>Flag</th>
                                <th>Application ID</th>
                                <th>Customer Name</th>
                                <th>Assigned to</th>
                                <th>Decision by</th>
                                <th>Raised on</th>
                                <th>Resolved</th>
                                <th>Expiry</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(application, index) in filteredApplications" :key="application.id">
                                <td>{{ index + 1 }}</td>
                                <td>{{ application.product }}</td>
                                <td>{{ application.flag }}</td>
                                <td>{{ application.applicationId }}</td>
                                <td>{{ application.customerName }}</td>
                                <td>{{ application.assignedTo }}</td>
                                <td>{{ application.decisionBy }}</td>
                                <td>{{ application.raisedOn }}</td>
                                <td>{{ application.resolved }}</td>
                                <td>{{ application.expiry }}</td>
                                <td :class="statusClass(application.status)">{{ application.status }}</td>
                                <td><a class="button is-small">View</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
// import { useUserStore } from '../stores/index';

export default {
    setup() {
        const router = useRouter();
        // const userStore = useUserStore();
        const filter = ref('all');
        const selectedModule = ref('Name Match');

        const applications = ref([
            { id: 1, product: 'QOD', flag: 'NAME_MATCH', applicationId: '66586503482cab8e0833d122', customerName: 'JHUNWALA', assignedTo: '19514', decisionBy: '19514', raisedOn: '30/05/2024', resolved: '31/05/2024', expiry: '29/06/2024', status: 'APPROVED' },
            { id: 2, product: 'MF', flag: 'NAME_MATCH', applicationId: '664da6f36a7d17e12dac6c4', customerName: 'aditya sanjay jarag', assignedTo: 'FC20082', decisionBy: 'FC20082', raisedOn: '22/05/2024', resolved: '22/05/2024', expiry: '25/05/2024', status: 'APPROVED' },
            { id: 3, product: 'QOD', flag: 'NAME_MATCH', applicationId: '663c74d694a9d23a542fa03e', customerName: 'JHUNWALA', assignedTo: 'FC19255', decisionBy: 'FC19255', raisedOn: '15/05/2024', resolved: '22/05/2024', expiry: '08/06/2024', status: 'DECLINED' },
            { id: 4, product: 'MF', flag: 'NAME_MATCH', applicationId: '666683b924e70842f9f2366d', customerName: 'DILBAHAR SINGH ARORA', assignedTo: '', decisionBy: '', raisedOn: '10/06/2024', resolved: '', expiry: '03/05/2024', status: 'EXPIRED' },
            { id: 5, product: 'MF', flag: 'NAME_MATCH', applicationId: '66604f2024e70842f9f23400', customerName: 'DILBAHAR SINGH ARORA', assignedTo: '', decisionBy: '', raisedOn: '10/06/2024', resolved: '', expiry: '03/05/2024', status: 'EXPIRED' },
            { id: 6, product: 'MF', flag: 'NAME_MATCH', applicationId: '6630cb79da2c759a033fffc', customerName: 'DILBAHAR SINGH ARORA', assignedTo: '', decisionBy: '', raisedOn: '06/06/2024', resolved: '', expiry: '03/05/2024', status: 'EXPIRED' },
        ]);

        const filteredApplications = computed(() => {
            let apps = applications.value;
            if (selectedModule.value === 'Hunter') {
                apps = apps.filter(app => app.flag === 'Hunter');
            } else if (selectedModule.value === 'Field Investigation') {
                apps = apps.filter(app => app.flag === 'Field Investigation');
            }
            if (filter.value === 'assigned') {
                return apps.filter(app => app.assignedTo);
            } else if (filter.value === 'not_assigned') {
                return apps.filter(app => !app.assignedTo);
            }
            return apps;
        });

        const logout = () => {
            localStorage.removeItem('loggedInUser');
            // userStore.logout();
            router.push('/login');
        };

        const selectModule = (module) => {
            selectedModule.value = module;
        };

        const statusClass = (status) => {
            if (status === 'APPROVED') return 'has-text-success';
            if (status === 'DECLINED') return 'has-text-danger';
            if (status === 'EXPIRED') return 'has-text-warning';
            return '';
        };

        return {
            filter,
            applications,
            filteredApplications,
            selectedModule,
            logout,
            selectModule,
            statusClass
        };
    }
};
</script>

<style>
.navbar {
    background-color: #fff;
}

.login-box {
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.input {
    background-color: #f0f0f0;
    border: none;
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