import { App, Plugin, PluginSettingTab, Setting, Notice } from 'obsidian';
import { SettingsTab } from './settings';

interface PluginSettings {
	privateKeyPath: string;
}

const DEFAULT_SETTINGS: Partial<PluginSettings> = {
	privateKeyPath: ''
}

export default class ObsidianGitSyncPlugin extends Plugin {
	settings: PluginSettings;

	async onload() {
		console.log('loading Obsidian Git Sync plugin');
		await this.loadSettings();

		this.addSettingTab(new SettingsTab(this.app, this));
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
