import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 1200,
    });

    // Set the default language
    this.translate.setDefaultLang('en');

    // Get browser language
    const browserLang = this.translate.getBrowserLang() || 'en';

    // Use the browser language if it's either 'en' or 'ar'; otherwise, use 'en'
    this.translate.use(browserLang.match(/en|ar/) ? browserLang : 'en');
  }

  constructor(private translate: TranslateService) { }

  // Method to switch between languages
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
