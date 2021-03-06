import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "fronis-web";

    constructor(public translate: TranslateService) {
        translate.addLangs(["de"]);
        translate.setDefaultLang("de");
    }

    switchLang(lang: supportedLanguages): void {
        this.translate.use(lang);
    }
}

export type supportedLanguages = "de";
