import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";
import { MatToolbar } from "@angular/material/toolbar";
import { MatAnchor, MatButton, MatIconButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    LanguageSwitcherComponent,
    MatToolbar,
    MatAnchor,
    RouterLink,
    MatButton,
    MatIconButton,
    MatIcon,
    NgIf
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

}
