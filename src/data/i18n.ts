// Convertra AudioCore — trilingual content (EN default, RU, ES).
// Every user-visible string lives here, keyed by a flat id. The page renders
// the EN string server-side (crawlable) and a client script swaps textContent
// from the active locale — mirroring the RU / EN / ES toggle in the app.

export type Locale = 'en' | 'ru' | 'es';
export const LOCALES: Locale[] = ['en', 'ru', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  es: 'ES',
};

type Dict = Record<string, string>;

const en: Dict = {
  // ---- meta ----
  'meta.title': 'Convertra — macOS DJ app & AudioCore key/tempo engine',
  'meta.description':
    'Convertra is a DJ audio platform: a native macOS app for library management, analysis and conversion, and Convertra AudioCore — the on-device key, tempo and Camelot engine inside it, benchmarked against Mixed In Key on 1000+ tracks and available to license, white-label or integrate.',

  // ---- nav ----
  'nav.app': 'App',
  'nav.audiocore': 'AudioCore',
  'nav.technology': 'Technology',
  'nav.performance': 'Performance',
  'nav.product': 'Product',
  'nav.compare': 'Compare',
  'nav.business': 'Opportunities',
  'nav.founder': 'Founder',
  'nav.faq': 'FAQ',
  'nav.contact': 'Contact',
  'nav.cta': 'Get started',

  // ---- hero ----
  'hero.eyebrow': 'Convertra — DJ audio platform',
  'hero.title': 'A native macOS app for DJs — and the on-device engine that powers it.',
  'hero.subtitle':
    'Convertra is two products, one brand. Convertra App organises, analyses and converts a DJ’s whole library on macOS. Convertra AudioCore is the on-device key, tempo and Camelot engine inside it — validated against Mixed In Key on 1000+ commercial tracks, and available to license.',
  'hero.cta.primary': 'Download for macOS',
  'hero.cta.secondary': 'Explore Technology',
  'hero.note': 'Native macOS app · Apple Silicon + Intel · AudioCore engine · ~336 KB, zero runtime dependencies',
  'cta.license': 'License AudioCore',
  'cta.testapp': 'Test the App',
  'cta.explore': 'Explore Technology',
  'cta.partner': 'Become a Partner',
  'cta.integrate': 'Integrate AudioCore',
  'cta.download': 'Download for macOS',

  'modal.download.title': 'Download Convertra',
  'modal.download.body': 'Get the full power of Convertra App on your Mac.',
  'modal.download.req': 'Requires macOS 13.0 or later (Apple Silicon or Intel).',
  'modal.download.manual': 'Installation Guide',
  'modal.download.cta': 'Download ZIP',

  // ---- metric strip ----
  'metric.key.value': '~70%',
  'metric.key.label': 'Exact Camelot key match',
  'metric.harmonic.value': '~83%',
  'metric.harmonic.label': 'Harmonic / mix-compatible match',
  'metric.bpm.value': '~82%',
  'metric.bpm.label': 'Tempo within ±0.5 BPM',
  'metric.speed.value': '~1 s',
  'metric.speed.label': 'Analysis per track (release build)',
  'metric.device.value': '100%',
  'metric.device.label': 'On-device — no cloud calls',

  'trust.label': 'Benchmarked against the same class of technology that powers',
  'trust.disclaimer':
    'Comparison names are referenced for category context only. Convertra is independent and not affiliated with or endorsed by these products.',

  'split.eyebrow': 'One platform, two products',
  'split.title': 'Buy the app. License the engine.',
  'split.subtitle':
    'Convertra ships as a finished macOS app for DJs and as an embeddable engine for developers — same brand, same technology, two ways to work with it.',
  'split.app.tag': 'For DJs',
  'split.app.title': 'Convertra App',
  'split.app.body':
    'A native macOS library, analysis and conversion app — key, BPM, Camelot, metadata, duplicates and lossless-to-MP3 in one workflow.',
  'split.app.cta': 'Download for macOS',
  'split.core.tag': 'For developers & companies',
  'split.core.title': 'Convertra AudioCore',
  'split.core.body':
    'The on-device DSP engine behind the app — musical key, tempo and Camelot detection, delivered as a signed universal binary to embed, white-label or license.',
  'split.core.cta': 'License AudioCore',

  // ---- technology ----
  'tech.eyebrow': 'Technology',
  'tech.title': 'A full analysis pipeline, not a wrapper',
  'tech.subtitle':
    'Every stage — decode, onset, pitch-class profiling, autocorrelation, Camelot mapping — is native Swift DSP written from the ground up. No FFmpeg in the analysis path, no external model weights.',

  'tech.key.title': 'Musical Key Detection',
  'tech.key.body':
    'Peak-picking harmonic pitch-class profiling (HPCP) over a resampled mono signal, resolving tonic and mode. Outputs the musical key plus mix-compatible candidates with confidence.',

  'tech.tempo.title': 'BPM Detection',
  'tech.tempo.body':
    'Multi-band onset-envelope extraction feeding integer-lag autocorrelation, refined by parabolic peak interpolation for continuous, sub-BPM precision — not quantised guesses.',

  'tech.camelot.title': 'Camelot Conversion',
  'tech.camelot.body':
    'Detected keys map directly to Camelot / Open Key notation, the harmonic-mixing standard DJs actually use — colour-coded and ready to drive compatibility logic in your app.',

  'tech.pipeline.title': 'Audio Processing Pipeline',
  'tech.pipeline.body':
    'Single-pass fast decode of the track core via AVAssetReader to 22.05 kHz mono, then key and tempo detection run concurrently per track. Deterministic, reproducible output.',

  'tech.perf.title': 'Performance Architecture',
  'tech.perf.body':
    'Built on Apple Accelerate/vDSP with actor-based concurrency. Release-optimised binary analyses a track in roughly a second — about 10× faster than the debug-compiled source.',

  'tech.delivery.title': 'Delivery Model',
  'tech.delivery.body':
    'Shipped as a signed, closed-source .xcframework — a ~336 KB universal binary you drop into a Swift/Objective-C project. The public adapters preserve stable method signatures.',

  // ---- performance ----
  'perf.eyebrow': 'Performance & honesty',
  'perf.title': 'Numbers we can reproduce',
  'perf.subtitle':
    'These are measured results from a from-scratch DSP rewrite, validated against Mixed In Key ground-truth tags over 1000+ real commercial tracks (house, tech-house, hip-hop, pop) — not marketing figures.',
  'perf.method.title': 'How it was measured',
  'perf.method.body':
    'A tuning harness compares AudioCore output track-by-track against a local Mixed In Key CSV export. Key is scored on exact Camelot match and on harmonic (mix-compatible) match; tempo on the share of tracks within ±0.5 BPM. Speed is end-to-end per track on a release build.',
  'perf.point.ondevice.title': 'Fully on-device',
  'perf.point.ondevice.body':
    'No network round-trips, no per-track API cost, no data leaving the machine — analysis scales with local CPU, not a cloud bill or rate limit.',
  'perf.point.scale.title': 'Built for large libraries',
  'perf.point.scale.body':
    'Concurrent per-track analysis and bounded processing keep it stable across tens of thousands of files — the same engine that drives the Convertra desktop app.',
  'perf.point.native.title': 'Native, not wrapped',
  'perf.point.native.body':
    'No Electron, no web runtime, no cloud analysis dependency. Apple-native audio all the way down, shipped as a single universal binary.',

  // ---- product showcase ----
  'show.eyebrow': 'Convertra App',
  'show.title': 'The macOS app DJs run every day',
  'show.subtitle':
    'A finished product in its own right: Convertra organises, analyses and converts a DJ’s entire library on macOS — key, tempo and Camelot on every track, metadata and artwork editing, duplicate detection and lossless-to-MP3 conversion. Powered by AudioCore, built for working DJs.',
  'show.cta': 'Get Convertra App',
  'show.library.title': 'Library & analysis',
  'show.library.body':
    'Ingest thousands of tracks, each analysed for key, BPM and Camelot on-device. Colour-coded harmonic keys, sortable and searchable.',
  'show.metadata.title': 'Metadata & artwork',
  'show.metadata.body':
    'mp3tag-grade tag editing with a native ID3v2 writer that embeds cover art into MP3 and AIFF — including formats FFmpeg silently drops.',
  'show.conversion.title': 'Conversion pipeline',
  'show.conversion.body':
    'Lossless-to-MP3 batch conversion with a bounded-concurrency queue, sample-rate and channel options, and folder-structure preservation.',
  'show.caption.library': 'Convertra — library view with on-device key/BPM/Camelot analysis',
  'show.caption.metadata': 'Convertra — metadata & artwork editor',
  'show.caption.conversion': 'Convertra — batch conversion queue',
  'show.caption.duplicates': 'Convertra — duplicate detection across the library',
  'show.caption.settings': 'Convertra — conversion & library settings',
  'show.caption.light': 'Convertra — light & dark themes',

  // ---- comparison ----
  'cmp.eyebrow': 'Category context',
  'cmp.title': 'Where AudioCore sits',
  'cmp.subtitle':
    'A structural comparison of how key/tempo analysis is delivered across common tools. Feature availability in third-party products is summarised for orientation and may change.',
  'cmp.col.feature': 'Capability',
  'cmp.col.core': 'Convertra AudioCore',
  'cmp.col.mik': 'Mixed In Key',
  'cmp.col.rb': 'Rekordbox',
  'cmp.row.ondevice': '100% on-device DSP',
  'cmp.row.license': 'Licensable as an embeddable SDK',
  'cmp.row.whitelabel': 'White-label / OEM integration',
  'cmp.row.camelot': 'Native Camelot / Open Key output',
  'cmp.row.footprint': 'Universal binary footprint',
  'cmp.row.nonn': 'No cloud, no neural-net weights',
  'cmp.val.core.footprint': '~336 KB',
  'cmp.val.varies': 'Varies',
  'cmp.val.na': 'n/a',
  'cmp.val.bundled': 'Bundled',
  'cmp.note':
    'Convertra AudioCore is designed to be embedded in your product. Mixed In Key and Rekordbox are end-user applications — the comparison highlights delivery model, not a claim of superiority on every axis.',

  // ---- business ----
  'biz.eyebrow': 'Opportunities',
  'biz.title': 'Five ways to work with Convertra',
  'biz.subtitle':
    'The technology, the product and the brand are structured so a partner can license a component, integrate under their own brand, co-develop, invest, or acquire the whole thing.',
  'biz.acq.title': 'Acquisition',
  'biz.acq.body':
    'Full acquisition of the project — source code, AudioCore IP, brand, documentation, build/release infrastructure and intellectual property in one transfer.',
  'biz.acq.cta': 'Discuss acquisition',
  'biz.lic.title': 'Licensing',
  'biz.lic.body':
    'Embed AudioCore as a drop-in key/BPM/Camelot SDK. SDK, Commercial and Enterprise tiers to match your distribution and support needs.',
  'biz.lic.cta': 'License AudioCore',
  'biz.wl.title': 'White Label',
  'biz.wl.body':
    'Ship AudioCore analysis under your own brand inside a DJ app, library manager or music platform — same engine, your product surface.',
  'biz.wl.cta': 'Explore white-label',
  'biz.part.title': 'Partnerships',
  'biz.part.body':
    'Joint development, strategic and technology partnerships — from a co-built analysis feature to a deeper platform collaboration.',
  'biz.part.cta': 'Start a partnership',
  'biz.inv.title': 'Investment',
  'biz.inv.body':
    'Investment, equity participation or development funding to accelerate the roadmap and expand AudioCore beyond macOS.',
  'biz.inv.cta': 'Investment inquiry',

  // ---- founder ----
  'founder.eyebrow': 'Founder',
  'founder.name': 'Hamid Kazimov',
  'founder.roles': 'Founder · Software Developer · Creator of Convertra & Convertra AudioCore · DJ & Music Director',
  'founder.bio':
    'Convertra AudioCore was built by a working DJ and software developer — someone who needed commercial-grade key and tempo analysis that runs locally, and rebuilt the DSP from scratch when off-the-shelf options fell short. The result is an engine validated against the tools professionals already trust, honest about what it does, and engineered as native Apple audio from decode to Camelot.',
  'founder.link.email': 'Email',
  'founder.link.telegram': 'Telegram',
  'founder.link.whatsapp': 'WhatsApp',
  'founder.link.linkedin': 'LinkedIn',
  'founder.link.github': 'GitHub',

  // ---- faq ----
  'faq.eyebrow': 'FAQ',
  'faq.title': 'Questions, answered',
  'faq.q1': 'What exactly is Convertra AudioCore?',
  'faq.a1':
    'A proprietary DSP engine that detects musical key, tempo (BPM) and Camelot notation from audio, entirely on-device. It powers the Convertra macOS app and is available to license as an embeddable component.',
  'faq.q2': 'How accurate is it?',
  'faq.a2':
    'Measured against Mixed In Key ground-truth tags on 1000+ commercial tracks: ~70% exact Camelot key match, ~83% harmonic (mix-compatible) match, and ~82% of tracks within ±0.5 BPM. These are reproducible numbers, not marketing claims.',
  'faq.q3': 'Does it use the cloud or a neural network?',
  'faq.a3':
    'No. There are no cloud calls, no third-party analysis API and no neural-network weights. It is pure DSP built on Apple’s Accelerate/vDSP, running 100% locally.',
  'faq.q4': 'How is it delivered and integrated?',
  'faq.a4':
    'As a signed, closed-source .xcframework — a ~336 KB universal binary (Apple Silicon + Intel) that drops into a Swift or Objective-C project. Public adapters expose stable method signatures for key and tempo results.',
  'faq.q5': 'What platforms are supported today?',
  'faq.a5':
    'The shipping engine targets macOS (12+) as a native binary. Porting and expansion beyond macOS is exactly the kind of roadmap a licensing, partnership or investment conversation can prioritise.',
  'faq.q6': 'What licensing options are available?',
  'faq.a6':
    'SDK, Commercial and Enterprise licensing, plus white-label/OEM integration and full acquisition. The right structure depends on your distribution model — reach out and we’ll scope it.',

  // ---- contact ----
  'contact.eyebrow': 'Contact',
  'contact.title': 'Let’s talk',
  'contact.subtitle':
    'Whether you want to license the technology, integrate under your brand, partner, invest or acquire — every path below reaches the founder directly.',
  'contact.cta.buy.title': 'Buy Convertra',
  'contact.cta.buy.body': 'Acquire the full project — code, engine, brand and IP.',
  'contact.cta.license.title': 'License AudioCore',
  'contact.cta.license.body': 'SDK, Commercial or Enterprise licensing of the engine.',
  'contact.cta.partner.title': 'Partnership Inquiry',
  'contact.cta.partner.body': 'Joint development and strategic collaboration.',
  'contact.cta.invest.title': 'Investment Inquiry',
  'contact.cta.invest.body': 'Equity, funding and roadmap acceleration.',
  'contact.reach': 'Reach the founder',
  'contact.email.label': 'Email',
  'contact.direct': 'Direct channels',

  // ---- footer ----
  'footer.tagline': 'On-device key, tempo & Camelot detection — engineered as native Apple audio.',
  'footer.rights': 'All rights reserved.',
  'footer.independent':
    'Independent product. Mixed In Key and Rekordbox are trademarks of their respective owners and are referenced for category context only.',
  'footer.nav.tech': 'Technology',
  'footer.nav.perf': 'Performance',
  'footer.nav.biz': 'Opportunities',
  'footer.nav.contact': 'Contact',

  // ---- misc ----
  'a11y.langSwitch': 'Change language',
  'a11y.skip': 'Skip to content',
  'a11y.close': 'Close',
  'modal.heading': 'Get in touch',
  'modal.sub': 'Choose a channel — every option reaches the founder directly.',
};

