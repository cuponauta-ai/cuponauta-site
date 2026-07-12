// Cuponauta Landing — Sections
const { useState: useStateS, useEffect: useEffectS } = React;

// =============================================================
// HERO VARIANTS
// =============================================================

// --- Hero A: Classic poster — headline left, mascot right
function HeroA({ d }) {
  return (
    <section style={{ position: "relative", padding: `${d.s(64)}px clamp(20px, 5vw, 64px) ${d.s(48)}px`, overflow: "hidden" }}>
      <FloatingProps density={0.8}/>
      <div className="cp-hero-grid" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: d.s(40), alignItems: "center", maxWidth: 1280, margin: "0 auto" }}>
        <div>
          <div style={{ display: "inline-flex", gap: 10, alignItems: "center", padding: "8px 16px", borderRadius: 999, background: "rgba(6,17,48,.6)", boxShadow: "inset 0 0 0 1px var(--cp-stroke-strong)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--cp-success)", boxShadow: "0 0 8px var(--cp-success)" }}></span>
            <Eyebrow color="var(--cp-fg-2)">Caçando ofertas agora pelo WhatsApp</Eyebrow>
          </div>
          <h1 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 0.93, letterSpacing: "-0.025em", textTransform: "uppercase", color: "#fff", margin: "18px 0 0" }}>
            AS MELHORES<br/>
            OFERTAS<br/>
            <span style={{ color: "var(--cp-accent)" }}>DIRETO NO SEU<br/>WHATSAPP.</span>
          </h1>
          <p style={{ fontFamily: "var(--cp-font-body)", fontSize: 18, fontWeight: 500, color: "var(--cp-fg-2)", marginTop: 22, lineHeight: 1.5, maxWidth: 520 }}>
            O <strong style={{color:"#fff"}}>Bot</strong> acompanha os produtos que você está de olho. O <strong style={{color:"#fff"}}>Grupo</strong> recebe as melhores ofertas o dia inteiro. Você escolhe como quer economizar.
          </p>
          <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <PrimaryButton size="lg" href="https://wa.me/5511940122438">Falar com o bot</PrimaryButton>
            <CapsuleButton size="lg" href="https://chat.whatsapp.com/EQi67PsfvaULLCErmDNAHY">Entrar no grupo</CapsuleButton>
          </div>
        </div>
        <div className="cp-hero-img" style={{ position: "relative", height: d.s(520), display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Mascot size={540} float={false}/>
        </div>
      </div>
    </section>
  );
}

// --- Hero B: Centered launch
function HeroB({ d }) {
  return (
    <section style={{ position: "relative", padding: `${d.s(40)}px 20px ${d.s(64)}px`, overflow: "hidden", textAlign: "center" }}>
      <FloatingProps density={0.8}/>
      <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto" }}>
        <div className="cp-hero-b-mascot" style={{ display: "flex", justifyContent: "center", marginBottom: -10 }}>
          <Mascot size={360} float={false}/>
        </div>
        <Eyebrow color="var(--cp-accent)" style={{ marginTop: 10 }}>Promoções e cupons o dia inteiro</Eyebrow>
        <h1 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: "clamp(40px, 6.5vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.025em", textTransform: "uppercase", color: "#fff", margin: "14px auto 0", maxWidth: "16ch" }}>
            CHEGA DE CUPOM QUE NÃO FUNCIONA.<br/>
            <span style={{ color: "var(--cp-accent)" }}>ECONOMIZE DE VERDADE.</span>
        </h1>
        <p style={{ fontFamily: "var(--cp-font-body)", fontSize: 18, fontWeight: 500, color: "var(--cp-fg-2)", marginTop: 22, lineHeight: 1.55, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            Receba as melhores ofertas direto no WhatsApp. Use o bot pra acompanhar produtos no Mercado Livre, ou entre no grupo que recebe oferta o dia inteiro.
        </p>
        <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <PrimaryButton size="lg" href="https://wa.me/5511940122438">Falar com o bot</PrimaryButton>
          <CapsuleButton size="lg" href="https://chat.whatsapp.com/EQi67PsfvaULLCErmDNAHY">Entrar no grupo</CapsuleButton>
        </div>
      </div>
    </section>
  );
}

