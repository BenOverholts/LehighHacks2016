import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
	selector: 'welcome',
	templateUrl: 'app/templates/welcome.component.html',
	styleUrls: [ 'app/styles/welcome.component.css']
})
export class WelcomeComponent {

	constructor(
		private _router: Router) {
	}

	gotoLogin() {
		window.location.href = 'http://localhost:8888/api/login'
	}	

	gotoParty(){
		this._router.navigate(['Party']);
	}
}                                            