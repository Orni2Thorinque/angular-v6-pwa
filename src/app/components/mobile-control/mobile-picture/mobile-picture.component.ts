import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-picture',
  templateUrl: './mobile-picture.component.html',
  styleUrls: ['./mobile-picture.component.css']
})
export class MobilePictureComponent implements OnInit {
  public selectedFile: any = null;
  public url: any;

  constructor() { }

  ngOnInit() {
  }


  onFileSelected(fileEvent: any) {
    this.selectedFile = fileEvent.target.files[0];
    if (fileEvent.target.files && fileEvent.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      };

      reader.readAsDataURL(fileEvent.target.files[0]);
    }
    console.log(this.selectedFile);
  }

  onUpload() {
    alert('Picture taken, nothing intrusive done with it');
  }
}
