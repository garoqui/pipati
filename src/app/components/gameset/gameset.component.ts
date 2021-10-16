import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from 'src/app/model/userModel';
import { UsersService } from 'src/app/services/users.service';
import { MOVEMENTS, MOVESELECT } from '../../constants/movements'

@Component({
  selector: 'app-gameset',
  templateUrl: './gameset.component.html',
  styleUrls: ['./gameset.component.css']
})
export class GamesetComponent implements OnInit {

  userName: any = "";
  moveshape = "rockgame.png"
  move = `/assets/myicons/${this.moveshape}`;
  countInterval = 0
  movePlayer1: string = `/assets/myicons/${this.moveshape}`;
  movePlayer2: string = `/assets/myicons/${this.moveshape}`;
  alert: string = "GO!";
  isFinish = false
  interval: null
  score: string = ""

  constructor(private route: ActivatedRoute, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get("id");
    this.getUser()
    this.moveHand
  }

  //select option in controls blackboard
  onClick = (pipati: string) => {
    if(!this.isFinish){
      clearInterval(this.moveHand)
    let moveSelected = Object.values(MOVESELECT).filter(res => res === pipati)
    this.movePlayer1 = `/assets/myicons/${moveSelected}.png`
    let pipati2 = this.movePlayer2.split("/")[3].split(".")[0]
    this.checkWinner(pipati, pipati2)
    this.showTryAgain()
    }    
  }


  //showing hands moving
  moveHand = setInterval(() => {
    this.countInterval === 3 ? this.countInterval = 0 : false
    this.movePlayer1 = `/assets/myicons/${MOVEMENTS[this.countInterval].name}.png`
    this.movePlayer2 = `/assets/myicons/${MOVEMENTS[this.countInterval].name}.png`
    this.countInterval = this.countInterval + 1
  }, 200)

  //evaluate the winner to show message
  checkWinner = (player1: string, player2: string) => {
    console.log(player1, player2)
    let lostWithPlayer1 = MOVEMENTS.filter(res => res.name === player1)[0].lostWith
    player2 === player1 ? this.alert = "TIED!" : false
    player2 === lostWithPlayer1 ? this.alert = "LOSE!" : false
    player2 !== lostWithPlayer1 && player2 !== player1 ? this.alert = "WIN!" : false
    this.updateScore(this.alert)
  }

  //show button try again
  showTryAgain = () => {
    this.isFinish = true;
  }

  //run the game again
  runAgain = () => {
    this.alert = "GO!"
    if (this.isFinish) {
      const interval = setInterval(() => {
        this.countInterval === 3 ? this.countInterval = 0 : false
        this.movePlayer1 = `/assets/myicons/${MOVEMENTS[this.countInterval].name}.png`
        this.movePlayer2 = `/assets/myicons/${MOVEMENTS[this.countInterval].name}.png`
        this.countInterval = this.countInterval + 1
      }, 200)
      this.moveHand = interval
      this.isFinish = false
    }
  }

  //update score in database
  updateScore = async (result: string) => {
    let user: UserModel
    user = await this.getUser()

    switch (result) {

      case "WIN!":
        user.points = Number(user.points) + 10;
        await this.userService.updateUser(user)
        break;

      case "LOSE!":
        user.points = Number(user.points) - 10
        await this.userService.updateUser(user)
        break;

      default:
        break;
    }    
   
    this.score = user.points.toString()
  }

  //select user from database
  getUser = async () => {
    let user: UserModel
    user = await this.userService.getUser(this.userName).then((res: UserModel) => res)
    this.score = user.points.toString()
    return user
  }


}
