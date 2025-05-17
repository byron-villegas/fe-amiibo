import type Release from "./release.ts";

export default interface Amiibo {
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    release: Release;
    tail: string;
    type: string;
}