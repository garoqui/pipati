import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/userModel';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : string = ""
  messageModal = "El usuario no existe, deseas agregarlo?"
  modalView : boolean

  constructor( private usersService : UsersService, private router: Router) {
    this.modalView = false
   }

  ngOnInit(): void {
    
  }

  onClick= ( )=>{
    this.usersService.getUser( this.userName)
    .then(res=>this.openGameSet())
    .catch( err=>this.openModal())
  }

  createUser = ()=>{
    const user : UserModel = { nickname : this.userName ,points : 0}
    this.usersService.createUser( user )
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    
  }

  openModal = ()=>{    
    this.modalView = true
  }

  closeinLogin(response : any) {
    response.length ? this.modalView = false : this.modalView = true;
    console.log(response) 
    response === "createUser" ? this.createUser()  : false;  
   }

   openGameSet = ()=>{
      this.router.navigate(['/gameset', this.userName]);
   }

}
