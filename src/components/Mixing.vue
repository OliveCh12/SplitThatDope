<template>   
    <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Unit Price ( {{ this.priceUnit }} €
                    <font-awesome-icon icon="long-arrow-alt-right" /> 1 g )</label>
                <input class="form-control" v-model.number="priceUnit" type="number" min="0" placeholder="0" v-on:keyup="onChange">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Total Amount : <span class="badge badge-primary">{{ this.amount }} g = {{this.priceUnit*this.amount}} €</span></label>
                <input class="form-control" v-model.number="amount" type="number" min="0" placeholder="0">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Customer : <span class="badge badge-primary">{{ newCustomer.name}}</span></label>
                <input class="form-control" id="input-name" v-model="newCustomer.name" type="text" placeholder="Enter a name">
            </div>
        </div>
        <div class="col-md-6">
            <div class="form-group">
                <label for="">Price share: <span class="badge badge-primary">{{ newCustomer.price }} €</span></label>
                <input class="form-control" v-model.number="newCustomer.price" type="number" placeholder="0" @keyup.enter="addCustomer">
            </div>
        </div>
        <div class="col-md-12 text-right">
            <br>
            <button class="btn btn-danger" @click="addCustomer">Add Customer</button>
            <br><br>
        </div>
        <div class="col-md-12">
            <table class="table table-borderless table-hover">
                <thead>
                    <tr>
                        <th scope="col">N°</th>
                        <th scope="col">Customers ( {{ totalCustomers }} )</th>
                        <th scope="col">Price ( {{ totalPrice }} € )</th>
                        <th scope="col">Amount ( {{ totalAmount }} g )</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(customer, index) in customers" :key="customer.id">
                        <th scope="row">{{ index }}</th>
                        <td v-if="customer.price === 0">{{ customer.name }} <strong>( Looser...🙄 )</strong></td>
                        <td v-else-if="customer.price === 0 && customer.name === ''">Unknow <strong>( Looser...🙄 )</strong></td>
                        <td v-else-if="customer.name === ''">Unknow</td>
                        <td v-else>{{ customer.name }}</td>
                        <td>{{ customer.price }} €</td>
                        <td v-if="priceUnit <= 0">Free Stuff</td>
                        <td v-else>{{ customer.amount }} g</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import TableSort from './TableSort.vue'

    export default {
        extends: TableSort,
        name: 'Mixing',
        data() {
            return {
                priceUnit: 10,
                amount: 5,
                newCustomer: {
                    name: '',
                    amount: 0,
                    price: 0,
                },
            }
        },
        methods: {
            addCustomer: function () {
                this.newCustomer.amount = this.$_.floor(this.newCustomer.price / this.priceUnit, 2)
                this.customers.push(this.newCustomer)
                this.newCustomer = {
                    name: '',
                    amount: 0,
                    price: 0,
                }
                document.querySelector('#input-name').focus = true
            },
            onChange: function () {
                for (const key in this.customers) {
                    if (this.customers.hasOwnProperty(key)) {
                        const customer = this.customers[key];
                        customer.amount = this.$_.floor(customer.price / this.priceUnit, 2)
                    }
                }
            }
        },
        computed: {
            totalCustomers: function () {
                return this.customers.length
            },
            totalPrice: function () {
                let totalPrice = this.$_.floor(this.$_.sumBy(this.customers, 'price'), 2)
                return totalPrice
            },
            totalAmount: function () {
                let totalAmount = this.$_.floor(this.$_.sumBy(this.customers, 'amount'), 2)
                return totalAmount
            }
        },
    }
</script>

<style>
    label {
        color: rgba(41, 206, 179, 1);
    }
    .badge{
        font-weight: 500 !important;
        font-size: 100% !important;
    }
    .badge-primary{
        color: #1f232c !important;
        background-color: rgba(41, 206, 179, 1) !important;    
    }

    .form-control {
        background-color: #1f232c !important;
        color: #fff !important;
        border: 2px solid rgba(255, 255, 255, 0.0);
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.01);
    }

    .form-control:focus {
        box-shadow: none !important;
        background-color: #1f232c;
        color: #fff;
        border: 2px solid rgba(41, 206, 179, 1) !important;
    }

    .valid-feedback {
        color: rgba(41, 206, 179, 1) !important;
    }

    .nav-tabs {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    .nav-tabs .nav-link:hover {
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
    }
</style>