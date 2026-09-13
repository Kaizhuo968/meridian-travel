// ===== Multilingual static-site template i18n (en / es / de / ja / ko / ar / fr) =====
// Structure mirrors the DOM. Strings use " for safety. RTL note: Arabic (ar) is rendered
// with <html dir="rtl"> by script.js. Keep keys identical across every language.
const I18N = {
  en: {
    nav: { destinations: "Features", journeys: "Plans", services: "Solutions", about: "About", cta: "Get started" },
    hero: {
      eyebrow: "Multilingual static template",
      title: "Build something great.",
      sub: "A fast, i18n-ready landing page starter. No build step, clean localization, ready for your next product.",
      btnLeisure: "See features",
      btnBusiness: "Get started",
      stats: { d1: "languages", d2: "sections", d3: "components", d4: "rating" }
    },
    twoways: {
      eyebrow: "Two paths",
      h2: "Made for makers and teams",
      lead: "Whether you're prototyping alone or shipping with a team, this template has a path.",
      leisureTitle: "For makers",
      leisureDesc: "Customize copy, colors, and sections to match your brand.",
      leisureLink: "Explore features →",
      bizTitle: "For teams",
      bizDesc: "Add CI, tests, and deployment workflows to scale.",
      bizLink: "View setup →"
    },
    destinations: {
      eyebrow: "Features",
      h2: "What you get",
      lead: "Everything you need for a modern static landing page.",
      cards: [
        { title: "Responsive design", desc: "Looks great on phones, tablets, and desktops." },
        { title: "Seven languages", desc: "English, Spanish, German, Japanese, Korean, Arabic, French." },
        { title: "No build step", desc: "Plain HTML/CSS/JS. Open the file and it runs." },
        { title: "CI ready", desc: "GitHub Actions validate i18n and syntax on every PR." },
        { title: "Accessible markup", desc: "Semantic HTML and keyboard-friendly." },
        { title: "Fast hosting", desc: "Deploy to GitHub Pages, Netlify, or any static host." }
      ]
    },
    journeys: {
      eyebrow: "Plans",
      h2: "Starter layouts",
      lead: "Drop in your content and ship.",
      from: "from", per: "", custom: "Details →",
      items: [
        { meta: ["1 page", "Landing", "Starter"], title: "Landing page", desc: "Hero, features, CTA, and footer. The default template.", price: "Free", c: "#b5483c" },
        { meta: ["3 pages", "Marketing", "Starter"], title: "Marketing site", desc: "Add about, pricing, and contact pages as you grow.", price: "Free", c: "#2c6e63" },
        { meta: ["Custom", "Product", "Scale"], title: "Product app", desc: "Swap in a framework when you need routing and dynamic content.", price: "Custom", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "Solutions",
      h2: "Built for flexibility",
      items: [
        { title: "Static hosting", desc: "Works on any CDN." },
        { title: "Design tokens", desc: "CSS variables for quick theming." },
        { title: "Component-friendly", desc: "Sections are easy to copy and remix." },
        { title: "SEO-ready", desc: "Clean markup and meta tags." },
        { title: "Form starter", desc: "Front-end form ready for your backend." },
        { title: "Dark/light neutral", desc: "Palette adapts to your brand." }
      ]
    },
    about: {
      eyebrow: "Why this template",
      h2: "A clean starting point",
      p: "No framework lock-in, no hidden dependencies. Just HTML, CSS, and a solid i18n setup you can extend.",
      list: ["7 languages out of the box", "Branch protection + CI", "PR-based workflow", "Easy to theme"],
      quote: "We went from idea to live page in one afternoon, with review gates we actually trust.",
      quoteBy: "— A happy builder"
    },
    contact: {
      eyebrow: "Start here",
      h2: "Get in touch",
      p: "Tell us what you're building. We'll reply within one business day.",
      meta: ["✉ hello@example.com", "☎ +1 000 000 0000", "🕘 Mon–Fri, 09:00–18:00 (GMT+8)"],
      form: {
        name: "Name", email: "Email", company: "Company", interestLabel: "Interest",
        opts: ["General inquiry", "Partnership", "Support", "Other"],
        message: "What are you building?",
        submit: "Send message", note: "Thanks — this is a demo form. Wire it to your backend next."
      }
    },
    footer: {
      tagline: "A multilingual static-site template. Fork it and make it yours.",
      cols: { Explore: ["Features", "Plans", "Solutions"], Company: ["About", "Contact", "Careers"], Follow: ["Instagram", "YouTube", "Newsletter"] },
      bottom: "© 2026 Brand (placeholder). All rights reserved."
    }
  },

  es: {
    nav: { destinations: "Funciones", journeys: "Planes", services: "Soluciones", about: "Nosotros", cta: "Empezar" },
    hero: {
      eyebrow: "Plantilla estática multilingüe",
      title: "Construye algo grande.",
      sub: "Una landing rápida y lista para i18n. Sin paso de build, localización limpia, preparada para tu próximo producto.",
      btnLeisure: "Ver funciones", btnBusiness: "Empezar",
      stats: { d1: "idiomas", d2: "secciones", d3: "componentes", d4: "valoración" }
    },
    twoways: {
      eyebrow: "Dos caminos",
      h2: "Hecho para creadores y equipos",
      lead: "Ya prototipes solo o lances con un equipo, esta plantilla tiene un camino.",
      leisureTitle: "Para creadores", leisureDesc: "Personaliza texto, colores y secciones para tu marca.", leisureLink: "Explorar funciones →",
      bizTitle: "Para equipos", bizDesc: "Añade CI, tests y despliegue para escalar.", bizLink: "Ver configuración →"
    },
    destinations: {
      eyebrow: "Funciones", h2: "Lo que incluye",
      lead: "Todo lo que necesitas para una landing estática moderna.",
      cards: [
        { title: "Diseño responsive", desc: "Se ve bien en móvil, tablet y escritorio." },
        { title: "Siete idiomas", desc: "Inglés, español, alemán, japonés, coreano, árabe y francés." },
        { title: "Sin build", desc: "HTML/CSS/JS puro. Abre el archivo y funciona." },
        { title: "CI listo", desc: "GitHub Actions valida i18n y sintaxis en cada PR." },
        { title: "Marcado accesible", desc: "HTML semántico y amigable con teclado." },
        { title: "Hosting rápido", desc: "Despliega en GitHub Pages, Netlify o cualquier host estático." }
      ]
    },
    journeys: {
      eyebrow: "Planes", h2: "Plantillas iniciales", lead: "Añade tu contenido y publícalo.",
      from: "desde", per: "", custom: "Detalles →",
      items: [
        { meta: ["1 página", "Landing", "Inicial"], title: "Página de inicio", desc: "Hero, funciones, CTA y footer. La plantilla por defecto.", price: "Gratis", c: "#b5483c" },
        { meta: ["3 páginas", "Marketing", "Inicial"], title: "Site de marketing", desc: "Añade about, pricing y contacto a medida que creces.", price: "Gratis", c: "#2c6e63" },
        { meta: ["Personalizado", "Producto", "Escala"], title: "App de producto", desc: "Cambia a un framework cuando necesites routing y contenido dinámico.", price: "A medida", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "Soluciones", h2: "Hecho para ser flexible",
      items: [
        { title: "Hosting estático", desc: "Funciona en cualquier CDN." },
        { title: "Design tokens", desc: "Variables CSS para tematizar rápido." },
        { title: "Amigable con componentes", desc: "Secciones fáciles de copiar y reutilizar." },
        { title: "SEO listo", desc: "Marcado limpio y meta tags." },
        { title: "Formulario inicial", desc: "Formulario front-end listo para tu backend." },
        { title: "Paleta neutra", desc: "Se adapta a tu marca clara u oscura." }
      ]
    },
    about: {
      eyebrow: "Por qué esta plantilla", h2: "Un punto de partida limpio",
      p: "Sin bloqueo de framework ni dependencias ocultas. Solo HTML, CSS y una base sólida de i18n que puedes extender.",
      list: ["7 idiomas incluidos", "Protección de rama + CI", "Flujo basado en PR", "Fácil de tematizar"],
      quote: "Pasamos de la idea a la página en producción en una tarde, con revisiones en las que confiamos.", quoteBy: "— Un creador contento"
    },
    contact: {
      eyebrow: "Empieza aquí", h2: "Ponte en contacto", p: "Cuéntanos qué estás construyendo. Responderemos en un día hábil.",
      meta: ["✉ hello@example.com", "☎ +1 000 000 0000", "🕘 Lun–Vie, 09:00–18:00 (GMT+8)"],
      form: {
        name: "Nombre", email: "Correo", company: "Empresa", interestLabel: "Interés",
        opts: ["Consulta general", "Socio", "Soporte", "Otro"], message: "¿Qué estás construyendo?",
        submit: "Enviar mensaje", note: "Gracias — este es un formulario de demostración. Conéctalo a tu backend."
      }
    },
    footer: {
      tagline: "Una plantilla de sitio estático multilingüe. Hazla tuya.",
      cols: { Explore: ["Funciones", "Planes", "Soluciones"], Company: ["Nosotros", "Contacto", "Empleo"], Follow: ["Instagram", "YouTube", "Boletín"] },
      bottom: "© 2026 Brand (marca provisional). Todos los derechos reservados."
    }
  },

  de: {
    nav: { destinations: "Features", journeys: "Pläne", services: "Lösungen", about: "Über uns", cta: "Loslegen" },
    hero: {
      eyebrow: "Mehrsprachiges Static-Template",
      title: "Baue etwas Grosses.",
      sub: "Ein schneller, i18n-bereiter Landing-Page-Starter. Kein Build, saubere Lokalisierung, bereit für dein nächstes Produkt.",
      btnLeisure: "Features ansehen", btnBusiness: "Loslegen",
      stats: { d1: "Sprachen", d2: "Abschnitte", d3: "Komponenten", d4: "Bewertung" }
    },
    twoways: {
      eyebrow: "Zwei Wege",
      h2: "Für Maker und Teams",
      lead: "Ob du allein prototypst oder mit einem Team shipst — dieses Template bietet den passenden Weg.",
      leisureTitle: "Für Maker", leisureDesc: "Passe Texte, Farben und Abschnitte an deine Marke an.", leisureLink: "Features erkunden →",
      bizTitle: "Für Teams", bizDesc: "Füge CI, Tests und Deployment hinzu, um zu skalieren.", bizLink: "Setup ansehen →"
    },
    destinations: {
      eyebrow: "Features", h2: "Was du bekommst",
      lead: "Alles, was du für eine moderne statische Landing Page brauchst.",
      cards: [
        { title: "Responsive Design", desc: "Sieht auf Phone, Tablet und Desktop gut aus." },
        { title: "Sieben Sprachen", desc: "Englisch, Spanisch, Deutsch, Japanisch, Koreanisch, Arabisch, Französisch." },
        { title: "Kein Build", desc: "Plain HTML/CSS/JS. Datei öffnen und los." },
        { title: "CI-ready", desc: "GitHub Actions validieren i18n und Syntax bei jedem PR." },
        { title: "Zugängliches Markup", desc: "Semantisches HTML und tastaturfreundlich." },
        { title: "Schnelles Hosting", desc: "Deploye auf GitHub Pages, Netlify oder jeden Static-Host." }
      ]
    },
    journeys: {
      eyebrow: "Pläne", h2: "Starter-Layouts", lead: "Füge deinen Inhalt ein und veröffentliche.",
      from: "ab", per: "", custom: "Details →",
      items: [
        { meta: ["1 Seite", "Landing", "Starter"], title: "Landing Page", desc: "Hero, Features, CTA und Footer. Das Standard-Template.", price: "Kostenlos", c: "#b5483c" },
        { meta: ["3 Seiten", "Marketing", "Starter"], title: "Marketing-Site", desc: "Ergänze About, Pricing und Contact, wenn du wächst.", price: "Kostenlos", c: "#2c6e63" },
        { meta: ["Individuell", "Produkt", "Skalieren"], title: "Product App", desc: "Wechsle zu einem Framework, wenn Routing und dynamische Inhalte nötig sind.", price: "Individuell", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "Lösungen", h2: "Auf Flexibilität ausgelegt",
      items: [
        { title: "Static Hosting", desc: "Funktioniert auf jedem CDN." },
        { title: "Design Tokens", desc: "CSS-Variablen für schnelles Theming." },
        { title: "Komponentenfreundlich", desc: "Abschnitte lassen sich einfach kopieren und remixen." },
        { title: "SEO-ready", desc: "Sauberes Markup und Meta-Tags." },
        { title: "Formular-Starter", desc: "Front-End-Formular, bereit für dein Backend." },
        { title: "Helle/dunkle Palette", desc: "Passt sich an deine Marke an." }
      ]
    },
    about: {
      eyebrow: "Warum dieses Template", h2: "Ein sauberer Startpunkt",
      p: "Kein Framework-Lock-in, keine versteckten Abhängigkeiten. Nur HTML, CSS und ein solides i18n-Setup zum Erweitern.",
      list: ["7 Sprachen out of the box", "Branch Protection + CI", "PR-basierter Workflow", "Einfach zu thematisieren"],
      quote: "Wir gingen von der Idee zur Live-Page an einem Nachmittag — mit Review-Gates, denen wir vertrauen.", quoteBy: "— Ein glücklicher Builder"
    },
    contact: {
      eyebrow: "Starte hier", h2: "Kontaktiere uns", p: "Erzähle uns, was du baust. Wir antworten innerhalb eines Werktags.",
      meta: ["✉ hello@example.com", "☎ +1 000 000 0000", "🕘 Mo–Fr, 09:00–18:00 (GMT+8)"],
      form: {
        name: "Name", email: "E-Mail", company: "Unternehmen", interestLabel: "Interesse",
        opts: ["Allgemeine Anfrage", "Partnerschaft", "Support", "Sonstiges"], message: "Was baust du?",
        submit: "Nachricht senden", note: "Danke — das ist ein Demo-Formular. Verbinde es mit deinem Backend."
      }
    },
    footer: {
      tagline: "Ein mehrsprachiges Static-Site-Template. Fork es und mach es zu deinem.",
      cols: { Explore: ["Features", "Pläne", "Lösungen"], Company: ["Über uns", "Kontakt", "Karriere"], Follow: ["Instagram", "YouTube", "Newsletter"] },
      bottom: "© 2026 Brand (Platzhalter). Alle Rechte vorbehalten."
    }
  },

  ja: {
    nav: { destinations: "機能", journeys: "プラン", services: "ソリューション", about: "概要", cta: "始める" },
    hero: {
      eyebrow: "多言語対応の静的テンプレート",
      title: "素晴らしいものを作ろう。",
      sub: "高速で i18n 対応のランディングページスターター。ビルド不要、クリーンなローカリゼーション。次のプロダクトの土台に。",
      btnLeisure: "機能を見る", btnBusiness: "始める",
      stats: { d1: "言語", d2: "セクション", d3: "コンポーネント", d4: "評価" }
    },
    twoways: {
      eyebrow: "2つの道",
      h2: "個人でもチームでも",
      lead: "一人でプロトタイプを作るも、チームでリリースするも、このテンプレートに道がある。",
      leisureTitle: "個人クリエイター向け", leisureDesc: "文章・色・セクションをブランドに合わせてカスタマイズ。", leisureLink: "機能を探索 →",
      bizTitle: "チーム向け", bizDesc: "CI、テスト、デプロイメントを追加してスケール。", bizLink: "セットアップを見る →"
    },
    destinations: {
      eyebrow: "機能", h2: "含まれるもの",
      lead: "モダンな静的ランディングページに必要なものがすべて。",
      cards: [
        { title: "レスポンシブデザイン", desc: "スマホ、タブレット、デスクトップで美しく表示。" },
        { title: "7言語対応", desc: "英語、スペイン語、ドイツ語、日本語、韓国語、アラビア語、フランス語。" },
        { title: "ビルド不要", desc: "プレーンな HTML/CSS/JS。ファイルを開けば動く。" },
        { title: "CI対応", desc: "GitHub Actions が各 PR で i18n と構文を検証。" },
        { title: "アクセシブルなマークアップ", desc: "セマンティック HTML、キーボード対応。" },
        { title: "高速ホスティング", desc: "GitHub Pages、Netlify など任意の静的ホストへデプロイ。" }
      ]
    },
    journeys: {
      eyebrow: "プラン", h2: "スターターレイアウト", lead: "コンテンツを入れて、公開するだけ。",
      from: "最少", per: "", custom: "詳細 →",
      items: [
        { meta: ["1ページ", "ランディング", "スターター"], title: "ランディングページ", desc: "Hero、機能、CTA、フッター。デフォルトのテンプレート。", price: "無料", c: "#b5483c" },
        { meta: ["3ページ", "マーケティング", "スターター"], title: "マーケティングサイト", desc: "成長に合わせて About、Pricing、Contact を追加。", price: "無料", c: "#2c6e63" },
        { meta: ["カスタム", "プロダクト", "スケール"], title: "プロダクトアプリ", desc: "ルーティングや動的コンテンツが必要になったらフレームワークへ移行。", price: "カスタム", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "ソリューション", h2: "柔軟性のために作られた",
      items: [
        { title: "静的ホスティング", desc: "どの CDN でも動作。" },
        { title: "デザイントークン", desc: "CSS 変数でテーマを素早く変更。" },
        { title: "コンポーネント志向", desc: "セクションをコピーして再利用しやすい。" },
        { title: "SEO対応", desc: "クリーンなマークアップとメタタグ。" },
        { title: "フォームスターター", desc: "フロントエンドフォームはバックエンドに接続するだけ。" },
        { title: "明/暗どちらにも", desc: "ブランドに合わせて調整できるパレット。" }
      ]
    },
    about: {
      eyebrow: "このテンプレートの強み", h2: "クリーンな出発点",
      p: "フレームワークへのロックインも、隠れた依存関係もなし。HTML、CSS、そして拡張可能な堅牢な i18n セットアップだけ。",
      list: ["7言語をすぐに利用可能", "ブランチ保護 + CI", "PR ベースのワークフロー", "テーマ変更が簡単"],
      quote: "アイデアから公開ページまで、信頼できるレビューゲートとともに午後で完了した。", quoteBy: "— 満足したビルダー"
    },
    contact: {
      eyebrow: "はじめに", h2: "お問い合わせ", p: "何を作っているか教えてください。1営業日以内にお返しします。",
      meta: ["✉ hello@example.com", "☎ +1 000 000 0000", "🕘 月–金, 09:00–18:00 (GMT+8)"],
      form: {
        name: "お名前", email: "メール", company: "会社名", interestLabel: "興味のある内容",
        opts: ["一般的なお問い合わせ", "パートナーシップ", "サポート", "その他"], message: "何を作っていますか？",
        submit: "送信する", note: "ありがとうございます — これはデモ用フォームです。バックエンドと接続してください。"
      }
    },
    footer: {
      tagline: "多言語対応の静的サイトテンプレート。Fork して自由に使ってください。",
      cols: { Explore: ["機能", "プラン", "ソリューション"], Company: ["概要", "お問い合わせ", "採用"], Follow: ["Instagram", "YouTube", "ニュースレター"] },
      bottom: "© 2026 Brand（仮名称）。無断複製を禁じます。"
    }
  },

  ko: {
    nav: { destinations: "기능", journeys: "플랜", services: "솔루션", about: "소개", cta: "시작하기" },
    hero: {
      eyebrow: "다국어 정적 템플릿",
      title: "멋진 것을 만들어 보세요.",
      sub: "빠르고 i18n 준비된 랜딩 페이지 스타터. 빌드 단계 없이 깔끔한 현지화. 다음 제품을 위한 준비된 토대입니다.",
      btnLeisure: "기능 보기", btnBusiness: "시작하기",
      stats: { d1: "언어", d2: "섹션", d3: "컴포넌트", d4: "평점" }
    },
    twoways: {
      eyebrow: "두 가지 길",
      h2: "메이커와 팀을 위해",
      lead: "혼자 프로토타입을 만들든 팀과 함께 출시하든, 이 템플릿에 길이 있습니다.",
      leisureTitle: "메이커용", leisureDesc: "브랜드에 맞게 복사, 색상, 섹션을 조정하세요.", leisureLink: "기능 살펴보기 →",
      bizTitle: "팀용", bizDesc: "확장을 위해 CI, 테스트, 배포 워크플로를 추가하세요.", bizLink: "설정 보기 →"
    },
    destinations: {
      eyebrow: "기능", h2: "제공 사항",
      lead: "현대적인 정적 랜딩 페이지에 필요한 모든 것.",
      cards: [
        { title: "반응형 디자인", desc: "휴대폰, 태블릿, 데스크톱에서 모두 잘 보입니다." },
        { title: "7개 언어", desc: "영어, 스페인어, 독일어, 일본어, 한국어, 아랍어, 프랑스어." },
        { title: "빌드 불필요", desc: "평범한 HTML/CSS/JS. 파일을 열면 실행됩니다." },
        { title: "CI 준비", desc: "GitHub Actions가 각 PR에서 i18n과 구문을 검증합니다." },
        { title: "접근성 마크업", desc: "시맨틱 HTML과 키보드 친화적." },
        { title: "빠른 호스팅", desc: "GitHub Pages, Netlify 또는 정적 호스트에 배포." }
      ]
    },
    journeys: {
      eyebrow: "플랜", h2: "스타터 레이아웃", lead: "콘텐츠를 넣고 배포하세요.",
      from: "~부터", per: "", custom: "자세히 →",
      items: [
        { meta: ["1페이지", "랜딩", "스타터"], title: "랜딩 페이지", desc: "Hero, 기능, CTA, 푸터. 기본 템플릿입니다.", price: "무료", c: "#b5483c" },
        { meta: ["3페이지", "마케팅", "스타터"], title: "마케팅 사이트", desc: "성장에 따라 About, Pricing, Contact를 추가하세요.", price: "무료", c: "#2c6e63" },
        { meta: ["커스텀", "제품", "확장"], title: "프로덕트 앱", desc: "라우팅과 동적 콘텐츠가 필요해지면 프레임워크로 전환.", price: "커스텀", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "솔루션", h2: "유연성을 위해 설계됨",
      items: [
        { title: "정적 호스팅", desc: "모든 CDN에서 작동." },
        { title: "디자인 토큰", desc: "CSS 변수로 빠르게 테마 변경." },
        { title: "컴포넌트 친화적", desc: "섹션을 쉽게 복사하고 재사용." },
        { title: "SEO 준비", desc: "깔끔한 마크업과 메타 태그." },
        { title: "폼 스타터", desc: "백엔드에 연결할 준비가 된 프론트엔드 폼." },
        { title: "밝고 어두운 팔레트", desc: "브랜드에 맞게 조정 가능." }
      ]
    },
    about: {
      eyebrow: "이 템플릿의 강점", h2: "깔끔한 출발점",
      p: "프레임워크 락인이나 숨겨진 의존성 없이. HTML, CSS, 그리고 확장 가능한 견고한 i18n 설정만 있습니다.",
      list: ["7개 언어 즉시 사용 가능", "브랜치 보호 + CI", "PR 기반 워크플로", "테마 변경이 쉬움"],
      quote: "아이디어에서 라이브 페이지까지, 신뢰할 수 있는 리뷰 게이트와 함께 한 오후에 완료했습니다.", quoteBy: "— 만족한 빌더"
    },
    contact: {
      eyebrow: "시작하기", h2: "문의하기", p: "무엇을 만들고 있는지 알려주세요. 영업일 기준 하루 이내에 답변드립니다.",
      meta: ["✉ hello@example.com", "☎ +1 000 000 0000", "🕘 월–금, 09:00–18:00 (GMT+8)"],
      form: {
        name: "이름", email: "이메일", company: "회사", interestLabel: "관심 분야",
        opts: ["일반 문의", "파트너십", "지원", "기타"], message: "무엇을 만들고 계신가요?",
        submit: "메시지 보내기", note: "감사합니다 — 이것은 데모 양식입니다. 백엔드와 연결하세요."
      }
    },
    footer: {
      tagline: "다국어 정적 사이트 템플릿. Fork해서 자유롭게 사용하세요.",
      cols: { Explore: ["기능", "플랜", "솔루션"], Company: ["소개", "문의", "채용"], Follow: ["Instagram", "YouTube", "뉴스레터"] },
      bottom: "© 2026 Brand(가칭). 판권 소유."
    }
  },

  ar: {
    nav: { destinations: "الميزات", journeys: "الخطط", services: "الحلول", about: "نبذة", cta: "ابدأ" },
    hero: {
      eyebrow: "قالب ثابت متعدد اللغات",
      title: "ابنِ شيئاً رائعاً.",
      sub: "صفحة هبوط سريعة وجاهزة للتعريب. لا تحتاج إلى بناء، وتتضمن ترجمة نظيفة، وجاهزة لمنتجك التالي.",
      btnLeisure: "استعرض الميزات", btnBusiness: "ابدأ",
      stats: { d1: "لغات", d2: "أقسام", d3: "مكونات", d4: "التقييم" }
    },
    twoways: {
      eyebrow: "مساران",
      h2: "للصناع والفرق",
      lead: "سواء كنت تُنشئ نموذجاً أولياً بمفردك أو تُطلق مع فريق، هذا القالب يوفر المسار المناسب.",
      leisureTitle: "للصناع", leisureDesc: "خصّص النصوص والألوان والأقسام لتتناسب مع علامتك.", leisureLink: "استكشف الميزات →",
      bizTitle: "للفرق", bizDesc: "أضف CI واختبارات وسير نشر للتوسع.", bizLink: "عرض الإعداد →"
    },
    destinations: {
      eyebrow: "الميزات", h2: "ما تحصل عليه",
      lead: "كل ما تحتاجه لصفحة هبوط حديثة وثابتة.",
      cards: [
        { title: "تصميم متجاوب", desc: "يبدو رائعاً على الهاتف والجهاز اللوحي وسطح المكتب." },
        { title: "سبع لغات", desc: "الإنجليزية والإسبانية والألمانية واليابانية والكورية والعربية والفرنسية." },
        { title: "بدون خطوة بناء", desc: "HTML/CSS/JS بسيط. افتح الملف ويعمل." },
        { title: "جاهز للـ CI", desc: "GitHub Actions تتحقق من i18n والبناء في كل PR." },
        { title: "ترميز متاح", desc: "HTML دلالي ويدعم لوحة المفاتيح." },
        { title: "استضافة سريعة", desc: "انشر على GitHub Pages أو Netlify أو أي مضيف ثابت." }
      ]
    },
    journeys: {
      eyebrow: "الخطط", h2: "تخطيطات أولية", lead: "أضف محتواك وانشره.",
      from: "من", per: "", custom: "التفاصيل →",
      items: [
        { meta: ["صفحة واحدة", "هبوط", "مبتدئ"], title: "صفحة هبوط", desc: "Hero والميزات والدعوة للعمل والتذييل. القالب الافتراضي.", price: "مجاناً", c: "#b5483c" },
        { meta: ["3 صفحات", "تسويق", "مبتدئ"], title: "موقع تسويقي", desc: "أضف نبذة وتسعير وتواصل مع نموك.", price: "مجاناً", c: "#2c6e63" },
        { meta: ["مخصص", "منتج", "توسع"], title: "تطبيق منتج", desc: "انتقل إلى إطار عمل عندما تحتاج إلى توجيه ومحتوى ديناميكي.", price: "مخصص", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "الحلول", h2: "بُني للمرونة",
      items: [
        { title: "استضافة ثابتة", desc: "يعمل على أي CDN." },
        { title: "رموز تصميم", desc: "متغيرات CSS لتغيير السمة بسرعة." },
        { title: "صديق للمكونات", desc: "من السهل نسخ الأقسام وإعادة استخدامها." },
        { title: "جاهز للـ SEO", desc: "ترميز نظيف ووسوم ميتا." },
        { title: "نموذج نموذجي", desc: "نموذج واجهة أمامية جاهز للخلفية." },
        { title: "لوحة محايدة", desc: "تتكيف مع علامتك الفاتحة أو الداكنة." }
      ]
    },
    about: {
      eyebrow: "لماذا هذا القالب", h2: "نقطة انطلاق نظيفة",
      p: "لا قفل على إطار عمل ولا اعتماديات خفية. فقط HTML وCSS وإعداد i18n قوي يمكنك توسيعه.",
      list: ["7 لغات جاهزة", "حماية الفرع + CI", "سير عمل قائم على PR", "سهل تخصيص السمة"],
      quote: "انتقلنا من الفكرة إلى الصفحة المنشورة في ظهيرة واحدة، مع بوابات مراجعة نثق بها.", quoteBy: "— منشئ سعيد"
    },
    contact: {
      eyebrow: "ابدأ هنا", h2: "تواصل معنا", p: "أخبرنا بما تبنيه. سنرد خلال يوم عمل واحد.",
      meta: ["✉ hello@example.com", "☎ +1 000 000 0000", "🕘 الأحد–الخميس، 09:00–18:00 (GMT+8)"],
      form: {
        name: "الاسم", email: "البريد", company: "الشركة", interestLabel: "الاهتمام",
        opts: ["استفسار عام", "شراكة", "دعم", "أخرى"], message: "ما الذي تبنيه؟",
        submit: "إرسال الرسالة", note: "شكراً — هذا نموذج تجريبي. اربطه بالخلفية لاحقاً."
      }
    },
    footer: {
      tagline: "قالب موقع ثابت متعدد اللغات. انسخه واجعله ملكك.",
      cols: { Explore: ["الميزات", "الخطط", "الحلول"], Company: ["نبذة", "تواصل", "وظائف"], Follow: ["Instagram", "YouTube", "النشرة"]},
      bottom: "© 2026 Brand (اسم مؤقت). جميع الحقوق محفوظة."
    }
  },

  fr: {
    nav: { destinations: "Fonctionnalités", journeys: "Plans", services: "Solutions", about: "À propos", cta: "Commencer" },
    hero: {
      eyebrow: "Modèle statique multilingue",
      title: "Construisez quelque chose de grand.",
      sub: "Un starter de landing page rapide et prêt pour l'internationalisation. Pas d'étape de build, localisation propre, prêt pour votre prochain produit.",
      btnLeisure: "Voir les fonctionnalités", btnBusiness: "Commencer",
      stats: { d1: "langues", d2: "sections", d3: "composants", d4: "note" }
    },
    twoways: {
      eyebrow: "Deux chemins",
      h2: "Pour les créateurs et les équipes",
      lead: "Que vous prototypiez seul ou livriez en équipe, ce modèle offre un chemin.",
      leisureTitle: "Pour les créateurs", leisureDesc: "Personnalisez textes, couleurs et sections pour votre marque.", leisureLink: "Explorer les fonctionnalités →",
      bizTitle: "Pour les équipes", bizDesc: "Ajoutez CI, tests et déploiement pour scaler.", bizLink: "Voir la configuration →"
    },
    destinations: {
      eyebrow: "Fonctionnalités", h2: "Ce que vous obtenez",
      lead: "Tout ce qu'il faut pour une landing page statique moderne.",
      cards: [
        { title: "Design responsive", desc: "Beau sur mobile, tablette et desktop." },
        { title: "Sept langues", desc: "Anglais, espagnol, allemand, japonais, coréen, arabe, français." },
        { title: "Pas de build", desc: "HTML/CSS/JS simple. Ouvrez le fichier et ça fonctionne." },
        { title: "CI prête", desc: "GitHub Actions valide i18n et syntaxe à chaque PR." },
        { title: "Markup accessible", desc: "HTML sémantique et navigation au clavier." },
        { title: "Hébergement rapide", desc: "Déployez sur GitHub Pages, Netlify ou tout hôte statique." }
      ]
    },
    journeys: {
      eyebrow: "Plans", h2: "Mises en page de démarrage", lead: "Ajoutez votre contenu et publiez.",
      from: "à partir de", per: "", custom: "Détails →",
      items: [
        { meta: ["1 page", "Landing", "Starter"], title: "Page d'accueil", desc: "Hero, fonctionnalités, CTA et pied de page. Le modèle par défaut.", price: "Gratuit", c: "#b5483c" },
        { meta: ["3 pages", "Marketing", "Starter"], title: "Site marketing", desc: "Ajoutez About, Pricing et Contact au fur et à mesure.", price: "Gratuit", c: "#2c6e63" },
        { meta: ["Sur mesure", "Produit", "Échelle"], title: "Application produit", desc: "Passez à un framework quand vous avez besoin de routing et de contenu dynamique.", price: "Sur mesure", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "Solutions", h2: "Conçu pour la flexibilité",
      items: [
        { title: "Hébergement statique", desc: "Fonctionne sur n'importe quel CDN." },
        { title: "Design tokens", desc: "Variables CSS pour theming rapide." },
        { title: "Composable", desc: "Les sections sont faciles à copier et remixer." },
        { title: "SEO-ready", desc: "Markup propre et balises meta." },
        { title: "Formulaire starter", desc: "Formulaire front-end prêt pour votre backend." },
        { title: "Palette neutre", desc: "S'adapte à votre marque claire ou sombre." }
      ]
    },
    about: {
      eyebrow: "Pourquoi ce modèle", h2: "Un point de départ propre",
      p: "Pas de verrouillage framework, pas de dépendances cachées. Juste HTML, CSS et une solide configuration i18n extensible.",
      list: ["7 langues incluses", "Protection de branche + CI", "Workflow basé sur les PR", "Facile à thématiser"],
      quote: "Nous sommes passés de l'idée à la page en ligne en un après-midi, avec des portes de révision auxquelles nous faisons confiance.", quoteBy: "— Un builder heureux"
    },
    contact: {
      eyebrow: "Commencez ici", h2: "Contactez-nous", p: "Dites-nous ce que vous construisez. Nous répondrons sous un jour ouvré.",
      meta: ["✉ hello@example.com", "☎ +1 000 000 0000", "🕘 Lun–Ven, 09:00–18:00 (GMT+8)"],
      form: {
        name: "Nom", email: "E-mail", company: "Entreprise", interestLabel: "Intérêt",
        opts: ["Demande générale", "Partenariat", "Support", "Autre"], message: "Que construisez-vous ?",
        submit: "Envoyer le message", note: "Merci — il s'agit d'un formulaire de démonstration. Connectez-le à votre backend."
      }
    },
    footer: {
      tagline: "Un modèle de site statique multilingue. Forkez-le et faites-en le vôtre.",
      cols: { Explore: ["Fonctionnalités", "Plans", "Solutions"], Company: ["À propos", "Contact", "Carrières"], Follow: ["Instagram", "YouTube", "Newsletter"] },
      bottom: "© 2026 Brand (placeholder). Tous droits réservés."
    }
  }
};

const LANGS = ["en", "es", "de", "ja", "ko", "ar", "fr"];
const LANG_NAMES = { en: "English", es: "Español", de: "Deutsch", ja: "日本語", ko: "한국어", ar: "العربية", fr: "Français" };
const RTL_LANGS = ["ar"];
