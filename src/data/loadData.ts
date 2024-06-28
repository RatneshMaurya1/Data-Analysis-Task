import data from "./dataSet.json"
import {CropData} from "../analytics"

export const loadAgricultureData = (): CropData[] => {
    
    return data.map((item: any) => ({
        production: item["Crop Production (UOM:t(Tonnes))"] ?? 0,
        yield: item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] ?? 0,
        area: item["Area Under Cultivation (UOM:Ha(Hectares))"] ?? 0,
        country: item.Country ?? 'Unknown',
        year: parseInt(item.Year.split(', ')[1], 10) || 'Unknown',
        cropName: item["Crop Name"] ?? 'Unknown',
    }));
};
