export type * from './auth';
export type * from './navigation';
export type * from './ui';

import type { Auth } from './auth';

export type SharedData = {
    name: string;
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
};

export type Option = {
    id: number;
    name: string;
    features: features[]
    type: number;
    created_at: string;
    updated_at: string;

}

export type OptionFormData = {
    name: string
    type: number
}

export type FeatureFormData = { 
    option_id: number;
    description: string;
    value: string;
}

export type features = {
    id: number;
    option_id: number;
    description: string;
    value: string;
    updated_at: string;
    created_at: string;

}

export type Family = {
    id: number
    name: string
}

export type FamilyFormData = {
    name: string
}

export type PaginatedFamilies = {
    current_page: number
    data: Family[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: {
        url: string | null
        label: string
        page: string | null
        active: boolean
    }[]
    next_page_url: string
    path: string
    per_page: number
    to: number
    total: number

}

export type Category = {
    id: number
    name: string
    family_id: number
    family: Family
    created_at: string
    updated_at: string
}

export type CategoryFormData = {
    name: string
    family_id: number | string
}

export type PaginatedCategory = {
    current_page: number
    data: Category[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: {
        url: string | null
        label: string
        page: string | null
        active: boolean
    }[]
    next_page_url: string
    path: string
    per_page: number
    to: number
    total: number

}

export type Subcategory = {
    category: Category
    category_id: number
    created_at: string
    id: number
    name: string
    updated_at: string

}

export type SubcategoryFormData = {
    name: string
    category_id: number | string
    
}

export type PaginatedSubcategory = {
    current_page: number
    data: Subcategory[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: {
        url: string | null
        label: string
        page: string | null
        active: boolean
    }[]
    next_page_url: string
    path: string
    per_page: number
    to: number
    total: number

}


export type Product = {
    id: number
    sku: string
    name: string
    description: string
    image_path: string | File | null
    price: number
    subcategory_id: number
    subcategory: Subcategory
    created_at: string
    updated_at: string
    status: boolean | number
}

export type PaginatedProduct = {
    current_page: number
    data: Product[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: {
        url: string | null
        label: string
        page: string | null
        active: boolean
    }[]
    next_page_url: string
    path: string
    per_page: number
    to: number
    total: number
}


export type ProductFormData = { 
    sku: string
    name: string
    description: string
    image_path: File | null
    price: number | string
    subcategory_id: number
    status: boolean
}

export type OptionObj = {
    option_id: number;
    feature_id: number;
    value: string;
    description: string;
}

export type VariantFormData = {
    id: string;
    id_producto: number;
    options: OptionObj[];
    sku: string;
    precio: number;
    stock: number;
}

export type Cover = {
    id: string
    image_path: string
}

    // options: {
    //     option_id: number;
    //     value: string;
    //     description: string;
    // }[];
    // sku: string;
    // precio: number;
    // stock: number;

// export type SubcategoryCategoriesFamilies = {
//     category: Category
//     category_id: number
//     created_at: string
//     id: number
//     name: string
//     updated_at: string
// }


