import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.dolarexpress.cl';
  
  // LISTA HARDCODED PARA ASEGURAR QUE SE VEA
  const banks = [
    "vender-cupo-banco-falabella-cmr",
    "cambiar-cupo-tarjeta-cencosud-scotiabank",
    "avance-efectivo-tarjeta-ripley",
    "vender-cupo-tarjeta-lider-bci",
    "cambio-cupo-dolar-abcvisa",
    "vender-cupo-tarjeta-hites",
    "avance-efectivo-tarjeta-la-polar",
    "vender-cupo-tarjeta-cruz-verde",
    "vender-cupo-banco-estado",
    "cambiar-cupo-dolar-banco-chile",
    "vender-cupo-banco-santander",
    "avance-cupo-scotiabank",
    "vender-cupo-bci",
    "cambiar-cupo-itau",
    "vender-cupo-banco-security",
    "cambio-cupo-banco-bice",
    "vender-cupo-banco-edwards",
    "avance-efectivo-coopeuch",
    "vender-cupo-banco-consorcio",
    "cambiar-cupo-banco-internacional"
  ];

  const dynamicRoutes = banks.map((slug) => ({
    url: `${baseUrl}/convertir/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    ...dynamicRoutes,
  ];
}
