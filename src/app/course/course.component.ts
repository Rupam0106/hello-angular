import { Component } from '@angular/core';
import { Course, CourseList } from './course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  comapany = 'Rudra Innvovative Dashboard';
  count = 0;
  course: Course = {
    title: 'angular Tutorial',
    rating: 4.9745,
    student: 302554,
    price: 190.95,
    releaseDate: new Date(2023, 3, 1),
  };

  courseList: CourseList[] = [
    {
      title: 'Node Tutorial',
      pic: '',
      rating: 5.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
    {
      title: 'React Tutorial',
      pic: '',
      rating: 4.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
    {
      title: 'MySQL Tutorial',
      pic: '',
      rating: 4.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
    {
      title: 'Asp.net Tutorial',
      pic: '',
      rating: 4.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
    {
      title: 'Java Tutorial',
      pic: '',
      rating: 4.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
    {
      title: 'Python Tutorial',
      pic: '',
      rating: 4.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
    {
      title: 'Bootstrap Tutorial',
      pic: '',
      rating: 4.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
    {
      title: 'Tailwinds Tutorial',
      pic: '',
      rating: 4.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
    {
      title: 'Wordpress Tutorial',
      pic: '',
      rating: 4.9745,
      student: 302554,
      price: 190.95,
      releaseDate: new Date(2023, 3, 1),
    },
  ];

  selectCourse(course: CourseList) {
    console.log(course);
  }

  addCource() {
    this.courseList.push(course);
  }
}
const course: CourseList = {
  title: 'JavaScript Tutorial',
  pic: '',
  rating: 4.9745,
  student: 302554,
  price: 190.95,
  releaseDate: new Date(2023, 3, 1),
};
