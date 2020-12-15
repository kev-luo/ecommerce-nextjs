export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_19A32C875F23E9A4'

export const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51HyQjfFAfBt3uEU9ggyxrXnftJk3WxOGuDcco3y2vg9hyPGseoM4zx4g1x0banyXzyhxO7nG6GLopamRXXhJEeF100jpPTDvdz'

export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }
  if (image.url.indexOf("/") === 0) {
    return `${API_URL}${image.url}`;
  }
  return image.url;
};
