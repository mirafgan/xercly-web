# Xercly — sayt konsepti və məzmun qaralaması

26 oktyabr 2026 · Dizayn təsdiqi üçün · İmplementasiya planı deyil

## Vizual istiqamət

Mövcud tətbiqin rəngləri saxlanır: fon `#FBFCF9`, əsas mətn `#183D2B`, yaşıl `#20623E`, açıq yaşıl `#EAF0E6`, sərhəd `#DDE5DA`. Böyük, aydın sans-serif başlıqlar, geniş boşluqlar, nazik ayırıcılar və az sayda iri kompozisiya. Şrift Azərbaycan əlifbasını və ₼ işarəsini tam göstərməlidir.

Əsas kompozisiya: solda başlıq və mağaza keçidləri, sağda tətbiqin açıq mövzulu telefon maketi. Maketdəki məbləğlər sintetik nümunədir, real bank balansı deyil. Məxfilik bölməsi tünd yaşıl fonla səhifənin ritmini dəyişir. Mobil görünüşdə başlıqdan sonra mağaza düymələri və telefon gəlir; məzmun bir sütuna keçir.

Parallax: scroll ilə telefonun arxasındakı açıq yaşıl forma təxminən 40 px, telefon 16 px, ön kart 24 px fərqli istiqamətlərdə hərəkət edə bilər. Bunlar dizayn təklifidir, ölçülmüş performans nəticəsi deyil. Mətn və məbləğlər animasiya edilmir. Scroll normal qalır. Mobil ekranda amplituda azalır, reduced-motion seçildikdə parallax sönür. Hüquqi səhifələrdə parallax yoxdur.

App Store və Google Play ikonları konseptdə görünür. Təsdiqlənmiş mağaza ünvanları yoxdur; ilkin görünüşdə hər biri “Tezliklə” statusu ilə təqdim edilir. Yayımdan sonra rəsmi mağaza badge faylları və real keçidlər istifadə olunmalıdır. Mövcud olmayan mağaza keçidi, yükləmə sayı və istifadəçi rəyi yaradılmır.

## Ana səhifə — hazır mətn

**Naviqasiya:** İmkanlar · Necə işləyir · Məxfilik · Suallar

**Yuxarı düymə:** Tətbiqi kəşf et

**Kiçik başlıq:** GÜNDƏLİK MALİYYƏNƏ AYDIN BAXIŞ

**Əsas başlıq:** Xərclərin aydın. Həyatın rahat.

**Təsvir:** Xərclərini qeyd et, büdcəni izlə, pulunun hara getdiyini gör. Xercly gündəlik maliyyənə Azərbaycan dilində aydın baxış verir.

**Mağaza blokları:** App Store — Tezliklə / Google Play — Tezliklə

**Köməkçi keçid:** Necə işlədiyini gör ↓

**Telefon altı qeyd:** Nümunə məlumatlar. Göstəricilər qeydə alınmış əməliyyatlara əsaslanır.

**Qısa imkanlar sətri:** Əl ilə qeydiyyat · Aylıq büdcə · Aydın hesabatlar

### Pulun hara gedir? Aydın gör.

Market, nəqliyyat, gündəlik alışlar. Xərclərini kateqoriyalar üzrə gör, seçdiyin dövrləri müqayisə et və büdcəndə nə qədər yer qaldığını izlə.

- **Gündəlik qeydlərin bir yerdə.** Xərc, gəlir və öz hesabların arasındakı köçürmələri ayrı qeyd et.
- **Büdcənə uyğun ritm.** Aylıq və kateqoriya büdcələri ilə qeydə alınmış xərclərini izlə.
- **Hesabatların aydın olsun.** Dövr, hesab və valyuta üzrə bax. Ayrı valyutalar avtomatik çevrilərək birləşdirilmir.
- **Məlumatını özün gətir.** CSV və XLSX çıxarışlarını yoxlayaraq əlavə et, qeydlərini CSV kimi çıxar.

### Gündəlik vərdiş. Daha aydın büdcə.

**01 — Qeyd et.** Məbləği, kateqoriyanı və hesabı seç. İstəsən, çıxarış faylından başla.