// --- Hero C: Product split
function HeroC({ d }) {
  return (
    <section style={{ position: "relative", padding: `${d.s(56)}px clamp(20px, 5vw, 64px) ${d.s(48)}px`, overflow: "hidden" }}>
      <FloatingProps density={0.6}/>
      <div style={{ position: "relative", maxWidth: 1240, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow color="var(--cp-accent)">Bem-vindo à órbita das ofertas</Eyebrow>
        <h1 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: "clamp(44px, 6.5vw, 80px)", lineHeight: 0.94, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "12px 0 0" }}>
          Dois jeitos de<br/><span style={{ color: "var(--cp-accent)" }}>economizar.</span> Escolha o seu.
        </h1>
        <div style={{ marginTop: d.s(36), display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: d.s(20), alignItems: "center" }}>
          <ProductPortal kind="bot" d={d}/>
          <Mascot size={280} float={false} style={{ filter: "drop-shadow(0 0 24px var(--cp-accent-glow))" }}/>
          <ProductPortal kind="grupo" d={d}/>
        </div>
      </div>
    </section>
  );
}

function ProductPortal({ kind, d }) {
  const [hover, setHover] = useStateS(false);
  const isBot = kind === "bot";
  const data = isBot
    ? { eyebrow: "Bot do WhatsApp", title: "O Bot", sub: "Acompanha os produtos que você quer", color: "var(--cp-accent)", icon: Icons.bot,
        bullets: ["Cole o link do Mercado Livre", "Recebe quando o preço cair", "Tudo no seu WhatsApp"] }
    : { eyebrow: "Grupo do WhatsApp", title: "O Grupo", sub: "Recebe ofertas o dia inteiro", color: "var(--cp-cyan-300)", icon: Icons.users,
        bullets: ["As melhores ofertas do dia", "Cinco grandes lojas monitoradas", "Sem ruído, só promoção boa"] };
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", background: "linear-gradient(180deg, rgba(15,38,96,.7), rgba(6,17,48,.7))", borderRadius: 22, padding: "28px 26px", border: `1px solid ${hover ? "var(--cp-stroke-strong)" : "var(--cp-stroke)"}`, boxShadow: hover ? `0 20px 60px rgba(0,0,0,.6), 0 0 24px ${data.color}55` : "0 8px 24px rgba(0,0,0,.45)", transition: "all 240ms cubic-bezier(.2,.8,.2,1)", transform: hover ? "translateY(-3px)" : "none", cursor: "pointer", textAlign: "left" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(6,17,48,.7)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `inset 0 0 0 1.5px ${data.color}, 0 0 14px ${data.color}66` }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={data.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 4px ${data.color})` }}>{data.icon}</svg>
        </div>
        <div>
          <div style={{ fontFamily: "var(--cp-font-mono)", fontSize: 11, color: "var(--cp-fg-3)", letterSpacing: "0.06em" }}>{data.eyebrow}</div>
          <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 28, textTransform: "uppercase", color: "#fff", lineHeight: 1, marginTop: 2 }}>{data.title}</div>
        </div>
      </div>
      <div style={{ marginTop: 16, fontFamily: "var(--cp-font-body)", fontSize: 14, color: "var(--cp-fg-2)" }}>{data.sub}</div>
      <ul style={{ marginTop: 14, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
        {data.bullets.map(t => (
          <li key={t} style={{ display: "flex", gap: 10, alignItems: "center", color: "#C9D6F2", fontFamily: "var(--cp-font-body)", fontSize: 13 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: data.color, boxShadow: `0 0 6px ${data.color}`, flex: "none" }}></span>
            {t}
          </li>
        ))}
      </ul>
      <div onClick={() => { window.location.href = isBot ? "https://wa.me/5511940122438" : "https://chat.whatsapp.com/EQi67PsfvaULLCErmDNAHY"; }} style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--cp-font-display)", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.05em", color: data.color, cursor: "pointer" }}>
        {isBot ? "Falar com o bot" : "Entrar no grupo"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={data.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: hover ? "translateX(3px)" : "none", transition: "transform 200ms" }}>{Icons.arrow}</svg>
      </div>
    </div>
  );
}

