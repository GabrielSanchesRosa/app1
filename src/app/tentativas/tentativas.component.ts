import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracaoVazio: string = '/assets/imagens/coracao_vazio.png'
  public coracaoCheio: string = '/assets/imagens/coracao_cheio.png'

  @Input() public tentativas: number = 0

  public coracoes: Coracao[] = [new Coracao(true), new Coracao(true), new Coracao(true)]

  constructor() {

  }

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas

      this.coracoes[indice - 1].cheio = false
    }
  }

  ngOnInit() {
    
  }
}
