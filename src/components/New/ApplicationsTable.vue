<!-- <template>
    <div class="box">
        <div class="tabs is-toggle">
            <ul>
                <li :class="{ 'is-active': filter === 'all' }" @click="setFilter('all')">
                    <a>All</a>
                </li>
                <li :class="{ 'is-active': filter === 'assigned' }" @click="setFilter('assigned')">
                    <a>Assigned To Me</a>
                </li>
                <li :class="{ 'is-active': filter === 'not_assigned' }" @click="setFilter('not_assigned')">
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
                <tr v-for="(application, index) in filteredApplications" :key="application.id"
                    @click="viewApplication(application)">
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
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
    props: ['applications', 'selectedModule'],
    setup(props) {
        const router = useRouter();
        const filter = ref('all');

        const filteredApplications = computed(() => {
            let apps = props.applications;
            if (props.selectedModule === 'Hunter') {
                apps = apps.filter(app => app.flag === 'Hunter');
            } else if (props.selectedModule === 'Field Investigation') {
                apps = apps.filter(app => app.flag === 'Field Investigation');
            }
            if (filter.value === 'assigned') {
                return apps.filter(app => app.assignedTo);
            } else if (filter.value === 'not_assigned') {
                return apps.filter(app => !app.assignedTo);
            }
            return apps;
        });

        const setFilter = (value) => {
            filter.value = value;
        };

        const statusClass = (status) => {
            if (status === 'APPROVED') return 'has-text-success';
            if (status === 'DECLINED') return 'has-text-danger';
            if (status === 'EXPIRED') return 'has-text-warning';
            return '';
        };

        const viewApplication = (application) => {
            router.push(`/application/${application.applicationId}`);
        };

        return {
            filter,
            filteredApplications,
            setFilter,
            statusClass,
            viewApplication
        };
    }
};
</script>

<style>
.box {
    padding: 2rem;
}
</style> -->

<!-- *********************************************************************************** -->

<template>
    <div class="box">
        <div class="tabs is-toggle">
            <ul>
                <li :class="{ 'is-active': filter === 'all' }" @click="setFilter('all')">
                    <a>All</a>
                </li>
                <li :class="{ 'is-active': filter === 'assigned' }" @click="setFilter('assigned')">
                    <a>Assigned To Me</a>
                </li>
                <li :class="{ 'is-active': filter === 'not_assigned' }" @click="setFilter('not_assigned')">
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
                <tr v-for="(application, index) in filteredApplications" :key="application.id"
                    @click="viewApplication(application)">
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
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
    props: ['applications', 'selectedModule'],
    setup(props) {
        const router = useRouter();
        const filter = ref('all');

        const filteredApplications = computed(() => {
            let apps = props.applications;
            if (props.selectedModule === 'Hunter') {
                apps = apps.filter(app => app.flag === 'Hunter');
            } else if (props.selectedModule === 'Field Investigation') {
                apps = apps.filter(app => app.flag === 'Field Investigation');
            }
            if (filter.value === 'assigned') {
                return apps.filter(app => app.assignedTo);
            } else if (filter.value === 'not_assigned') {
                return apps.filter(app => !app.assignedTo);
            }
            return apps;
        });

        const setFilter = (value) => {
            filter.value = value;
        };

        const statusClass = (status) => {
            if (status === 'APPROVED') return 'has-text-success';
            if (status === 'DECLINED') return 'has-text-danger';
            if (status === 'EXPIRED') return 'has-text-warning';
            return '';
        };

        const viewApplication = (application) => {
            router.push(`/application/${application.applicationId}`);
        };

        return {
            filter,
            filteredApplications,
            setFilter,
            statusClass,
            viewApplication
        };
    }
};
</script>

<style>
.box {
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.table {
    border: none;
}

.table th,
.table td {
    border: none;
}

.table th {
    color: #3273dc;
}

.dark-mode .table th {
    color: #4a90e2;
}

.table th,
.table td {
    border-bottom: 1px solid #ddd;
}

.dark-mode .table th,
.dark-mode .table td {
    border-bottom: 1px solid #444;
}

.table .has-text-success {
    color: #48c774;
}

.table .has-text-danger {
    color: #f14668;
}

.table .has-text-warning {
    color: #ffdd57;
}

.table .button.is-small {
    background-color: #3273dc;
    color: white;
}

.table .button.is-small:hover {
    background-color: #276cda;
}

.dark-mode .table .button.is-small {
    background-color: #4a90e2;
    color: white;
}

.dark-mode .table .button.is-small:hover {
    background-color: #3a78d2;
}
</style>