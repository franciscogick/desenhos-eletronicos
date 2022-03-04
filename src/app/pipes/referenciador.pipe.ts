import { Pipe, PipeTransform } from '@angular/core';
import { Referencia } from '../interfaces/referencia';

@Pipe({
  name: 'referenciador'
})
export class ReferenciadorPipe implements PipeTransform {

  transform(ref: Referencia, formato: string): string {
    if (!ref) return null;
    if (!formato || formato === '') formato = 'abnt';

    let autor = '';
    let editor = '';
    let ano = 0;

    // tabela para traduzir meses;
    const months = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

    if (formato == 'abnt') {
      /*
      types[12] = 'website';
        types[17] = 'article';
        types[6] = 'book';
        types[5] = 'book-chapter';
        types[21] = 'movie';
        types[3] = 'video';
        types[28] = 'electronic-book';
        types[44] = 'electronic-book';
        types[27] = 'report';
        types[32] = 'thesis';
      */

      function createAuthors(author,obs=null):string {
        let arr = []
        if (author.length > 3) {
          let n = author[0].name.split(' ');
          if (author[0]) arr.push((n[n.length - 1]+', '+n[0][0]+'.').toUpperCase()+' et al.');
        } else {
          for (let a = 0; a < author.length; a++) {
            let n = author[a].name.split(' ');
            if (author[a]) arr.push((n[n.length - 1]+', '+n[0][0]+'.').toUpperCase());
          }
        }
        return arr.join(', ')+(obs?' '+obs:'');
      }

      if (ref.type == 'book') {
        //SOBRENOME, Nome. Título: subtítulo (se houver). Edição (se houver). Local de publicação: Editora, ano de publicação da obra
        if (ref.author) { autor = createAuthors(ref.author); }
        else if (ref.editor) { autor = createAuthors(ref.editor); }

        return `${autor} <i>${ref.title}</i>${ref.subtitle?': '+ref.subtitle:''}. ${ref.edition?ref.edition + '. ':''}${ref.pub_location}: ${ref.publisher}, ${ref.date.year}.`; 
      }
      if (ref.type == 'book-chapter') {
        //SOBRENOME, Nome. Título: subtítulo (se houver). Edição (se houver). Local de publicação: Editora, ano de publicação da obra

        autor = createAuthors(ref.author);
        editor = createAuthors(ref.book.editor,'(org.)');

        return `${autor} <i>${ref.title}</i>${ref.subtitle?': '+ref.subtitle:''}. <i>In:</i> ${editor} ${ref.book.title}. ${ref.book.edition?ref.book.edition + '. ':''}${ref.book.pub_location}: ${ref.book.publisher}, ${ref.book.date.year}.`; 
      }
      if (ref.type == 'article') {
        //SOBRENOME, Nome abreviado. Título do artigo. Título da Revista, Local de publicação, número do volume, páginas inicial-final, mês e ano.

        autor = createAuthors(ref.author);

        return `${autor} <i>${ref.title}</i>${ref.subtitle?': '+ref.subtitle:''}. ${ref.journal}, ${ref.pub_location?ref.pub_location+', ':''}${ref.volume?'n'+ref.volume + ', ':''}${ref.number?'v'+ref.number + ', ':''}${ref.pages?'p'+ref.pages + ', ':''}${ref.date.month?months[ref.date.month - 1]+'. de ':''}${ref.date.year}.${ref.url?' Disponível em: <a href="'+ref.url+'" target="_blank">'+ref.url+'</a>. Acesso em: '+ref.access.day+' '+months[ref.access.month - 1].toLowerCase()+'. '+ref.access.year+'.':''}`; 
      }
      if (ref.type == 'website') {
        //TÍTULO da matéria. Nome do site, ano. Disponível em: URL. Acesso em: dia, mês e ano.

        //AUTOR OU ORGANIZAÇÃO. Nome do site, ano. Ementa (descrição). Disponível em: URL. Acesso em: dia, mês e ano.

        if (ref.author) {
          autor = createAuthors(ref.author);
          
          return `${autor}${ref.author?'':'.'} ${ref.site}, ${ref.date.year}. <i>${ref.title}</i>. Disponível em: <a href="${ref.url}" target="_blank">${ref.url}</a>. Acesso em: ${ref.access.day} ${months[ref.access.month - 1].toLowerCase()}. ${ref.access.year}.`;
        } else {
          return `${ref.title}. ${ref.site}${(ref.date && ref.date.year)?', '+ref.date.year:''}. Disponível em: <a href="${ref.url}" target="_blank">${ref.url}</a>. Acesso em: ${ref.access.day} ${months[ref.access.month - 1].toLowerCase()}. ${ref.access.year}.`;
        }         
      }
      if (ref.type == 'video') {
        // AS MÁSCARAS protegem. [S. l.: s. n.], 2010. 1 vídeo (3 min). Publicado pelo canal wikiHow. Disponível em: <linkdoyoutube>. Acesso em: 25 ago. 2021.

        return `${ref.title}. [S. l.: s. n.], ${ref.date.year?ref.date.year:''}.  1 vídeo (${ref.duration}). ${ref.publisher?'Publicado pelo '+ ref.publisher +'. ':''}Disponível em: <a href="${ref.url}" target="_blank">${ref.url}</a>. Acesso em: ${ref.access.day} ${months[ref.access.month - 1].toLowerCase()}. ${ref.access.year}.`;
              
      }
      if (ref.type == 'thesis') {
        //SOBRENOME, Nome. Título: subtítulo (se houver). Ano de apresentação. Número de folhas ou volumes. Categoria (área de concentração) – Instituição, Local, ano da defesa.

        autor = createAuthors(ref.author);

        return `${autor} <i>${ref.title}</i>${ref.subtitle?': '+ref.subtitle:''}. ${ref.date.year}. ${ref.course.level} - ${ref.course.program} - ${ref.course.institution}, ${ref.pub_location}, ${ref.date.year}.`; 
      }
    }
  }

}
