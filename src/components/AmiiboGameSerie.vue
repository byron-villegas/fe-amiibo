<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type GameSerie from '@/types/game-serie';
import AmiiboService from '@/services/amiibo-service';
import { ref, onMounted } from 'vue';

const gameSeries = ref<String[]>([]);

onMounted(() => {
    AmiiboService.getGameSeries().then((response: GameSerie[]) => {
        gameSeries.value = response.sort((x, y) => x.name.localeCompare(y.name)).map((game) => game.name);
        gameSeries.value = [...new Set(gameSeries.value)]; // Remove duplicates
    }).catch((error: any) => {
        console.error('Error fetching game series:', error);
    });
});
</script>

<template>
    <div class="container-fluid py-3 container-game-series">
        <div class="row row-cols-1 row-cols-md-5">
            <div v-for="(gameSerie, index) in gameSeries" :key="index" class="col col-game-serie">
                <div class="card card-game-serie text-white">
                    <div class="card-img-game-serie">
                        <RouterLink :to="`/series/${gameSerie}`" class="link-light">
                            <div class="game-serie">
                                <!-- <img src="{{ disc | imageRoute:disc!.images[0] }}" class="w-100" alt="{{disc.sku + '-imagen-1'}}"> -->
                            </div>
                        </RouterLink>
                    </div>
                    <div class="card-body">
                        <RouterLink :to="`/series/${gameSerie}`"  class="link-light">
                            <small>
                                <strong>{{ gameSerie }}</strong>
                            </small>
                        </RouterLink>
                        <br />
                        <small class="d-flex justify-content-star">{{ gameSerie }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-game-series {
    background-color: #121212;
    width: 99%
}

.card-game-serie {
    background-color: #181818;
}

.card-game-serie:hover {
    cursor: pointer;
    background-color: #252525;
}

.card-img-game-serie {
    width: 80%;
    margin: auto;
    margin-top: 25px;
    margin-bottom: 0px !important;
}

.col-game-serie {
    margin-bottom: 10px;
}

/* BEGIN GAME SERIE HOVE EFFECT */
.card-img-game-serie a .game-serie {
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

.card-game-serie:hover .card-img-game-serie a .game-serie .hover-img {
    opacity: 1
}
/* END GAME SERIE HOVE EFFECT */
</style>