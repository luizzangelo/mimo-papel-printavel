import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ImagePlus, ShieldCheck, Gift, Lock, ChevronDown, Star } from "lucide-react";
import kitHero from "@/assets/kit-papelaria-digital-tons-pastel.png.asset.json";
import bonus01 from "@/assets/bonus-01-calculadora-lucro.png.asset.json";
import bonus02 from "@/assets/bonus-02-catalogo-whatsapp.png.asset.json";
import bonus03 from "@/assets/bonus-03-venda-sem-aparecer.png.asset.json";
import bonus04 from "@/assets/bonus-04-colecao-renda-extra.png.asset.json";
import bonus05 from "@/assets/bonus-05-calendario-2027.png.asset.json";
import bonus06 from "@/assets/bonus-06-manual-impressao.png.asset.json";
import bonus07 from "@/assets/bonus-07-desafio-7-dias.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Papelaria Lucrativa | +40 mil arquivos prontos para imprimir" },
      { name: "description", content: "Mais de 40 mil arquivos prontos para imprimir e vender: agendas, planners, cadernos e muito mais. Renda extra trabalhando de casa." },
      { property: "og:title", content: "Papelaria Lucrativa | +40 mil arquivos prontos" },
      { property: "og:description", content: "Arquivos prontos para imprimir e vender. Comece sua renda extra em casa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CHECKOUT_COMPLETO = "#oferta";
const CHECKOUT_BASICO = "#oferta";

function today() {
  return new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).toUpperCase();
}

/** Espaço reservado para você inserir sua imagem. */
function ImageSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`img-slot ${className}`}>
      <ImagePlus className="h-6 w-6" />
      <span>{label}</span>
    </div>
  );
}

