import { Container } from "../layout/Container";

const helpColumns = [
  {
    title: "Atendimento",
    text: "Dúvidas sobre tamanhos, pedidos ou estilo? Estamos aqui para ajudar.",
    link: "Fale conosco",
  },
  {
    title: "Envio & Devoluções",
    text: "Envio rápido e políticas de devolução fáceis e transparentes.",
    link: "Ver detalhes",
  },
  {
    title: "Imprensa & Atacado",
    text: "Para press kits, parcerias ou atacado, entre em contato com nosso time.",
    link: "Contatar equipe",
  },
];

export function HelpArea() {
  return (

      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.4fr_1fr]">
          <div>
            <h3 className="font-serif text-4xl leading-tight text-[#111111]">
              Precisa <br /> de ajuda?
            </h3>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {helpColumns.map((col) => (
              <div key={col.title} className="space-y-3">
                <div className="text-sm uppercase tracking-[0.18em] text-muted">{col.title}</div>
                <p className="text-base text-[#111111]">{col.text}</p>
                <a href="#" className="text-sm uppercase tracking-[0.18em] text-primary hover:text-[#9f7558]">
                  {col.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    
  );
}
