import {Injectable} from 'angular2/core';
import {Song} from './song';

@Injectable()
export class SpotifyService {
    // search songs that match query string
    search(query: string) {
        // http call here
    }

    // add song to playlist
    addToPlaylist(uri: string, plid: string) {
        // http call here
    }
}