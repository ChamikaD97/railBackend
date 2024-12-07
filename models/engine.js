const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
  shed: { type: String, required: true },
  unitType:{ type: String, required: true },
  utilization: { type: Boolean, required: false
   },
   
   condition:{ type: String, required: true },
   remarks:{ type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model('Engine', engineSchema);