**02 — Yoxla.** İdxal edilmiş və avtomatik mənbələrdən gələn qeydləri nəzərdən keçir. Natamam və mümkün təkrar qeydlər diqqətindən yayınmasın.

**03 — İzlə.** Ay ərzində qeydə alınmış xərclərini və büdcənin istifadəsini bir baxışda gör.

### Məxfiliyin ön planda.

Məlumatlarının idarəsi səndədir. Mobil tətbiq maliyyə qeydlərini cihazda şifrəli saxlayır. İstəyə bağlı icazələri özün seçir, məlumatlarını ixrac edə və şifrəli ehtiyat nüsxə yarada bilirsən.

**Aydın status:** Bu təqdimat versiyasında maliyyə məlumatlarının bulud sinxronlaşması aktiv deyil. Ehtiyat nüsxəni ayrıca saxla.

**Keçid:** Məxfilik siyasətini oxu ↗

### Xercly haqqında

Xercly gündəlik gəlir və xərclərini anlamaq istəyənlər üçün hazırlanmış şəxsi maliyyə tətbiqidir. Məqsədimiz qeydlərini toplamaq, büdcəni izləmək və maliyyə vərdişlərini görməyi rahatlaşdırmaqdır. Xercly bank xidməti göstərmir və hesabından ödəniş etmir.

### Sualın var?

**Bank hesabına qoşulurmu?** Hesab və ya kart adı əlavə etmək bank bağlantısı yaratmır. Xercly bütün bank tarixçəsini avtomatik əldə etdiyini iddia etmir.

**İnternetsiz istifadə edə bilərəm?** Əsas lokal qeydiyyat və hesabat funksiyalarından internetsiz istifadə edə bilərsən. Giriş və digər onlayn xidmətlər internet tələb edə bilər.

**Əməliyyatlar avtomatik əlavə olunurmu?** Platformaya uyğun bildiriş və iOS avtomatlaşdırma yolları üzərində iş gedir. Dəstək telefon, əməliyyat sistemi və mənbədən asılıdır; bütün qeydlərin tutulmasına zəmanət verilmir. Gələn namizədlər yoxlama tələb edir.

**Telefonumu dəyişsəm nə etməliyəm?** Köhnə cihaz əlindəykən şifrəli `.xercly` ehtiyat nüsxəsini yarat və şifrəsini təhlükəsiz saxla. Bulud sinxronlaşması bu versiyada aktiv deyil. Unudulmuş ehtiyat nüsxə şifrəsini bərpa edə bilmirik.

**Xercly ödənişlidir?** Buraxılış qiyməti və mümkün ödənişli imkanlar mağaza səhifəsində göstəriləcək. Bu konsept qiymət və ya pulsuz istifadə müddəti vəd etmir.

### Bu gündən daha aydın.

Gündəlik xərclərinə yer ayır. Büdcənə aydın bax.

App Store — Tezliklə · Google Play — Tezliklə

**Footer:** Xercly · Məxfilik siyasəti · İstifadə şərtləri · İstifadəçi razılaşması · Hesabın silinməsi · Dəstək

## Hüquqi səhifələrin dizaynı

Ortaq başlıq və footer; 720 px oxu sütunu, 16–18 px əsas mətn, aydın bölmə başlıqları. Desktop-da solda qısa mündəricat, mobil ekranda yığcam mündəricat açarı. Yuxarıda sənəd adı, qüvvəyə minmə tarixi və sadə xülasə. Sənəd HTML kimi açıq oxunur; giriş və PDF yükləməsi tələb olunmur. Hüquqi mətnlərin yanında download reklamı və hərəkətli vizual yoxdur.

Təklif olunan səhifələr: `/privacy`, `/terms`, `/user-agreement`, `/delete-account`, `/support`. Bunlar yaradılmış və ya yayımlanmış ünvanlar deyil.

## Məxfilik siyasəti — mətn qaralaması

