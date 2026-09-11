/**
 * Conteúdo e contatos centralizados da landing page.
 * Edite aqui textos, links e imagens — os componentes apenas leem este arquivo.
 *
 * Regras de conteúdo (briefing):
 * - Não publicar percentuais de economia, número de instalações, anos de
 *   experiência, depoimentos, garantias, certificações, financiamento,
 *   marcas parceiras ou cidades atendidas sem confirmação da Modusol.
 * - Fotos atuais são ilustrativas (Unsplash). Substitua por fotos reais da
 *   Modusol quando houver arquivos originais autorizados.
 */

export const empresa = {
  nome: 'Modusol Energia Solar',
  nomeCurto: 'Modusol',
  cidade: 'Redenção',
  uf: 'PA',
  estado: 'Pará',
  atuacao: 'Sistemas de energia solar',
  lema: 'Gere sua própria energia e tenha liberdade de consumo.',
};

export const contato = {
  // Link oficial informado pela empresa. Verificado: redireciona para o
  // WhatsApp +55 94 99197-3792. Mantenha o link curto como destino.
  whatsappUrl: 'https://wa.link/gfeksz',
  whatsappExibicao: '(94) 99197-3792',
  whatsappE164: '+5594991973792',
  instagramUrl: 'https://www.instagram.com/modusolenergiasolar/',
  instagramHandle: '@modusolenergiasolar',
};

export const seo = {
  titulo: 'Modusol Energia Solar | Redenção, PA',
  descricao:
    'Conheça a Modusol Energia Solar em Redenção, PA. Converse sobre as possibilidades da energia solar para seu imóvel e solicite um orçamento.',
};

