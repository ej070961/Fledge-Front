export interface Category {
  id: string;
  label: string;
}

export const categories: Category[] = [
  { id: "necessities", label: "생활필수품" },
  { id: "food", label: "식품" },
  { id: "electronics", label: "가전제품" },
  { id: "education", label: "교육비/교재비" },
  { id: "medical", label: "의료비" },
  { id: "legal", label: "법률구조비" },
  { id: "others", label: "기타" },
];
