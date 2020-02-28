<template>
    <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">

      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>History</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Close</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-simple-table fixed-header >
            <thead>
                <tr>
                    <th class="text-left">#</th>
                    <th class="text-left">Item</th>
                    <th class="text-left">Quantity</th>
                    <th class="text-left">Stocks</th>
                    <th class="text-left">Nature Stocks</th>
                    <th class="text-left">Date Updated</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(result,i) in results" :key="`result${i}`">
                    <td>{{ i+1 }}</td>
                    <td>{{ result.item }}</td>
                    <td>{{ result.quantity }}</td>
                    <td>{{ result.stocks}}</td>
                    <td>{{ result.status}}</td>
                    <td>{{ result.updated_at}}</td>
                </tr>
            </tbody>
        </v-simple-table>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    data(){
        return{
            results: [],
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            form: {
                id: ''
            }
        }
    },
    mounted(){
        this.$root.$on('viewHistoryDialog',(val)=>{
            this.dialog = true
            this.form.id = val.id
            this.history();
        })
    },
    methods: {
        history(){
            axios.get(`../stocks_history/history/${this.form.id}`).then((response)=>{
                this.results = response.data
            })
        }
    }
}
</script>