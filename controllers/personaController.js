const Persona = require('../models/personaModel');

// Crear una nueva persona
exports.createPersona = async (req, res) => {
  try {
    const newPersona = new Persona(req.body);
    const persona = await newPersona.save();
    res.status(201).json(persona);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener todas las personas
exports.getPersonas = async (req, res) => {
  try {
    const personas = await Persona.find();
    res.status(200).json(personas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtener una persona por ID
exports.getPersonaById = async (req, res) => {
  try {
    const persona = await Persona.findById(req.params.id);
    if (!persona) return res.status(404).json({ message: 'Persona no encontrada' });
    res.status(200).json(persona);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar una persona
exports.updatePersona = async (req, res) => {
  try {
    const updatedPersona = await Persona.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPersona) return res.status(404).json({ message: 'Persona no encontrada' });
    res.status(200).json(updatedPersona);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Eliminar una persona
exports.deletePersona = async (req, res) => {
  try {
    const persona = await Persona.findByIdAndDelete(req.params.id);
    if (!persona) return res.status(404).json({ message: 'Persona no encontrada' });
    res.status(200).json({ message: 'Persona eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
