// Shell leve para sub-páginas: Footer standalone sem depender de landing-sections.jsx
function Footer() {
  return (
    <footer style={{ padding: "56px clamp(20px, 5vw, 64px) 36px", borderTop: "1px solid var(--cp-stroke)", background: "rgba(3,8,26,.7)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: 32, marginBottom: 36, flexWrap: "wrap" }}>
          <div>
            <a href="index.html" style={{ display: "inline-flex", textDecoration: "none", lineHeight: 0 }}>
              <img src="assets/logo-cuponauta.png" alt="Cuponauta" style={{ height: 40, width: "auto", display: "block", filter: "drop-shadow(0 0 12px var(--cp-accent-glow))" }}/>
            </a>
            <p style={{ color: "var(--cp-fg-3)", fontFamily: "var(--cp-font-body)", fontSize: 13, marginTop: 16, lineHeight: 1.55, maxWidth: 320 }}>
              As melhores ofertas do Mercado Livre, Shopee, iFood, Magalu e Amazon direto no seu WhatsApp. Sem ruído, sem spam.
            </p>
          </div>
          {[
            ["Produto", [["O Bot", "index.html#bot"], ["O Grupo", "index.html#grupo"], ["Como funciona", "index.html#funciona"]]],
            ["Lojas", [["Mercado Livre", "#"], ["Shopee", "#"], ["iFood", "#"], ["Magalu", "#"], ["Amazon", "#"]]],
            ["Ajuda", [["Perguntas frequentes", "faq.html"], ["Contato", "contato.html"], ["Termos de uso", "termos.html"], ["Política de privacidade", "privacidade.html"]]],
          ].map(([title, items]) => (
            <div key={title}>
              <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--cp-blue-300)", marginBottom: 14 }}>{title}</div>
              {items.map(([label, href]) => (
                <a key={label} href={href} style={{ display: "block", color: "var(--cp-fg-2)", fontFamily: "var(--cp-font-body)", fontSize: 13, marginBottom: 10, textDecoration: "none", transition: "color 160ms" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--cp-accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--cp-fg-2)"}>{label}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 22, borderTop: "1px solid var(--cp-stroke)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--cp-fg-3)", fontFamily: "var(--cp-font-mono)", fontSize: 11, flexWrap: "wrap", gap: 12 }}>
          <span>© 2026 CUPONAUTA</span>
          <span>FEITO NO BRASIL</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
