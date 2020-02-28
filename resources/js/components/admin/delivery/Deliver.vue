<template>
    <v-dialog v-model="dialog" persistent max-width="900">
      <v-card>
        <v-card-title class="headline">New Delivery</v-card-title>
        <v-card-text class="elevation-0" >
            <v-stepper v-model="e6" vertical style="box-shadow: none; background-color: #1e1e1e">
                <v-stepper-step :complete="e6 > 1" step="1" > Select Purchase Order
                    <small>First Step</small>
                </v-stepper-step>
                <v-stepper-content step="1">
                    <v-select
                        v-model="form.po_id"
                        outlined
                        :items="purchase"
                        item-text="label"
                        item-value="value"
                        label="PO ID"
                        placeholder="PO ID"
                        class="mt-1"
                        @input="onValueChange"
                    ></v-select>
                    <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                    <v-btn color="warning" @click="e6 = 1">Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-step :complete="e6 > 2" step="2">Delivery Details</v-stepper-step>
                <v-stepper-content step="2">
                    <v-row>
                        <v-col>
                            <v-text-field
                                label="DR NO"
                                placeholder="DR NO"
                                outlined
                                v-model="form.dr_no"
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
                                        v-model="form.delivery_date"
                                        label="Expected Date Delivery"
                                        placeholder="Expected Date Delivery"
                                        outlined
                                        readonly
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="form.delivery_date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                    <v-btn color="primary" @click="e6                        = 3">Continue</v-btn>
                    <v-btn  color="warning" @click="e6                       = 2">Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-step :complete="e6 > 3" step="3">Select an item(s)</v-stepper-step>
                <v-stepper-content step="3">
                    <v-row>
                        <v-simple-table fixed-header >
                            <thead>
                                <th>#</th>
                                <th>Item</th>
                                <th>Description</th>
                                <th>Remaining Qty</th>
                                <th>Ordered Qty</th>
                                <th>Unit Cost</th>
                                <th>Unit Price</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item,i) in form.items" :key="`item${i}`">
                                    <td>{{ i+1 }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.description }}</td>
                                    <!-- <td>{{ item.remaining_qty }}</td> -->
                                    <td>{{ remaining(item, i) }}</td>
                                    <td>
                                        <v-text-field label="Ordered Quantity" placeholder="Ordered Quantity" class="mt-3" dense outlined v-model="item.ordered_qty" > </v-text-field>
                                    </td>
                                    <td>{{ item.unit_cost }}</td>
                                    <td>{{ item.unit_price }}</td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                    </v-row>
                    <v-btn color="primary" @click="e6                        = 4">Continue</v-btn>
                    <v-btn color="warning" @click="e6                        = 3">Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">Last Step</v-stepper-step>
                <v-stepper-content step="4">
                    <v-row>
                        <v-col>
                            <v-text-field label="Received by" placeholder="Received by" class="mt-3" dense outlined v-model="form.received_by" > </v-text-field>
                        </v-col>
                        <v-col>
                            <v-text-field label="Delivered by" placeholder="Delivered by" class="mt-3" dense outlined v-model="form.delivered_by" > </v-text-field>
                        </v-col>
                    </v-row>
                    <v-btn color="primary" @click="save()">Deliver</v-btn>

                </v-stepper-content>
            </v-stepper>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            menu: false,
            dialog: false,
            date: new Date().toISOString().substr(0, 10),
            e6: 1,
            purchase: [],

            form:{
                po_id: '',
                dr_no: '',
                delivery_date: '',
                received_by: '',
                delivered_by: '',
                items: [],
            }
        }
    },
    mounted(){
        this.$root.$on('createDeliverDialog',()=>{
            this.dialog = true
            this.load_purchase()
        })
    },

    methods: {
        load_purchase(){
            axios.get('../purchase/select-purchase').then((response)=>{
                this.purchase = response.data
            })
        },
        onValueChange(){
            axios.get(`./delivery-items/${this.form.po_id}`).then((response)=>{
                this.form.items    = response.data
            })
        },
        save(){
            axios.post('./store', this.form).then((response)=>{
                this.dialog = false
                this.$root.$emit('loadData');
            })
        },
        remaining(item, i){
            let remaining  = item.remaining_qty - item.ordered_qty;
            return Intl.NumberFormat({ style: 'decimal' }).format(remaining);

        }
    }
}
</script>

<style scoped>
    .v-stepper{
        box-shadow: none;
    }
</style>
