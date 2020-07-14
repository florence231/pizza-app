import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { createAnimation } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any[] = [];

  constructor(
    private service: DatabaseService
  ) {}

  ngOnInit(): void {
    this.service.getData().subscribe((res: any[]) => {
      this.data = res;
    });

    const animation = createAnimation()
      .addElement(document.getElementById('logo'))
      .duration(2000)
      .keyframes([
        {offset: 0, transform: 'scale(0)'},
        {offset: 0.5, transform: 'scale(1.5)'},
        {offset: 1, transform: 'scale(1)'},
      ]);  
      
    animation.play();
  }

}
