import { Component, OnInit } from "@angular/core";
import { UserProfileService } from "src/app/services/user-profile.service";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  userInfo: any;
  constructor(private userProfile: UserProfileService) { }

  async ngOnInit() {
  }
}
