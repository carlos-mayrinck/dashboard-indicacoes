export interface Indication {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  segment: string;
  product: string;
  interest: string;
  channel: "email" | 'whatsapp';
  source: string;
  ambassador: number;
  createdAt: string;
}