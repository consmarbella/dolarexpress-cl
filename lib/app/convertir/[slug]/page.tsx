import { notFound } from 'next/navigation';
import seoData from '@/lib/seo-pages-data.json';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const page = seoData.find((p) => p.slug === params.slug);
  if (!page) return { title: 'Página no encontrada' };
  
  return {
    title: page.title,
    description: `Vende tu cupo en dólares del ${page.bankName} ${page.cardType} al mejor tipo de cambio. Transferencias rápidas y seguras.`,
  };
}

export default function ConvertirPage({ params }: { params: { slug: string } }) {
  const page = seoData.find((p) => p.slug === params.slug);
  
  if (!page) {
    notFound();
  }
  
  const whatsappPhone = '+56956765893';
  const whatsappMessage = `Hola, me interesa cotizar cupo para ${page.bankName} ${page.cardType}`;
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-chilexpress-blue to-chilexpress-dark-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Vende tu Cupo {page.bankName} {page.cardType}</h1>
          <p className="text-xl mb-8 text-gray-100">Transforma tu cupo de crédito en dólares al mejor tipo de cambio</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-chilexpress-yellow text-chilexpress-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
          >
            💱 Cotizar cupo {page.bankName}
          </a>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-chilexpress-blue">Por qué vender con DolarExpress</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Rápido y Seguro</h3>
                <p className="text-gray-600">Proceso simple para tarjetas del {page.bankName} {page.cardType}. Tu dinero en dólares en minutos.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="font-bold text-xl mb-2">Mejor Tipo de Cambio</h3>
                <p className="text-gray-600">Cotizaciones actualizadas al instante para tu cupo {page.cardType}.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="text-3xl">🔒</div>
              <div>
                <h3 className="font-bold text-xl mb-2">100% Seguro</h3>
                <p className="text-gray-600">Transacciones encriptadas y verificadas. Confía en nosotros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-chilexpress-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para vender tu cupo?</h2>
          <p className="text-lg mb-8">Contamos con expertos en {page.bankName} listos para ayudarte.</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-chilexpress-yellow text-chilexpress-blue px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition"
          >
            💬 Cotizar cupo {page.bankName}
          </a>
        </div>
      </section>
    </div>
  );
}
