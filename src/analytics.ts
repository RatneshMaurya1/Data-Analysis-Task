export interface CropData {
    production: number;
    yield: number;
    area: number;
    country: string;
    year: number | string | any  ;
    cropName: string;
}

export const getMaxMinProduction = (data: CropData[]) => {
    const result = data.reduce((acc, curr) => {
        const year = curr.year;
        if (!acc[year]) {
            acc[year] = { max: curr, min: curr };
        } else {
            if (curr.production > acc[year].max.production) {
                acc[year].max = curr;
            }
            if (curr.production < acc[year].min.production) {
                acc[year].min = curr;
            }
        }
        return acc;
    }, {} as Record<number | string, { max: CropData; min: CropData }>);

    return Object.entries(result).map(([year, { max, min }]) => ({
        year: year !== 'Unknown' ? Number(year) : 'Unknown',
        maxCrop: max.cropName || 'Unknown',
        minCrop: min.cropName || 'Unknown',
    }));
};

export const getAverageYieldArea = (data: CropData[]) => {
    const cropStats = data.reduce((acc, curr) => {
        const crop = curr.cropName;
        if (!acc[crop]) {
            acc[crop] = { totalYield: 0, totalArea: 0, count: 0 };
        }
        acc[crop].totalYield += curr.yield || 0;
        acc[crop].totalArea += curr.area || 0;
        acc[crop].count += 1;
        return acc;
    }, {} as Record<string, { totalYield: number; totalArea: number; count: number }>);

    return Object.entries(cropStats).map(([crop, { totalYield, totalArea, count }]) => ({
        crop,
        avgYield: (count ? (totalYield / count) : 0).toFixed(3),
        avgArea: (count ? (totalArea / count) : 0).toFixed(3),
    }));
};
