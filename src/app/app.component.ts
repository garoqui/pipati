import { Component } from '@angular/core';
import { createDB } from './db/db';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipati';

  ngOnInit(): void {
    if (!window.indexedDB) {
      alert("¡El navegador no es compatible para guardar datos!");
    }else{
      createDB()
    }

  }
}
