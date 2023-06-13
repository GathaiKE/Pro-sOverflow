import { Injectable } from '@angular/core';
import { Answer, Question } from '../Interfaces/questionInterfaces';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {


  constructor() { }

  questions:Question[]=[
    {
      question_id:'1',
      title:'How Are You?',
      body:"Just A random monday morning greeting✌😂"
    },
    {
      question_id:'2',
      title:'Are you a good programmer?',
      body:"Rate your programing skills out of 10"
    },
    {
      question_id:'3',
      title:'Tell me about yourself?',
      body:"In under two minutes, talk about yourself."
    },
    {
      question_id:'4',
      title:'Why Development?',
      body:"Why do you want to work as a Software developer."
    },
    {
      question_id:'5',
      title:'What do you do in your free time?',
      body:"How do you spend your free time if you ever have any"
    },
    {
      question_id:'6',
      title:'Fire?',
      body:"Define fire in ten or less words."
    }
  ]

  answers:Answer[]=[
    {
      question_id:"1",
      body:"I'm fine thanks for asking",
      answer_id:"1"
    },
    {
      question_id:"1",
      body:"I'm optimistic for the day",
      answer_id:"2"
    },
    {
      question_id:"1",
      body:"Its Monday morning,how the fuck do you think I am.",
      answer_id:"3"
    },
    {
      question_id:"2",
      body:"I'm The best programmer around",
      answer_id:"1"
    },
    {
      question_id:"2",
      body:"I know five good programmers and I am four of them",
      answer_id:"2"
    },
    {
      question_id:"2",
      body:"When I'm not getting humbled by code, yeah sure!",
      answer_id:"3"
    },
    {
      question_id:"3",
      body:"Lol, don't be creepy",
      answer_id:"1"
    },
    {
      question_id:"3",
      body:"My name is Brian and I am a fullstack developer.",
      answer_id:"2"
    },
    {
      question_id:"3",
      body:"😕😕😕🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤔🤨🤨🤨",
      answer_id:"3"
    },
    {
      question_id:"4",
      body:"Because I enjoy writing code.",
      answer_id:"1"
    },
    {
      question_id:"4",
      body:"There're infinite possibilities of what you could create as a developer making it the least monotonous profession on the plannet",
      answer_id:"2"
    },
    {
      question_id:"4",
      body:"Ze maniiii😭😭😭😭😭",
      answer_id:"3"
    },
    {
      question_id:"5",
      body:"I sleep alot",
      answer_id:"1"
    },
    {
      question_id:"5",
      body:"Eat and then go back to sleep.",
      answer_id:"2"
    },
    {
      question_id:"5",
      body:"Check the time and realize its time to sleep some more",
      answer_id:"3"
    },
    {
      question_id:"6",
      body:"The rapid oxidation of a combustible substance producing heat.",
      answer_id:"1"
    },
    {
      question_id:"6",
      body:"A destructive event resulting in flames and burning materials.",
      answer_id:"2"
    },
    {
      question_id:"6",
      body:"The intense enthusiasm or passion for something or someone.",
      answer_id:"3"
    }
  ]

  getQuestions(){
    return this.questions
  }
  
  getSingleQuestion(question_id:string){
    return this.questions.find(quest=>quest.question_id===question_id) as Question
  }

  addQueston(newQuestion:Question){
    this.questions.push(newQuestion)
  }

}
