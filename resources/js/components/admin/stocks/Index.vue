<template>
    <div>
        <div class="row">
            <v-breadcrumbs :items="items"></v-breadcrumbs>
            <div class="col-12">
                <v-btn class="ma-2 float-right" tile color="indigo" dark @click="add_stocks()"><v-icon>mdi-plus</v-icon>Old Stocks</v-btn>
            </div>
            <div class="col-12">
                <v-simple-table fixed-header >
                    <thead>
                        <tr>
                            <th class="text-left">#</th>
                            <th class="text-left">Image</th>
                            <th class="text-left">Item</th>
                            <th class="text-left">Stocks</th>
                            <th class="text-left">Nature Stocks</th>
                            <th class="text-left">Date Updated</th>
                            <th class="text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(result,i) in item_lists" :key="`result${i}`">
                            <td>{{ i+1 }}</td>
                            <td><v-img :src="result.image" aspect-ratio="1.3" class="grey lighten-2" width="80px"></v-img></td>
                            <td>{{ result.item }}</td>
                            <td>{{ result.stocks }}</td>
                            <td>{{ result.nature_stocks }}</td>
                            <td>{{ result.updated_at }}</td>
                            <td>
                                <v-icon @click="view_history(result)">mdi-history</v-icon>
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
        <history></history>
        <add></add>
    </div>
</template>
<script>
import History from "./History";
import Add from "./Add";
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
                    text: 'Stocks Management',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
        }
    },
    components: {
        History,
        Add
    },
    mounted(){
        this.loadData();
        this.$root.$on('loadData',()=>{
            this.loadData();
        })
    },
    methods: {
        loadData(){
            axios.get('./show').then((response)=>{
                this.results = response.data
            })
        },
        view_history(val){
            this.$root.$emit('viewHistoryDialog', val);
        },
        add_stocks(){
            this.$root.$emit('addStockDialog');
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