export interface MenuOption{
    icon: string;
    name: string;
    redirectTo: string;
}

 export interface RespuestaPublicacion {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

export interface Source {
  id?: string;
  name: string;
}

export interface RespuestaPoosts {
  ok: boolean;
  pagina: number;
  poost: Poost[];
}

export interface RespuestaPerfil{
  ok:boolean;
  usuario:Usuario[];
}

export interface RespuestaComment {
  ok: boolean;
  comment: Comment[];
}

export interface Comment{
  date?: String;
  _id?: string;
  description?: string;
  poost?: string;
  __v?: number;
}

export interface Poost {
  views?: number;
  likes?: number;
  _id?: string;
  title?: string;
  description?: string;
  usuario?: Usuario;
  date?: string;
  __v?: number;
}

export interface Usuario {
  _id?: string;
  nombre?: string;
  email?: string;
  genero?:string,
  fechaNaci?:string,
  tiempoCuidado?:string,
  relacion?:string,
  __v?: number;
}
