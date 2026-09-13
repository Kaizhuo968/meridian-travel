// ===== MERIDIAN i18n data (en / es / de / ja / ko) =====
// Structure mirrors the DOM. Strings use " for safety. CJK/Cyrillic fine in UTF-8.
const I18N = {
  en: {
    nav: { destinations: "Destinations", journeys: "Journeys", services: "Services", about: "About", cta: "Plan a trip" },
    hero: {
      eyebrow: "China travel, curated for the world",
      title: "Discover China, your way.",
      sub: "A local agency helping international travelers and businesses explore China with private guides, bespoke routes, and support in your language.",
      btnLeisure: "Plan a leisure trip",
      btnBusiness: "Business & events",
      stats: { d1: "destinations", d2: "on the ground", d3: "travelers", d4: "avg. rating" }
    },
    twoways: {
      eyebrow: "Two ways to travel",
      h2: "Built for travelers and for business",
      lead: "Whether you're exploring for pleasure or bringing a team, we have a dedicated path for you.",
      leisureTitle: "Leisure Travel",
      leisureDesc: "Private tours, small groups, and family journeys through China's icons and hidden corners.",
      leisureLink: "Explore leisure →",
      bizTitle: "Business & MICE",
      bizDesc: "Incentive trips, conferences, trade-show logistics, and corporate retreats across China.",
      bizLink: "Explore business →"
    },
    destinations: {
      eyebrow: "Where we go",
      h2: "Regions of China we curate",
      lead: "From imperial capitals to highland trails — routes shaped around how you like to travel.",
      cards: [
        { title: "Beijing & the North", desc: "Great Wall, Forbidden City, and temple towns." },
        { title: "Xi'an & the Silk Road", desc: "Terracotta Army, desert routes, and Dunhuang art." },
        { title: "Guilin & the Yangtze", desc: "Karst rivers, river cruises, and Chengdu's pandas." },
        { title: "Zhangjiajie & Hunan", desc: "Avatar mountains and vibrant minority cultures." },
        { title: "Shanghai & the East", desc: "Skyline, classical gardens, and water towns." },
        { title: "Yunnan & Tibet", desc: "Highlands, old towns, and sacred peaks." }
      ]
    },
    journeys: {
      eyebrow: "Signature journeys",
      h2: "Trips worth the flight",
      lead: "Sample China itineraries — every one fully customizable.",
      from: "from", per: "/ person", custom: "Customize →",
      items: [
        { meta: ["10 days", "Beijing · Xi'an · Shanghai", "Culture"], title: "Imperial Heartland", desc: "Great walls, terracotta armies, and modern skylines with private guides throughout.", price: "$2,600", c: "#b5483c" },
        { meta: ["12 days", "Guilin · Zhangjiajie · Chengdu", "Scenic"], title: "Rivers & Peaks", desc: "Karst rivers, floating mountains, and panda reserves at a relaxed pace.", price: "$2,900", c: "#2c6e63" },
        { meta: ["14 days", "Yunnan · Tibet · Silk Road", "Expedition"], title: "Highlands & Heritage", desc: "Old towns, sacred peaks, and the western Silk Road for the adventurous.", price: "$3,400", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "What's included",
      h2: "Support on every step",
      items: [
        { title: "Private local guides", desc: "Bilingual experts in 30+ Chinese cities." },
        { title: "Bespoke planning", desc: "Itineraries built around your dates and interests." },
        { title: "24/7 on-trip support", desc: "A real person on call in your time zone." },
        { title: "Visa & logistics", desc: "Visa guidance, transfers, and SIM setup before you fly." },
        { title: "Handpicked stays", desc: "Hotels and guesthouses vetted for comfort and character." },
        { title: "Responsible travel", desc: "Community stays and low-impact routes that give back." }
      ]
    },
    about: {
      eyebrow: "Why us",
      h2: "A local team that travels like you do",
      p: "We're a China-based agency with planners who speak your language and partners in every region we sell. No scripts — just people who've walked the routes.",
      list: [
        "English, Spanish, German, Japanese & Korean speaking planners",
        "Vetted local guides in 30+ cities",
        "Transparent pricing, no hidden markups",
        "Flexible changes up to 30 days out"
      ],
      quote: "They turned a vague idea into the best two weeks of our lives. Everything just worked.",
      quoteBy: "— The Reyes family, Imperial Heartland"
    },
    contact: {
      eyebrow: "Start here",
      h2: "Plan your China trip",
      p: "Tell us about your trip. We'll reply within one business day with ideas — no obligation.",
      meta: ["✉ hello@meridian.travel", "☎ +86 400 000 0000", "🕘 Mon–Sat, 09:00–18:00 (GMT+8)"],
      form: {
        name: "Name", email: "Email", nationality: "Nationality", triptypeLabel: "Trip type",
        opts: ["Leisure private", "Small-group tour", "Business / MICE", "Not sure yet"],
        dates: "Approx. dates", travelers: "Travelers", message: "What are you dreaming of?",
        submit: "Send inquiry", note: "Thanks — this is a demo form. Wire it to your CRM/email next."
      }
    },
    footer: {
      tagline: "China travel curators. For travelers and business, since 2013.",
      cols: {
        Explore: ["Destinations", "Journeys", "Services"],
        Company: ["About", "Contact", "Careers"],
        Follow: ["Instagram", "YouTube", "Newsletter"]
      },
      bottom: "© 2026 MERIDIAN Travel (placeholder). All rights reserved."
    }
  },

  es: {
    nav: { destinations: "Destinos", journeys: "Itinerarios", services: "Servicios", about: "Nosotros", cta: "Planificar viaje" },
    hero: {
      eyebrow: "Viajes por China, pensados para el mundo",
      title: "Descubre China a tu manera.",
      sub: "Una agencia local que ayuda a viajeros y empresas internacionales a explorar China con guías privados, rutas a medida y atención en tu idioma.",
      btnLeisure: "Planifica un viaje de placer",
      btnBusiness: "Negocios y eventos",
      stats: { d1: "destinos", d2: "experiencia local", d3: "viajeros", d4: "valoración media" }
    },
    twoways: {
      eyebrow: "Dos formas de viajar",
      h2: "Hecho para viajeros y para empresas",
      lead: "Ya explores por placer o traigas un equipo, tenemos un camino dedicado para ti.",
      leisureTitle: "Turismo de placer",
      leisureDesc: "Tours privados, grupos pequeños y viajes en familia por los íconos y rincones ocultos de China.",
      leisureLink: "Explorar placer →",
      bizTitle: "Negocios y MICE",
      bizDesc: "Viajes de incentivo, conferencias, logística ferial y retiros corporativos por China.",
      bizLink: "Explorar negocios →"
    },
    destinations: {
      eyebrow: "Adónde vamos",
      h2: "Regiones de China que diseñamos",
      lead: "De capitales imperiales a rutas de altura — itinerarios según tu forma de viajar.",
      cards: [
        { title: "Pekín y el norte", desc: "Gran Muralla, Ciudad Prohibida y pueblos templo." },
        { title: "Xi'an y la Ruta de la Seda", desc: "Ejército de terracota, rutas desérticas y arte de Dunhuang." },
        { title: "Guilin y el Yangtsé", desc: "Ríos karst, cruceros fluviales y los pandas de Chengdu." },
        { title: "Zhangjiajie y Hunan", desc: "Montañas avatar y vibrantes culturas minoritarias." },
        { title: "Shanghái y el este", desc: "Rascacielos, jardines clásicos y pueblos de agua." },
        { title: "Yunnan y Tíbet", desc: "Tierras altas, pueblos antiguos y cumbres sagradas." }
      ]
    },
    journeys: {
      eyebrow: "Itinerarios destacados",
      h2: "Viajes que valen el vuelo",
      lead: "Itinerarios de muestra por China — todos personalizables.",
      from: "desde", per: "/ persona", custom: "Personalizar →",
      items: [
        { meta: ["10 días", "Beijing · Xi'an · Shanghai", "Cultura"], title: "Corazón imperial", desc: "Grandes murallas, ejércitos de terracota y rascacielos modernos con guías privados.", price: "$2,600", c: "#b5483c" },
        { meta: ["12 días", "Guilin · Zhangjiajie · Chengdu", "Paisaje"], title: "Ríos y cumbres", desc: "Ríos karst, montañas flotantes y reservas de pandas a ritmo relajado.", price: "$2,900", c: "#2c6e63" },
        { meta: ["14 días", "Yunnan · Tibet · Silk Road", "Expedición"], title: "Tierras altas y herencia", desc: "Pueblos antiguos, cumbres sagradas y la Ruta de la Seda occidental para aventureros.", price: "$3,400", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "Qué incluye",
      h2: "Apoyo en cada paso",
      items: [
        { title: "Guías locales privados", desc: "Expertos bilingües en más de 30 ciudades chinas." },
        { title: "Planificación a medida", desc: "Itinerarios según tus fechas e intereses." },
        { title: "Apoyo 24/7 en viaje", desc: "Una persona real disponible en tu zona horaria." },
        { title: "Visa y logística", desc: "Ayuda con visa, traslados y SIM antes de volar." },
        { title: "Alojamientos seleccionados", desc: "Hoteles y casas verificados por confort y carácter." },
        { title: "Viaje responsable", desc: "Estancias comunitarias y rutas de bajo impacto." }
      ]
    },
    about: {
      eyebrow: "Por qué nosotros",
      h2: "Un equipo local que viaja como tú",
      p: "Somos una agencia con base en China, con planificadores que hablan tu idioma y socios en cada región. Sin guiones — solo personas que conocen las rutas.",
      list: [
        "Planificadores que hablan inglés, español, alemán, japonés y coreano",
        "Guías locales verificados en más de 30 ciudades",
        "Precios transparentes, sin recargos ocultos",
        "Cambios flexibles hasta 30 días antes"
      ],
      quote: "Convirtieron una idea vaga en las mejores dos semanas de nuestras vidas. Todo salió bien.",
      quoteBy: "— La familia Reyes, Corazón imperial"
    },
    contact: {
      eyebrow: "Empieza aquí",
      h2: "Planifica tu viaje a China",
      p: "Cuéntanos sobre tu viaje. Responderemos en un día hábil con ideas — sin compromiso.",
      meta: ["✉ hello@meridian.travel", "☎ +86 400 000 0000", "🕘 Lun–Sáb, 09:00–18:00 (GMT+8)"],
      form: {
        name: "Nombre", email: "Correo", nationality: "Nacionalidad", triptypeLabel: "Tipo de viaje",
        opts: ["Privado de placer", "Grupo pequeño", "Negocios / MICE", "Aún no sé"],
        dates: "Fechas aprox.", travelers: "Viajeros", message: "¿Qué sueñas hacer?",
        submit: "Enviar solicitud", note: "Gracias — este es un formulario de demostración. Conéctalo a tu CRM/correo después."
      }
    },
    footer: {
      tagline: "Curadores de viajes por China. Para viajeros y empresas, desde 2013.",
      cols: {
        Explore: ["Destinos", "Itinerarios", "Servicios"],
        Company: ["Nosotros", "Contacto", "Empleo"],
        Follow: ["Instagram", "YouTube", "Boletín"]
      },
      bottom: "© 2026 MERIDIAN Travel (marca provisional). Todos los derechos reservados."
    }
  },

  de: {
    nav: { destinations: "Reiseziele", journeys: "Reisen", services: "Leistungen", about: "Über uns", cta: "Reise planen" },
    hero: {
      eyebrow: "China-Reisen, kuratiert für die Welt",
      title: "Entdecke China auf deine Art.",
      sub: "Eine lokale Agentur, die internationale Reisende und Unternehmen beim Erkunden Chinas mit privaten Guides, maßgeschneiderten Routen und Betreuung in Ihrer Sprache hilft.",
      btnLeisure: "Freizeitreise planen",
      btnBusiness: "Business & Events",
      stats: { d1: "Reiseziele", d2: "vor Ort", d3: "Reisende", d4: "Ø Bewertung" }
    },
    twoways: {
      eyebrow: "Zwei Arten zu reisen",
      h2: "Für Reisende und für Unternehmen",
      lead: "Ob zur Freizeit oder mit einem Team — wir haben den passenden Weg für Sie.",
      leisureTitle: "Freizeit-Reisen",
      leisureDesc: "Private Touren, kleine Gruppen und Familienreisen zu Chinas Highlights und Geheimtipps.",
      leisureLink: "Freizeit entdecken →",
      bizTitle: "Business & MICE",
      bizDesc: "Incentive-Reisen, Konferenzen, Messe-Logistik und Firmenretreats in ganz China.",
      bizLink: "Business entdecken →"
    },
    destinations: {
      eyebrow: "Wohin wir gehen",
      h2: "Regionen Chinas, die wir kuratieren",
      lead: "Von Kaiserstädten bis zu Hochgebirgspfaden — Routen nach Ihrem Reisestil.",
      cards: [
        { title: "Peking & der Norden", desc: "Große Mauer, Verbotene Stadt und Tempelstädte." },
        { title: "Xi'an & die Seidenstraße", desc: "Terrakotta-Armee, Wüstenrouten und Dunhuang-Kunst." },
        { title: "Guilin & der Jangtse", desc: "Karst-Flüsse, Flusskreuzfahrten und Pandas in Chengdu." },
        { title: "Zhangjiajie & Hunan", desc: "Avatar-Berge und lebendige Minderheitenkulturen." },
        { title: "Shanghai & der Osten", desc: "Skyline, klassische Gärten und Wasserstädte." },
        { title: "Yunnan & Tibet", desc: "Hochland, alte Städte und heilige Gipfel." }
      ]
    },
    journeys: {
      eyebrow: "Highlights",
      h2: "Reisen, die den Flug wert sind",
      lead: "Beispiel-Routen durch China — alle frei anpassbar.",
      from: "ab", per: "/ Person", custom: "Anpassen →",
      items: [
        { meta: ["10 Tage", "Beijing · Xi'an · Shanghai", "Kultur"], title: "Kaiserliches Herzland", desc: "Große Mauern, Terrakotta-Armeen und moderne Skyline mit privaten Guides.", price: "$2,600", c: "#b5483c" },
        { meta: ["12 Tage", "Guilin · Zhangjiajie · Chengdu", "Landschaft"], title: "Flüsse & Gipfel", desc: "Karst-Flüsse, schwebende Berge und Panda-Reservate in entspanntem Tempo.", price: "$2,900", c: "#2c6e63" },
        { meta: ["14 Tage", "Yunnan · Tibet · Silk Road", "Expedition"], title: "Hochland & Erbe", desc: "Alte Städte, heilige Gipfel und die westliche Seidenstraße für Abenteurer.", price: "$3,400", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "Was inklusive ist",
      h2: "Betreuung in jedem Schritt",
      items: [
        { title: "Private lokale Guides", desc: "Zweisprachige Experten in über 30 chinesischen Städten." },
        { title: "Maßgeschneiderte Planung", desc: "Routen nach Ihren Terminen und Interessen." },
        { title: "24/7-Betreuung vor Ort", desc: "Eine echte Person in Ihrer Zeitzone erreichbar." },
        { title: "Visum & Logistik", desc: "Visumshilfe, Transfers und SIM vor dem Flug." },
        { title: "Ausgewählte Unterkünfte", desc: "Hotels und Gästehäuser mit Komfort und Charakter." },
        { title: "Verantwortungsvolle Reisen", desc: "Community-Aufenthalte und ressourcenschonende Routen." }
      ]
    },
    about: {
      eyebrow: "Warum wir",
      h2: "Ein lokales Team, das wie Sie reist",
      p: "Wir sind eine in China ansässige Agentur mit Planern, die Ihre Sprache sprechen, und Partnern in jeder Region. Keine Skripte — nur Menschen, die die Routen kennen.",
      list: [
        "Planer mit Englisch, Spanisch, Deutsch, Japanisch & Koreanisch",
        "Geprüfte lokale Guides in über 30 Städten",
        "Transparente Preise, keine versteckten Aufschläge",
        "Flexible Änderungen bis 30 Tage vorher"
      ],
      quote: "Aus einer vagen Idee machten sie die besten zwei Wochen unseres Lebens. Alles hat geklappt.",
      quoteBy: "— Familie Reyes, Kaiserliches Herzland"
    },
    contact: {
      eyebrow: "Starten Sie hier",
      h2: "Planen Sie Ihre China-Reise",
      p: "Erzählen Sie uns von Ihrer Reise. Wir antworten innerhalb eines Werktags mit Ideen — unverbindlich.",
      meta: ["✉ hello@meridian.travel", "☎ +86 400 000 0000", "🕘 Mo–Sa, 09:00–18:00 (GMT+8)"],
      form: {
        name: "Name", email: "E-Mail", nationality: "Staatsangehörigkeit", triptypeLabel: "Reiseart",
        opts: ["Private Freizeit", "Kleingruppe", "Business / MICE", "Noch unklar"],
        dates: "Ungefähre Termine", travelers: "Reisende", message: "Wovon träumen Sie?",
        submit: "Anfrage senden", note: "Danke — das ist ein Demo-Formular. Verbinde es als Nächstes mit CRM/E-Mail."
      }
    },
    footer: {
      tagline: "China-Reisekuratore. Für Reisende und Unternehmen, seit 2013.",
      cols: {
        Explore: ["Reiseziele", "Reisen", "Leistungen"],
        Company: ["Über uns", "Kontakt", "Karriere"],
        Follow: ["Instagram", "YouTube", "Newsletter"]
      },
      bottom: "© 2026 MERIDIAN Travel (Platzhalter). Alle Rechte vorbehalten."
    }
  },

  ja: {
    nav: { destinations: "目的地", journeys: "旅のプラン", services: "サービス", about: "私たち", cta: "旅を計画する" },
    hero: {
      eyebrow: "世界に届ける、中国旅行",
      title: "あなたらしい中国を、発見しよう。",
      sub: "私たちは現地の旅行会社です。海外からの旅行者や企業の皆さまに、専属ガイド・オーダーメイドのルート・ご自身の言葉でのサポートを提供します。",
      btnLeisure: "観光旅行を計画する",
      btnBusiness: "ビジネス・MICE",
      stats: { d1: "目的地", d2: "現地実績", d3: "お客様", d4: "平均評価" }
    },
    twoways: {
      eyebrow: "2つの旅のスタイル",
      h2: "観光でも、ビジネスでも",
      lead: "楽しみにいらっしゃる方も、チームをお連れの方も、専用のプランをご用意しています。",
      leisureTitle: "観光旅行",
      leisureDesc: "中国の有名スポットから穴場まで、専属ツアー・少人数グループ・ご家族での旅。",
      leisureLink: "観光を探索 →",
      bizTitle: "ビジネス・MICE",
      bizDesc: "インセンティブ旅行、会議、展示会手配、企業研修・リトリートを中国全土で。",
      bizLink: "ビジネスを探索 →"
    },
    destinations: {
      eyebrow: "訪れる場所",
      h2: "私たちがご案内する中国の地域",
      lead: "帝国の都から高地の道まで――あなたの旅のスタイルに合わせたルート。",
      cards: [
        { title: "北京と北部", desc: "万里の長城、故宮、寺院の町。" },
        { title: "西安とシルクロード", desc: "兵馬俑、砂漠の道、敦煌の芸術。" },
        { title: "桂林と長江", desc: "カルストの河、川下り、成都のパンダ。" },
        { title: "張家界と湖南", desc: "アバターの山々と豊かな少数民族の文化。" },
        { title: "上海と東部", desc: "摩天楼、古典庭園、水郷の町。" },
        { title: "雲南とチベット", desc: "高地、古い町、聖なる峰。" }
      ]
    },
    journeys: {
      eyebrow: "おすすめの旅",
      h2: "飛行機代の価値がある旅",
      lead: "中国のモデルルート――すべてカスタマイズ可能。",
      from: "最少", per: "/ 名", custom: "カスタマイズ →",
      items: [
        { meta: ["10日間", "Beijing · Xi'an · Shanghai", "文化"], title: "帝国の心臓", desc: "長城、兵馬俑、近代的な摩天楼を専属ガイドとともに。", price: "$2,600", c: "#b5483c" },
        { meta: ["12日間", "Guilin · Zhangjiajie · Chengdu", "景観"], title: "川と峰", desc: "カルストの河、浮かぶ山々、パンダ保護区をゆったりと。", price: "$2,900", c: "#2c6e63" },
        { meta: ["14日間", "Yunnan · Tibet · Silk Road", "探検"], title: "高地と遺産", desc: "古い町、聖なる峰、西シルクロードを冒険する方へ。", price: "$3,400", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "含まれるもの",
      h2: "すべてのステップでサポート",
      items: [
        { title: "専属現地ガイド", desc: "中国30都市以上でバイリンガルの専門家。" },
        { title: "オーダーメイド計画", desc: "日程と興味に合わせたルート。" },
        { title: "24時間年中無休の現地サポート", desc: "あなたの時間帯で対応する担当者。" },
        { title: "ビザと手配", desc: "ビザ案内、送迎、SIMの準備を出発前に。" },
        { title: "厳選された滞在先", desc: "快適さと個性を確かめたホテルやゲストハウス。" },
        { title: "責任ある旅", desc: "地域に還元する滞在と低負荷のルート。" }
      ]
    },
    about: {
      eyebrow: "私たちの強み",
      h2: "あなたと同じ目線で旅する現地チーム",
      p: "私たちは中国に拠点を置く旅行会社です。ご自身の言葉で話せるプランナーと、各地のパートナーがいます。台本はありません――ルートを知る人間が対応します。",
      list: [
        "英語・スペイン語・ドイツ語・日本語・韓国語対応のプランナー",
        "30都市以上の厳選された現地ガイド",
        "透明な料金、隠れた上乗せなし",
        "出発30日前まで柔軟に変更可能"
      ],
      quote: "漠然としたアイデアが、私たちの人生で最高の2週間になりました。すべてがうまくいきました。",
      quoteBy: "— レイエスご家族（帝国の心臓）"
    },
    contact: {
      eyebrow: "はじめに",
      h2: "中国旅行を計画する",
      p: "旅の希望をお聞かせください。1営業日以内にアイデアをお返しします――ご負担はありません。",
      meta: ["✉ hello@meridian.travel", "☎ +86 400 000 0000", "🕘 月–土, 09:00–18:00 (GMT+8)"],
      form: {
        name: "お名前", email: "メール", nationality: "国籍", triptypeLabel: "旅の種類",
        opts: ["個人観光", "少人数ツアー", "ビジネス / MICE", "未定"],
        dates: "ご希望の時期", travelers: "人数", message: "どんな旅をご希望ですか？",
        submit: "送信する", note: "ありがとうございます――これはデモ用フォームです。次のステップでCRM/メールと連携します。"
      }
    },
    footer: {
      tagline: "中国旅行のキュレーター。観光もビジネスも、2013年から。",
      cols: {
        Explore: ["目的地", "旅のプラン", "サービス"],
        Company: ["私たち", "お問い合わせ", "採用"],
        Follow: ["Instagram", "YouTube", "ニュースレター"]
      },
      bottom: "© 2026 MERIDIAN Travel（仮名称）。無断複製を禁じます。"
    }
  },

  ko: {
    nav: { destinations: "목적지", journeys: "여행", services: "서비스", about: "소개", cta: "여행 계획하기" },
    hero: {
      eyebrow: "세계를 위해 큐레이션한 중국 여행",
      title: "당신만의 방식으로 중국을 발견하세요.",
      sub: "저희는 해외 여행객과 기업이 전용 가이드, 맞춤 코스, 그리고 여러분의 언어로 진행되는 지원과 함께 중국을 탐험하도록 돕는 현지 여행사입니다.",
      btnLeisure: "관광 여행 계획하기",
      btnBusiness: "비즈니스 및 MICE",
      stats: { d1: "목적지", d2: "현지 경력", d3: "여행객", d4: "평균 평점" }
    },
    twoways: {
      eyebrow: "두 가지 여행 방식",
      h2: "여행객과 기업을 위해",
      lead: "즐거움을 위해 오시든 팀을 이끄시든, 전용 코스를 준비했습니다.",
      leisureTitle: "관광 여행",
      leisureDesc: "중국의 명소와 숨은 곳을 전용 투어, 소규모 그룹, 가족 여행으로.",
      leisureLink: "관광 둘러보기 →",
      bizTitle: "비즈니스 및 MICE",
      bizDesc: "인센티브 여행, 컨퍼런스, 전시 물류, 기업 리트릿을 중국 전역에서.",
      bizLink: "비즈니스 둘러보기 →"
    },
    destinations: {
      eyebrow: "가는 곳",
      h2: "큐레이션하는 중국의 지역",
      lead: "제국의 수도에서 고원의 길까지――여러분의 여행 스타일에 맞춘 코스.",
      cards: [
        { title: "베이징과 북부", desc: "만리장성, 자금성, 사찰 마을." },
        { title: "시안과 실크로드", desc: "병마용, 사막 루트, 둔황의 예술." },
        { title: "구이린과 양쯔", desc: "카르스트 강, 크루즈, 청두의 판다." },
        { title: "장가계와 후난", desc: "아바타 산맥과 생동감 있는 소수민족 문화." },
        { title: "상하이와 동부", desc: "스카이라인, 고전 정원, 수향 마을." },
        { title: "윈난과 티베트", desc: "고원, 오래된 마을, 성스러운 봉우리." }
      ]
    },
    journeys: {
      eyebrow: "추천 여행",
      h2: "비행 값어치가 있는 여행",
      lead: "중국 모델 코스――모두 맞춤 설정 가능.",
      from: "~부터", per: "/ 인", custom: "맞춤 설정 →",
      items: [
        { meta: ["10일", "Beijing · Xi'an · Shanghai", "문화"], title: "제국의 심장", desc: "장성, 병마용, 현대적 스카이라인을 전용 가이드와 함께.", price: "$2,600", c: "#b5483c" },
        { meta: ["12일", "Guilin · Zhangjiajie · Chengdu", "경관"], title: "강과 봉우리", desc: "카르스트 강, 떠 있는 산, 판다 보호구역을 여유롭게.", price: "$2,900", c: "#2c6e63" },
        { meta: ["14일", "Yunnan · Tibet · Silk Road", "탐험"], title: "고원과 유산", desc: "오래된 마을, 성스러운 봉우리, 서부 실크로드를 향해.", price: "$3,400", c: "#3a6ea5" }
      ]
    },
    services: {
      eyebrow: "포함 사항",
      h2: "모든 단계에서 지원",
      items: [
        { title: "전용 현지 가이드", desc: "중국 30개 도시 이상의 이중 언어 전문가." },
        { title: "맞춤 계획", desc: "여러분의 일정과 관심에 맞춘 코스." },
        { title: "24시간 여행 지원", desc: "여러분의 시간대에서 응답하는 실제 담당자." },
        { title: "비자 및 물류", desc: "비자 안내, 이동, SIM 준비를 출국 전에." },
        { title: "엄선된 숙소", desc: "편안함과 개성을 갖춘 호텔과 게스트하우스." },
        { title: "책임감 있는 여행", desc: "지역에 환원하는 체류와 저부하 코스." }
      ]
    },
    about: {
      eyebrow: "우리의 강점",
      h2: "여러분처럼 여행하는 현지 팀",
      p: "저희는 중국에 기반을 둔 여행사로, 여러분의 언어로 소통하는 플래너와 각 지역 파트너가 있습니다. 대본은 없습니다――코스를 아는 사람이 맡습니다.",
      list: [
        "영어·스페인어·독일어·일본어·한국어 플래너",
        "30개 도시 이상의 검증된 현지 가이드",
        "투명한 요금, 숨은 추가 비용 없음",
        "출발 30일 전까지 유연한 변경"
      ],
      quote: "모호한 아이디어가 우리 인생 최고의 2주가 되었습니다. 모든 것이 완벽히 됐어요.",
      quoteBy: "— 레예스 가족, 제국의 심장"
    },
    contact: {
      eyebrow: "시작하기",
      h2: "중국 여행을 계획하세요",
      p: "여행에 대해 알려주세요. 영업일 기준 하루 이내에 아이디어로 답변드립니다――의무는 없습니다.",
      meta: ["✉ hello@meridian.travel", "☎ +86 400 000 0000", "🕘 월–토, 09:00–18:00 (GMT+8)"],
      form: {
        name: "이름", email: "이메일", nationality: "국적", triptypeLabel: "여행 유형",
        opts: ["개인 관광", "소규모 투어", "비즈니스 / MICE", "아직 미정"],
        dates: "대략적인 날짜", travelers: "여행객 수", message: "어떤 여행을 꿈꾸시나요?",
        submit: "문의 보내기", note: "감사합니다――이것은 데모 양식입니다. 다음 단계에서 CRM/이메일과 연결하세요."
      }
    },
    footer: {
      tagline: "중국 여행 큐레이터. 관광도 비즈니스도, 2013년부터.",
      cols: {
        Explore: ["목적지", "여행", "서비스"],
        Company: ["소개", "문의", "채용"],
        Follow: ["Instagram", "YouTube", "뉴스레터"]
      },
      bottom: "© 2026 MERIDIAN Travel(가칭). 판권 소유."
    }
  }
};

const LANGS = ["en", "es", "de", "ja", "ko"];
const LANG_NAMES = { en: "English", es: "Español", de: "Deutsch", ja: "日本語", ko: "한국어" };
