<script setup lang="ts">
import AmiiboList from '@/components/AmiiboList.vue';
import type Amiibo from '@/types/amiibo';
import AmiiboService from '@/services/amiibo-service';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const amiibos = ref<Amiibo[]>([]);
const route = useRoute();

const fetchAmiibos = () => {
    const gameSerie = route.params.gameSerie as string;

    AmiiboService.getAmiiboByGameSeries(gameSerie).then((response: Amiibo[]) => {
        amiibos.value = response.sort((x, y) => x.name.localeCompare(y.name));
    }).catch((error) => {
        console.error('Error fetching amiibos:', error);
    });
};

onMounted(fetchAmiibos);
watch(() => route.params.gameSerie, fetchAmiibos);
</script>

<template>
    <AmiiboList :amiibos="amiibos" />
</template>

<style scoped></style>