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
  stage: string;
  ambassador: {
    id: number;
    name: string;
    email: string;
    department: string;
  };
  createdAt: string;
}