import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Pet {
  id: number;
  photo: string;
  name: string;
  breed: string;
  age: number;
  vaccinationStatus: 'up-to-date' | 'due-soon';
}

interface Activity {
  date: string;
  type: string;
  description: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  userName = 'Alex';
  sidebarCollapsed = false;

  pets: Pet[] = [
    {
      id: 1,
      photo: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Bruno',
      breed: 'Golden Retriever',
      age: 3,
      vaccinationStatus: 'up-to-date'
    },
    {
      id: 2,
      photo: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Whiskers',
      breed: 'Persian Cat',
      age: 2,
      vaccinationStatus: 'due-soon'
    },
    {
      id: 3,
      photo: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=400',
      name: 'Max',
      breed: 'Labrador',
      age: 5,
      vaccinationStatus: 'up-to-date'
    }
  ];

  activities: Activity[] = [
    {
      date: '02 Oct 2025',
      type: 'Vaccination',
      description: 'Anti-rabies for Bruno',
      status: 'Completed'
    },
    {
      date: '08 Oct 2025',
      type: 'Vet Visit',
      description: 'Annual Health Check',
      status: 'Upcoming'
    },
    {
      date: '15 Sep 2025',
      type: 'Purchase',
      description: 'Premium Dog Food - 20kg',
      status: 'Completed'
    },
    {
      date: '20 Sep 2025',
      type: 'Vaccination',
      description: 'Feline Distemper for Whiskers',
      status: 'Completed'
    }
  ];

  constructor(private router: Router) {}

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  navigateTo(route: string): void {
    if (route === 'dashboard') {
      return;
    }
    if (route === 'logout') {
      this.router.navigate(['/home']);
      return;
    }
    console.log(`Navigate to ${route}`);
  }

  navigateToQuickAction(action: string): void {
    console.log(`Quick action: ${action}`);
  }

  openChatbot(): void {
    console.log('Chatbot opened');
  }
}