// =============================================================
// BOT vs GRUPO — value-prop section
// =============================================================
function BotVsGrupo({ d }) {
  return (
    <section style={{ position: "relative", padding: `${d.s(72)}px clamp(20px, 5vw, 64px)`, borderTop: "1px solid var(--cp-stroke)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: d.s(36) }}>
          <Eyebrow color="var(--cp-accent)">Dois produtos. Um só Cuponauta.</Eyebrow>
          <h2 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "10px 0 0" }}>
            Escolha o seu jeito de <span style={{ color: "var(--cp-accent)" }}>economizar.</span>
          </h2>
          <p style={{ fontFamily: "var(--cp-font-body)", fontSize: 16, color: "var(--cp-fg-2)", marginTop: 14, maxWidth: 620, marginLeft: "auto", marginRight: "auto", lineHeight: 1.55 }}>
            Quer acompanhar produtos específicos do Mercado Livre ou receber as melhores ofertas o dia inteiro? Os dois são grátis e funcionam no WhatsApp.
          </p>
        </div>
        <div className="cp-twocol" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: d.s(20) }}>
          <BigProductCard kind="bot" d={d}/>
          <BigProductCard kind="grupo" d={d}/>
        </div>
      </div>
    </section>
  );
}

function BigProductCard({ kind, d }) {
  const [hover, setHover] = useStateS(false);
  const isBot = kind === "bot";
  const data = isBot
    ? { eyebrow: "Bot do WhatsApp", title: "O Bot", color: "var(--cp-accent)",
        pitch: "Cole no bot o link de qualquer produto do Mercado Livre que você está de olho. Ele acompanha o preço e te avisa no WhatsApp quando cair.",
        features: [
          { t: "Cole o link do produto", s: "Funciona com qualquer produto do Mercado Livre" },
          { t: "Alerta de queda de preço", s: "A gente avisa direto no seu WhatsApp" },
          { t: "Link de compra na hora", s: "Toca no link e finaliza no app da loja" },
        ],
        cta: "Falar com o bot", icon: Icons.bot, sectionId: "bot" }
    : { eyebrow: "Grupo do WhatsApp", title: "O Grupo", color: "var(--cp-cyan-300)",
        pitch: "O Cuponauta vai te mandar as melhores ofertas o dia inteiro.",
        features: [
          { t: "Ofertas ao longo do dia", s: "As melhores promoções, conforme aparecem" },
          { t: "Cinco grandes lojas", s: "Mercado Livre, Shopee, iFood, Magalu e Amazon" },
          { t: "Só desconto de verdade", s: "A gente filtra antes de mandar pro grupo" },
        ],
        cta: "Entrar no grupo", icon: Icons.users, sectionId: "grupo" };
  return (
    <div id={data.sectionId} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", background: "linear-gradient(180deg, rgba(15,38,96,.65), rgba(6,17,48,.65))", borderRadius: 24, padding: 30, border: `1px solid ${hover ? "var(--cp-stroke-strong)" : "var(--cp-stroke)"}`, boxShadow: hover ? `0 20px 60px rgba(0,0,0,.55), 0 0 24px ${data.color}55` : "0 8px 24px rgba(0,0,0,.45)", transition: "all 240ms cubic-bezier(.2,.8,.2,1)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, right: -120, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${data.color}33, transparent 70%)`, pointerEvents: "none" }}></div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
        <div style={{ width: 64, height: 64, borderRadius: 18, background: "rgba(6,17,48,.7)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `inset 0 0 0 1.5px ${data.color}, 0 0 14px ${data.color}66`, flex: "none" }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={data.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 4px ${data.color})` }}>{data.icon}</svg>
        </div>
        <div>
          <div style={{ fontFamily: "var(--cp-font-mono)", fontSize: 12, color: "var(--cp-fg-3)", letterSpacing: "0.06em" }}>{data.eyebrow}</div>
          <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 36, textTransform: "uppercase", color: "#fff", lineHeight: 1, marginTop: 4 }}>{data.title}</div>
        </div>
      </div>
      <p style={{ marginTop: 18, fontFamily: "var(--cp-font-body)", fontSize: 15, color: "var(--cp-fg-2)", lineHeight: 1.55, position: "relative" }}>{data.pitch}</p>
      <ul style={{ marginTop: 18, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14, position: "relative" }}>
        {data.features.map((f, i) => (
          <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: data.color, boxShadow: `0 0 8px ${data.color}`, flex: "none", marginTop: 7 }}></div>
            <div>
              <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 14, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em" }}>{f.t}</div>
              <div style={{ fontFamily: "var(--cp-font-body)", fontSize: 13, color: "var(--cp-fg-3)", marginTop: 3 }}>{f.s}</div>
            </div>
          </li>
        ))}
      </ul>
      {isBot ? <BotPreview/> : <GroupPreview/>}
      <div style={{ marginTop: 22, position: "relative" }}>
        <PrimaryButton size="md" href={isBot ? "https://wa.me/5511940122438" : "https://chat.whatsapp.com/EQi67PsfvaULLCErmDNAHY"} style={{ background: data.color, boxShadow: `0 0 14px ${data.color}99, 0 0 28px ${data.color}55` }}>{data.cta}</PrimaryButton>
      </div>
    </div>
  );
}

