import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, Signal, signal } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private appTheme = signal<ThemeType>('system');

  constructor() {
    effect((): void => {
      const appTheme = this.appTheme();
      const colorScheme = appTheme === 'system' ? 'light dark' : appTheme;
      this.document.body.style.setProperty('color-scheme', colorScheme);
    });
  }

  public selectedTheme: Signal<AppTheme> = computed(
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
