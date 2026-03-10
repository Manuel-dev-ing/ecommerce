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




