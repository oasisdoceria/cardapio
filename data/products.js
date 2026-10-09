/**
 * Catálogo da Contém Amor — banco de dados estático do cardápio.
 *
 * ATENÇÃO EDIMAR:
 * Os itens abaixo são EXEMPLOS para o catálogo funcionar enquanto os dados reais
 * não chegam. Troque nome, categoria, descrição, preço e imagem de cada produto
 * pelos produtos reais da Contém Amor. Não é preciso tocar em nenhum outro arquivo.
 *
 * category precisa ser uma das chaves definidas em CATEGORIES (app.js usa isso
 * para montar os filtros automaticamente).
 *
 * image: caminho do arquivo em assets/images/products/. Se o arquivo ainda não
 * existir, o site mostra um ícone no lugar da foto (sem usar banco de imagem
 * genérico) até a foto real ser adicionada.
 */

/**
 * Catálogo da OÁSIS Boutique Gastronômica
 *
 * Produtos provisórios para desenvolvimento do site.
 * Substituir pelos produtos e preços reais da OÁSIS.
 */

/**
 * Catálogo da OÁSIS Boutique Gastronômica
 *
 * Produtos baseados no cardápio fornecido pela cliente.
 */

export const CATEGORIES = [
  { id: 'todos', label: 'Todos' },
  { id: 'bombons', label: 'Bombons' },
  { id: 'cookies', label: 'Cookies' },
  { id: 'brownies', label: 'Brownies' },
  { id: 'mini-bolos', label: 'bolos' },
  { id: 'entremets', label: 'Entremets' },
  { id: 'salgados', label: 'Salgados' },
];

