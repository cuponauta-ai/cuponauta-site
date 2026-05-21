// Cuponauta UI Kit - shared components
// All components rendered to global scope for cross-script access.

const { useState, useEffect, useRef } = React;

// ---------- Atoms ----------

function Eyebrow({ children, color = "var(--cp-blue-300)", style }) {
  return <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em", color, ...style }}>{children}</div>;
}

function PrimaryButton({ children, onClick, href, icon, size = "md", style }) {
  const padding = size === "lg" ? "16px 32px" : size === "sm" ? "10px 18px" : "14px 26px";
  const fontSize = size === "lg" ? 16 : size === "sm" ? 12 : 14;
  const [hover, setHover] = useState(false);
  const handleClick = href ? () => { window.location.href = href; } : onClick;
  return (
    <button onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ border: "none", cursor: "pointer", background: "#2A8CFF", color: "#03081a",
        fontFamily: "var(--cp-font-display)", fontWeight: 800, fontSize, textTransform: "uppercase",
        letterSpacing: "0.04em", padding, borderRadius: 999,
        boxShadow: hover ? "0 0 18px rgba(42,140,255,.85),0 0 48px rgba(42,140,255,.35)" : "0 0 14px rgba(42,140,255,.65),0 0 28px rgba(42,140,255,.25)",
        display: "inline-flex", alignItems: "center", gap: 10, transition: "box-shadow 200ms cubic-bezier(.2,.8,.2,1)", ...style }}>
      {icon}{children}
    </button>
  );
}

function CapsuleButton({ children, onClick, href, icon, style }) {
  const [hover, setHover] = useState(false);
  const handleClick = href ? () => { window.location.href = href; } : onClick;
  return (
    <button onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: hover ? "rgba(42,140,255,.18)" : "rgba(6,17,48,.5)", color: "#fff",
        fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 14, textTransform: "uppercase",
        letterSpacing: "0.04em", padding: "14px 22px", borderRadius: 999, border: "none",
        boxShadow: "inset 0 0 0 1.5px rgba(42,140,255,.85),inset 0 0 12px rgba(42,140,255,.35),0 0 8px rgba(42,140,255,.55)",
        cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, transition: "background 200ms ease", ...style }}>
      {icon}{children}
    </button>
  );
}

function GlowIcon({ d, size = 22, fill = "none" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="#2A8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px #2A8CFF)" }}>
      <path d={d} />
    </svg>
  );
}

function LogoMark({ size = 44 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", background: "#0a1a44", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", boxShadow: "inset 0 0 0 1.5px rgba(122,175,255,.5)", flex: "none" }}>
      <div style={{ position: "absolute", top: -7, left: 8, width: 2, height: 8, background: "#fff" }}></div>
      <div style={{ position: "absolute", top: -9, left: 7, width: 4, height: 4, borderRadius: "50%", background: "#FF8A1F", boxShadow: "0 0 6px #FF8A1F" }}></div>
      <div style={{ position: "absolute", top: -7, right: 8, width: 2, height: 8, background: "#fff" }}></div>
      <div style={{ position: "absolute", top: -9, right: 7, width: 4, height: 4, borderRadius: "50%", background: "#FF8A1F", boxShadow: "0 0 6px #FF8A1F" }}></div>
      <svg width={size * 0.6} height={size * 0.45} viewBox="0 0 40 30">
        <rect x="2" y="2" width="36" height="26" rx="6" fill="#03081a" stroke="#6EE7FF" strokeWidth="1.5"/>
        <path d="M12 16 q4 6 8 0" stroke="#6EE7FF" strokeWidth="2.5" fill="none" strokeLinecap="round" style={{filter: "drop-shadow(0 0 2px #6EE7FF)"}}/>
        <path d="M22 16 q4 6 8 0" stroke="#6EE7FF" strokeWidth="2.5" fill="none" strokeLinecap="round" style={{filter: "drop-shadow(0 0 2px #6EE7FF)"}}/>
      </svg>
    </div>
  );
}

function Logo({ height = 44 }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "8px 18px 8px 12px", borderRadius: 999, background: "rgba(6,17,48,.5)", boxShadow: "inset 0 0 0 1.5px rgba(42,140,255,.85),inset 0 0 12px rgba(42,140,255,.35),0 0 10px rgba(42,140,255,.5)" }}>
      <LogoMark size={height * 0.7}/>
      <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: height * 0.55, letterSpacing: "-0.01em", lineHeight: 1 }}>
        <span style={{ color: "#fff" }}>CUPO</span><span style={{ color: "#2A8CFF" }}>NAUTA</span><span style={{ color: "#fff" }}>.</span>
      </div>
    </div>
  );
}

