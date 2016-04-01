import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { SpotifyService } from './spotify.service';
import { Song } from './song';
import { SONGS } from './mock-songs';

@Component({
    selector: 'party',
    templateUrl: 'app/templates/party.component.html',
    styleUrls: [ 'app/styles/party.component.css' ]
})
export class PartyComponent {
    results = SONGS;
    query: string;

    constructor(private _spotifyService: SpotifyService) { }

    search(query: string){

    }

    addSuggestion(song: Song){

    }

    
}