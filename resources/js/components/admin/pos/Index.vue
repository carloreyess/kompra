<template>
    <div>
        <div class="row">
            <v-breadcrumbs :items="items"></v-breadcrumbs>
        </div>
        <div class="row">
            <v-col cols="8">
                <v-card flat >
                    <v-container>
                        <v-row >
                            <v-col
                                v-for="(result,i) in item_lists"
                                :key="`result${i}`"
                                class="d-flex child-flex"
                                cols="4"
                            >
                                <v-card>
                                    <v-img
                                        :src="result.image"
                                        class="white--text align-end"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                        height="200px"
                                    >
                                        <v-card-title class="body-2">{{ result.item }}</v-card-title>
                                    </v-img>
                                    <v-card-actions>
                                        <v-checkbox
                                            v-for="(item,i) in result.items"
                                            :key="`item${i}`"
                                            v-model="form.selected_items"
                                            :label="item.size"
                                            :value="item"
                                        ></v-checkbox>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                        <div class="text-center">
                            <v-pagination
                                v-model="current"
                                :length="totalPages"
                                circle
                            ></v-pagination>
                        </div>
                    </v-container>
                    <v-card-actions>
                        <v-tabs
                            right
                        >
                            <v-tab
                                v-for="(category,i) in categories"
                                :key="`category${i}`"
                                @click="categoryFilter(category.value)"
                            >{{ category.label }}
                            </v-tab>

                        </v-tabs>
                     </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card
                    flat
                >
                    <v-list-item>
                        <v-list-item-content>
                            <v-subheader>Selected item(s)</v-subheader>
                            <v-simple-table fixed-header >
                                <tbody>
                                    <tr v-for="(item,i) in form.selected_items" :key="`item${i}`">
                                        <td>{{ item.name }} {{ item.size }} {{ item.color }}</td>
                                        <td>{{ item.unit_price }}</td>
                                        <td>
                                            <v-text-field
                                                placeholder="Qty"
                                                size="2px"
                                                dense
                                                v-model="item.quantity"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr v-if="form.selected_items.length">
                                        <td color="green-6">SUBTOTAL</td>
                                        <td colspan="2">{{ subtotal }}</td>
                                    </tr>
                                    <tr v-if="form.selected_items.length">
                                        <td  color="green-6">DISCOUNT</td>
                                        <td colspan="2">
                                            <v-text-field
                                                placeholder="Discount"
                                                dense
                                                size="1px"
                                                v-model="form.discount"
                                                class="mr-1 text-right"
                                                style="text-align: right"
                                            ></v-text-field>
                                        </td>
                                    </tr>
                                    <tr v-if="form.selected_items.length">
                                        <td color="green-6">TOTAL AMOUNT</td>
                                        <td colspan="2">{{ total_amount }}</td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-list-item-content>
                    </v-list-item>
                    <v-col>
                        <v-col>
                            <v-row class="row no-gutters" >
                                <v-col cols="12">
                                    <v-select
                                        v-model="form.student_id"
                                        outlined
                                        :items="students"
                                        item-text="label"
                                        item-value="value"
                                        label="Students"
                                        placeholder="Students"
                                    ></v-select>
                                </v-col>
                            </v-row>
                            <v-row class="row no-gutters" >

                                <v-row>
                                     <v-col>
                                        <v-checkbox
                                            v-model="form.payment_type"
                                            label="Cash"
                                            color="green"
                                            value="Cash"
                                            hide-details
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col>
                                        <v-checkbox
                                            v-model="form.payment_type"
                                            label="Installment"
                                            color="blue"
                                            value="Installment"
                                            hide-details
                                        ></v-checkbox>
                                    </v-col>
                                    <v-col>

                                        <v-checkbox
                                            v-model="form.payment_type"
                                            label="Check"
                                            color="orange"
                                            value="Check"
                                            hide-details
                                        ></v-checkbox>
                                    </v-col>
                                </v-row>
                                <v-col cols="12" >
                                    <v-text-field label="Amount paid" placeholder="Description" dense outlined v-model="form.amount_paid" > </v-text-field>
                                </v-col>
                                <v-col cols="6" >
                                    <v-text-field label="Check No" placeholder="Check No" dense outlined v-model="form.check_no" > </v-text-field>
                                </v-col>
                                <v-col cols="6" >
                                    <v-text-field label="Bank Name" placeholder="Bank Name"  dense outlined v-model="form.bank_name" > </v-text-field>
                                </v-col>
                            </v-row>

                        </v-col>
                    </v-col>
                    <v-card-actions>
                        <v-btn color="orange" text @click="add()"> Add </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            results: [],
            categories: [],
            students: [],
            current: 1,
            items: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Point of Sales',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
            form: {
                discount: 0,
                check_no: '',
                bank_name: '',
                amount_paid: 0,
                payment_type: '',
                student_id: '',
                selected_items: []
            }
        }
    },
    mounted(){
        this.loadItems();
        this.loadCategories();
        this.loadStudents();
    },
    computed: {
        subtotal(){
            let total = 0;
            this.form.selected_items.forEach((val)=>{
                total += val.unit_price * val.quantity
            })
            return total;
        },
        total_amount(){
            let total = 0;
            this.form.selected_items.forEach((val)=>{
                total += val.unit_price * val.quantity
            })
            return total - this.form.discount;
        },
        item_lists(){
			return this.results.slice((this.current * 9) - 9, this.current * 9);
		},
		totalPages() {
			return Math.ceil( this.results.length / 9);
		}
    },
    methods:{
        loadItems(){
            axios.get('../stocks/stock-items').then((response)=>{
                this.results = response.data
            })
        },
        loadStudents(){
            axios.get('../students/select-students').then((response)=>{
                this.students = response.data
            })
        },
        loadCategories(){
            axios.get('../categories/index').then((response)=>{
                this.categories = response.data
            })
        },
        categoryFilter(val){
            const items = this.results.filter((items)=>{
                return items.category === val;
            });
        },
        add(){
            axios.post('./store', this.form).then((response)=>{

            })
        }
    }
}
</script>