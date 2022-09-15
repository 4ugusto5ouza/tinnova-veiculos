export interface IVeiculoViewModel {
    id: number;
    modelo: string;
    marca: string;
    anoFabricacao: number;
    descricao: string;
    vendido: boolean;
    dataRegistro: Date;
    dataAtualizacao?: Date;
}