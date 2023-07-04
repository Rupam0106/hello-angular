import { CourseList } from './../course';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
@Input() course:CourseList[]=[]

@Output() selectedCourse=new EventEmitter<CourseList>();

selectCourse(course:CourseList){
  this.selectedCourse.emit(course)
}
}
