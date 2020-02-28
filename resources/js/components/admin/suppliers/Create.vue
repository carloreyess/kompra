<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="800">
            <v-card>
                <v-card-title class="headline">New Supplier</v-card-title>
                    <v-card-text>
                        <v-col>
                            <div class="row">
                                <v-text-field
                                    label="Name"
                                    placeholder="Name"
                                    outlined
                                    v-model="form.name"
                                ></v-text-field>
                            </div>
                            <div class="row">
                                <v-text-field
                                    label="Address"
                                    placeholder="Address"
                                    outlined
                                    v-model="form.address"
                                ></v-text-field>
                            </div>
                            <div class="row">
                                <v-text-field
                                    label="Telephone"
                                    placeholder="Telephone"
                                    outlined
                                    class="mr-1"
                                    v-model="form.telephone"
                                ></v-text-field>
                                <v-text-field
                                    label="Mobile"
                                    placeholder="Mobile"
                                    outlined
                                    v-model="form.mobile"
                                ></v-text-field>
                            </div>
                            <div class="row">
                                <v-text-field
                                    label="Email Address"
                                    placeholder="Email Address"
                                    outlined
                                     class="mr-1"
                                    v-model="form.email"
                                ></v-text-field>
                                <v-text-field
                                    label="Tin Number"
                                    placeholder="Tin Number"
                                    outlined
                                    v-model="form.tin"
                                ></v-text-field>
                            </div>
                            <div class="row">
                                <v-text-field
                                    label="Contact Person"
                                    placeholder="Contact Person"
                                    outlined
                                    v-model="form.contact_person"
                                ></v-text-field>
                            </div>
                        </v-col>
                    </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="green darken-1" text @click="add">Add</v-btn>
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
            form: {
                name: '',
                address: '',
                telephone: '',
                mobile: '',
                email: '',
                tin: '',
                contact_person: ''
            }
        }
    },
    mounted(){
        this.$root.$on('createSupplierDialog',()=>{
            this.dialog = true;
        })
    },
    methods: {
        add(){
            axios.post('./store', this.form).then((response)=>{
                this.dialog = false
                this.$root.$emit('loadData');
            })
        }
    }
}
</script>