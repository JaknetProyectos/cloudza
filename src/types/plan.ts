export interface Plan {
    name: string;
    price: number;
    currency: string;
    description: string;
    includes: string[];
    category: string;
    featured?: boolean;
    icon: string;
    slug: string;
}