<template>
  <tr>
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
    <td><button class="button is-small">></button></td>
  </tr>
</template>

<script>
export default {
  name: 'ApplicationRow',
  props: {
    app: Object,
    index: Number
  }
};
</script>
