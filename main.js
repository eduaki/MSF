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
		minWidth: 1280,
		minHeight: 750,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			nodeIntegration: true,
		},
		frame: true,
		icon: __dirname + "/icon.png",
	});

	win.loadURL("http://localhost:3000/");
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