// ---------- Header ----------

function Header({ cartCount, onCart }) {
  return (
    <header style={{ display: "flex", alignItems: "center", gap: 18, padding: "16px 32px", borderBottom: "1px solid var(--cp-stroke)", background: "rgba(3,8,26,.6)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 10 }}>
      <Logo height={48}/>
      <nav style={{ display: "flex", gap: 22, marginLeft: 32 }}>
        {["FIFA Copa 2026", "Cupons", "Marcas", "Como funciona"].map(item => (
          <a key={item} href="#" style={{ color: "var(--cp-fg-2)", fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", textDecoration: "none" }}>{item}</a>
        ))}
      </nav>
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(6,17,48,.6)", border: "1px solid rgba(122,175,255,.18)", borderRadius: 999, padding: "10px 16px", width: 280 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5BA8FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input placeholder="Buscar ofertas, marcas…" style={{ flex: 1, background: "transparent", border: "none", color: "#fff", fontFamily: "var(--cp-font-body)", fontSize: 13, outline: "none" }}/>
        </div>
        <button onClick={onCart} style={{ position: "relative", background: "rgba(6,17,48,.5)", border: "1.5px solid rgba(42,140,255,.85)", borderRadius: 999, width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 0 8px rgba(42,140,255,.55)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2A8CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          {cartCount > 0 && <div style={{ position: "absolute", top: -4, right: -4, background: "#FF8A1F", color: "#03081a", fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 11, width: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</div>}
        </button>
      </div>
    </header>
  );
}

// ---------- Hero ----------

function MascotPill({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 22px", borderRadius: 28, background: "rgba(6,17,48,.5)", boxShadow: "inset 0 0 0 1.5px rgba(42,140,255,.85),0 0 12px rgba(42,140,255,.4)", maxWidth: 360 }}>
      <div style={{ width: 38, height: 38, borderRadius: 10, background: "#1c44b5", display: "flex", alignItems: "center", justifyContent: "center", flex: "none", boxShadow: "0 0 8px rgba(42,140,255,.6)" }}>
        <span style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 18, color: "#fff" }}>%</span>
      </div>
      <div style={{ fontFamily: "var(--cp-font-body)", fontSize: 14, color: "#C9D6F2", lineHeight: 1.3 }}>{children}</div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", padding: "60px 64px 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", overflow: "hidden" }}>
      {/* decorative props */}
      <div style={{ position: "absolute", top: 30, right: 60, fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 64, color: "#2A8CFF", opacity: 0.25, transform: "rotate(15deg)" }}>%</div>
      <div style={{ position: "absolute", bottom: 40, left: "48%", fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 48, color: "#2A8CFF", opacity: 0.2, transform: "rotate(-10deg)" }}>%</div>
      <div>
        <Eyebrow>Oficial · Licenciado Panini</Eyebrow>
        <h1 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 76, lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase", color: "#fff", margin: "12px 0 0" }}>
          ÁLBUM OFICIAL<br/>
          <span style={{ color: "#2A8CFF" }}>DA COPA 2026</span>
        </h1>
        <p style={{ fontFamily: "var(--cp-font-display)", fontSize: 22, fontWeight: 700, textTransform: "uppercase", color: "#fff", marginTop: 18, lineHeight: 1.2 }}>
          O colecionável que vai unir <span style={{ color: "#2A8CFF" }}>torcedores</span> do mundo todo!
        </p>
        <div style={{ marginTop: 28 }}>
          <MascotPill>Complete seu álbum com os <span style={{ color: "#2A8CFF", fontWeight: 700 }}>melhores preços!</span></MascotPill>
        </div>
        <div style={{ marginTop: 28, display: "flex", gap: 14 }}>
          <PrimaryButton size="lg" icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#03081a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>}>Garanta já o seu!</PrimaryButton>
          <CapsuleButton>Ver figurinhas</CapsuleButton>
        </div>
      </div>
      <div style={{ position: "relative", height: 460, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 55%, rgba(42,140,255,.45), transparent 60%)" }}></div>
        <img src="../../assets/mascot-hero.png" alt="Cuponauta" style={{ width: "100%", maxWidth: 460, position: "relative", filter: "drop-shadow(0 12px 32px rgba(0,0,0,.6))", animation: "cpFloat 4s ease-in-out infinite" }}/>
      </div>
      <style>{`@keyframes cpFloat { 0%,100% {transform:translateY(0)} 50% {transform:translateY(-12px)} }`}</style>
    </section>
  );
}

// ---------- Trust row ----------

function TrustRow() {
  const items = [
    { label: ["PRODUTOS", "ORIGINAIS PANINI"], d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" },
    { label: ["OFERTAS", "EXCLUSIVAS"], d: "M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" },
    { label: ["ENVIO", "RÁPIDO"], d: "M16 8L20 8 23 11 23 16 1 16 1 3 16 3 16 8 M5.5 21a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z M18.5 21a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" },
    { label: ["COMPRA", "100% SEGURA"], d: "M3 11h18v11H3zM7 11V7a5 5 0 0 1 10 0v4" },
  ];
  return (
    <section style={{ display: "flex", justifyContent: "center", gap: 48, padding: "32px 64px", borderTop: "1px solid var(--cp-stroke)", borderBottom: "1px solid var(--cp-stroke)", background: "rgba(3,8,26,.4)" }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(6,17,48,.6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1.5px rgba(42,140,255,.85),0 0 8px rgba(42,140,255,.4)" }}>
            <GlowIcon d={it.d} size={20}/>
          </div>
          <div style={{ fontFamily: "var(--cp-font-display)", fontSize: 12, fontWeight: 800, letterSpacing: "0.08em", color: "#fff", textTransform: "uppercase", lineHeight: 1.3 }}>
            {it.label.map((l, j) => <div key={j}>{l}</div>)}
          </div>
        </div>
      ))}
    </section>
  );
}

// ---------- Offer cards ----------

function OfferCard({ offer, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: "linear-gradient(180deg,rgba(15,38,96,.6),rgba(6,17,48,.6))", border: hover ? "1px solid rgba(122,175,255,.45)" : "1px solid var(--cp-stroke)", borderRadius: 20, padding: 18, boxShadow: hover ? "0 18px 48px rgba(0,0,0,.55)" : "0 6px 16px rgba(0,0,0,.45)", cursor: "pointer", transition: "all 240ms cubic-bezier(.2,.8,.2,1)", transform: hover ? "translateY(-2px)" : "none" }}>
      <div style={{ background: "#03081a", borderRadius: 14, height: 160, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ fontSize: 64 }}>{offer.emoji}</div>
        {offer.discount && <div style={{ position: "absolute", top: 12, left: 12, background: "#FF8A1F", color: "#03081a", fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 13, padding: "4px 10px", borderRadius: 6 }}>-{offer.discount}%</div>}
      </div>
      <div style={{ marginTop: 14 }}>
        <Eyebrow color="#5BA8FF">{offer.brand}</Eyebrow>
        <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 16, color: "#fff", textTransform: "uppercase", marginTop: 4, lineHeight: 1.2 }}>{offer.name}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginTop: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 22, color: "#2A8CFF" }}>R$ {offer.price.toFixed(2).replace(".", ",")}</div>
            {offer.was && <div style={{ fontFamily: "var(--cp-font-mono)", fontSize: 11, color: "var(--cp-fg-3)", textDecoration: "line-through" }}>R$ {offer.was.toFixed(2).replace(".", ",")}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

function OfferGrid({ offers, onPick }) {
  return (
    <section style={{ padding: "48px 64px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
        <div>
          <Eyebrow>Em destaque</Eyebrow>
          <h2 style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 36, textTransform: "uppercase", letterSpacing: "-0.02em", color: "#fff", margin: "6px 0 0" }}>AS FIGURINHAS DA <span style={{ color: "#2A8CFF" }}>COPA 2026</span></h2>
        </div>
        <a href="#" style={{ color: "#5BA8FF", fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", textDecoration: "none" }}>Ver todas →</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
        {offers.map(o => <OfferCard key={o.id} offer={o} onClick={() => onPick(o)}/>)}
      </div>
    </section>
  );
}

// ---------- Cart drawer ----------

function CartDrawer({ open, onClose, items, onCheckout }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(3,8,26,.6)", backdropFilter: "blur(8px)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transition: "opacity 240ms", zIndex: 50 }}/>
      <aside style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: 420, background: "var(--cp-bg)", borderLeft: "1px solid var(--cp-stroke-strong)", boxShadow: "-20px 0 60px rgba(0,0,0,.6), 0 0 30px rgba(42,140,255,.2)", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform 280ms cubic-bezier(.2,.8,.2,1)", zIndex: 60, display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "22px 24px", borderBottom: "1px solid var(--cp-stroke)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 800, fontSize: 18, textTransform: "uppercase", color: "#fff" }}>Seu carrinho</div>
          <button onClick={onClose} style={{ background: "transparent", border: "none", color: "#5BA8FF", cursor: "pointer", fontSize: 20 }}>✕</button>
        </div>
        <div style={{ flex: 1, overflow: "auto", padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
          {items.length === 0 && <div style={{ color: "var(--cp-fg-3)", textAlign: "center", padding: 40, fontFamily: "var(--cp-font-body)" }}>Carrinho vazio.</div>}
          {items.map(i => (
            <div key={i.id} style={{ display: "flex", gap: 12, padding: 12, background: "rgba(15,38,96,.4)", borderRadius: 12 }}>
              <div style={{ width: 56, height: 56, borderRadius: 10, background: "#03081a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{i.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", color: "#fff" }}>{i.name}</div>
                <div style={{ fontFamily: "var(--cp-font-mono)", fontSize: 11, color: "var(--cp-fg-3)", marginTop: 2 }}>{i.qty} × R$ {i.price.toFixed(2).replace(".", ",")}</div>
              </div>
              <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 15, color: "#2A8CFF" }}>R$ {(i.price * i.qty).toFixed(2).replace(".", ",")}</div>
            </div>
          ))}
          {items.length > 0 && (
            <div style={{ marginTop: 8, padding: 14, background: "rgba(255,138,31,.1)", border: "1px dashed #FF8A1F", borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ background: "#FF8A1F", color: "#03081a", fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 18, width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>%</div>
              <div style={{ flex: 1, fontFamily: "var(--cp-font-mono)", fontSize: 12, color: "#FFA552" }}>Cupom <strong>COPA26</strong> aplicado</div>
            </div>
          )}
        </div>
        <div style={{ padding: 24, borderTop: "1px solid var(--cp-stroke)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <span style={{ fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", color: "var(--cp-fg-2)", letterSpacing: "0.06em" }}>Total</span>
            <span style={{ fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: 24, color: "#2A8CFF" }}>R$ {total.toFixed(2).replace(".", ",")}</span>
          </div>
          <PrimaryButton size="lg" style={{ width: "100%", justifyContent: "center" }} onClick={onCheckout}>Finalizar compra</PrimaryButton>
        </div>
      </aside>
    </>
  );
}

// ---------- Footer ----------

function Footer() {
  return (
    <footer style={{ padding: "48px 64px 32px", borderTop: "1px solid var(--cp-stroke)", background: "rgba(3,8,26,.6)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 32, marginBottom: 32 }}>
        <div>
          <Logo height={42}/>
          <p style={{ color: "var(--cp-fg-3)", fontFamily: "var(--cp-font-body)", fontSize: 13, marginTop: 16, lineHeight: 1.5, maxWidth: 280 }}>Sua plataforma de cupons e produtos colecionáveis oficiais. Sempre com os melhores preços.</p>
        </div>
        {[["Categorias", ["Figurinhas", "Álbuns", "Bolas", "Camisetas"]], ["Ajuda", ["Como funciona", "Trocas", "Entrega", "Contato"]], ["Empresa", ["Sobre", "Trabalhe conosco", "Imprensa", "Termos"]]].map(([title, items]) => (
          <div key={title}>
            <Eyebrow style={{ marginBottom: 12 }}>{title}</Eyebrow>
            {items.map(it => <div key={it} style={{ color: "var(--cp-fg-2)", fontFamily: "var(--cp-font-body)", fontSize: 13, marginBottom: 8 }}>{it}</div>)}
          </div>
        ))}
      </div>
      <div style={{ paddingTop: 24, borderTop: "1px solid var(--cp-stroke)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--cp-fg-3)", fontFamily: "var(--cp-font-mono)", fontSize: 11 }}>
        <span>© 2026 CUPONAUTA. PRODUTOS LICENCIADOS PANINI · FIFA WORLD CUP 2026™</span>
        <span>Feito no Brasil 🇧🇷</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Eyebrow, PrimaryButton, CapsuleButton, GlowIcon, Logo, LogoMark, Header, MascotPill, Hero, TrustRow, OfferCard, OfferGrid, CartDrawer, Footer });
