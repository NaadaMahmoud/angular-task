import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  ngOnInit() {
    AOS.init({
      duration: 1200,
    });

  }
}