// ---- Bot chat preview
function BotPreview() {
  return (
    <div style={{ marginTop: 22, padding: 14, background: "rgba(3,8,26,.6)", borderRadius: 16, border: "1px solid var(--cp-stroke)", display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10, borderBottom: "1px solid var(--cp-stroke)" }}>
        <LogoMark size={28}/>
        <div>
          <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 800, fontSize: 12, color: "#fff", textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1 }}>Cuponauta Bot</div>
          <div style={{ fontFamily: "var(--cp-font-mono)", fontSize: 10, color: "var(--cp-success)", marginTop: 4 }}>online</div>
        </div>
      </div>
      {/* user paste */}
      <div style={{ alignSelf: "flex-end", maxWidth: "82%", background: "rgba(45,90,30,.45)", padding: "8px 12px", borderRadius: "12px 12px 4px 12px", fontFamily: "var(--cp-font-mono)", fontSize: 11, color: "#E2F3D8", lineHeight: 1.35, wordBreak: "break-all" }}>
        produto.mercadolivre.com.br/MLB-2939...
      </div>
      {/* bot ack */}
      <div style={{ alignSelf: "flex-start", maxWidth: "85%", background: "rgba(15,38,96,.7)", padding: "8px 12px", borderRadius: "12px 12px 12px 4px", fontFamily: "var(--cp-font-body)", fontSize: 12, color: "#fff", lineHeight: 1.4 }}>
        Anotado. Vou monitorar o <strong>Headphone Sony WH-1000XM5</strong> e te aviso quando o preço cair.
      </div>
      {/* bot alert */}
      <div style={{ alignSelf: "flex-start", maxWidth: "85%", background: "rgba(15,38,96,.7)", padding: "8px 12px", borderRadius: "12px 12px 12px 4px", fontFamily: "var(--cp-font-body)", fontSize: 12, color: "#fff", lineHeight: 1.4 }}>
        Caiu o preço! <strong>Headphone Sony WH-1000XM5</strong> está em <strong style={{color:"var(--cp-accent)"}}>R$ 1.799</strong> (de R$ 2.349).
      </div>
    </div>
  );
}

// ---- Group feed preview
function GroupPreview() {
  const msgs = [
    "PROMO Air Fryer Mondial 5L por R$ 249 no Magalu. Cupom: AIRFRY40.",
    "Xbox Series S em R$ 1.799 no Magalu, com 8% de cashback.",
    "Cupom Amazon livros: LIVRO20 (20% de desconto até 23h).",
  ];
  return (
    <div style={{ marginTop: 22, padding: 14, background: "rgba(3,8,26,.6)", borderRadius: 16, border: "1px solid var(--cp-stroke)", position: "relative" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10, borderBottom: "1px solid var(--cp-stroke)", marginBottom: 10 }}>
        <LogoMark size={28}/>
        <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 800, fontSize: 12, color: "#fff", textTransform: "uppercase", letterSpacing: "0.06em" }}>Cuponauta · Grupo</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <LogoMark size={22}/>
            <div style={{ background: "rgba(15,38,96,.55)", padding: "7px 10px", borderRadius: "10px 10px 10px 4px", fontFamily: "var(--cp-font-body)", fontSize: 12, color: "#fff", lineHeight: 1.4, flex: 1 }}>
              <span style={{ color: "var(--cp-cyan-300)", fontWeight: 700, fontFamily: "var(--cp-font-display)", letterSpacing: "0.04em", fontSize: 11, textTransform: "uppercase" }}>Cuponauta</span>
              <br/>{m}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================
