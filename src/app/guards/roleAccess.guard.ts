import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {RightsService} from "../services/rights.service";

@Injectable({
  providedIn: 'root'
})
export class RoleAccessGuard implements CanActivate {
  constructor(@Inject(RightsService) private rightsService: RightsService) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.rightsService.getRights().pipe(map(({data}) => {
      if (data.includes(route.data['accessToken'])) {
        return true
      } else {
        this.rightsService.openSnackBar(`Нет доступа к странице - ${route.url}`)
        return false
      }
    }))
  }

}
