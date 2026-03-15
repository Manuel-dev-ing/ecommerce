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




