import {Component, OnInit, Output} from '@angular/core';
import {Pengajuan} from "../pengajuan.model";

@Component({
    selector: 'simulasi-gadai',
    templateUrl: './simulasi.component.html'
})
export class SimulasiComponent implements OnInit {

    pengajuan: Pengajuan = new Pengajuan();

    pilihanKaratase = [
        {value: "18", label: "18 Karat"},
        {value: "22", label: "22 Karat"},
        {value: "24", label: "24 Karat"}
    ];

  pilihanCabang = [
    {id: "abcd001", nama: "Cabang Jakarta Timur"},
    {id: "abcd002", nama: "Cabang Jakarta Pusat"},
    {id: "abcd003", nama: "Cabang Jakarta Barat"}
  ];

    constructor() {
    }

    ngOnInit() {
    }

    doPengajuan(): void {
        this.pengajuan.nilai = 550000 * this.pengajuan.beratBersih;
    }

}
