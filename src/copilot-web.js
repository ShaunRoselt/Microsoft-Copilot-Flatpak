#!/usr/bin/gjs

imports.gi.versions.Gtk = "4.0";
imports.gi.versions.WebKit2 = "4.1";

const { Gio, Gtk, WebKit2 } = imports.gi;

const APP_ID = "io.github.ShaunRoselt.CopilotWeb";
const HOME_URL = "https://copilot.microsoft.com/";

const app = new Gtk.Application({
    application_id: APP_ID,
    flags: Gio.ApplicationFlags.FLAGS_NONE,
});

app.connect("activate", () => {
    const window = new Gtk.ApplicationWindow({
        application: app,
        title: "Copilot Web",
        default_width: 1280,
        default_height: 900,
    });

    const webview = new WebKit2.WebView();
    webview.load_uri(HOME_URL);

    webview.connect("notify::title", () => {
        if (webview.title) {
            window.title = `${webview.title} — Copilot Web`;
        }
    });

    window.set_child(webview);
    window.present();
});

app.run([]);

