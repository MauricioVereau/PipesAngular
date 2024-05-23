import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrl: './basics-pages.component.css'
})
export class BasicsPagesComponent {

  public nameLower: string = 'Mauricio';
  public nameUpper: string = 'MAURICIO';
  public fullName: string = 'mAURiCiO VerEaU';

  public customDate: Date = new Date();
}
