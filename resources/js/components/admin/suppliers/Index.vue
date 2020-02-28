<template>
    <div>
        <div class="row">
            <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
            <div class="col-12">
                <v-btn class="ma-2 float-right" tile color="indigo" @click="create" dark>New Supplier</v-btn>
            </div>
            <div class="col-12">
                <v-simple-table fixed-header >
                        <thead>
                            <tr>
                                <th class="text-left">#</th>
                                <th class="text-left">Name</th>
                                <th class="text-left">Address</th>
                                <th class="text-left">Telephone</th>
                                <th class="text-left">Email</th>
                                <th class="text-left">Tin</th>
                                <th class="text-left">Mobile</th>
                                <th class="text-left">Contact</th>
                                <th class="text-left">Date Created</th>
                                <th>...</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(result,i) in supplier_lists" :key="`result${i}`">
                                <td>{{ i+1 }}</td>
                                <td>{{ result.name }}</td>
                                <td>{{ result.address }}</td>
                                <td>{{ result.telephone }}</td>
                                <td>{{ result.email }}</td>
                                <td>{{ result.tin }}</td>
                                <td>{{ result.mobile }}</td>
                                <td>{{ result.contact_person }}</td>
                                <td>{{ result.created_at }}</td>
                                <td>
                                    <v-icon @click="edit(result)" style="cursor: pointer">mdi-pencil</v-icon>
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
            current: 1,
            breadcrumbs: [
                {
                    text: 'Home',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Suppliers Management',
                    disabled: true,
                    href: 'breadcrumbs_link_2',
                },
            ],
            results: []
        }
    },
    components: {
        Create,
        Edit
    },

    methods: {
        create(){
            this.$root.$emit('createSupplierDialog');
        },
        loadData(){
            axios.get('./show').then((response)=>{
                this.results = response.data

            });
        },
        edit(val){
            this.$root.$emit('editSupplierDialog', val);
        }
    },
    mounted(){
        this.loadData();
        this.$root.$on('loadData',()=>{
            this.loadData();
        });
    },
    computed: {
        supplier_lists(){
			return this.results.slice((this.current * 10) - 10, this.current * 10);
		},
		totalPages() {
			return Math.ceil( this.results.length / 10);
		}
    }
}
</script>