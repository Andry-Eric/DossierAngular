import { Component, OnInit } from "@angular/core";
import { AppareilService } from "../services/appareil.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-appareil-view",
  templateUrl: "./appareil-view.component.html",
  styleUrls: ["./appareil-view.component.scss"]
})
export class AppareilViewComponent implements OnInit {
  isAuth = true;

  lastUpdate = new Date();

  appareils: any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  oneEteindre() {
    this.appareilService.switchOffAll();
  }
  onSave() {
    this.appareilService.saveAppareilsToServer();
  }
  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
}
