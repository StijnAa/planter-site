const calculatePlantingPlanCost = (w,l,plantingPlanCost) =>{
    const m2 = (l * w) / 100;
    return m2 * plantingPlanCost
}
export default calculatePlantingPlanCost