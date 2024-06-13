<template>
    <div class="container">
        <div class="box">
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li><router-link to="/home">Name Match</router-link></li>
                    <li class="is-active"><a href="#" aria-current="page">Application: {{ application.applicationId
                            }}</a></li>
                </ul>
            </nav>
            <h1 class="title">Application Details</h1>
            <div class="content">
                <div class="columns">
                    <div class="column is-one-third">
                        <p><strong>Application ID:</strong> {{ application.applicationId }}</p>
                        <p><strong>Customer Name:</strong> {{ application.customerName }}</p>
                        <p><strong>Product Type:</strong> {{ application.product }}</p>
                        <p><strong>Flag:</strong> {{ application.flag }}</p>
                    </div>
                    <div class="column is-one-third">
                        <p><strong>Assigned to:</strong> {{ application.assignedTo }}</p>
                        <p><strong>Decision by:</strong> {{ application.decisionBy }}</p>
                        <p><strong>Raised on:</strong> {{ application.raisedOn }}</p>
                        <p><strong>Resolved:</strong> {{ application.resolved }}</p>
                    </div>
                    <div class="column is-one-third">
                        <p><strong>Expiry:</strong> {{ application.expiry }}</p>
                        <p><strong>Status:</strong> <span :class="statusClass(application.status)">{{ application.status
                                }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const application = ref({
            applicationId: route.params.id,
            customerName: 'Vikas Verma',
            product: 'Quick Over Draft',
            flag: 'FI',
            assignedTo: 'None',
            decisionBy: 'None',
            raisedOn: '22/05/2023',
            resolved: 'Not resolved',
            expiry: 'Not resolved',
            status: 'PENDING'
        });

        const statusClass = (status) => {
            if (status === 'APPROVED') return 'has-text-success';
            if (status === 'DECLINED') return 'has-text-danger';
            if (status === 'EXPIRED') return 'has-text-warning';
            if (status === 'PENDING') return 'has-text-info';
            return '';
        };

        return {
            application,
            statusClass
        };
    }
};
</script>

<style>
.container {
    margin-top: 1rem;
}
</style>