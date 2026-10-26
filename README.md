# Xercly web

Xercly-nin Azərbaycan və ingilis dillərində Next.js təqdimat saytı. Təsdiqlənmiş yaşıl/açıq konsept, responsiv telefon maketi, parallax, FAQ və beş məlumat səhifəsi daxildir.

## Lokal başlat

Node.js 20.9 və ya daha yeni versiya lazımdır.

```sh
npm ci
npm run dev
```

[Azərbaycan versiyası](http://127.0.0.1:3000/az) · [English version](http://127.0.0.1:3000/en)

Production build-i lokal yoxlamaq üçün:

```sh
npm run build
npm start
```

## Yoxlamalar

```sh
npm run format:check
npm run check
npm run build
npx playwright install chromium webkit
npm run test:e2e
```

Playwright 3100 portunda ayrıca production server açır. Brauzer testləri dilləri, səhifələri, klaviaturanı, mobil menyunu, FAQ-nı, reduced-motion, JavaScript-siz oxunuşu, 404 cavablarını və axe əlçatanlıq yoxlamasını əhatə edir.

Eyni əmrlərin `site:dev`, `site:build`, `site:start`, `site:check`, `site:test` alias-ları da var.

## Məzmunu dəyiş

- `src/content/site.ts`: hər iki dildə ana səhifə və ortaq UI mətnləri.
- `src/content/documents.ts`: məxfilik, istifadə şərtləri, istifadəçi razılaşması, hesabın silinməsi və dəstək mətnləri.
- `src/lib/site-config.ts`: mağaza ünvanları və hüquqi sənədlərin statusu. Ana rənglər `src/app/globals.css` daxilindədir.

Dil seçimi eyni səhifəni saxlayır. Sayt Azərbaycan dilindəki mobil tətbiqi təqdim edir; ingilis sayt mətni mobil tətbiqin ingilis dili dəstəyini vəd etmir. Maketdəki məbləğlər nümunədir.

## Buraxılışdan əvvəl

Mağaza ünvanları hələ olmadığı üçün bloklar “Tezliklə / Coming soon” göstərir. Hüquqi mətnlər qaralamadır; operatorun hüquqi adı, əlaqə, qüvvəyə minmə tarixi, yaş siyasəti, saxlanma müddətləri və silinmə prosesi təsdiqlənməlidir. `docs/content-source-az.md` ilkin məzmun mənbəyidir.

Hesab silinməsi və dəstək səhifələri məlumat verir; sorğu göndərən forma və backend yoxdur. Mağaza tələblərinə uyğun işlək silinmə xidməti ayrıca tamamlanmalıdır. Lokal versiya `noindex`/`nofollow` metadatası, `X-Robots-Tag` və robots.txt ilə indeksləşməyə bağlıdır. Canlı yayımdan əvvəl hüquqi məlumatları tamamla, işlək əlaqə/silinmə yolunu yoxla, təsdiqlənmiş domeni və SEO ünvanlarını əlavə et, sonra indeksləşmə siyasətini yenilə.

Maliyyə sinxronlaşması aktiv xidmət kimi təqdim edilmir. Bu saytda Firebase, analitika, login və maliyyə məlumatı toplanması yoxdur.

## Vizual mənbələr

Təsdiqlənmiş maket `docs/approved-design.png` faylındadır. `public/images/botanical.webp` bu layihə üçün AI ilə yaradılmış dekorativ yarpaq şəklidir. Telefon maketi və qrafik HTML/CSS ilə hazırlanıb; real hesab şəkli deyil. Inter şrifti lokal paketdən təqdim olunur; onun lisenziyası `node_modules/@fontsource-variable/inter/LICENSE` daxilindədir. İnterfeys ikonları Lucide-dəndir. Mağaza loqoları yalnız əlçatanlıq statusunu göstərən təqdimat bloklarındadır; canlı mağaza keçidləri açılarkən rəsmi badge materiallarını tətbiq et.
