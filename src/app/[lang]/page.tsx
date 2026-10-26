import { notFound } from "next/navigation";
import { Home } from "@/components/home";
import { Header, Footer } from "@/components/shell";
import { isLocale } from "@/lib/i18n";
export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <>
      <Header lang={lang} />
      <Home lang={lang} />
      <Footer lang={lang} />
    </>
  );
}
