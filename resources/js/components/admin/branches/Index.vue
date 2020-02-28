<template>
    <div>
        <div>
            <v-breadcrumbs :items="items"></v-breadcrumbs>
        </div>

        <div class="row">
            <div class="col-12">
                <v-btn class="ma-2 float-right" tile color="indigo" @click="create" dark>New Item</v-btn>
            </div>
            <div class="col-12">
                <v-simple-table fixed-header >
                    <thead>
                        <tr>
                            <th class="text-left">#</th>
                            <th class="text-left">Namea</th>
                            <th class="text-left">Description</th>
                            <th class="text-left">Supplier</th>
                            <th class="text-left">Date created</th>
                            <th class="text-left">...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(result,i) in results" :key="`result${i}`">
                            <td>{{ i+1 }}</td>
                            <td>{{ result.name }}</td>
                            <td>{{ result.description }}</td>
                            <td>{{ result.supplier }}</td>
                            <td>{{ result.created_at }}</td>
                            <td><v-icon @click="edit(result)" style="cursor: pointer">mdi-pencil</v-icon></td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </div>
        </div>
        <create></create>
        <edit></edit>
    </div>
</template>
<script>
    import Create from './Create';
    import Edit from './Edit';
    export default {
        data(){
            return{
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
            }
        },
        components: {
            Create,
            Edit
        }
    }
</script>