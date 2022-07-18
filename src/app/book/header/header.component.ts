import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  currentUser: any | null = null
  userSub: Subscription | null = null

  constructor(private authService: AuthService) {
  }


  signOut() {
    this.authService.logOut()
  }

  ngOnInit(): void {
    this.userSub = this.authService.getUser().subscribe(user => this.currentUser = user)
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe()
  }
}
