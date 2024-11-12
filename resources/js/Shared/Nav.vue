<template>
    <nav class="ml-6 align-center">
        <ul class="d-flex" >
            <li class="ml-4"  :class="['text-h5']"><Link href="/users" :class="{'font-bold underline': $page.url == '/users'}" >Users</Link></li>
            <li class="ml-4" :class="['text-h5']"><Link href="/" :class="{'font-bold underline': $page.url == '/'}" >Home</Link></li>
            <li class="ml-4" :class="['text-h5']"><Link href="/settings" :class="{'font-bold underline': $page.url == '/settings'}" >Settings</Link></li>
        </ul>
    </nav> 
</template>
<script>
import { Link } from '@inertiajs/vue3';
import { VSheet } from 'vuetify/components';



export default {
    components: {Link,VSheet},
    
}
</script>