const ru: Dict = {
  'meta.title': 'Convertra — DJ-приложение для macOS и движок AudioCore (тональность/темп)',
  'meta.description':
    'Convertra — платформа для DJ-аудио: нативное macOS-приложение для библиотеки, анализа и конвертации, и Convertra AudioCore — встроенный движок определения тональности, темпа и Camelot на устройстве. Проверен против Mixed In Key на 1000+ треках; доступен для лицензирования, white-label и интеграции.',

  'nav.app': 'Приложение',
  'nav.audiocore': 'AudioCore',
  'nav.technology': 'Технология',
  'nav.performance': 'Производительность',
  'nav.product': 'Продукт',
  'nav.compare': 'Сравнение',
  'nav.business': 'Возможности',
  'nav.founder': 'Основатель',
  'nav.faq': 'FAQ',
  'nav.contact': 'Контакты',
  'nav.cta': 'Начать',

  'hero.eyebrow': 'Convertra — платформа для DJ-аудио',
  'hero.title': 'Нативное macOS-приложение для DJ — и движок, который его питает.',
  'hero.subtitle':
    'Convertra — это два продукта под одним брендом. Приложение Convertra организует, анализирует и конвертирует всю библиотеку DJ на macOS. Convertra AudioCore — встроенный в него движок тональности, темпа и Camelot на устройстве: проверен против Mixed In Key на 1000+ треках и доступен для лицензирования.',
  'hero.cta.primary': 'Скачать для macOS',
  'hero.cta.secondary': 'Изучить технологию',
  'hero.note': 'Нативное macOS-приложение · Apple Silicon + Intel · движок AudioCore · ~336 КБ, без внешних зависимостей',
  'cta.license': 'Лицензировать AudioCore',
  'cta.testapp': 'Протестировать приложение',
  'cta.explore': 'Изучить технологию',
  'cta.partner': 'Стать партнером',
  'cta.integrate': 'Интегрировать AudioCore',
  'cta.download': 'Скачать для macOS',

  'modal.download.title': 'Скачать Convertra',
  'modal.download.body': 'Получите всю мощь приложения Convertra на вашем Mac.',
  'modal.download.req': 'Требуется macOS 13.0 или новее (Apple Silicon или Intel).',
  'modal.download.manual': 'Инструкция по установке',
  'modal.download.cta': 'Скачать ZIP',

  'metric.key.value': '~70%',
  'metric.key.label': 'Точное совпадение по Camelot',
  'metric.harmonic.value': '~83%',
  'metric.harmonic.label': 'Гармонически совместимое совпадение',
  'metric.bpm.value': '~82%',
  'metric.bpm.label': 'Темп в пределах ±0.5 BPM',
  'metric.speed.value': '~1 с',
  'metric.speed.label': 'Анализ на трек (release-сборка)',
  'metric.device.value': '100%',
  'metric.device.label': 'На устройстве — без обращений в облако',

  'trust.label': 'Тот же класс технологий, что стоит за',
  'trust.disclaimer':
    'Названия приведены только для отраслевого контекста. Convertra — независимый продукт и не аффилирован с указанными брендами.',

  'split.eyebrow': 'Одна платформа, два продукта',
  'split.title': 'Купите приложение. Лицензируйте движок.',
  'split.subtitle':
    'Convertra поставляется как готовое macOS-приложение для DJ и как встраиваемый движок для разработчиков — один бренд, одна технология, два способа работать с ней.',
  'split.app.tag': 'Для DJ',
  'split.app.title': 'Приложение Convertra',
  'split.app.body':
    'Нативное macOS-приложение для библиотеки, анализа и конвертации — тональность, BPM, Camelot, метаданные, дубликаты и lossless-в-MP3 в одном рабочем процессе.',
  'split.app.cta': 'Скачать для macOS',
  'split.core.tag': 'Для разработчиков и компаний',
  'split.core.title': 'Convertra AudioCore',
  'split.core.body':
    'On-device DSP-движок за приложением — определение тональности, темпа и Camelot, поставляется как подписанный universal binary для встраивания, white-label или лицензирования.',
  'split.core.cta': 'Лицензировать AudioCore',

  'tech.eyebrow': 'Технология',
  'tech.title': 'Полный конвейер анализа, а не обёртка',
  'tech.subtitle':
    'Каждый этап — декодирование, онсеты, профилирование классов высоты, автокорреляция, маппинг в Camelot — это нативный DSP на Swift, написанный с нуля. Никакого FFmpeg в тракте анализа, никаких внешних весов модели.',

  'tech.key.title': 'Определение тональности',
  'tech.key.body':
    'Гармоническое профилирование классов высоты (HPCP) с peak-picking по ресемплированному моно-сигналу — определяет тонику и лад. На выходе — тональность и совместимые для микса кандидаты с уверенностью.',

  'tech.tempo.title': 'Определение BPM',
  'tech.tempo.body':
    'Многополосная огибающая онсетов подаётся в автокорреляцию по целочисленным лагам, уточняется параболической интерполяцией пика — непрерывная точность до долей BPM, а не квантованные догадки.',

  'tech.camelot.title': 'Конвертация в Camelot',
  'tech.camelot.body':
    'Тональности напрямую отображаются в нотацию Camelot / Open Key — стандарт гармонического сведения у диджеев: с цветовой кодировкой и готовые к логике совместимости в вашем приложении.',

  'tech.pipeline.title': 'Конвейер обработки аудио',
  'tech.pipeline.body':
    'Однопроходное быстрое декодирование ядра трека через AVAssetReader до 22.05 кГц моно, затем тональность и темп считаются параллельно для каждого трека. Детерминированный, воспроизводимый результат.',

  'tech.perf.title': 'Архитектура производительности',
  'tech.perf.body':
    'Построен на Apple Accelerate/vDSP с конкурентностью на акторах. Release-сборка анализирует трек примерно за секунду — около 10× быстрее debug-исходника.',

  'tech.delivery.title': 'Модель поставки',
  'tech.delivery.body':
    'Поставляется как подписанный closed-source .xcframework — universal binary ~336 КБ, который вы просто подключаете в Swift/Objective-C проект. Публичные адаптеры сохраняют стабильные сигнатуры методов.',

  'perf.eyebrow': 'Производительность и честность',
  'perf.title': 'Цифры, которые воспроизводимы',
  'perf.subtitle':
    'Это измеренные результаты DSP-движка, переписанного с нуля, проверенные против эталонных тегов Mixed In Key на 1000+ реальных коммерческих треках (house, tech-house, hip-hop, pop) — не маркетинговые цифры.',
  'perf.method.title': 'Как измерялось',
  'perf.method.body':
    'Тюнинг-харнесс сравнивает вывод AudioCore трек за треком с локальным CSV-экспортом Mixed In Key. Тональность оценивается по точному совпадению Camelot и по гармоническому (совместимому для микса); темп — по доле треков в пределах ±0.5 BPM. Скорость — end-to-end на трек в release-сборке.',
  'perf.point.ondevice.title': 'Полностью на устройстве',
  'perf.point.ondevice.body':
    'Никаких сетевых обращений, никакой поштучной оплаты API, данные не покидают машину — анализ масштабируется локальным CPU, а не облачным счётом или лимитами.',
  'perf.point.scale.title': 'Для больших библиотек',
  'perf.point.scale.body':
    'Параллельный анализ по трекам и ограниченная конкурентность держат стабильность на десятках тысяч файлов — тот же движок, что работает в десктоп-приложении Convertra.',
  'perf.point.native.title': 'Нативный, не обёртка',
  'perf.point.native.body':
    'Без Electron, без веб-рантайма, без облачной зависимости для анализа. Полностью нативное аудио Apple, поставляется как один universal binary.',

  'show.eyebrow': 'Приложение Convertra',
  'show.title': 'macOS-приложение, в котором DJ работают каждый день',
  'show.subtitle':
    'Полноценный самостоятельный продукт: Convertra организует, анализирует и конвертирует всю библиотеку DJ на macOS — тональность, темп и Camelot по каждому треку, редактирование метаданных и обложек, поиск дубликатов и конвертация lossless-в-MP3. На движке AudioCore, для практикующих DJ.',
  'show.cta': 'Получить приложение',
  'show.library.title': 'Библиотека и анализ',
  'show.library.body':
    'Импорт тысяч треков, каждый анализируется по тональности, BPM и Camelot на устройстве. Цветовая кодировка гармонических тональностей, сортировка и поиск.',
  'show.metadata.title': 'Метаданные и обложки',
  'show.metadata.body':
    'Редактирование тегов уровня mp3tag с нативным ID3v2-райтером, который встраивает обложки в MP3 и AIFF — включая форматы, которые FFmpeg молча теряет.',
  'show.conversion.title': 'Конвейер конвертации',
  'show.conversion.body':
    'Пакетная конвертация lossless-в-MP3 с очередью с ограниченной конкурентностью, выбором частоты дискретизации и каналов, сохранением структуры папок.',
  'show.caption.library': 'Convertra — библиотека с on-device анализом key/BPM/Camelot',
  'show.caption.metadata': 'Convertra — редактор метаданных и обложек',
  'show.caption.conversion': 'Convertra — очередь пакетной конвертации',
  'show.caption.duplicates': 'Convertra — поиск дубликатов по всей библиотеке',
  'show.caption.settings': 'Convertra — настройки конвертации и библиотеки',
  'show.caption.light': 'Convertra — светлая и тёмная темы',

  'cmp.eyebrow': 'Отраслевой контекст',
  'cmp.title': 'Где находится AudioCore',
  'cmp.subtitle':
    'Структурное сравнение того, как поставляется анализ тональности/темпа в распространённых инструментах. Наличие функций в сторонних продуктах приведено для ориентира и может меняться.',
  'cmp.col.feature': 'Возможность',
  'cmp.col.core': 'Convertra AudioCore',
  'cmp.col.mik': 'Mixed In Key',
  'cmp.col.rb': 'Rekordbox',
  'cmp.row.ondevice': '100% on-device DSP',
  'cmp.row.license': 'Лицензируется как встраиваемый SDK',
  'cmp.row.whitelabel': 'White-label / OEM интеграция',
  'cmp.row.camelot': 'Нативный вывод Camelot / Open Key',
  'cmp.row.footprint': 'Размер universal binary',
  'cmp.row.nonn': 'Без облака и весов нейросети',
  'cmp.val.core.footprint': '~336 КБ',
  'cmp.val.varies': 'По-разному',
  'cmp.val.na': 'н/д',
  'cmp.val.bundled': 'Встроено',
  'cmp.note':
    'Convertra AudioCore спроектирован для встраивания в ваш продукт. Mixed In Key и Rekordbox — приложения для конечных пользователей; сравнение подчёркивает модель поставки, а не превосходство по каждому пункту.',

  'biz.eyebrow': 'Возможности',
  'biz.title': 'Пять способов работать с Convertra',
  'biz.subtitle':
    'Технология, продукт и бренд структурированы так, что партнёр может лицензировать компонент, интегрировать под своим брендом, совместно разрабатывать, инвестировать или купить всё целиком.',
  'biz.acq.title': 'Приобретение',
  'biz.acq.body':
    'Полное приобретение проекта — исходный код, IP AudioCore, бренд, документация, инфраструктура сборки/релиза и интеллектуальная собственность одним трансфером.',
  'biz.acq.cta': 'Обсудить покупку',
  'biz.lic.title': 'Лицензирование',
  'biz.lic.body':
    'Встройте AudioCore как готовый SDK для key/BPM/Camelot. Тарифы SDK, Commercial и Enterprise под вашу модель распространения и поддержки.',
  'biz.lic.cta': 'Лицензировать AudioCore',
  'biz.wl.title': 'White Label',
  'biz.wl.body':
    'Поставляйте анализ AudioCore под своим брендом внутри DJ-приложения, менеджера библиотеки или музыкальной платформы — тот же движок, ваша витрина.',
  'biz.wl.cta': 'Обсудить white-label',
  'biz.part.title': 'Партнёрства',
  'biz.part.body':
    'Совместная разработка, стратегические и технологические партнёрства — от совместной фичи анализа до глубокой платформенной интеграции.',
  'biz.part.cta': 'Начать партнёрство',
  'biz.inv.title': 'Инвестиции',
  'biz.inv.body':
    'Инвестиции, участие в доле или финансирование развития для ускорения роадмапа и расширения AudioCore за пределы macOS.',
  'biz.inv.cta': 'Инвестиционный запрос',

  'founder.eyebrow': 'Основатель',
  'founder.name': 'Гамид Кязымов',
  'founder.roles': 'Основатель · Разработчик · Создатель Convertra и Convertra AudioCore · DJ и музыкальный директор',
  'founder.bio':
    'Convertra AudioCore создан практикующим диджеем и разработчиком — тем, кому нужен был анализ тональности и темпа коммерческого уровня, работающий локально, и кто переписал DSP с нуля, когда готовые решения не подошли. Итог — движок, проверенный против инструментов, которым профессионалы уже доверяют, честный в том, что он делает, и построенный как нативное аудио Apple от декодирования до Camelot.',
  'founder.link.email': 'Email',
  'founder.link.telegram': 'Telegram',
  'founder.link.whatsapp': 'WhatsApp',
  'founder.link.linkedin': 'LinkedIn',
  'founder.link.github': 'GitHub',

  'faq.eyebrow': 'FAQ',
  'faq.title': 'Ответы на вопросы',
  'faq.q1': 'Что такое Convertra AudioCore?',
  'faq.a1':
    'Собственный DSP-движок, определяющий тональность, темп (BPM) и нотацию Camelot из аудио полностью на устройстве. Он работает в macOS-приложении Convertra и доступен для лицензирования как встраиваемый компонент.',
  'faq.q2': 'Насколько он точен?',
  'faq.a2':
    'По измерениям против эталонных тегов Mixed In Key на 1000+ коммерческих треках: ~70% точных совпадений по Camelot, ~83% гармонически совместимых, ~82% треков в пределах ±0.5 BPM. Это воспроизводимые цифры, а не маркетинг.',
  'faq.q3': 'Использует ли он облако или нейросеть?',
  'faq.a3':
    'Нет. Никаких облачных вызовов, сторонних API анализа и весов нейросети. Это чистый DSP на Apple Accelerate/vDSP, работающий на 100% локально.',
  'faq.q4': 'Как он поставляется и интегрируется?',
  'faq.a4':
    'Как подписанный closed-source .xcframework — universal binary ~336 КБ (Apple Silicon + Intel), подключаемый в Swift или Objective-C проект. Публичные адаптеры дают стабильные сигнатуры методов для результатов по тональности и темпу.',
  'faq.q5': 'Какие платформы поддерживаются сейчас?',
  'faq.a5':
    'Текущий движок нацелен на macOS (12+) как нативный бинарник. Портирование и расширение за пределы macOS — именно тот роадмап, который можно приоритизировать в рамках лицензии, партнёрства или инвестиций.',
  'faq.q6': 'Какие варианты лицензирования есть?',
  'faq.a6':
    'Лицензии SDK, Commercial и Enterprise, а также white-label/OEM интеграция и полное приобретение. Правильная структура зависит от вашей модели распространения — напишите, и мы её проработаем.',

  'contact.eyebrow': 'Контакты',
  'contact.title': 'Давайте обсудим',
  'contact.subtitle':
    'Хотите лицензировать технологию, интегрировать под своим брендом, стать партнёром, инвестировать или купить — каждый путь ниже ведёт напрямую к основателю.',
  'contact.cta.buy.title': 'Купить Convertra',
  'contact.cta.buy.body': 'Приобрести проект целиком — код, движок, бренд и IP.',
  'contact.cta.license.title': 'Лицензировать AudioCore',
  'contact.cta.license.body': 'SDK, Commercial или Enterprise лицензия движка.',
  'contact.cta.partner.title': 'Запрос о партнёрстве',
  'contact.cta.partner.body': 'Совместная разработка и стратегическое сотрудничество.',
  'contact.cta.invest.title': 'Инвестиционный запрос',
  'contact.cta.invest.body': 'Доля, финансирование и ускорение роадмапа.',
  'contact.reach': 'Связаться с основателем',
  'contact.email.label': 'Email',
  'contact.direct': 'Прямые каналы',

  'footer.tagline': 'On-device определение тональности, темпа и Camelot — построено как нативное аудио Apple.',
  'footer.rights': 'Все права защищены.',
  'footer.independent':
    'Независимый продукт. Mixed In Key и Rekordbox — товарные знаки соответствующих владельцев, упомянуты только для отраслевого контекста.',
  'footer.nav.tech': 'Технология',
  'footer.nav.perf': 'Производительность',
  'footer.nav.biz': 'Возможности',
  'footer.nav.contact': 'Контакты',

  'a11y.langSwitch': 'Сменить язык',
  'a11y.skip': 'Перейти к содержимому',
  'a11y.close': 'Закрыть',
  'modal.heading': 'Связаться',
  'modal.sub': 'Выберите удобный канал — всё ведёт напрямую к основателю.',
};

