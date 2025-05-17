<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router';

let currentYear = new Date().getFullYear();
const route = useRoute();
</script>

<template>
<footer class="container py-5 mt-5">
    <div class="row">
        <div class="col-12 col-md">
            <img src="/images/favicon.webp" alt="Footer Logo" width="24" height="24" class="mb-2">
            <small class="d-block mb-3 text-white">© 2025 – {{currentYear + 1}}</small>
        </div>
        <div class="col-6 col-md text-white">
            <h5>MENÚ</h5>
            <ul class="list-unstyled text-small">
                <li>
                    <RouterLink to="/" :class="'link-secondary link-white text-decoration-none ' + (route.path === '/' ? 'active': '')">HOME</RouterLink>
                </li>
            </ul>
        </div>
        <div class="col-6 col-md text-white">
            <h5>ENLACES ÚTILES</h5>
            <ul class="list-unstyled text-small">
                <li>
                    <RouterLink to="/" :class="'link-secondary link-white text-decoration-none ' + (route.path === '/' ? 'active': '')">HOME</RouterLink>
                </li>
            </ul>
        </div>
        <div class="col-6 col-md text-white">
            <h5>SOBRE</h5>
            <ul class="list-unstyled text-small">
                <li>
                    <RouterLink to="/about-us" :class="'link-secondary link-white text-decoration-none ' + (route.path === '/about-us' ? 'active': '')">QUIENES SOMOS</RouterLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="container-fluid text-center vertical-line">
        <p class="fw-light text-white mt-2">Copyright © 2025. Todos los derechos reservados. Desarrollado por <a href="https://cl.linkedin.com/in/byron-villegas-moya" target="_blank" class="link-light link-underline-opacity-0 link-opacity-75-hover">Byron Villegas Moya</a></p>
    </div>
</footer>
</template>

<style scoped>
.active {
    color: white !important;
}
</style>