import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SevenWondersApp';

  sevenwonders = [
    {name:'Taj Mahal',image:'D:\drive d\Angular Projects\SevenWondersApp\src\assets\images\tajmahal.jpg',link:'/tajmahal'},
    {name:'Great Wall of China',image:'D:\drive d\Angular Projects\SevenWondersApp\src\assets\images\greatwallofchina.jpg',link:'/greatwallofchina'},
    {name:'Hanging Gardens',image:'D:\drive d\Angular Projects\SevenWondersApp\src\assets\images\hanginggardens.jpg',link:'hanginggardens'},
    {name:'Machu Picchu',image:'D:\drive d\Angular Projects\SevenWondersApp\src\assets\images\machupicchu.jpg',link:'machupicchu'},
    {name:'Light House of Alexandria',image:'D:\drive d\Angular Projects\SevenWondersApp\src\assets\images\Light House of Alexandria.jpg',link:'lighthouseofalexandria'},
    {name:'Petra',image:'D:\drive d\Angular Projects\SevenWondersApp\src\assets\images\Petra.jpg',link:'petra'},
    {name:'Pyramid of Giza',image:'D:\drive d\Angular Projects\SevenWondersApp\src\assets\images\Pyramid of Giza.jpg',link:'pyramidofgiza'}
  ];
}
