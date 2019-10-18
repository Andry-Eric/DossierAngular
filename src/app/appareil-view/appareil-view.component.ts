import { Component, OnInit } from "@angular/core";
import { AppareilService } from "../services/appareil.service";

@Component({
  selector: "app-appareil-view",
  templateUrl: "./appareil-view.component.html",
  styleUrls: ["./appareil-view.component.scss"]
})
export class AppareilViewComponent implements OnInit {
  isAuth = true;

  lastUpdate = new Date();

  appareils: any[];

  constructor(private appareilService: AppareilService) {}

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  oneEteindre() {
    this.appareilService.switchOffAll();
  }
}
