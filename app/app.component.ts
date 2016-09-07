import {Component, Input, Output, EventEmitter} from 'angular2/core';
@Component({
    selector: 'my-app',
   
    template: ` <video playsinline autoplay muted loop poster="{{_posterUrl}}" id="bgvid">
                <source src="{{_webmUrl}}" type="video/webm">
                <source src="{{_mp4Url}}" type="video/mp4">
                </video>

                <button class="btn btn-primary" id="vidpause">Pause</button>
                `
})
export class AppComponent {
   
    

    randnum = Math.random();
    inum = 10;

    rand1 = Math.round(this.randnum * (this.inum-1)) + 1;
    images = [
    'volkanoBackground',
    'diskBackground',
    'Agile',
    'Coverr-market-mcu',
    'Dog-Lovers',
    'Down',
    'For_Wes',
    'Scooooters',
    'Street-View',
    'ghostBackground']


    image = this.images[this.rand1]

    private _posterUrl = "/app/assets/backgrounds/" +this.images[this.rand1]+ ".jpg";
    private _webmUrl = "/app/assets/backgrounds/" +this.images[this.rand1]+ ".webm";
    private _mp4Url = "/app/assets/backgrounds/" +this.images[this.rand1]+ ".webm"; 
    constructor(){
    console.log(this.image);
    //<source src="/app/assets/backgrounds/" + {{image}} +".webm" type="video/webm">
    }

}