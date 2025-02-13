import { PluginSettingTab, App, Setting } from "obsidian";
import ObsidianGitSyncPlugin from "./main";

 export class SettingsTab extends PluginSettingTab {
    plugin: ObsidianGitSyncPlugin;

    constructor(app: App, plugin: ObsidianGitSyncPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        let { containerEl } = this;

        containerEl.empty();

    new Setting(containerEl)
      .setName('Private key path')
      .setDesc('The path to the private key to use for SSH authentication')
      .addText((text) =>
        text
          .setPlaceholder('~/.ssh/id_rsa')
          .setValue(this.plugin.settings.privateKeyPath)
          .onChange(async (value) => {
            this.plugin.settings.privateKeyPath = value;
            await this.plugin.saveSettings();
          })
      );
    }
 }
