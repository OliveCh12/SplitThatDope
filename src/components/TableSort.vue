<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: 'TableSort',
        data() {
            return {
                // Note 'isActive' is left out and will not appear in the rendered table
                fields: {
                    name: {
                        label: 'Customer',
                        sortable: false
                    },
                    price: {
                        // This key overrides `foo`!
                        key: 'price',
                        label: 'Price ( € )',
                        sortable: true
                    },
                    amount: {
                        key: 'amount',
                        label: 'Amount ( g )',
                        sortable: true
                    },
                },
                customers: []
            }
        },
    }
</script>

<style>
    .table th {
        border-top: none !important;
        color: rgba(41, 206, 179, 1) !important;
    }

    .table td {
        border-top: none !important;
    }

    .table thead th {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    .table-hover tbody tr{
        transition: 0.2s;
    }

    .table-hover tbody tr:hover {
        background-color: rgba(41, 206, 179, 0.1) !important;
    }
</style>

<!-- table-fields-object.vue -->