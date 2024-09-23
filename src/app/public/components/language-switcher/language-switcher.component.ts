import { Component } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from "@angular/material/button-toggle";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.css'] // Cambiado a styleUrls
})
export class LanguageSwitcherComponent {
  protected currentLang: string = 'en';
  protected languages: string[] = ['en', 'es'];

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang;
  }

  useLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;
  }
}
