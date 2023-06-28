import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../Interfaces/questionInterfaces';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
// search:string=""

//   transform(questions: Question[],searchString: string): Question[] {

//     if(questions.length===0){
//       return questions
//     }
//       let filteredQuestions:Question[]=[]

//       for(let question of questions){
//         if(question.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())){
//           filteredQuestions.push(question)
//         }

//       }
//     return filteredQuestions;
//   }
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
