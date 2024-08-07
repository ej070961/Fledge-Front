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

export interface PagingData {
  totalPosts: number;
  totalPages?: number;
  supportPosts: SponsorBannerData;
}
export interface SponsorBannerData {
  supportId: number;
  title: string;
  leftDays: string;
  supportPostImageUrl?: string;
  supportRecord: {
    totalPrice: number;
    supportedPrice: number;
    progress: number;
  };
}
