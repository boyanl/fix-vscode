// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('fix-freaking-vscode.switchEditor', () => {
		vscode.commands.executeCommand('workbench.action.quickOpen').then(() => {
			vscode.commands.executeCommand('workbench.action.quickOpenNavigateNextInFilePicker');
		});
	});

	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('fix-freaking-vscode.expandSelectionAndGoToVisualMode', () => {
		vscode.commands.executeCommand('vim.enterNormalMode').then(() => vscode.commands.executeCommand("editor.action.smartSelect.expand"))
		.then(() => vscode.commands.executeCommand("vim.enterVisualMode"));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
