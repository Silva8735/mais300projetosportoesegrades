import React from 'react';
import img1 from '../assets/images/carousel/carousel_1_opt.jpg';
import img2 from '../assets/images/carousel/carousel_2_opt.jpg';
import img3 from '../assets/images/carousel/carousel_3_opt.jpg';
import img4 from '../assets/images/carousel/carousel_4_opt.jpg';
import img5 from '../assets/images/carousel/carousel_5_opt.jpg';
import img6 from '../assets/images/carousel/carousel_6_opt.jpg';
import img7 from '../assets/images/carousel/carousel_7_opt.jpg';
import img8 from '../assets/images/carousel/carousel_8_opt.jpg';
import img9 from '../assets/images/carousel/carousel_9_opt.jpg';
import img10 from '../assets/images/carousel/carousel_10_opt.jpg';
import img11 from '../assets/images/carousel/carousel_11_opt.jpg';
import img12 from '../assets/images/carousel/carousel_12_opt.jpg';
import img13 from '../assets/images/carousel/carousel_13_opt.jpg';
import img14 from '../assets/images/carousel/carousel_14_opt.jpg';
import img15 from '../assets/images/carousel/carousel_15_opt.jpg';

export interface ProjectPlan {
  id: string;
  name: string;
  category: string;
  dimensions: string;
  image: string;
  materials: string[];
  profiles: string[];
  estimatedCost: string;
  suggestedPrice: string;
  profit: string;
  profitMargin: string;
  steps: string[];
  renderSvg?: () => React.ReactNode;
}

