import { Component, ChangeDetectionStrategy } from 'angular2/core';
import { Router } from 'angular2/router';
import { Observable } from 'rxjs/Observable';
import { SpotifyService } from './spotify.service';
import { Song } from './song';
import { SONGS } from './mock-songs';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: [ 'app/styles/dashboard.component.css' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
    requests: Song[];//Observable<Song[]>;

    constructor(private _spotifyService: SpotifyService) { 
        //this.requests = this._spotifyService.getRequests();
    }

    refreshRequests() {
        this._spotifyService.getRequests().subscribe(reqs => this.requests = reqs);
        console.log(this.requests);
    }

    approveSong(song: Song) {
        this._spotifyService.approve(song);
        console.log("song added");
    }

    dismissSong(song: Song) {
        // remove song from requests array
        this._spotifyService.dismiss(song);
        console.log("song rejected");
    }
}