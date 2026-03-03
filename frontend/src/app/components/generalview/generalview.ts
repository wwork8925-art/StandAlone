import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-generalview',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './generalview.html',
  styleUrl: './generalview.css',
})
export class Generalview implements OnInit {
  private requestService = inject(RequestService);
  private cdr = inject(ChangeDetectorRef);

  userCount!: number;

  ngOnInit(): void {
    this.loadUserCount();
  }

  loadUserCount(): void {
    this.requestService.getUserCount().subscribe({
      next: (count) => {
        this.userCount = count;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error fetching user count:', err);
      }
    });
  }

  refreshUserCount(): void {
    this.loadUserCount();
  }
}
