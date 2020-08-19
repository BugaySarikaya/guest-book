import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Message } from './models/message.model';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public guestForm: FormGroup;

  @ViewChild('navbarSupportedContent') navbar: ElementRef;
  @ViewChild('logo') logoElement: ElementRef;
  @ViewChild('segmentPart') segmentPart: ElementRef;
  @ViewChild('guestBookPart') guestBookPart: ElementRef;

  title = 'guest-book';
  firstContent = 'pragmanila solutions markup test';
  secondContent = 'you should build this \n simple, logical, & straightforward';
  thirdContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus ipsum nec tristique scelerisque. Pellentesque in consequat turpis, eget finibus lectus. Pellentesque ligula dui, euismod eu porttitor at, cursus et risus. Phasellus dictum sem sit amet neque hendrerit lobortis. Proin id dolor tempor metus tincidunt fringilla sit amet ut purus. Nam et hendrerit nibh. Quisque malesuada magna non sapien placerat, non tincidunt tellus lobortis. Nam tincidunt scelerisque odio, ut placerat urna dapibus at. In sit amet orci a nulla cursus imperdiet. Maecenas non ipsum commodo, dignissim nulla quis, varius leo. Quisque ultricies eget nisl vitae semper. Nulla pellentesque diam lorem, eu ultrices arcu tempor vel. Pellentesque a fringilla elit. Nulla finibus commodo enim, id vehicula ante mattis non. Nulla et nulla imperdiet, tristique nisi ut, semper nisl. Nullam a dui ut tortor posuere pretium ac in mauris. Nullam facilisis vestibulum ligula, a iaculis libero laoreet non.';

  messageList: Message[] = [
    { name: 'Guestbook user', subject: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis pretium ultrices. Praesent neque mauris, consectetur ac mollis quis, consequat non dui.', date: new Date(2016, 1, 12, 21, 0, 0) },
    { name: 'Guestbook user', subject: '', message: 'Nam facilisis pretium ultrices. Praesent neque mauris, consectetur ac mollis quis, consequat non dui.', date: new Date(2016, 1, 11, 21, 0, 0) },
    { name: 'Guestbook user', subject: '', message: 'Praesent neque mauris, consectetur ac mollis quis, consequat non dui. Nullam a dui ut tortor posuere pretium ac in mauris. Nullam facilisis vestibulum ligula, a iaculis libero laoreet non.', date: new Date() },
    { name: 'Guestbook user', subject: '', message: 'Nam facilisis pretium ultrices. Nullam a dui ut tortor posuere pretium ac in mauris. Nullam facilisis vestibulum ligula, a iaculis libero laoreet non.', date: new Date(2016, 1, 10, 21, 0, 0) },
    { name: 'Guestbook user', subject: '', message: 'Nullam a dui ut tortor posuere pretium ac in mauris. Nullam facilisis vestibulum ligula, a iaculis libero laoreet non. Praesent neque mauris, consectetur ac mollis quis, consequat non dui. Nam facilisis pretium ultrices.', date: new Date() },
    { name: 'Guestbook user', subject: '', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a dui ut tortor posuere pretium ac in mauris. Nullam facilisis vestibulum ligula, a iaculis libero laoreet non.', date: new Date() }
  ];

  submitted = false;

  constructor(
    private fb: FormBuilder,
  ) {
    this.guestForm = this.fb.group({
      name: [null, Validators.required],
      subject: [null, Validators.required],
      message: [null, Validators.required],
      date: new Date()
    });
  }

  get f() { return this.guestForm.controls; }

  toggle() {
    if (!$(this.navbar.nativeElement).hasClass('show')) {
      this.logoElement.nativeElement.style.top = '268px';
    } else {
      this.logoElement.nativeElement.style.top = '15px';
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.guestForm.invalid) {
      return;
    }
    this.messageList.push(this.guestForm.value);
    this.submitted = false;

    this.guestForm.markAsPristine();
    this.guestForm.markAsUntouched();
    this.guestForm.reset();

  }

  scrollHome() {
    window.scroll(0, 0);
  }

  scrollSegment() {
    this.segmentPart.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollGuestbook() {
    this.guestBookPart.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
