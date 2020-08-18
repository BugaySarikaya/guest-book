import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('navbarSupportedContent') navbar: ElementRef;
  @ViewChild('logo') logoElement: ElementRef;

  title = 'guest-book';
  firstContent = 'pragmanila solutions markup test';
  secondContent = 'you should build this \n simple, logical, & straightforward';
  thirdContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus ipsum nec tristique scelerisque. Pellentesque in consequat turpis, eget finibus lectus. Pellentesque ligula dui, euismod eu porttitor at, cursus et risus. Phasellus dictum sem sit amet neque hendrerit lobortis. Proin id dolor tempor metus tincidunt fringilla sit amet ut purus. Nam et hendrerit nibh. Quisque malesuada magna non sapien placerat, non tincidunt tellus lobortis. Nam tincidunt scelerisque odio, ut placerat urna dapibus at. In sit amet orci a nulla cursus imperdiet. Maecenas non ipsum commodo, dignissim nulla quis, varius leo. Quisque ultricies eget nisl vitae semper. Nulla pellentesque diam lorem, eu ultrices arcu tempor vel. Pellentesque a fringilla elit. Nulla finibus commodo enim, id vehicula ante mattis non. Nulla et nulla imperdiet, tristique nisi ut, semper nisl. Nullam a dui ut tortor posuere pretium ac in mauris. Nullam facilisis vestibulum ligula, a iaculis libero laoreet non.';

  toggle() {
    if (!$(this.navbar.nativeElement).hasClass('show')) {
      this.logoElement.nativeElement.style.top = '268px';
    } else {
      this.logoElement.nativeElement.style.top = '15px';
    }
  }
}
