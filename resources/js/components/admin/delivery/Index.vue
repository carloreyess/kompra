<template>
    <div>
        <div class="row">
            <v-breadcrumbs :items="items"></v-breadcrumbs>
            <div class="col-12">
                <v-btn class="ma-2 float-right" tile color="indigo" @click="deliver()" dark>New Delivery</v-btn>
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
                        <tr v-for="(result,i) in item_lists" :key="`result${i}`">
                            <td>{{ i+1 }}</td>
                            <td>{{ result.po_id }}</td>
                            <td>{{ result.description }}</td>
                            <td>{{ total_qty(result) }}</td>
                            <td>{{ total_amount(result) }}</td>
                            <td>{{ result.delivery_date }}</td>
                            <td>{{  }}</td>
                            <td>
                                ...
                            </td>
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
        <deliver></deliver>
    </div>
</template>

<script>
import Deliver from "./Deliver";
export default {
    data(){
        return{
            results: [],
            current: 1,
            items: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Delivery Management',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        }
    },
    components: {
        Deliver
    },
    mounted(){
        this.loadData();
        this.$root.$on('loadData',()=>{
            this.loadData();
        });
    },
    methods: {
        deliver(){
            this.$root.$emit('createDeliverDialog');
        },
        loadData(){
            axios.get('../delivery/show').then((response)=>{
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
        item_lists(){
			return this.results.slice((this.current * 10) - 10, this.current * 10);
		},
		totalPages() {
			return Math.ceil( this.results.length / 10);
		}
    }
}
</script>