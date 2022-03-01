import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Getcha Photos Here!';
  image1 = 'https://static01.nyt.com/images/2012/03/30/arts/30NEWSIES1_SPAN/30NEWSIES1_SPAN-articleLarge.jpg';
  image2 = 'https://cdn.vox-cdn.com/thumbor/0QmiiXI1XjuNf47tvYgoKNbixW0=/0x792:5452x3518/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/19200698/Para_Newsies_papers_by_Liz_Lauren.jpg';
  image3 = 'https://www.nydailynews.com/resizer/r7hbN6H5ltK_EKRgyzwkivs-2js=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/GOX6JNR2PN5IUQ5QHAHZTEARHY.jpg';

  constructor() { }

  ngOnInit() {
  }

}