const es: Dict = {
  'meta.title': 'Convertra — app de DJ para macOS y el motor AudioCore (tonalidad/tempo)',
  'meta.description':
    'Convertra es una plataforma de audio para DJs: una app nativa de macOS para biblioteca, análisis y conversión, y Convertra AudioCore — el motor en el dispositivo de tonalidad, tempo y Camelot que lleva dentro. Validado frente a Mixed In Key en 1000+ temas; disponible para licenciar, white-label o integrar.',

  'nav.app': 'App',
  'nav.audiocore': 'AudioCore',
  'nav.technology': 'Tecnología',
  'nav.performance': 'Rendimiento',
  'nav.product': 'Producto',
  'nav.compare': 'Comparativa',
  'nav.business': 'Oportunidades',
  'nav.founder': 'Fundador',
  'nav.faq': 'FAQ',
  'nav.contact': 'Contacto',
  'nav.cta': 'Empezar',

  'hero.eyebrow': 'Convertra — plataforma de audio para DJs',
  'hero.title': 'Una app nativa de macOS para DJs — y el motor que la impulsa.',
  'hero.subtitle':
    'Convertra son dos productos, una marca. La app Convertra organiza, analiza y convierte toda la biblioteca de un DJ en macOS. Convertra AudioCore es el motor de tonalidad, tempo y Camelot en el dispositivo que lleva dentro — validado frente a Mixed In Key en 1000+ temas y disponible para licenciar.',
  'hero.cta.primary': 'Descargar para macOS',
  'hero.cta.secondary': 'Explorar la tecnología',
  'hero.note': 'App nativa de macOS · Apple Silicon + Intel · motor AudioCore · ~336 KB, sin dependencias',
  'cta.license': 'Licenciar AudioCore',
  'cta.testapp': 'Probar la app',
  'cta.explore': 'Explorar la tecnología',
  'cta.partner': 'Ser socio',
  'cta.integrate': 'Integrar AudioCore',
  'cta.download': 'Descargar para macOS',

  'modal.download.title': 'Descargar Convertra',
  'modal.download.body': 'Obtén todo el poder de Convertra App en tu Mac.',
  'modal.download.req': 'Requiere macOS 13.0 o posterior (Apple Silicon o Intel).',
  'modal.download.manual': 'Guía de instalación',
  'modal.download.cta': 'Descargar ZIP',

  'metric.key.value': '~70%',
  'metric.key.label': 'Coincidencia exacta de Camelot',
  'metric.harmonic.value': '~83%',
  'metric.harmonic.label': 'Coincidencia armónica / compatible',
  'metric.bpm.value': '~82%',
  'metric.bpm.label': 'Tempo dentro de ±0.5 BPM',
  'metric.speed.value': '~1 s',
  'metric.speed.label': 'Análisis por tema (build de release)',
  'metric.device.value': '100%',
  'metric.device.label': 'En el dispositivo — sin llamadas a la nube',

  'trust.label': 'La misma clase de tecnología que impulsa a',
  'trust.disclaimer':
    'Los nombres se citan solo como contexto de categoría. Convertra es independiente y no está afiliado ni respaldado por estos productos.',

  'split.eyebrow': 'Una plataforma, dos productos',
  'split.title': 'Compra la app. Licencia el motor.',
  'split.subtitle':
    'Convertra se entrega como app de macOS terminada para DJs y como motor integrable para desarrolladores — misma marca, misma tecnología, dos formas de usarla.',
  'split.app.tag': 'Para DJs',
  'split.app.title': 'Convertra App',
  'split.app.body':
    'Una app nativa de macOS de biblioteca, análisis y conversión — tonalidad, BPM, Camelot, metadatos, duplicados y lossless a MP3 en un solo flujo.',
  'split.app.cta': 'Descargar para macOS',
  'split.core.tag': 'Para desarrolladores y empresas',
  'split.core.title': 'Convertra AudioCore',
  'split.core.body':
    'El motor DSP en el dispositivo detrás de la app — detección de tonalidad, tempo y Camelot, entregado como binario universal firmado para integrar, white-label o licenciar.',
  'split.core.cta': 'Licenciar AudioCore',

  'tech.eyebrow': 'Tecnología',
  'tech.title': 'Un pipeline de análisis completo, no un wrapper',
  'tech.subtitle':
    'Cada etapa — decodificación, onsets, perfilado de clases de altura, autocorrelación, mapeo a Camelot — es DSP nativo en Swift escrito desde cero. Sin FFmpeg en la ruta de análisis, sin pesos de modelos externos.',

  'tech.key.title': 'Detección de tonalidad',
  'tech.key.body':
    'Perfilado armónico de clases de altura (HPCP) con peak-picking sobre una señal mono remuestreada, resolviendo tónica y modo. Devuelve la tonalidad y candidatos compatibles para mezcla con confianza.',

  'tech.tempo.title': 'Detección de BPM',
  'tech.tempo.body':
    'Extracción de envolvente de onsets multibanda que alimenta una autocorrelación de lag entero, refinada con interpolación parabólica de pico para precisión continua por debajo del BPM — no estimaciones cuantizadas.',

  'tech.camelot.title': 'Conversión a Camelot',
  'tech.camelot.body':
    'Las tonalidades se mapean directamente a notación Camelot / Open Key, el estándar de mezcla armónica que usan los DJs — con código de color y listas para la lógica de compatibilidad de tu app.',

  'tech.pipeline.title': 'Pipeline de procesamiento de audio',
  'tech.pipeline.body':
    'Decodificación rápida de una sola pasada del núcleo del tema con AVAssetReader a mono 22.05 kHz; luego tonalidad y tempo se calculan en paralelo por tema. Salida determinista y reproducible.',

  'tech.perf.title': 'Arquitectura de rendimiento',
  'tech.perf.body':
    'Construido sobre Apple Accelerate/vDSP con concurrencia basada en actores. El binario optimizado de release analiza un tema en aproximadamente un segundo — unas 10× más rápido que el código compilado en debug.',

  'tech.delivery.title': 'Modelo de entrega',
  'tech.delivery.body':
    'Se entrega como un .xcframework firmado y de código cerrado — un binario universal de ~336 KB que integras en un proyecto Swift/Objective-C. Los adaptadores públicos mantienen firmas de método estables.',

  'perf.eyebrow': 'Rendimiento y honestidad',
  'perf.title': 'Números que podemos reproducir',
  'perf.subtitle':
    'Son resultados medidos de una reescritura DSP desde cero, validados frente a las etiquetas de referencia de Mixed In Key en 1000+ temas comerciales reales (house, tech-house, hip-hop, pop) — no cifras de marketing.',
  'perf.method.title': 'Cómo se midió',
  'perf.method.body':
    'Un harness de ajuste compara la salida de AudioCore tema a tema con un export CSV local de Mixed In Key. La tonalidad se puntúa por coincidencia exacta de Camelot y por coincidencia armónica (compatible); el tempo por la proporción de temas dentro de ±0.5 BPM. La velocidad es end-to-end por tema en un build de release.',
  'perf.point.ondevice.title': 'Totalmente en el dispositivo',
  'perf.point.ondevice.body':
    'Sin viajes de red, sin coste de API por tema, sin datos saliendo de la máquina — el análisis escala con la CPU local, no con una factura de nube ni límites de tasa.',
  'perf.point.scale.title': 'Pensado para grandes bibliotecas',
  'perf.point.scale.body':
    'El análisis concurrente por tema y el procesamiento acotado mantienen la estabilidad en decenas de miles de archivos — el mismo motor que impulsa la app de escritorio Convertra.',
  'perf.point.native.title': 'Nativo, no envuelto',
  'perf.point.native.body':
    'Sin Electron, sin runtime web, sin dependencia de análisis en la nube. Audio nativo de Apple de principio a fin, entregado como un único binario universal.',

  'show.eyebrow': 'Convertra App',
  'show.title': 'La app de macOS que los DJs usan a diario',
  'show.subtitle':
    'Un producto terminado por derecho propio: Convertra organiza, analiza y convierte toda la biblioteca de un DJ en macOS — tonalidad, tempo y Camelot en cada tema, edición de metadatos y carátulas, detección de duplicados y conversión lossless a MP3. Impulsada por AudioCore, hecha para DJs.',
  'show.cta': 'Obtener la app',
  'show.library.title': 'Biblioteca y análisis',
  'show.library.body':
    'Importa miles de temas, cada uno analizado por tonalidad, BPM y Camelot en el dispositivo. Tonalidades armónicas con código de color, ordenables y buscables.',
  'show.metadata.title': 'Metadatos y carátulas',
  'show.metadata.body':
    'Edición de etiquetas de nivel mp3tag con un escritor ID3v2 nativo que incrusta carátulas en MP3 y AIFF — incluidos formatos que FFmpeg descarta en silencio.',
  'show.conversion.title': 'Pipeline de conversión',
  'show.conversion.body':
    'Conversión por lotes de lossless a MP3 con una cola de concurrencia acotada, opciones de frecuencia de muestreo y canales, y preservación de la estructura de carpetas.',
  'show.caption.library': 'Convertra — vista de biblioteca con análisis en el dispositivo de key/BPM/Camelot',
  'show.caption.metadata': 'Convertra — editor de metadatos y carátulas',
  'show.caption.conversion': 'Convertra — cola de conversión por lotes',
  'show.caption.duplicates': 'Convertra — detección de duplicados en la biblioteca',
  'show.caption.settings': 'Convertra — ajustes de conversión y biblioteca',
  'show.caption.light': 'Convertra — temas claro y oscuro',

  'cmp.eyebrow': 'Contexto de categoría',
  'cmp.title': 'Dónde encaja AudioCore',
  'cmp.subtitle':
    'Una comparación estructural de cómo se entrega el análisis de tonalidad/tempo en herramientas habituales. La disponibilidad de funciones en productos de terceros se resume a modo orientativo y puede cambiar.',
  'cmp.col.feature': 'Capacidad',
  'cmp.col.core': 'Convertra AudioCore',
  'cmp.col.mik': 'Mixed In Key',
  'cmp.col.rb': 'Rekordbox',
  'cmp.row.ondevice': 'DSP 100% en el dispositivo',
  'cmp.row.license': 'Licenciable como SDK integrable',
  'cmp.row.whitelabel': 'Integración white-label / OEM',
  'cmp.row.camelot': 'Salida nativa Camelot / Open Key',
  'cmp.row.footprint': 'Tamaño del binario universal',
  'cmp.row.nonn': 'Sin nube, sin pesos de red neuronal',
  'cmp.val.core.footprint': '~336 KB',
  'cmp.val.varies': 'Variable',
  'cmp.val.na': 'n/d',
  'cmp.val.bundled': 'Incluido',
  'cmp.note':
    'Convertra AudioCore está diseñado para integrarse en tu producto. Mixed In Key y Rekordbox son aplicaciones de usuario final — la comparación resalta el modelo de entrega, no una afirmación de superioridad en cada eje.',

  'biz.eyebrow': 'Oportunidades',
  'biz.title': 'Cinco formas de trabajar con Convertra',
  'biz.subtitle':
    'La tecnología, el producto y la marca están estructurados para que un socio pueda licenciar un componente, integrar bajo su propia marca, co-desarrollar, invertir o adquirirlo todo.',
  'biz.acq.title': 'Adquisición',
  'biz.acq.body':
    'Adquisición completa del proyecto — código fuente, IP de AudioCore, marca, documentación, infraestructura de build/release y propiedad intelectual en una sola transferencia.',
  'biz.acq.cta': 'Hablar de adquisición',
  'biz.lic.title': 'Licencia',
  'biz.lic.body':
    'Integra AudioCore como un SDK listo de key/BPM/Camelot. Niveles SDK, Commercial y Enterprise según tu distribución y soporte.',
  'biz.lic.cta': 'Licenciar AudioCore',
  'biz.wl.title': 'White Label',
  'biz.wl.body':
    'Entrega el análisis de AudioCore bajo tu propia marca dentro de una app de DJ, gestor de biblioteca o plataforma musical — el mismo motor, tu superficie de producto.',
  'biz.wl.cta': 'Explorar white-label',
  'biz.part.title': 'Alianzas',
  'biz.part.body':
    'Desarrollo conjunto, alianzas estratégicas y tecnológicas — desde una función de análisis co-construida hasta una colaboración de plataforma más profunda.',
  'biz.part.cta': 'Iniciar una alianza',
  'biz.inv.title': 'Inversión',
  'biz.inv.body':
    'Inversión, participación accionarial o financiación de desarrollo para acelerar el roadmap y expandir AudioCore más allá de macOS.',
  'biz.inv.cta': 'Consulta de inversión',

  'founder.eyebrow': 'Fundador',
  'founder.name': 'Hamid Kazimov',
  'founder.roles': 'Fundador · Desarrollador de software · Creador de Convertra y Convertra AudioCore · DJ y director musical',
  'founder.bio':
    'Convertra AudioCore fue creado por un DJ en activo y desarrollador de software — alguien que necesitaba un análisis de tonalidad y tempo de nivel comercial ejecutándose localmente, y que reescribió el DSP desde cero cuando las opciones estándar se quedaron cortas. El resultado es un motor validado frente a las herramientas en las que los profesionales ya confían, honesto sobre lo que hace, y diseñado como audio nativo de Apple desde la decodificación hasta Camelot.',
  'founder.link.email': 'Email',
  'founder.link.telegram': 'Telegram',
  'founder.link.whatsapp': 'WhatsApp',
  'founder.link.linkedin': 'LinkedIn',
  'founder.link.github': 'GitHub',

  'faq.eyebrow': 'FAQ',
  'faq.title': 'Preguntas, respondidas',
  'faq.q1': '¿Qué es exactamente Convertra AudioCore?',
  'faq.a1':
    'Un motor DSP propietario que detecta tonalidad musical, tempo (BPM) y notación Camelot a partir del audio, íntegramente en el dispositivo. Impulsa la app de macOS Convertra y está disponible para licenciar como componente integrable.',
  'faq.q2': '¿Qué precisión tiene?',
  'faq.a2':
    'Medido frente a las etiquetas de referencia de Mixed In Key en 1000+ temas comerciales: ~70% de coincidencia exacta de Camelot, ~83% de coincidencia armónica (compatible) y ~82% de temas dentro de ±0.5 BPM. Son cifras reproducibles, no de marketing.',
  'faq.q3': '¿Usa la nube o una red neuronal?',
  'faq.a3':
    'No. No hay llamadas a la nube, ni API de análisis de terceros, ni pesos de red neuronal. Es DSP puro sobre Accelerate/vDSP de Apple, ejecutándose 100% en local.',
  'faq.q4': '¿Cómo se entrega e integra?',
  'faq.a4':
    'Como un .xcframework firmado y de código cerrado — un binario universal de ~336 KB (Apple Silicon + Intel) que integras en un proyecto Swift u Objective-C. Los adaptadores públicos exponen firmas de método estables para los resultados de tonalidad y tempo.',
  'faq.q5': '¿Qué plataformas se soportan hoy?',
  'faq.a5':
    'El motor actual apunta a macOS (12+) como binario nativo. El porte y la expansión más allá de macOS es justo el tipo de roadmap que una conversación de licencia, alianza o inversión puede priorizar.',
  'faq.q6': '¿Qué opciones de licencia hay?',
  'faq.a6':
    'Licencias SDK, Commercial y Enterprise, además de integración white-label/OEM y adquisición completa. La estructura correcta depende de tu modelo de distribución — escríbenos y lo definimos.',

  'contact.eyebrow': 'Contacto',
  'contact.title': 'Hablemos',
  'contact.subtitle':
    'Ya sea para licenciar la tecnología, integrar bajo tu marca, aliarte, invertir o adquirir — cada vía de abajo llega directamente al fundador.',
  'contact.cta.buy.title': 'Comprar Convertra',
  'contact.cta.buy.body': 'Adquiere el proyecto completo — código, motor, marca e IP.',
  'contact.cta.license.title': 'Licenciar AudioCore',
  'contact.cta.license.body': 'Licencia SDK, Commercial o Enterprise del motor.',
  'contact.cta.partner.title': 'Consulta de alianza',
  'contact.cta.partner.body': 'Desarrollo conjunto y colaboración estratégica.',
  'contact.cta.invest.title': 'Consulta de inversión',
  'contact.cta.invest.body': 'Capital, financiación y aceleración del roadmap.',
  'contact.reach': 'Contactar al fundador',
  'contact.email.label': 'Email',
  'contact.direct': 'Canales directos',

  'footer.tagline': 'Detección de tonalidad, tempo y Camelot en el dispositivo — diseñada como audio nativo de Apple.',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.independent':
    'Producto independiente. Mixed In Key y Rekordbox son marcas de sus respectivos propietarios y se citan solo como contexto de categoría.',
  'footer.nav.tech': 'Tecnología',
  'footer.nav.perf': 'Rendimiento',
  'footer.nav.biz': 'Oportunidades',
  'footer.nav.contact': 'Contacto',

  'a11y.langSwitch': 'Cambiar idioma',
  'a11y.skip': 'Saltar al contenido',
  'a11y.close': 'Cerrar',
  'modal.heading': 'Ponte en contacto',
  'modal.sub': 'Elige un canal — cada opción llega directamente al fundador.',
};

export const translations: Record<Locale, Dict> = { en, ru, es };

/** Server-side translate helper (defaults to EN for crawlable markup). */
export function t(key: string, locale: Locale = DEFAULT_LOCALE): string {
  return translations[locale][key] ?? translations.en[key] ?? key;
}
