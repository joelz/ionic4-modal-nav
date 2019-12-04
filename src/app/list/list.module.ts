import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { ModalRootPage } from './modal-root';
import { ModalOne } from './modal-1';
import { ModalTwo } from './modal-2';
import { ModalThree } from './modal-3';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: ListPage
            }
        ])
    ],
    declarations: [ListPage,ModalRootPage,ModalOne,ModalTwo,ModalThree],
    entryComponents:[ModalRootPage,ModalOne,ModalTwo,ModalThree]
})
export class ListPageModule { }
