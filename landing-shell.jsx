// Cuponauta Landing — shell pieces (Header, Logo, Buttons, Mascot)
const { useState, useEffect, useRef } = React;

// ---------- LOGO (now image-based, from official asset) ----------
function Logo({ height = 46 }) {
  return (
    <a href="#" style={{ display: "inline-flex", textDecoration: "none", lineHeight: 0 }}>
      <img src="assets/logo-cuponauta.png" alt="Cuponauta" style={{ height, width: "auto", display: "block", filter: "drop-shadow(0 0 12px var(--cp-accent-glow))" }}/>
    </a>
  );
}

// Small round mark — bot face cropped from the logo
function LogoMark({ size = 36 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", overflow: "hidden", background: "#0a1a44", flex: "none", boxShadow: "inset 0 0 0 1.5px var(--cp-stroke-strong), 0 0 8px var(--cp-accent-glow)" }}>
      <img src="assets/logo-mark.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}/>
    </div>
  );
}

// ---------- ATOMS ----------
function Eyebrow({ children, color = "var(--cp-blue-300)", style }) {
  return <div style={{ fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em", color, ...style }}>{children}</div>;
}

function PrimaryButton({ children, onClick, href, icon, size = "md", style }) {
  const padY = size === "lg" ? 18 : size === "sm" ? 10 : 14;
  const padX = size === "lg" ? 34 : size === "sm" ? 18 : 26;
  const fontSize = size === "lg" ? 16 : size === "sm" ? 12 : 14;
  const [hover, setHover] = useState(false);
  const handleClick = href ? () => { window.location.href = href; } : onClick;
  return (
    <button onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ border: "none", cursor: "pointer", background: "var(--cp-accent)", color: "#03081a",
        fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize, textTransform: "uppercase",
        letterSpacing: "0.04em", padding: `${padY}px ${padX}px`, borderRadius: 999,
        boxShadow: hover ? "0 0 18px var(--cp-accent-glow-strong), 0 0 48px var(--cp-accent-glow)" : "0 0 14px var(--cp-accent-glow-strong), 0 0 28px var(--cp-accent-glow)",
        display: "inline-flex", alignItems: "center", gap: 10, transition: "box-shadow 200ms cubic-bezier(.2,.8,.2,1), transform 200ms ease",
        transform: hover ? "translateY(-1px)" : "none", whiteSpace: "nowrap", ...style }}>
      {icon}{children}
    </button>
  );
}

function CapsuleButton({ children, onClick, href, icon, size = "md", style }) {
  const padY = size === "lg" ? 18 : size === "sm" ? 10 : 14;
  const padX = size === "lg" ? 30 : size === "sm" ? 18 : 22;
  const fontSize = size === "lg" ? 15 : size === "sm" ? 12 : 14;
  const [hover, setHover] = useState(false);
  const handleClick = href ? () => { window.location.href = href; } : onClick;
  return (
    <button onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: hover ? "rgba(42,140,255,.18)" : "rgba(6,17,48,.5)", color: "#fff",
        fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize, textTransform: "uppercase",
        letterSpacing: "0.04em", padding: `${padY}px ${padX}px`, borderRadius: 999, border: "none",
        boxShadow: "inset 0 0 0 1.5px var(--cp-accent), inset 0 0 12px var(--cp-accent-glow), 0 0 8px var(--cp-accent-glow)",
        cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10, transition: "background 200ms ease", whiteSpace: "nowrap", ...style }}>
      {icon}{children}
    </button>
  );
}

const Icons = {
  bot: <><rect x="3" y="8" width="18" height="12" rx="3"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/><path d="M12 2v4"/><circle cx="12" cy="1.5" r="1"/><path d="M3 14h-1"/><path d="M22 14h-1"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  whatsapp: <><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5 .5 0 0 0 1 0V9a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></>,
  bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>,
  shop: <><path d="M3 9l1.5-5h15L21 9"/><path d="M3 9v11h18V9"/><path d="M3 9h18"/><path d="M9 13h6"/></>,
  spark: <><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/><path d="m5.6 5.6 2.1 2.1"/><path d="m16.3 16.3 2.1 2.1"/><path d="m5.6 18.4 2.1-2.1"/><path d="m16.3 7.7 2.1-2.1"/></>,
  arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
  trend: <><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></>,
};

