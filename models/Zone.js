import { Schema, model, models } from "mongoose";

const ZoneSchema = new Schema({
    country_code: { type: String, required: true },
    country_name: { type: String, required: true },
    region_name: { type: String, required: true },
    city_name: { type: String, required: true },
    ip_ranges: [{
        ip_from: { type: Number, required: true },
        ip_to: { type: Number, required: true }
    }],
    coordinates: [{
        type: Number,
        required: true
    }]
});

export default models.Zone || model("Zone", ZoneSchema);