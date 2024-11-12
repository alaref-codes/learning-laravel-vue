<template>
    <v-sheet class="d-flex mb-6 pa-8 bg-secondary">
        <div class="flex align-center">
            <h1 class="text-h4 font-weight-bold">My App</h1>
            <p class="text-h6 ml-4" >Hello, {{ $page.props.auth.user.name }}</p>
        </div>
        <v-spacer></v-spacer>
        <Nav/>
    </v-sheet>

    <div class="pa-6 w-66 mx-auto" >
        <slot/>
    </div>
</template>
<script>
import Nav from './Nav.vue';


export default {
    components: { Nav }    
}
</script>
