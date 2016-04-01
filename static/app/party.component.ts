import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Router } from 'angular2/router';
import { SpotifyService } from './spotify.service';
import { Song } from './song';
import { SONGS } from './mock-songs';

@Component({
    selector: 'party',
    templateUrl: 'app/templates/party.component.html',
    styleUrls: [ 'app/styles/party.component.css' ],
    providers: [ HTTP_PROVIDERS ]
})
export class PartyComponent {
    results: Song[] = [];
    query: string;

    constructor(private _spotifyService: SpotifyService) { }

    search() {
        this.results = [];
        console.log("Searching for tracks matching: " + this.query);
        this._spotifyService.search(this.query).subscribe(
            res => this.resToSongs(res));
    }

    addSuggestion(song: Song){
        // TODO
    }

    resToSongs(response) {
        //console.log(response['tracks']['items']);
        var tracks = response['tracks']['items'];
        for (var i in tracks) {
            var result: Song = {
                "uri": tracks[i]['uri'],
                "name": tracks[i]['name'],
                "artist": tracks[i]['artists'][0]['name']
            };
            console.log(result);
            this.results.push(result);
        }
        //console.log(this.results);
    }
}