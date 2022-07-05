export interface Referencia {
    rec_number: number;
    type: string;
    author?: {name:string}[];
    editor?: {name:string}[];
    site?:string;
    number?: number;
    duration?: string;
    pub_location?: string;
    publisher?: string;
    edition?: string;
    electronic_resource_num?: string;
    language?:string;
    journal?:string;
    volume?:1;
    date:{year:number; month?:number; day?:number;};
    title:string;
    subtitle?:string;
    url?:string;
    pages?:string;
    course?: {institution:string;program:string;level:string;};
    access?:{year:number;month:number;day:number;};
    textual_id:string;
    cited?:boolean;
    book?: {
        title: string;
        subtitle?: string;
        editor: {name:string}[];
        pub_location: string;
        publisher: string;
        edition?: string;
        date:{year:number};
    }, 
    distinct?: string;
    author_full_name?: boolean; 
}