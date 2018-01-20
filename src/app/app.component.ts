import { Component, OnInit } from '@angular/core';
import { LoginService } from './spotify-auth/login.service';
import { User } from './shared/index';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  private user: User = new User({} as User);

  public constructor(private loginServ: LoginService){
    this.loginServ.getUser().subscribe((u) => {
      this.user = u
    });
  }

  public ngOnInit(){

  }

  public logout(): void{
    this.loginServ.logout();
  }

  public login(): void{
    //if(!this.loginServ.isLoggedIn){
      this.loginServ.login();
    //}
  } 

}