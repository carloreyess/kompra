<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="1200">
            <v-card>
                <v-card-title class="headline">New Item</v-card-title>
                    <v-card-text>
                        <div class="row  no-gutters">
                            <v-col>
                                <v-text-field
                                    label="Name"
                                    placeholder="Name"
                                    outlined
                                    v-model="form.name"
                                    class="mr-1"
                                ></v-text-field>
                            </v-col>
                             <v-col>
                                <v-select
                                    v-model="form.supplier"
                                    outlined
                                    :items="suppliers"
                                    item-text="text"
                                    item-value="value"
                                    label="Suppliers"

                                    placeholder="Supplier"
                                ></v-select>
                            </v-col>
                        </div>
                        <div class="row no-gutters">
                            <v-col>
                                <v-select
                                    v-model="form.category"
                                    outlined
                                    :items="categories"
                                    item-text="label"
                                    item-value="value"
                                    label="Categories"
                                    @input="onValueChange"
                                    placeholder="Categories"
                                     class="mr-1"
                                ></v-select>
                            </v-col>
                            <v-col v-if="sub_categories.length">
                                <v-select
                                    v-model="form.sub_category"
                                    outlined
                                    :items="sub_categories"
                                    item-text="label"
                                    item-value="value"
                                    label="Sub Categories"

                                    placeholder="Sub Category"
                                ></v-select>
                            </v-col>
                        </div>
                        <div class="row no-gutters" v-if="form.category!=4">
                            <v-col>
                                <v-text-field
                                    label="Description"
                                    placeholder="Description"
                                    outlined
                                    v-model="form.description"
                                    class="mr-1"
                                ></v-text-field>
                            </v-col>
                            <v-col>
                                <v-text-field
                                    label="Unit Cost"
                                    placeholder="Unit Cost"
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

                                ></v-text-field>
                            </v-col>
                        </div>
                        <div class="row no-gutters" v-if="form.category===4">
                            <v-col>
                                <v-select
                                    v-model="form.selected_sizes"
                                    outlined
                                    :items="sizes"
                                    item-text="label"
                                    item-value="value"
                                    label="Sizes"
                                    placeholder="Sizes"
                                    multiple
                                    class="mr-1"
                                    return-object
                                ></v-select>
                            </v-col>
                            <v-col >
                                <v-select
                                    v-model="form.color"
                                    outlined
                                    :items="colors"
                                    item-text="label"
                                    item-value="value"
                                    label="Colors"
                                    placeholder="Colors"
                                    class="mr-1"
                                ></v-select>
                            </v-col>
                            <v-col >
                                <v-select
                                    v-model="form.gender"
                                    outlined
                                    :items="gender"
                                    item-text="label"
                                    item-value="value"
                                    label="Gender"
                                    placeholder="Gender"
                                ></v-select>
                            </v-col>
                        </div>
                        <div class="row no-gutters" v-if="form.selected_sizes.length">
                          <v-col>
                            <v-simple-table fixed-header  >
                                <thead>
                                  <th>Size</th>
                                  <th>Description</th>
                                  <th>Unit Cost</th>
                                  <th>Unit Price</th>
                                </thead>
                                <tbody>
                                  <tr v-for="(size,i) in form.selected_sizes" :key="`sizes${i}`">
                                    <td>{{ size.value }}</td>
                                    <td>
                                      <v-text-field label="Description" placeholder="Description" class="mt-3" dense outlined v-model="size.description" > </v-text-field>
                                    </td>
                                    <td>
                                      <v-text-field label="Unit Cost" placeholder="Unit Cost" class="mt-3" dense outlined v-model="size.unit_cost" > </v-text-field>
                                    </td>
                                    <td>
                                      <v-text-field label="Unit Price" placeholder="Unit Price" class="mt-3" dense outlined v-model="size.unit_price" > </v-text-field>
                                    </td>
                                  </tr>
                                </tbody>
                              </v-simple-table>
                          </v-col>
                        </div>

                    </v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="green darken-1 text-white"  @click="save()">Add</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

export default {
  // name: 'ComponentName',
  data () {
    return {
      dialog: false,

      categories: [],
      suppliers: [],
      sizes: [],
      sub_categories: [],
      colors: [
        {
          'label': 'red',
          'value': 'red'
        },
        {
          'label': 'blue',
          'value': 'blue'
        },
        {
          'label': 'green',
          'value': 'green'
        },
        {
          'label': 'orange',
          'value': 'orange'
        }
      ],
      gender: [
        {
          'label': 'Male',
          'value': 'Male'
        },
        {
          'label': 'Female',
          'value': 'Female'
        },
        {
          'label': 'Both',
          'value': 'Both'
        }
      ],
      form: {
        name: '',
        category: '',
        supplier: '',
        description: '',
        unit_cost: '',
        unit_price: '',
        color: '',
        gender: '',
        sub_category: '',
        selected_sizes: [],
      }
    }
  },
  created(){
    this.$root.$on('editItemDialog',(val)=>{
      this.dialog=true;
      this.form.name = val.name
      this.form.category = val.category
      this.form.supplier = val.supplier
      this.form.description = val.description
      this.form.unit_cost = val.unit_cost
      this.form.unit_price = val.unit_price
      this.form.color = val.color
      this.form.gender = val.gender
      this.form.sub_category = val.sub_category
      this.form.selected_sizes = val.selected_sizes
    })
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
    load_sizes(){
      axios.get('../sizes/sizes').then((response) => {
        this.sizes = response.data
      });
    },
    onValueChange(){
      axios.get(`../categories/sub-category/${this.form.category}`).then((response) => {
        this.sub_categories = response.data
      });
    },
    save(){
      axios.post('./store', this.form).then((response)=>{
        this.dialog=false
        this.$root.$emit('loadData');
      })
    }
  },
  mounted(){
    this.load_categories();
    this.load_suppliers();
    this.load_sizes();
  }
}
</script>
