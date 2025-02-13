import { PluginSettingTab, App } from "obsidian";
import ObsidianGitSyncPlugin from "./main";

 export class SettingsTab extends PluginSettingTab {
    plugin: ObsidianGitSyncPlugin;

    constructor(app: App, plugin: ObsidianGitSyncPlugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {

    }
 }
