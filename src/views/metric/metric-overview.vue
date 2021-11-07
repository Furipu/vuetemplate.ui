<template>
  <div>
    <div>
      <h1>Metric Overview</h1>
    </div>
    <DataTable :value="assets">
       <Column field="supplier" header="Supplier"></Column>
    <Column field="amount" header="Amount"></Column>
    <Column field="isPayed" header="IsPayed">
    <template #body="slotProps">
                    {{formatCurrency(slotProps.data.price)}}
                </template>
      </Column>
    </DataTable>
  </div>
</template>
<script lang="ts" src="./metric-overview.ts"></script>