// COMO FUNCIONA — 2 produtos, 3 passos cada
// =============================================================
function ComoFunciona({ d }) {
  const botSteps = [
    { n: "01", t: "Entre no bot pelo WhatsApp", s: "Um clique no botão e o Cuponauta abre uma conversa com você." },
    { n: "02", t: "Cole o link do produto", s: "Mande qualquer link de produto do Mercado Livre que você quer monitorar." },
    { n: "03", t: "Receba quando o preço cair", s: "A gente acompanha o preço pra você e avisa no seu WhatsApp." },
  ];
  const grupoSteps = [
    { n: "01", t: "Entre no grupo pelo WhatsApp", s: "Toque no link, aceite e pronto. Você já tá dentro." },
    { n: "02", t: "Receba ofertas o dia inteiro", s: "A gente manda as melhores promoções de cinco grandes lojas." },
    { n: "03", t: "Toque no link e compre", s: "O link leva direto pro produto na loja. Sem enrolação." },
  ];
  return (
    <section id="funciona" style={{ position: "relative", padding: `${d.s(80)}px clamp(20px, 5vw, 64px)`, borderTop: "1px solid var(--cp-stroke)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 20%, var(--cp-accent-glow) 0%, transparent 60%)", pointerEvents: "none" }}></div>
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: d.s(40) }}>
          <Eyebrow color="var(--cp-accent)">Como funciona</Eyebrow>
          <h2 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "10px 0 0" }}>
            Três passos pra cada produto. <span style={{ color: "var(--cp-accent)" }}>Zero complicação.</span>
          </h2>
        </div>
        <Lane title="Como funciona o Bot" subtitle="Pra quem quer monitorar produtos específicos" color="var(--cp-accent)" steps={botSteps} d={d}/>
        <div style={{ height: d.s(24) }}/>
        <Lane title="Como funciona o Grupo" subtitle="Pra quem quer ver tudo que aparece no dia" color="var(--cp-cyan-300)" steps={grupoSteps} d={d}/>
      </div>
    </section>
  );
}

function Lane({ title, subtitle, color, steps, d }) {
  return (
    <div style={{ background: "linear-gradient(180deg, rgba(15,38,96,.4), rgba(6,17,48,.55))", border: "1px solid var(--cp-stroke)", borderRadius: 24, padding: d.s(28), position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: `linear-gradient(180deg, ${color}, transparent)`, boxShadow: `0 0 14px ${color}` }}></div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap", marginBottom: d.s(20) }}>
        <h3 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 24, textTransform: "uppercase", color: "#fff", margin: 0, letterSpacing: "-0.01em" }}>{title}</h3>
        <span style={{ fontFamily: "var(--cp-font-body)", fontSize: 13, color: "var(--cp-fg-3)" }}>{subtitle}</span>
      </div>
      <div className="cp-steps" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: d.s(16) }}>
        {steps.map((s, i) => <StepCard key={i} step={s} color={color}/>)}
      </div>
    </div>
  );
}

function StepCard({ step, color }) {
  const [hover, setHover] = useStateS(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", background: "rgba(6,17,48,.55)", borderRadius: 16, padding: 22, border: `1px solid ${hover ? "var(--cp-stroke-strong)" : "var(--cp-stroke)"}`, boxShadow: hover ? `0 8px 24px rgba(0,0,0,.4), 0 0 14px ${color}55` : "none", transition: "all 200ms ease", overflow: "hidden", minHeight: 160 }}>
      <div style={{ position: "absolute", top: 8, right: 14, fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 64, lineHeight: 1, color: color, opacity: 0.14, letterSpacing: "-0.05em" }}>{step.n}</div>
      <div style={{ fontFamily: "var(--cp-font-mono)", fontSize: 11, color: color, letterSpacing: "0.1em" }}>PASSO {step.n}</div>
      <h4 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 18, textTransform: "uppercase", color: "#fff", margin: "8px 0 0", letterSpacing: "-0.01em", lineHeight: 1.15 }}>{step.t}</h4>
      <p style={{ fontFamily: "var(--cp-font-body)", fontSize: 13, color: "var(--cp-fg-2)", marginTop: 10, lineHeight: 1.5, position: "relative" }}>{step.s}</p>
    </div>
  );
}

// =============================================================
// LOJAS MONITORADAS
// =============================================================
const BRANDS = [
  { name: "Mercado Livre", c: "#FFE600", bg: "#FFE600", fg: "#2D3277" },
  { name: "Shopee",        c: "#EE4D2D", bg: "#EE4D2D", fg: "#fff" },
  { name: "iFood",         c: "#EA1D2C", bg: "#EA1D2C", fg: "#fff" },
  { name: "Magalu",        c: "#0086FF", bg: "#0086FF", fg: "#fff" },
  { name: "Amazon",        c: "#FF9900", bg: "#232F3E", fg: "#FF9900" },
];

