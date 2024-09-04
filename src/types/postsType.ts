export type Post = {
    id: number,
    nome1: string,
    nome2: string,
    inicial: string,
    data: string,
    conteudo: string,
    img: string,
    datas: {
        comentarios: number,
        republicacao: number,
        likes: number,
        viws: number,
        compartilhamentos: number
    }
};