export interface SponsorData {
  title: string;
  reason: string;
  promise: string;
  item: string;
  purchaseUrl: string;
  price: number;
  images: string[];
  expirationDate: string;
  supportCategory: string;
  bank?: string;
  account?: string;
  recipientName?: string;
  phone?: string;
  address?: string;
  detailAddress?: string;
  zip?: string;
}
