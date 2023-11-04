import { Schema, model, models } from "mongoose";

const GeneratorSchema = new Schema({
  // Field for both coal and gas power plants
  fuelType: {
    type: String,
    enum: ['coal', 'gas'],
    required: true,
  },
  sources: [{type: String, required: true}], // 'Wiki page' on coal, 'Wiki URL' on gas
  plantName: { type: String, required: true }, // 'Plant' on coal, 'Plant name' on gas
  plantNameLocal: { type: String }, // 'Other names' on coal, 'Plant name (local script)' on gas
  owner: { type: String }, // 'Owner' on both
  parent: { type: String }, // 'Parent' on both

  country: { type: String }, // 'Country' on coal, 'Country' on gas
  province: { type: String }, // 'Subnational unit (province, state)' on both
  district: { type: String }, // 'Major area (prefecture, district)' on both
  subregion: { type: String }, // 'Subregion' on coal, 'Subregion' on gas
  region: { type: String }, // 'Region' on coal, 'Region' on gas

  location: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: { type: [Number], required: true }, // 'Latitude' and 'Longitude' on both
    locationAccuracy: { type: String }, // 'Accuracy' on coal, 'Location accuracy' on gas
  },

  units: [{
    unitName: { type: String, required: true}, // 'Unit' on coal, 'Unit name' on gas
    locationIdGem: { type: String, required: true }, // 'TrackerLOC' on coal, 'GEM location ID' on gas
    unitIdGem: { type: String, required: true }, // 'Tracker ID' on coal, 'GEM unit ID' on gas

    capacity: { type: Number, required: true }, // 'Capacity (MW)' on coal, 'Capacity elec. (MW)' on gas
    status: { type: String, required: true }, // 'Status' on both
    year: { type: Number, required: true }, // 'Year' on coal, 'Start year' on gas
    yearRetired: { type: Number }, // 'RETIRED' on coal, 'Retired year' on gas

    // Fields specific to coal
    permits: {type: String}, // 'Permits' on coal
    captive: {type: String}, // 'Captive' on coal
    captiveIndustryUse: {type: String}, // 'Captive industry use' on coal
    captiveResidentialUse: {type: String}, // 'Captive residential use' on coal
    alternateFuel: {type: String}, // 'Alternate Fuel' on coal
    heatRate: {type: Number}, // 'Heat rate (Btu per kWh)' on coal
    emissionFactor: {type: Number}, // 'Emission factor (kg of CO2 per TJ)' on coal
    capacityFactor: {type: Number}, // 'Capacity factor' on coal
    annualCO2: {type: Number}, // 'Annual CO2 (million tonnes / annum)' on coal
    lifetimeCO2: {type: Number}, // 'Lifetime CO2' on coal 
    remainingPlantLifetime: {type: Number}, // 'Remaining plant lifetime (years)' on coal

    // Fields specific to gas
    fuel: { type: String }, // 'Fuel' on gas
    technology: { type: String }, // 'Technology' on gas
    CHP: { type: String }, // 'CHP' on gas
    hydrogenCapable: { type: String }, // 'Hydrogen capable?' on gas
    CCSAttachment: { type: String }, // 'CCS attachment?' on gas
    coalToGasConversion: { type: String }, // 'Coal-to-gas conversion/replacement?' on gas
    captive: { type: String, enum: ['heat', 'power', 'both'] }, // 'Captive [heat, power, both]' on gas
    captiveIndustryType: { type: String }, // 'Captive industry type' on gas
    captiveNonIndustryUse: { type: String }, // 'Captive non-industry use [heat, power, both, none]' on gas

  }],

});

export default models.Generator || model("Generator", GeneratorSchema);