export const PRODUCTS = [
  // =========================
  // BOMBONS
  // =========================

  {
    id: 1,
    name: 'Bombom de Morango',
    category: 'bombons',
    description: 'Bombom artesanal de morango.',
    price: 18.0,
    image: 'assets/images/products/bombom/bombom-de-morango.jpeg',
    featured: true,
  },

  {
    id: 2,
    name: 'Bombom de Uva',
    category: 'bombons',
    description: 'Bombom artesanal de uva.',
    price: 18.0,
    image: 'assets/images/products/bombom/bombom-de-uva.jpeg',
    featured: false,
  },

  {
    id: 3,
    name: 'Bombom de Kinder Bueno',
    category: 'bombons',
    description: 'Bombom artesanal de Kinder Bueno.',
    price: 28.0,
    image: 'assets/images/products/bombom/bombom-de-kinder-bueno.jpeg',
    featured: true,
  },

  // =========================
  // COOKIES
  // =========================

  {
    id: 4,
    name: 'Mini Cookie com Calda',
    category: 'cookies',
    description: 'Mini cookie servido com calda. Porção de 180g.',
    price: 18.0,
    image: 'assets/images/products/cookie/mini-cookies.jpeg',
    featured: true,
  },

  {
    id: 5,
    name: 'Cookie na Panelinha',
    category: 'cookies',
    description: 'Cookie artesanal servido na panelinha.',
    price: 28.0,
    image: 'assets/images/products/cookie/cookie-panelinha.jpeg',
    featured: false,
  },

  {
    id: 6,
    name: 'Cookie no Bowl',
    category: 'cookies',
    description: 'Cookie artesanal servido no bowl. Porção de 750ml.',
    price: 42.0,
    image: 'assets/images/products/cookie/cookie-bowl.jpeg',
    featured: true,
  },

  // =========================
  // BROWNIES
  // =========================

  {
    id: 7,
    name: 'Brownie Marmitinha — Ninho com Nutella',
    category: 'brownies',
    description: 'Brownie na marmitinha com Ninho e Nutella.',
    price: 24.0,
    image: 'assets/images/products/brownie/brownie-ninho-nutella.jpg',
    featured: true,
  },

  {
    id: 8,
    name: 'Brownie Marmitinha — Maracujá',
    category: 'brownies',
    description: 'Brownie na marmitinha com maracujá e chocolate.',
    price: 24.0,
    image: 'assets/images/products/brownie-maracuja-chocolate.jpg',
    featured: false,
  },

  {
    id: 9,
    name: 'Box de Brownie',
    category: 'brownies',
    description: 'Box de brownie com 4 sabores.',
    price: 30.0,
    image: 'assets/images/products/brownie/box-brownie.jpeg',
    featured: true,
  },

   {
    id: 23,
    name: 'Brownie bites',
    category: 'brownies',
    description: 'Bolinhas de brownie banhadas no chocolate ao leite.',
    price: 17.0,
    image: 'assets/images/products/brownie/brownie-bites.jpeg',
    featured: true,
  },

  // =========================
  // MINI BOLOS
  // =========================

  {
    id: 10,
    name: 'Mini Bolo de Cenoura',
    category: 'mini-bolos',
    description: 'Mini bolo de cenoura artesanal.',
    price: 30.0,
    image: 'assets/images/products/bolo/mini-bolo-cenoura.jpeg',
    featured: false,
  },

  {
    id: 11,
    name: 'Mini Bolo Matilda',
    category: 'mini-bolos',
    description: 'Mini bolo Matilda com chocolate.',
    price: 30.0,
    image: 'assets/images/products/bolo/bolo-matilda.jpeg',
    featured: true,
  },

  {
    id: 12,
    name: 'Mini Bolo de Prestígio',
    category: 'mini-bolos',
    description: 'Mini bolo de prestígio.',
    price: 30.0,
    image: 'assets/images/products/bolo/mini-bolo-prestigio.jpeg',
    featured: false,
  },

  {
    id: 13,
    name: 'Mini Bolo de Maracujá',
    category: 'mini-bolos',
    description: 'Mini bolo de maracujá.',
    price: 30.0,
    image: 'assets/images/products/bolo/mini-bolo-maracuja.jpeg',
    featured: false,
  },

  {
    id: 13,
    name: 'Bolo Gelado',
    category: 'mini-bolos',
    description: 'bolo gelado nos sabores de (chocolate, prestigio e ninho).',
    price: 14.0,
    image: 'assets/images/products/bolo/mini-bolo-maracuja.jpg',
    featured: false,
  },

  {
    id: 24,
    name: 'Box Aniversário',
    category: 'mini-bolos',
    description: 'box de aniversário',
    price: 14.0,
    image: 'assets/images/products/bolo/box-aniversario.jpeg',
    featured: false,
  },

  // =========================
  // ENTREMENTS
  // =========================

  {
    id: 14,
    name: 'Entremet de Nozes',
    category: 'entremets',
    description: 'Entremet artesanal de nozes.',
    price: 30.0,
    image: 'assets/images/products/entremets/entremet-de-nozes.jpeg',
    featured: true,
  },

  {
    id: 15,
    name: 'Entremet de Cacau',
    category: 'entremets',
    description: 'Entremet artesanal de cacau.',
    price: 25.0,
    image: 'assets/images/products/entremets/entremet-de-cacau.jpeg',
    featured: false,
  },

  {
    id: 16,
    name: 'Entremet de Café',
    category: 'entremets',
    description: 'Entremet artesanal de café.',
    price: 25.0,
    image: 'assets/images/products/entremets/entremet-de-cafe.jpeg',
    featured: false,
  },

  {
    id: 17,
    name: 'Entremet de Amendoim',
    category: 'entremets',
    description: 'Entremet artesanal de amendoim.',
    price: 25.0,
    image: 'assets/images/products/entremets/entremet-de-amendoim.jpeg',
    featured: false,
  },

  {
    id: 18,
    name: 'Entremet de Framboesa',
    category: 'entremets',
    description: 'Entremet artesanal de framboesa.',
    price: 22.0,
    image: 'assets/images/products/entremets/entremet-de-framboesa.jpeg',
    featured: false,
  },

  {
    id: 19,
    name: 'Entremet de Maracujá',
    category: 'entremets',
    description: 'Entremet artesanal de maracujá.',
    price: 22.0,
    image: 'assets/images/products/entremets/entremet-de-maracuja.jpeg',
    featured: false,
  },

  {
    id: 20,
    name: 'Entremet de Manga',
    category: 'entremets',
    description: 'Entremet artesanal de manga.',
    price: 22.0,
    image: 'assets/images/products/entremets/entremet-de-manga.jpeg',
    featured: false,
  },

  // =========================
  // SALGADOS
  // =========================

  {
    id: 21,
    name: 'Coxinha de Costela com Cream Cheese',
    category: 'salgados',
    description: 'Coxinha de costela com cream cheese.',
    price: 16.0,
    image: 'assets/images/products/coxinha-costela.jpg',
    featured: true,
  },

  {
    id: 22,
    name: 'Empada de Frango na Marmitinha',
    category: 'salgados',
    description: 'Empada de frango servida na marmitinha.',
    price: 14.0,
    image: 'assets/images/products/empada-frango.jpg',
    featured: false,
  },
];