type BuildWhatsAppUrlArgs = {
  phone: string;
  message?: string;
};

export function buildWhatsAppUrl({
  phone,
  message,
}: BuildWhatsAppUrlArgs): string {
  const cleanPhone = phone.replace(/\D/g, "");
  const base = `https://wa.me/${cleanPhone}`;

  if (!message) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
}

export function buildOrderMessage(itemName?: string): string {
  const intro = itemName
    ? `Hallo, ik wil graag bestellen: ${itemName}.`
    : "Hallo, ik wil graag bestellen.";

  return `${intro}

Naam:
Adres:
Gerecht:
Aantal porties:
Warm / koelvers / diepvries:
Bezorging of afhalen:
Gewenste tijd:`;
}