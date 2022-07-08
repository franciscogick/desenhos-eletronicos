import { Pipe, PipeTransform } from '@angular/core';
import { Referencia } from '../interfaces/referencia';

@Pipe({
  name: 'citador'
})
export class CitadorPipe implements PipeTransform {

  transform(ref: Referencia, formato:string, pg: string, min: boolean, abrv: string, obs: string, par: boolean = true, distinct:string): string {
    // ref - referência a formatar
    // formato - em que formato vai formatar, padrão 'abnt'
    // min: boolean - se faz citação reduzida, apenas ano, página e observação
    // abrv - se faz citação abreviada, p. ex. 'op. cit.' ou 'idem' no lugar
    // obs - observação
    // par: boolean - se tem parênteses ou não 
    // distinct - caso haja mais de uma ref do mesmo autor e ano, aquela letrinha no ano, p. ex. '2009a'. 
    
    if (!ref) return null;
    if (!formato || formato === '') formato = 'abnt';
    if (!pg || pg === '') pg = null;
    if (!obs || obs === '') obs = null;
    if (!distinct) distinct = '';

    let autor = '';
    let ano = 0;

    if (formato == 'abnt') {

      // autor
      if (ref.author) {
        if (ref.author.length <= 3) {
          let arr = []
          for (let a = 0; a < 3; a++) {
            if (ref.author[a]) {
              if (ref.author_full_name) arr.push(ref.author[a].name) 
              else arr.push(ref.author[a].name.split(' ')[ref.author[a].name.split(' ').length - 1].toUpperCase());
            }
          }
          autor = arr.join('; ');
        } else {
          autor = ref.author[0].name.split(' ')[ref.author[0].name.split(' ').length - 1].toUpperCase() + ' et al.'
        }
      } else if (ref.editor) {
        if (ref.editor.length <= 3) {
          let arr = []
          for (let a = 0; a < 3; a++) {
            if (ref.editor[a]) arr.push(ref.editor[a].name.split(' ')[ref.editor[a].name.split(' ').length - 1]);
          }
          autor = arr.join('; ')+' (org.)';
        } else {
          autor = ref.editor[0].name.split(' ')[ref.editor[0].name.split(' ').length - 1] + 'et al.'
        }
      } else if (ref.type == 'website' && ref.site) {
        autor = ref.site;
      }

      // ano
      ano = ref.date?.year || ref.access.year;

      if (abrv !== null && min) return `${par ? '(':''}${abrv}${pg?', '+pg:''}${obs ? ', '+obs:''}${par ? ')':''}`;

      if (min) return `${par ? '(':''}${ano}${pg ? ', '+pg:''}${obs ? ', '+obs:''}${par ? ')':''}`;
      if (abrv !== null) return `${par ? '(':''}${autor}, ${abrv}${pg?', '+pg:''}${obs ? ', '+obs:''}${par ? ')':''}`;

      return `${par ? '(':''}${autor}, ${ano}${distinct}${pg ? ', '+pg:''}${obs ? ', '+obs:''}${par ? ')':''}`;
    }
  }

}