**Status:** Dərc üçün hazır deyil. Kvadrat mötərizəli sahələr, buraxılışdakı xidmətlər və saxlanma müddətləri təsdiqlənməlidir. Bu mətn mağaza təsdiqi və hüquqi uyğunluq zəmanəti deyil.

**Qüvvəyə minmə tarixi:** [tarix]

**Məlumatlara cavabdeh:** [hüquqi şəxs və ya fərdi sahibkarın tam adı], [ünvan]. Məxfilik müraciətləri: [işlək e-poçt].

### Əhatə

Bu siyasət Xercly mobil tətbiqində və [rəsmi sayt ünvanı] saytında məlumatların işlənməsini izah edir. Giriş və bildiriş kimi xidmətləri aktivləşdirməyin maliyyə məlumatlarının avtomatik buluda köçürülməsi demək deyil.

### İşlənən məlumatlar və məqsədlər

**Maliyyə qeydləri:** daxil etdiyin məbləğ, valyuta, tarix, kateqoriya, hesab adı, qeyd və idxal etdiyin fayldakı seçilmiş əməliyyat məlumatları uçot, büdcə və hesabat üçün işlənir. Kart adı və son dörd rəqəm bank hesabına giriş vermir. Tam kart nömrəsi, PIN, CVV və bank şifrəsini daxil etmə.

**İcazəli mənbələr:** avtomatik toplamanı aktivləşdirdikdə seçilmiş mənbələrdən bildiriş məzmunu və ya iOS avtomatlaşdırmasının ötürdüyü sahələr əməliyyat namizədi yaratmaq üçün cihazda işlənə bilər. Bildirişə çıxış arxa planda da işləyə bilər. Orijinal ödəniş sübutu lokal saxlanır; bu mətn onun serverə ötürüldüyünü bildirmir. İcazə izahı aktivləşdirmədən əvvəl ayrıca göstərilməlidir.

**Giriş məlumatları:** onlayn girişdən istifadə etdikdə aktiv giriş provayderindən hesab identifikatoru, e-poçt və təqdim etdiyi profil məlumatları autentifikasiya üçün işlənə bilər. Buraxılışda əlçatan provayderlər: [təsdiqlənmiş siyahı].

**Bildiriş məlumatları:** push bildirişlərini aktivləşdirdikdə cihazın bildiriş tokeni və çatdırılma üçün zəruri texniki məlumatlar bildiriş xidməti vasitəsilə işlənir. İcazəni cihaz ayarlarında dəyişə bilərsən.

**Dəstək müraciətləri:** bizimlə əlaqə saxladıqda göndərdiyin əlaqə məlumatını və mesajı müraciəti cavablandırmaq üçün işləyirik. Mesaja kart məlumatı və ya maliyyə çıxarışı əlavə etmə.

**Sayt məlumatları:** hostinq provayderinin texniki giriş jurnalları, cookie və analitika istifadəsi buraxılışdan əvvəl ayrıca təsdiqlənəcək: [provayder, məlumat növləri, məqsədlər və müddətlər]. Konsept analitika və reklam izləyicisi quraşdırmır.

### Saxlanma və xidmət təminatçıları

Mobil maliyyə bazası cihazda şifrələnir. Özün yaratdığın ixrac və ehtiyat nüsxə faylları seçdiyin yerdə qalır; adi CSV ixracı şifrəli ehtiyat nüsxə deyil. Cihaz kilidi üçün biometrik yoxlamanı əməliyyat sistemi yerinə yetirir; tətbiqə biometrik şablon verilmir.

Bu təqdimat versiyasında maliyyə sinxronlaşması söndürülüb. Buraxılışda Firebase Authentication və Firebase Cloud Messaging kimi onlayn xidmətlər aktivləşdirilərsə, onlar ayrıca məlumat emal edə bilər. Buraxılışdakı xidmət siyahısı və aktivləşmə vəziyyəti təsdiqlənməlidir. Maliyyə qeydlərinin cihazda qalması bütün texniki məlumatların da cihazdan çıxmaması demək deyil.

