<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark mb-3">
        <div class="container-fluid">
            <RouterLink to="/" class="navbar-brand" href="/">
                <img src="/images/favicon.webp" alt="brand" width="30" height="30">
            </RouterLink>
            <button id="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><RouterLink to="/" :class="'nav-link ' + (route.path === '/' ? 'active' : '')"><strong>HOME</strong></RouterLink></li>
                    <li class="nav-item"><RouterLink to="/about-us" :class="'nav-link ' + (route.path === '/about-us' ? 'active' : '')"><strong>SOBRE NOSOTROS</strong></RouterLink></li>
                </ul>
                <div class="d-flex"><i aria-hidden="true" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" title="Buscar Amiibos" class="fa fa-search"></i></div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
navbar {
    background-color: #121212 !important;
}
</style>