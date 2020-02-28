<template>
    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            max-width="590"
        >
        <v-card>
            <v-card-title class="headline">Old Stocks</v-card-title>
            <v-card-text>
                <v-row class="row no-gutters">
                    <v-col >
                        <v-select
                            v-model="form.item_id"
                            outlined
                            :items="items"
                            item-text="label"
                            item-value="value"
                            label="Items"
                            placeholder="Items"
                            class="mr-1"
                            @input="item_details"
                        ></v-select>
                    </v-col>
                </v-row>

                <v-row class="row no-gutters">
                    <v-col>
                        <v-text-field
                            label="Unit Cost"
                            placeholder="Unit Price"
                            outlined
                            v-model="form.unit_cost"
                            class="mr-1"
                        ></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field
                            label="Unit Price"
                            placeholder="Unit Price"
                            outlined
                            v-model="form.unit_price"
                            class="mr-1"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="row no-gutters">
                    <v-col>
                        <v-text-field
                            label="Quantity"
                            placeholder="Quantity"
                            outlined
                            v-model="form.quantity"
                            class="mr-1"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-if="form.existing">
                        <v-alert
                        text
                        prominent
                        type="error"
                        icon="mdi-cloud-alert">
                            Existing data in stocks. You want to merge it?
                        </v-alert>
                    </v-col>
                </v-row>

            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
                Cancel
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="add"
            >
                Add
            </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
    data(){
        return{
            dialog: false,
            items: [],
            details: [],

            form: {
                item_id: '',
                unit_cost: '',
                unit_price: '',
                quantity: '',
                existing: '',
            }
        }
    },
    mounted(){
        this.$root.$on('addStockDialog',(val)=>{
            this.dialog=true;
            this.load_items();
        })
    },
    methods: {
        load_items(){
            axios.get('../items/select-items').then((response)=>{
                this.items = response.data
            })
        },
        item_details(){
           axios.get(`../items/item-details/${this.form.item_id}`).then((response)=>{
                this.form.unit_price = response.data.unit_price
                this.form.unit_cost = response.data.unit_cost
                this.form.existing = response.data.existing
           });
        },
        add(){
            axios.post('./store', this.form).then(()=>{
                this.dialog = false
                this.$root.$emit('loadData');
            })
        }
    }
}
</script>