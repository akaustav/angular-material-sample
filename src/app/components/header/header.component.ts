import { Component, signal, computed } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';

export interface AppTheme {
  name: string;
  icon: string;
}

const themes: AppTheme[] = [
  { name: 'system', icon: 'desktop_windows' },
  { name: 'light', icon: 'light_mode' },
  { name: 'dark', icon: 'dark_mode' },
];

export type ThemeType = (typeof themes)[number]['name'];

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatIconButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatToolbar,
    TitleCasePipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private appTheme = signal<ThemeType>('system');

  public selectedTheme = computed(
    (): AppTheme =>
      themes.find((t: AppTheme): boolean => t.name === this.appTheme()) ??
      themes[0]
  );

  public getThemes(): AppTheme[] {
    return themes;
  }

  public setTheme(theme: ThemeType): void {
    this.appTheme.set(theme);
  }
}
