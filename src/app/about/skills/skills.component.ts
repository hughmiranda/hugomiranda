import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills = [
    {
      img: 'assets/skills/js.png',
      name: 'JavaScript'
    },
    {
      img: 'assets/skills/css3.svg',
      name: 'CSS3'
    },
    {
      img: 'assets/skills/html5.png',
      name: 'HTML5'
    },
    {
      img: 'assets/skills/angular.png',
      name: 'Angular'
    },
    {
      img: 'assets/skills/ts.png',
      name: 'TypeScript'
    },
    {
      img: 'assets/skills/sass.svg',
      name: 'SASS'
    },
    {
      img: 'assets/skills/git.png',
      name: 'Git'
    },
    {
      img: 'assets/skills/rxjs.png',
      name: 'RxJS'
    },
    {
      img: 'assets/skills/react.png',
      name: 'React'
    },
    {
      img: 'assets/skills/redux.png',
      name: 'Redux'
    },
    {
      img: 'assets/skills/agile.jpg',
      name: 'Agile'
    },
    {
      img: 'assets/skills/scrum.png',
      name: 'Scrum'
    },
    {
      img: 'assets/skills/jira.png',
      name: 'Jira'
    },
    {
      img: 'assets/skills/jest.png',
      name: 'Jest'
    },
    {
      img: 'assets/skills/aem.png',
      name: 'AEM'
    },
    {
      img: 'assets/skills/cs.png',
      name: 'C#'
    },
    {
      img: 'assets/skills/java.png',
      name: 'Java'
    },
    {
      img: 'assets/skills/nodejs.png',
      name: 'Node.JS'
    },
    {
      img: 'assets/skills/python.png',
      name: 'Python'
    },
    {
      img: 'assets/skills/c.png',
      name: 'C'
    },
    {
      img: 'assets/skills/qa.png',
      name: 'Q.A.'
    },
    {
      img: 'assets/skills/epicor.jpg',
      name: 'Epicor ERP'
    },
    {
      img: 'assets/skills/mssql.png',
      name: 'MS SQL'
    },
    {
      img: 'assets/skills/firebase.png',
      name: 'Firebase'
    },
    {
      img: 'assets/skills/arduino.png',
      name: 'Arduino'
    },
    {
      img: 'assets/skills/unity.png',
      name: 'Unity'
    },
    {
      img: 'assets/skills/autocad.png',
      name: 'AutoCAD'
    },
    {
      img: 'assets/skills/ps.svg',
      name: 'Photoshop'
    },
  ];
  public showFilters = false;

  constructor() { }

  ngOnInit(): void {
  }

  showFilter() {
    this.showFilters = !this.showFilters;
  }

}