function Marcas({ d }) {
  return (
    <section id="lojas" style={{ position: "relative", padding: `${d.s(72)}px clamp(20px, 5vw, 64px)`, borderTop: "1px solid var(--cp-stroke)", background: "rgba(3,8,26,.4)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: d.s(40) }}>
          <Eyebrow color="var(--cp-accent)">Lojas que a gente monitora</Eyebrow>
          <h2 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: "clamp(32px, 4.5vw, 48px)", lineHeight: 1, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "10px 0 0" }}>
            Cinco grandes. <span style={{ color: "var(--cp-accent)" }}>Todo dia.</span>
          </h2>
          <p style={{ fontFamily: "var(--cp-font-body)", fontSize: 15, color: "var(--cp-fg-2)", marginTop: 12, maxWidth: 580, marginLeft: "auto", marginRight: "auto" }}>
            A gente acompanha promoções e cupons nas cinco lojas que importam no dia a dia do brasileiro.
          </p>
        </div>
        <div className="cp-brands" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
          {BRANDS.map(b => <BrandTile key={b.name} brand={b}/>)}
        </div>
      </div>
    </section>
  );
}

function BrandTile({ brand }) {
  const [hover, setHover] = useStateS(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: "relative", aspectRatio: "1 / 1", borderRadius: 18, background: "rgba(6,17,48,.5)", border: `1px solid ${hover ? "var(--cp-stroke-strong)" : "var(--cp-stroke)"}`, boxShadow: hover ? `0 12px 32px rgba(0,0,0,.5), 0 0 18px ${brand.c}55` : "0 4px 12px rgba(0,0,0,.4)", transition: "all 240ms cubic-bezier(.2,.8,.2,1)", transform: hover ? "translateY(-3px)" : "none", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", background: brand.bg, color: brand.fg, fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: brand.name.length > 8 ? 18 : 22, textTransform: "uppercase", letterSpacing: "-0.01em", textAlign: "center", padding: "10px" }}>
        {brand.name}
      </div>
    </div>
  );
}

// =============================================================
// FINAL CTA — sem mascote
// =============================================================
function FinalCTA({ d }) {
  return (
    <section id="cta" style={{ position: "relative", padding: `${d.s(80)}px clamp(20px, 5vw, 64px)`, borderTop: "1px solid var(--cp-stroke)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, var(--cp-accent-glow) 0%, transparent 55%)", pointerEvents: "none" }}></div>
      <FloatingProps density={0.5} opacity={0.6}/>
      <div style={{ position: "relative", maxWidth: 880, margin: "0 auto", background: "linear-gradient(180deg, rgba(15,38,96,.7), rgba(6,17,48,.85))", borderRadius: 28, padding: `${d.s(56)}px ${d.s(40)}px`, border: "1px solid var(--cp-stroke-strong)", boxShadow: "0 0 48px var(--cp-accent-glow), 0 24px 60px rgba(0,0,0,.5)", textAlign: "center" }}>
        <Eyebrow color="var(--cp-accent)">Pronto pra decolar?</Eyebrow>
        <h2 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "12px 0 0" }}>
          Comece a economizar<br/><span style={{ color: "var(--cp-accent)" }}>hoje mesmo.</span>
        </h2>
        <p style={{ fontFamily: "var(--cp-font-body)", fontSize: 16, color: "var(--cp-fg-2)", marginTop: 16, lineHeight: 1.55, maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
          Comece agora pelo WhatsApp. É grátis e a gente não enche o seu chat.
        </p>
        <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <PrimaryButton size="lg" href="https://wa.me/5511940122438">Falar com o bot</PrimaryButton>
          <CapsuleButton size="lg" href="https://chat.whatsapp.com/EQi67PsfvaULLCErmDNAHY">Entrar no grupo</CapsuleButton>
        </div>
      </div>
    </section>
  );
}

