import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css',
})
export class DogsComponent {
  dogs = [
    { name: 'Rex', age: 4, personality: 'Protector', image: 'assets/dog1.jpg' },
    { name: 'Max', age: 2, personality: 'Juguetón', image: 'assets/dog2.jpg' },
    {
      name: 'Bella',
      age: 3,
      personality: 'Cariñosa',
      image: 'assets/dog3.jpg',
    },
  ];
}
