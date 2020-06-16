import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  experience = [
    {
      img: '/assets/accenture.png',
      company: 'Accenture',
      position: 'Front End Developer',
      time: '2018-Now',
      description: `Developing and maintaining front end code, specializing in Angular,
      from multiple websites of the most important telecommunications companies in USA,
      becoming the Subject Matter Expert in different areas such as the shop page, cart
      page and one of the main CSS Points of Contact, as well as being part of multiple
      Accenture internal projects developing applications focused on helping fellow developers
      grow their coding skills, teaching and creating software fundamentals lessons and mentoring.`
    },
    {
      img: '/assets/epicor.jpg',
      company: 'Epicor Software',
      position: 'Software Developer & Quality Assurance Analyst Internship',
      time: '2017-2018',
      description: `Internship program for Epicor E10 ERP product as Software
      Developer and Quality Assurance Analyst, mainly working with C#/.NET and MS SQL
      technologies as part of the New Product Development team developing and testing
      the Supply Chain Management, Manufacturing and Finances modules.`
    }
  ];

  constructor() { }

  ngOnInit(): void {

    // const typed = new Typed('#me', {
    //   strings: [`Hi, my name is Hugo Miranda.`, `I'm a Software Engineer working as a Front End Developer at Accenture.`],
    //   typeSpeed: 50,
    //   backDelay: 2000,
    //   backSpeed: 10,
    //   loop: true
    // });
  }

}
