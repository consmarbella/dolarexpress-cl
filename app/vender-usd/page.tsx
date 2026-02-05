export default function VenderUSD() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Vender USD</h1>
          <p className="text-lg text-gray-600">
            Convierte tus dólares estadounidenses a criptomonedas de forma segura y rápida
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Widget de Cambio</h2>
            <p className="text-gray-600">Usa el widget a continuación para vender tus USD por Bitcoin u otras criptomonedas</p>
          </div>

          {/* Widget de Changelly */}
export default function VenderUSD() {
  return (
    <div className="min-h-screen">
      {/* Header simple */}
      <div className="bg-[#2c3e50] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Vender USD</h1>
          <p className="text-xl text-gray-300">
            Convierte tus dólares a criptomonedas de forma rápida y segura
          </p>
        </div>
      </div>

      {/* Widget */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <iframe
          width="100%"
          height="600"
          style={{ border: 'none', minHeight: '600px' }}
          allow="camera"
          src="https://widget.changelly.com?from=usd&to=btc&amount=0&address=14GjaVeCyQwXLxSmVhMi9tbmXDCFt1G2Zd&fromDefault=usd&toDefault=btc&merchant_id=jyLPC4h1rwVz3gA-&payment_id=&v=3&type=no-rev-share&color=49ac1a&headerId=1&logo=hide&buyButtonTextId=6&readOnlyDestinationAddress=true"
          title="Widget Changelly"
        >
          Can't load widget
        </iframe>
      </div>
    </div>
  );
}            <iframe
              width="100%"
              height="600"
              frameBorder="none"
              allow="camera"
              src="https://widget.changelly.com?from=usd&to=btc&amount=0&address=14GjaVeCyQwXLxSmVhMi9tbmXDCFt1G2Zd&fromDefault=usd&toDefault=btc&merchant_id=jyLPC4h1rwVz3gA-&payment_id=&v=3&type=no-rev-share&color=49ac1a&headerId=1&logo=hide&buyButtonTextId=6&readOnlyDestinationAddress=true"
              title="Changelly Widget"
              className="border-0"
            >
              Can't load widget
            </iframe>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Información Importante</h3>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Proceso 100% seguro y confiable</li>
              <li>Tasas de cambio competitivas</li>
              <li>Transacciones procesadas en minutos</li>
              <li>Soporte 24/7 disponible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
