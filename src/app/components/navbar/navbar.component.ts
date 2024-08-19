import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);
    translate.setDefaultLang('en');
   }

   switchLang(lang: string){
    console.log(`Switching to language: ${lang}`);  
    this.translate.use(lang);
   }

  ngOnInit(): void {
    // You can also set initial values here if needed
  }
}



// console.log(`Switching to language: ${lang}`);  
