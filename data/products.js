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
  { id: 'mini-bolos', label: 'Bolos' },
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
    description: 'Creme de ninho, morango e ganache de chocolate.',
    price: 20.0,
    image: 'assets/images/products/bombom/bombom-de-morango.jpeg',
    featured: true,
  },
 
  {
    id: 2,
    name: 'Bombom de Uva',
    category: 'bombons',
    description: 'Creme de ninho, uva, ganache de chocolate.',
    price: 18.0,
    image: 'assets/images/products/bombom/bombom-de-uva.jpeg',
    featured: false,
  },
 
  {
    id: 3,
    name: 'Bombom de Kinder Bueno',
    category: 'bombons',
    description: 'Creme de ninho, Nutella, Kinder Bueno.',
    price: 29.0,
    image: 'assets/images/products/bombom/bombom-kinder-bueno.jpeg',
    featured: true,
  },
 
  // =========================
  // COOKIES
  // =========================
 
  {
    id: 4,
    name: 'Mini Cookie com Calda',
    category: 'cookies',
    description: '180g de mini cookie com uma calda.',
    price: 18.0,
    image: 'assets/images/products/cookie/mini-cookies.jpeg',
    featured: true,
  },
 
  {
    id: 6,
    name: 'Cookie no Bowl',
    category: 'cookies',
    description: 'Cookie artesanal servido no bowl. Porção de 750ml.',
    price: 62.0,
    image: 'assets/images/products/cookie/cookie-bowl.jpeg',
    featured: true,
  },
 
  {
    id: 26,
    name: 'Ice Cookie',
    category: 'cookies',
    description: 'Cookie da massa tradicional com gotas de chocolate e um delicioso gelato de ninho.',
    price: 18.0,
    image: 'assets/images/products/cookie/ice-cookie.jpeg',
    featured: true,
  },
 
  {
    id: 27,
    name: 'Cookie na Marmitinha',
    category: 'cookies',
    description: 'Cookie de colher recheado com Nutella.',
    price: 25.0,
    image: 'assets/images/products/cookie/cookie-marmitinha.jpeg',
    featured: false,
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
    image: 'assets/images/products/brownie/brownie-de-ninho.jpeg',
    featured: true,
  },
 
  {
    id: 8,
    name: 'Brownie Marmitinha — Maracujá',
    category: 'brownies',
    description: 'Ganache de maracujá, brownie de chocolate, brigadeiro de chocolate ao leite.',
    price: 25.0,
    image: 'assets/images/products/brownie/brownie-maracuja.jpeg',
    featured: false,
  },
 
   {
    id: 23,
    name: 'Brownie Bites',
    category: 'brownies',
    description: 'Bolinhas de brownie banhadas por chocolate ao leite.',
    price: 17.0,
    image: 'assets/images/products/brownie/brownie-bites.jpeg',
    featured: true,
  },
 
  {
    id: 28,
    name: 'Brownie de Maracujá 350g',
    category: 'brownies',
    description: 'Ganache de maracujá, brownie e brigadeiro de chocolate.',
    price: 25.0,
    image: 'assets/images/products/brownie/brownie-maracuja_2.jpeg',
    featured: false,
  },
 
  {
    id: 29,
    name: 'Triple Chocobrownie 350g',
    category: 'brownies',
    description: 'Brigadeiro de chocolate ao leite, brownie de chocolate, ganache de chocolate e casquinha de chocolate.',
    price: 25.0,
    image: 'assets/images/products/brownie/triplochocobrownie.jpeg',
    featured: false,
  },
 
  {
    id: 30,
    name: 'Brownie Duo 350g',
    category: 'brownies',
    description: 'Creme de ninho, brownie de chocolate, brigadeiro de chocolate ao leite.',
    price: 25.0,
    image: 'assets/images/products/brownie/brownie-duo.jpeg',
    featured: false,
  },
 
  // =========================
  // ENTREMETS
  // =========================
 
  {
    id: 14,
    name: 'Entremet de Nozes',
    category: 'entremets',
    description: 'Mousse de chocolate branco, doce de leite, nozes picadas, casquinha de chocolate branco.',
    price: 30.0,
    image: 'assets/images/products/entremets/entremet-de-nozes.jpeg',
    featured: true,
  },
 
  {
    id: 15,
    name: 'Entremet de Cacau',
    category: 'entremets',
    description: 'Mousse de chocolate ao leite, recheado com ganache de chocolate e chocolate picado.',
    price: 25.0,
    image: 'assets/images/products/entremets/entremet-cacau.jpeg',
    featured: false,
  },
 
  {
    id: 16,
    name: 'Entremet de Café',
    category: 'entremets',
    description: 'Mousse de café com brownie molhado no café.',
    price: 25.0,
    image: 'assets/images/products/entremets/entremet-de-cafe.jpeg',
    featured: false,
  },
 
  {
    id: 17,
    name: 'Entremet de Amendoim',
    category: 'entremets',
    description: 'Mousse de chocolate branco com caramelo salgado e amendoim.',
    price: 25.0,
    image: 'assets/images/products/entremets/entremet-de-amendoim.jpeg',
    featured: false,
  },
 
  {
    id: 18,
    name: 'Entremet de Framboesa',
    category: 'entremets',
    description: 'Entremet artesanal de framboesa.',
    price: 25.0,
    image: 'assets/images/products/entremets/entremet-de-framboesa.jpeg',
    featured: false,
  },
 
  {
    id: 19,
    name: 'Entremet de Maracujá',
    category: 'entremets',
    description: 'Mousse de chocolate branco com compota de maracujá com casquinha de chocolate.',
    price: 25.0,
    image: 'assets/images/products/entremets/entremet-de-maracuja.jpeg',
    featured: false,
  },
 
  {
    id: 20,
    name: 'Entremet de Manga',
    category: 'entremets',
    description: 'Mousse de chocolate branco com compota de manga e chocolate branco.',
    price: 25.0,
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
    image: 'assets/images/products/salgados/coxinha-costela.jpeg',
    featured: true,
  },
 
  {
    id: 22,
    name: 'Empada de Frango na Marmitinha',
    category: 'salgados',
    description: 'Empada de frango servida na marmitinha.',
    price: 14.0,
    image: 'assets/images/products/salgados/empada-frango.jpeg',
    featured: false,
  },
];