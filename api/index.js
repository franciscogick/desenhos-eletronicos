const app = require('express')()

/*
 *
 * API 
 * 
*/

//DATA
const nodes = [

    {id: 1, label: 'Capa', name: 'capa', descricao: null, color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}},
    {id: 2, label: 'Epígrafe', name: 'epigrafe', descricao: null, color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}},
    {id: 3, label: 'Resumo', name: 'resumo', descricao: null, color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}},
    {id: 7, label: 'Abstract', name: 'abstract', descricao: null, color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}},
    {id: 4, label: 'Referências', name: 'referencias', descricao: null, color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}},
    {id: 6, label: 'Lista de figuras', name: 'lista-de-figuras', descricao: null, color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}},
    
    //lexias do rizoma
    {id: 100, label: 'Prólogo', name: 'prologo', descricao: 'Breve nota biográfica.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},
    
    {id: 101, label: 'Introdução', name: 'introducao', descricao: '', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},

        {id: 1011, label: 'Isso que te escrevi', name: 'isso-que-te-escrevi', descricao: 'Notas sobre o trabalho.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'}, 

    {id: 102, label: 'A pedra de Eurípedes', name: 'a-pedra-de-euripedes', descricao: 'Reflexões sobre as transformações do texto teatral ao longo da história pela transformação das tecnologias de escrita.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},

        //{id: 1021, label: 'Efemeridade/Obsolescência', name: 'efemeridade', descricao: 'Sobre a efemeridade das criações em Literatura Digital.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},

    {id: 103, label: 'Novas grafias', name: 'novas-grafias', descricao: 'Sobre as transformações nas relações de escrita e leitura em nossa interação com as tecnologias digitais que abrem espaço para uma diversidade de criações de literatura digital.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia', type:'lexia', group: 2},

    {id: 104, label: 'Dramaturgias digitais', name: 'dramaturgias-digitais', descricao: 'Análise de dramaturgias digitais.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia', group: 1},
        
        //{id: 1041, label: 'Dramaturgias digitais', name: 'duas-entradas', fragment: 'corpus', descricao: 'Análise de dramaturgias digitais.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia', group: 1},

            {id: 10411, label: 'Os Hiperdramas de Charles Deemer', name: 'hiperdramas-de-charles-deemer', descricao: 'Reflexões sobre hiperdramas, textos dramáticos hipertextuais, a partir de <span class="titulo-obra">Last Songs of Violeta Parra</span>, de Charles Deemer.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia', group: 1},

            // {id: 10412, label: 'Escuro', name: 'escuro', descricao: 'Escuro, um mapa hipertextual escrito por Leonardo Moreira.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia', group: 1},

            {id: 10413, label: 'TRANS.MISSION [A.DIALOGUE]', name: 'transmission-a-dialogue', descricao: 'Análise de TRANS.MISSION [A.DIALOGUE], de J. R. Carpenter, um diálogo generativo.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia', group: 1},

            {id: 10414, label: 'I\'ve seen the future and it\' a robot', name: 'ive-seen-the-future-and-its-a-robot', descricao: 'Reflexões sobre o processo de escrita dramatúrgica utilizando tecnologias de inteligência artificial a partir de duas criações <span class="titulo-obra">AI: when a robot writes a play</span> e <span class="titulo-obra">AI</span>.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia', group: 1},

    {id: 105, label: 'Novas Grafias 2', name: 'novas-grafias-2', descricao: 'Mapeamento de características das dramaturgias digitais.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},

        //{id: 1051, label: 'Dramaturgia e código', name: 'dramaturgia-codigo', descricao: 'Análise da performance online HIPERGAIVOTA e especulação sobre possíveis relações entre código-fonte e dramaturgia.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},
    
    {id: 107, label: 'Considerações finais', name: 'consideracoes-finais', descricao: 'Considerações finais.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},
    

    {id: 106, label: 'Epílogo', name: 'epilogo', descricao: 'Reflexões a escrita de uma dramaturgia digital.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},
        
        {id: 1061, label: 'Da amabilidade dos sensores de presenca', name: 'da-amabilidade-dos-sensores-de-presenca', descricao: 'Uma cena.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},
            
        //{id: 1062, label: 'Mickey Mouse está ficando velho', name: 'mickey-mouse-esta-ficando-velho', descricao: 'Uma cena.', color:{background:'#FFF',border:'#fff', highlight:'#FF055C'}, type:'lexia'},
];
//#46FF9C
const edges = [
    {from: 7, to: 3, dashes: true},
    {from: 100, to: 101, dashes: true},
    {from: 101, to: 1011, dashes: true},
    {from: 101, to: 103, dashes: true},
    {from: 102, to: 101, dashes: true},
    {from: 102, to: 103, dashes: true},
    {from: 102, to: 105, dashes: true},
    //{from: 102, to: 1021, dashes: true},
    {from: 103, to: 104, dashes: true},
    {from: 103, to: 105, dashes: true},
    {from: 104, to: 101, dashes: true},
    {from: 104, to: 102, dashes: true},
    {from: 104, to: 105, dashes: true},
    //{from: 1041, to: 10411, dashes: true},
    //{from: 1041, to: 10412, dashes: true},
    //{from: 1041, to: 10413, dashes: true},
    //{from: 1041, to: 10414, dashes: true},
    {from: 104, to: 10411, dashes: true},
    //{from: 104, to: 10412, dashes: true},
    {from: 104, to: 10413, dashes: true},
    {from: 104, to: 10414, dashes: true},
    {from: 105, to: 101, dashes: true},
    //{from: 105, to: 106, dashes: true},
    //{from: 105, to: 1051, dashes: true},
    {from: 106, to: 1061, dashes: true},
    //{from: 106, to: 1062, dashes: true},
    {from: 106, to: 100, dashes: true},
    {from: 107, to: 105, dashes: true},
    {from: 107, to: 106, dashes: true},
    {from: 10411, to: 10413, dashes: true},
    {from: 10411, to: 10414, dashes: true},
    {from: 10413, to: 10414, dashes: true},

];

const conceitos = [
    {name:'mimesis',title:'mimese',content:'A <i>mimese</i> é a imitação ou a representação de uma coisa. (...) Na <i>Poética</i> de ARISTÓTELES, a produção artística (<i>poiesis</i>) é definida como <i>imitação</i> (<i>mimese</i>) da ação (<i>práxis</i>). (p.241)',reference:'PAVIS, P. <i>Dicionário de Teatro</i>. 3ed. São Paulo: Perspectiva, 2008.'},
    {name:'rede-neural',title:'rede neural',content:'Uma rede neural é um modelo computacional baseado na estrutura do sistema nervoso central de animais, principalmente a do cérebro humano.',reference:'Redes Neurais Artificiais. Disponível em: <a href="https://sites.icmc.usp.br/andre/research/neural/">https://sites.icmc.usp.br/andre/research/neural/</a>. Acesso em: 12 de dezembro de 2020.'},
    {name:'hiperdrama',title:'hiperdrama',content:'?',reference:'?'},
    {name:'suporte',title:'suporte',content:'?',reference:'?'},
]

const figuras = [
    {name:'YCHI-site-artista',file:'YCHI-site-artista.gif',caption:'Fragmento de <span class="titulo-obra">ARTIST\'S STATEMENT N0. 45,730,944: THE PERFECT ARTISTIC WEB SITE</span> do YOUNG-HAE CHANG HEAVY INDUSTRIES',reference:'ArtistStatement-2020',type:'lexia',media:'image',lexia:'desenhos-eletronicos'},
    {name:'last-song',file:'last-song-menu.jpg',caption:'Página inicial de <span class="titulo-obra">The Last Song of Violeta Parra</span>',reference:'Deemer-1996b',type:'lexia',media:'image',lexia:'last-song-of-violeta-parra'},
    {name:'last-song-flowchart',file:'last-song-flowchart.jpg',caption:'<span class="estrangeirismo">Flowchart</span> de <span class="titulo-obra">The Last Song of Violeta Parra</span>',reference:'Deemer-1996b',type:'lexia',media:'image',lexia:'last-song-of-violeta-parra'},
    {name:'transmission',file:'transmission.jpg',caption:'<span class="titulo-obra">TRANS.MISSION [A.DIALOGUE]</span> de J.R. Carpenter',reference:'Carpenter-2021',type:'lexia',media:'image',lexia:'transmission-a-dialogue'},
    {name:'ai',file:'ai-cartaz.jpg',caption:'Cartaz de divulgação de <span class="titulo-obra">AI: when a robot writes a play</span>',reference:'THEAITRE-2020',type:'lexia',media:'image',lexia:'ai-when-a-robot-writes-a-play'},
    {name:'ai-teaser',file:'8ho5sXiDX_A',caption:'Vídeo de divulgação de <span class="titulo-obra">AI: when a robot writes a play</span>',reference:'THEAITRE-2020',type:'lexia',media:'youtube',lexia:'ai-when-a-robot-writes-a-play'},
    {name:'liberdade',file:'Liberdade1.jpg',caption:'<span class="titulo-obra">Liberdade</span>, dirigido por Alckmar Santos e Chico Marinho.',reference:'CICLOPE-2015',type:'lexia',media:'image',lexia:'novas-grafias'},
    {name:'tombeau-mallarmé',file:'desouza-letombeaudemallarme_2.jpg',caption:'<span class="titulo-obra">Le Tombeau de Mallarmé</span>, de Erthos Albino de Souza.',reference:'LITELAT-2019',type:'lexia',media:'image',lexia:'novas-grafias'},
    {name:'tombeau-mallarme',file:'desouza-letombeaudemallarme_2.jpg',caption:'<span class="titulo-obra">Le Tombeau de Mallarmé</span>, de Erthos Albino de Souza.',reference:'LITELAT-2019',type:'lexia',media:'image',lexia:'novas-grafias'},
    {name:'patchwork-girl',file:'screen-shot-2019-07-27-at-8.13.54-pm.jpg',caption:'Capa de <span class="titulo-obra">Patchwork Girl</span>, de Shelley Jackson.',reference:'Short-2019',type:'lexia',media:'image',lexia:'novas-grafias'},
    {name:'cunnilingus',file:'cunnilingus3.jpg',caption:'Quadro de <span class="titulo-obra">Cunnilingus na Coreia do Norte de YOUNG-HAE CHANG HEAVY INDUSTRIES.',reference:'YHCHI-2020',type:'lexia',media:'image',lexia:'novas-grafias'},
    {name:'veredasbot',file:'veredasBot1.jpg',caption:'',reference:'Veredasbot-2020',type:'lexia',media:'image',lexia:'novas-grafias'},
    {name:'hipolito-euripedes',file:'hipolito-euripedes-POxy.v0044.n3152.a.01.hires.jpg',caption:'Fragmento de <span class="titulo-obra">Hipólito</span> de Eurípedes encontrado nos Papiros de Oxyrinco.',reference:'Poxy-1976',type:'lexia',media:'image',lexia:'a-pedra-de-euripedes'},
    {name:'hipolito-seneca',file:'hipolito-seneca.jpg',caption:'Página de impressão do <span class="titulo-obra">Hipólito</span> de Sêneca com anotações (século XV).',reference:'Seneca-1493',type:'lexia',media:'image',lexia:'a-pedra-de-euripedes'},
    {name:'hecuba-euripedes',file:'manuscriptHecuba-bl_uk.jpg',caption:'Página de um manuscrito medieval de <span class="titulo-obra">Hécuba</span> de Eurípedes.',reference:'Bl-2021',type:'lexia',media:'image',lexia:'a-pedra-de-euripedes'},
    {name:'phedre-racine',file:'phedre-montagem.jpg',caption:'Folha de rosto e página 2 da primeira impressão de <span class="titulo-obra">Phèdre et Hippolyte</span> de Racine.',reference:'Racine-1677',type:'lexia',media:'image',lexia:'a-pedra-de-euripedes'},

];


/*
Liberdade1.jpg
cunnilingus3.jpg
desouza-letombeaudemallarme_2.jpg
diagramaLastSong2.jpg
hipolito-euripedes-POxy.v0044.n3152.a.01.hires.jpg
hipolito-seneca.jpg
last-song-menu.jpg
last-song-menu.png
manuscriptHecuba-bl_uk.jpg
phedre-montagem.jpg
print-LastSong.jpg
print-transmission.jpg
screen-shot-2019-07-27-at-8.13.54-pm.jpg
transmission.jpg
veredasBot1.jpg
*/

const referencias = [
    {"rec_number":455,
    "type":"article",
    "author":[
        {"name":"Marcus Mota"}
    ],
    "number":1,
    "pub_location":"Brasília",
    "electronic_resource_num":"10.26512/dramaturgias.v1i1.8785",
    "language":"Portuguese",
    "journal":"Dramaturgias",
    "volume":1,
    "date":{"year":2016,"month":9,"day":31},
    "title":"Uma Nova Revista ?",
    "url":"https://periodicos.unb.br/index.php/dramaturgias/article/view/8785",
    "access":{"year":2021,"month":01,"day":13},
    "textual_id":"Mota-2016"
},
/*{
    "rec_number":454,
    "type":"movie",
    "author":[
        {"name":"David Slade"}
    ],
    "auth_address":"NETFLIX",
    "publisher":"NETFLIX",
    "duration":"90m",
    "date":{"year":2018},
    "title":"BLACK MIRROR: BANDERSNATCH",
    "textual_id":"Slade-2018"
},*/
{
    "rec_number":453,
    "type":"book-chapter",
    "author":[
        {"name":"Bertrand Gervais"}
    ],
    "book": {
        "editor":[
            {"name":"Susan Schreibman"},
            {"name":"Ray Siemens"}
        ],
        "pub_location":"Oxford",
        "publisher":"Blackwell",
        "title":"A Companion to Digital Literary Studies",
        "date":{"year":2008}
    },
    "date":{"year":2008},
    "title":"Is There a Text on This Screen? Reading in an Era of Hypertextuality",
    "textual_id":"Gervais-2008",
    "cited":true
},
{
    "rec_number":483,
    "type":"book",
    "author":[
        {"name":"Patrice Pavis"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Perspectiva",
    "title":"O teatro no cruzamento de culturas",
    "date":{"year":2008},
    "textual_id":"Pavis-2008",
    "cited":true
},
{
    "rec_number":484,
    "type":"book",
    "author":[
        {"name":"Maurice Blanchot"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Martins Fontes",
    "title":"O livro por vir",
    "date":{"year":2005},
    "textual_id":"Blanchot-2005",
    "cited":true
},
{
    "rec_number":451,
    "type":"video",
    "author":[
        {"name":"Young-Hae Chang Heavy Industries"}
    ],
    "duration":"6m32s",
    "publisher":"Young-Hae Chang Heavy Industries",
    "date":{"year":2020},
    "title":"CUNNILINGUS NA COREIA DO NORTE",
    "url":"https://www.yhchang.com/CUNNILINGUS_NA_COREIA_DO_NORTE_V.html",
    "access":{"year":2020,"month":12,"day":03},
    "textual_id":"YHCHI-2020"
},
{
    "rec_number":449,
    "type":"website",
    "site":"NET ART ANTHOLOGY",
    "title":"SAMSUNG",
    "url":"https://anthology.rhizome.org/samsung",
    "access":{"year":2020,"month":09,"day":12},
    "textual_id":"SAMSUNG-2020",
    "cited":true
},
{
    "rec_number":467,
    "type":"website",
    "site":"YOUNG-HAE CHANG HEAVY INDUSTRIES",
    "title":"CUNNILINGUS NA COREIA DO NORTE",
    "url":"https://www.yhchang.com/CUNNILINGUS_NA_COREIA_DO_NORTE_V.html",
    "access":{"year":2020,"month":09,"day":12},
    "textual_id":"CUNNILINGUS-2020",
    "cited":true
},
{
    "rec_number":485,
    "type":"website",
    "site":"YOUNG-HAE CHANG HEAVY INDUSTRIES",
    "title":"ARTIST'S STATEMENT N0. 45,730,944: THE PERFECT ARTISTIC WEB SITE",
    "url":"https://www.yhchang.com/DECLARACION_DE_ARTISTA_V.html",
    "access":{"year":2020,"month":09,"day":12},
    "textual_id":"ArtistStatement-2020",
    "cited":true
},
{
    "rec_number":462,
    "type":"website",
    "author":[
        {"name":"Barbara Bridger"}
    ],
    "site":"Exeunt Magazine",
    "title":"Dramaturgy and the Digital",
    "date":{"year":2013},
    "url":"http://exeuntmagazine.com/features/dramaturgy-and-the-digital/",
    "access":{"year":2021,"month":02,"day":12},
    "textual_id":"BRIDGER-2013",
    "cited":true
},
{
    "rec_number":462,
    "type":"website",
    "author":[
        {"name":"Dene Grigar"}
    ],
    "site":"Electronic Literature Lab",
    "title":"Saving Flash Works: Report #1",
    "date":{"year":2021},
    "url":"http://dtc-wsuv.org/wp/ell/2021/01/31/saving-flash-works-report-1/",
    "access":{"year":2021,"month":02,"day":03},
    "textual_id":"Grigar-2021",
    "cited":true
},
//Bootz, P. (2005). The Problematic of Form Transitoire Observable, a Laboratory for Emergent Programmed Art. Dichtung Digital, 1. http://www.dichtung-digital.de/2005/1/Bootz/index.htm
{
    "rec_number":475,
    "type":"website",
    "author":[
        {"name":"Philippe Bootz"}
    ],
    "site":"Dichtung Digital",
    "title":"The Problematic of Form Transitoire Observable, a Laboratory for Emergent Programmed Art",
    "date":{"year":2005},
    "url":"http://www.dichtung-digital.de/2005/1/Bootz/index.htm",
    "access":{"year":2020,"month":04,"day":12},
    "textual_id":"Bootz-2005",
    "cited":true
},
{
    "rec_number":471,
    "type":"website",
    "author":[
        {"name":"Mark Sample"}
    ],
    "site":"Medium",
    "title":"A Protest Bot Is a Bot So Specific You Can’t Mistake It for Bullshit: A Call for Bots of Conviction",
    "date":{"year":2014},
    "url":"https://medium.com/@samplereality/a-protest-bot-is-a-bot-so-specific-you-cant-mistake-it-forbullshit-90fe10b7fbaa",
    "access":{"year":2021,"month":02,"day":12},
    "textual_id":"Sample-2014",
    "cited":true
},
{
    "rec_number":447,
    "type":"website",
    "pages":"1-3",
    "site":"CICLOPE",
    "date":{"year":2015,"month":2,"day":12},
    "title":"Liberdade – ambiente poético 3d imersivo",
    "url":"https://www.ciclope.com.br/liberdade/2015",
    "access":{"year":2020,"month":10,"day":2},
    "textual_id":"CICLOPE-2015",
    "cited":true
},
{
    "rec_number":446,
    "type":"book-chapter",
    "author":[
        {"name":"Carolyn Guertin"}
    ],
    "book": {
        "editor":[
            {"name":"Susan Schreibman"},
            {"name":"Ray Siemens"}
        ],
        "pub_location":"Oxford",
        "publisher":"Blackwell",
        "title":"A Companion to Digital Literary Studies",
        "date":{"year":2008}
    },
    "date":{"year":2008},
    "title":"Handholding, Remixing, and the Instant Replay",
    "textual_id":"Guertin-2008",
    "cited":true
},
{
    "rec_number":445,
    "type":"electronic-book",
    "editor":[
        {"name":"Susan Schreibman"},
        {"name":"Ray Siemens"}
    ],
    "pub_location":"Oxford",
    "publisher":"Blackwell",
    "date":{"year":2008},
    "title":"A Companion to Digital Literary Studies",
    "url":"http://www.digitalhumanities.org/companionDLS/",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"Schreibman-2008"
},
{
    "rec_number":443,
    "type":"website",
    "author":[
        {"name":"Shelley Jackson"}
    ],
    "pages":"1-13",
    "site":"web.mit.edu",
    "date":{"year":1997},
    "title":"Stitch Bitch: the patchwork girl",
    "url":"http://web.mit.edu/m-i-t/articles/jackson.html",
    "access":{"year":2020,"month":03,"day":13},
    "textual_id":"Jackson-1997",
    "cited":true
},
{
    "rec_number":442,
    "type":"website",
    "author":[
        {"name":"Jill Walker Rettberg"}
    ],
    "pages":"1-11",
    "site":"Dichtung Digital",
    "date":{"year":2012},
    "title":"Electronic Literature Seen from a Distance",
    "url":"http://www.dichtung-digital.org/2012/41/walker-rettberg/walker-rettberg.htm",
    "access":{"year":2021,"month":2,"day":6},
    "textual_id":"Rettberg-2012"
},
{
    "rec_number":450,
    "type":"website",
    "site":"Electronic Literature Collection",
    "date":{"year":2016},
    "title":"Electronic Literature Collection - volume 3",
    "url":"https://collection.eliterature.org/3",
    "access":{"year":2020,"month":02,"day":15},
    "textual_id":"ELC-2016",
    "cited":true
},
{
    "rec_number":451,
    "type":"website",
    "site":"Electronic Literature Collection",
    "date":{"year":2011},
    "title":"Electronic Literature Collection - volume 2",
    "url":"https://collection.eliterature.org/2",
    "access":{"year":2020,"month":02,"day":17},
    "textual_id":"ELC-2011"
},
{
    "rec_number":452,
    "type":"website",
    "site":"Electronic Literature Collection",
    "date":{"year":2006},
    "title":"Electronic Literature Collection - volume 1",
    "url":"https://collection.eliterature.org/1",
    "access":{"year":2020,"month":02,"day":11},
    "textual_id":"ELC-2006"
},
{
    "rec_number":453,
    "type":"website",
    "site":"Antología litElat",
    "date":{"year":2019},
    "title":"Antología litElat Volumen 1",
    "url":"http://antologia.litelat.net/",
    "access":{"year":2020,"month":04,"day":03},
    "textual_id":"LITELAT-2019",
    "cited":true
},
{
    "rec_number":441,
    "type":"book",
    "author":[
        {"name":"Italo Calvino"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Companhia das Letras",
    "date":{"year":1990},
    "title":"As cidades invisíveis",
    "textual_id":"Calvino-1990",
    "cited":true
},
{
    "rec_number":473,
    "type":"book",
    "author":[
        {"name":"João Guimarães Rosa"}
    ],
    "pub_location":"Rio de Janeiro",
    "publisher":"Editora Nova Aguilar",
    "date":{"year":1994},
    "title":"Grande Sertão: Veredas",
    "textual_id":"Rosa-1994",
    "cited":true
},
{
    "rec_number":477,
    "type":"book",
    "author":[
        {"name":"Clarice Lispector"}
    ],
    "pub_location":"Rio de Janeiro",
    "publisher":"Rocco",
    "date":{"year":1998},
    "title":"Água Viva",
    "textual_id":"Lispector-1998",
    "cited":true
},
{
    "rec_number":466,
    "type":"book",
    "author":[
        {"name":"Ronald J. Diebert"}
    ],
    "pub_location":"Nova York",
    "publisher":"Columbia University Press",
    "date":{"year":1997},
    "title":"Parchment, Printing, and Hypermedia",
    "sub_title":"Communication in World",
    "textual_id":"Diebert-1997",
    "cited":true
},
{
    "rec_number":478,
    "type":"book",
    "author":[
        {"name":"Gilles Deleuze"},
        {"name":"Félix Guattari"},
    ],
    "pub_location":"São Paulo",
    "publisher":"Editora 34",
    "date":{"year":2011},
    "title":"Mil Platôs vol. 1",
    "textual_id":"Deleuze+Guattari-2011",
    "cited":true
},
{
    "rec_number":480,
    "type":"book",
    "author":[
        {"name":"Roland Barthes"},
    ],
    "pub_location":"Oxford",
    "publisher":"Blackwell",
    "date":{"year":1990},
    "title":"S/Z",
    "textual_id":"Barthes-1990",
    "cited":true
},
{
    "rec_number":479,
    "type":"book",
    "author":[
        {"name":"ABNT - Associação Brasileira de Normas Técnicas"},
    ],
    "pub_location":"Rio de Janeiro",
    "publisher":"ABNT",
    "date":{"year":2011},
    "title":"ABNT NBR 14724 - Informação e documentação — Trabalhos acadêmicos — Apresentação",
    "textual_id":"ABNT-2011",
    "cited":true
},
{
    "rec_number":439,
    "type":"book",
    "author":[
        {"name":"C Benthien"},
        {"name":"J Lau"},
        {"name":"M M Marxsen"}
    ],
    "pub_location":"Nova York",
    "publisher":"Routeledge",
    "date":{"year":2019},
    "title":"The Literariness of Media Art",
    "url":"http://scholar.google.comjavascript:void(0)",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"Benthien-2019"
},
{
    "rec_number":436,
    "type":"article",
    "author":[
        {"name":"Fabiano Tadeu Grazioli"}
    ],
    "number":1,
    "pages":"337-352",
    "electronic_resource_num":"10.15210/rle.v22i1.16163",
    "language":"Portuguese",
    "journal":"Revista Linguagem & Ensino",
    "volume":22,
    "date":{"year":2019,"month":4,"day":6},
    "title":"O texto dramático e a cena teatral: elementos de análise a partir de Patrice Pavis",
    "url":"https://periodicos.ufpel.edu.br/ojs2/index.php/rle/article/view/16163",
    "access":{"year":2020,"month":6,"day":12},
    "textual_id":"Grazioli-2019",
    "cited":true
},
{
    "rec_number":435,
    "type":"article",
    "author":[
        {"name":"Rudolf Rosa"},
        {"name":"Ondřej Dušek"},
        {"name":"Tom Kocmi"},
        {"name":"David Mareček"},
        {"name":"Tomáš Musil"},
        {"name":"Patrícia Schmidtová"},
        {"name":"Dominik Jurko"},
        {"name":"Ondřej Bojar"},
        {"name":"Daniel Hrbek"},
        {"name":"David Košťák"},
        {"name":"Martina Kinská"},
        {"name":"Josef Doležal"},
        {"name":"Klára Vosecká"}
    ],
    "journal":"arXiv",
    "date":{"year":2020,"month":5,"day":25},
    "title":"THEaiTRE: Artificial Intelligence to Write a Theatre Play",
    "url":"https://arxiv.org/abs/2006.14668v1",
    "access":{"year":2020,"month":11,"day":9},
    "textual_id":"Rosa-2020",
    "cited":true
},
{
    "rec_number":431,
    "type":"article",
    "author":[
        {"name":"Nahla Sadek Elgawahergy"},
        {"name":"Nadia Solima"},
        {"name":"Mustafa Riad"}
    ],
    "number":1,
    "pages":"284-331",
    "electronic_resource_num":"10.21608/aafu.2014.9254",
    "publisher":"Ain Shams University",
    "journal":"Annals of the Faculty of Arts",
    "volume":42,
    "date":{"year":2014,"month":0},
    "title":"Hyperdrama as a New Kind of Dramatic Texts",
    "url":"https://aafu.journals.ekb.eg/article_9254_en.html",
    "access":{"year":2020,"month":07,"day":23},
    "textual_id":"Elgawahergy-2014"
},
{
    "rec_number":430,
    "type":"book",
    "author":[
        {"name":"Jean-Pierre Sarrazac"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Cosac-Naify",
    "date":{"year":2014},
    "title":"Léxico do drama moderno e contemporâneo",
    "textual_id":"Sarrazac-2014",
    "cited":true
},
{
    "rec_number":429,
    "type":"book",
    "author":[
        {"name":"Joseph Danan"}
    ],
    "pages":"1-128",
    "pub_location":"Cidade do México",
    "publisher":"Paso de Gato",
    "date":{"year":2012},
    "title":"Qué es la dramaturgia y otros ensayos",
    "textual_id":"Danan-2012",
    "cited":true
},
{
    "rec_number":427,
    "type":"article",
    "author":[
        {"name":"Teresa López Pellisa"}
    ],
    "number":11,
    "pages":"24-39",
    "language":"Spanish",
    "publisher":"Universidad de Granada",
    "pub_location":"Granada",
    "journal":"Revista Letral",
    "date":{"year":2013},
    "title":"La pantalla en escena: ¿Es teatro el ciberteatro?",
    "url":"https://dialnet.unirioja.es/servlet/articulo?codigo=5370532&info=resumen&idioma=SPA",
    "access":{"year":2020,"month":11,"day":5},
    "textual_id":"Pellisa-2013",
    "cited":true
},
{
    "rec_number":425,
    "type":"article",
    "author":[
        {"name":"Anxo Abuín González"}
    ],
    "pages":"29-56",
    "journal":"Revista Signa",
    "volume":17,
    "date":{"year":2008},
    "title":"Teatro y nuevas tecnologías: conceptos básicos",
    "url":"http://e-spacio.uned.es/fez/eserv/bibliuned:signa-2008-17-0002/Documento.pdf",
    "access":{"year":2020,"month":05,"day":13},
    "textual_id":"Gonzalez-2008",
    "cited":true
},
{
    "rec_number":424,
    "type":"article",
    "author":[
        {"name":"E G Duarte"}
    ],
    "journal":"Cibertextualidades",
    "pub_location":"Porto",
    "date":{"year":2007},
    "title":"Drama ex machina: A teatralidade da tecnologia na peça AlletSator",
    "url":"https://bdigital.ufp.pt/bitstream/10284/857/1/cibertxt2_95-101_duarte.pdf",
    "access":{"year":2019,"month":12,"day":05},
    "textual_id":"Duarte-2007"
},
{
    "rec_number":422,
    "type":"article",
    "author":[
        {"name":"Raine Koskimaa"}
    ],
    "number":4,
    "pages":1,
    "language":"Spanish",
    "publisher":"Universitat Oberta de Catalunya",
    "journal":"UOC Papers: revista sobre la sociedad del conocimiento",
    "date":{"year":2007},
    "title":"El reto del cibertexto: enseñar literatura en el mundo digital",
    "url":"https://dialnet.unirioja.es/servlet/articulo?codigo=2271480&info=resumen&idioma=SPA",
    "access":{"year":2020,"month":06,"day":03},
    "textual_id":"Koskimaa-2007"
},
{
    "rec_number":421,
    "type":"article",
    "author":[
        {"name":"L Borràs Castanyer"}
    ],
    "date":{"year":2012},
    "journal":"Biblioteca Virtual Miguel de Cervantes",
    "pub_location":"Alicante",
    "title":"La literatura digital bajo el estigma de la comparación",
    "url":"http://www.cervantesvirtual.com/research/la-literatura-digital-bajo-el-estigma-de-la-comparacion/ba325fbe-f4e6-4816-8bcb-80f325fb0390.pdf",
    "access":{"year":2020,"month":04,"day":13},
    "textual_id":"Castanyer-2012"
},
/*{
    "rec_number":419,
    "type":"article",
    "author":[
        {"name":"Veronica Gomez"}
    ],
    "number":110,
    "electronic_resource_num":"10.30687/Ri/2037-6588/2018/110/004",
    "journal":"Revista Rassegna Iberística",
    "volume":41,
    "date":{"year":2018},
    "title":"Leer mirando. Elementos para la comprensión y el análisis de la literatura digital latinoamericana",
    "url":"https://dialnet.unirioja.es/servlet/articulo?codigo=6853037",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"GOMEZ-2018"
},*/
/*{
    "rec_number":417,
    "type":"article",
    "author":[
        {"name":"Laura Lozano Marín"}
    ],
    "number":28,
    "pages":"307-329",
    "language":"Spanish",
    "publisher":"Centro de Investigación de Semiótica Literaria, Teatral y Nuevas Tecnologías",
    "journal":"Signa: Revista de la Asociación Española de Semiótica",
    "date":{"year":2019},
    "title":"An approach to electronic poetry written by women in spanish: Belén Gache y Alex Saum",
    "url":"https://dialnet.unirioja.es/servlet/articulo?codigo=6975701&info=resumen&idioma=SPA",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"Marín-2019"
},*/
{
    "rec_number":459,
    "type":"article",
    "author":[
        {"name":"María Ángeles Grande Rosales"}
    ],
    "number":2,
    "pages":"8-17",
    "journal":"Caracteres",
    "volume":4,
    "date":{"year":2015,"month":11,"day":26},
    "url":"http://revistacaracteres.net/revista/vol4n2noviembre2015/mundosdesvanecen",
    "access":{"year":2020,"month":09,"day":23},
    "title":"Mundos que se desvanecen. Tecnoteatros y performatividad",
    "textual_id":"ROSALES-2015",
    "cited":true
},
{
    "rec_number":460,
    "type":"article",
    "author":[
        {"name":"Jerome Fletcher"}
    ],
    "number":2,
    "pages":"18-42",
    "journal":"Caracteres",
    "volume":4,
    "date":{"year":2015,"month":05,"day":10},
    "url":"http://revistacaracteres.net/revista/vol4n2noviembre2015/performingdigital",
    "access":{"year":2020,"month":09,"day":23},
    "title":"Performing Digital Literature",
    "textual_id":"FLETCHER-2015",
    "cited":true
},
{
    "rec_number":415,
    "type":"article",
    "author":[
        {"name":"Rejane Cristina Rocha"},
        {"name":"Nair Renata Amâncio"}
    ],
    "number":1,
    "pages":"123-136",
    "electronic_resource_num":"10.5007/1807-9288.2019v15n1p123",
    "language":"Portuguese",
    "journal":"Texto Digital",
    "volume":15,
    "date":{"year":2019,"month":7,"day":21},
    "title":"A compreensão e a legitimação da literatura digital brasileira: o caso da revista Texto Digital",
    "url":"https://periodicos.ufsc.br/index.php/textodigital/article/view/1807-9288.2019v15n1p123",
    "access":{"year":2020,"month":11,"day":20},
    "textual_id":"Rocha-2019",
    "cited":true
},
{
    "rec_number":414,
    "type":"article",
    "author":[
        {"name":"Márcio Roberto do Prado"}
    ],
    "number":47,
    "pages":"19-47",
    "electronic_resource_num":"10.1590/2316-4018472",
    "journal":"Estudos de Literatura Brasileira Contemporânea",
    "date":{"year":2016,
    "month":5},
    "title":"Faces da literatura contemporânea: o caso da poesia viral",
    "url":"http://www.scielo.br/scielo.php?script=sci_arttext&pid=S2316-40182016000100019&lng=pt&tlng=pt",
    "access":{"year":2020,"month":10,"day":10},
    "textual_id":"Prado-2016"
},
{
    "rec_number":413,
    "type":"article",
    "author":[
        {"name":"Alamir Aquino Corrêa"}
    ],
    "number":47,
    "pages":"119-140",
    "electronic_resource_num":"10.1590/2316-4018476",
    "language":"Portuguese",
    "publisher":"Grupo de Estudos em Literatura Brasileira Contemporânea",
    "journal":"Estudos de Literatura Brasileira Contemporânea",
    "volume":16,
    "date":{"year":2016,"month":5},
    "title":"Literatura: contexto digital, hipercolonialismo e materialidades",
    "url":"http://www.scielo.br/scielo.php?script=sci_arttext&pid=S2316-40182016000100119&lng=pt&tlng=pt",
    "access":{"year":2020,"month":09,"day":12},
    "textual_id":"Corrêa-2016"
},
{
    "rec_number":412,
    "type":"article",
    "author":[
        {"name":"Rejane C Rocha"}
    ],
    "number":47,
    "pages":"11-17",
    "electronic_resource_num":"10.1590/2316-4018471",
    "journal":"Estudos de Literatura Brasileira Contemporânea",
    "date":{"year":2016,
    "month":5},
    "title":"Apresentação - Além do livro: literatura e novas mídias",
    "url":"http://www.scielo.br/scielo.php?script=sci_arttext&pid=S2316-40182016000100011&lng=pt&tlng=pt",
    "access":{"year":2020,"month":11,"day":05},
    "textual_id":"Rocha-2016"
},
{
    "rec_number":411,
    "type":"article",
    "author":[
        {"name":"Marina Ribeiro Mattar"}
    ],
    "number":59,
    "pages":"101-12",
    "electronic_resource_num":"10.1590/2316-40185911",
    "journal":"Estudos de Literatura Brasileira Contemporânea",
    "volume":1,
    "date":{"year":2020},
    "title":"Poemóbiles: o livro além do livro",
    "url":"http://www.scielo.br/scielo.php?script=sci_arttext&pid=S2316-40182020000100300&tlng=pt",
    "access":{"year":2020,"month":11,"day":07},
    "textual_id":"Mattar-2020"
},
{
    "rec_number":410,
    "type":"article",
    "author":[
        {"name":"Sayonara Amaral de Oliveira"}
    ],
    "number":47,
    "pages":"49-70",
    "electronic_resource_num":"10.1590/2316-4018473",
    "journal":"Estudos de Literatura Brasileira Contemporânea",
    "volume":"II",
    "date":{"year":2016,
    "month":5},
    "title":"Sobre vivências poéticas no campo da mídia digital",
    "url":"http://www.scielo.br/scielo.php?script=sci_arttext&pid=S2316-40182016000100049&lng=pt&tlng=pt",
    "access":{"year":2020,"month":11,"day":08},
    "textual_id":"Oliveira-2016"
},
{
    "rec_number":409,
    "type":"article",
    "author":[
        {"name":"Ana Elisa Ribeiro"}
    ],
    "number":47,
    "pages":"97-118",
    "electronic_resource_num":"10.1590/2316-4018475",
    "journal":"Estudos de Literatura Brasileira Contemporânea",
    "volume":15,
    "date":{"year":2016,
    "month":5},
    "title":"Questões provisórias sobre literatura e tecnologia: um diálogo com Roger Chartier",
    "url":"http://www.scielo.br/scielo.php?script=sci_arttext&pid=S2316-40182016000100097&lng=pt&tlng=pt",
    "access":{"year":2020,"month":11,"day":08},
    "textual_id":"Ribeiro-2016"
},
{
    "rec_number":407,
    "type":"article",
    "author":[
        {"name":"Rejane C Rocha"}
    ],
    "number":47,
    "pages":"157-184",
    "electronic_resource_num":"10.1590/2316-4018478",
    "language":"Portuguese",
    "publisher":"Grupo de Estudos em Literatura Brasileira Contemporânea",
    "journal":"Estudos de Literatura Brasileira Contemporânea",
    "volume":11,
    "date":{"year":2016,
    "month":5},
    "title":"Monstro esperançoso",
    "url":"http://www.scielo.br/scielo.php?script=sci_arttext&pid=S2316-40182016000100157&lng=pt&tlng=pt",
    "access":{"year":2020,"month":11,"day":04},
    "textual_id":"Rocha-2016"
},
{
    "rec_number":406,
    "type":"video",
    "author":[
        {"name":"Leonardo Flores"}
    ],
    "publisher":"Leonardo Flores",
    "duration":"28m09s",
    "date":{"year":2018,"month":7,"day":15},
    "title":"Third Generation Electronic Literature",
    "url":"https://www.youtube.com/watch?v=hqes9WfJmrc",
    "access":{"year":2020,"month":12,"day":2},
    "textual_id":"Flores-2018",
    "cited":true
},
{
    "rec_number":404,
    "type":"article",
    "author":[
        {"name":"N Katherine Hayles"}
    ],
    "number":1,
    "pages":"67-90",
    "electronic_resource_num":"10.1215/03335372-25-1-67",
    "language":"English",
    "journal":"Poetics Today",
    "volume":25,
    "date":{"year":2004,"month":2,"day":1},
    "title":"Print Is Flat, Code Is Deep: The Importance of Media-Specific Analysis",
    "url":"https://read.dukeupress.edu/poetics-today/article-abstract/25/1/67/20810/Print-Is-Flat-Code-Is-Deep-The-Importance-of-Media",
    "access":{"year":2020,"month":03,"day":05},
    "textual_id":"Hayles-2004",
    "cited":true
},
{
    "rec_number":402,
    "type":"website",
    "author":[
        {"name":"Claudia Kozak"}
    ],
    "pages":"1-10",
    "site":"Latin American Literature Today",
    "date":{"year":2019},
    "title":"Poesía digital latinoamericana",
    "url":"http://www.latinamericanliteraturetoday.org/es/2019/mayo/poes%C3%ADa-digital-latinoamericana-lenguaje-experimental-en-tiempos-de-bits",
    "access":{"year":2020,"month":11,"day":23},
    "textual_id":"Kozak-2019",
    "cited":true
},
{
    "rec_number":399,
    "type":"website",
    "author":[
        {"name":"Claudia Kozak"}
    ],
    "pages":"1-24",
    "electronic_resource_num":"10.7273/zd5g-zk30",
    "site":"Electronic Book Review",
    "date":{"year":2020,"month":null,"day":null},
    "title":"Experimental Electronic Literature from the Souths.",
    "url":"http://electronicbookreview.com/essay/experimental-electronic-literature-from-the-souths-a-political-contribution-to-critical-and-creative-digital-humanities/",
    "access":{"year":2020,"month":11,"day":23},
    "textual_id":"Kozak-2020",
    "cited":true
},
{
    "rec_number":473,
    "type":"website",
    "site":"Live Counter",
    "date":{"year":2021,"month":04,"day":20},
    "title":"How big is the internet? (In petabytes)",
    "url":"https://www.live-counter.com/how-big-is-the-internet/",
    "access":{"year":2021,"month":04,"day":20},
    "textual_id":"Counter-2021",
    "cited":true
},
{
    "rec_number":395,
    "type":"article",
    "author":[
        {"name":"Serge Bouchardon"}
    ],
    "number":1,
    "language":"English",
    "journal":"Journal of Creative Writing Studies",
    "volume":2,
    "date":{"year":2017},
    "title":"Towards a Tension-Based Definition of Digital Literature",
    "url":"https://hal.utc.fr/hal-01969036/",
    "access":{"year":2020,"month":05,"day":04},
    "textual_id":"Bouchardon-2017",
    "cited":true
},
{
    "rec_number":392,
    "type":"website",
    "author":[
        {"name":"Nick Montfort"},
        {"name":"Noah Wardrip-Fruin"}
    ],
    "pages":"1-12",
    "site":"Electronic Literature Organization",
    "date":{"year":2004},
    "title":"Acid-Free Bits",
    "url":"https://eliterature.org/pad/afb.html",
    "access":{"year":2020,"month":12,"day":20},
    "textual_id":"Montfort-2004"
},
{
    "rec_number":391,
    "type":"book",
    "author":[
        {"name":"N Katherine Hayles"}
    ],
    "pages":"1-121",
    "pub_location":"Notre Dame",
    "publisher":"University of Notre Dame Press",
    "date":{"year":2007},
    "title":"Electronic Literature",
    "textual_id":"Hayles-2007",
    "cited":true
},
{
    "rec_number":491,
    "type":"book",
    "author":[
        {"name":"Brenda Laurel"}
    ],
    "pub_location":"Reading",
    "publisher":"Addison-Wesley",
    "date":{"year":1991},
    "title":"Computers as Theatre",
    "textual_id":"Laurel-1991",
    "cited":true
},
{
    "rec_number":492,
    "type":"book",
    "author":[
        {"name":"Janet Murray"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Editora da Unesp",
    "date":{"year":2003},
    "title":"Hamlet no holodeck",
    "subtitle":"o futuro da narrativa no ciberespaço",
    "textual_id":"Murray-2003",
    "cited":true
},
{
    "rec_number":390,
    "type":"website",
    "author":[
        {"name":"Charles Deemer"}
    ],
    "pages":"1-4",
    "site":"Charles Deemer",
    "date":{"year":1996},
    "title":"Hyperdrama and Virtual Development",
    "url":"http://www.ibiblio.org/cdeemer/virtdev.htm",
    "access":{"year":2020,"month":3,"day":6},
    "textual_id":"Deemer-1996"
},
{
    "rec_number":389,
    "type":"website",
    "author":[
        {"name":"Charles Deemer"}
    ],
    "site":"Charles Deemer",
    "date":{"year":1994},
    "title":"What is hypertext?",
    "url":"http://www.ibiblio.org/cdeemer/hypertxt.htm",
    "access":{"year":2020,"month":3,"day":7},
    "textual_id":"Deemer-1994"
},
{
    "rec_number":387,
    "type":"website",
    "author":[
        {"name":"Charles Deemer"}
    ],
    "site":"Charles Deemer",
    "date":{"year":2002},
    "title":"THE NEW HYPERDRAMA",
    "url":"http://www.ibiblio.org/cdeemer/newhype.htm",
    "access":{"year":2020,"month":03,"day":10},
    "textual_id":"Deemer-2002",
    "cited":true
},
{
    "rec_number":385,
    "type":"website",
    "author":[
        {"name":"J R Carpenter"}
    ],
    "site":"LUCKYSOAP Co.",
    "date":{"year":2021},
    "title":"J. R. CARPENTER || TRANS.MISSION [A.DIALOGUE]",
    "url":"https://luckysoap.com/statements/transmission.html",
    "access":{"year":2021,"month":3,"day":20},
    "textual_id":"Carpenter-2021",
    "cited":true
},
{
    "rec_number":383,
    "type":"website",
    "author":[
        {"name":"Serge Bouchardon"}
    ],
    "pages":"1-12",
    "site":"ELMCIP",
    "date":{"year":2008},
    "title":"The aesthetics of materiality in electronic literature",
    "url":"https://elmcip.net/critical-writing/aesthetics-materiality-electronic-literature",
    "access":{"year":2020,"month":12,"day":15},
    "textual_id":"Bouchardon-2008"
},
{
    "rec_number":382,
    "type":"website",
    "author":[
        {"name":"Hyun-Joo Yoo"}
    ],
    "pages":"1-8",
    "site":"Dichtung Digital",
    "date":{"year":2005},
    "title":"Intercultural medium literature digital",
    "url":"http://www.dichtung-digital.de/2005/2/Yoo/index-engl.htm",
    "access":{"year":2020,"month":11,"day":23},
    "textual_id":"Yoo-2005",
    "cited":true
},
{
    "rec_number":380,
    "type":"book",
    "author":[
        {"name":"Scott Rettberg"}
    ],
    "publisher":"Polity Press",
    "pub_location":"Cambridge",
    "date":{"year":2019},
    "title":"Electronic Literature",
    "textual_id":"Rettberg-2019",
    "cited":true
},
{
    "rec_number":376,
    "type":"book",
    "author":[
        {"name":"Rodrigo Garcia"}
    ],
    "pages":"1-27",
    "pub_location":"Besançon",
    "publisher":"Les Solitaires Intempestifs",
    "date":{"year":2017},
    "title":"Evel Knievel contre Macbeth",
    "textual_id":"Garcia-2017"
},
{
    "rec_number":374,
    "type":"book",
    "author":[
        {"name":"Rodrigo Garcia"}
    ],
    "pages":"1-516",
    "pub_location":"Segovia",
    "publisher":"La uNa RoTa",
    "date":{"year":2009},
    "title":"Cenizas Escogidas",
    "textual_id":"Garcia-2009"
},
{
    "rec_number":373,
    "type":"thesis",
    "author":[
        {"name":"Giovanna Di Rosario"},
    ],
    "pages":"1-336",
    "pub_location":"Jyväskylä, Finlândia",
    "auth_address":"University of Jyväskylä",
    "publisher":"Jyväskylä Studies in Humanities",
    "course":{"institution":"University of Jyväskylä",
    "program":"Faculty of Humanities of the University of Jyväskylä",
    "level":"Doutorado"},
    "date":{"year":2011,"month":4,"day":19},
    "title":"Electronic Poetry",
    "subtitle":"Understanding Poetry in the Digital Environment",
    "textual_id":"Rosario-2011",
    "cited":true
},
{
    "rec_number":474,
    "type":"thesis",
    "author":[
        {"name":"Ana Isa Bernardino Mestre"},
    ],
    "pub_location":"Algarve, Portugal",
    "auth_address":"Universidade do Algarve",
    "publisher":"Faculdade de Ciências Humanas e Sociais",
    "course":{"institution":"Universidade do Algarve",
    "program":"Faculdade de Ciências Humanas e Sociais",
    "level":"Doutorado"},
    "date":{"year":2017},
    "title":"Literatura 2.0",
    "subtitle":"Para uma cartografia da Narrativa Digital",
    "textual_id":"Mestre-2017",
    "cited":true
},
{
    "rec_number":472,
    "type":"thesis",
    "author":[
        {"name":"Ville Matias Lampi"},
    ],
    "pub_location":"Aalto, Finlândia",
    "auth_address":"Aalto University",
    "publisher":"Department Department of Art",
    "course":{"institution":"Aalto University",
    "program":"Degree programme Visual Culture and Contemporary Art",
    "level":"Mestrado"},
    "date":{"year":2017},
    "title":"Looking Behind the Text-To-Be-Seen",
    "subtitle":"Analysing Twitter Bots as Electronic Literature",
    "textual_id":"Lampi-2017",
    "cited":true
},

{
    "rec_number":372,
    "type":"book",
    "author":[
        {"name":"Matthew G Kirschenbaum"}
    ],
    "publisher":"MIT Press",
    "pub_location":"Cambridge",
    "pages":"1-25",
    "date":{"year":2007,"month":10,"day":26},
    "title":"Mechanisms: New Media and the Forensic Imagination (Introduction)",
    "textual_id":"Kirschenbaum-2007",
    "cited":true
},
{
    "rec_number":474,
    "type":"book",
    "author":[
        {"name":"Espen Aarseth"}
    ],
    "publisher":"The Johns Hopkins University Press",
    "pub_location":"Baltimore",
    "date":{"year":1997},
    "title":"Cybertext",
    "sub_title":"Perspectives on Ergodic Literature",
    "textual_id":"Aaarseth-1997"
},
{
    "rec_number":370,
    "type":"article",
    "author":[
        {"name":"Rudolf Rosa"},
        {"name":"Tomáš Musil"},
        {"name":"Ondřej Dušek"},
        {"name":"Dominik Jurko"},
        {"name":"Patrícia Schmidtová"},
        {"name":"David Mareček"},
        {"name":"Ondřej Bojar"},
        {"name":"Tom Kocmi"},
        {"name":"Daniel Hrbek"},
        {"name":"David Košťák"},
        {"name":"Martina Kinská"},
        {"name":"Marie Nováková"},
        {"name":"Josef Doležal"},
        {"name":"Klára Vosecká"},
        {"name":"Tomáš Studeník"},
        {"name":"Petr Žabka"}
    ],
    "pages":"1-6",
    "journal": "arXiv",
    "date":{"year":2021,"month":1,"day":17},
    "title":"THEaiTRE 1.0: Interactive generation of theatre play scripts",
    "url":"https://arxiv.org/abs/2102.08892",
    "access":{"year":2021,"month":2,"day":12},
    "textual_id":"Rosa-2021",
    "cited":true
},
{
    "rec_number":368,
    "type":"article",
    "author":[
        {"name":"Urszula Pawlicka"}
    ],
    "number":5,
    "pages":"1-9",
    "electronic_resource_num":"10.7771/1481-4374.2619",
    "language":"English",
    "journal":"CLCWeb: Comparative Literature and Culture",
    "pub_location":"West Lafayette",
    "volume":16,
    "date":{"year":2014,"month":null,"day":null},
    "title":"Towards a History of Electronic Literature",
    "url":"http://docs.lib.purdue.edu/clcweb/vol16/iss5/2",
    "access":{"year":2020,"month":11,"day":12},
    "textual_id":"Pawlicka-2014",
    "cited":true
},
{
    "rec_number":356,
    "type":"article",
    "author":[
        {"name":"Cécile Beaufils"}
    ],
    "number":"8.1",
    "pages":"1-17",
    "electronic_resource_num":"10.4000/inmedia.2047",
    "journal":"InMedia",
    "date":{"year":2020,"month":null,"day":null},
    "title":"Contemporary Text Experiences and Storytelling",
    "url":"http://journals.openedition.org/inmedia/2047",
    "access":{"year":2020,"month":11,"day":22},
    "textual_id":"Beaufils-2020"
},
{
    "rec_number":355,
    "type":"article",
    "author":[
        {"name":"Cathy Turner"}
    ],
    "number":1,
    "pages":"75-90",
    "electronic_resource_num":"10.1386/stap.30.1.75/1",
    "language":"English",
    "journal":"Studies in Theatre and Performance",
    "volume":30,
    "date":{"year":2010,"month":2},
    "title":"Writing for the contemporary theatre: towards a radically inclusive dramaturgy",
    "url":"http://www.ingentaconnect.com/content/intellect/stp/2010/00000030/00000001/art00013",
    "access":{"year":2020,"month":05,"day":13},
    "textual_id":"Turner-2010"
},
{
    "rec_number":354,
    "type":"article",
    "author":[
        {"name":"Nohelia Meza"}
    ],
    "number":1,
    "pages":"39-65",
    "electronic_resource_num":"10.5007/1807-9288.2019v15n1p39",
    "journal":"Texto Digital",
    "volume":15,
    "date":{"year":2019,"month":7,"day":21},
    "title":"Vozes e figuras: por uma retórica digital das obras de Literatura Eletrônica latino-americanas",
    "url":"https://periodicos.ufsc.br/index.php/textodigital/article/view/1807-9288.2019v15n1p39",
    "access":{"year":2020,"month":6,"day":28},
    "textual_id":"Meza-2019"
},
{
    "rec_number":353,
    "type":"article",
    "author":[
        {"name":"María Goicoechea de Jorge"}
    ],
    "number":1,
    "pages":"169-177",
    "electronic_resource_num":"10.1353/rmc.2020.0018",
    "language":"English",
    "journal":"Romance Notes",
    "volume":60,
    "date":{"year":2020},
    "title":"Pioneras digitales: Las voces encendidas de la poesía electrónica en español",
    "url":"https://muse.jhu.edu/article/765696",
    "access":{"year":2020,"month":7,"day":1},
    "textual_id":"Jorge-2020"
},
{
    "rec_number":352,
    "type":"article",
    "author":[
        {"name":"Rui Torres"},
        {"name":"Diogo Marques"}
    ],
    "number":1,
    "pages":"145-153",
    "electronic_resource_num":"10.1353/rmc.2020.0016",
    "language":"English",
    "journal":"Romance Notes",
    "volume":60,
    "date":{"year":2020},
    "title":"Diálogos e metamorfoses na ciberliteratura portuguesa, dos anos 1960 ao presente",
    "url":"https://muse.jhu.edu/article/765694",
    "access":{"year":2020,"month":4,"day":12},
    "textual_id":"Torres-2020"
},
{
    "rec_number":351,
    "type":"article",
    "author":[
        {"name":"Leisha Jones"}
    ],
    "number":3,
    "pages":"423-451",
    "electronic_resource_num":"10.1353/jnt.2018.0018",
    "language":"English",
    "journal":"Journal of Narrative Theory",
    "volume":48,
    "date":{"year":2018},
    "title":"“Being Alone with Yourself is Increasingly Unpopular”: The Electronic Poetry of Jenny Holzer",
    "url":"https://muse.jhu.edu/article/714464",
    "access":{"year":2020,"month":12,"day":1},
    "textual_id":"Jones-2018"
},
{
    "rec_number":350,
    "type":"article",
    "author":[
        {"name":"João Roberto Faria"}
    ],
    "pages":"9-25",
    "electronic_resource_num":"10.11606/issn.2238-3867.v10i0p9-25",
    "language":"Portuguese",
    "journal":"Sala Preta",
    "volume":10,
    "date":{"year":2010,"month":10,"day":28},
    "title":"O lugar da dramaturgia nas histórias da literatura brasileira",
    "url":"https://www.revistas.usp.br/salapreta/article/view/57426",
    "access":{"year":2020,"month":08,"day":12},
    "textual_id":"Faria-2010"
},
{
    "rec_number":349,
    "type":"article",
    "author":[
        {"name":"Richard A Carter"}
    ],
    "number":4,
    "pages":"990-1006",
    "electronic_resource_num":"10.1177/1354856519837796",
    "language":"English",
    "journal":"Convergence: The International Journal of Research into New Media Technologies",
    "volume":26,
    "date":{"year":2019,"month":3,"day":11},
    "title":"Tweeting the cosmos: On the bot poetry of The Ephemerides",
    "url":"http://journals.sagepub.com/doi/10.1177/1354856519837796",
    "access":{"year":2020,"month":08,"day":23},
    "textual_id":"Carter-2019"
},
{
    "rec_number":348,
    "type":"article",
    "author":[
        {"name":"Giovanna Di Rosario"},
        {"name":"Kerri Grimaldi"},
        {"name":"Nohelia Meza"}
    ],
    "number":1,
    "pages":"4-27",
    "electronic_resource_num":"10.5007/1807-9288.2019v15n1p4",
    "journal":"Texto Digital",
    "volume":15,
    "date":{"year":2019,"month":7,"day":21},
    "title":"Literatura eletrônica e suas origens. Um panorama",
    "url":"https://periodicos.ufsc.br/index.php/textodigital/article/view/1807-9288.2019v15n1p4",
    "access":{"year":2020,"month":11,"day":5},
    "textual_id":"Rosario-2019",
    "cited":true
},
{
    "rec_number":481,
    "type":"article",
    "author":[
        {"name":"Marianne Van Kerkhoven"},
    ],
    "number":3,
    "pages":"7-11",
    "journal":"Texto Digital",
    "volume":14,
    "date":{"year":2009,"month":9},
    "title":"European Dramaturgy in the 21st Century",
    "sub_title":"A constant movement",
    "url":"http://sarma.be/docs/2867",
    "access":{"year":2019,"month":11,"day":5},
    "textual_id":"Kerkhoven-2009",
    "cited":true
},
/*
{
    "rec_number":347,
    "type":"article",
    "pages":"1-14",
    "date":{"year":2005,"month":9,"day":10},
    "title":"Fim do livro?",
    "url":"https://www.scielo.br/pdf/ea/v8n21/13.pdf",
    "access":{"year":null,"month":null,"day":null}
},*/
/*{
    "rec_number":346,
    "type":"report",
    "pages":"1-18",
    "date":{"year":2007,"month":5,"day":4},
    "title":"DRAMA INTERATIVO",
    "url":"http://www.compos.org.br/data/biblioteca_170.pdf",
    "access":{"year":null,"month":null,"day":null}
},*/
/*{
    "rec_number":345,
    "type":"article",
    "pages":"1-31",
    "date":{"year":2021,"month":1,"day":18},
    "title":"WEATHER_PERMITTING_SHELLEY_JAC",
    "url":"https://go-gale.ez45.periodicos.capes.gov.br/ps/i.do?&id=GALE|A573714848&v=2.1&u=capes&it=r&p=AONE&sw=w",
    "access":{"year":null,"month":null,"day":null}
},*/
{
    "rec_number":343,
    "type":"article",
    "author":[
        {"name":"Leonardo Flores"}
    ],
    "number":11,
    "pages":"1-11",
    "electronic_resource_num":"10.4000/artelogie.1590",
    "journal":"Artelogie",
    "date":{"year":2017,"month":10,"day":16},
    "title":"La literatura electrónica latinoamericana, caribeña y global: generaciones, fases y tradiciones",
    "url":"http://journals.openedition.org/artelogie/1590",
    "access":{"year":2020,"month":6,"day":7},
    "textual_id":"Flores-2017",
    "cited":true
},
{
    "rec_number":470,
    "type":"article",
    "author":[
        {"name":"Leonardo Flores"}
    ],
    "number":14,
    "journal":"Hyperrhiz: New Media Cultures",
    "date":{"year":2016}, //talvez setembro
    "title":"Performing Twitter Bots",
    "url":"http://hyperrhiz.io/hyperrhiz14/commentary/3-flores-performing-bots.html",
    "access":{"year":2020,"month":6,"day":7},
    "textual_id":"Flores-2016",
    "cited":true
},
{
    "rec_number":341,
    "type":"article",
    "author":[
        {"name":"Paul Hackman"}
    ],
    "number":1,
    "pages":"84-107",
    "electronic_resource_num":"10.1353/cli.2011.0013",
    "language":"English",
    "journal":"Contemporary Literature",
    "volume":52,
    "date":{"year":2011},
    "title":"'I Am a Double Agent'",
    "subtitle":"Shelley Jackson's Patchwork Girl and the Persistence of Print in the Age of Hypertext",
    "url":"http://muse.jhu.edu/content/crossref/journals/contemporary_literature/v052/52.1.hackman.html",
    "access":{"year":2020,"month":02,"day":20},
    "textual_id":"Hackman-2011"
},
{
    "rec_number":340,
    "type":"article",
    "author":[
        {"name":"Jan Baetens"},
        {"name":"Fred Truyen"}
    ],
    "number":5,
    "pages":"477-480",
    "electronic_resource_num":"10.1162/LEON_a_00644",
    "language":"English",
    "journal":"Leonardo",
    "volume":46,
    "date":{"year":2013, "month":9},
    "title":"Hypertext Revisited",
    "url":"https://www.mitpressjournals.org/doi/abs/10.1162/LEON_a_00644",
    "access":{"year":2020,"month":11,"day":20},
    "textual_id":"Baetens-2013"
},
{
    "rec_number":339,
    "type":"article",
    "author":[
        {"name":"Patrick Lichty"}
    ],
    "number":4,
    "pages":"325-336",
    "electronic_resource_num":"10.1162/LEON_a_00837",
    "language":"English",
    "journal":"Leonardo",
    "volume":47,
    "date":{"year":2014,
    "month":7},
    "title":"The Aesthetics of Liminality: Augmentation as Artform",
    "url":"https://www.mitpressjournals.org/doi/abs/10.1162/LEON_a_00837",
    "access":{"year":2020,"month":11,"day":20},
    "textual_id":"Lichty-2014"
},
{
    "rec_number":338,
    "type":"article",
    "author":[
        {"name":"undefined Jessica Pressman"}
    ],
    "number":2,
    "pages":"302-326",
    "electronic_resource_num":"10.1353/mfs.0.0003",
    "language":"English",
    "journal":"MFS Modern Fiction Studies",
    "volume":54,
    "date":{"year":2008},
    "title":"The Strategy of Digital Modernism: Young-Hae Chang Heavy Industries's 'Dakota'",
    "url":"http://muse.jhu.edu/content/crossref/journals/modern_fiction_studies/v054/54.2.pressman.html",
    "access":{"year":2020,"month":11,"day":20},
    "textual_id":"Pressman-2008"
},
/*{
    "rec_number":337,
    "type":"report",
    "pages":"1-18",
    "date":{"year":2012,"month":8,"day":4},
    "title":"Literatura na tela do computador: a coletânea de Literatura Eletrônica de Katherine Hayles e algumas experiências no Brasil",
    "url":"http://facos.edu.br/publicacoes/revistas/trajetoria_multicursos/agosto_2012/pdf/literatura_na_tela_do_computador_-_a_coletanea_de_literatura_eletronica_de_katherine_hayles_e_algumas_experiencias_no_brasil.pdf",
    "access":{"year":null,"month":null,"day":null}
},*/
{
    "rec_number":336,
    "type":"article",
    "author":[
        {"name":"Luis Correa-Díaz"},
        {"name":"Scott Weintraub"}
    ],
    "number":1,
    "pages":"149-155",
    "electronic_resource_num":"10.1353/hcs.2011.0410",
    "language":"English",
    "journal":"Arizona Journal of Hispanic Cultural Studies",
    "volume":14,
    "date":{"year":2011},
    "title":"Literatura latinoamericana, española, portuguesa en la era digital (nuevas tecnologías y lo literario)",
    "url":"http://muse.jhu.edu/content/crossref/journals/arizona_journal_of_hispanic_cultural_studies/v014/14.correa-diaz.html",
    "access":{"year":2020,"month":6,"day":20},
    "textual_id":"Correa-Díaz-2011"
},
{
    "rec_number":335,
    "type":"article",
    "author":[
        {"name":"María Mencía"}
    ],
    "number":1,
    "pages":"179-186",
    "electronic_resource_num":"10.1353/rmc.2020.0019",
    "language":"English",
    "journal":"Romance Notes",
    "volume":60,
    "date":{"year":2020},
    "title":"Multimodal Textualities: Poetic Aesthetic Digital Space",
    "url":"https://muse.jhu.edu/article/765697",
    "access":{"year":2020,"month":10,"day":5},
    "textual_id":"Mencía-2020"
},
{
    "rec_number":334,
    "type":"article",
    "author":[
        {"name":"Carolina Gainza"}
    ],
    "number":20,
    "pages":"117-130",
    "electronic_resource_num":"10.25025/perifrasis201910.20.06",
    "language":"Spanish",
    "journal":"Perífrasis. Revista de Literatura, Teoría y Crítica",
    "volume":10,
    "date":{"year":2019,"month":6},
    "title":"CÓDIGO, LENGUAJE Y ESTÉTICAS EN LA LITERATURA DIGITAL CHILENA",
    "url":"https://revistas.uniandes.edu.co/doi/10.25025/perifrasis201910.20.06",
    "access":{"year":2020,"month":12,"day":02},
    "textual_id":"Gainza-2019",
    "cited":true
},
{
    "rec_number":469,
    "type":"book",
    "editor":[
        {"name":"Carolina Gainza"}
    ],
    "pub_location":"Cidade do México",
    "publisher":"Secretaría de cultura / Centro de Cultura Digital",
    "date":{"year":2019},
    "title":"Narrativas y poéticas digitales en América Latina",
    "title":"producción literaria en el capitalismo informacional",
    "textual_id":"Gainza-2019b",
    "cited":true
},

/*{
    "rec_number":331,
    "type":"article",
    "author":[
        {"name":"Eileen Herbert-Goodall"}
    ],
    "pages":"1-21",
    "language":"EnglishEnglish",
    "date":{"year":2015,"month":6,"day":22},
    "title":"Morphing Technologies, Changing Literacies: The Reshaping of Narrative in a Digital World",
    "url":"https://muse-jhu-edu.ez45.periodicos.capes.gov.br/article/588697/pdf",
    "access":{"year":2020,"month":11,"day":20},
    "textual_id":"Herbert-Goodall-2015"
},*/
{
    "rec_number":330,
    "type":"article",
    "author":[
        {"name":"Laura Borràs"}
    ],
    "number":1,
    "pages":"177-195",
    "electronic_resource_num":"10.1353/hcs.2011.0381",
    "language":"English",
    "journal":"Arizona Journal of Hispanic Cultural Studies",
    "volume":14,
    "date":{"year":2011},
    "title":"Leer literatura (en) digital: una historia de intermediaciones, desplazamientos y contaminaciones",
    "url":"http://muse.jhu.edu/content/crossref/journals/arizona_journal_of_hispanic_cultural_studies/v014/14.borras.html",
    "access":{"year":2020,"month":10,"day":5},
    "textual_id":"Borràs-2011"
},
{
    "rec_number":328,
    "type":"article",
    "author":[
        {"name":"Pedro Reis"}
    ],
    "number":3,
    "pages":"293-304",
    "electronic_resource_num":"10.1353/rmc.2011.0036",
    "language":"English",
    "journal":"Romance Notes",
    "volume":51,
    "date":{"year":2011},
    "title":"Primórdios da poesia em computador - anos 60, 70 e 80 do século XX",
    "url":"http://muse.jhu.edu/content/crossref/journals/romance_notes/v051/51.3.reis.html",
    "access":{"year":2020,"month":05,"day":12},
    "textual_id":"Reis-2011"
},
{
    "rec_number":327,
    "type":"article",
    "author":[
        {"name":"Filipe Freitas"},
        {"name":"Carlos Henrique Falci"}
    ],
    "number":1,
    "pages":"198-215",
    "electronic_resource_num":"10.9771/1809-9386contemporanea.v11i1.6459",
    "language":"Portuguese",
    "journal":"Contemporânea",
    "volume":11,
    "date":{"year":2013,"month":2,"day":28},
    "title":"Superando a utopia do Holodeck: as narrativas digitais na era das redes sociais",
    "url":"https://periodicos.ufba.br/index.php/contemporaneaposcom/article/view/6459",
    "access":{"year":2020,"month":10,"day":02},
    "textual_id":"Freitas-2013"
},/*
{
    "rec_number":326,
    "type":"article",
    "pages":"1-22",
    "electronic_resource_num":"10.7273/zd5g-zk30",
    "date":{"year":2021,"month":1,"day":18},
    "title":"Experimental Electronic Literature from the Souths. A Political Contribution to Critical and Creative Digital Humanities.",
    "url":"https://pdf.printfriendly.com/pdfs/make",
    "access":{"year":null,"month":null,"day":null}
},*/
/*{
    "rec_number":324,
    "type":"article",
    "author":[
        {"name":"William I Wolff"}
    ],
    "number":3,
    "pages":"211-225",
    "electronic_resource_num":"10.1016/j.compcom.2013.06.001",
    "publisher":"Elsevier Inc.",
    "journal":"Computers and Composition",
    "volume":30,
    "date":{"year":2013,"month":8,"day":1},
    "title":"Interactivity and the Invisible: What Counts as Writing in the Age of Web 2.0",
    "url":"http://dx.doi.org/10.1016/j.compcom.2013.06.001",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"Wolff-2013"
},*/
/*{
    "rec_number":322,
    "type":"article",
    "author":[
        {"name":"Roberto Simanowski"}
    ],
    "pages":"1-6",
    "language":"EnglishEnglish",
    "date":{"year":2010,"month":2,"day":30},
    "title":"Digital Anthropophagy: Refashioning Words as Image, Sound and Action",
    "url":"https://muse-jhu-edu.ez45.periodicos.capes.gov.br/article/379667/pdf",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"Simanowski-2010"
},*/
{
    "rec_number":321,
    "type":"book",
    "editor":[
        {"name":"Claudia Kozak"}
    ],
    "pages":"1-142",
    "pub_location":"Buenos Aires",
    "publisher":"Caja Negra",
    "date":{"year":2012},
    "title":"Tecnopoéticas Argentinas",
    "textual_id":"Kozak-2012"
},
{
    "rec_number":464,
    "type":"book-chapter",
    "author":[
        {"name":"Charly Gradin"},
        {"name":"Lila Pagola"},
    ],
    "book": {
        "editor":[
            {"name":"Claudia Kozak"}
        ],
        "pub_location":"Buenos Aires",
        "publisher":"Caja Negra",
        "date":{"year":2012},
        "title":"Tecnopoéticas Argentinas",
    },
    "date":{"year":2012},
    "title":"NET.ART",
    "textual_id":"Gradin+Pagola-2012",
    "cited":true
},
{
    "rec_number":468,
    "type":"book-chapter",
    "author":[
        {"name":"Carrie Noland"},
    ],
    "book": {
        "editor":[
            {"name":"A Morris"},
            {"name":"T Swiss"},
        ],
        "pub_location":"Cambridge",
        "publisher":"MIT Press",
        "date":{"year":2004},
        "title":"New media poetics",
        "sub_title":"Contexts, Technotexts and Theories"
    },
    "pages":"p. 217–244",
    "date":{"year":2004},
    "title":"Digital Gestures",
    "textual_id":"Noland-2004",
    "cited":true
},
{
    "rec_number":476,
    "type":"book-chapter",
    "author":[
        {"name":"Roberto Simanowski"},
    ],
    "book": {
        "editor":[
            {"name":"Roberto Simanowski"},
            {"name":"Jörgen Schäfer"},
            {"name":"Peter Gendolla"},
        ],
        "pub_location":"Bielefeld, Alemanha",
        "publisher":"transcript Verlag",
        "date":{"year":2010},
        "title":"New media Reading Moving Letters",
        "sub_title":"Digital Literature in Research and Teaching. A Handbook"
    },
    "pages":"p.15–28",
    "date":{"year":2010},
    "title":"Reading Digital Literature",
    "textual_id":"Simanowski-2010",
    "cited":true
},
{
    "rec_number":463,
    "type":"book",
    "author":[
        {"name":"Catherine Malabou"}
    ],
    "pub_location":"Cambridge",
    "publisher":"Polity Press",
    "date":{"year":2012},
    "title":"Ontology of the accident",
    "sub_title":"an essay on destructive plasticity",
    "textual_id":"Malabou-2012",
    "cited":true
},
{
    "rec_number":320,
    "type":"thesis",
    "author":[
        {"name":"Leonardo Faria Moreira"}
    ],
    "pages":"1-211",
    "pub_location":"São Paulo",
    "auth_address":"USP",
    "electronic_resource_num":"10.11606/D.27.2010.tde-17022011-145632",
    "language":"Portuguese",
    "publisher":"Biblioteca Digital de Teses e Dissertações da Universidade de São Paulo",
    "course":{"institution":"Universidade de São Paulo",
    "program":"Escola de Comunicação e Artes",
    "level":"Mestrado"},
    "volume":"Mestrado em Pedagogia do Teatro",
    "date":{"year":2010,"month":9,"day":22},
    "title":"Escuro",
    "subtitle":"uma dramaturgia cúmplice",
    "url":"https://www.teses.usp.br/teses/disponiveis/27/27155/tde-17022011-145632/pt-br.php",
    "access":{"year":2019,"month":07,"day":20},
    "textual_id":"Moreira-2010",
    "cited":true
},
{
    "rec_number":318,
    "type":"book",
    "author":[
        {"name":"Jean-Pierre Sarrazac"}
    ],
    "pages":"1-182",
    "pub_location":"São Paulo",
    "language":"Português",
    "publisher":"Perspectiva",
    "date":{"year":2017},
    "title":"Poética do drama moderno",
    "textual_id":"Sarrazac-2017",
    "cited":true
},
{
    "rec_number":460,
    "type":"book",
    "author":[
        {"name":"Hans-Thies Lehmann"}
    ],
    "pages":"1-182",
    "pub_location":"São Paulo",
    "language":"Português",
    "publisher":"Cosac Naify",
    "date":{"year":2007},
    "title":"O teatro pós-dramático",
    "textual_id":"Lehmann-2007",
    "cited":true
},
//LEVY, P. Cibercultura. Traducao. São Paulo: Editora 34, 1999.
{
    "rec_number":465,
    "type":"book",
    "author":[
        {"name":"Pierre Levy"},
    ],
    "pub_location":"São Paulo",
    "publisher":"Editora 34",
    "date":{"year":1999},
    "title":"Cibercultura",
    "textual_id":"Levy-1999",
    "cited":true
}, 
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Peter Eckersal"},
        {"name":"Helena Grehan"},
        {"name":"Edward Sheer"},
    ],
    "pub_location":"Londres",
    "language":"Inglês",
    "publisher":"Palgrave Macmillan",
    "date":{"year":2017},
    "title":"New Media Dramaturgy",
    "subtitle":"Performance, Media and New-Materialism",
    "textual_id":"Eckersall-2017",
    "cited":true
},

/*{
    "rec_number":307,
    "type":"report",
    "author":[
        {"name":"Alejandro Corredor"}
    ],
    "pages":"1-121",
    "date":{"year":2013,"month":4,"day":26},
    "title":"Primeros apuntes para una historia de la literatura digital en colombia desde 1990 hasta el 2012",
    "url":"https://www.academia.edu/",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"Corredor-2013"
},*/
{
    "rec_number":306,
    "type":"book",
    "author":[
        {"name":"Alexandra Glavanakova"}
    ],
    "pages":"1-256",
    "pub_location":"Sofia",
    "publisher":"St. Kliment Ohridski University Press",
    "date":{"year":2014},
    "title":"POSTHUMAN TRANSFORMATIONS",
    "textual_id":"Glavanakova-2014",
    "cited":true
},
{
    "rec_number":303,
    "type":"book",
    "author":[
        {"name":"Jean-Pierre Sarrazac"}
    ],
    "pages":"1-110",
    "pub_location":"Porto",
    "publisher":"Campo das Letras",
    "date":{"year":2012,"month":9,"day":21},
    "title":"O FUTURO DO DRAMA",
    "textual_id":"Sarrazac-2012"
},
/*{
    "rec_number":299,
    "type":"article",
    "author":[
        {"name":"Jean-Pierre Sarrazac"}
    ],
    "number":1,
    "pages":"7-18",
    "pub_location":"Paris",
    "electronic_resource_num":"10.3917/etth.038.0007",
    "language":"French",
    "publisher":"L'Harmattan",
    "journal":"Études théâtrales",
    "volume":"38-39",
    "date":{"year":2007},
    "title":"La reprise. (réponse au postdramatique)",
    "url":"https://www.cairn.info/revue-etudes-theatrales-2007-1-page-7.htm",
    "access":{"year":2019,"month":12,"day":03},
    "textual_id":"Sarrazac-2007"
},*/
{
    "rec_number":293,
    "type":"book",
    "author":[
        {"name":"Kenneth Goldsmith"}
    ],
    "pages":"1-23",
    "pub_location":"Buenos Aires",
    "publisher":"Caja Negra",
    "date":{"year":2015,"month":9,"day":6},
    "title":"Escritura no creativa",
    "textual_id":"Goldsmith-2015"
},
/*{
    "rec_number":284,
    "type":"article",
    "author":[
        {"name":"edited by Anna Maj and Daniel Riha"}
    ],
    "pages":"1-227",
    "date":{"year":2009,"month":null,"day":null},
    "title":"Digital Memories",
    "url":"https://www.academia.edu/28640593/Digital_Memories_Exploring_Critical_Issues",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"Riha-2009"
},*/
/*{
    "rec_number":282,
    "type":"article",
    "author":[
        {"name":"Diana Espinal Cruces"},
        {"name":"Jose Jesus García Rueda"}
    ],
    "pages":"1-11",
    "journal":"INTER-DISCIPLINARY.NET",
    "date":{"year":2009,"month":3,"day":2},
    "title":"HyperAuthor",
    "url":"https://www.academia.edu/25812420/HyperAuthor_a_New_Tool_for_Hypertextual_Narrative_Creation?email_work_card=title",
    "access":{"year":null,"month":null,"day":null},
    "textual_id":"Cruces-2009"
},*/
{
    "rec_number":280,
    "type":"electronic-book",
    "author":[
        {"name":"Paolo Virno"},
    ],
    "pages":"1-253",
    "pub_location":"Madrid",
    "language":"Espanhol",
    "publisher":"Traficantes de Sueños",
    "date":{"year":2005,"month":3,"day":12},
    "title":"Cuando el verbo se hace carne",
    "url":"https://www.traficantes.net/sites/default/files/pdfs/Cuando%20el%20verbo%20se%20hace%20carne-TdS.pdf",
    "access":{"year":2019,"month":7,"day":6},
    "textual_id":"Virno-2005"
},
{
    "rec_number":262,
    "type":"website",
    "author":[
        {"name":"Jean-Pierre Sarrazac"}
    ],
    "pages":"1-11",
    "site":"Questão de Crítica - Revista eletrônica de críticas e estudos teatrais",
    "date":{"year":2010,"month":2,"day":19},
    "title":"A reprise (resposta ao pós-dramático)",
    "url":"http://www.questaodecritica.com.br/2010/03/a-reprise-resposta-ao-pos-dramatico/",
    "access":{"year":2019,"month":12,"day":03},
    "textual_id":"Sarrazac-2010"
},
{
    "rec_number":434,
    "type":"website",
    "site":"THEaiTRE",
    "date":{"year":2010,"month":2,"day":19},
    "title":"THEaiTRE | CAN A ROBOT WRITE A THEATRE PLAY?",
    "url":"https://www.theaitre.com/",
    "access":{"year":2020,"month":12,"day":05},
    "textual_id":"THEAITRE-2020"
},
{
    "rec_number":260,
    "type":"article",
    "author":[
        {"name":"Camila Bauer Bronstrup"}
    ],
    "number":19,
    "pages":"1-10",
    "electronic_resource_num":"10.22456/2236-3254.60746",
    "language":"Portuguese",
    "journal":"Cena",
    "date":{"year":2015},
    "title":"O TEATRO DE JÖEL POMMERAT A PARTIR DE FRAGMENTOS DE JE TREMBLE – ENTRE O DRAMATURGO E O ENCENADOR",
    "url":"https://www.seer.ufrgs.br/cena/article/view/60746",
    "access":{"year":2019,"month":06,"day":12},
    "textual_id":"Bronstrup-2015"
},
{
    "rec_number":258,
    "type":"article",
    "author":[
        {"name":"Luiz Antonio Garcia Diniz"}
    ],
    "number":2,
    "pages":"209-222",
    "electronic_resource_num":"10.1590/S1517-106X2005000200003",
    "language":"Portuguese",
    "publisher":"Programa de Pos-Graduação em Letras Neolatinas, Faculdade de Letras, Unversidade Federal do Rio de Janeiro",
    "journal":"Alea: Estudos Neolatinos",
    "volume":7,
    "date":{"year":2006,"month":7,"day":25},
    "title":"Cibercultura e literatura: hipertexto e as novas arquiteturas textuais",
    "url":"http://ref.scielo.org/j6f9wg",
    "access":{"year":2019,"month":11,"day":20},
    "textual_id":"Diniz-2006"
},
/*{
    "rec_number":257,
    "type":"article",
    "pages":"1-780",
    "date":{"year":2019,"month":10,"day":19},
    "title":"Wardrip-Fruin_Noah_Montfort_Nick_eds_The_New_Media_Reader",
    "url":"https://monoskop.org/images/4/4c/Wardrip-Fruin_Noah_Montfort_Nick_eds_The_New_Media_Reader.pdf",
    "access":{"year":null,"month":null,"day":null}
},*/
{
    "rec_number":253,
    "type":"thesis",
    "author":[
        {"name":"Pedro de Freitas Veneroso"},
    ],
    "pages":"1-163",
    "pub_location":"Belo Horizonte",
    "auth_address":"Universidade Federal de Minas Gerais - Faculdade de Letras",
    "language":"Português",
    "publisher":"Universidade Federal de Minas Gerais",
    "course":{"institution":"Universidade Federal de Minas Gerais",
    "program":"Faculdade de Letras",
    "level":"Mestrado"},
    "date":{"year":2016,"month":8,"day":19},
    "title":"Rizomas: espaços-tempos concretos e virtuais na literatura e na computação",
    "url":"http://hdl.handle.net/1843/LETR-AJ8PJ5",
    "access":{"year":2019,"month":08,"day":06},
    "textual_id":"Veneroso-2016"
},
{
    "rec_number":240,
    "type":"website",
    "author":[
        {"name":"Nel Diago"}
    ],
    "pages":"1-6",
    "site":"STICHOMYTHIA: revista de teatro espanhol contemporâneo",
    "date":{"year":2019,"month":9,"day":8},
    "title":"Conversando con Rodrigo García Los límites del teatro. El teatro y sus límites",
    "url":"http://parnaseo.uv.es/Ars/ESTICOMITIA/Numero0/indicecero/a8.htm",
    "access":{"year":2019,"month":07,"day":23},
    "textual_id":"Diago-2019"
},
{
    "rec_number":229,
    "type":"article",
    "author":[
        {"name":"Camila Damasceno"},
        {"name":"Matteo Bonfitto"}
    ],
    "number":1,
    "pages":"396-13",
    "electronic_resource_num":"10.11606/issn.2238-3867.v17i1p387-399",
    "language":"Portuguese",
    "journal":"Sala Preta",
    "volume":17,
    "date":{"year":2017,"month":6,"day":17},
    "title":"Dramaturgia performativa e produção de corporeidades nos trabalhos do La Carnicería Teatro",
    "url":"http://www.revistas.usp.br/salapreta/article/view/128014",
    "access":{"year":2019,"month":07,"day":15},
    "textual_id":"Damasceno-2017"
},
{
    "rec_number":72,
    "type":"book",
    "editor":[
        {"name":"Magda Romanska"}
    ],
    "pages":"1-569",
    "pub_location":"Abingdon",
    "publisher":"Routledge",
    "date":{"year":2015},
    "title":"The Routledge Companion to Dramaturgy",
    "textual_id":"Romanska-2015"
},
/*
SIMONDON, G. El modo de existensia de los objetos técnicos. Buenos Aires:
Prometeo, 2007. p.217.
SIMONDON, G. Sobre a tecno-estética: Carta a Jacques Derrida. In: ARAÚJO, H. R. (org). Tecnociência e cultura: ensaios sobre o presente. São Paulo: Estação Liberdade, 1998.
*/
{
    "rec_number":482,
    "type":"book",
    "author":[
        {"name":"Gilbert Simondon"}
    ],
    "pub_location":"Buenos aires",
    "publisher":"Prometeo",
    "date":{"year":2007},
    "title":"El modo de existensia de los objetos técnicos",
    "textual_id":"Simondon-2007",
    "cited":true
},
{
    "rec_number":483,
    "type":"book-chapter",
    "author":[
        {"name":"Gilbert Simondon"}
    ],
    "book": {
        "editor":[
            {"name":"H R Araújo"}
        ],
        "pub_location":"São Paulo",
        "publisher":"Estação Liberdade",
        "date":{"year":1998},
        "title":"Tecnociência e cultura",
        "sub_title":"ensaios sobre o presente",
    },
    "date":{"year":1998},
    "title":"Sobre a tecno-estética",
    "sub_title":"Carta a Jacques Derrida",
    "textual_id":"Simondon-1998",
    "cited":true
},
{
    "rec_number":453,
    "type":"book-chapter",
    "author":[
        {"name":"Hans-Thies Lehmann"},
        {"name":"Patrick Primavesi"}
        
    ],
    "book": {
        "editor":[
            {"name":"Magda Romanska"}
        ],
        "pub_location":"Abingdon",
        "publisher":"Routledge",
        "date":{"year":2015},
        "title":"The Routledge Companion to Dramaturgy",
    },
    "date":{"year":2015},
    "title":"Dramaturgy on shifting grounds",
    "textual_id":"Lehmann+Primavesi-2015",
    "cited":true
},
{
    "rec_number":461,
    "type":"book-chapter",
    "author":[
        {"name":"Peter Eckersal"},
        {"name":"Helena Grehan"},
        {"name":"Edward Sheer"},
    ],
    "book": {
        "editor":[
            {"name":"Magda Romanska"}
        ],
        "pub_location":"Abingdon",
        "publisher":"Routledge",
        "date":{"year":2015},
        "title":"The Routledge Companion to Dramaturgy",
    },
    "date":{"year":2015},
    "title":"New Media Dramaturgy",
    "textual_id":"Eckersall-2015",
    "cited":true
},

{
    "rec_number":51,
    "type":"book",
    "author":[
        {"name":"E Fischer-Lichte"}
    ],
    "pub_location":"Abingdon",
    "publisher":"Routledge",
    "date":{"year":2008},
    "title":"The Transformative Power of Performance: A New Aesthetics, trans",
    "textual_id":"Fischer-Lichte-2008",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Astrid Ensslin"}
    ],
    "pub_location":"Nova York",
    "publisher":"Continuum International",
    "date":{"year":2007},
    "title":"Canonizing Hypertext",
    "subtitle":"Explorations and constructions",
    "textual_id":"Ensslin-2007",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "author":[
        {"name":"Charles Deemer"}
    ],
    "pages":"1-4",
    "site":"Charles Deemer",
    "date":{"year":1996},
    "title":"The Last Song of Violeta Parra",
    "url":"http://www.ibiblio.org/cdeemer/chile-m.html",
    "access":{"year":2020,"month":05,"day":12},
    "textual_id":"Deemer-1996b",
    "cited":true
},
{
    "rec_number":229,
    "type":"article",
    "author":[
        {"name":"N ELGAWAHERGY"},
        {"name":"N SOLIMA"},
        {"name":"M RIAD"}
    ],
    "number":null,
    "pages":"284-331",
    "electronic_resource_num":"10.11606/issn.2238-3867.v17i1p387-399",
    "language":"Portuguese",
    "journal":"Annals of the Faculty of Arts",
    "volume":42,
    "date":{"year":2014,"month":1,"day":1},
    "title":"Hyperdrama as a New Kind of Dramatic Texts",
    "textual_id":"Elgawahergy-2014",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "author":[
        {"name":"Charles Deemer"}
    ],
    "site":"Charles Deemer",
    "date":{"year":1996},
    "title":"What is hypertext?",
    "url":"http://www.ibiblio.org/cdeemer/hypertxt.htm",
    "access":{"year":2020,"month":03,"day":18},
    "textual_id":"Deemer-1994",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "author":[
        {"name":"Charles Deemer"}
    ],
    "site":"Charles Deemer",
    "date":{"year":2007},
    "title":"REFLECTIONS ON THE DESIGN OF A HYPERTHEATER",
    "url":"http://www.ibiblio.org/cdeemer/hypertheater.htm",
    "access":{"year":2020,"month":03,"day":18},
    "textual_id":"Deemer-2007",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "site":"Luca Ronconi",
    "date":{"year":2021},
    "title":"Orlando Furioso",
    "url":"https://lucaronconi.it/scheda/teatro/orlando-furioso",
    "access":{"year":2020,"month":03,"day":18},
    "textual_id":"Ronconi-2021",
    "cited":true
},
{
    "rec_number":229,
    "type":"article",
    "author":[
        {"name":"Lorena Regattieri"}
    ],
    "number":2,
    "language":"Portuguese",
    "journal":"Liinc em Revista",
    "volume":14,
    "date":{"year":2018},
    "title":"Algoritmização da vida e organização da informação: Considerações sobre a tecnicidade no algoritmo a partir de Gilbert Simondon",
    "url":"https://lucaronconi.it/scheda/teatro/orlando-furioso",
    "access":{"year":2021,"month":11,"day":18},
    "textual_id":"Regattieri-2018",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "author":[
        {"name":"Nicanor Parra"}
    ],
    "site":"Nicanor Parra - Antologia",
    "date":{"year":1979},
    "title":"Nuevos sermones y prédicas del Cristo de Elqui - sermon XLIX",
    "url":"http://www.nicanorparra.uchile.cl/antologia/indexpoemas.html",
    "access":{"year":2021,"month":04,"day":23},
    "textual_id":"Parra-1979",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Régis Debray"}
    ],
    "pub_location":"Petrópolis",
    "publisher":"Vozes",
    "date":{"year":1993},
    "title":"Curso de Midiologia Geral",
    "textual_id":"Debray-1993",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Raymond Williams"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Cosac Naify",
    "date":{"year":2010},
    "title":"Drama em cena",
    "textual_id":"Williams-2010",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Patrice Pavis"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Perspectiva",
    "date":{"year":2013},
    "title":"A encenação contemporânea",
    "sub_title":"origens, tendências, perspectivas",
    "textual_id":"Pavis-2013",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Mark Fisher"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Autonomia Literária",
    "date":{"year":2020},
    "title":"Realismo Capitalista",
    "sub_title":"é mais fácil imaginar o fim do mundo que o fim do capitalismo?",
    "textual_id":"Fisher-2020",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Michel Foucault"}
    ],
    "pub_location":"Rio de Janeiro",
    "publisher":"Graal",
    "date":{"year":1998},
    "title":"Microfísica do poder",
    "textual_id":"Foucault-1998",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Régis Debray"}
    ],
    "pub_location":"Londres",
    "publisher":"Verso",
    "date":{"year":1996},
    "title":"Media manifestos",
    "sub_title":"on the technological transmission of cultural forms",
    "textual_id":"Debray-1996",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Tarcísio Silva"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Edições SESC São Paulo",
    "date":{"year":2022},
    "title":"Racismo Algorítmico",
    "sub_title":"inteligência artificial e discriminação nas redes digitais",
    "textual_id":"Silva-2022",
    "cited":true
},
{
    "rec_number":453,
    "type":"book-chapter",
    "author":[
        {"name":"P Finglass"}
    ],
    "book": {
        "editor":[
            {"name":"A Markantonatos"}
        ],
        "pub_location":"Brill",
        "publisher":"Brill Academic Publishers",
        "title":"Brill’s Companion to Euripides",
        "date":{"year":2020}
    },
    "date":{"year":2020},
    "title":"The textual transmission of Euripides’ dramas",
    "textual_id":"Finglass-2020",
    "cited":true
},
{
    "rec_number":453,
    "type":"book-chapter",
    "author":[
        {"name":"Katherine Hayles"}
    ],
    "book": {
        "editor":[
            {"name":"M ADALAIDE"},
            {"name":"T Swiss"}
        ],
        "pub_location":"Cambridge",
        "publisher":"MIT Press",
        "title":"New Media Poetics",
        "sub_title":"Contexts, Technotexts, and Theories",
        "date":{"year":2006}
    },
    "date":{"year":2006},
    "title":"The Time of Digital Poetry",
    "sub_title":"From Object to Event",
    "textual_id":"Finglass-2020",
    "cited":true
},
{
    "rec_number":229,
    "type":"article",
    "author":[
        {"name":"A Domingues"}
    ],
    "number":35,
    "language":"Portuguese",
    "journal":"VARIA HISTORIA",
    "pub_location":"Belo Horizonte",
    "volume":22,
    "pages":"150-174",
    "date":{"year":2006},
    "title":"Notícias do Brasil colonial",
    "sub_title":"a imprensa científica e política a serviço das elites (Portugal, Brasil e Inglaterra)",
    "textual_id":"Domingues-2006",
    "cited":true
},
{
    "rec_number":229,
    "type":"article",
    "author":[
        {"name":"Denise Siqueira"}
    ],
    "number":2,
    "language":"Portuguese",
    "journal":"LOGOS",
    "pub_location":"Rio de Janeiro",
    "volume":4,
    "date":{"year":1997},
    "title":"Memória, história e poder",
    "sub_title":"a implantação dos meios de comunicação no Brasil",
    "textual_id":"Siqueira-1997",
    "cited":true
},
{
    "rec_number":229,
    "type":"article",
    "author":[
        {"name":"Franck Bauchard"}
    ],
    "number":3,
    "language":"Portuguese",
    "journal":"Liberté",
    "volume":52,
    "pages":"54-77",
    "date":{"year":2011},
    "title":"Du texte au théâtre",
    "sub_title":"de la culture de l'imprimé aux environnements numériques",
    "textual_id":"Bauchard-2011",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Julie Stone Peters"}
    ],
    "pub_location":"Oxford",
    "publisher":"Oxford University Press",
    "date":{"year":2003},
    "title":"Theatre of the Book, 1480-1880",
    "sub_title":"Print, Text, and Performance in Europe",
    "textual_id":"Peters-2003",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Leonor Fávero"},
        {"name":"Ingedor Koch"}
    ],
    "pub_location":"São Paulo",
    "publisher":"Cortez",
    "date":{"year":1983},
    "title":"Lingüística Textual",
    "sub_title":"uma introdução",
    "textual_id":"Favero-1983",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Gerard Genette"}
    ],
    "pub_location":"Madri",
    "publisher":"Taurus",
    "date":{"year":1989},
    "title":"Palimpsetos",
    "sub_title":"La literatura en segundo grado",
    "textual_id":"Genette-1989",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Jean Racine"}
    ],
    "pub_location":"Paris",
    "publisher":"Barbin",
    "date":{"year":1667},
    "title":"Phèdre & Hippolyte",
    "sub_title":"tragédie",
    "textual_id":"Racine-1677",
    "cited":true
},
{
    "rec_number":461,
    "type":"book",
    "author":[
        {"name":"Lúcio Sêneca"}
    ],
    "pub_location":"[S.l.]",
    "publisher":"per Matheu[m] Capcasam",
    "date":{"year":1493},
    "title":"L. Annei Senecae Tragoediae: cu[m] duobis co[m]mentis",
    "textual_id":"Seneca-1493",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "site":"POxy - Oxyrhynchus online",
    "date":{"year":1976},
    "title":"P.Oxy.XLIV 3152",
    "url":"http://www.papyrology.ox.ac.uk/POxy/",
    "access":{"year":2021,"month":09,"day":09},
    "textual_id":"Poxy-1976",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "site":"British Library",
    "title":"Digitised Manuscripts - Add MS 10057",
    "url":"http://www.bl.uk/manuscripts/FullDisplay.aspx?ref=Add_MS_10057&index=1",
    "access":{"year":2021,"month":09,"day":27},
    "textual_id":"Bl-2021",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "author":[
        {"name":"Emily Short"}
    ],
    "site":"Emily Short Interactive Storytelling",
    "title":"Patchwork Girl (Shelley Jackson) and Spatial Hypertext",
    "url":"https://emshort.blog/2019/09/17/patchwork-girl-shelley-jackson-and-spatial-hypertext/",
    "date":{"day":17,"month":9,"year":2019},
    "access":{"year":2021,"month":09,"day":27},
    "textual_id":"Short-2019",
    "cited":true
},
{
    "rec_number":391,
    "type":"website",
    "site":"Twitter: @veredasbot",
    "title":"“Eu atravesso as coisas — e no meio da travessia não vejo! — só estava era entretido na ideia dos lugares de saída e de chegada”",
    "url":"https://twitter.com/veredasbot/status/1341927019119042560",
    "date":{"day":23,"month":12,"year":2020},
    "access":{"day":12,"month":2,"year":2021},
    "textual_id":"Veredasbot-2020",
    "cited":true
},
// adicoes 02/03
/*
GRANDE SERTÃO. “Eu atravesso as coisas — e no meio da travessia não vejo! — só estava era entretido na ideia dos lugares de saída e de chegada”. 23 dez. 2020. Twitter: @veredasbot. Disponível em: https://twitter.com/veredasbot/status/1341927019119042560. Acesso em: 12 fev. 2021





sarah kane

*/

];

//ENDPOINTS
app.get('/api/nodes', function (req, res, next) {
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json(nodes);
    res.end();
});

app.get('/api/edges', function (req, res, next) {
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json(edges);
    res.end();
});

app.get('/api/conceitos', function (req, res, next) {
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json(conceitos);
    res.end();
});

app.get('/api/conceito/:name', function (req, res, next) {
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json(conceitos.filter(it => it.name == req.params.name)[0]);
    res.end();
});

app.get('/api/figuras', function (req, res, next) {
    res.json(figuras);
    res.end();
});

app.get('/api/figuras/:name', function (req, res, next) {
    res.json(figuras.filter(it => it.name == req.params.name)[0]);
    res.end();
});

app.get('/api/referencias', function (req, res, next) {
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json(referencias);
    res.end();
});

app.get('/api/referencia/:name', function (req, res, next) {
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    res.json(referencias.filter(it => it.textual_id == req.params.name || it.rec_number == req.params.name)[0]);
    res.end();
});

/*
 *
 * LOGIN
 *
 */

let loginLog = [];

app.get('/api/login/:name', async (req,res) => {

    try {
      if (!req.params.name) {
        throw new Error();
      }
  
      /*const M = mongoose.model('usuarios', UsuariosSchema);
      const user = await M.find({status:true,email: {$eq: req.body.email}}).lean()
  
      if (!user || user.length > 1) throw errorHelper(400,'Usuário não encontrado')
      if (user[0].password !== req.body.password) throw errorHelper(400,'Dados incorretos')*/

      //let user = usuarios.filter(u => {return u.email == req.body.email && u.senha == req.body.password});
      //if (!user || user.length < 1) throw new Error();

      let now = new Date();

      loginLog.push({name:req.params.name,date:now});
      
      res.json({error: false, name: req.params.name});
      res.end()
  
    } catch (err) {
      res.status(400).send({
        error: true,
        message: 'Dados incorretos'
      });
    }
});

app.get('/api/log', async (req,res) => {
    res.json(loginLog);
    res.end();
});

module.exports = app