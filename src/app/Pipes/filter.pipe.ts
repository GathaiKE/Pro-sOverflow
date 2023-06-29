import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../Interfaces/questionInterfaces';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
transform(questions: Question[], searchString: string): Question[] {
  if (!searchString) {
    return questions;
  }
  
  const lowercaseSearch = searchString.toLowerCase();
  return questions.filter((question: Question) => {
    return question.title.toLowerCase().includes(lowercaseSearch);
  })

}
}
