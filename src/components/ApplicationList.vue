<!-- <template>
    <div>
        <Header />
        <div class="columns">
            <div class="column is-one-fifth">
                <Sidebar @flag-selected="setFlag" />
            </div>
            <div class="column">
                <div class="tabs is-toggle is-fullwidth">
                    <ul>
                        <li class="is-active"><a>All</a></li>
                        <li><a>Assigned to Me</a></li>
                        <li><a>Not Assigned</a></li>
                    </ul>
                </div>
                <button class="button is-primary is-pulled-right" @click="showFilterModal">Show Filters</button>
                <FilterModal :isActive="isFilterModalActive" @close="closeFilterModal" @apply-filters="applyFilters" />
                <table class="table is-fullwidth is-striped">
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
                        <tr v-for="(app, index) in filteredApplications" :key="app.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ app.product }}</td>
                            <td>{{ app.flag }}</td>
                            <td>{{ app.appId }}</td>
                            <td>{{ app.customerName }}</td>
                            <td>{{ app.assignedTo }}</td>
                            <td>{{ app.decisionBy }}</td>
                            <td>{{ app.raisedOn }}</td>
                            <td>{{ app.resolved }}</td>
                            <td>{{ app.expiry }}</td>
                            <td>{{ app.status }}</td>
                            <td><router-link :to="'/details/' + app.id" class="button is-small">></router-link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import FilterModal from './FilterModal.vue';
import { useApplicationStore } from '../stores/index';
import { computed, ref } from 'vue';

export default {
    name: 'ApplicationList',
    components: {
        Header,
        Sidebar,
        FilterModal
    },
    setup() {
        const store = useApplicationStore();
        const isFilterModalActive = ref(false);
        const filters = ref({ productTypes: [], partnerNames: [] });

        const showFilterModal = () => {
            isFilterModalActive.value = true;
        };

        const closeFilterModal = () => {
            isFilterModalActive.value = false;
        };

        const applyFilters = (newFilters) => {
            filters.value = newFilters;
        };

        const filteredApplications = computed(() => {
            return store.filteredApplications.filter(app => {
                const productMatch = filters.value.productTypes.length ? filters.value.productTypes.includes(app.product) : true;
                const partnerMatch = filters.value.partnerNames.length ? filters.value.partnerNames.includes(app.customerName) : true;
                return productMatch && partnerMatch;
            });
        });

        const setFlag = (flag) => {
            store.setFlag(flag);
        };

        return {
            filteredApplications,
            showFilterModal,
            closeFilterModal,
            applyFilters,
            isFilterModalActive,
            setFlag
        };
    }
};
</script>

<style scoped>
.button.is-primary.is-pulled-right {
    margin-bottom: 1rem;
}
</style> -->


<template>
    <div>
        <Header />
        <div class="columns">
            <div class="column is-one-fifth">
                <Sidebar @flag-selected="setFlag" />
            </div>
            <div class="column">
                <div class="tabs is-toggle is-fullwidth">
                    <ul>
                        <li class="is-active"><a>All</a></li>
                        <li><a>Assigned to Me</a></li>
                        <li><a>Not Assigned</a></li>
                    </ul>
                </div>
                <button class="button is-primary is-pulled-right" @click="showFilterModal">Show Filters</button>
                <FilterModal :isActive="isFilterModalActive" @close="closeFilterModal" @apply-filters="applyFilters" />
                <table class="table is-fullwidth is-striped">
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
                        <tr v-for="(app, index) in filteredApplications" :key="app.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ app.product }}</td>
                            <td>{{ app.flag }}</td>
                            <td>{{ app.appId }}</td>
                            <td>{{ app.customerName }}</td>
                            <td>{{ app.assignedTo }}</td>
                            <td>{{ app.decisionBy }}</td>
                            <td>{{ app.raisedOn }}</td>
                            <td>{{ app.resolved }}</td>
                            <td>{{ app.expiry }}</td>
                            <td>{{ app.status }}</td>
                            <td>
                                <router-link v-if="userRole === 'CM'" :to="'/details/' + app.id"
                                    class="button is-small">
                                    >
                                </router-link>
                                <button v-else class="button is-small" disabled>
                                    >
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import Sidebar from './Sidebar.vue';
import FilterModal from './FilterModal.vue';
import { useApplicationStore } from '../stores/index';
import { computed, ref } from 'vue';

console.log('Hello from Application list page!');

export default {
    name: 'ApplicationList',
    components: {
        Header,
        Sidebar,
        FilterModal
    },
    setup() {
        const store = useApplicationStore();
        const isFilterModalActive = ref(false);
        const filters = ref({ productTypes: [], partnerNames: [] });

        const showFilterModal = () => {
            isFilterModalActive.value = true;
        };

        const closeFilterModal = () => {
            isFilterModalActive.value = false;
        };

        const applyFilters = (newFilters) => {
            filters.value = newFilters;
        };

        const filteredApplications = computed(() => {
            return store.filteredApplications.filter(app => {
                const productMatch = filters.value.productTypes.length ? filters.value.productTypes.includes(app.product) : true;
                const partnerMatch = filters.value.partnerNames.length ? filters.value.partnerNames.includes(app.customerName) : true;
                return productMatch && partnerMatch;
            });
        });

        const setFlag = (flag) => {
            store.setFlag(flag);
        };

        const userRole = computed(() => store.userRole);

        return {
            filteredApplications,
            showFilterModal,
            closeFilterModal,
            applyFilters,
            isFilterModalActive,
            setFlag,
            userRole
        };
    }
};
</script>

<style scoped>
.button.is-primary.is-pulled-right {
    margin-bottom: 1rem;
}
</style>