export const navegacao = [
  { href: '#energia-solar', label: 'Energia solar' },
  { href: '#como-comecar', label: 'Como começar' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#duvidas', label: 'Dúvidas' },
];

export const cta = {
  principal: 'Solicitar orçamento pelo WhatsApp',
  curto: 'Orçamento pelo WhatsApp',
  final: 'Falar com a Modusol',
};

export const hero = {
  titulo: 'Seu imóvel pode gerar a própria energia.',
  texto:
    'Conheça as possibilidades da energia solar para o seu consumo. Fale com a Modusol Energia Solar, em Redenção, PA, e solicite uma avaliação para o seu imóvel.',
  // Sem galeria de projetos reais, o CTA secundário leva ao passo a passo.
  // Quando houver fotos reais de instalações, troque por “Ver instalações”.
  ctaSecundario: { href: '#como-comecar', label: 'Como começar' },
};

export const beneficios = {
  titulo: 'Energia gerada no próprio imóvel',
  intro:
    'Painéis solares transformam a luz do sol em eletricidade usada ali mesmo, na sua casa ou no seu negócio. Parte da energia que você hoje compra da distribuidora passa a ser produzida no local.',
  itens: [
    {
      titulo: 'Menos gasto com a conta de luz',
      texto:
        'A energia gerada abate parte do consumo registrado pela distribuidora. Quanto isso representa na conta depende do seu consumo e do sistema instalado.',
    },
    {
      titulo: 'Sistema pensado para o seu consumo',
      texto:
        'O tamanho do sistema parte do quanto o imóvel consome ao longo dos meses e do espaço disponível para os painéis.',
    },
    {
      titulo: 'O imóvel segue ligado à rede',
      texto:
        'Em sistemas conectados à rede, a energia que sobra durante o dia pode ser injetada na distribuidora e virar créditos para usar depois, conforme as regras da ANEEL.',
    },
  ],
  nota:
    'O resultado varia de imóvel para imóvel: consumo, área disponível, sombreamento, orientação do telhado e potência do sistema mudam a conta. Por isso a avaliação vem antes de qualquer número.',
};

/** Utilitário de URL do Unsplash (CDN com redimensionamento e formato automático). */
export const unsplash = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ''}`;

export interface Foto {
  id: string;
  largura: number;
  altura: number;
  alt: string;
  legenda?: string;
  autor: string;
  autorUrl: string;
  fonteUrl: string;
  posicao?: string;
}

export const fotos: Record<'hero' | 'residencial' | 'metalica' | 'solo', Foto> = {
  hero: {
    id: '1624397640148-949b1732bb0a',
    largura: 4032,
    altura: 3024,
    alt: 'Instalador posiciona um painel solar sobre telhado de telhas cerâmicas, sob céu azul',
    autor: 'Bill Mead',
    autorUrl: 'https://unsplash.com/@wmmead',
    fonteUrl: 'https://unsplash.com/photos/wmaP3Tl80ww',
    posicao: '32% 50%',
  },
  residencial: {
    id: '1660330589243-4c640d878052',
    largura: 5600,
    altura: 3150,
    alt: 'Dois instaladores com equipamento de segurança montam painéis solares no telhado de uma casa',
    legenda: 'Telhado residencial',
    autor: 'Raze Solar',
    autorUrl: 'https://unsplash.com/@razesolar',
    fonteUrl: 'https://unsplash.com/photos/pIcseKMisrs',
    posicao: '55% 50%',
  },
  metalica: {
    id: '1745187946672-2c1d8cf26a2b',
    largura: 4000,
    altura: 2250,
    alt: 'Fileiras de painéis solares instalados sobre uma cobertura metálica',
    legenda: 'Cobertura metálica',
    autor: 'Rafael Moreno',
    autorUrl: 'https://unsplash.com/@rafamrn',
    fonteUrl: 'https://unsplash.com/photos/73JOOymZQTQ',
  },
  solo: {
    id: '1509391366360-2e959784a276',
    largura: 6144,
    altura: 4088,
    alt: 'Painéis solares montados em estrutura no solo, sobre gramado, com céu azul e nuvens',
    legenda: 'Estrutura no solo',
    autor: 'American Public Power Association',
    autorUrl: 'https://unsplash.com/@publicpowerorg',
    fonteUrl: 'https://unsplash.com/photos/513dBrMJ_5w',
  },
};

export const aplicacoes = {
  titulo: 'Onde os painéis podem ficar',
  texto:
    'Os módulos podem ser instalados em telhados, coberturas metálicas ou estruturas no solo. A escolha depende do espaço, da estrutura e da incidência de sol no imóvel.',
  aviso: 'Imagens ilustrativas de sistemas solares. Não são projetos da Modusol.',
  instagramChamada: 'Veja projetos da Modusol no Instagram',
};

export const passos = {
  titulo: 'Como começar',
  intro: 'O primeiro contato é uma conversa pelo WhatsApp, em três passos simples.',
  itens: [
    {
      titulo: 'Sua cidade e o tipo de imóvel',
      texto: 'Conte onde fica o imóvel e se é casa, comércio ou outro tipo de construção.',
    },
    {
      titulo: 'Seu consumo de energia',
      texto:
        'Durante o atendimento, compartilhe a conta de luz ou informe quanto o imóvel consome por mês, em kWh.',
    },
    {
      titulo: 'O pedido de avaliação',
      texto: 'Com essas informações, solicite a avaliação do imóvel e uma proposta para o seu caso.',
    },
  ],
  observacao: 'As etapas seguintes são combinadas diretamente no atendimento.',
};

export const sobre = {
  titulo: 'Sobre a Modusol',
  paragrafos: [
    'A Modusol Energia Solar é uma empresa de sistemas de energia solar localizada em Redenção, no Pará.',
    'Projetos, novidades e o dia a dia da empresa ficam no Instagram. Para falar sobre o seu imóvel e pedir um orçamento, use o WhatsApp.',
  ],
};

export const faq = {
  titulo: 'Perguntas frequentes',
  intro: 'Não encontrou sua dúvida?',
  itens: [
    {
      pergunta: 'Como faço para pedir um orçamento?',
      resposta:
        'Envie uma mensagem pelo WhatsApp da Modusol informando sua cidade e o tipo de imóvel. No atendimento, você compartilha seu consumo e solicita a avaliação.',
    },
    {
      pergunta: 'Quais informações ajudam na avaliação?',
      resposta:
        'A conta de energia é a principal: ela mostra o consumo mensal em kWh e, em muitas distribuidoras, o histórico dos últimos meses. Também ajudam o endereço do imóvel, o tipo de telhado ou área disponível e, se possível, fotos do local onde os painéis ficariam.',
    },
    {
      pergunta: 'Por que o imóvel precisa ser avaliado?',
      resposta:
        'Cada imóvel tem espaço, estrutura, inclinação e sombreamento diferentes. Esses fatores definem onde os painéis podem ficar e quanto o sistema consegue gerar, então a proposta depende dessa análise.',
    },
    {
      pergunta: 'O que influencia a geração de energia?',
      resposta:
        'A quantidade de sol no local, a orientação e a inclinação dos painéis, sombras de árvores ou construções, a potência dos equipamentos, a temperatura e a limpeza dos módulos. Dias nublados e chuvosos reduzem a produção.',
    },
    {
      pergunta: 'A energia solar zera a conta de luz?',
      resposta:
        'Não é possível garantir isso. Mesmo com geração própria, imóveis conectados à rede continuam pagando valores como o custo de disponibilidade e a contribuição de iluminação pública, entre outros itens definidos pela regulação. Quanto a conta diminui depende do consumo e do sistema.',
    },
    {
      pergunta: 'Quanto custa um sistema?',
      resposta:
        'O valor depende do tamanho do sistema, dos equipamentos e das características do imóvel. Por isso não há preço fixo: peça sua proposta pelo WhatsApp e tire as dúvidas sobre valores diretamente com a Modusol.',
    },
  ],
};

export const contatoFinal = {
  titulo: 'Vamos conversar sobre a energia solar no seu imóvel?',
  texto: 'Mande uma mensagem pelo WhatsApp contando sua cidade e o tipo de imóvel.',
};
