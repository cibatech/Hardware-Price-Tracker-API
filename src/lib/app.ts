import fastify from "fastify";
import { Router } from "../http/Router";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifySwagger from "@fastify/swagger";
import { config, OpenAPIoptions } from "./docs";


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
'/api/products/comparasion/:id': {
          description: "Rota utilizada para Comparar o melhor preço de um produto entre diferentes lojas.",
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
                            Return: { TotalList: [/* Lista de produtos */] },
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