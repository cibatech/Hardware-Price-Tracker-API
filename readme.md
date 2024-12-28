<p align="center">
  <img align="center" height="300" src="https://github.com/ismael-henrique-dev/Hardware-Price-Tracker-App/raw/main/public/sponsor-icon.png"  />
</p>
<h1 align="center">Hardware Price Tracker API</h1>
<p align="center">
<img align="center" src = "https://img.shields.io/badge/NPM-10.5.2-gray?style=flat&labelColor=green">
<img align="center" src = "https://img.shields.io/badge/TypeScript-5.4.5-gray?style=flat&labelColor=blue" >
</p>

Backend para uma aplicação de comparação de preços entre lojas de informatica brasileiras. Esta API oferece o suporte backend para o consumo dos dados obtidos através do scrapping. 

## Índice

1. [Rodando o Projeto](#rodando-o-projeto)
2. [Documentação](#o-que-aprendi-durante-o-projeto)
3. [Documentação](#documentação)
    - [lcs](#algoritimos-de-comparação-de-produtos-entre-lojas)

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

Ou acesso o link online <a href="https://hardware-price-tracker-api.onrender.com">https://hardware-price-tracker-api.onrender.com</a>

## O que Aprendi durante o Projeto?

- Solucionar problemas envolvendo banco de dados extensos
- Otimização 
- Trabalho em equipe e técnicas de comunicação 
- Tratamento de Erros complexo 
- Desenvolvimento de métodos para admnistração da aplicação 
- Trabalho com múltiplos bancos de dados

## Documentação
Após o projeto acesse seus host e sua porta (indicado pelo resultado no console). Acesse a rota /docs que lhe oferecerá uma descrição completa e detalhada baseada em **OpenAPI** da aplicação. 
Ou acesse a <a href="https://hardware-price-tracker-api.onrender.com/docs">Documentação Online da API</a>

### Algoritimos de comparação de produtos entre lojas

A aplicação backend utiliza uma serie de algoritmos para correlacionar produtos de diferentes lojas dentre eles LCS (Longest Common Subsequence). Isso se faz necessário porque esses sites frequentemente utilizam terminologias distintas para descrever um mesmo produto, o que pode causar desafios na integração e unificação de informações no backend.

1. Aplicação
O algoritmo é empregado na rota de comparação de produtos para identificar, de maneira eficiente, itens semelhantes entre diferentes lojas. Ele supera obstáculos como variações na nomenclatura e formatação de títulos, proporcionando maior precisão na correspondência.

O funcionamento do LCS baseia-se em um sistema de pontuação que avalia qual título dentro de uma lista apresenta a maior similaridade com o objeto buscado. Esse sistema compara os caracteres de cada título com a string de referência, identificando o índice da lista que possui a maior correlação. Assim, o algoritmo determina a subsequência comum mais longa entre as strings, gerando um escore de similaridade.

2. Considerações
Embora o uso do LCS ofereça uma solução prática para lidar com variações na descrição de produtos, ele apresenta limitações, especialmente em termos de escalabilidade e precisão em cenários mais complexos. Métodos complementares ou alternativos, como a tokenização e modularização dos títulos, poderiam oferecer resultados mais robustos e reduzir ambiguidades. Além disso, estratégias mais avançadas, como o uso de aprendizado de máquina ou algoritmos baseados em semântica, podem ser consideradas para melhorar o desempenho e a eficiência do sistema.
