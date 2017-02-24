import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HistoryComponent} from './component/history.component';
import {PengajuanComponent} from './component/pengajuan.component';
import {SimulasiComponent} from './component/simulasi.component';
import {RouterModule, Routes} from "@angular/router";
import {DropdownModule} from "ng2-bootstrap";
import {AuthGuard} from "../shared/auth-guard";
import {FormsModule} from "@angular/forms";

const routingGadai: Routes = [
    {path: 'gadai/simulasi', component: SimulasiComponent, canActivate:[AuthGuard]},
    {path: 'gadai/pengajuan', component: PengajuanComponent, canActivate:[AuthGuard]},
    {path: 'gadai/history', component: HistoryComponent, canActivate:[AuthGuard]}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routingGadai),
        DropdownModule,
        FormsModule,
    ],
    exports: [
    ],
    declarations: [HistoryComponent, PengajuanComponent, SimulasiComponent]
})
export class GadaiModule {
}