// ---------- HEADER ----------
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header style={{ display: "flex", alignItems: "center", gap: 18, padding: "16px clamp(20px, 5vw, 64px)", background: scrolled ? "rgba(3,8,26,.78)" : "rgba(3,8,26,.35)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: scrolled ? "1px solid var(--cp-stroke)" : "1px solid transparent", position: "sticky", top: 0, zIndex: 20, transition: "all 240ms ease" }}>
      <Logo height={42}/>
      <nav className="cp-nav" style={{ display: "flex", gap: 26, marginLeft: 28 }}>
        {[["#bot", "O Bot"], ["#grupo", "O Grupo"], ["#funciona", "Como funciona"], ["#lojas", "Lojas"]].map(([href, label]) => (
          <a key={label} href={href} style={{ color: "var(--cp-fg-2)", fontFamily: "var(--cp-font-display)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", textDecoration: "none", transition: "color 160ms" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--cp-accent)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--cp-fg-2)"}>{label}</a>
        ))}
      </nav>
      <div style={{ flex: 1 }}></div>
      <a href="#cta" style={{ textDecoration: "none" }}>
        <PrimaryButton size="sm">
          Economizar agora
        </PrimaryButton>
      </a>
    </header>
  );
}

// ---------- MASCOT ----------
// Default to the waving close-up mascot. Pass `src` to use a different one.
function Mascot({ size = 460, float = true, glow = "var(--cp-accent-glow)", src = "assets/mascot-waving.png", style }) {
  return (
    <div style={{ position: "relative", display: "inline-block", ...style }}>
      <div style={{ position: "absolute", inset: -20, background: `radial-gradient(circle at 50% 55%, ${glow}, transparent 60%)`, filter: "blur(8px)" }}></div>
      <img src={src} alt="Cuponauta mascote" style={{ width: size, maxWidth: "100%", position: "relative", filter: "drop-shadow(0 12px 32px rgba(0,0,0,.5))", animation: float ? "cpFloat 4.4s ease-in-out infinite" : "none" }}/>
    </div>
  );
}

// ---------- SIGNATURE FLOATING PROPS ----------
function FloatingProps({ density = 1, opacity = 1 }) {
  const baseProps = [
    { type: "%", x: "6%", y: "12%", size: 80, rot: -15, c: "var(--cp-accent)", op: 0.14 },
    { type: "%", x: "90%", y: "8%", size: 100, rot: 18, c: "var(--cp-accent)", op: 0.18 },
    { type: "puzzle", x: "92%", y: "60%", size: 60, rot: 25, c: "var(--cp-accent)", op: 0.28 },
    { type: "puzzle", x: "4%", y: "70%", size: 48, rot: -20, c: "var(--cp-accent)", op: 0.24 },
    { type: "%", x: "50%", y: "92%", size: 64, rot: -8, c: "var(--cp-accent)", op: 0.12 },
  ];
  const items = baseProps.slice(0, Math.round(baseProps.length * density));
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {items.map((p, i) => {
        const common = { position: "absolute", left: p.x, top: p.y, transform: `translate(-50%,-50%) rotate(${p.rot}deg)`, opacity: p.op * opacity, animation: `cpDrift ${6 + i}s ease-in-out infinite`, animationDelay: `${i * 0.4}s` };
        if (p.type === "%") {
          return <div key={i} style={{ ...common, fontFamily: "var(--cp-font-display)", fontWeight: 900, fontSize: p.size, color: p.c, lineHeight: 1, textShadow: `0 0 16px ${p.c}` }}>%</div>;
        }
        if (p.type === "puzzle") {
          return (
            <svg key={i} viewBox="0 0 24 24" width={p.size} height={p.size} style={{ ...common, filter: `drop-shadow(0 0 10px ${p.c})` }}>
              <path fill={p.c} d="M10 3h4a1 1 0 0 1 1 1v2.5a1.5 1.5 0 0 0 3 0V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2.5a1.5 1.5 0 0 0 0 3H21a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2.5a1.5 1.5 0 0 0-3 0V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h2.5a1.5 1.5 0 0 0 0-3H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1z"/>
              <text x="12" y="15" textAnchor="middle" fontFamily="var(--cp-font-display)" fontWeight="900" fontSize="9" fill="var(--cp-navy-900)">%</text>
            </svg>
          );
        }
      })}
    </div>
  );
}

Object.assign(window, { Logo, LogoMark, Eyebrow, PrimaryButton, CapsuleButton, Icons, Header, Mascot, FloatingProps });
