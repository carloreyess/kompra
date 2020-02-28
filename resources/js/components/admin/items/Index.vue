<template>
    <div>
        <div class="row">
            <v-breadcrumbs :items="items"></v-breadcrumbs>
            <div class="col-12">
                <v-btn class="ma-2 float-right" tile color="indigo" @click="create" dark v-if="$permission('Items', 'add')">New Item</v-btn>
            </div>
            <div class="col-12">
                <v-simple-table fixed-header >
                    <thead>
                        <tr>
                            <th class="text-left">#</th>
                            <th class="text-left">Image</th>
                            <th class="text-left">Name</th>
                            <th class="text-left">Code</th>
                            <th class="text-left">Description</th>
                            <th class="text-left">Supplier</th>
                            <th class="text-left">Date created</th>
                            <th class="text-left">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(result,i) in item_lists" :key="`result${i}`">
                            <td>{{ i+1 }}</td>
                            <td><v-img :src="result.image" aspect-ratio="1.3" class="grey lighten-2" width="80px"></v-img></td>
                            <td>{{ result.name }}</td>
                            <td>{{ result.code }}</td>
                            <td>{{ result.description }}</td>
                            <td>{{ result.supplier }}</td>
                            <td>{{ result.created_at }}</td>
                            <td><v-icon @click="view(result)" style="cursor: pointer">mdi-eye</v-icon></td>
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
        <edit></edit>
        <view-items></view-items>
    </div>
</template>
<script>
    import Create from './Create';
    import Edit from './Edit';
    import ViewItems from './View';
    export default {
        data(){
            return{
                current: 1,
                items: [
                    {
                        text: 'Home',
                        disabled: false,
                        href: 'breadcrumbs_dashboard',
                    },
                    {
                        text: 'Items Management',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    },
                ],
                results:[]
            }
        },
        mounted(){
            this.loadData();
            this.$root.$on('loadData',()=>{
                this.loadData();
            })
        },
        methods: {
            create(){
                this.$root.$emit('createItemDialog');
            },
            loadData(){
                axios.get('./show').then((response)=>{
                    this.results = response.data
                })
            },
            edit(val){
                this.$root.$emit('editItemDialog', val);
            },
            view(val){
                this.$root.$emit('viewItemsDialog', val);
            }
        },
        components: {
            Create,
            Edit,
            ViewItems
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