import type { Locale } from "@/lib/i18n";
export const documentSlugs = [
  "privacy",
  "terms",
  "user-agreement",
  "delete-account",
  "support",
] as const;
export type DocumentSlug = (typeof documentSlugs)[number];
export type DocumentSection = {
  id: string;
  title: string;
  paragraphs: string[];
};
export type LegalDocument = {
  title: string;
  summary: string;
  sections: DocumentSection[];
};
export function isDocumentSlug(value: string): value is DocumentSlug {
  return documentSlugs.some((slug) => slug === value);
}
export const documents: Record<Locale, Record<DocumentSlug, LegalDocument>> = {
  az: {
    privacy: {
      title: "Məxfilik siyasəti",
      summary:
        "Hansı məlumatların işlənildiyi, harada saxlandığı və seçimlərini necə idarə edə biləcəyin haqqında.",
      sections: [
        {
          id: "operator",
          title: "1. Məlumatlara kim cavabdehdir?",
          paragraphs: [
            "Məlumatlara cavabdeh: [hüquqi şəxs və ya fərdi sahibkarın tam adı]. Ünvan: [hüquqi ünvan]. Məxfilik müraciətləri: [işlək e-poçt]. Qüvvəyə minmə tarixi buraxılışdan əvvəl təsdiqlənəcək.",
            "Bu siyasət Xercly mobil tətbiqində və [rəsmi sayt ünvanı] saytında məlumatların işlənməsini izah edir. Giriş və bildiriş xidmətlərini aktivləşdirmək maliyyə qeydlərinin avtomatik buluda köçürülməsi demək deyil.",
          ],
        },
        {
          id: "financial-data",
          title: "2. Maliyyə qeydlərin",
          paragraphs: [
            "Daxil etdiyin məbləğ, valyuta, tarix, kateqoriya, hesab adı, qeyd və idxal etdiyin fayldan seçilmiş əməliyyat məlumatları uçot, büdcə və hesabat üçün işlənir. Mobil maliyyə bazası cihazda şifrələnir.",
            "Kart adı və son dörd rəqəm bank hesabına giriş vermir. Tam kart nömrəsi, PIN, CVV və bank şifrəsini tətbiqə və dəstək müraciətlərinə daxil etmə.",
          ],
        },
        {
          id: "sources",
          title: "3. Bildirişlər və avtomatik mənbələr",
          paragraphs: [
            "Avtomatik toplamanı aktivləşdirdikdə seçilmiş mənbələrdən bildiriş məzmunu və ya iOS avtomatlaşdırmasının ötürdüyü sahələr əməliyyat namizədi yaratmaq üçün cihazda işlənə bilər. Bildirişə çıxış tətbiq açıq olmayanda da işləyə bilər. Gələn namizədlər yoxlama tələb edir.",
            "Ödənişə aid mənbə sübutu lokal saxlanır. İcazənin məqsədi və əhatəsi aktivləşdirmədən əvvəl ayrıca izah edilməlidir. Bu siyasəti qəbul etmək həmin icazələri vermək demək deyil.",
          ],
        },
        {
          id: "online-services",
          title: "4. Giriş, push və texniki məlumatlar",
          paragraphs: [
            "Onlayn girişdən istifadə etdikdə aktiv provayderin təqdim etdiyi hesab identifikatoru, e-poçt və profil məlumatları autentifikasiya üçün işlənə bilər. Buraxılışda əlçatan giriş provayderləri: [təsdiqlənmiş siyahı].",
            "Push bildirişlərini aktivləşdirdikdə cihazın bildiriş tokeni və çatdırılma üçün zəruri texniki məlumatlar bildiriş xidməti vasitəsilə işlənir. İcazəni telefon ayarlarında dəyişə bilərsən.",
            "Buraxılışda Firebase Authentication və Firebase Cloud Messaging kimi onlayn xidmətlər aktivləşdirilərsə, onlar ayrıca məlumat emal edə bilər. Buraxılışdakı xidmət siyahısı və aktivləşmə vəziyyəti təsdiqlənməlidir. Maliyyə qeydlərinin cihazda qalması bütün texniki məlumatların da cihazdan çıxmaması demək deyil.",
          ],
        },
        {
          id: "support-website",
          title: "5. Sayt və dəstək müraciətləri",
          paragraphs: [
            "Bizimlə əlaqə saxladıqda göndərdiyin əlaqə məlumatını və mesajı müraciəti cavablandırmaq üçün işləyirik. Mesaja kart məlumatı, şifrə və şəxsi maliyyə çıxarışı əlavə etmə.",
            "Bu lokal sayt analitika, reklam izləyicisi, qeydiyyat və məlumat göndərən forma quraşdırmır. Canlı hostinqin texniki giriş jurnalları, cookie və mümkün analitika istifadəsi yayımdan əvvəl ayrıca təsdiqlənəcək: [provayder, məlumat növləri, məqsəd və müddət].",
          ],
        },
        {
          id: "storage",
          title: "6. Saxlanma və üçüncü tərəflər",
          paragraphs: [
            "Bu təqdimat versiyasında maliyyə məlumatlarının bulud sinxronlaşması aktiv deyil. Lokal qeydlərin server ehtiyat nüsxəsi kimi təqdim edilmir. Telefon dəyişməzdən əvvəl ayrıca ehtiyat nüsxə yarat.",
            "Özün yaratdığın ixrac və şifrəli ehtiyat nüsxə faylları seçdiyin yerdə qalır. Adi CSV ixracı şifrəli ehtiyat nüsxə deyil. Paylaşdığın və başqa xidmətdə saxladığın fayllara həmin xidmətin qaydaları da aid ola bilər.",
            "Cihaz kilidi üçün biometrik yoxlamanı əməliyyat sistemi yerinə yetirir; Xercly biometrik şablonu almır. Şifrəli ehtiyat nüsxənin unudulmuş şifrəsini bərpa edə bilmirik.",
            "Buraxılışda istifadə olunan xidmət təminatçıları, emal ölkələri, emalın hüquqi əsasları və beynəlxalq ötürmə təminatları: [tamamlanmalıdır]. Planlaşdırılan maliyyə server regionu bütün provayder məlumatlarının yalnız həmin regionda işlənəcəyinə zəmanət vermir.",
            "Şəxsi və maliyyə məlumatlarını satmamaq bu qaralamanın təklif etdiyi siyasətdir və operator tərəfindən təsdiqlənməlidir. Paylaşma açıqlanmış xidmətin göstərilməsi, sənin başladığın ixrac və ya tətbiq olunan hüquqi öhdəliklə məhdudlaşmalıdır.",
          ],
        },
        {
          id: "choices",
          title: "7. Seçimlərin və hüquqların",
          paragraphs: [
            "Avtomatik toplama və bildiriş icazələrini ləğv edə bilərsən. İcazənin ləğvi əvvəl yaradılmış qeydləri avtomatik silmir. Tətbiqdə qeydlərini düzəldə və ixrac edə bilərsən.",
            "Məlumata çıxış, düzəliş, silinmə və tətbiq olunan qanunvericiliyə əsasən digər hüquqların barədə [məxfilik əlaqəsi] vasitəsilə müraciət edə bilərsən. Ayrı razılıq tələb olunan məqsədlər üçün seçim ayrıca təqdim edilməlidir.",
          ],
        },
        {
          id: "retention",
          title: "8. Saxlanma müddəti və silinmə",
          paragraphs: [
            "Lokal maliyyə qeydləri onları silənədək və ya lokal saxlanmanı təmizləyənədək cihazda qalır. Tək əməliyyatı silmək əlaqəli mənbə sübutlarının və təkrarların qarşısını alan bütün texniki izlərin dərhal fiziki silinməsi demək deyil. Buraxılışda bunların kateqoriyaları və müddətləri açıqlanmalıdır.",
            "Onlayn hesab məlumatları, bildiriş tokenləri, texniki jurnallar, dəstək müraciətləri və server ehtiyat nüsxələri üzrə saxlanma müddətləri: [hər kateqoriya üçün müddət və səbəb]. Silinmə sorğusunun real icra müddəti və hüquqi saxlanma istisnaları: [təsdiqlənməlidir].",
            "Onlayn hesabın silinməsi cihazdakı lokal bölməni və özün ixrac etdiyin nüsxələri avtomatik silmir. Hesabın silinməsi səhifəsində fərqli seçimlərin nəticələri izah edilir. Özün saxladığın və paylaşdığın faylları ayrıca silməlisən.",
          ],
        },
        {
          id: "children-changes",
          title: "9. Yaş həddi və dəyişikliklər",
          paragraphs: [
            "Tətbiqin nəzərdə tutulan yaş qrupu və uşaqlara aid siyasət buraxılış bazarına uyğun təsdiqlənməlidir. Bu qaralama uşaqlar üçün ayrıca xidmət vədi vermir.",
            "Məlumatların işlənməsində mühüm dəyişiklik olduqda siyasət yenilənəcək. Tətbiq olunan hallarda ayrıca məlumatlandırma və razılıq axını təqdim edilməlidir. Yekun sənəddə qüvvəyə minmə tarixi göstəriləcək.",
          ],
        },
      ],
    },
    terms: {
      title: "İstifadə şərtləri",
      summary:
        "Xercly xidmətindən istifadə, qeydlərin dəqiqliyi və qarşılıqlı öhdəliklər haqqında.",
      sections: [
        {
          id: "parties",
          title: "1. Tərəflər və əhatə",
          paragraphs: [
            "Bu şərtlər [operatorun hüquqi adı] və Xercly istifadəçisi arasındakı xidmət münasibətini izah edir. Hüquqi ünvan: [ünvan]. Əlaqə: [e-poçt]. Qüvvəyə minmə tarixi: [təsdiqlənməlidir].",
          ],
        },
        {
          id: "purpose",
          title: "2. Xidmətin məqsədi",
          paragraphs: [
            "Xercly şəxsi maliyyə qeydlərini təşkil etmək, büdcə yaratmaq və hesabatlara baxmaq üçün vasitədir. Bank, ödəniş, investisiya və ya fərdi maliyyə məsləhəti xidməti deyil. Tətbiqdə görünən qeydlər bankın rəsmi çıxarışını əvəz etmir.",
          ],
        },
        {
          id: "accuracy",
          title: "3. Məlumatın dəqiqliyi",
          paragraphs: [
            "Hesabatlar daxil edilmiş və qəbul edilmiş qeydlərə əsaslanır. Bildiriş və idxal mənbələri natamam və ya səhv ola bilər. Məbləği, valyutanı, tarixi və təkrarları yoxla. Avtomatik toplamanın bütün bank və cihazlarda işləməsi və bütün əməliyyatları tutması vəd edilmir.",
            "Hesablar arasındakı köçürmə gəlir və ya xərc kimi qəbul edilməməlidir. Ayrı valyutalar avtomatik çevrilərək birləşdirilmir. Maliyyə qərarı verməzdən əvvəl rəsmi hesab çıxarışını da yoxla.",
          ],
        },
        {
          id: "account",
          title: "4. Hesabın və cihazın təhlükəsizliyi",
          paragraphs: [
            "Yalnız səlahiyyətin olan məlumatları daxil et. Cihazını, giriş vasitələrini və ehtiyat nüsxə şifrələrini qoru. Tətbiq daxilində hesab və ya kart yaratmaq banka qoşulma yaratmır.",
            "İstəyə bağlı icazələri telefon ayarlarında idarə edə bilərsən. Tətbiqi silmək və hesabdan çıxmaq onlayn hesabın silinməsini əvəz etmir.",
          ],
        },
        {
          id: "acceptable-use",
          title: "5. Məqbul istifadə",
          paragraphs: [
            "Xidmətdən qanunsuz məqsədlə, başqa şəxsin hesabına icazəsiz giriş üçün və ya sistemin təhlükəsizliyini pozmaq üçün istifadə etmə. Qanunun icazə verdiyi araşdırma və digər məcburi hüquqlar bu şərtlərlə ləğv edilmir.",
          ],
        },
        {
          id: "pricing",
          title: "6. Qiymət və ödənişlər",
          paragraphs: [
            "Qiymət, abunəlik və ödənişli imkan tətbiq edilərsə, alışdan əvvəl ayrıca göstərilməlidir. Bu qaralama abunəlik və ödəniş öhdəliyi yaratmır. Mağaza vasitəsilə alışlara həmin mağazanın tətbiq olunan ödəniş və geri qaytarma qaydaları da aid ola bilər.",
          ],
        },
        {
          id: "changes-backups",
          title: "7. Dəyişikliklər və ehtiyat nüsxə",
          paragraphs: [
            "İmkanlar platformaya və versiyaya görə fərqlənə bilər. Mühüm xidmət dəyişiklikləri barədə uyğun məlumat verilməlidir. Telefonu dəyişməzdən və ya tətbiqi silməzdən əvvəl saxlamaq istədiyin məlumatları ixrac et və şifrəli ehtiyat nüsxə yarat.",
            "Bu versiyada maliyyə sinxronlaşması aktiv deyil. İtirilmiş lokal məlumatın və unudulmuş ehtiyat nüsxə şifrəsinin bərpası vəd edilmir.",
          ],
        },
        {
          id: "liability",
          title: "8. Məsuliyyət və məcburi hüquqlar",
          paragraphs: [
            "Məlumatın tamlığı, avtomatik toplamanın fasiləsizliyi və itirilmiş məlumatın bərpası vəd edilmir. Məcburi istehlakçı hüquqları və qanunla məhdudlaşdırılması mümkün olmayan məsuliyyət qüvvədə qalır. Digər məsuliyyət hədləri buraxılış yurisdiksiyasına uyğun ayrıca hüquqi baxış tələb edir.",
          ],
        },
        {
          id: "ending-disputes",
          title: "9. Dayandırma və mübahisələr",
          paragraphs: [
            "Xidmətdən istifadəni dayandıra və məlumatlarının silinməsini tələb edə bilərsən. Operatorun xidməti məhdudlaşdırma səbəbləri, xəbərdarlıq qaydası, tətbiq olunan hüquq və mübahisə proseduru: [təsdiqlənməlidir].",
            "Məxfilik siyasəti məlumatların emalını, İstifadəçi razılaşması proqram lisenziyasını izah edir. Yekun sənədlər arasındakı hüquqi üstünlük sırası yayımdan əvvəl təsdiqlənməlidir.",
          ],
        },
      ],
    },
    "user-agreement": {
      title: "İstifadəçi razılaşması",
      summary:
        "Proqramdan istifadə hüququn, məlumatların üzərində nəzarətin və ayrıca seçimlərin haqqında.",
      sections: [
        {
          id: "introduction",
          title: "1. Razılaşmanın tərəfləri",
          paragraphs: [
            "Bu razılaşma [operatorun hüquqi adı] tərəfindən təqdim edilən Xercly proqramından şəxsi istifadə qaydasını müəyyən edir. Qüvvəyə minmə tarixi və əlaqə məlumatları buraxılışdan əvvəl tamamlanmalıdır. İstifadə şərtləri xidmət davranışını, Məxfilik siyasəti məlumatların emalını izah edir.",
          ],
        },
        {
          id: "license",
          title: "2. İstifadə lisenziyası",
          paragraphs: [
            "Tətbiqi qanuni əldə etdikdə sənə şəxsi məqsədlər üçün məhdud, qeyri-müstəsna istifadə hüququ verilir. Proqramın müəlliflik və digər əqli mülkiyyət hüquqları müvafiq hüquq sahiblərində qalır. Məcburi qanuni hüquqların saxlanılır.",
          ],
        },
        {
          id: "your-data",
          title: "3. Sənin məlumatların",
          paragraphs: [
            "Maliyyə qeydlərin üzərində hüquqlarını bu razılaşma ilə bizə vermirsən. Məlumat yalnız Məxfilik siyasətində açıqlanmış məqsədlər və verdiyin icazələr çərçivəsində işlənməlidir. Yalnız özünə aid və ya istifadə etməyə səlahiyyətin olan məlumatları daxil et.",
          ],
        },
        {
          id: "permissions",
          title: "4. Razılıqlar ayrı seçimlərdir",
          paragraphs: [
            "Bu razılaşmanı qəbul etmək bildiriş oxuma, push bildirişi, marketinq və ya bulud sinxronlaşmasına ümumi razılıq deyil. Tələb olunan hallarda həmin seçimlər ayrıca izah və açıq razılıq ilə təqdim edilməlidir. İcazələri telefon ayarlarında dəyişə bilərsən.",
          ],
        },
        {
          id: "backup",
          title: "5. Ehtiyat nüsxə və ixrac",
          paragraphs: [
            "İxrac etdiyin faylların saxlanması və paylaşılmasına özün nəzarət edirsən. Adi CSV faylı şifrəli ehtiyat nüsxə deyil. Şifrəli ehtiyat nüsxənin şifrəsini itirsən, nüsxəni bərpa etmək mümkün olmaya bilər. Telefonu dəyişməzdən əvvəl ehtiyat nüsxəni təhlükəsiz saxla.",
          ],
        },
        {
          id: "termination",
          title: "6. İstifadənin bitirilməsi",
          paragraphs: [
            "Tətbiqdən istifadəni dayandırmaq, onlayn hesabı silmək və lokal məlumatı təmizləmək fərqli nəticələr verə bilər. Hesabın silinməsi səhifəsi bu seçimləri izah edir. Özün saxladığın faylların ayrıca silinməsi tələb oluna bilər.",
          ],
        },
        {
          id: "store-license",
          title: "7. Mağaza lisenziyası",
          paragraphs: [
            "Apple standart EULA-sı və ya ayrıca xüsusi EULA seçimi təsdiqlənməyib. Bu qaralama Apple üçün tam xüsusi EULA kimi təqdim edilmir. Platforma üzrə yekun lisenziya şərtləri və bu sənədlərlə münasibəti yayımdan əvvəl müəyyənləşdirilməlidir.",
            "Qanunun qoruduğu istehlakçı hüquqları və məhdudlaşdırılması mümkün olmayan öhdəliklər qüvvədə qalır.",
          ],
        },
      ],
    },
    "delete-account": {
      title: "Hesabını və məlumatlarını sil",
      summary:
        "Onlayn hesabın, cihazdakı qeydlərin və ehtiyat nüsxələrin arasındakı fərqi bil.",
      sections: [
        {
          id: "availability",
          title: "1. Müraciətin mövcudluğu",
          paragraphs: [
            "Bu lokal təqdimat versiyasında onlayn hesab silinməsi müraciəti qəbul edilmir. Bu səhifə məlumat verir; heç bir sorğu göndərmir və hesabı silmir. Canlı müraciət yolu və əlaqə ünvanı buraxılışdan əvvəl əlavə olunacaq.",
          ],
        },
        {
          id: "before-deletion",
          title: "2. Davam etməzdən əvvəl",
          paragraphs: [
            "Saxlamaq istədiyin qeydləri ixrac et və lazım gələrsə şifrəli ehtiyat nüsxə yarat. Hesabın silinməsi hesabı müvəqqəti dondurmaq deyil; nəticələri və bərpa imkanları təsdiqdən əvvəl göstərilməlidir. Hesabdan çıxmaq hesabı silmir.",
          ],
        },
        {
          id: "online-account",
          title: "3. Onlayn hesab və server məlumatları",
          paragraphs: [
            "Canlı xidmət aktiv olduqda hesabın silinməsi hesabı və onunla əlaqəli server məlumatlarını əhatə etməlidir. Şəxsiyyətin təhlükəsiz təsdiqi, silinəcək məlumatlar, qanuni saxlanma istisnaları və real icra müddəti yayımdan əvvəl dəqiqləşdiriləcək.",
            "Maliyyə sinxronlaşması bu versiyada aktiv deyil. Giriş və push xidmətlərinin məlumatları maliyyə qeydlərindən ayrıca qiymətləndirilməlidir. Serverdə maliyyə ehtiyat nüsxəsi varmış kimi davranılmır.",
          ],
        },
        {
          id: "local-records",
          title: "4. Cihazdakı lokal qeydlər",
          paragraphs: [
            "Onlayn hesabın silinməsi cihazdakı lokal məlumat bölməsini avtomatik silmir. Lokal qeydlər ayrıca təmizlənməlidir. Dəqiq tətbiqdaxili addımlar buraxılışda mövcud olan axına uyğun əlavə ediləcək. Tətbiqi yenidən quraşdırmaq veb müraciətinin şərti olmayacaq.",
          ],
        },
        {
          id: "exported-files",
          title: "5. Özün saxladığın fayllar",
          paragraphs: [
            "CSV ixraclarını, .xercly ehtiyat nüsxələrini və paylaşdığın faylları saxladığın yerlərdən ayrıca silməlisən. Biz sənin seçdiyin qovluqda və ya başqa xidmətdə saxladığın nüsxələri avtomatik silə bilmirik.",
          ],
        },
        {
          id: "future-request",
          title: "6. Buraxılışda müraciət yolu",
          paragraphs: [
            "Veb səhifə hesabın təhlükəsiz təsdiqi, silinəcək və saxlanacaq məlumatların izahı, aydın təsdiq və sorğunun nəticəsi ilə tamamlanmalıdır. İcra müddəti: [təsdiqlənməlidir]. Əlaqə: [işlək e-poçt].",
            "Hesab silinməsi üçün açıq formaya kart nömrəsi, hesab şifrəsi və ya maliyyə çıxarışı göndərmə. Bu qaralama tamamlanmış mağaza silinmə xidməti kimi təqdim edilmir.",
          ],
        },
      ],
    },
    support: {
      title: "Kömək lazımdır?",
      summary:
        "Sualını rahat izah et. Şəxsi maliyyə məlumatlarını özündə saxla.",
      sections: [
        {
          id: "contact",
          title: "1. Bizimlə əlaqə",
          paragraphs: [
            "Dəstək ünvanı buraxılışdan əvvəl əlavə ediləcək: [dəstək e-poçtu]. Bu lokal versiyada əlaqə forması yoxdur və mesaj göndərilmir. Cavab müddəti elan edilməyib.",
          ],
        },
        {
          id: "helpful-details",
          title: "2. Müraciətində nəyi qeyd et?",
          paragraphs: [
            "Sualını, qarşılaşdığın addımı, tətbiqin versiyasını, telefon modelini və əməliyyat sisteminin versiyasını qeyd et. Xəta mesajı varsa, şəxsi məlumatları çıxararaq mətnini əlavə et.",
          ],
        },
        {
          id: "keep-private",
          title: "3. Hansı məlumatları göndərmə?",
          paragraphs: [
            "Kart nömrəsi, PIN, CVV, giriş şifrəsi, təsdiq kodu, ehtiyat nüsxə şifrəsi və şəxsi maliyyə çıxarışı göndərmə. Ekran şəkli əlavə edirsənsə, məbləğ və şəxsi məlumatları əvvəl gizlət.",
          ],
        },
        {
          id: "backups",
          title: "4. Ehtiyat nüsxə və telefon dəyişmə",
          paragraphs: [
            "Köhnə cihaz əlindəykən şifrəli .xercly ehtiyat nüsxəsini yarat. Faylı və şifrəsini təhlükəsiz saxla. Bu versiyada maliyyə bulud sinxronlaşması aktiv deyil. Unudulmuş şifrəni bərpa edə bilmirik.",
          ],
        },
        {
          id: "privacy-help",
          title: "5. Məxfilik və hesabın silinməsi",
          paragraphs: [
            "Məlumatların işlənməsi barədə Məxfilik siyasətinə bax. Onlayn hesabı, lokal qeydləri və ixrac fayllarını silmək arasındakı fərqlər Hesabın silinməsi səhifəsində izah edilir. İşlək müraciət yolu yayımdan əvvəl tamamlanmalıdır.",
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy policy",
      summary:
        "What information is processed, where it is stored, and how you can manage your choices.",
      sections: [
        {
          id: "operator",
          title: "1. Who is responsible for your information?",
          paragraphs: [
            "Data controller: [full legal name of the entity or sole trader]. Address: [legal address]. Privacy enquiries: [working email address]. The effective date will be confirmed before release.",
            "This policy explains data processing in the Xercly mobile app and at [official website address]. Enabling sign-in or notifications does not mean your financial records are automatically uploaded to the cloud.",
          ],
        },
        {
          id: "financial-data",
          title: "2. Your financial records",
          paragraphs: [
            "Amounts, currencies, dates, categories, account names, notes, and selected transaction data from imported files are processed for tracking, budgeting, and reports. The mobile financial database is encrypted on your device.",
            "A card name and its last four digits do not provide access to a bank account. Do not enter full card numbers, PINs, CVVs, or banking passwords in the app or support requests.",
          ],
        },
        {
          id: "sources",
          title: "3. Notifications and automatic sources",
          paragraphs: [
            "If you enable automatic capture, notification content from selected sources or fields supplied by iOS automation may be processed on your device to create transaction candidates. Notification access can operate while the app is not open. Incoming candidates require review.",
            "Payment source evidence is kept locally. The purpose and scope of access must be explained separately before activation. Accepting this policy does not grant those permissions.",
          ],
        },
        {
          id: "online-services",
          title: "4. Sign-in, push, and technical information",
          paragraphs: [
            "If you use online sign-in, the account identifier, email, and profile information supplied by the active provider may be processed for authentication. Sign-in providers available at release: [confirmed list].",
            "If you enable push notifications, the device notification token and technical information needed for delivery are processed through the notification service. You can change permission in your phone settings.",
            "If online services such as Firebase Authentication and Firebase Cloud Messaging are enabled in the released version, they may process information separately. The release service list and activation status must be confirmed. Keeping financial records on the device does not mean all technical information also stays on the device.",
          ],
        },
        {
          id: "support-website",
          title: "5. The website and support enquiries",
          paragraphs: [
            "When you contact us, we process the contact details and message you provide to respond to your enquiry. Do not include card information, passwords, or personal financial statements.",
            "This local website does not install analytics, advertising trackers, registration, or forms that transmit information. Technical access logs, cookies, and any analytics used by live hosting will be confirmed before publication: [provider, data categories, purpose, and retention period].",
          ],
        },
        {
          id: "storage",
          title: "6. Storage and service providers",
          paragraphs: [
            "Financial cloud sync is not active in this presentation version. Local records are not represented as a server backup. Create a separate backup before changing your phone.",
            "Exported files and encrypted backups you create stay in the location you choose. A normal CSV export is not an encrypted backup. Files you share or store with another service may also be subject to that service's terms.",
            "The operating system performs biometric checks for the device lock; Xercly does not receive your biometric template. We cannot recover a forgotten encrypted-backup password.",
            "Service providers used at release, processing countries, legal bases for processing, and international transfer safeguards: [to be completed]. A planned financial server region does not guarantee that every provider processes all data only in that region.",
            "Not selling personal or financial information is the policy proposed by this draft and requires the operator's confirmation. Sharing should be limited to the disclosed service, exports you initiate, or applicable legal obligations.",
          ],
        },
        {
          id: "choices",
          title: "7. Your choices and rights",
          paragraphs: [
            "You can revoke automatic capture and notification permissions. Revoking a permission does not automatically delete records already created. You can edit and export your entries in the app.",
            "For access, correction, deletion, and other rights under applicable law, contact [privacy contact]. Purposes that require separate consent must be presented as separate choices.",
          ],
        },
        {
          id: "retention",
          title: "8. Retention and deletion",
          paragraphs: [
            "Local financial records remain on the device until you delete them or clear the local storage. Deleting a single transaction does not necessarily physically erase all linked source evidence or technical traces used to prevent duplicates immediately. Their categories and retention periods must be disclosed at release.",
            "Retention periods for online account information, notification tokens, technical logs, support enquiries, and server backups: [period and reason for each category]. Actual deletion-request processing time and legal retention exceptions: [to be confirmed].",
            "Deleting an online account does not automatically remove the local vault or files you exported yourself. The Account deletion page explains the different choices. You must separately delete files you have saved or shared.",
          ],
        },
        {
          id: "children-changes",
          title: "9. Age policy and changes",
          paragraphs: [
            "The intended age group and policy concerning children must be confirmed for the release markets. This draft does not promise a dedicated service for children.",
            "The policy will be updated if data processing changes materially. Separate notice and consent must be provided where applicable. The final document will state its effective date.",
          ],
        },
      ],
    },
    terms: {
      title: "Terms & conditions",
      summary:
        "Using the Xercly service, the accuracy of your records, and the responsibilities involved.",
      sections: [
        {
          id: "parties",
          title: "1. Parties and coverage",
          paragraphs: [
            "These terms describe the service relationship between [operator's legal name] and the Xercly user. Legal address: [address]. Contact: [email]. Effective date: [to be confirmed].",
          ],
        },
        {
          id: "purpose",
          title: "2. Purpose of the service",
          paragraphs: [
            "Xercly is a tool for organising personal financial records, setting budgets, and viewing reports. It is not a banking, payment, investment, or personal financial advice service. Entries in the app do not replace an official bank statement.",
          ],
        },
        {
          id: "accuracy",
          title: "3. Accuracy of information",
          paragraphs: [
            "Reports are based on entered and accepted records. Notification and import sources may be incomplete or incorrect. Check amounts, currencies, dates, and duplicates. Automatic capture is not promised to work with every bank or device or capture every transaction.",
            "Transfers between your accounts should not be treated as income or expenses. Separate currencies are not automatically converted and combined. Check your official account statement before making financial decisions.",
          ],
        },
        {
          id: "account",
          title: "4. Account and device security",
          paragraphs: [
            "Only enter information you are authorised to use. Protect your device, sign-in methods, and backup passwords. Creating an account or card entry in the app does not establish a bank connection.",
            "You can manage optional permissions in your phone settings. Uninstalling the app or signing out does not replace online account deletion.",
          ],
        },
        {
          id: "acceptable-use",
          title: "5. Acceptable use",
          paragraphs: [
            "Do not use the service for unlawful purposes, unauthorised access to another person's account, or compromising system security. Research and other mandatory rights permitted by law are not removed by these terms.",
          ],
        },
        {
          id: "pricing",
          title: "6. Pricing and payments",
          paragraphs: [
            "If pricing, subscriptions, or paid features are introduced, they must be shown separately before purchase. This draft does not create a subscription or payment obligation. Purchases through an app store may also be subject to that store's applicable payment and refund rules.",
          ],
        },
        {
          id: "changes-backups",
          title: "7. Changes and backups",
          paragraphs: [
            "Features can differ by platform and version. Material service changes should be communicated appropriately. Before changing your phone or uninstalling the app, export information you want to keep and create an encrypted backup.",
            "Financial sync is not active in this version. Recovery of lost local data or a forgotten backup password is not promised.",
          ],
        },
        {
          id: "liability",
          title: "8. Liability and mandatory rights",
          paragraphs: [
            "Completeness of records, uninterrupted automatic capture, and recovery of lost information are not promised. Mandatory consumer rights and liability that cannot legally be limited remain in effect. Other liability limits require a separate legal review for the release jurisdiction.",
          ],
        },
        {
          id: "ending-disputes",
          title: "9. Ending use and resolving disputes",
          paragraphs: [
            "You can stop using the service and request deletion of your information. The operator's grounds for restricting service, notice process, governing law, and dispute procedure: [to be confirmed].",
            "The Privacy policy explains data processing; the User agreement explains the software licence. The legal precedence between the final documents must be confirmed before publication.",
          ],
        },
      ],
    },
    "user-agreement": {
      title: "User agreement",
      summary:
        "Your software licence, your control over your information, and your separate choices.",
      sections: [
        {
          id: "introduction",
          title: "1. Parties to the agreement",
          paragraphs: [
            "This agreement sets out personal use of Xercly software provided by [operator's legal name]. The effective date and contact details must be completed before release. The Terms & conditions describe service use; the Privacy policy explains data processing.",
          ],
        },
        {
          id: "license",
          title: "2. Licence to use the software",
          paragraphs: [
            "When you lawfully obtain the app, you receive a limited, non-exclusive right to use it for personal purposes. Copyright and other intellectual property rights in the software remain with their respective owners. Your mandatory legal rights are preserved.",
          ],
        },
        {
          id: "your-data",
          title: "3. Your information",
          paragraphs: [
            "You do not transfer ownership of your financial records to us through this agreement. Information must only be processed for purposes disclosed in the Privacy policy and within the permissions you grant. Only enter information that belongs to you or that you are authorised to use.",
          ],
        },
        {
          id: "permissions",
          title: "4. Permissions are separate choices",
          paragraphs: [
            "Accepting this agreement is not blanket consent to notification access, push notifications, marketing, or cloud sync. Where required, those choices must be explained separately and require affirmative consent. You can change permissions in your phone settings.",
          ],
        },
        {
          id: "backup",
          title: "5. Backups and exports",
          paragraphs: [
            "You control storage and sharing of exported files. A normal CSV file is not an encrypted backup. If you lose the password for an encrypted backup, restoring that backup may not be possible. Keep a safe backup before changing your phone.",
          ],
        },
        {
          id: "termination",
          title: "6. Ending use",
          paragraphs: [
            "Stopping use of the app, deleting an online account, and clearing local records can have different effects. The Account deletion page explains these choices. You may need to separately delete files you have saved yourself.",
          ],
        },
        {
          id: "store-license",
          title: "7. App store licence",
          paragraphs: [
            "The choice between Apple's standard EULA and a custom EULA has not been confirmed. This draft is not presented as a complete custom Apple EULA. Final platform licence terms and their relationship with these documents must be settled before publication.",
            "Consumer rights protected by law and obligations that cannot be excluded remain in effect.",
          ],
        },
      ],
    },
    "delete-account": {
      title: "Delete your account and data",
      summary:
        "Understand the difference between your online account, records on your device, and backup files.",
      sections: [
        {
          id: "availability",
          title: "1. Request availability",
          paragraphs: [
            "This local presentation version does not accept online account deletion requests. This page provides information; it does not submit a request or delete an account. A live request path and contact address will be added before release.",
          ],
        },
        {
          id: "before-deletion",
          title: "2. Before you continue",
          paragraphs: [
            "Export records you want to keep and create an encrypted backup if needed. Deletion is not temporary account suspension; consequences and any recovery options must be explained before confirmation. Signing out does not delete your account.",
          ],
        },
        {
          id: "online-account",
          title: "3. Online account and server information",
          paragraphs: [
            "When the live service is active, deletion should cover the account and associated server information. Secure identity verification, the information removed, legal retention exceptions, and actual processing time will be confirmed before release.",
            "Financial sync is not active in this version. Information processed by sign-in and push services must be assessed separately from financial records. The service is not represented as holding a financial server backup.",
          ],
        },
        {
          id: "local-records",
          title: "4. Local records on your device",
          paragraphs: [
            "Deleting an online account does not automatically clear the local vault on your device. Local records must be cleared separately. Exact in-app instructions will be added to match the release flow. Reinstalling the app will not be a requirement for making a web request.",
          ],
        },
        {
          id: "exported-files",
          title: "5. Files you saved yourself",
          paragraphs: [
            "Separately delete CSV exports, .xercly backups, and shared files from the places where you stored them. We cannot automatically remove copies you keep in your own folders or with other services.",
          ],
        },
        {
          id: "future-request",
          title: "6. Request path at release",
          paragraphs: [
            "The web page must be completed with secure account verification, an explanation of information deleted or retained, clear confirmation, and request status. Processing time: [to be confirmed]. Contact: [working email address].",
            "Do not send card numbers, account passwords, or financial statements through an open deletion form. This draft is not presented as a completed app-store deletion service.",
          ],
        },
      ],
    },
    support: {
      title: "Need a hand?",
      summary:
        "Tell us what happened. Keep your personal financial information private.",
      sections: [
        {
          id: "contact",
          title: "1. Contact us",
          paragraphs: [
            "A support address will be added before release: [support email]. This local version has no contact form and does not send messages. A response time has not been announced.",
          ],
        },
        {
          id: "helpful-details",
          title: "2. What to include",
          paragraphs: [
            "Describe your question and the step where you encountered the issue. Include the app version, phone model, and operating system version. If an error message appears, include its text after removing personal information.",
          ],
        },
        {
          id: "keep-private",
          title: "3. What not to send",
          paragraphs: [
            "Do not send card numbers, PINs, CVVs, sign-in passwords, verification codes, backup passwords, or personal financial statements. If you include a screenshot, hide amounts and personal information first.",
          ],
        },
        {
          id: "backups",
          title: "4. Backups and changing your phone",
          paragraphs: [
            "Create an encrypted .xercly backup while you still have your old device. Keep the file and password safe. Financial cloud sync is not active in this version. We cannot recover a forgotten password.",
          ],
        },
        {
          id: "privacy-help",
          title: "5. Privacy and account deletion",
          paragraphs: [
            "Read the Privacy policy for information about data processing. The Account deletion page explains the difference between deleting an online account, local records, and exported files. A working request path must be completed before publication.",
          ],
        },
      ],
    },
  },
};
