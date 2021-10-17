import { Component, Input, OnInit } from "@angular/core";
import { UserModel } from "src/app/model/userModel";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-score",
  templateUrl: "./score.component.html",
  styleUrls: ["./score.component.css"],
})
export class ScoreComponent implements OnInit {
  @Input() userName: string = "";
  @Input() score: string = "";

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getScore(this.userName);
  }

  getScore = (user: string) => {
    this.userService.getUser(user).then((res: any) => {
      this.score = res.points;
    });
  };
}
