import { Injectable } from '@angular/core';

@Injectable()
export class ExpressionService {

  constructor() { }

  albums = [
    {
        id: 0, name: "Basic Expressions", icon: "fa-cubes",
        decks: [
            {
                id: 0,
                name: "Greetings",
                words: [
                    { lang: ["Hello", "Olá", "Halo"]},
                    { lang: ["Good morning", "Bom dia", "Selamat pagi"], obs: [null, null, "all morning until 11pm"] },
                    { lang: ["Good day", "Bom dia", "Selamat siang"], obs: [null, null, "from 11am to 4pm"], show: [true,false,true] },
                    { lang: ["Good afternoon", "Boa tarde", "Selamat sore"], obs: [null, null, "after 4pm untill sunset"] },
                    { lang: ["Good evening", "Boa noite", "Selamat malam"], obs: ["Greetings", "Greetings or Before sleeping,", "Greetings, after sunset"], show: [true,false,true] },
                    { lang: ["Good night", "Boa noite", "Selamat tidur"], obs: ["Before sleeping", "Greetings or Before sleeping", "Before sleeping"] },
                    { lang: ["How are you?", "Tudo bem?", "Apa kabar?"], obs: ["Main greeting question", "Main greeting question", "Main greeting question"] },
                    { lang: ["How's it going?", "Como vai?", "-?"], obs: ["Alternative greeting question", "Alternative greeting question", "Alternative greeting question"] },
                    { lang: ["What's up?", "Beleza?", "-?"], obs: ["Slang greeting question", "Slang greeting question", "Slang greeting question"] },
                    { lang: ["I'm fine and you?", "Bem e você?", "Baik dan kamu?"], obs: ["Main greeting answer", "Main greeting answer", "Main greeting answer"] },
                    { lang: ["I'm good and you?", "Ótimo e você?", "Baik baik dan kamu?"], obs: ["Positive greeting answer", "Positive greeting answer", "Positive greeting answer"] },
                    { lang: ["Cool", "Beleza e você?", "-?"], obs: ["Slang greeting answer", "Slang greeting answer", "Slang greeting answer"] }
                ]
            },
            {
                id: 1,
                name: "Farewell",
                words: [
                    { lang: ["Bye", "Tchau", "Selamat tinggal"]},
                    { lang: ["See you", "Até logo", "Sampai ketemu"]},
                    { lang: ["See you tomorrow", "Até amanhã", "Sampai besok"]},
                    { lang: ["See you later", "Até mais tarde", "Sampai nanti"]}
                ]
            },
            {
                id: 2,
                name: "Making friends",
                words: [
                    { lang: ["What's your name?", "Qual é o seu nome?", "Siapa nama kamu?"]},
                    { lang: ["How old are you?", "Quantos anos você tem?", "Berapa umur kamu?"] },
                    { lang: ["Where are you from?", "De onde você é?", "Di mana kamu tinggal?"] },
                    { lang: ["What's your job?", "Você trabalha de que?", "Apa kamu kerja?"] }
                ]
            },
            {
                id: 3,
                name: "Making Plans",
                words: [,
                  { lang: ["What's your plan for today?", "O que você vai fazer hoje?", "Apa rancana kamu hari ini"] },
                  { lang: ["Do you wanna go shopping?", "Você quer comprar algo?", "Kamu mau beli sesuatu"] },
                  { lang: ["Do you wanna go shopping?", "Você quer comprar algo?", "Kamu mau beli sesuatu"] }
                ]
            },
            {
                id: 4,
                name: "Time questions",
                words: [,
                  { lang: ["When have you arrived?", "Quando você chegou?", "Kapan kamu tiba?"] },
                  { lang: ["When are you going?", "Quando você vai ir?", "Kapan kamu akan pergin?"] },
                  { lang: ["Since when are you in the city?", "Você quer comprar algo?", "sejak kapan kamu di kota"] }
                ]
            }
        ]
    }
  ]

  getExpressionAlbums = function () {
      return this.albums;
  }
}
