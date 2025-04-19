export interface LineItem {
  priceId: string;
  quantity: number;
}

export async function createCheckoutSession(lineItems: LineItem[]): Promise<{ url: string }> {
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ lineItems }),
  });
  if (!res.ok) throw new Error('Failed to create checkout session');
  return res.json();
}
