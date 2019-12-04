import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
    selector: 'modal-root',
    templateUrl: 'modal-root.html'
})
export class ModalRootPage implements OnInit, AfterViewInit  {

    isInDesktop = false;
    rootPage: any;
    rootPageParam: any;

    constructor(public navParams: NavParams) {
        if (this.navParams.get('rootPageParam')) {
            this.rootPageParam = this.navParams.get('rootPageParam');
        }
        if (this.navParams.get('rootPage')) {
            this.rootPage = this.navParams.get('rootPage');
        }
    }

    ngOnInit(): void {
    }


    ngAfterViewInit() {
    }

    ionViewDidEnter() {
    }
}
