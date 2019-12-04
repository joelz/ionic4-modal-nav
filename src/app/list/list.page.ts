import { Component, OnInit } from '@angular/core';
import {
    NavController, LoadingController, AlertController, ToastController, ModalController,
    ActionSheetController, Events
} from '@ionic/angular';
import { ModalRootPage } from './modal-root';
import { ModalOne } from './modal-1';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private selectedItem: any;
    private icons = [
        'flask',
        'wifi',
        'beer',
        'football',
        'basketball',
        'paper-plane',
        'american-football',
        'boat',
        'bluetooth',
        'build'
    ];
    public items: Array<{ title: string; note: string; icon: string }> = [];
    constructor(
        protected modalCtrl: ModalController
    ) {
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }

    ngOnInit() {
    }
    // add back when alpha.4 is out
    // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }

    async showModal() {
        const articleModal = await this.modalCtrl.create({
            component: ModalRootPage,
            componentProps: {
                rootPage: ModalOne,
                rootPageParam: { id: 1, sectionId: 1 }
            }
        });
        await articleModal.present();
    }
}
