import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos I Like';
  image1 = 'https://cdn.pixabay.com/photo/2016/08/28/23/24/sunflower-1627193_960_720.jpg';
  image2 = 'https://cdn.pixabay.com/photo/2018/04/30/01/20/kettlebell-3361559_960_720.jpg';
  image3 = 'https://cdn.pixabay.com/photo/2016/02/22/22/41/love-1216672_960_720.jpg';

  constructor() { }

  ngOnInit() {
  }

}