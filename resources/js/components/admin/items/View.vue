<template>
    <v-row justify="center">
        <v-dialog v-model="dialog"  class="mx-auto"
                max-width="700">
            <v-card>
                <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="image"
                    >
                    <v-card-title >{{ name }}</v-card-title>
                </v-img>
                <v-card-subtitle class="pb-0 mt-6">Description: {{ description }}</v-card-subtitle>
                <v-card-text class="text--primary">
                    <v-simple-table fixed-header v-if="category==4">
                        <thead>
                            <tr>
                                <th class="text-left">#</th>
                                <th class="text-left">Size</th>
                                <th class="text-left">Color</th>
                                <th class="text-left">Description</th>
                                <th class="text-left">Unit Cost</th>
                                <th class="text-left">Unit Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(result,i) in results" :key="`result${i}`">
                                <td>{{ i+1 }}</td>
                                <td>{{ result.size }}</td>
                                <td>{{ result.color }}</td>
                                <td>{{ result.description }}</td>
                                <td>{{ result.unit_cost }}</td>
                                <td>{{ result.unit_price }}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                    <v-simple-table fixed-header v-else>
                        <thead>
                            <tr>
                                <th class="text-left">#</th>
                                <th class="text-left">Description</th>
                                <th class="text-left">Unit Cost</th>
                                <th class="text-left">Unit Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(result,i) in results" :key="`result${i}`">
                                <td>{{ i+1 }}</td>
                                <td>{{ result.description }}</td>
                                <td>{{ result.unit_cost }}</td>
                                <td>{{ result.unit_price }}</td>
                            </tr>
                        </tbody>
                    </v-simple-table>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    color="orange"
                    text
                    @click="dialog = false"
                >
                    Close
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

            image: '',
            name: '',
            color: '',
            created_at: '',
            code: '',
            category: '',
            description: '',
            results: []
        }
    },
    mounted(){
        this.$root.$on('viewItemsDialog',(val)=>{
            this.dialog = true
            this.image = val.image
            this.name = val.name
            this.color = val.color
            this.created_at = val.created_at
            this.code = val.code
            this.category = val.category_id
            this.description = val.description

            this.loadData();
        })
    },
    methods: {
        loadData(){
            axios.get(`./show-details/${this.code}`).then((response)=>{
                this.results = response.data
            })
        }
    }
}
</script>