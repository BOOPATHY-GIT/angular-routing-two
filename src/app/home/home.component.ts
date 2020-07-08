import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dynamicData1 = 'This is a dynamic content for second website. This content should not be visible in heatmap screenshot';
  dynamicData2 = 'This is a dynamc content with sensitive data - second website';

}