function Cta({ children = "Quero meus arquivos agora", href = CHECKOUT_COMPLETO }: { children?: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="btn-cta w-full sm:w-auto">
      {children}
    </a>
  );
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-5 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

function Title({ kicker, children, sub }: { kicker?: string; children: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {kicker && <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">{kicker}</p>}
      <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">{children}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

const marqueeItems = ["Acesso imediato após a compra", "Garantia incondicional de 7 dias", "Impressão ilimitada", "Acesso vitalício"];

const receives = [
  { t: "+40 mil arquivos em PDF e PNG", d: "Agendas, planners, cadernos, cadernetas, calendários, capas e miolos organizados por categoria." },
  { t: "Pronto para imprimir", d: "Arquivos em alta qualidade, com e sem data, 1DPP e 2DPP, prontos para encadernar e vender." },
  { t: "Acesso digital imediato", d: "Receba o link no seu e-mail logo após a compra e baixe quando quiser, com acesso vitalício." },
  { t: "Simples de começar", d: "Escolha o modelo, imprima, encaderne e venda no mesmo dia, sem precisar criar nada do zero." },
];

const ideal = [
  "Ter uma renda extra trabalhando de casa, no seu horário",
  "Parar de perder horas criando artes do zero no Canva",
  "Ter um portfólio irresistível com as tendências de 2027",
  "Vender agendas, planners e cadernos personalizados",
  "Conciliar a maternidade com um negócio próprio",
  "Começar uma papelaria mesmo sem experiência",
  "Oferecer variedade gigante de temas para suas clientes",
  "Imprimir quantas vezes quiser, sem pagar nada a mais",
];

const steps = [
  "Você acessa a área de membros e escolhe os modelos para o seu público.",
  "Baixa o arquivo e imprime em casa ou na gráfica, no tamanho que quiser.",
  "Encaderna, embala com carinho e entrega para a sua cliente.",
  "São +40 mil arquivos: você nunca mais fica sem novidade para vender.",
];

const bonuses = [
  { t: "Calculadora de Lucro da Papeleira", d: "Planilha automática: informe o custo do papel, tinta, espiral e embalagem e receba sugestão de preço, lucro e margem. Feita no Excel, sem Canva.", v: "47", img: bonus01.url },
  { t: "Catálogo Pronto para Vender pelo WhatsApp", d: "Catálogo em PDF com imagens dos produtos, organizado por categorias e códigos. É só enviar para suas clientes, sem precisar criar vitrine.", v: "67", img: bonus02.url },
  { t: "Kit Venda Sem Aparecer", d: "50 legendas prontas, 30 mensagens para grupos de WhatsApp, textos para status e ideias de divulgação para quem tem vergonha de gravar vídeos.", v: "37", img: bonus03.url },
  { t: "Coleção Renda Extra: 20 Produtos de Baixo Custo", d: "Bloquinhos, tags, lembrancinhas, marcadores e miniagendas para produzir e vender com pouco material.", v: "57", img: bonus04.url },
  { t: "Calendário de Oportunidades 2027", d: "Datas comemorativas, o que produzir em cada mês e quando começar a divulgar para aproveitar cada oportunidade de venda.", v: "27", img: bonus05.url },
  { t: "Manual de Impressão Sem Erros", d: "Guia ilustrado explicando como imprimir, escolher o papel, configurar tamanho, margem e frente e verso.", v: "37", img: bonus06.url },
  { t: "Desafio Sua Primeira Encomenda", d: "Plano prático de 7 dias, sem vídeos, com checklist diário: escolher produtos, calcular preços, montar a vitrine, divulgar e atender as primeiras clientes.", v: "47", img: bonus07.url },
];

const faqs = [
  { q: "Como vou receber o material?", a: "O acesso é enviado imediatamente para o seu e-mail após a confirmação do pagamento." },
  { q: "O material é físico ou digital?", a: "É 100% digital. Você baixa os arquivos e imprime quantas vezes quiser." },
  { q: "Posso imprimir e vender os produtos?", a: "Sim! Os arquivos foram feitos para você imprimir, encadernar e vender seus produtos físicos." },
  { q: "Preciso ter experiência com papelaria?", a: "Não. Os arquivos já estão prontos e os bônus te ensinam do preço à primeira venda." },
  { q: "Preciso saber usar o Canva?", a: "Não. É só baixar e imprimir. Nada precisa ser criado do zero." },
  { q: "Qual a diferença entre o plano básico e o completo?", a: "O básico traz o pacote essencial de agendas e cadernos. O completo traz os +40 mil arquivos e todos os 7 bônus." },
  { q: "O acesso é vitalício?", a: "Sim, você paga uma única vez e acessa para sempre." },
  { q: "Tem garantia?", a: "Sim, 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro." },
];

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
        {q}
        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-5 pb-5 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}

function Index() {
  const date = today();
  const bar = [...marqueeItems, `Oferta válida hoje: ${date}`];
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* Faixa */}
      <div className="overflow-hidden bg-primary py-2.5 text-xs font-semibold text-primary-foreground">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...bar, ...bar, ...bar, ...bar].map((t, i) => (
            <span key={i}>✦ {t}</span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blush to-background px-5 pb-16 pt-12 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-foreground">Coleção Atualizada 2027</span>
          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            +40 mil arquivos de papelaria <span className="text-primary">prontos para imprimir e vender</span>
          </h1>
          <img
            src={kitHero.url}
            alt="Kit de papelaria digital em tons pastel: caixa com laço, notebook com as pastas dos arquivos, agenda, planner, cadernos e bloquinhos, com +40 mil arquivos prontos para imprimir e vender"
            className="mx-auto mt-8 w-full max-w-2xl"
          />
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground">
            Agendas, planners, cadernos e muito mais para você criar produtos lindos e ter uma renda extra trabalhando de casa, sem criar nada do zero.
          </p>
          <ul className="mx-auto mt-6 grid max-w-md gap-2 text-left">
            {["Não precisa criar artes no Canva", "Ideal para mães e quem tem pouco tempo", "Tendências 2027 exclusivas", "Impressão ilimitada", "Acesso vitalício"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" />{t}</li>
            ))}
          </ul>
          <div className="mt-8"><Cta /></div>
          <p className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" /> Pagamento 100% seguro</p>
        </div>
      </section>

      {/* O que recebe */}
      <Section>
        <Title kicker="O que você vai receber" sub="Tudo o que você precisa para ter uma papelaria lucrativa com o acervo mais completo.">Multiplique seus pedidos</Title>
        <div className="grid gap-5 sm:grid-cols-2">
          {receives.map((r) => (
            <div key={r.t} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="text-xl font-bold">{r.t}</h3>
              <p className="mt-2 text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Variedade */}
      <Section className="bg-blush">
        <Title kicker="Variedade gigante" sub="Agendas 2027, cadernos, cadernetas, calendários, planners, infantil, professores, devocionais, pets e muito mais.">Temas para todos os gostos</Title>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ImageSlot key={i} label={`Modelo ${i + 1}`} className="aspect-[3/4]" />
          ))}
        </div>
      </Section>

      {/* Ideal para */}
      <Section>
        <Title kicker="Para quem é">Ideal para você que deseja</Title>
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {ideal.map((t) => (
            <li key={t} className="flex gap-3 rounded-2xl bg-muted p-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{t}</li>
          ))}
        </ul>
      </Section>

      {/* Passos */}
      <Section className="bg-blush">
        <Title kicker="Muito simples">Como usar no seu dia a dia</Title>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="rounded-3xl bg-card p-5">
              <span className="font-display text-4xl font-bold text-primary">0{i + 1}</span>
              {i < 3 && <ImageSlot label={`Imagem passo ${i + 1}`} className="my-4 aspect-square" />}
              <p className="mt-2 text-sm"><strong>Passo 0{i + 1}.</strong> {s}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Benefícios */}
      <Section>
        <Title kicker="Acesso imediato" sub="Economize tempo, evite improvisos e tenha um portfólio irresistível pronto para vender.">Tudo pensado para facilitar a sua papelaria</Title>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <ImageSlot label="Imagem / mockup do kit" className="aspect-square" />
          <div>
            <ul className="grid gap-3">
              {["Pare de perder horas criando artes do zero", "Tenha +40 mil arquivos organizados em um só lugar", "Formatos PDF e PNG, com e sem data", "Miolos, capas e contracapas prontos", "Imprima quantas vezes quiser durante o ano todo", "Venda pelo WhatsApp, Instagram e Shopee"].map((t) => (
                <li key={t} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" />{t}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-rose-deep">Oferta especial até {date}</p>
            <div className="mt-4"><Cta /></div>
          </div>
        </div>
      </Section>

      {/* Bônus */}
      <Section className="bg-blush">
        <Title kicker="E não para por aí" sub="Materiais extras para colocar mais dinheiro no seu bolso, sem pagar nada a mais.">Você ainda recebe +7 bônus exclusivos</Title>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((b, i) => (
            <div key={b.t} className={`flex flex-col rounded-3xl bg-card p-5 ${i === bonuses.length - 1 ? "sm:col-span-2 sm:mx-auto sm:max-w-xs lg:col-span-1 lg:col-start-2 lg:max-w-none" : ""}`}>
              <img src={b.img} alt={b.t} className="w-full rounded-2xl" />
              <p className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary"><Gift className="h-4 w-4" />Bônus #{i + 1}</p>
              <h3 className="mt-1 text-lg font-bold">{b.t}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{b.d}</p>
              <p className="mt-4 text-sm"><s className="text-muted-foreground">R$ {b.v},00</s> <strong className="ml-1 text-primary">Grátis</strong></p>
            </div>
          ))}
        </div>
      </Section>

      {/* Oferta */}
      <Section id="oferta">
        <Title kicker="Última chance · oferta termina hoje">Escolha a opção ideal para você</Title>
        <div className="mx-auto grid max-w-4xl items-start gap-6 md:grid-cols-2">
          <div className="relative rounded-3xl border-2 border-primary bg-card p-7 shadow-xl">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">Recomendado</span>
            <ImageSlot label="Mockup plano completo" className="aspect-[4/3]" />
            <h3 className="mt-5 text-2xl font-bold">Completo</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />+40 mil arquivos prontos para imprimir</li>
              {bonuses.map((b, i) => (
                <li key={b.t} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />Bônus #{i + 1} · {b.t}</li>
              ))}
              <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />Acesso vitalício</li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground"><s>De R$ 97,00</s></p>
            <p className="font-display text-5xl font-bold text-primary">R$ 29,90</p>
            <p className="text-xs text-muted-foreground">pagamento único · Pix ou cartão</p>
            <div className="mt-5"><Cta href={CHECKOUT_COMPLETO}>Quero o completo</Cta></div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7">
            <ImageSlot label="Mockup plano básico" className="aspect-[4/3]" />
            <h3 className="mt-5 text-2xl font-bold">Básico</h3>
            <ul className="mt-4 grid gap-2 text-sm">
              <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />Pacote de agendas 2027</li>
              <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" />Pacote de cadernos</li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground"><s>De R$ 47,00</s></p>
            <p className="font-display text-4xl font-bold">R$ 10,00</p>
            <p className="text-xs text-muted-foreground">pagamento único</p>
            <a href={CHECKOUT_BASICO} className="mt-5 inline-flex w-full justify-center rounded-full border-2 border-primary px-6 py-3 font-bold text-primary transition hover:bg-blush">Quero o básico</a>
          </div>
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-rose-deep">92% das clientes escolhem a oferta completa</p>
      </Section>

      {/* Garantia */}
      <Section className="bg-blush">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full bg-card text-primary shadow-lg">
            <ShieldCheck className="h-10 w-10" />
            <span className="font-display text-xl font-bold">7 dias</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Garantia de 7 dias</h2>
            <p className="mt-3 text-muted-foreground">Você não corre nenhum risco. Se por qualquer motivo não gostar do material, é só pedir o reembolso dentro do prazo e devolvemos 100% do seu dinheiro.</p>
          </div>
        </div>
      </Section>

      {/* Depoimentos */}
      <Section>
        <Title kicker="100% de satisfação">Quem compra recomenda</Title>
        <div className="mb-6 flex justify-center gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}</div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ImageSlot key={i} label={`Print depoimento ${i + 1}`} className="aspect-[9/16]" />
          ))}
        </div>
        <div className="mt-10 text-center"><Cta /></div>
      </Section>

      {/* FAQ */}
      <Section className="bg-blush">
        <Title>Dúvidas frequentes</Title>
        <div className="mx-auto grid max-w-2xl gap-3">
          {faqs.map((f) => <Faq key={f.q} {...f} />)}
        </div>
        <div className="mt-10 text-center"><Cta /></div>
      </Section>

      <footer className="border-t border-border px-5 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Papelaria Lucrativa · Todos os direitos reservados
      </footer>
    </main>
  );
}
