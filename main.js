const { app, BrowserWindow } = require("electron");
const express = require("express");
const path = require("path");

const apping = express();

apping.use(express.static(path.join(__dirname, "build")));

apping.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

apping.listen(3000);

const createWindow = () => {
	const win = new BrowserWindow({
		minWidth: 905,
		minHeight: 650,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true,
		},
		frame: true,
		icon: __dirname + "/favicon.ico",
	});

	win.loadFile("public/index.html");
};

if (require("electron-squirrel-startup")) app.quit();

app.whenReady().then(() => {
	createWindow();

	app.on("active", () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
