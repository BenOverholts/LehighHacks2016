import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { SpotifyService } from './spotify.service';
import { Song } from './song';
import { SONGS } from './mock-songs';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: [ 'app/styles/dashboard.component.css' ]
})
export class DashboardComponent {
    requests = SONGS;

    constructor(private _spotifyService: SpotifyService) { }

    approveSong(song: Song) {
        this._spotifyService.addToPlaylist(song);
        console.log("song added");
    }

    dismissSong() {
        // remove song from requests array
        console.log("song rejected");
    }
}