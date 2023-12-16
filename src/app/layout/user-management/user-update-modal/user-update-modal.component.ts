import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-update-modal',
  templateUrl: './user-update-modal.component.html',
  styleUrls: ['./user-update-modal.component.scss']
})
export class UserUpdateModalComponent {
  constructor(private dialog: MatDialog) {}
}
