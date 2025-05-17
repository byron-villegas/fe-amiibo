<script setup lang="ts">
import type Amiibo from '@/types/amiibo';

// props amiibos
const props = defineProps({
    amiibos: {
        type: Array as () => Amiibo[],
        required: true
    }
});
</script>

<template>
    <div class="container-fluid py-3 container-amiibo">
        <div class="row row-cols-1 row-cols-md-5">
            <div v-for="(amiibo, index) in props.amiibos" :key="index" class="col col-amiibo">
                <div class="card card-amiibo text-white">
                    <div class="card-img-amiibo">
                        <div class="amiibo">
                            <img :src="`${amiibo.image}`" class="w-100">
                        </div>

                    </div>
                    <div class="card-body">
                        <small>
                            <strong>{{ amiibo.name }}</strong>
                        </small>
                        <br />
                        <small class="d-flex justify-content-end">{{ amiibo.release.eu }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-amiibo {
    background-color: #121212;
    width: 99%
}

.card-amiibo {
    background-color: #181818;
}

.card-amiibo:hover {
    cursor: pointer;
    background-color: #252525;
}

.card-img-amiibo {
    width: 80%;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 0px !important;
}

.col-amiibo {
    margin-bottom: 10px;
}

/* BEGIN GAME SERIE HOVE EFFECT */
.card-img-amiibo a .amiibo {
    position: relative !important;
    overflow: hidden !important;
    backface-visibility: hidden !important;
    -webkit-backface-visibility: hidden !important;
    opacity: 1;
    visibility: visible;
    transition: all .25s ease-in-out
}

.hover-img {
    position: absolute;
    top: 0;
    opacity: 0;
    width: 100%;
    transition: all .4s ease-in-out
}

.card-amiibo:hover .card-img-amiibo a .amiibo .hover-img {
    opacity: 1
}

/* END GAME SERIE HOVE EFFECT */
</style>