Buraxılışda istifadə olunan xidmət təminatçıları, emal ölkələri və beynəlxalq ötürmə təminatları: [tamamlanmalıdır]. Maliyyə məlumatının planlaşdırılan server regionu xidmət təminatçılarının bütün məlumatları yalnız həmin regionda işlədiyinə zəmanət vermir.

Şəxsi və maliyyə məlumatlarını satmamaq bu qaralamanın təklif etdiyi siyasətdir; operator bunu təsdiqləməlidir. Məlumat yalnız açıqlanmış xidmətin göstərilməsi, sənin başladığın ixrac/paylaşma və ya tətbiq olunan hüquqi öhdəlik üçün zəruri olduqda paylaşılmalıdır.

### İcazələrin idarəsi və hüquqların

Avtomatik toplama və bildiriş icazələrini ləğv edə bilərsən. İcazənin ləğvi əvvəl yaradılmış qeydləri avtomatik silmir. Tətbiqdə qeydlərini düzəldə və ixrac edə bilərsən. Məlumata çıxış, düzəliş, silinmə və tətbiq olunan qanunvericiliyə əsasən digər hüquqların barədə [məxfilik əlaqəsi] vasitəsilə müraciət edə bilərsən.

### Saxlanma müddətləri və silinmə

Lokal maliyyə qeydləri onları silənədək və ya lokal saxlanmanı təmizləyənədək cihazda qalır. Əlaqəli qeydlər, təkrarların qarşısını alan texniki izlər və mənbə sübutlarının saxlanması ayrıca izah olunmalıdır. Tək əməliyyatı silmək bütün əlaqəli sübutların dərhal fiziki silinməsi demək deyil.

Onlayn hesab məlumatlarının, bildiriş tokenlərinin, texniki jurnalların, dəstək müraciətlərinin və server ehtiyat nüsxələrinin saxlanma müddətləri: [hər kateqoriya üzrə müddət və səbəb]. Silinmə müraciətinin icra müddəti və hüquqi səbəblə saxlanan istisnalar: [təsdiqlənməlidir]. Özün ixrac etdiyin faylları və başqa xidmətlərdə saxladığın nüsxələri ayrıca silməlisən.

Hesabın silinməsi qaydası `/delete-account` səhifəsində göstəriləcək. Onlayn hesabın silinməsi ilə cihazdakı lokal bölmənin silinməsi ayrı əməliyyatlardır; buraxılış axını hər ikisinin nəticəsini açıq göstərməlidir.

### Yaş həddi və yenilənmə

Tətbiqin nəzərdə tutulan yaş qrupu və uşaqlara aid siyasət: [buraxılış bazarına uyğun təsdiqlənməlidir]. Məqsədli emalda mühüm dəyişiklik olarsa siyasəti yeniləyəcək və tətbiq olunan hallarda ayrıca məlumatlandırma və razılıq axını təqdim edəcəyik.

## İstifadə şərtləri — mətn qaralaması

**Tərəflər və tarix:** [operatorun hüquqi adı] və Xercly istifadəçisi. Qüvvəyə minmə tarixi: [tarix]. Əlaqə: [e-poçt].

**Xidmətin məqsədi.** Xercly şəxsi maliyyə qeydlərini təşkil etmək, büdcə yaratmaq və hesabatlara baxmaq üçün vasitədir. Bank, ödəniş, investisiya və ya fərdi maliyyə məsləhəti xidməti deyil. Tətbiqdə görünən qeydlər bankın rəsmi çıxarışını əvəz etmir.

**Məlumatın dəqiqliyi.** Hesabatlar daxil edilmiş və qəbul edilmiş qeydlərə əsaslanır. Bildiriş və idxal mənbələri natamam və ya səhv ola bilər. Məlumatları, valyutanı, tarixi və təkrar qeydləri yoxlamağın vacibdir. Avtomatik toplama bütün bank və cihazlarda işləyən xidmət kimi təqdim edilmir.

**Hesab və cihaz.** Yalnız səlahiyyətin olan məlumatları daxil et. Cihazını, giriş vasitələrini və ehtiyat nüsxə şifrələrini qoru. Tətbiq daxilində hesab və ya kart yaratmaq banka qoşulma yaratmır.

