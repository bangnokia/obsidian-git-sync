import { App, Plugin, PluginSettingTab, Setting, Notice } from 'obsidian';

interface PluginSettings {
	privateKeyPath: string|null;
}

const DEFAULT_SETTINGS: Partial<PluginSettings> = {
	privateKeyPath: '~/ssh/id_rsa'
}

export default class ObsidianGitSyncPlugin extends Plugin {
	settings: PluginSettings;

	async onload() {
		console.log('loading Obsidian Git Sync plugin');

		this.addSettingTab(new ObsidianGitSyncSettingTab(this.app, this));
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
