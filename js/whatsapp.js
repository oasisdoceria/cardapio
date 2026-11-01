export const WHATSAPP_CONFIG = {
  number: '5534999938956',

  messages: {
    orderIntro: 'Olá! Gostaria de fazer um pedido:',
    emptyCart: 'Olá! Gostaria de conhecer os produtos da Oásis.',
    orderDelivery: 'Pedido para entrega.',
    orderFooter: 'Aguardo a confirmação do pedido. Obrigado!',
  },
};


function formatCurrency(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(message)}`;
}

export function buildEmptyCartMessage() {
  return WHATSAPP_CONFIG.messages.emptyCart;
}

export function buildOrderMessage(items, total, deliveryFee = 0) {
  const lines = items.map((item) => {
    const subtotal = formatCurrency(item.price * item.quantity);
    return `${item.quantity}x ${item.name} — ${subtotal}`;
  });

  return [
    WHATSAPP_CONFIG.messages.orderIntro,
    '',
    ...lines,
    '',
    ...(deliveryFee > 0
      ? [
          WHATSAPP_CONFIG.messages.orderDelivery,
          `Taxa fixa de entrega: ${formatCurrency(deliveryFee)}`,
        ]
      : []),
    `Total: ${formatCurrency(total)}`,
    '',
    WHATSAPP_CONFIG.messages.orderFooter,
  ].join('\n');
}

export function openWhatsAppWithCart(items, total, deliveryFee = 0) {
  const message = items.length
    ? buildOrderMessage(items, total, deliveryFee)
    : buildEmptyCartMessage();
  window.open(buildWhatsAppUrl(message), '_blank', 'noopener');
}

export function openWhatsAppPlain() {
  window.open(buildWhatsAppUrl(buildEmptyCartMessage()), '_blank', 'noopener');
}
 