<template>
  <div>
    <div class="tabs is-toggle is-fullwidth">
      <ul>
        <li class="is-active"><a>All</a></li>
        <li><a>Assigned to Me</a></li>
        <li><a>Not Assigned</a></li>
      </ul>
    </div>
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
        <ApplicationRow v-for="(app, index) in applications" :key="index" :app="app" :index="index" />
      </tbody>
    </table>
  </div>
</template>

<script>
import ApplicationRow from './ApplicationRow.vue';

export default {
  name: 'ApplicationTable',
  components: { ApplicationRow },
  data() {
    return {
      applications: [
        { product: 'QOD', flag: 'FI', appId: '1234568910', customerName: 'Vikas Verma', assignedTo: '', decisionBy: '', raisedOn: '21/06/23', resolved: '', expiry: '25/06/23', status: 'CRITICAL' },
        { product: 'QOD', flag: 'FI', appId: '1234568910', customerName: 'Vikas Verma', assignedTo: '', decisionBy: '', raisedOn: '21/06/23', resolved: '', expiry: '25/06/23', status: 'CRITICAL' },
        // Add more dummy data as needed
      ]
    };
  }
};
</script>
