import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { EmailInformationPopupComponent } from './email-information-popup/email-information-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}
  title = 'personal-web-page';
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    this.dialog.open(EmailInformationPopupComponent, dialogConfig);
  }
}
