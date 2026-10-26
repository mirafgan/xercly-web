import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Document } from "@/components/document";
import { Header, Footer } from "@/components/shell";
import { documents, documentSlugs, isDocumentSlug } from "@/content/documents";
import { isLocale } from "@/lib/i18n";
export function generateStaticParams() {
  return documentSlugs.map((document) => ({ document }));
}
export const dynamicParams = false;
type PageProps = { params: Promise<{ lang: string; document: string }> };
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, document } = await params;
  if (!isLocale(lang) || !isDocumentSlug(document)) notFound();
  const content = documents[lang][document];
  return { title: content.title, description: content.summary };
}
export default async function DocumentPage({ params }: PageProps) {
  const { lang, document } = await params;
  if (!isLocale(lang) || !isDocumentSlug(document)) notFound();
  return (
    <>
      <Header lang={lang} page={document} />
      <Document lang={lang} slug={document} />
      <Footer lang={lang} />
    </>
  );
}
