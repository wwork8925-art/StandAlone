import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-guests-help',
 imports: [RouterLink],
  templateUrl: './guests-help.html',
  styleUrl: './guests-help.css',
})
export class GuestsHelp {

}