// =============================================================
// FOOTER
// =============================================================
function Footer() {
  return (
    <footer style={{ padding: "56px clamp(20px, 5vw, 64px) 36px", borderTop: "1px solid var(--cp-stroke)", background: "rgba(3,8,26,.7)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div className="cp-footer-grid" style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 32, marginBottom: 36 }}>
          <div>
            <Logo height={40}/>
            <p style={{ color: "var(--cp-fg-3)", fontFamily: "var(--cp-font-body)", fontSize: 13, marginTop: 16, lineHeight: 1.55, maxWidth: 320 }}>
              As melhores ofertas do Mercado Livre, Shopee, iFood, Magalu e Amazon direto no seu WhatsApp. Sem ruído, sem spam.
            </p>
          </div>
          {[
            ["Produto", ["O Bot", "O Grupo", "Como funciona"]],
            ["Lojas", ["Mercado Livre", "Shopee", "iFood", "Magalu", "Amazon"]],
            ["Ajuda", [["Perguntas frequentes", "faq.html"], ["Contato", "contato.html"], ["Termos de uso", "termos.html"], ["Política de privacidade", "privacidade.html"]]],
          ].map(([title, items]) => (
            <div key={title}>
              <Eyebrow style={{ marginBottom: 14 }}>{title}</Eyebrow>
              {items.map(it => {
                const label = Array.isArray(it) ? it[0] : it;
                const href = Array.isArray(it) ? it[1] : "#";
                return (
                  <a key={label} href={href} style={{ display: "block", color: "var(--cp-fg-2)", fontFamily: "var(--cp-font-body)", fontSize: 13, marginBottom: 10, textDecoration: "none", transition: "color 160ms" }}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--cp-accent)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--cp-fg-2)"}>{label}</a>
                );
              })}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 22, borderTop: "1px solid var(--cp-stroke)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--cp-fg-3)", fontFamily: "var(--cp-font-mono)", fontSize: 11, flexWrap: "wrap", gap: 12 }}>
          <span>© 2026 CUPONAUTA</span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ color: "var(--cp-fg-3)", fontFamily: "var(--cp-font-mono)", fontSize: 11 }}>WEBSITE PRODUZIDO POR</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80" height="28" role="img" aria-label="Arcanjo Tech" style={{ display: "block" }}>
              <g fill="#0FA47A" fillRule="evenodd">
                <path d="M40 8 L70 66 H10 Z M40 24 L56.5 56 H23.5 Z M14 44 H66 V50 H14 Z"/>
              </g>
              <circle cx="40" cy="8" r="4.5" fill="#34D399"/>
              <text x="92" y="45" fontFamily="'Space Grotesk','Inter',Arial,sans-serif" fontSize="26" fontWeight="700" letterSpacing="1" fill="#ffffff">ARCANJO</text>
              <text x="92" y="66" fontFamily="'Inter',Arial,sans-serif" fontSize="15" fontWeight="500" letterSpacing="17" fill="#9CA3AF">TECH</text>
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =============================================================
// VIDEO TUTORIAL
// =============================================================
function VideoTutorial({ d }) {
  return (
    <section style={{ position: "relative", padding: `${d.s(80)}px clamp(20px, 5vw, 64px)`, borderTop: "1px solid var(--cp-stroke)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, var(--cp-accent-glow) 0%, transparent 55%)", pointerEvents: "none" }}></div>
      <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
        <Eyebrow color="var(--cp-accent)">Como usar</Eyebrow>
        <h2 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: "clamp(30px, 4.5vw, 52px)", lineHeight: 1, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "10px 0 16px" }}>
          Veja como é <span style={{ color: "var(--cp-accent)" }}>fácil entrar</span>
        </h2>
        <p style={{ fontFamily: "var(--cp-font-body)", fontSize: 16, color: "var(--cp-fg-2)", lineHeight: 1.6, maxWidth: 520, margin: "0 auto 36px" }}>
          Em menos de 1 minuto você já está recebendo ofertas no WhatsApp.
        </p>
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid var(--cp-stroke-strong)", boxShadow: "0 0 48px var(--cp-accent-glow), 0 24px 60px rgba(0,0,0,.6)", aspectRatio: "16 / 9" }}>
          <iframe
            src="https://player.vimeo.com/video/1196146625?badge=0&autopause=0&player_id=0&app_id=58479&color=5BA8FF&title=0&byline=0&portrait=0"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title="Tutorial Cuponauta"
          />
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HeroA, HeroB, HeroC, BotVsGrupo, ComoFunciona, VideoTutorial, Marcas, FinalCTA, Footer });
