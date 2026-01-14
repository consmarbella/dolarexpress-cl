import { notFound } from 'next/navigation';
import Link from 'next/link';

// DATOS HARDCODED
const BANKS_DATA = [
  { slug: "vender-cupo-banco-falabella-cmr", title: "Vender Cupo Banco Falabella CMR", bankName: "Banco Falabella" },
  { slug: "cambiar-cupo-tarjeta-cencosud-scotiabank", title: "Cambiar Cupo Tarjeta Cencosud Scotiabank", bankName: "Cencosud Scotiabank" },
  { slug: "avance-efectivo-tarjeta-ripley", title: "Avance Efectivo Tarjeta Banco Ripley", bankName: "Banco Ripley" },
  { slug: "vender-cupo-tarjeta-lider-bci", title: "Vender Cupo Tarjeta Lider Bci", bankName: "Lider Bci" },
  { slug: "cambio-cupo-dolar-abcvisa", title: "Cambio Cupo Dólar Abcvisa", bankName: "Abcvisa" },
  { slug: "vender-cupo-tarjeta-hites", title: "Vender Cupo Tarjeta Hites", bankName: "Tarjeta Hites" },
  { slug: "avance-efectivo-tarjeta-la-polar", title: "Avance Efectivo Tarjeta La Polar", bankName: "La Polar" },
  { slug: "vender-cupo-tarjeta-cruz-verde", title: "Vender Cupo Tarjeta Cruz Verde", bankName: "Cruz Verde" },
  { slug: "vender-cupo-banco-estado", title: "Vender Cupo Internacional BancoEstado", bankName: "BancoEstado" },
  { slug: "cambiar-cupo-dolar-banco-chile", title: "Cambiar Cupo Dólar Banco de Chile", bankName: "Banco de Chile" },
  { slug: "vender-cupo-banco-santander", title: "Vender Cupo Banco Santander", bankName: "Banco Santander" },
  { slug: "avance-cupo-scotiabank", title: "Avance Cupo Dólar Scotiabank", bankName: "Scotiabank" },
  { slug: "vender-cupo-bci", title: "Vender Cupo Banco Bci", bankName: "Bci" },
  { slug: "cambiar-cupo-itau", title: "Cambiar Cupo Banco Itaú", bankName: "Itaú" },
  { slug: "vender-cupo-banco-security", title: "Vender Cupo Banco Security", bankName: "Banco Security" },
  { slug: "cambio-cupo-banco-bice", title: "Cambio Cupo Banco Bice", bankName: "Banco Bice" },
  { slug: "vender-cupo-banco-edwards", title: "Vender Cupo Banco Edwards", bankName: "Banco Edwards" },
  { slug: "avance-efectivo-coopeuch", title: "Avance Efectivo Coopeuch", bankName: "Coopeuch" },
  { slug: "vender-cupo-banco-consorcio", title: "Vender Cupo Banco Consorcio", bankName: "Banco Consorcio" },
  { slug: "cambiar-cupo-banco-internacional", title: "Cambiar Cupo Banco Internacional", bankName: "Banco Internacional" }
];

export async function generateStaticParams() {
  return BANKS_DATA.map((bank) => ({
    slug: bank.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = BANKS_DATA.find((p) => p.slug === params.slug);
  if (!data) return { title: 'Página no encontrada' };
  return {
    title: `${data.title} | Dolarexpress`,
    description: `Cotiza online tu cupo ${data.bankName}. Transferencia inmediata a tu cuenta.`,
  };
}

export default function BankPage({ params }: { params: { slug: string } }) {
  const data = BANKS_DATA.find((p) => p.slug === params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{data.title}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
           <p className="text-lg mb-6">¿Tienes cupo en dólares en tu tarjeta <strong>{data.bankName}</strong>? Te lo compramos y transferimos pesos al instante.</p>
           <a 
             href={`https://wa.me/569XXXXXXXX?text=Hola,%20quiero%20cotizar%20mi%20cupo%20${encodeURIComponent(data.bankName)}`}
             className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full"
           >
             Cotizar por WhatsApp
           </a>
        </div>
        <div className="mt-8">
            <Link href="/" className="text-blue-600 underline">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
