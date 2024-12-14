import { FastifyDynamicSwaggerOptions } from "@fastify/swagger";

export const OpenAPiConfig:FastifyDynamicSwaggerOptions={
    openapi: {
      openapi: '3.0.2', // Versão do OpenAPI
      info: {
        title: 'HPT - API',
        description: 'Source API for consuming Hardware Price Tracker WebScrapping Service',
        version: '1.0.0',
        contact:{
          email:"euthierrir@gmail.com",
          name:"Ciringa_men",url:"https://github.com/ciringa"
        },
        
      },
      servers:[
        {description:"Aplicação de comparação de preços",url:"https://github.com/cibatech/Hardware-Price-Tracker-App"},
        {description:"Painel administrativo",url:"https://github.com/cibatech/Hardware-Price-Tracker-Dashboard"},
        {description:"WebScrapping",url:"https://github.com/cibatech/Hardware-Price-Tracker-Dashboard"}
      ],
      tags:[
          {name:"Core",description:"Rotas nescessarias"},
          {name:"api",description:"Todas as rotas da aplicação"},
          {name:"Products",description:"Rotas utilizadas para acessar os produtos"},
          {name:"User",description:"Rotas utilizadas para acessar os usuários da aplicação"},
          {name:"admin",description:"Rotas utilizadas no painel administrativo da aplicação"},
          {name:"tracker",description:"Rotas utilizada pelo usuário para criar e gerenciar alertas de preço"}
        ],
      paths: {
        "/api/products/byStore/:Store/:Page":{
            description:"Rota que retorna todas os produtos dentro de uma loja",
            get:{
                tags:["api","Products"],
                parameters:[
                        {
                        name:"Store",
                        description:"Enum que determina em qual loja sera feita a busca. Limita-se a:[Terabyte, Pichau, Kabum]",
                        schema:{
                            type:"string"
                        },
                        required:true,
                        in:"query"
                    },
                    {
                        name: "Page",
                        description: 'Valor de qual pagina será retornado(20 itens por pagina).',
                        schema: {
                        type: 'integer',
                        },
                        in: 'query',
                    }],
                responses:{
                    200:{
                        description:"Retorno com sucesso das informações",
                        content:{
                            "application/json":{
                                examples:{
                                    Response:{
                                        value:JSON.parse(`
                                            {
                                         "Description": "Successfully returned Information",
                                         "response": {
                                           "Params": {
                                             "Page": 1,
                                             "Store": "Pichau"
                                           },
                                           "prodListFromProvidedStore": [
                                             {
                                               "Id": "001ea65f-88f7-431e-a371-5f6958a0c939",
                                               "Title": "Fonte Duex Pulse Pro, 850W, ATX 3.1, Full-Modular, Cybenetics Gold, PCIe 5.1, Preto, DXFOPRO850WG3",
                                               "Description": "Fonte Duex Pulse Pro, 850W, ATX 3.1, Full-Modular, Cybenetics Gold, PCIe 5.1, Preto, DXFOPRO850WG3",
                                               "Value": 799.99,
                                               "Link": "https://www.pichau.com.br/fonte-duex-pulse-pro-850w-atx-3-1-full-modular-cybenetics-gold-pcie-5-1-preto-dxfopro850wg3",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/d/x/dxfopro850wg3.jpg",
                                               "Slug": "fonte-duex-pulse-pro-850w-atx-31-full-modular-cybenetics-gold-pcie-51-preto-dxfopro850wg3"
                                             },
                                             {
                                               "Id": "01b76354-1470-4426-a9a6-a6e01bcd9bcc",
                                               "Title": "Fonte Galax Omega GL500S, 500W, 80 Plus Bronze, Preto, PGO50BOTNATB0",
                                               "Description": "Fonte Galax Omega GL500S, 500W, 80 Plus Bronze, Preto, PGO50BOTNATB0",
                                               "Value": 411.75,
                                               "Link": "https://www.pichau.com.br/fonte-galax-omega-gl500s-500w-80-plus-bronze-preto-pgo50botnatb0",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo50botnatb01.jpg",
                                               "Slug": "fonte-galax-omega-gl500s-500w-80-plus-bronze-preto-pgo50botnatb0"
                                             },
                                             {
                                               "Id": "074abc20-90b2-44ce-a04e-37aa0fdc038f",
                                               "Title": "Cabo Adaptador MD9 Displayport Para DVI, 6273",
                                               "Description": "Cabo Adaptador MD9 Displayport Para DVI, 6273",
                                               "Value": 58.71,
                                               "Link": "https://www.pichau.com.br/adaptador-md9-displayport-para-dvi-6273",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/6/2/6273.jpg",
                                               "Slug": "cabo-adaptador-md9-displayport-para-dvi-6273"
                                             },
                                             {
                                               "Id": "0779831c-a557-4ed5-bd76-1ec4edfcc900",
                                               "Title": "Teclado Mecanico Gamer Redragon Valheim, Rainbow, Switch Marrom, USB, Preto, K608-R-PT-BROWN",
                                               "Description": "Teclado Mecanico Gamer Redragon Valheim, Rainbow, Switch Marrom, USB, Preto, K608-R-PT-BROWN",
                                               "Value": 270.58,
                                               "Link": "https://www.pichau.com.br/teclado-mecanico-gamer-redragon-valheim-rainbow-switch-marrom-usb-preto-k608-r-pt-brown",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/k/6/k608-r-brown6.jpg",
                                               "Slug": "teclado-mecanico-gamer-redragon-valheim-rainbow-switch-marrom-usb-preto-k608-r-pt-brown"
                                             },
                                             {
                                               "Id": "08c66886-771d-46f5-9d37-5f2ba7ed2fd4",
                                               "Title": "Quadrante Thrustmaster TCA Quadrant Boeing Edition, Xbox e PC, Cinza e Branco, 4060219",
                                               "Description": "Quadrante Thrustmaster TCA Quadrant Boeing Edition, Xbox e PC, Cinza e Branco, 4060219",
                                               "Value": 2352.93,
                                               "Link": "https://www.pichau.com.br/quadrante-thrustmaster-tca-quadrant-boeing-edition-xbox-e-pc-cinza-e-branco-4060219",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/4/0/40602192.jpg",
                                               "Slug": "quadrante-thrustmaster-tca-quadrant-boeing-edition-xbox-e-pc-cinza-e-branco-4060219"
                                             },
                                             {
                                               "Id": "08c97801-a54c-4e55-89a9-6e0db3a49444",
                                               "Title": "Fonte MSI MAG A850GL, 850W, ATX 3.0, PCI-E 5.0, Full Modular, 80 Plus Gold, Preta, 306-7ZP8A39-CE0",
                                               "Description": "Fonte MSI MAG A850GL, 850W, ATX 3.0, PCI-E 5.0, Full Modular, 80 Plus Gold, Preta, 306-7ZP8A39-CE0",
                                               "Value": 976.46,
                                               "Link": "https://www.pichau.com.br/fonte-msi-mag-a850gl-850w-atx-3-0-pci-e-5-0-full-modular-80-plus-gold-preta-306-7zp8a39-ce0",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/3/0/306-7zp8a39-ce03.jpg",
                                               "Slug": "fonte-msi-mag-a850gl-850w-atx-30-pci-e-50-full-modular-80-plus-gold-preta-306-7zp8a39-ce0"
                                             },
                                             {
                                               "Id": "09922dc0-e1e0-40df-9295-7accfb50cc94",
                                               "Title": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
                                               "Description": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
                                               "Value": 156,
                                               "Link": "https://www.pichau.com.br/fonte-galax-omega-glx1000-1000w-atx-3-0-pcie-5-0-full-modular-80-plus-platinum-pgo1agpfnafb0",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo1agpfnafb02.jpg",
                                               "Slug": "fonte-galax-omega-glx1000-1000w-atx-30-pcie-50-full-modular-80-plus-platinum-pgo1agpfnafb0"
                                             },
                                             {
                                               "Id": "0f034f7b-1238-4e25-b1d4-8b95bd853637",
                                               "Title": "Mousepad Cooler Master MP511-XXL 1220x610x3mm Cordura Preto, MP-511-CBXC1",
                                               "Description": "Mousepad Cooler Master MP511-XXL 1220x610x3mm Cordura Preto, MP-511-CBXC1",
                                               "Value": 0,
                                               "Link": "https://www.pichau.com.br/mousepad-cooler-master-mp511-xxl-1220x610x3mm-cordura-preto-mp-511-cbxc1",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/m/p/mp-511-cbxc12312.jpg",
                                               "Slug": "mousepad-cooler-master-mp511-xxl-1220x610x3mm-cordura-preto-mp-511-cbxc1"
                                             },
                                             {
                                               "Id": "109fab30-cd8d-4be9-b573-b7f9f7895b2d",
                                               "Title": "Suporte Thrustmaster Simtask Steering Kit, Suporte + Manipulo, Preto, 4060302",
                                               "Description": "Suporte Thrustmaster Simtask Steering Kit, Suporte + Manipulo, Preto, 4060302",
                                               "Value": 1058.81,
                                               "Link": "https://www.pichau.com.br/suporte-thrustmaster-simtask-steering-kit-suporte-manipulo-preto-4060302",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/4/0/40603026.jpg",
                                               "Slug": "suporte-thrustmaster-simtask-steering-kit-suporte-manipulo-preto-4060302"
                                             },
                                             {
                                               "Id": "12e4fd66-48ed-44ce-8dc6-b346058cb9f6",
                                               "Title": "Fonte Acer AC1000, 1000W, 80 Plus Gold, Full Modular Preto, ACER-AC1000",
                                               "Description": "Fonte Acer AC1000, 1000W, 80 Plus Gold, Full Modular Preto, ACER-AC1000",
                                               "Value": 1764.69,
                                               "Link": "https://www.pichau.com.br/fonte-acer-ac1000-1000w-80-plus-gold-full-modular-preto-acer-ac1000",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/a/c/acer-ac1000.jpg",
                                               "Slug": "fonte-acer-ac1000-1000w-80-plus-gold-full-modular-preto-acer-ac1000"
                                             },
                                             {
                                               "Id": "19566310-59f0-4196-bfc8-77ca84d7c9fa",
                                               "Title": "Fonte Seasonic Vertex GX-850, 850W, ATX 3.0, PCIe 5.0, Full Modular, 80 Plus Gold, Preto, 12851GXAFS",
                                               "Description": "Fonte Seasonic Vertex GX-850, 850W, ATX 3.0, PCIe 5.0, Full Modular, 80 Plus Gold, Preto, 12851GXAFS",
                                               "Value": 156,
                                               "Link": "https://www.pichau.com.br/fonte-seasonic-vertex-gx-850-850w-atx-3-0-pcie-5-0-full-modular-80-plus-gold-preto-12851gxafs",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/1/2/12851gxafs2.jpg",
                                               "Slug": "fonte-seasonic-vertex-gx-850-850w-atx-30-pcie-50-full-modular-80-plus-gold-preto-12851gxafs"
                                             },
                                             {
                                               "Id": "1b64f47d-b15f-4e33-af04-5f964d24a484",
                                               "Title": "Filtro de Linha Intelbras EPR 208, 8 Tomadas, 1m, Preto, EPR-208",
                                               "Description": "Filtro de Linha Intelbras EPR 208, 8 Tomadas, 1m, Preto, EPR-208",
                                               "Value": 0,
                                               "Link": "https://www.pichau.com.br/filtro-de-linha-intelbras-epr-208-8-tomadas-1m-preto-epr-208",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/e/p/epr-208.jpg",
                                               "Slug": "filtro-de-linha-intelbras-epr-208-8-tomadas-1m-preto-epr-208"
                                             },
                                             {
                                               "Id": "1ce300d5-0a5f-492a-953c-d13e07928926",
                                               "Title": "Fonte Cooler Master V750 SFX Gold, 750W, PCI-E 5.0, Full Modular, 80 Plus Gold, Preto, MPY-7501-SFHAGV-3WO",
                                               "Description": "Fonte Cooler Master V750 SFX Gold, 750W, PCI-E 5.0, Full Modular, 80 Plus Gold, Preto, MPY-7501-SFHAGV-3WO",
                                               "Value": 1529.4,
                                               "Link": "https://www.pichau.com.br/fonte-cooler-master-v750-sfx-gold-750w-pci-e-5-0-full-modular-80-plus-gold-preto-mpy-7501-sfhagv-3wo",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/m/p/mpy-7501-sfhagv-3wo3.jpg",
                                               "Slug": "fonte-cooler-master-v750-sfx-gold-750w-pci-e-50-full-modular-80-plus-gold-preto-mpy-7501-sfhagv-3wo"
                                             },
                                             {
                                               "Id": "1dd02e7c-a79f-4ce0-9c57-9e785b112a96",
                                               "Title": "Teclado Gamer Force One Spectre, RGB, ABNT2, Branco e Preto, FR.TC.SP.01",
                                               "Description": "Teclado Gamer Force One Spectre, RGB, ABNT2, Branco e Preto, FR.TC.SP.01",
                                               "Value": 0,
                                               "Link": "https://www.pichau.com.br/teclado-gamer-force-one-spectre-rgb-abnt2-branco-e-preto-fr-tc-sp-01",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/f/r/frtcsp014.jpg",
                                               "Slug": "teclado-gamer-force-one-spectre-rgb-abnt2-branco-e-preto-frtcsp01"
                                             },
                                             {
                                               "Id": "28a6a7f9-bf0b-4b53-ba1c-86f9d4dbf285",
                                               "Title": "Fonte Seasonic Vertex PX-1200, Full-Modular, 1200W, ATX 3.0, PCIe 5.0, 80 Plus Platinum, Preta, 12122PXAFS",
                                               "Description": "Fonte Seasonic Vertex PX-1200, Full-Modular, 1200W, ATX 3.0, PCIe 5.0, 80 Plus Platinum, Preta, 12122PXAFS",
                                               "Value": 156,
                                               "Link": "https://www.pichau.com.br/fonte-seasonic-vertex-px-1200-full-modular-1200w-atx-3-0-pcie-5-0-80-plus-platinum-preta-12122pxafs",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/1/2/12122pxafs.jpg",
                                               "Slug": "fonte-seasonic-vertex-px-1200-full-modular-1200w-atx-30-pcie-50-80-plus-platinum-preta-12122pxafs"
                                             },
                                             {
                                               "Id": "2e6b1579-cdb2-4246-9c4a-ad7e06aecfe8",
                                               "Title": "Fonte Galax Omega GL650S, 650W, 80 Plus Bronze, Preto, PGO65BOTNATB0",
                                               "Description": "Fonte Galax Omega GL650S, 650W, 80 Plus Bronze, Preto, PGO65BOTNATB0",
                                               "Value": 517.63,
                                               "Link": "https://www.pichau.com.br/fonte-galax-omega-gl650s-650w-80-plus-bronze-preto-pgo65botnatb0",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo65botnatb02.jpg",
                                               "Slug": "fonte-galax-omega-gl650s-650w-80-plus-bronze-preto-pgo65botnatb0"
                                             },
                                             {
                                               "Id": "2f147acb-9835-4243-9082-4d1dc92fd63b",
                                               "Title": "Teclado Mecanico Aigo GD68 Brown Sugar, Wireless, Switch Azul, Preto e Cinza, GD68-BS-BL",
                                               "Description": "Teclado Mecanico Aigo GD68 Brown Sugar, Wireless, Switch Azul, Preto e Cinza, GD68-BS-BL",
                                               "Value": 0,
                                               "Link": "https://www.pichau.com.br/teclado-mecanico-aigo-gd68-brown-sugar-wireless-switch-azul-preto-e-cinza-gd68-bs-bl",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/g/d/gd68-bs-bl1651211.jpg",
                                               "Slug": "teclado-mecanico-aigo-gd68-brown-sugar-wireless-switch-azul-preto-e-cinza-gd68-bs-bl"
                                             },
                                             {
                                               "Id": "2f565b7c-f82d-46c0-a0d7-f8dc448a9248",
                                               "Title": "Fonte Gigabyte UD Gold, 750W, Full Modular, 80 Plus Gold, Preto, GP-UD750GM",
                                               "Description": "Fonte Gigabyte UD Gold, 750W, Full Modular, 80 Plus Gold, Preto, GP-UD750GM",
                                               "Value": 156,
                                               "Link": "https://www.pichau.com.br/fonte-gigabyte-ud-gold-750w-full-modular-80-plus-gold-preto-gp-ud750gm",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/g/p/gp-ud750gm3.jpg",
                                               "Slug": "fonte-gigabyte-ud-gold-750w-full-modular-80-plus-gold-preto-gp-ud750gm"
                                             },
                                             {
                                               "Id": "314f5f49-6ab1-4417-9b9c-9e47b403292e",
                                               "Title": "Controladora Hercules DJControl Starlight, Preto, 4780884",
                                               "Description": "Controladora Hercules DJControl Starlight, Preto, 4780884",
                                               "Value": 1411.75,
                                               "Link": "https://www.pichau.com.br/controladora-hercules-djcontrol-starlight-preto-4780884",
                                               "Where": "perifericos",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/4/7/47808841.jpg",
                                               "Slug": "controladora-hercules-djcontrol-starlight-preto-4780884"
                                             },
                                             {
                                               "Id": "31cd6f38-2eac-4827-b438-c5ed5262e796",
                                               "Title": "Gabinete Gamer Cooler Master Ncore 100 Max, Com 1 Fan, Fonte 850W e Water Cooler 120mm, Bronze, NR100-ZNNN85-SL0",
                                               "Description": "Gabinete Gamer Cooler Master Ncore 100 Max, Com 1 Fan, Fonte 850W e Water Cooler 120mm, Bronze, NR100-ZNNN85-SL0",
                                               "Value": 4117.63,
                                               "Link": "https://www.pichau.com.br/gabinete-gamer-cooler-master-ncore-100-max-com-1-fan-fonte-850w-e-water-cooler-120mm-bronze-nr100-znnn85-sl0",
                                               "Where": "hardware",
                                               "Kind": "Pichau",
                                               "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/n/r/nr100-znnn85-sl09_1_1.jpg",
                                               "Slug": "gabinete-gamer-cooler-master-ncore-100-max-com-1-fan-fonte-850w-e-water-cooler-120mm-bronze-nr100-znnn85-sl0"
                                             }
                                           ]
                                         },
                                         "Config": {
                                           "SelectedStore": "Pichau",
                                           "Page": "1"
                                         }
                                       }
                                                                               `)
                                    }
                                }
                            }
                        }
                    },
                    400:{
                        description:"Parametro ivalido. tente seguir o que é descrito acima",
                        content:{
                            "application/json":{
                                examples:{
                                    Response:{
                                        value:JSON.parse(`
                                            {
                                                "Description":"Invalid Parameter Error",
                                                "Reason":"Page number is invalid. Try to provide something between 0 and 999999999",
                                                "Error":{
                                                    "err":"Err"
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
        "/api/products/trends/:Id":{
            description:"Rota que retorna uma avaliação das tendencias de preço de um produto em especifico. Enum Good,Bad e Normal",
            get:{
                tags:["api","Products","Core"],
                parameters:[{
                    name:"Id",
                    description:"Id do produto que se deseja acessar",
                    schema:{
                        type:"string"
                      },
                      required:true,
                      in:"query"
                }],
                responses:{
                    200:{
                        description:"Retornou com Sucesso as informções",
                        content:{
                            "application/json":{
                                examples:{
                                    Response:{
                                        value:JSON.parse(`
                                        
                                            {
                                    "Description": "Successfully returned Information",
                                    "response": {
                                        "AveragePrice": 169,
                                        "ProductEvaluation": "Normal"
                                    },
                                    "Config": {
                                        "Id": "0910beb5-489c-4428-9378-62492e58503a"
                                    }
                                    }`)
                                    }
                                }
                            }
                        }
                    },
                    404:{
                        description:"Não foi possivel encontrar o ID",
                    }
                }
            }
        },
        "/api/products/prices/:Id/:PasDays":{
          description:"Rota utilizada pra retornar o histórico de preços de um determinado produto",
          get:{
            tags:["api","Products","Core"],
            parameters:[
              {
                name:"Id",
                description:"O ID do produto que se deseja acessar",
                schema:{
                  type:"string"
                },
                required:true,
                in:"query"
              },
              {
                name:"PasDays",
                description:"A quantidade de dias no passado que será usada como filtro. Irá retornar o registro de preços de um produto em até x dias no passado definido por este valor",
                schema:{
                  type:"number"
                },
                required:true,
                in:"query",
                examples:{
                  Aweek:{
                    value:7
                  },
                  AMonth:{
                    value:30
                  },
                  AYear:{
                    value:345
                  }
                }
              }
            
            ],
            responses:{
              200:{
                description:"Successfully returned the price list of a single product",
                content:{
                  "application/json":{
                    examples:{
                      Response:{
                        value:JSON.parse(`
                                                {
                      "Description": "Successfully returned product's price list from specified time elapse",
                      "response": {
                        "Product": {
                          "Id": "0910beb5-489c-4428-9378-62492e58503a",
                          "Title": "Water Cooler Rise Mode Gamer Black, RGB, 240mm, AMD/Intel, Preto - RM-WCB-02-RGB",
                          "Description": "Water Cooler Rise Mode Gamer Black, RGB, 240mm, AMD/Intel, Preto - RM-WCB-02-RGB",
                          "Value": 179,
                          "Link": "https://www.kabum.com.br/produto/130043/water-cooler-rise-mode-gamer-black-rgb-240mm-amd-intel-preto-rm-wcb-02-rgb",
                          "Where": "hardware",
                          "Kind": "Kabum",
                          "ImageUrl": "https://images.kabum.com.br/produtos/fotos/130043/water-cooler-rise-mode-gamer-black-rgb-240mm-preto-rm-wcb-02-rgb_1663776681_m.jpg",
                          "Slug": "water-cooler-rise-mode-gamer-black-rgb-240mm-amdintel-preto-rm-wcb-02-rgb",
                          "onInstallment": "8x de R$ 26,46"
                        },
                        "PriceRef": {
                          "2024-12-04": [
                            {
                              "Id": "e99e7e9b-504c-4461-b24c-726d76c814b8",
                              "AtDate": "2024-12-04T00:35:04.444Z",
                              "Price": 169,
                              "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
                            }
                          ],
                          "2024-12-05": [
                            {
                              "Id": "21064fe6-d36f-40b0-b3f1-36b892524d1b",
                              "AtDate": "2024-12-05T00:38:28.109Z",
                              "Price": 169,
                              "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
                            },
                            {
                              "Id": "55669e33-0d10-4d66-a5dd-0b46db41363d",
                              "AtDate": "2024-12-05T00:40:23.505Z",
                              "Price": 169,
                              "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
                            }
                          ],
                          "2024-12-07": [
                            {
                              "Id": "039ca1f2-6680-46aa-9453-3e0179a8d151",
                              "AtDate": "2024-12-07T15:52:24.059Z",
                              "Price": 179,
                              "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
                            },
                            {
                              "Id": "ca983626-d466-4c44-ae0a-86fdc02e3744",
                              "AtDate": "2024-12-07T15:52:59.099Z",
                              "Price": 179,
                              "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
                            }
                          ],
                          "2024-12-08": [
                            {
                              "Id": "f99f5a6a-d512-4fc3-98df-f123fd7bbf2b",
                              "AtDate": "2024-12-08T15:32:39.059Z",
                              "Price": 179,
                              "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
                            },
                            {
                              "Id": "4f02d656-c5a9-42ec-8846-60061632f0e3",
                              "AtDate": "2024-12-08T15:33:23.921Z",
                              "Price": 179,
                              "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
                            }
                          ]
                        }
                      },
                      "Config": {
                        "Id": "0910beb5-489c-4428-9378-62492e58503a",
                        "PasDays": "90"
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
            tags: ['api', 'Products',"Core"],
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
                content:{
                  "application/json":{
                    examples:{
                      Response:{
                        value:JSON.parse(`
                            
{
  "Description": "Successfully returned Information",
  "response": {
    "FindInThreeStores": [
      {
        "Id": "16f48407-57c7-45c2-8ce7-ba9ab370a636",
        "Title": "Fonte Gamer Rise Mode Zeus, 1000W, 80 Plus Platinum, Modular, PFC Ativo, Preto - RM-PSU-01-PA-1000",
        "Description": "Fonte Gamer Rise Mode Zeus, 1000W, 80 Plus Platinum, Modular, PFC Ativo, Preto - RM-PSU-01-PA-1000",
        "Value": 679,
        "Link": "https://www.kabum.com.br/produto/525054/fonte-gamer-rise-mode-zeus-1000w-80-plus-platinum-modular-pfc-ativo-preto-rm-psu-01-pa-1000",
        "Where": "hardware/fontes",
        "Kind": "Kabum",
        "ImageUrl": "https://images.kabum.com.br/produtos/fotos/525054/fonte-gamer-rise-mode-zeus-1000w-platinum-full-modular-pfc-ativo-preto-rm-psu-01-pa-1000_1724078628_m.jpg",
        "Slug": "fonte-gamer-rise-mode-zeus-1000w-80-plus-platinum-modular-pfc-ativo-preto-rm-psu-01-pa-1000"
      },
      {
        "Id": "09922dc0-e1e0-40df-9295-7accfb50cc94",
        "Title": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
        "Description": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
        "Value": 156,
        "Link": "https://www.pichau.com.br/fonte-galax-omega-glx1000-1000w-atx-3-0-pcie-5-0-full-modular-80-plus-platinum-pgo1agpfnafb0",
        "Where": "hardware",
        "Kind": "Pichau",
        "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo1agpfnafb02.jpg",
        "Slug": "fonte-galax-omega-glx1000-1000w-atx-30-pcie-50-full-modular-80-plus-platinum-pgo1agpfnafb0"
      },
      {
        "Id": "ce48e954-ebf5-46fe-906a-996f1747f5fe",
        "Title": "Fonte SuperFrame, 1000W, 80 Plus Gold, Full Modular, Com Conector PCIe 5.0, PFC Ativo, SF-G1000M",
        "Description": "Fonte SuperFrame, 1000W, 80 Plus Gold, Full Modular, Com Conector PCIe 5.0, PFC Ativo, SF-G1000M",
        "Value": 649.9,
        "Link": "https://www.terabyteshop.com.br/produto/22007/fonte-superframe-1000w-80-plus-gold-full-modular-pfc-ativo-sf-g1000m",
        "Where": "hardware",
        "Kind": "TeraByte",
        "ImageUrl": "https://img.terabyteshop.com.br/produto/p/fonte-superframe-1000w-80-plus-gold-full-modular-pfc-ativo-sf-g1000m_148889.jpg",
        "Slug": "fonte-superframe-1000w-80-plus-gold-full-modular-com-conector-pcie-50-pfc-ativo-sf-g1000m"
      }
    ],
    "BestPrice": {
      "Id": "09922dc0-e1e0-40df-9295-7accfb50cc94",
      "Title": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
      "Description": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
      "Value": 156,
      "Link": "https://www.pichau.com.br/fonte-galax-omega-glx1000-1000w-atx-3-0-pcie-5-0-full-modular-80-plus-platinum-pgo1agpfnafb0",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo1agpfnafb02.jpg",
      "Slug": "fonte-galax-omega-glx1000-1000w-atx-30-pcie-50-full-modular-80-plus-platinum-pgo1agpfnafb0"
    }
  },
  "Config": {
    "Id": "09922dc0-e1e0-40df-9295-7accfb50cc94"
  }
}
                          
                          `)
                      }
                    }
                  }
                }
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
        '/api/products/:Category/:Min--:Max/:Store/:Query/:Page': {
          description: "Rota utilizada para realizar uma pesquisa de retorno com filtros.",
          get: {
            tags: ['api', 'Products',"Core"],
            parameters: [
              {
                name: 'Max',
                description: 'Valor máximo na busca de um produto.',
                schema: {
                  type: 'integer',
                },
                in: 'query',
              },
              {
                name: 'Min',
                description: 'Valor minimo na busca de um produto.',
                schema: {
                  type: 'integer',
                },
                in: 'query',
              },
              {
                name: 'Store',
                description: 'Filtro a partir da loja. enum de: [Terabyte,Pichau,Kabum]',
                schema: {
                  type: 'string',
                },
                in: 'query',
              },
              {
                name: 'Page',
                description: 'Valor de qual pagina será retornado(20 itens por pagina).',
                schema: {
                  type: 'integer',
                },
                in: 'query',
              },
              {
                name: "Query",
                description: 'Valor que será utilizado na pesquisa.',
                schema: {
                type: 'string',
                },
                in: 'query',
              }
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
                            ], TotalListLenght:34 },
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
        '/api/products/all/:Page':{
            description:"Lista todos os produtos da aplicação páginados. Nao recebe nenhum filtro e apenas o número da página como parametro.",
            get:{
                tags:["api","Products"],
                parameters:[
                    {
                        name: 'Page',
                        description: 'Valor de qual pagina será retornado(20 itens por pagina).',
                        schema: {
                          type: 'integer',
                        },
                        in: 'query',
                    }
                ],
                responses:{
                    200:{
                        description:"Retorno com sucesso das informações",
                        content:{
                            "application/json":{
                                examples:{
                                    Response:{
                                        value:JSON.parse(`
                                        
                                            {
                                              "Description": "Successfully returned products list",
                                              "response": {
                                                "ProductList": [
                                                  {
                                                    "Id": "001ea65f-88f7-431e-a371-5f6958a0c939",
                                                    "Title": "Fonte Duex Pulse Pro, 850W, ATX 3.1, Full-Modular, Cybenetics Gold, PCIe 5.1, Preto, DXFOPRO850WG3",
                                                    "Description": "Fonte Duex Pulse Pro, 850W, ATX 3.1, Full-Modular, Cybenetics Gold, PCIe 5.1, Preto, DXFOPRO850WG3",
                                                    "Value": 799.99,
                                                    "Link": "https://www.pichau.com.br/fonte-duex-pulse-pro-850w-atx-3-1-full-modular-cybenetics-gold-pcie-5-1-preto-dxfopro850wg3",
                                                    "Where": "hardware",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/d/x/dxfopro850wg3.jpg",
                                                    "Slug": "fonte-duex-pulse-pro-850w-atx-31-full-modular-cybenetics-gold-pcie-51-preto-dxfopro850wg3"
                                                  },
                                                  {
                                                    "Id": "01b76354-1470-4426-a9a6-a6e01bcd9bcc",
                                                    "Title": "Fonte Galax Omega GL500S, 500W, 80 Plus Bronze, Preto, PGO50BOTNATB0",
                                                    "Description": "Fonte Galax Omega GL500S, 500W, 80 Plus Bronze, Preto, PGO50BOTNATB0",
                                                    "Value": 411.75,
                                                    "Link": "https://www.pichau.com.br/fonte-galax-omega-gl500s-500w-80-plus-bronze-preto-pgo50botnatb0",
                                                    "Where": "hardware",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo50botnatb01.jpg",
                                                    "Slug": "fonte-galax-omega-gl500s-500w-80-plus-bronze-preto-pgo50botnatb0"
                                                  },
                                                  {
                                                    "Id": "03820e46-d911-49b6-8375-1a72f1ee0166",
                                                    "Title": "Kit Com 3 Ventoinhas Rise Mode Energy, 120mm, ARGB, Preto  - FN-02-RGB-5V",
                                                    "Description": "Kit Com 3 Ventoinhas Rise Mode Energy, 120mm, ARGB, Preto  - FN-02-RGB-5V",
                                                    "Value": 69,
                                                    "Link": "https://www.kabum.com.br/produto/153647/kit-com-3-ventoinhas-rise-mode-energy-120mm-argb-preto-fn-02-rgb-5v",
                                                    "Where": "hardware",
                                                    "Kind": "Kabum",
                                                    "ImageUrl": "https://images.kabum.com.br/produtos/fotos/153647/kit-com-3-ventoinhas-rise-mode-energy-120mm-argb-preto-fn-02-rgb-5v_1728325792_m.jpg",
                                                    "Slug": "kit-com-3-ventoinhas-rise-mode-energy-120mm-argb-preto-fn-02-rgb-5v"
                                                  },
                                                  {
                                                    "Id": "0398d4fb-8782-4578-a42f-3ef872eb2a8b",
                                                    "Title": "Placa de Vídeo MSI NVIDIA GeForce RTX 3060 VENTUS 3X 12G OC Triple Fan, LHR, 12GB, GDDR6, DLSS, Ray Traci",
                                                    "Description": "Placa de Vídeo MSI NVIDIA GeForce RTX 3060 VENTUS 3X 12G OC Triple Fan, LHR, 12GB, GDDR6, DLSS, Ray Traci",
                                                    "Value": 0,
                                                    "Link": "https://www.terabyteshop.com.br/produto/21366/placa-de-video-msi-geforce-rtx-3060-ventus-3x-12g-oc-lhr-12gb-gddr6-dlss-ray-tracing",
                                                    "Where": "hardware",
                                                    "Kind": "TeraByte",
                                                    "ImageUrl": "https://img.terabyteshop.com.br/produto/p/placa-de-video-msi-geforce-rtx-3060-ventus-3x-12g-oc-lhr-12gb-gddr6-dlss-ray-tracing_142183.jpg",
                                                    "Slug": "placa-de-video-msi-nvidia-geforce-rtx-3060-ventus-3x-12g-oc-triple-fan-lhr-12gb-gddr6-dlss-ray-traci"
                                                  },
                                                  {
                                                    "Id": "03d73cc2-dd90-4865-8c40-269145122432",
                                                    "Title": "Placa Mãe Gigabyte A520M K V2, Chipset A520, AMD AM4, MATX, DDR4",
                                                    "Description": "Placa Mãe Gigabyte A520M K V2, Chipset A520, AMD AM4, MATX, DDR4",
                                                    "Value": 469.9,
                                                    "Link": "https://www.terabyteshop.com.br/produto/24707/placa-mae-gigabyte-a520m-k-v2-chipset-a520-amd-am4-matx-ddr4",
                                                    "Where": "hardware",
                                                    "Kind": "TeraByte",
                                                    "ImageUrl": "https://img.terabyteshop.com.br/produto/p/placa-mae-gigabyte-a520m-k-v2-chipset-a520-amd-am4-matx-ddr4_168077.png",
                                                    "Slug": "placa-mae-gigabyte-a520m-k-v2-chipset-a520-amd-am4-matx-ddr4"
                                                  },
                                                  {
                                                    "Id": "045b7484-3347-4435-9503-075432268bed",
                                                    "Title": "SSD Kingston NV2, 500GB, M.2 NVMe, 2280, Leitura 3500MBs e Gravação 2100MBs, SNV2S/500G",
                                                    "Description": "SSD Kingston NV2, 500GB, M.2 NVMe, 2280, Leitura 3500MBs e Gravação 2100MBs, SNV2S/500G",
                                                    "Value": 264.9,
                                                    "Link": "https://www.terabyteshop.com.br/produto/23002/ssd-kingston-nv2-500gb-m2-nvme-2280-leitura-3500mbs-e-gravacao-2100mbs-snv2s500g",
                                                    "Where": "hardware",
                                                    "Kind": "TeraByte",
                                                    "ImageUrl": "https://img.terabyteshop.com.br/produto/p/ssd-kingston-nv2-500gb-m2-nvme-2280-leitura-3500mbs-e-gravacao-2100mbs-snv2s500g_154165.jpg",
                                                    "Slug": "ssd-kingston-nv2-500gb-m2-nvme-2280-leitura-3500mbs-e-gravacao-2100mbs-snv2s500g"
                                                  },
                                                  {
                                                    "Id": "074abc20-90b2-44ce-a04e-37aa0fdc038f",
                                                    "Title": "Cabo Adaptador MD9 Displayport Para DVI, 6273",
                                                    "Description": "Cabo Adaptador MD9 Displayport Para DVI, 6273",
                                                    "Value": 58.71,
                                                    "Link": "https://www.pichau.com.br/adaptador-md9-displayport-para-dvi-6273",
                                                    "Where": "perifericos",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/6/2/6273.jpg",
                                                    "Slug": "cabo-adaptador-md9-displayport-para-dvi-6273"
                                                  },
                                                  {
                                                    "Id": "0779831c-a557-4ed5-bd76-1ec4edfcc900",
                                                    "Title": "Teclado Mecanico Gamer Redragon Valheim, Rainbow, Switch Marrom, USB, Preto, K608-R-PT-BROWN",
                                                    "Description": "Teclado Mecanico Gamer Redragon Valheim, Rainbow, Switch Marrom, USB, Preto, K608-R-PT-BROWN",
                                                    "Value": 270.58,
                                                    "Link": "https://www.pichau.com.br/teclado-mecanico-gamer-redragon-valheim-rainbow-switch-marrom-usb-preto-k608-r-pt-brown",
                                                    "Where": "perifericos",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/k/6/k608-r-brown6.jpg",
                                                    "Slug": "teclado-mecanico-gamer-redragon-valheim-rainbow-switch-marrom-usb-preto-k608-r-pt-brown"
                                                  },
                                                  {
                                                    "Id": "07f7e740-14f7-4c3e-8a98-b00eef54832d",
                                                    "Title": "Mouse Gamer Redragon Cobra, Chroma RGB, 10000DPI, 7 Botões, Preto - M711 V2",
                                                    "Description": "Mouse Gamer Redragon Cobra, Chroma RGB, 10000DPI, 7 Botões, Preto - M711 V2",
                                                    "Value": 99,
                                                    "Link": "https://www.kabum.com.br/produto/94555/mouse-gamer-redragon-cobra-chroma-rgb-10000dpi-7-botoes-preto-m711-v2",
                                                    "Where": "perifericos",
                                                    "Kind": "Kabum",
                                                    "ImageUrl": "https://images.kabum.com.br/produtos/fotos/94555/mouse-gamer-redragon-cobra-chroma-rgb-12400dpi-7-botoes-preto-m711-v2_1656018617_m.jpg",
                                                    "Slug": "mouse-gamer-redragon-cobra-chroma-rgb-10000dpi-7-botoes-preto-m711-v2"
                                                  },
                                                  {
                                                    "Id": "08c66886-771d-46f5-9d37-5f2ba7ed2fd4",
                                                    "Title": "Quadrante Thrustmaster TCA Quadrant Boeing Edition, Xbox e PC, Cinza e Branco, 4060219",
                                                    "Description": "Quadrante Thrustmaster TCA Quadrant Boeing Edition, Xbox e PC, Cinza e Branco, 4060219",
                                                    "Value": 2352.93,
                                                    "Link": "https://www.pichau.com.br/quadrante-thrustmaster-tca-quadrant-boeing-edition-xbox-e-pc-cinza-e-branco-4060219",
                                                    "Where": "perifericos",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/4/0/40602192.jpg",
                                                    "Slug": "quadrante-thrustmaster-tca-quadrant-boeing-edition-xbox-e-pc-cinza-e-branco-4060219"
                                                  },
                                                  {
                                                    "Id": "08c97801-a54c-4e55-89a9-6e0db3a49444",
                                                    "Title": "Fonte MSI MAG A850GL, 850W, ATX 3.0, PCI-E 5.0, Full Modular, 80 Plus Gold, Preta, 306-7ZP8A39-CE0",
                                                    "Description": "Fonte MSI MAG A850GL, 850W, ATX 3.0, PCI-E 5.0, Full Modular, 80 Plus Gold, Preta, 306-7ZP8A39-CE0",
                                                    "Value": 976.46,
                                                    "Link": "https://www.pichau.com.br/fonte-msi-mag-a850gl-850w-atx-3-0-pci-e-5-0-full-modular-80-plus-gold-preta-306-7zp8a39-ce0",
                                                    "Where": "hardware",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/3/0/306-7zp8a39-ce03.jpg",
                                                    "Slug": "fonte-msi-mag-a850gl-850w-atx-30-pci-e-50-full-modular-80-plus-gold-preta-306-7zp8a39-ce0"
                                                  },
                                                  {
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
                                                  {
                                                    "Id": "09922dc0-e1e0-40df-9295-7accfb50cc94",
                                                    "Title": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
                                                    "Description": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
                                                    "Value": 156,
                                                    "Link": "https://www.pichau.com.br/fonte-galax-omega-glx1000-1000w-atx-3-0-pcie-5-0-full-modular-80-plus-platinum-pgo1agpfnafb0",
                                                    "Where": "hardware",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo1agpfnafb02.jpg",
                                                    "Slug": "fonte-galax-omega-glx1000-1000w-atx-30-pcie-50-full-modular-80-plus-platinum-pgo1agpfnafb0"
                                                  },
                                                  {
                                                    "Id": "0be2f086-cac5-40d4-8ac2-ee49558ab9a1",
                                                    "Title": "Fonte XPG, Pylon, 650W, 80 Plus Bronze, PFC Ativo, PYLON650B-BKCBR",
                                                    "Description": "Fonte XPG, Pylon, 650W, 80 Plus Bronze, PFC Ativo, PYLON650B-BKCBR",
                                                    "Value": 349.9,
                                                    "Link": "https://www.terabyteshop.com.br/produto/15885/fonte-xpg-pylon-650w-80-plus-bronze-pfc-ativo-75260163",
                                                    "Where": "hardware",
                                                    "Kind": "TeraByte",
                                                    "ImageUrl": "https://img.terabyteshop.com.br/produto/p/fonte-xpg-pylon-650w-80-plus-bronze-pfc-ativo-75260163_108407.png",
                                                    "Slug": "fonte-xpg-pylon-650w-80-plus-bronze-pfc-ativo-pylon650b-bkcbr"
                                                  },
                                                  {
                                                    "Id": "0f034f7b-1238-4e25-b1d4-8b95bd853637",
                                                    "Title": "Mousepad Cooler Master MP511-XXL 1220x610x3mm Cordura Preto, MP-511-CBXC1",
                                                    "Description": "Mousepad Cooler Master MP511-XXL 1220x610x3mm Cordura Preto, MP-511-CBXC1",
                                                    "Value": 0,
                                                    "Link": "https://www.pichau.com.br/mousepad-cooler-master-mp511-xxl-1220x610x3mm-cordura-preto-mp-511-cbxc1",
                                                    "Where": "perifericos",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/m/p/mp-511-cbxc12312.jpg",
                                                    "Slug": "mousepad-cooler-master-mp511-xxl-1220x610x3mm-cordura-preto-mp-511-cbxc1"
                                                  },
                                                  {
                                                    "Id": "109fab30-cd8d-4be9-b573-b7f9f7895b2d",
                                                    "Title": "Suporte Thrustmaster Simtask Steering Kit, Suporte + Manipulo, Preto, 4060302",
                                                    "Description": "Suporte Thrustmaster Simtask Steering Kit, Suporte + Manipulo, Preto, 4060302",
                                                    "Value": 1058.81,
                                                    "Link": "https://www.pichau.com.br/suporte-thrustmaster-simtask-steering-kit-suporte-manipulo-preto-4060302",
                                                    "Where": "perifericos",
                                                    "Kind": "Pichau",
                                                    "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/4/0/40603026.jpg",
                                                    "Slug": "suporte-thrustmaster-simtask-steering-kit-suporte-manipulo-preto-4060302"
                                                  },
                                                  {
                                                    "Id": "10b75da4-0d8c-41d4-894a-8f257d9068fb",
                                                    "Title": "Placa De Vídeo Asus Dual AMD Radeon RX 6600 V3, 8GB, GDDR6, FSR, Ray Tracing, DUAL-RX6600-8G-V3",
                                                    "Description": "Placa De Vídeo Asus Dual AMD Radeon RX 6600 V3, 8GB, GDDR6, FSR, Ray Tracing, DUAL-RX6600-8G-V3",
                                                    "Value": 0,
                                                    "Link": "https://www.terabyteshop.com.br/produto/29685/placa-de-video-asus-dual-amd-radeon-rx-6600-v3-8gb-gddr6-fsr-ray-tracing-dual-rx6600-8g-v3",
                                                    "Where": "hardware",
                                                    "Kind": "TeraByte",
                                                    "ImageUrl": "https://img.terabyteshop.com.br/produto/p/placa-de-video-asus-dual-amd-radeon-rx-6600-v3-8gb-gddr6-fsr-ray-tracing-dual-rx6600-8g-v3_202276.jpg",
                                                    "Slug": "placa-de-video-asus-dual-amd-radeon-rx-6600-v3-8gb-gddr6-fsr-ray-tracing-dual-rx6600-8g-v3"
                                                  },
                                                  {
                                                    "Id": "11574a12-7503-4a22-891b-a3b66f09f46d",
                                                    "Title": "Placa Mãe Biostar B550MH, Chipset B550, AMD AM4, mATX, DDR4",
                                                    "Description": "Placa Mãe Biostar B550MH, Chipset B550, AMD AM4, mATX, DDR4",
                                                    "Value": 429.9,
                                                    "Link": "https://www.terabyteshop.com.br/produto/17719/placa-mae-biostar-b550mh-chipset-b550-amd-am4-matx-ddr4-ab55am4s-r02-bs212x",
                                                    "Where": "hardware",
                                                    "Kind": "TeraByte",
                                                    "ImageUrl": "https://img.terabyteshop.com.br/produto/p/placa-mae-biostar-b550mh-chipset-b550-amd-am4-matx-ddr4-ab55am4s-r02-bs212x_175525.png",
                                                    "Slug": "placa-mae-biostar-b550mh-chipset-b550-amd-am4-matx-ddr4"
                                                  },
                                                  {
                                                    "Id": "1174e088-5eeb-4dab-a6ef-51e7f8f1c45f",
                                                    "Title": "Placa de Som Creative Sound Blaster PLAY! 3, USB, Portátil, 70SB173000000",
                                                    "Description": "Placa de Som Creative Sound Blaster PLAY! 3, USB, Portátil, 70SB173000000",
                                                    "Value": 179.9,
                                                    "Link": "https://www.terabyteshop.com.br/produto/22510/placa-de-som-creavite-sound-blaster-play-3-usb-portatil-70sb173000000",
                                                    "Where": "hardware",
                                                    "Kind": "TeraByte",
                                                    "ImageUrl": "https://img.terabyteshop.com.br/produto/p/placa-de-som-creavite-sound-blaster-play-3-usb-portatil-70sb173000000_151150.png",
                                                    "Slug": "placa-de-som-creative-sound-blaster-play-3-usb-portatil-70sb173000000"
                                                  },
                                                  {
                                                    "Id": "11868db6-b6cf-4b28-8aff-be6614c9aa54",
                                                    "Title": "HD Externo Toshiba Canvio Ready,  4TB, USB 3.0, Preto - HDTP340XK3CA",
                                                    "Description": "HD Externo Toshiba Canvio Ready,  4TB, USB 3.0, Preto - HDTP340XK3CA",
                                                    "Value": 809,
                                                    "Link": "https://www.kabum.com.br/produto/129964/hd-externo-toshiba-canvio-ready-4tb-usb-3-0-preto-hdtp340xk3ca",
                                                    "Where": "hardware",
                                                    "Kind": "Kabum",
                                                    "ImageUrl": "https://images.kabum.com.br/produtos/fotos/129964/hd-externo-toshiba-portatil-canvio-ready-4tb-usb-3-0-hdtp340xk3ca_1603217197_m.jpg",
                                                    "Slug": "hd-externo-toshiba-canvio-ready-4tb-usb-30-preto-hdtp340xk3ca"
                                                  }
                                                ]
                                              },
                                              "Config": {
                                                "Page": "1"
                                              }
                                            }`)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/api/products/category/:Category/:Page":{
            description:"Rota que retorna a lista de produtos filtrados por categoria",
            get:{
                tags:["api","Products"],
                parameters:[
                    {
                        name:"Category",
                        description:"a Categoria que se deseja utilizar na busca. Exemplo: Hardware",
                        schema: {
                            type: 'string',
                        },
                        in: 'query',
                    },
                    {
                        name: 'Page',
                        description: 'Valor de qual pagina será retornado(20 itens por pagina).',
                        schema: {
                        type: 'integer',
                        },
                        in: 'query',
                    }
            ],
                responses:{
                    200:{
                        description:"Retorno com sucesso das informações",
                        content:{
                            "application/json":{
                                examples:{
                                    Reason:{
                                        value:JSON.parse(`
                                            {
  "Description": "Successfully returned Information",
  "response": {
    "ProductWithCategory": [
      {
        "Id": "001ea65f-88f7-431e-a371-5f6958a0c939",
        "Title": "Fonte Duex Pulse Pro, 850W, ATX 3.1, Full-Modular, Cybenetics Gold, PCIe 5.1, Preto, DXFOPRO850WG3",
        "Description": "Fonte Duex Pulse Pro, 850W, ATX 3.1, Full-Modular, Cybenetics Gold, PCIe 5.1, Preto, DXFOPRO850WG3",
        "Value": 799.99,
        "Link": "https://www.pichau.com.br/fonte-duex-pulse-pro-850w-atx-3-1-full-modular-cybenetics-gold-pcie-5-1-preto-dxfopro850wg3",
        "Where": "hardware",
        "Kind": "Pichau",
        "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/d/x/dxfopro850wg3.jpg",
        "Slug": "fonte-duex-pulse-pro-850w-atx-31-full-modular-cybenetics-gold-pcie-51-preto-dxfopro850wg3"
      }
    ]
  },
  "Config": {
    "Category": "hardware",
    "Page": "1"
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
        "/api/user/create":{
          description:"Rota utilizada para fazer um registro de um usuário no banco de dados da aplicação.",
          post:{
            tags:["api","User"],
            requestBody:{
              description:"Informações utilizadas para criar o usuário",
              content:{
                "application/json":{
                  examples:{
                    JonDoe:{
                      value:JSON.parse(`{"Email":"jonDoe@gmail.com","Password":"JonDoePassword"}`)
                    }
                  }
                }
              }
            },
            responses:{
              201:{
                description:"Criou com sucesso o usuário",
                content:{
                  "application/json":{
                    examples:{
                      jonDoe:{
                        value:JSON.parse(`
                          {
  "Description": "Successfully created the user",
  "data": {
    "Id": "e8eec215-74f7-463a-9aab-29647f3784f5",
    "Email": "jonDoe@gmail.com",
    "Password": "JonDoe"
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
        "api/user/login":{
          description:"Rota utilizada para realizar login de um usuário na aplicação. Fará a verificação de um email fornecido e a sua senha e fornecerá em troca o ID do usuário",
          patch:{
            tags:["api","User"],
            responses:{
              200:{
                description:"Requisição feita com sucesso",
                content:{
                  "application/json":{
                    examples:{
                      Response:{
                        description:"Um exemplo do retorno do ID do usuário que possui email JonDoe@gmail.com com a senha JonDoe",
                        value:JSON.parse(`{
                          "Description": "Password e Email foram checados. O login Foi um sucesso!",
                          "UserId": "e8eec215-74f7-463a-9aab-29647f3784f5"
                        }`)
                      }
                    }
                  }
                }
              }
            },
            requestBody:{
              description:"Corpo que será utilizado para fazer a verificação. Passe um Email cadastrado e a senha desse email.",
              content:{
                "application/json":{
                  examples:{
                    Request:{
                      description:"Um exemplo comum de requisção da rota para logar no email JonDoe@gmail.com",
                      value:JSON.parse(`
                                                  {
                            "Email":"jonDoe@gmail.com",
                            "Password":"JonDoe"
                        }
                        `)
                    }
                  }
                }
              },
              required:true
            }
          }
        },
        "/api/products/search/:Query/:Page":{
          description:"Rota de pesquisa. Retorna uma lista de produtos que contenham o parametro query em suas descrições paginados em 20 elementos por página (definido a partir do parametro page)",
          get:{
            description:"Rota de pesquisa. Retorna uma lista de produtos que contenham o parametro query em suas descrições paginados em 20 elementos por página (definido a partir do parametro page)",
            tags:["api","Products"],
            parameters:[
              {
                name: "Page",
                description: 'Valor de qual pagina será retornado(20 itens por pagina).',
                schema: {
                type: 'integer',
                },
                in: 'query',
              },
              {
                name: "Query",
                description: 'Valor que será utilizado na pesquisa.',
                schema: {
                type: 'string',
                },
                in: 'query',
              }
            ],
            responses:{
              200:{
                description:"Sucesso",
                content:{
                  "application/json":{
                    examples:{
                      Succes:{
                        description:"Quando a query foi 'Fonte' e a Page foi '1' ",
                        value:JSON.parse(`
                          
{
  "Description": "Successfully returned products list from a query",
  "response": [
    {
      "Id": "001ea65f-88f7-431e-a371-5f6958a0c939",
      "Title": "Fonte Duex Pulse Pro, 850W, ATX 3.1, Full-Modular, Cybenetics Gold, PCIe 5.1, Preto, DXFOPRO850WG3",
      "Description": "Fonte Duex Pulse Pro, 850W, ATX 3.1, Full-Modular, Cybenetics Gold, PCIe 5.1, Preto, DXFOPRO850WG3",
      "Value": 799.99,
      "Link": "https://www.pichau.com.br/fonte-duex-pulse-pro-850w-atx-3-1-full-modular-cybenetics-gold-pcie-5-1-preto-dxfopro850wg3",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/d/x/dxfopro850wg3.jpg",
      "Slug": "fonte-duex-pulse-pro-850w-atx-31-full-modular-cybenetics-gold-pcie-51-preto-dxfopro850wg3"
    },
    {
      "Id": "01b76354-1470-4426-a9a6-a6e01bcd9bcc",
      "Title": "Fonte Galax Omega GL500S, 500W, 80 Plus Bronze, Preto, PGO50BOTNATB0",
      "Description": "Fonte Galax Omega GL500S, 500W, 80 Plus Bronze, Preto, PGO50BOTNATB0",
      "Value": 411.75,
      "Link": "https://www.pichau.com.br/fonte-galax-omega-gl500s-500w-80-plus-bronze-preto-pgo50botnatb0",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo50botnatb01.jpg",
      "Slug": "fonte-galax-omega-gl500s-500w-80-plus-bronze-preto-pgo50botnatb0"
    },
    {
      "Id": "08c97801-a54c-4e55-89a9-6e0db3a49444",
      "Title": "Fonte MSI MAG A850GL, 850W, ATX 3.0, PCI-E 5.0, Full Modular, 80 Plus Gold, Preta, 306-7ZP8A39-CE0",
      "Description": "Fonte MSI MAG A850GL, 850W, ATX 3.0, PCI-E 5.0, Full Modular, 80 Plus Gold, Preta, 306-7ZP8A39-CE0",
      "Value": 976.46,
      "Link": "https://www.pichau.com.br/fonte-msi-mag-a850gl-850w-atx-3-0-pci-e-5-0-full-modular-80-plus-gold-preta-306-7zp8a39-ce0",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/3/0/306-7zp8a39-ce03.jpg",
      "Slug": "fonte-msi-mag-a850gl-850w-atx-30-pci-e-50-full-modular-80-plus-gold-preta-306-7zp8a39-ce0"
    },
    {
      "Id": "09922dc0-e1e0-40df-9295-7accfb50cc94",
      "Title": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
      "Description": "Fonte Galax Omega GLX1000, 1000W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Platinum, PGO1AGPFNAFB0",
      "Value": 156,
      "Link": "https://www.pichau.com.br/fonte-galax-omega-glx1000-1000w-atx-3-0-pcie-5-0-full-modular-80-plus-platinum-pgo1agpfnafb0",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo1agpfnafb02.jpg",
      "Slug": "fonte-galax-omega-glx1000-1000w-atx-30-pcie-50-full-modular-80-plus-platinum-pgo1agpfnafb0"
    },
    {
      "Id": "0be2f086-cac5-40d4-8ac2-ee49558ab9a1",
      "Title": "Fonte XPG, Pylon, 650W, 80 Plus Bronze, PFC Ativo, PYLON650B-BKCBR",
      "Description": "Fonte XPG, Pylon, 650W, 80 Plus Bronze, PFC Ativo, PYLON650B-BKCBR",
      "Value": 349.9,
      "Link": "https://www.terabyteshop.com.br/produto/15885/fonte-xpg-pylon-650w-80-plus-bronze-pfc-ativo-75260163",
      "Where": "hardware",
      "Kind": "TeraByte",
      "ImageUrl": "https://img.terabyteshop.com.br/produto/p/fonte-xpg-pylon-650w-80-plus-bronze-pfc-ativo-75260163_108407.png",
      "Slug": "fonte-xpg-pylon-650w-80-plus-bronze-pfc-ativo-pylon650b-bkcbr"
    },
    {
      "Id": "12e4fd66-48ed-44ce-8dc6-b346058cb9f6",
      "Title": "Fonte Acer AC1000, 1000W, 80 Plus Gold, Full Modular Preto, ACER-AC1000",
      "Description": "Fonte Acer AC1000, 1000W, 80 Plus Gold, Full Modular Preto, ACER-AC1000",
      "Value": 1764.69,
      "Link": "https://www.pichau.com.br/fonte-acer-ac1000-1000w-80-plus-gold-full-modular-preto-acer-ac1000",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/a/c/acer-ac1000.jpg",
      "Slug": "fonte-acer-ac1000-1000w-80-plus-gold-full-modular-preto-acer-ac1000"
    },
    {
      "Id": "19566310-59f0-4196-bfc8-77ca84d7c9fa",
      "Title": "Fonte Seasonic Vertex GX-850, 850W, ATX 3.0, PCIe 5.0, Full Modular, 80 Plus Gold, Preto, 12851GXAFS",
      "Description": "Fonte Seasonic Vertex GX-850, 850W, ATX 3.0, PCIe 5.0, Full Modular, 80 Plus Gold, Preto, 12851GXAFS",
      "Value": 156,
      "Link": "https://www.pichau.com.br/fonte-seasonic-vertex-gx-850-850w-atx-3-0-pcie-5-0-full-modular-80-plus-gold-preto-12851gxafs",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/1/2/12851gxafs2.jpg",
      "Slug": "fonte-seasonic-vertex-gx-850-850w-atx-30-pcie-50-full-modular-80-plus-gold-preto-12851gxafs"
    },
    {
      "Id": "1ce300d5-0a5f-492a-953c-d13e07928926",
      "Title": "Fonte Cooler Master V750 SFX Gold, 750W, PCI-E 5.0, Full Modular, 80 Plus Gold, Preto, MPY-7501-SFHAGV-3WO",
      "Description": "Fonte Cooler Master V750 SFX Gold, 750W, PCI-E 5.0, Full Modular, 80 Plus Gold, Preto, MPY-7501-SFHAGV-3WO",
      "Value": 1529.4,
      "Link": "https://www.pichau.com.br/fonte-cooler-master-v750-sfx-gold-750w-pci-e-5-0-full-modular-80-plus-gold-preto-mpy-7501-sfhagv-3wo",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/m/p/mpy-7501-sfhagv-3wo3.jpg",
      "Slug": "fonte-cooler-master-v750-sfx-gold-750w-pci-e-50-full-modular-80-plus-gold-preto-mpy-7501-sfhagv-3wo"
    },
    {
      "Id": "28a6a7f9-bf0b-4b53-ba1c-86f9d4dbf285",
      "Title": "Fonte Seasonic Vertex PX-1200, Full-Modular, 1200W, ATX 3.0, PCIe 5.0, 80 Plus Platinum, Preta, 12122PXAFS",
      "Description": "Fonte Seasonic Vertex PX-1200, Full-Modular, 1200W, ATX 3.0, PCIe 5.0, 80 Plus Platinum, Preta, 12122PXAFS",
      "Value": 156,
      "Link": "https://www.pichau.com.br/fonte-seasonic-vertex-px-1200-full-modular-1200w-atx-3-0-pcie-5-0-80-plus-platinum-preta-12122pxafs",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/1/2/12122pxafs.jpg",
      "Slug": "fonte-seasonic-vertex-px-1200-full-modular-1200w-atx-30-pcie-50-80-plus-platinum-preta-12122pxafs"
    },
    {
      "Id": "2a1cff32-0f19-4dc1-a21f-bb9ed83723f6",
      "Title": "Fonte XPG, Core Reactor, 850W, 80 Plus Gold, Modular, PFC Ativo, COREREACTOR850G-BKCBR",
      "Description": "Fonte XPG, Core Reactor, 850W, 80 Plus Gold, Modular, PFC Ativo, COREREACTOR850G-BKCBR",
      "Value": 659.9,
      "Link": "https://www.terabyteshop.com.br/produto/15880/fonte-xpg-core-reactor-850w-80-plus-gold-modular-pfc-ativo-75260040",
      "Where": "hardware",
      "Kind": "TeraByte",
      "ImageUrl": "https://img.terabyteshop.com.br/produto/p/fonte-xpg-core-reactor-850w-80-plus-gold-modular-pfc-ativo-75260040_146874.png",
      "Slug": "fonte-xpg-core-reactor-850w-80-plus-gold-modular-pfc-ativo-corereactor850g-bkcbr"
    },
    {
      "Id": "2e6b1579-cdb2-4246-9c4a-ad7e06aecfe8",
      "Title": "Fonte Galax Omega GL650S, 650W, 80 Plus Bronze, Preto, PGO65BOTNATB0",
      "Description": "Fonte Galax Omega GL650S, 650W, 80 Plus Bronze, Preto, PGO65BOTNATB0",
      "Value": 517.63,
      "Link": "https://www.pichau.com.br/fonte-galax-omega-gl650s-650w-80-plus-bronze-preto-pgo65botnatb0",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo65botnatb02.jpg",
      "Slug": "fonte-galax-omega-gl650s-650w-80-plus-bronze-preto-pgo65botnatb0"
    },
    {
      "Id": "2f565b7c-f82d-46c0-a0d7-f8dc448a9248",
      "Title": "Fonte Gigabyte UD Gold, 750W, Full Modular, 80 Plus Gold, Preto, GP-UD750GM",
      "Description": "Fonte Gigabyte UD Gold, 750W, Full Modular, 80 Plus Gold, Preto, GP-UD750GM",
      "Value": 156,
      "Link": "https://www.pichau.com.br/fonte-gigabyte-ud-gold-750w-full-modular-80-plus-gold-preto-gp-ud750gm",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/g/p/gp-ud750gm3.jpg",
      "Slug": "fonte-gigabyte-ud-gold-750w-full-modular-80-plus-gold-preto-gp-ud750gm"
    },
    {
      "Id": "31cd6f38-2eac-4827-b438-c5ed5262e796",
      "Title": "Gabinete Gamer Cooler Master Ncore 100 Max, Com 1 Fan, Fonte 850W e Water Cooler 120mm, Bronze, NR100-ZNNN85-SL0",
      "Description": "Gabinete Gamer Cooler Master Ncore 100 Max, Com 1 Fan, Fonte 850W e Water Cooler 120mm, Bronze, NR100-ZNNN85-SL0",
      "Value": 4117.63,
      "Link": "https://www.pichau.com.br/gabinete-gamer-cooler-master-ncore-100-max-com-1-fan-fonte-850w-e-water-cooler-120mm-bronze-nr100-znnn85-sl0",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/n/r/nr100-znnn85-sl09_1_1.jpg",
      "Slug": "gabinete-gamer-cooler-master-ncore-100-max-com-1-fan-fonte-850w-e-water-cooler-120mm-bronze-nr100-znnn85-sl0"
    },
    {
      "Id": "33860449-7f79-4b0e-8e7c-3d89f73f1b60",
      "Title": "Fonte Redragon RGPS 600W, 80 Plus Bronze, PFC Ativo, Cabo Flat, GC-PS002",
      "Description": "Fonte Redragon RGPS 600W, 80 Plus Bronze, PFC Ativo, Cabo Flat, GC-PS002",
      "Value": 299.9,
      "Link": "https://www.terabyteshop.com.br/produto/13095/fonte-redragon-rgps-600w-80-plus-bronze-pfc-ativo-cabo-flat-gc-ps002",
      "Where": "hardware",
      "Kind": "TeraByte",
      "ImageUrl": "https://img.terabyteshop.com.br/produto/p/fonte-redragon-rgps-600w-80-plus-bronze-pfc-ativo-cabo-flat-gc-ps002_189087.jpg",
      "Slug": "fonte-redragon-rgps-600w-80-plus-bronze-pfc-ativo-cabo-flat-gc-ps002"
    },
    {
      "Id": "3de1527c-ebaf-4932-aea5-b36fe877f358",
      "Title": "Fonte BRX Rainbow RGB, 450W, 80 Plus Bronze, PFC Ativo, RB450W",
      "Description": "Fonte BRX Rainbow RGB, 450W, 80 Plus Bronze, PFC Ativo, RB450W",
      "Value": 149.9,
      "Link": "https://www.terabyteshop.com.br/produto/27218/fonte-brx-rainbow-rgb-450w-80-plus-bronze-pfc-ativo-rb450w",
      "Where": "hardware",
      "Kind": "TeraByte",
      "ImageUrl": "https://img.terabyteshop.com.br/produto/p/fonte-brx-rainbow-rgb-450w-80-plus-bronze-pfc-ativo-rb450w_185542.png",
      "Slug": "fonte-brx-rainbow-rgb-450w-80-plus-bronze-pfc-ativo-rb450w"
    },
    {
      "Id": "41513a75-1a12-412b-a7bd-fa1235076f09",
      "Title": "Fonte Seasonic S12-500, 500W, 80 Plus Bronze, Preta, SSR-500GB",
      "Description": "Fonte Seasonic S12-500, 500W, 80 Plus Bronze, Preta, SSR-500GB",
      "Value": 588.22,
      "Link": "https://www.pichau.com.br/fonte-seasonic-s12-500-500w-80-plus-bronze-preta-ssr-500gb",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/s/s/ssr-500gb.jpg",
      "Slug": "fonte-seasonic-s12-500-500w-80-plus-bronze-preta-ssr-500gb"
    },
    {
      "Id": "542c3edb-3645-45ce-b7c1-34620ca770e6",
      "Title": "Fonte SuperFrame, 850W, 80 Plus Gold, Full Modular, Com Conector PCIe 5.0, PFC Ativo, SF-G850M",
      "Description": "Fonte SuperFrame, 850W, 80 Plus Gold, Full Modular, Com Conector PCIe 5.0, PFC Ativo, SF-G850M",
      "Value": 599.9,
      "Link": "https://www.terabyteshop.com.br/produto/22006/fonte-superframe-850w-80-plus-gold-full-modular-pfc-ativo-sf-g850m",
      "Where": "hardware",
      "Kind": "TeraByte",
      "ImageUrl": "https://img.terabyteshop.com.br/produto/p/fonte-superframe-850w-80-plus-gold-full-modular-pfc-ativo-sf-g850m_178704.jpg",
      "Slug": "fonte-superframe-850w-80-plus-gold-full-modular-com-conector-pcie-50-pfc-ativo-sf-g850m"
    },
    {
      "Id": "56493c15-8eab-4785-af89-371127a49e29",
      "Title": "Fonte Galax Omega GLX850, 850W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Gold, PGO85GPTNAFB0",
      "Description": "Fonte Galax Omega GLX850, 850W, ATX 3.0, PCIe 5.0, Full-Modular, 80 Plus Gold, PGO85GPTNAFB0",
      "Value": 1058.81,
      "Link": "https://www.pichau.com.br/fonte-galax-omega-glx850-850w-atx-3-0-pcie-5-0-full-modular-80-plus-gold-pgo85gptnafb0",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/p/g/pgo85gptnafb02.jpg",
      "Slug": "fonte-galax-omega-glx850-850w-atx-30-pcie-50-full-modular-80-plus-gold-pgo85gptnafb0"
    },
    {
      "Id": "582c3718-8fb0-4811-9be7-418a9c4c2baa",
      "Title": "Fonte Seasonic Prime GX-1000, Full-Modular, 1000W, 80 Plus Gold, Preta, SSR-1000GD",
      "Description": "Fonte Seasonic Prime GX-1000, Full-Modular, 1000W, 80 Plus Gold, Preta, SSR-1000GD",
      "Value": 156,
      "Link": "https://www.pichau.com.br/fonte-seasonic-prime-gx-1000-full-modular-1000w-80-plus-gold-preta-ssr-1000gd",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/s/s/ssr-1000gd2.jpg",
      "Slug": "fonte-seasonic-prime-gx-1000-full-modular-1000w-80-plus-gold-preta-ssr-1000gd"
    },
    {
      "Id": "599aea1a-87e5-44a8-b35d-c25c3331c7a1",
      "Title": "Fonte Seasonic Vertex PX-750, ATX 3.0, PCIe 5.0, Full-Modular, 750W, 80 Plus Platinum, Preta, 12751PXAFS",
      "Description": "Fonte Seasonic Vertex PX-750, ATX 3.0, PCIe 5.0, Full-Modular, 750W, 80 Plus Platinum, Preta, 12751PXAFS",
      "Value": 156,
      "Link": "https://www.pichau.com.br/fonte-seasonic-vertex-px-750-atx-3-0-pcie-5-0-full-modular-750w-80-plus-platinum-preta-12751pxafs",
      "Where": "hardware",
      "Kind": "Pichau",
      "ImageUrl": "https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/1/2/12751pxafs.jpg",
      "Slug": "fonte-seasonic-vertex-px-750-atx-30-pcie-50-full-modular-750w-80-plus-platinum-preta-12751pxafs"
    }
  ],
  "Config": {
    "Page": "1",
    "Query": "Fonte"
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
        "/api/issues/:Page":{
          description:"Rota utilizada para retornar todas as issues registradas dentro do banco de dados",
          get:{
            parameters:[              
                {
                name: "Page",
                description: 'Valor de qual pagina será retornado(20 itens por pagina).',
                schema: {
                type: 'integer',
                },
                in: 'query',
                }
              ],
            description:"Rota utilizada para retornar todas as issues registradas dentro do banco de dados",
            tags:["api","admin"],
            responses:{
              200:{
                description:"Rota finalizada com sucesso",
                content:{
                  "application/json":{
                    examples:{
                      Response:{
                        value:JSON.parse(`{
  "DescriptioN": "Successfully returned response list",
  "response": [
    {
      "Id": "6211465b-a4a9-4394-8b43-aac80497a2d8",
      "When": "2024-12-07T20:23:22.341Z",
      "Reason": "TimeOut At puppeteer",
      "At": "dev:pichau"
    }
  ],
  "config": {
    "Page": "1"
  }
}`)
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "/api/issues/place/:Place":{
          description:"Rota utilizada para fazer uma busca de um erro em especifico dentro do banco de dados a partir do código de localização em que o erro foi criado(Place)",
          get:{
            description:"Rota utilizada para fazer uma busca de um erro em especifico dentro do banco de dados a partir do código de localização em que o erro foi criado(Place) ",
            tags:["api","admin"],
            parameters:[
              {
                name:"place",
                required:true,
                schema:{
                  type:"string"
                },
                in:"query"
              }
            ],
            responses:{
              200:{
                description:"Informações foram retornadas com sucesso",
                content:{
                  "application/json":{
                    examples:{
                      Response:{
                        value:JSON.parse(`
                            {
                              "DescriptioN": "Successfully returned response list",
                              "response": [
                                {
                                  "Id": "6211465b-a4a9-4394-8b43-aac80497a2d8",
                                  "When": "2024-12-07T20:23:22.341Z",
                                  "Reason": "TimeOut At puppeteer",
                                  "At": "dev:pichau"
                                }
                              ],
                              "config": {
                                "Place": "dev:pichau"
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
        "api/tracker/create":{
          description:"Rota utilizada para criar um tracker a partir de um produto e um usuário. Um tracker é uma entidade que sera utilizada para alertar o usuário quando o preço de um produto estiver do seu agrado",
          post:{
            tags:["api","User","tracker"],
            requestBody:{
              description:"Corpo da requisição que sera utilizado para criar o tracker. entregue um preço, um id de produto e um id de usuário como demonstrado no exemplo",
              required:true,
              content:{
                "application/json":{
                  examples:{
                    Basic:{
                      value:JSON.parse(`
                        {
    "TargetPrice":200,
    "ProdId":"0910beb5-489c-4428-9378-62492e58503a",
    "UserId":"e8eec215-74f7-463a-9aab-29647f3784f5"
}`)
                    }
                  }
                }
              },
              summary:"ProdId:Id do produto, UserId:id do usuário, TriggerValue:valor que enviara o alerta se alcançado"
            },
            responses:{
              201:{
                description:"Sucesso na criação do tracker",
                content:{
                  "application/json":{
                    examples:{
                      Response:{
                        value:JSON.parse(`
{
  "Description": "Successfully created a PriceTracker",
  "response": {
    "Id": "fceb60df-2aab-4ffb-974e-c950b9c5c76e",
    "TargetPrice": 200,
    "UserId": "e8eec215-74f7-463a-9aab-29647f3784f5",
    "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
  },
  "config": {
    "ProdId": "0910beb5-489c-4428-9378-62492e58503a",
    "TargetPrice": 200,
    "UserId": "e8eec215-74f7-463a-9aab-29647f3784f5"
  }
}`)
                      }
                    }
                  }
                }
              }
            }
          },
        
        },
        "api/tracker/update/:Id/:value":{
          description:"Rota utilizada para atualizar o valor do tracker na API",
          put:{
            description:"Rota utilizada para atualizar um Price Tracker",
            responses:{
              201:{
                description:"Atualizou com sucesso o price tracker",
                content:{
                  "application/json":{
                    examples:{
                      exemplo1:{
                        value:JSON.parse(`
                          {
  "Description": "Price Tracker sucessfully updated with the new value",
  "resp": {
    "Id": "308ee8c1-2293-4014-b6c4-22da191deb96",
    "TargetPrice": 350,
    "UserId": "e8eec215-74f7-463a-9aab-29647f3784f5",
    "ProdId": "b3de1ff1-886b-4881-8374-fcdf324b6ba4"
  },
  "config": {
    "Id": "308ee8c1-2293-4014-b6c4-22da191deb96",
    "value": "350"
  }
}
                          `)
                      }
                    }
                  }
                }
              }
            },
            tags:["api","User","tracker"],
            parameters:[
              {
                name:"Id",
                description:"Refere-se ao ID do price Tracker que deseja deletar",
                schema:{
                  type:"string",
                },
                example:{
                  Exemplo1:{
                  value:"308ee8c1-2293-4014-b6c4-22da191deb96"
                  }
                },
                in:"query",required:true
              },
              {
                name:"value",
                description:"O novo valor a ser indexado ao tracker",
                schema:{
                  type:"number"
                },
                in:"query",required:true
              }
            ]
          }
        },
        "api/tracker/delete/:Id":{
          description:"Rota utilizada para deletar um tracker",
          delete:{
            description:"Rota utilizada para deletar um tracker",
            parameters:[
              {
                name:"Id",
                description:"Refere-se ao ID do price Tracker que deseja deletar",
                schema:{
                  type:"string",
                },
                example:{
                  Exemplo1:{
                  value:"308ee8c1-2293-4014-b6c4-22da191deb96"
                  }
                },
                in:"query",required:true
              }
            ],
            tags:["api","User","tracker"],   
            responses:{
              202:{
                description:"Tracker deletado com sucesso",
                content:{
                  "application/json":{
                    example:{
                      example1:{
                        value:JSON.parse(`
                          {
  "Description": "Price Tracker sucessfully deleted",
  "resp": {
    "Id": "bb91bc86-2ba2-44a9-8043-563f4d392c5b",
    "TargetPrice": 200,
    "UserId": "e8eec215-74f7-463a-9aab-29647f3784f5",
    "ProdId": "b3de1ff1-886b-4881-8374-fcdf324b6ba4"
  },
  "config": {
    "Id": "bb91bc86-2ba2-44a9-8043-563f4d392c5b"
  }
}`)
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "api/tracker/fromuser/:UserId":{
          description:"Retorna a lista de avisos de preço de um determinado usuário",
          get:{
            tags:["api","User","tracker"],   
            parameters:[
              {
                name:"UserId",description:"Id do usuário conectado que deseja acessar a lista de avisos",
                schema:{
                  type:"string",description:"Em formato de UUID"
                },in:"query",required:true
              }
            ],
            responses:{
              200:{
                description:"Retorno com sucesso das informações",
                content:{
                  "application/json":{
                    examples:{
                      example1:{
                        value:JSON.parse(`
{
  "Description": "Successfully returned priceTracker list from provided user",
  "resp": [
    {
      "Id": "fceb60df-2aab-4ffb-974e-c950b9c5c76e",
      "TargetPrice": 200,
      "UserId": "e8eec215-74f7-463a-9aab-29647f3784f5",
      "ProdId": "0910beb5-489c-4428-9378-62492e58503a"
    }
  ]
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
        "api/tracker/fromproduct/:ProdId":{
          description:"Retorna a lista de avisos de preço de um determinado usuário",
          get:{
            tags:["api","User","tracker"],   
            parameters:[
              {
                name:"ProdId",description:"Id do produto conectado que se deseja coletar os trackers",
                schema:{
                  type:"string",description:"Em formato de UUID"
                },in:"query",required:true
              }
            ],
            responses:{
              200:{
                description:"Retorno com sucesso das informações",
                content:{
                  "application/json":{
                    examples:{
                      example1:{
                        value:JSON.parse(`
{
  "Description": "Successfully returned priceTracker list from provided Product",
  "resp": [
    {
      "Id": "e68cd7eb-4d05-425d-9249-4a80d098165e",
      "TargetPrice": 200,
      "UserId": "e8eec215-74f7-463a-9aab-29647f3784f5",
      "ProdId": "b3de1ff1-886b-4881-8374-fcdf324b6ba4"
    }
  ],
  "config": {
    "ProdId": "b3de1ff1-886b-4881-8374-fcdf324b6ba4"
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
        "api/issues/date/:pasDays":{
          get:{
            description:"Retorna a lista de de erros que aconteceu no intervalo de tempo delimitado no parametro",
            tags:["api","admin"],
            responses:{
              200:{
                description:"Retorno com sucesso dos erros",
                content:{
                  "application/json":{
                    examples:{
                      example1:{
                        value:JSON.parse(`{
  "DescriptioN": "Successfully returned response list",
  "response": [
    {
      "Id": "6211465b-a4a9-4394-8b43-aac80497a2d8",
      "When": "2024-12-07T20:23:22.341Z",
      "Reason": "TimeOut At puppeteer",
      "At": "dev:pichau"
    },
    {
      "Id": "08978978-df61-4180-9049-f683f9fe0631",
      "When": "2024-12-08T15:50:47.785Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "28aa6a09-aa2b-4320-a556-fb6143ee9b60",
      "When": "2024-12-12T00:55:32.284Z",
      "Reason": "Internal Puppeteer Error",
      "At": "Deploy:Kabum"
    },
    {
      "Id": "c283e885-5ed0-4fad-9e0e-0246058f71e2",
      "When": "2024-12-12T00:56:14.594Z",
      "Reason": "Internal Puppeteer Error",
      "At": "Deploy:Kabum"
    },
    {
      "Id": "e3b4aa40-f54e-4b24-a8e3-0236599b593c",
      "When": "2024-12-12T00:56:56.598Z",
      "Reason": "Internal Puppeteer Error",
      "At": "Deploy:Kabum"
    },
    {
      "Id": "d9659328-29e2-4d4b-bfe6-0a0501a5c70c",
      "When": "2024-12-12T00:59:23.260Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "39db98f7-5cf8-4f03-998e-e0d8f1690ee5",
      "When": "2024-12-12T00:59:23.260Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "2984e270-915c-40cd-a36e-07f1c86e05a7",
      "When": "2024-12-12T01:01:30.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "10f9724a-2d04-43e6-97cf-e0faf42337b3",
      "When": "2024-12-12T01:01:30.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "9aac739a-2836-43ad-9085-234977d192c8",
      "When": "2024-12-12T01:03:38.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "e003c95c-fff1-42c6-aac1-b6662543ac8f",
      "When": "2024-12-12T01:03:38.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Pichau"
    },
    {
      "Id": "07babe19-4a87-40f1-8ed5-2b92acb9a079",
      "When": "2024-12-12T01:03:38.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "68c798c3-dc80-4819-b4fa-25d865c5e2ae",
      "When": "2024-12-12T01:03:38.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "5ae37880-4bf5-408d-b3a3-7bdfaf36bb3d",
      "When": "2024-12-12T01:03:38.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "82ddd893-404c-456c-a56f-868ce212e2be",
      "When": "2024-12-12T01:03:38.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "899490d6-7bb5-43e3-bcf9-20c2bea9c4c0",
      "When": "2024-12-12T01:03:38.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    },
    {
      "Id": "eef29fae-8837-47ec-a431-e117a35601ea",
      "When": "2024-12-12T01:03:38.008Z",
      "Reason": "Created empty or zero value",
      "At": "Deploy:Terabyte"
    }
  ],
  "config": {
    "pasDays": "90"
  }
}`)
                      }
                    }
                  }
                }
              }
            },
            parameters:[
              {
                name:"PasDays",
                description:"A quantidade de dias no passado que será usada como filtro. Irá retornar o registro de preços de um produto em até x dias no passado definido por este valor",
                schema:{
                  type:"number"
                },
                required:true,
                in:"query",
                examples:{
                  Aweek:{
                    value:7
                  },
                  AMonth:{
                    value:30
                  },
                  AYear:{
                    value:345
                  }
                }
              }
            ]
          }
        },
        "/api/scrap/date/:PasDays":{
          description:"Retorna a lista de Scraps que aconteceu durante um determinado periodo de tempo",
          get:{
            description:"Retorna a lista de Scraps que aconteceu durante um determinado periodo de tempo",
            tags:["api","admin"],
            parameters:[
              {
                name:"PasDays",
                description:"A quantidade de dias no passado que será usada como filtro. Irá retornar o registro de scraps feitos na aplicação em até x dias no passado definido por este valor",
                schema:{
                  type:"number"
                },
                required:true,
                in:"query",
                examples:{
                  Aweek:{
                    value:7
                  },
                  AMonth:{
                    value:30
                  },
                  AYear:{
                    value:345
                  }
                }
              }
            ],
            responses:{
              200:{
                description:"Retorno com sucesso",
                content:{
                  "application/json":{
                    examples:{
                      Example1:{
                        value:JSON.parse(`
{
  "Description": "Successfully returned Scrap Registry",
  "response": [{
    "Id": 90,
    "CreatedAt": "Date",
    "Scraped": "pichau"
  }],
  "config": {
    "PasDays": "90"
  }
}`)
                      }
                    }
                  }
                }
              }
            }
          }

        }
      },
    },
  }


