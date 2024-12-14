# Hardware Price Tracker API
Backend para uma aplicação de comparação de preços entre lojas de informatica brasileiras. Esta API oferece o suporte backend para o consumo dos dados obtidos através do scrapping. 

## Índice

1. [Rodando o Projeto](#rodando-o-projeto)
1. [Documentação](#documentação)

## Rodando o Projeto

Copie e cole tudo que estiver dentro do arquvio env.example para dentro de um arquivo .env configurando as variaveis de ambiente de acordo com suas nescessidades. 

1. Clone o repositório:
```bash
git clone https://github.com/cibatech/Hardware-Price-Tracker-API.git
```

2. Entre na pasta
```bash
cd Hardware-Price-Tracker-API
```

3. Instale as depend~encias
```bash
npm i 
```

4. Configure o prisma para um novo client
```bash
npx tsx prisma migrate dev
```

5. Rode o projeto
```bash
npm run dev
```

## Documentação
Após o projeto acesse seus host e sua porta (indicado pelo resultado no console). Acesse a rota /docs que lhe oferecerá uma descrição completa e detalhada baseada em **OpenAPI** da aplicação. 

### Algoritimos de comparação de produtos entre lojas

A aplicação backend utiliza do algoritmo LCS (Longest Common Subsequence) para correlacionar produtos de diferentes lojas ja qe estes websites utilizam diferentes termologias para descrever um mesmo produto, causando problematizações no contexto de uma aplicação backend. 

1. Aplicação
O Algoritimo foi utilizado na rota de comparação de produtos de modo a providenciar com facilicade produtos semelhantes ao objetivado em diferentes lojas, ultrapassando obstaculos como a diferença no modo em se descrever um mesmo produto em diferentes lojas. 
O algoritimo funciona através de um sistema de pontuação que avalia qual index em uma string de titulos possui a maior semelhança com o objeto que está sendo buscado. O método observa o valor dos caracteres e compara-os com o da string padrão para retorna qual dos index dentro da lista possui a maior correlação. 

2. Considerações
Embora o uso desse algoritmo no contexto providencie uma solução para o correçacionamento de diferentes modos de escrever um mesmo titulo de um produto, a utilização dele abre margens para confusões e problemas de escalabilidade. Em geral métodos mais funcionais como a modularização de um titulo poderiam funcionar melhor no contexto aplicado
