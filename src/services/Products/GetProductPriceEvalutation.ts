import { evaluation } from "../../lib/enums";
import { PriceReferenceRepository } from "../../repository/PriceRefRepository";
import { ProductRepository } from "../../repository/ProductRepository";
import { ResourceNotFoundError } from "../Error/ResourceNotFound";

/**
 * Enum que define os tipos de avaliação de preço para um produto.
 */


/**
 * Interface que descreve a resposta da avaliação de preço de um produto.
 */
interface GetProductPriceEvaluationResponse {
    /**
     * Preço médio calculado com base nos preços históricos do produto.
     */
    AveragePrice: number;
    /**
     * Avaliação do preço atual do produto em relação ao preço médio.
     */
    ProductEvaluation: evaluation;
}

/**
 * Caso de uso para avaliar o preço de um produto com base em preços históricos.
 */

export class GetProductPriceEvaluationUseCase{
        /**
     * Construtor para inicializar o caso de uso.
     * 
     * @param ProdRepo - Repositório responsável pela consulta de informações do produto.
     * @param PriceRepo - Repositório responsável pela consulta de referências de preços.
     */
    constructor(private ProdRepo:ProductRepository,private PriceRepo:PriceReferenceRepository){}
     /**
     * Executa a avaliação de preço de um produto.
     * 
     * @param PId - O ID do produto a ser avaliado.
     * @returns Um objeto contendo o preço médio e a avaliação do preço atual.
     * @throws ResourceNotFoundError - Se o produto com o ID fornecido não for encontrado.
     */
    async execute(PId:string):Promise<GetProductPriceEvaluationResponse>{
        const doesTheProductReallyExists = await this.ProdRepo.findById(PId);
        if(!doesTheProductReallyExists){
            throw new ResourceNotFoundError("Product",PId)
        }

        const ProdPriceList = await this.PriceRepo.findByProduct(PId);
        //Get Price average to do the evaluation of current price
        var average = 0
        for(let i=0;i<ProdPriceList.length;i++){
            const ePrice = ProdPriceList[i].Price;
            average+=ePrice
        }
        average = average/ProdPriceList.length

        //Analises current price to see if it is good enought 
        var status:evaluation = evaluation.Normal;
        const currentPrice = doesTheProductReallyExists.Value;
        if(currentPrice < average*1.05 && currentPrice>average){
            status = evaluation.Normal
        }else if(currentPrice < average && currentPrice > average-(average*0.05)){
            status = evaluation.Normal
        }else if(currentPrice < average-(average*0.05)){
            status = evaluation.Good
        }else if(currentPrice > average * 1.05){
            status = evaluation.Bad
        }


        return{
            AveragePrice:average,
            ProductEvaluation:status,
        }
    }
}