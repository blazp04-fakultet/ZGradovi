import type { AppSettings } from './AppSettings'
import { developmentAppSettings } from './DevelopmentAppSettings'
import { productionAppSettings } from './ProductionAppSettings'

class ConfigManager {
  private static instance: ConfigManager
  private currentSettings: AppSettings

  private constructor() {
    // Default to development settings
    this.currentSettings = developmentAppSettings
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) {
      ConfigManager.instance = new ConfigManager()
    }
    return ConfigManager.instance
  }

  public initializeSettings(isProd: boolean = false): void {
    this.currentSettings = isProd
      ? productionAppSettings
      : developmentAppSettings
  }

  public getSettings(): AppSettings {
    return this.currentSettings
  }
}

export const configManager = ConfigManager.getInstance()