**Məqbul istifadə.** Xidmətdən qanunsuz məqsədlə, başqa şəxsin hesabına icazəsiz giriş üçün və ya sistemin təhlükəsizliyini pozmaq üçün istifadə etmə. Qanunun icazə verdiyi araşdırma və digər hüquqlar bu şərtlərlə ləğv edilmir.

**Qiymət və ödənişlər.** Qiymət, abunəlik və ödənişli imkan tətbiq edilərsə, alışdan əvvəl ayrıca göstərilməlidir. Bu qaralama abunəlik yaratmır. Mağaza vasitəsilə alışlara həmin mağazanın tətbiq olunan ödəniş və geri qaytarma qaydaları da aid ola bilər.

**Xidmət dəyişiklikləri.** İmkanlar platformaya və versiyaya görə fərqlənə bilər. Mühüm dəyişikliklər barədə uyğun məlumat verilməlidir. Xidməti dayandırmazdan və ya cihazı dəyişməzdən əvvəl lazım olan məlumatları ixrac et.

**Məsuliyyət.** Məlumatın tamlığı, avtomatik toplamanın fasiləsizliyi və itirilmiş lokal məlumatın bərpası vəd edilmir. Məcburi istehlakçı hüquqları və qanunla məhdudlaşdırılması mümkün olmayan məsuliyyət qüvvədə qalır. Digər məsuliyyət hədləri buraxılış yurisdiksiyasına uyğun ayrıca hüquqi baxış tələb edir.

**Dayandırma və mübahisələr.** Xidmətdən istifadəni dayandıra və məlumatların silinməsini tələb edə bilərsən. Operatorun xidməti məhdudlaşdırma səbəbləri, xəbərdarlıq qaydası, tətbiq olunan hüquq və mübahisə proseduru: [təsdiqlənməlidir].

## İstifadəçi razılaşması — mətn qaralaması

Bu razılaşma [operatorun hüquqi adı] tərəfindən təqdim edilən Xercly proqramından şəxsi istifadə qaydasını müəyyən edir. İstifadə şərtləri xidmət davranışını, Məxfilik siyasəti məlumatların emalını izah edir.

**İstifadə lisenziyası.** Tətbiqi qanuni əldə etdikdə sənə şəxsi məqsədlər üçün məhdud, qeyri-müstəsna istifadə hüququ verilir. Proqramın müəlliflik və digər əqli mülkiyyət hüquqları müvafiq hüquq sahiblərində qalır. Məcburi qanuni hüquqların saxlanılır.

**Sənin məlumatların.** Maliyyə qeydlərin üzərində hüquqlarını bu razılaşma ilə bizə vermirsən. Məlumat yalnız Məxfilik siyasətində açıqlanmış məqsədlər və verdiyin icazələr çərçivəsində işlənməlidir.

**Ayrı seçimlər.** Bu razılaşmanı qəbul etmək bildiriş oxuma, push bildirişi, marketinq və ya bulud sinxronlaşmasına ümumi razılıq deyil. Həmin seçimlər tələb olunan hallarda ayrıca izah və razılıq ilə təqdim edilməlidir.

**Ehtiyat nüsxə.** İxrac etdiyin faylların saxlanması və paylaşılmasına özün nəzarət edirsən. Şifrəli ehtiyat nüsxənin şifrəsini itirsən, nüsxəni bərpa etmək mümkün olmaya bilər.

**Bitirmə.** Tətbiqdən istifadəni dayandırmaq, onlayn hesabı silmək və lokal məlumatı təmizləmək fərqli nəticələr verə bilər. Silinmə səhifəsində bu seçimlərin hər biri izah olunmalıdır.

**Mağaza lisenziyası.** Apple standart EULA-sı və ya ayrıca xüsusi EULA seçimi təsdiqlənməyib. Bu qaralama Apple üçün tam xüsusi EULA kimi təqdim edilmir. Platforma üzrə yekun lisenziya şərtləri və bu sənədlərlə münasibəti yayımdan əvvəl müəyyənləşdirilməlidir.

## Hesabın silinməsi səhifəsi — mətn və görünüş

