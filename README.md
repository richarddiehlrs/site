# D&R Advocacia - Site Institucional

Este é o site institucional do escritório de advocacia D&R, desenvolvido utilizando Next.js e Material UI.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para desenvolvimento web
- [Material UI](https://mui.com/) - Framework de componentes React
- [React Icons](https://react-icons.github.io/react-icons/) - Biblioteca de ícones
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca para animações

## Características

- Design responsivo para todos os dispositivos
- Site de página única (One Page)
- Seções: Home, Áreas de Atuação, Sobre Nós, Planejamento e Contato
- Animações suaves durante a navegação
- SEO otimizado
- Design elegante com tema em bordô escuro

## Requisitos

- Node.js 18.0 ou superior
- npm ou yarn

## Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/richarddiehlrs/site.git
cd site
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Implantação na Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js).

1. Importe seu repositório na Vercel
2. A Vercel detectará automaticamente o Next.js e realizará as configurações necessárias para a implantação

## Personalização

Para personalizar o site:

- As cores e tema podem ser ajustadas em `app/theme.ts`
- Textos e conteúdos podem ser editados nos componentes dentro da pasta `app/components`
- Imagens podem ser adicionadas na pasta `public/images`

## Estrutura do Projeto

```
site/
├── app/              # Pasta principal da aplicação
│   ├── components/   # Componentes React
│   ├── globals.css   # Estilos globais
│   ├── layout.tsx    # Layout principal
│   ├── theme.ts      # Configuração do tema Material UI
│   └── page.tsx      # Página principal
├── public/           # Arquivos estáticos
│   └── images/       # Imagens
└── next.config.js    # Configurações do Next.js
```

## Licença

Este projeto é de propriedade da D&R Advocacia.
