// =============================================================================
// PAYSTACK — Ghana-first payments
// Designed for easy Stripe expansion (see stripe.ts.example)
// =============================================================================

const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY!;
const PAYSTACK_BASE = "https://api.paystack.co";

async function paystackFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${PAYSTACK_BASE}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${PAYSTACK_SECRET}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  const json = await res.json();
  if (!res.ok || !json.status) {
    throw new Error(json.message ?? `Paystack error ${res.status}`);
  }
  return json.data as T;
}

export interface InitializePaymentParams {
  email: string;
  amount: number; // in pesewas (GHS * 100)
  reference?: string;
  callbackUrl: string;
  metadata?: Record<string, unknown>;
  currency?: string;
  channels?: ("card" | "bank" | "ussd" | "qr" | "mobile_money" | "bank_transfer")[];
}

export interface InitializePaymentResult {
  authorization_url: string;
  access_code: string;
  reference: string;
}

/** Initialize a one-time payment — returns redirect URL */
export async function initializePayment(
  params: InitializePaymentParams
): Promise<InitializePaymentResult> {
  return paystackFetch<InitializePaymentResult>("/transaction/initialize", {
    method: "POST",
    body: JSON.stringify({
      email: params.email,
      amount: params.amount,
      reference: params.reference,
      callback_url: params.callbackUrl,
      metadata: params.metadata,
      currency: params.currency ?? "GHS",
      channels: params.channels ?? ["card", "mobile_money", "bank"],
    }),
  });
}

/** Verify a transaction by reference */
export async function verifyPayment(reference: string) {
  return paystackFetch(`/transaction/verify/${reference}`);
}

/** Create a Paystack subscription plan */
export async function createPlan(params: {
  name: string;
  interval: "monthly" | "annually" | "weekly";
  amount: number; // in pesewas
}) {
  return paystackFetch("/plan", {
    method: "POST",
    body: JSON.stringify(params),
  });
}

/** Subscribe a customer to a plan */
export async function createSubscription(params: {
  customer: string; // email or customer code
  plan: string;     // plan code
  authorization: string;
}) {
  return paystackFetch("/subscription", {
    method: "POST",
    body: JSON.stringify(params),
  });
}

/** Disable a subscription */
export async function cancelSubscription(params: {
  code: string;
  token: string;
}) {
  return paystackFetch("/subscription/disable", {
    method: "POST",
    body: JSON.stringify(params),
  });
}

/** Fetch customer details */
export async function getCustomer(emailOrCode: string) {
  return paystackFetch(`/customer/${emailOrCode}`);
}

/** Generate a payment reference */
export function generateReference(prefix = "PX"): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/** Convert GHS to pesewas */
export function toSubunit(amount: number): number {
  return Math.round(amount * 100);
}

/** Convert pesewas to GHS */
export function fromSubunit(amount: number): number {
  return amount / 100;
}
