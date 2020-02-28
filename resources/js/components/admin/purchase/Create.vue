<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="1200">
        <v-card>
            <v-card-title class="headline">New Purchase Orders</v-card-title>
                <v-card-text>
                    <div class="row  no-gutters">
                        <v-col>
                            <v-text-field
                                label="PO Number"
                                placeholder="PO Number"
                                outlined
                                v-model="form.po_id"
                                class="mr-1"
                            ></v-text-field>
                        </v-col>
                        <v-col>
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="date"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                        v-model="form.expected_delivery_date"
                                        label="Expected Date Delivery"
                                        placeholder="Expected Date Delivery"
                                        outlined
                                        readonly
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="form.expected_delivery_date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </div>
                    <div class="row  no-gutters">
                        <v-col>
                            <v-textarea
                                outlined
                                label="Description"
                                placeholder="Description"
                                v-model="form.description"
                                rows="2"
                            ></v-textarea>
                        </v-col>
                    </div>
                    <div class="row  no-gutters">
                        <v-col>
                            <v-select
                                v-model="form.category"
                                outlined
                                :items="categories"
                                item-text="label"
                                item-value="value"
                                label="Categories"
                                placeholder="Categories"
                                class="mr-1"
                            ></v-select>
                        </v-col>
                        <v-col>
                            <v-select
                                v-model="form.supplier"
                                outlined
                                :items="suppliers"
                                item-text="text"
                                item-value="value"
                                label="Suppliers"
                                placeholder="Suppliers"
                                @input="onValueChange"
                            ></v-select>
                        </v-col>
                    </div>
                    <div class="row no-gutters">
                        <v-col>
                            <v-select
                                v-model="form.selected_items"
                                outlined
                                :items="items"
                                item-text="label"
                                item-value="value"
                                label="List of Items"
                                placeholder="List of Items"
                                multiple
                                small-chips
                                return-object
                            ></v-select>
                        </v-col>

                    </div>
                    <div class="row no-gutters" v-if="form.selected_items.length">
                        <v-col>
                           <v-simple-table fixed-header class="mb-5 ">
                               <thead>
                                   <th>#</th>
                                   <th>Item</th>
                                   <th>Description</th>
                                   <th>Qty</th>
                                   <th>Unit Cost</th>
                                   <th>Unit Price</th>
                               </thead>
                               <tbody>
                                   <tr v-for="(item,i) in form.selected_items" :key="`item${i}`">
                                        <td>{{ i+1 }}</td>
                                        <td>{{ item.label }}</td>
                                        <td>
                                            <v-text-field label="Description" placeholder="Description" class="mt-3" dense outlined v-model="item.description" > </v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field label="Quantity" placeholder="Quantity" class="mt-3" dense outlined v-model="item.quantity" > </v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field label="Unit Cost" placeholder="Unit Cost" class="mt-3" dense outlined v-model="item.unit_cost" > </v-text-field>
                                        </td>
                                        <td>
                                            <v-text-field label="Unit Price" placeholder="Unit Price" class="mt-3" dense outlined v-model="item.unit_price" > </v-text-field>
                                        </td>
                                   </tr>
                               </tbody>
                           </v-simple-table>
                        </v-col>
                    </div>
                      <div class="row no-gutters">
                        <v-col>
                            <v-textarea
                                outlined
                                label="Remarks"
                                placeholder="Remarks"
                                v-model="form.remarks"
                                rows="2"
                            ></v-textarea>
                        </v-col>
                    </div>
                </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="green darken-1" text @click="add()">Add</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data(){
        return{
            menu: false,
            dialog: false,
            date: new Date().toISOString().substr(0, 10),
            categories: [],
            suppliers: [],
            items: [],
            form: {
                po_id: '',
                expected_delivery_date: '',
                description: '',
                category: '',
                selected_items: [],
                supplier: '',
                remarks: '',
                quantity: ''
            }
        }
    },
    mounted(){
        this.$root.$on('createPurchaseDialog',()=>{
            this.dialog = true;
            this.load_categories();
            this.load_suppliers();
        });
    },
    methods: {
        load_categories(){
            axios.get('../categories/index').then((response) => {
                this.categories = response.data
            });
        },
        load_suppliers(){
            axios.get('../suppliers/supplier-select').then((response) => {
                this.suppliers = response.data
            });
        },
        onValueChange(){
            axios.get(`../items/supplier-items/${this.form.supplier}`).then((response) => {
                this.items = response.data
            });
        },
        add(){
            axios.post('./store', this.form).then((response)=>{
                this.dialog = false
                this.$root.$emit('loadData');
            })
        }
    }
}
</script>