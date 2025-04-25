import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cats.component.html',
  styleUrl: './cats.component.css',
})
export class CatsComponent {
  cats = [
    {
      name: 'Michi',
      age: 2,
      personality: 'Juguetón',
      image: 'assets/cat1.jpg',
    },
    { name: 'Luna', age: 3, personality: 'Cariñosa', image: 'assets/cat2.jpg' },
    { name: 'Simba', age: 1, personality: 'Curioso', image: 'assets/cat3.jpg' },
  ];
}
