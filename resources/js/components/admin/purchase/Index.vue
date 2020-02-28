<template>
    <div>
        <div class="row">
            <v-breadcrumbs :items="items"></v-breadcrumbs>
            <div class="col-12">
                <v-btn class="ma-2 float-right" tile color="indigo" @click="create" dark>New Purchase Order</v-btn>
            </div>
            <div class="col-12">
                <v-simple-table fixed-header >
                    <thead>
                        <tr>
                            <th class="text-left">#</th>
                            <th class="text-left">PO ID</th>
                            <th class="text-left">Order Description</th>
                            <th class="text-left">Total Quantity</th>
                            <th class="text-left">Total Amount</th>
                            <th class="text-left">Expected Delivery</th>
                            <th class="text-left">Settled / Total Item</th>
                            <th class="text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(result,i) in purchase_lists" :key="`result${i}`">
                            <td>{{ i+1 }}</td>
                            <td>{{ result.po_id }}</td>
                            <td>{{ result.description }}</td>
                            <td>{{ total_qty(result) }}</td>
                            <td>{{ total_amount(result) }}</td>
                            <td>{{ result.delivery_date }}</td>
                            <td>{{  }}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </div>
        </div>
        <div class="text-center">
            <v-pagination
                v-model="current"
                :length="totalPages"
                circle
            ></v-pagination>
        </div>
        <create></create>
    </div>
</template>

<script>
import Create from "./Create";
export default {
    data(){
        return{
            current: 1,
            results: [],
            items: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Purchase Orders',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        }
    },
    components: {
        Create
    },
    mounted(){
        this.loadData();
        this.$root.$on('loadData',()=>{
            this.loadData();
        });
    },
    methods: {
        create(){
            this.$root.$emit('createPurchaseDialog');
        },
        loadData(){
            axios.get('./show').then((response)=>{
                this.results = response.data
            })
        },
        total_amount(result){
            let total = 0;
            result.items.forEach((val)=>{
                total += val.unit_cost * val.quantity;
            });
            return total;
        },
        total_qty(result){
            let total = 0;
            result.items.forEach((val)=>{
                total += val.quantity;
            });
            return total;
        }
    },
    computed: {
        purchase_lists(){
			return this.results.slice((this.current * 10) - 10, this.current * 10);
		},
		totalPages() {
			return Math.ceil( this.results.length / 10);
		}
    }
}
</script>