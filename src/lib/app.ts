import fastify from "fastify";
import { Router } from "../http/Router";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifySwagger from "@fastify/swagger";
import cors from "@fastify/cors";

export const app = fastify()

app.register(Router,{
    prefix:"/api"
})

app.register(fastifySwagger, {
    openapi: {
      openapi: '3.0.2', // Versão do OpenAPI
      info: {
        title: 'HPT - API',
        description: 'Source API for consuming Hardware Price Tracker WebScrapping Service',
        version: '1.0.0',
      },
      paths: {
        
        "/api/products/prices/:Id":{
          description:"Rota utilizada pra retornar o histórico de preços de um determinado produto",
          get:{
            tags:["api","Products"],
            parameters:[{
              name:"Id",
              description:"O ID do produto que se deseja acessar",
              schema:{
                type:"string"
              },
              required:true,
              in:"query"
            }],
            responses:{
              200:{
                description:"Successfully returned the price list of a single product",
                content:{
                  "application/json":{
                    examples:{
                      Response:{
                        value:JSON.parse(`
                            {
      "Description": "Successfully returned product's price list",
      "response": {
        "Product": {
          "Id": "0910beb5-489c-4428-9378-62492e58503a",
          "Title": "Water Cooler Rise Mode Gamer Black, RGB, 240mm, AMD/Intel, Preto - RM-WCB-02-RGB",
          "Description": "Water Cooler Rise Mode Gamer Black, RGB, 240mm, AMD/Intel, Preto - RM-WCB-02-RGB",
          "Value": 169,
          "Link": "https://www.kabum.com.br/produto/130043/water-cooler-rise-mode-gamer-black-rgb-240mm-amd-intel-preto-rm-wcb-02-rgb",
          "Where": "hardware",
          "Kind": "Kabum",
          "ImageUrl": "https://images.kabum.com.br/produtos/fotos/130043/water-cooler-rise-mode-gamer-black-rgb-240mm-preto-rm-wcb-02-rgb_1663776681_m.jpg",
          "Slug": "water-cooler-rise-mode-gamer-black-rgb-240mm-amdintel-preto-rm-wcb-02-rgb"
        },
        "PriceRef": [
          {
            "Id": "e99e7e9b-504c-4461-b24c-726d76c814b8",
            "AtDate": "2024-12-04T00:35:04.444Z",
            "Price": 169,
            "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
          }
        ]
      },
      "Config": {
        "Id": "0910beb5-489c-4428-9378-62492e58503a"
      }
    }
                          `)
                      }
                    }
                  }
                }
              }
            }
          }
        },
        '/api/products/comparasion/:id': {
          description: "Rota utilizada para Comparar o melhor preço de um produto entre diferentes lojas.(Essa rota não está em funcionamento no momento)",
          get: {
            tags: ['api', 'Products'],
            parameters: [
              {
                name: 'Id',
                description: 'O Id de um produto (uuid) que se deseja comparar para obter os produtos equivalentes nas demais lojas.',
                schema: {
                  type: 'string',
                },
                in: 'query',
                required: true,
              },
            ],
            responses: {
              200: {
                description: 'A Informação foi retornada com sucesso.',
              },
              404: {
                content: {
                  'application/json': {
                    examples: {
                      Response: {
                        value: {
                          Description: 'Product Not Found',
                          Reason: 'Try to provide an existing product.',
                        },
                      },
                    },
                  },
                },
                description: 'Produto não encontrado.',
              },
              500: {
                content: {
                  'application/json': {
                    examples: {
                      example: {
                        value: {
                          Description: 'Unknown Server Error',
                        },
                      },
                    },
                  },
                },
                description: 'Erro desconhecido.',
              },
            },
          },
        },
        '/api/products/:Category/:Min--:Max/:Store/:Page': {
          description: "Rota utilizada para realizar uma pesquisa de retorno com filtros.",
          get: {
            tags: ['api', 'products'],
            parameters: [
              {
                name: 'Max',
                description: 'Valor máximo na busca de um produto.',
                schema: {
                  type: 'integer',
                },
                in: 'query',
              },
            ],
            responses: {
              200: {
                content: {
                  'application/json': {
                    examples: {
                      'Exemplo de retorno padrão': {
                        value: {
                          Description: 'Successfully returned products list',
                          response: {
                            providedParams: { Category: 'hardware', Page: 1 },
                            Return: { TotalList: [
                              JSON.parse(`
                                 {
                                    "Id": "5ffc66d8-8def-44bf-b88d-29bf6926359b",
                                    "Title": "Pasta Termica SnowDog Husky, 12.8W/mk, 3g, SNOWD-3G",
                                                            "Description": "Pasta Termica SnowDog Husky, 12.8W/mk, 3g, SNOWD-3G",
                                                            "Value": 117.53,
                                                            "Link": "https://www.pichau.com.br/pasta-termica-snowdog-husky-12-8w-mk-3g-snowd-3g",
                                                            "Where": "hardware",
                                                            "Kind": "Pichau",
                                                            "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/s/n/snowd-3g2155110.jpg",
                                                            "Slug": "pasta-termica-snowdog-husky-128wmk-3g-snowd-3g"
                                                        }
                                `)
                            ] },
                          },
                        },
                      },
                    },
                  },
                },
                description: 'Produtos retornados com sucesso.',
              },
            },
            },
        },
      },
    },
  });
app.register(fastifySwaggerUi,{
    routePrefix:"/docs"
})

//register CORS
app.register(cors, { 
    origin: true, // Permite todas as origens. Para restringir, você pode especificar uma URL, como 'http://localhost:3000'
    methods: ['GET', 'POST', 'PUT', 'DELETE', "PATCH"], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true // Permite o envio de cookies e headers de autorização entre o frontend e o backend
});