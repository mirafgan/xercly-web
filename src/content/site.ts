import type { Locale } from "@/lib/i18n";

const az = {
  nav: {
    features: "İmkanlar",
    how: "Necə işləyir",
    privacy: "Məxfilik",
    faq: "Suallar",
    explore: "Tətbiqi kəşf et",
    menu: "Menyunu aç",
    language: "Dil seçimi",
    skip: "Məzmuna keç",
  },
  hero: {
    eyebrow: "GÜNDƏLİK MALİYYƏNƏ AYDIN BAXIŞ",
    title: ["Xərclərin aydın.", "Həyatın rahat."],
    body: "Xərclərini qeyd et, büdcəni izlə, pulunun hara getdiyini gör.",
    sub: "Gündəlik maliyyənə Azərbaycan dilində aydın baxış.",
    discover: "Necə işlədiyini gör",
    sample: "Nümunə məlumatlar",
    phoneAlt:
      "Xercly tətbiqinin nümunə icmalı. Oktyabr ayının qeydə alınmış xərci 1 248,50 manatdır. Bu, bank balansı deyil.",
    coming: "Tezliklə",
    scroll: "KƏŞF ETMƏYƏ DAVAM ET",
  },
  strip: ["Əl ilə qeydiyyat", "Aylıq büdcə", "Aydın hesabatlar"],
  report: {
    eyebrow: "01 / HƏR XƏRCİN BİR HEKAYƏSİ VAR",
    title: ["Pulun hara gedir?", "Aydın gör."],
    body: "Market, nəqliyyat, gündəlik alışlar. Xərclərinə kateqoriyalar üzrə bax, büdcəndə nə qədər yer qaldığını gör.",
    link: "İmkanları kəşf et",
    chartLabel: "Nümunə xərclərinin kateqoriyalar üzrə bölgüsü",
    categories: [
      "Qida",
      "Nəqliyyat",
      "Kafe və restoran",
      "Alış-veriş",
      "Digər",
    ],
    sample: "Nümunə bölgü · real hesab məlumatı deyil",
  },
  features: {
    eyebrow: "SƏNİN GÜNDƏLİK RİTMİN ÜÇÜN",
    title: "Kiçik qeydlər. Böyük aydınlıq.",
    items: [
      {
        title: "Hər qeyd öz yerində.",
        body: "Xərc, gəlir və hesabların arasındakı köçürmələri ayrı qeyd et. Kartlarını və nağd pulunu bir yerdə izlə.",
      },
      {
        title: "Büdcənə uyğun yaşa.",
        body: "Aylıq və kateqoriya büdcələri təyin et. Qeydə alınmış xərclərinin büdcəndə nə qədər yer tutduğunu gör.",
      },
      {
        title: "Məlumatını özün gətir.",
        body: "CSV və XLSX çıxarışlarını yoxlayaraq əlavə et. Dövr, hesab və valyuta üzrə bax, qeydlərini CSV kimi çıxar.",
      },
    ],
  },
  how: {
    eyebrow: "NECƏ İŞLƏYİR?",
    title: "Gündəlik vərdiş. Daha aydın büdcə.",
    steps: [
      {
        title: "Qeyd et",
        body: "Məbləği, kateqoriyanı və hesabı seç. İstəsən, çıxarış faylından başla.",
      },
      {
        title: "Yoxla",
        body: "Gələn qeydləri nəzərdən keçir. Natamam və mümkün təkrar qeydlərə özün qərar ver.",
      },
      {
        title: "İzlə",
        body: "Ay ərzində qeydə alınmış xərclərini və büdcənin istifadəsini bir baxışda gör.",
      },
    ],
  },
  privacy: {
    eyebrow: "SƏNİN MƏLUMATIN. SƏNİN SEÇİMİN.",
    title: "Məxfiliyin ön planda.",
    body: "Məlumatlarının idarəsi səndədir. Mobil tətbiq maliyyə qeydlərini cihazda şifrəli saxlayır. İcazələri özün seç, qeydlərini ixrac et və şifrəli ehtiyat nüsxə yarat.",
    link: "Məxfilik siyasətini oxu",
    status:
      "Bu versiyada maliyyə məlumatlarının bulud sinxronlaşması aktiv deyil. Ehtiyat nüsxəni ayrıca saxla.",
  },
  about: {
    eyebrow: "XERCLY HAQQINDA",
    title: "Pulunla münasibətinə bir az aydınlıq.",
    body: "Xercly gündəlik gəlir və xərclərini anlamaq istəyənlər üçün hazırlanmış şəxsi maliyyə tətbiqidir. Məqsədimiz qeydlərini toplamaq, büdcəni izləmək və maliyyə vərdişlərini görməyi rahatlaşdırmaqdır.",
    note: "Xercly bank xidməti göstərmir və hesabından ödəniş etmir.",
  },
  faq: {
    eyebrow: "TEZ-TEZ VERİLƏN SUALLAR",
    title: "Sualın var?",
    intro: "Başlamazdan əvvəl bilmək istədiklərin.",
    items: [
      {
        q: "Bank hesabına qoşulurmu?",
        a: "Hesab və ya kart adı əlavə etmək bank bağlantısı yaratmır. Xercly bütün bank tarixçəsini avtomatik əldə etdiyini iddia etmir. Göstəricilər qeydə alınmış əməliyyatlara əsaslanır.",
      },
      {
        q: "İnternetsiz istifadə edə bilərəm?",
        a: "Əsas lokal qeydiyyat və hesabat funksiyalarından internetsiz istifadə edə bilərsən. Giriş və digər onlayn xidmətlər internet tələb edə bilər.",
      },
      {
        q: "Əməliyyatlar avtomatik əlavə olunurmu?",
        a: "Platformaya uyğun bildiriş və iOS avtomatlaşdırma yolları üzərində iş gedir. Dəstək telefon, əməliyyat sistemi və mənbədən asılıdır; bütün qeydlərin tutulmasına zəmanət verilmir. Gələn namizədlər yoxlama tələb edir.",
      },
      {
        q: "Telefonumu dəyişsəm nə etməliyəm?",
        a: "Köhnə cihaz əlindəykən şifrəli .xercly ehtiyat nüsxəsini yarat və şifrəsini təhlükəsiz saxla. Bu versiyada bulud sinxronlaşması aktiv deyil. Unudulmuş ehtiyat nüsxə şifrəsini bərpa edə bilmirik.",
      },
      {
        q: "Xercly ödənişlidir?",
        a: "Buraxılış qiyməti və mümkün ödənişli imkanlar mağaza səhifəsində göstəriləcək. Hazırda qiymət və ya pulsuz istifadə müddəti elan edilməyib.",
      },
    ],
  },
  download: {
    eyebrow: "DAHA AYDIN BİR BAŞLANĞIC",
    title: ["Bu gündən", "daha aydın."],
    body: "Gündəlik xərclərinə yer ayır. Büdcənə aydın bax.",
    note: "iOS və Android üçün hazırlanır.",
  },
  footer: {
    tagline: "Gündəlik maliyyənə aydın baxış.",
    copyright: "© 2026 Xercly.",
    local: "Təqdimat versiyası",
    back: "Ana səhifə",
    top: "Yuxarı qayıt",
    privacy: "Məxfilik siyasəti",
    terms: "İstifadə şərtləri",
    agreement: "İstifadəçi razılaşması",
    deletion: "Hesabın silinməsi",
    support: "Dəstək",
  },
  legal: {
    eyebrow: "MƏLUMAT VƏ SƏNƏDLƏR",
    draft: "Qaralama",
    draftNote:
      "Bu sənəd yayımdan əvvəl hüquqi və əməliyyat məlumatları ilə tamamlanacaq. Təsdiqlənməmiş sahələr mətnin içində göstərilib.",
    effective: "Qüvvəyə minmə tarixi: təsdiqlənməlidir",
    contents: "Bu səhifədə",
    back: "Bütün səhifələrə qayıt",
    unavailable: "Bu lokal versiyada onlayn müraciət xidməti aktiv deyil.",
    contactPending: "Əlaqə ünvanı buraxılışdan əvvəl əlavə ediləcək.",
    updated: "Hazırlanıb: 26 oktyabr 2026",
  },
  metadata: {
    title: "Xercly — Xərclərin aydın. Həyatın rahat.",
    description:
      "Şəxsi maliyyənə Azərbaycan dilində aydın baxış. Xərclərini qeyd et, büdcəni izlə, pulunun hara getdiyini gör.",
  },
};

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : { [K in keyof T]: Widen<T[K]> };
export type SiteContent = Widen<typeof az>;
const en: SiteContent = {
  nav: {
    features: "Features",
    how: "How it works",
    privacy: "Privacy",
    faq: "Questions",
    explore: "Explore the app",
    menu: "Open menu",
    language: "Choose language",
    skip: "Skip to content",
  },
  hero: {
    eyebrow: "A CLEARER VIEW OF EVERYDAY FINANCES",
    title: ["Clear spending.", "A calmer everyday."],
    body: "Track your spending, follow your budget, and see where your money goes.",
    sub: "Everyday finance, with an app designed in Azerbaijani.",
    discover: "See how it works",
    sample: "Sample data",
    phoneAlt:
      "Sample Xercly dashboard in Azerbaijani. Recorded spending for October is 1,248.50 manat. This is not a bank balance.",
    coming: "Coming soon",
    scroll: "A LITTLE MORE CLARITY AWAITS",
  },
  strip: ["Everyday tracking", "Monthly budgets", "Clear reports"],
  report: {
    eyebrow: "01 / EVERY EXPENSE TELLS A STORY",
    title: ["Where does it go?", "Now you know."],
    body: "Groceries, transport, little everyday purchases. See your spending by category and how much room is left in your budget.",
    link: "Explore the features",
    chartLabel: "Sample spending by category",
    categories: [
      "Food",
      "Transport",
      "Cafés & restaurants",
      "Shopping",
      "Other",
    ],
    sample: "Sample breakdown · not real account data",
  },
  features: {
    eyebrow: "MADE FOR YOUR EVERYDAY RHYTHM",
    title: "Small entries. A clearer picture.",
    items: [
      {
        title: "Every entry in its place.",
        body: "Record expenses, income, and transfers between your accounts separately. Keep track of your cards and cash in one place.",
      },
      {
        title: "Find your budget rhythm.",
        body: "Set monthly and category budgets. See how much of your budget your recorded expenses have used.",
      },
      {
        title: "Bring your own records.",
        body: "Review and import CSV and XLSX statements. Explore by date, account, and currency, then export your entries as CSV.",
      },
    ],
  },
  how: {
    eyebrow: "HOW IT WORKS",
    title: "An everyday habit. A clearer budget.",
    steps: [
      {
        title: "Record",
        body: "Choose the amount, category, and account. Or start with a statement file.",
      },
      {
        title: "Review",
        body: "Look through incoming entries. Decide what to do with incomplete records and possible duplicates.",
      },
      {
        title: "Track",
        body: "See your recorded monthly spending and budget use at a glance.",
      },
    ],
  },
  privacy: {
    eyebrow: "YOUR INFORMATION. YOUR CHOICE.",
    title: "Your privacy comes first.",
    body: "Your information stays in your control. The mobile app stores financial records encrypted on your device. Choose permissions, export your entries, and create encrypted backups.",
    link: "Read the privacy policy",
    status:
      "Financial cloud sync is not active in this version. Keep a separate backup.",
  },
  about: {
    eyebrow: "ABOUT XERCLY",
    title: "A little clarity for your relationship with money.",
    body: "Xercly is a personal finance app for people who want to understand their everyday income and spending. Our aim is to make keeping records, following a budget, and noticing financial habits feel more manageable.",
    note: "Xercly does not provide banking services or make payments from your account.",
  },
  faq: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "A few questions?",
    intro: "Good things to know before you begin.",
    items: [
      {
        q: "Does it connect to my bank account?",
        a: "Adding an account or a card name does not connect to a bank. Xercly does not claim to automatically access your complete banking history. Figures are based on recorded transactions.",
      },
      {
        q: "Can I use it offline?",
        a: "Core local tracking and reporting work offline. Sign-in and other online services may require an internet connection.",
      },
      {
        q: "Are transactions added automatically?",
        a: "Platform-specific notification and iOS automation paths are in development. Support depends on the phone, operating system, and source; capturing every transaction is not guaranteed. Incoming candidates require review.",
      },
      {
        q: "What if I change my phone?",
        a: "While you still have your old device, create an encrypted .xercly backup and keep its password safe. Cloud sync is not active in this version. We cannot recover a forgotten backup password.",
      },
      {
        q: "How much does Xercly cost?",
        a: "Launch pricing and any paid features will be shown on the store listing. No price or free-use period has been announced yet.",
      },
    ],
  },
  download: {
    eyebrow: "A CLEARER PLACE TO START",
    title: ["Make room", "for clarity."],
    body: "A little attention to everyday spending. A clearer view of your budget.",
    note: "In development for iOS and Android.",
  },
  footer: {
    tagline: "A clearer view of everyday finances.",
    copyright: "© 2026 Xercly.",
    local: "Presentation preview",
    back: "Home",
    top: "Back to top",
    privacy: "Privacy policy",
    terms: "Terms & conditions",
    agreement: "User agreement",
    deletion: "Account deletion",
    support: "Support",
  },
  legal: {
    eyebrow: "INFORMATION & DOCUMENTS",
    draft: "Draft",
    draftNote:
      "This document will be completed with legal and operational details before publication. Unconfirmed fields are identified in the text.",
    effective: "Effective date: to be confirmed",
    contents: "On this page",
    back: "Back to all pages",
    unavailable: "Online requests are not available in this local version.",
    contactPending: "A contact address will be added before release.",
    updated: "Prepared: 26 October 2026",
  },
  metadata: {
    title: "Xercly — Clear spending. A calmer everyday.",
    description:
      "A clearer view of everyday finances, with an app designed in Azerbaijani. Track your spending, follow your budget, and see where your money goes.",
  },
};
export const siteContent: Record<Locale, SiteContent> = { az, en };
