import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastrService: ToastrService) { }
  
  showSuccess(message: string) {
    this.toastrService.success(message);
  }

  showAlert(message: string) {
    this.toastrService.warning(message);
  }

  showDanger(message: string) {
    this.toastrService.error(message);
  }

}
