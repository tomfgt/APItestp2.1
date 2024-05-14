const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  dni: {
    type: String,
    required: true,
    unique: true
  },
  fechaNacimiento: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Persona', PersonaSchema);
