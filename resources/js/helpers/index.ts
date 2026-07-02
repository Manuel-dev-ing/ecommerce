import type { features } from "@/types";


export function verifyExistElement(item:features, data:features[]) : boolean {

    let exist: boolean = false;

    // data.some(x => x.id === item.id)

    if (data.some(x => x.id === item.id)) {
        exist = true
        
        return exist
    }

    return exist
}