export const PROJECTS: ProjectPlan[] = [
  {
    id: 'p1',
    name: 'Portão Basculante Moderno Frisado',
    category: 'Portões Basculantes',
    dimensions: '2,80m largura x 2,20m altura (Contrapeso embutido)',
    image: img1,
    materials: [
      'Tubo metalon 50x30mm chapa 18 - 18 metros',
      'Perfil guia U para basculante 100x40mm - 2 barras',
      'Chapa lambril frisada galvanizada #20 - 4 peças',
      'Caixa de contrapeso + cabo de aço 3/16" e roldanas de nylon',
      'Fechadura bico de papagaio e fundo zarcão anticorrosivo'
    ],
    profiles: ['Metalon 50x30 #18', 'Chapa Lambril #20', 'Guia U 100x40'],
    estimatedCost: 'R$ 820,00',
    suggestedPrice: 'R$ 2.650,00',
    profit: 'R$ 1.830,00',
    profitMargin: '223%',
    steps: [
      '1. Corte do quadro principal de 2,80m x 2,20m em meia esquadria (45°)',
      '2. Montagem dos trilhos laterais com ponto de giro milimétrico',
      '3. Soldagem das travessas de reforço com metalon 50x30',
      '4. Encaixe e ponteamento das chapas lambril frisadas',
      '5. Instalação das caixas de contrapeso e roldanas com cabo de aço',
      '6. Soldas esmerilhadas, lixamento e aplicação de fundo primer'
    ]
  },
  {
    id: 'p2',
    name: 'Portão Deslizante com Detalhes Geométricos',
    category: 'Portões Deslizantes',
    dimensions: '3,00m largura x 2,10m altura (Trilho inferior)',
    image: img2,
    materials: [
      'Metalon 80x40mm chapa 16 para viga inferior - 6 metros',
      'Tubos 40x20mm chapa 18 para desenho geométrico - 24 metros',
      'Roldanas de aço 3" com rolamentos blindados - 2 unidades',
      'Cantoneira de ferro 1.1/4" x 1/8" para trilho no piso',
      'Guia superior com roletes de nylon e batente com batedeira'
    ],
    profiles: ['Metalon 80x40 #16', 'Tubos 40x20 #18', 'Cantoneira 1.1/4'],
    estimatedCost: 'R$ 740,00',
    suggestedPrice: 'R$ 2.380,00',
    profit: 'R$ 1.640,00',
    profitMargin: '221%',
    steps: [
      '1. Alinhamento da viga de tração inferior 80x40',
      '2. Esquadro do requadro exterior com gabarito',
      '3. Distribuição das peças geométricas intercaladas',
      '4. Solda contínua e soldas de reforço nos vértices',
      '5. Fixação das roldanas embutidas no perfil inferior',
      '6. Teste de rolamento no trilho e acabamento fino'
    ]
  },
  {
    id: 'p3',
    name: 'Grade de Proteção Residencial Reforçada',
    category: 'Grades Residenciais',
    dimensions: '2,00m largura x 1,20m altura',
    image: img3,
    materials: [
      'Barra chata 1.1/4" x 3/16" furada a laser - 6 metros',
      'Tubo quadrado 20x20mm chapa 18 - 18 metros',
      'Chumbadores de ferro redondo 3/8" para parede - 6 peças',
      'Pintura eletrostática ou fundo zarcão automotivo'
    ],
    profiles: ['Barra Chata 1.1/4 x 3/16', 'Tubo 20x20 #18', 'Ferro Redondo 3/8'],
    estimatedCost: 'R$ 310,00',
    suggestedPrice: 'R$ 980,00',
    profit: 'R$ 670,00',
    profitMargin: '216%',
    steps: [
      '1. Perfuração das barras chatas com espaçamento seguro de 11cm',
      '2. Encaixe das barras verticais no alinhador',
      '3. Soldagem por fusão em cada ponto de contato',
      '4. Fixação das sapatas chumbadoras reforçadas',
      '5. Limpeza com desengraxante e pintura protetiva'
    ]
  },
  {
    id: 'p4',
    name: 'Portão Social com Fechadura Elétrica e Visor',
    category: 'Portões Sociais',
    dimensions: '0,90m largura x 2,15m altura',
    image: img4,
    materials: [
      'Metalon 40x40mm chapa 18 para batente e folha - 14 metros',
      'Tubos 20x20mm para grade com visor - 8 metros',
      'Chapa lambril galvanizada #20 - 2 metros',
      'Dobradiças gonzo 5/8" com anel de latão - 3 peças',
      'Caixa para fechadura elétrica universal 12V'
    ],
    profiles: ['Metalon 40x40 #18', 'Tubos 20x20 #18', 'Gonzo 5/8"'],
    estimatedCost: 'R$ 290,00',
    suggestedPrice: 'R$ 950,00',
    profit: 'R$ 660,00',
    profitMargin: '227%',
    steps: [
      '1. Corte preciso das peças do batente e da folha',
      '2. Soldagem das dobradiças mantendo folga padrão de 5mm',
      '3. Instalação da caixa de fechadura com furo de passagem de fios',
      '4. Encaixe do visor superior com acabamento de grade',
      '5. Pintura em esmalte sintético fosco acetinado'
    ]
  },
  {
    id: 'p5',
    name: 'Portão Basculante Duplo Automatizável',
    category: 'Portões Basculantes',
    dimensions: '3,50m largura x 2,30m altura (Vão largo)',
    image: img5,
    materials: [
      'Metalon 100x50mm chapa 14 para colunas e guia - 12 metros',
      'Metalon 50x30mm chapa 18 para folha basculante - 26 metros',
      'Chapa de aço galvanizada frisada #20 - 6 peças',
      'Kit completo de contrapesos duplos de 80kg cada',
      'Cabo de aço aeronáutico 1/4" e roldanas com rolamentos'
    ],
    profiles: ['Metalon 100x50 #14', 'Metalon 50x30 #18', 'Chapa #20'],
    estimatedCost: 'R$ 1.150,00',
    suggestedPrice: 'R$ 3.800,00',
    profit: 'R$ 2.650,00',
    profitMargin: '230%',
    steps: [
      '1. Estruturação pesada das colunas laterais em metalon 100x50',
      '2. Montagem dos braços estabilizadores articulados',
      '3. Montagem da folha principal com esquadro milimétrico',
      '4. Fixação e balanceamento dos contrapesos de chumbo/concreto',
      '5. Instalação e teste suave de abertura com um só dedo'
    ]
  },
  {
    id: 'p6',
    name: 'Grade Pantográfica Articulada para Janelas',
    category: 'Grades Pantográficas',
    dimensions: '1,50m largura x 1,20m altura (Sanfonada)',
    image: img6,
    materials: [
      'Barra chata 3/4" x 1/8" laminada - 32 metros',
      'Rebites de aço maciço cabeça redonda 3/16" - 120 unidades',
      'Perfil U 1" x 1/2" chapa 16 para trilho guia superior/inferior',
      'Rolamentos blindados mini para deslizamento leve',
      'Fechadura tipo bico de papagaio pantográfica com chave tetra'
    ],
    profiles: ['Barra Chata 3/4 x 1/8', 'Perfil U 1"', 'Rebites 3/16"'],
    estimatedCost: 'R$ 380,00',
    suggestedPrice: 'R$ 1.150,00',
    profit: 'R$ 770,00',
    profitMargin: '202%',
    steps: [
      '1. Furação gabaritada em série de todas as barras cruzadas',
      '2. Rebitagem com folga controlada para deslizamento livre',
      '3. Encaixe nos trilhos guia superior e inferior',
      '4. Instalação dos rolamentos de tração leve',
      '5. Aplicação de lubrificante seco de silicone e pintura'
    ]
  },
  {
    id: 'p7',
    name: 'Portão Pivotante de Duas Folhas Colonial',
    category: 'Portões Deslizantes',
    dimensions: '3,00m largura x 2,20m altura (2 folhas de 1,50m)',
    image: img7,
    materials: [
      'Metalon 50x50mm chapa 16 para colunas de sustentação',
      'Tubos 40x20mm e ferro forjado decorativo colonial',
      'Rolamentos cônicos axiais para pivô de solo e topo',
      'Trinco central de piso com trava e porta cadeado reforçado'
    ],
    profiles: ['Metalon 50x50 #16', 'Tubos 40x20 #18', 'Pivô Cônico'],
    estimatedCost: 'R$ 890,00',
    suggestedPrice: 'R$ 2.900,00',
    profit: 'R$ 2.010,00',
    profitMargin: '225%',
    steps: [
      '1. Soldagem dos eixos pivotantes reforçados nas pontas',
      '2. Montagem simétrica das duas folhas para alinhamento perfeito',
      '3. Solda dos ornamentos coloniais nos painéis internos',
      '4. Ajuste dos mancais de giro com rolamento',
      '5. Acabamento especial preto fosco acetinado'
    ]
  },
  {
    id: 'p8',
    name: 'Portão de Garagem com Lambril e Reforço Diagonal',
    category: 'Portões Basculantes',
    dimensions: '3,20m largura x 2,25m altura',
    image: img8,
    materials: [
      'Metalon 60x40mm chapa 16 para perímetro estrutural',
      'Chapas lambril horizontais em aço galvanizado #20',
      'Tirantes diagonais anti-torção em metalon 30x30',
      'Caixa de pesos lateral embutida com roldanas de 100mm'
    ],
    profiles: ['Metalon 60x40 #16', 'Lambril Galvanizado #20', 'Roldanas 100mm'],
    estimatedCost: 'R$ 960,00',
    suggestedPrice: 'R$ 3.100,00',
    profit: 'R$ 2.140,00',
    profitMargin: '222%',
    steps: [
      '1. Estruturação do requadro com travessas horizontais',
      '2. Soldagem das diagonais estruturais que impedem empeno',
      '3. Montagem do lambril macho-e-fêmea ponteado',
      '4. Balanceamento dinâmico do sistema de elevação',
      '5. Aplicação de selante PU nas junções e pintura final'
    ]
  },
  {
    id: 'p9',
    name: 'Grade de Muro Horizontal Modelo Ripado',
    category: 'Grades Residenciais',
    dimensions: '4,00m largura x 1,00m altura',
    image: img9,
    materials: [
      'Metalon 50x20mm chapa 18 em réguas horizontais - 28 metros',
      'Colunas de apoio 50x50mm chapa 16 com flanges chumbáveis',
      'Parafusos sextavados de inox e buchas metálicas parabolt',
      'Pintura em pó eletrostática anticorrosiva'
    ],
    profiles: ['Metalon 50x20 #18', 'Metalon 50x50 #16', 'Flanges Inox'],
    estimatedCost: 'R$ 490,00',
    suggestedPrice: 'R$ 1.550,00',
    profit: 'R$ 1.060,00',
    profitMargin: '216%',
    steps: [
      '1. Gabaritagem precisa do espaçamento entre as réguas (4cm)',
      '2. Soldagem com ponteamento rápido para evitar ondulação térmica',
      '3. Fabricação das flanges de ancoragem com furos oblongos',
      '4. Esmerilhamento das faces visíveis',
      '5. Tratamento de superfície com fosfato e pintura eletrostática'
    ]
  },
  {
    id: 'p10',
    name: 'Portão Basculante com Entrada Social Embutida',
    category: 'Portões Basculantes',
    dimensions: '3,00m largura x 2,30m altura (Porta social 0,80m)',
    image: img10,
    materials: [
      'Metalon 50x30mm chapa 18 para requadro duplo e porta',
      'Chapas de aço galvanizado perfil frisado',
      'Dobradiças reforçadas de embutir e fechadura silenciada',
      'Coluna de contrapeso com guia rolamentada'
    ],
    profiles: ['Metalon 50x30 #18', 'Chapa Frisada #20', 'Guia Rolamentada'],
    estimatedCost: 'R$ 920,00',
    suggestedPrice: 'R$ 3.200,00',
    profit: 'R$ 2.280,00',
    profitMargin: '247%',
    steps: [
      '1. Montagem do requadro mestre do portão basculante',
      '2. Fabricação do vão interno da portinhola com batente de borracha',
      '3. Instalação das dobradiças com folga milimétrica anti-travamento',
      '4. Instalação dos cabos de contrapeso balanceados',
      '5. Testes práticos com motor eletrônico e abertura manual'
    ]
  },
  {
    id: 'p11',
    name: 'Portão Deslizante com Chapa Perfurada Moderna',
    category: 'Portões Deslizantes',
    dimensions: '3,00m largura x 2,10m altura',
    image: img11,
    materials: [
      'Chapa perfurada hexagonal galvanizada #18 - 2 chapas',
      'Metalon 60x40mm chapa 16 reforçado para chassi',
      'Roldanas 75mm em V com rolamento duplo blindado',
      'Cantoneira maciça 1.1/4" para trilho de piso'
    ],
    profiles: ['Chapa Perfurada #18', 'Metalon 60x40 #16', 'Roldanas 75mm'],
    estimatedCost: 'R$ 840,00',
    suggestedPrice: 'R$ 2.750,00',
    profit: 'R$ 1.910,00',
    profitMargin: '227%',
    steps: [
      '1. Estruturação do esqueleto rígido em metalon 60x40',
      '2. Estiramento e fixação das chapas perfuradas no requadro',
      '3. Soldagem interna invisível para evitar marcas na frente',
      '4. Colocação das caixas de roldana na base',
      '5. Pintura em cinza grafite fosco automotivo'
    ]
  },
  {
    id: 'p12',
    name: 'Grade de Proteção para Sacada e Guarda-Corpo',
    category: 'Grades Residenciais',
    dimensions: '3,50m largura x 1,10m altura',
    image: img12,
    materials: [
      'Tubo 40x40mm chapa 16 para corrimão e colunas de sustentação',
      'Tubos 20x20mm chapa 18 verticais a cada 10cm',
      'Sapatas robustas com 4 furos para chumbadores parabolt',
      'Tampões plásticos e solda TIG/MIG de fino acabamento'
    ],
    profiles: ['Tubo 40x40 #16', 'Tubos 20x20 #18', 'Sapatas Reforçadas'],
    estimatedCost: 'R$ 420,00',
    suggestedPrice: 'R$ 1.390,00',
    profit: 'R$ 970,00',
    profitMargin: '230%',
    steps: [
      '1. Corte padronizado dos tubos verticais no esquadro',
      '2. Fixação em gabarito com vão seguro de 9,5cm entre eixos',
      '3. Soldagem corrida e esmerilhamento nivelador',
      '4. Solda das sapatas inferiores com reforço triangular',
      '5. Pintura com primer epóxi e tinta poliuretano (PU)'
    ]
  },
  {
    id: 'p13',
    name: 'Portão Social Minimalista com Puxador Inox',
    category: 'Portões Sociais',
    dimensions: '1,00m largura x 2,20m altura',
    image: img13,
    materials: [
      'Chapa inteira de aço lisa #18 com reforço interno ômega',
      'Metalon 50x50mm chapa 16 para batente estrutural',
      'Puxador tubular em aço inox 304 de 80cm',
      'Fechadura rolete com cilindro de alta segurança'
    ],
    profiles: ['Chapa Lisa #18', 'Metalon 50x50 #16', 'Puxador Inox 304'],
    estimatedCost: 'R$ 390,00',
    suggestedPrice: 'R$ 1.280,00',
    profit: 'R$ 890,00',
    profitMargin: '228%',
    steps: [
      '1. Dobra das bordas da chapa em quinadora para rigidez',
      '2. Soldagem das costelas ômega estruturais na face traseira',
      '3. Furação precisa e instalação das buchas do puxador inox',
      '4. Montagem das dobradiças reforçadas no batente',
      '5. Pintura automotiva com secagem rápida'
    ]
  },
  {
    id: 'p14',
    name: 'Portão Basculante Industrial / Comercial',
    category: 'Portões Basculantes',
    dimensions: '4,00m largura x 3,00m altura (Grande vão)',
    image: img14,
    materials: [
      'Vigas perfil U 150x50mm chapa 12 reforçadas para guia',
      'Metalon 80x40mm chapa 14 para armação da folha',
      'Cabo de aço galvanizado de 1/4" de alma de aço',
      'Mancais flangeados com rolamentos autocompensadores'
    ],
    profiles: ['Perfil U 150x50', 'Metalon 80x40 #14', 'Cabo 1/4"'],
    estimatedCost: 'R$ 1.680,00',
    suggestedPrice: 'R$ 5.400,00',
    profit: 'R$ 3.720,00',
    profitMargin: '221%',
    steps: [
      '1. Traçado e nivelamento das colunas mestras com teodolito/nível a laser',
      '2. Fabricação do braço estabilizador articulado de aço maciço',
      '3. Fixação das caixas duplas de contrapeso balanceado',
      '4. Teste de deflexão e carga máxima com solda de penetração total',
      '5. Pintura em epóxi de alta espessura para atmosfera agressiva'
    ]
  },
  {
    id: 'p15',
    name: 'Grade de Fachada Pantográfica Retrátil',
    category: 'Grades Pantográficas',
    dimensions: '2,20m largura x 2,00m altura',
    image: img15,
    materials: [
      'Barras chatas laminadas 1" x 3/16" cruzadas em tesoura',
      'Trilho superior com guia fechada e roletes de nylon',
      'Fechadura central tetra de travamento simultâneo topo e base',
      'Acabamento com esmalte sintético fosco anticorrosivo'
    ],
    profiles: ['Barra Chata 1" x 3/16', 'Trilho Fechado', 'Fechadura Tetra'],
    estimatedCost: 'R$ 510,00',
    suggestedPrice: 'R$ 1.680,00',
    profit: 'R$ 1.170,00',
    profitMargin: '229%',
    steps: [
      '1. Montagem das articulações tipo pantógrafo em gabarito mestre',
      '2. Rebitagem com arruelas de teflon para eliminação de atrito',
      '3. Fixação do conjunto retrátil no batente de sustentação',
      '4. Ajuste dos pinos de travamento no chão e na viga superior',
      '5. Lubrificação e teste prático de recolhimento suave'
    ]
  }
];
