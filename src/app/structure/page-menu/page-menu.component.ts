import { LanguagesService } from './../../shared/services/languages.service';
import { Component, OnInit } from '@angular/core';
import { slideDownThenUp } from '../../shared/factories/animations-factory';

@Component({
  selector: 'page-menu',
  templateUrl: './page-menu.component.html',
  styleUrls: ['./page-menu.component.css'],
  animations: [slideDownThenUp()]
})
export class PageMenuComponent implements OnInit {

  constructor(private languageService:LanguagesService) { }

  ngOnInit() { }

  menuGroups : Array<any> = [
 /*   
    {
        name: ['Beginning', 'Iniciando', 'Awal'], closed: false, items: [
            { name: ['How To Learn', 'Como Aprender', 'Bagaimana belajar'], href: 'Beginning/HowToLearn', icon: 'fa-book' },
            { name: ['To Be Verb', 'Verbo To be', 'Kata Kerja To Be'], href: 'Beginning/ToBeVerb', icon: 'fa-book' }
        ]
    },
            { name: ['Simple Present', 'Presente simples', 'Bulang-ulang'], href: 'VerbalTenses/SimplePresent', icon: 'fa-book' },
            { name: ['Present Continuous', 'Presente Contínuo', 'Sedang Terjadi'], href: 'VerbalTenses/PresentContinuous', icon: 'fa-book' },
            { name: ['Simple Past', 'Passado Simples', 'Lampau'], href: 'VerbalTenses/SimplePast', icon: 'fa-book' },
            { name: ['Past Continuous', 'Passado Contínuo', 'Sedang terjadi waktu dulu'], href: 'VerbalTenses/PastContinuous', icon: 'fa-book' },
            { name: ['Simple Future', 'Futuro simples', 'Akan terjadi'], href: 'VerbalTenses/SimpleFuture', icon: 'fa-book' },
            { name: ['Tenses Comparison', 'Comparação de tempos', 'Perbandingan Tenses'], href: 'VerbalTenses/TensesComparison', icon: 'fa-book' }*/
    {
        name: ['Vocabulary', 'Vocabulário', 'Kosa kata'], closed: false, items: [
            { name: ['Word Albums', 'Album de Palavras', 'Album kata'], href: 'Vocabulary/WordAlbums', icon: 'fa-book' },
            { name: ['Similar Words', 'Palavras Similares', 'Kata Serupa'], href: 'Vocabulary/SimilarWords', icon: 'fa-book' }
        ]
    },
    {
        name: ['Grammar', 'Gramática', 'Tatabahasa'], closed: false, items: [
            { name: ['Verbal tenses', 'Tempos verbais', 'Tenses verbal'], href: 'VerbalTenses/TensesComparison', icon: 'fa-book' }
        ]
    },
    {
        name: ['About','Sobre','Tentang'], closed:false, items: [
            { name: ['Objective', 'Objetivo', 'Objektif'], href: 'General/Home', icon: 'fa-home' },
            { name: ['Developers', 'Desenvolvedores', 'Pengembang'], href: 'General/About', icon: 'fa-address-card' }
        ]
    },
/*
            { name: ['Flashcards', 'Flashcards', 'Flashcards'], href: 'Vocabulary/Flashcards', icon: 'fa-edit' },    {
        name: ['Community', 'Comunidade', 'Masyarakat'], closed: false, items: [
            { name: ['Forum', 'Fórum', 'Forum'], href: 'Construction', icon: 'fa-wpforms' },
            { name: ['Chat', 'Bate-papo', 'Obrolan'], href: 'Construction', icon: 'fa-comments' },
            { name: ['People', 'Pessoas', 'Orang-orang'], href: 'Construction', icon: 'fa-users' },
            { name: ['Smart profiles', 'Smart profiles', 'Smart profiles'], href: 'Construction', icon: 'fa-users' }
        ]
    },
    {
        name: ['Tests/Prototypes', 'Testes e Protótipos', 'Tes'], closed: false, items: [
            { name: ['Test Page', 'Página de testes', 'Halaman tes'], href: 'Tests', icon: 'fa-wrench' },
            { name: ['Prototype Exercise', 'Exercício Protótipo', 'Latihan Prototype'], href: 'PrototypeExercises', icon: 'fa-edit' }
        ]
    }*/
];
}
