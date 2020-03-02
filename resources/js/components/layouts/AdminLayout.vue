<template>
    <v-app>
        <v-navigation-drawer app
            class="deep-purple accent-4"
            dark
            permanent
            flat
        >
            <template v-slot:prepend>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="https://kaklze-s3.s3-ap-southeast-1.amazonaws.com/users/2mspQwbSc0OR7is54nokhrb58YvI6DrbLGADOL9h.png">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ info.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ info.email }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-divider></v-divider>
            <v-list>
                <v-list-item
                    v-for="(route,i) in routes"
                    :key="`route${i}`"
                    link
                    :href="route.url"
                    :class="route.is_active ? `v-item--active v-list-item--active` : ''"
                >
                    <v-list-item-icon>
                        <v-icon>{{ route.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{ route.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item >
                    <v-list-item-icon>
                        <v-switch v-model="switch1" value="red"></v-switch>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Dark Mode</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                <v-btn block  onClick="event.preventDefault(); document.getElementById('logout-form').submit()">Logout</v-btn>
                </div>
                <form id="logout-form" :action="logout" method="POST" style="display: none">
                    <input type="hidden" name="_token" :value="csrf" >
                </form>
            </template>
        </v-navigation-drawer>
        <v-app-bar app
            color="deep-purple accent-4"
            dense
            dark
            flat
        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>KOMPRA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="n in 5"
                        :key="n"
                        @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-switch
                            v-model="switch1"
                            value="true"
                        ></v-switch>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-content>
            <v-col>
                <slot></slot>
            </v-col>
        </v-content>
        <v-footer
            class="black  text-center text-white"
        >
            <v-spacer></v-spacer>
            <div>KOMPRA &copy; {{ new Date().getFullYear() }}</div>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data(){
            return{
                drawer: true,
                routes: window.Laravel.routes.routes,
                info: window.Laravel.routes.username,
                logout: window.Laravel.routes.logout,
                csrf: window.Laravel.csrfToken,
                switch1: ''
            }
        },
        mounted(){
            if(localStorage.switch1) this.switch1 = localStorage.switch1;

        },
        created(){
            this.$vuetify.theme.dark = this.switch1;
        },
        watch: {
            switch1(val){
                localStorage.switch1 = val;
            }
        }
    }
</script>