import { Component } from '@angular/core';
import { MeteoService } from '../../../services/meteo.service';
@Component({
  selector: 'app-meteo',
  imports: [],
  templateUrl: './meteo.html',
  styleUrl: './meteo.css'
})
export class Meteo {
  title:string='apiData';
  newData:any;
constructor(private apiService:MeteoService){}

ngOnInit(){
  this.apiService.getData().subscribe(responseApi=>{
    this.newData=responseApi;
    console.log(this.newData);
    console.log(this.newData.city_info.name);
  })
}
}