**Başlıq:** Hesabını və məlumatlarını sil

**Giriş:** Xercly hesabının silinməsini buradan başlada biləcəksən. Davam etməzdən əvvəl saxlamaq istədiyin qeydləri ixrac et.

**İzah:** Onlayn hesabın silinməsi hesabla əlaqəli server məlumatlarını əhatə edir. Cihazdakı lokal qeydlər və özün saxladığın ixrac/ehtiyat nüsxə faylları ayrıca təmizlənməlidir. Hesabdan çıxmaq hesabı silmir.

**Dizayn:** qısa izah → hesabın təhlükəsiz təsdiqi → silinəcək və saxlanacaq məlumatların siyahısı → aydın təsdiq düyməsi → sorğunun statusu. Tətbiqi yenidən quraşdırmağı məcbur etməyən veb müraciət yolu. Açıq formaya kart nömrəsi, şifrə və ya maliyyə çıxarışı istənilmir.

**Düymə mətni:** Hesabın silinməsini başlat

**Təsdiq mətni:** Sorğun qəbul edildi. Nəticəni [təsdiqlənmiş əlaqə yolu] ilə bildirəcəyik. Gözlənilən müddət: [real icra müddəti].

Bu axın yalnız dizayndır; hazırda işləyən silinmə xidməti kimi dərc edilməməlidir. İcra müddəti, saxlanılan istisnalar və uğursuz sorğuların davamı backend ilə uyğunlaşdırılmalıdır.

## Dəstək səhifəsi — mətn

**Başlıq:** Kömək lazımdır?

Sualını və qarşılaşdığın addımı [dəstək e-poçtu] ünvanına göndər. Tətbiq versiyasını və telefon modelini qeyd et. Kart nömrəsi, PIN, şifrə və şəxsi maliyyə çıxarışı göndərmə. Ekran şəkli əlavə edirsənsə, məbləğ və şəxsi məlumatları əvvəl gizlət.

## Yayımdan əvvəl dəqiqləşdiriləcək məlumatlar

Operatorun hüquqi adı və ünvanı; işlək dəstək/məxfilik əlaqəsi; sayt domeni; buraxılış ölkələri və yaş qrupu; qiymət; aktiv giriş provayderləri; faktiki SDK və sayt analitikası; məlumat kateqoriyaları üzrə saxlanma müddətləri; silinmə axını və müddəti; hüquqi əsaslar və beynəlxalq ötürmələr; EULA seçimi; real mağaza ünvanları.

Bu boşluqlar ilk dizaynın təsdiqinə mane deyil. Mətnlər buraxılış konfiqurasiyası və hüquqi baxışla tamamlanmadan production siyasətləri kimi dərc edilməməlidir.

## Mağaza tələbləri üçün istinadlar

Apple məxfilik siyasətinin mağaza metadatasında və tətbiqdə əlçatan olmasını, işlənən məlumatları və saxlanma/silinməni izah etməsini tələb edir. [App Review Guidelines, 5.1.1](https://developer.apple.com/app-store/review/guidelines/).

Hesab yaratmağa imkan verən tətbiqlərdə Apple tətbiqdaxili silinməni başlatma imkanı tələb edir. [Apple account deletion](https://developer.apple.com/help/app-review/guideline-reference/5-1-1-account-deletion/).

Google Play hesab yaratmağa imkan verən tətbiqlər üçün həm tətbiqdaxili silinmə yolu, həm də xarici veb resurs tələb edir. [Google Play account deletion](https://support.google.com/googleplay/android-developer/answer/13327111?hl=en).

Məxfilik mətni, tətbiqin real məlumat emalı və Data safety bəyanatı bir-birinə uyğun olmalıdır. Xüsusən gözlənilməyən/arxa plan məlumat emalı üçün tətbiqdaxili aydın izah və ayrıca razılıq tələbləri nəzərə alınmalıdır. [Google Play User Data](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en).

Bu araşdırma mağaza siyasətlərinə aiddir; konkret bazarların hüquqi tələblərinə dair ayrıca hüquqi rəy deyil.
