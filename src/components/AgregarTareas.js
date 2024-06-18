import React, { useContext, useState } from 'react';
import { TareasContext } from '../context/Tareas';

const AgregarTarea = () => {
    const { agregarTarea } = useContext(TareasContext);
    const [nuevaTarea, setNuevaTarea] = useState({ nombre: ' ', descripcion: ' ' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNuevaTarea((prevTarea) => ({ ...prevTarea, [name]: value,}));
    };

    const handleAgregarTarea = () => {
        // Validar y agregar la nueva tarea
        if (nuevaTarea.nombre.trim() === '' || nuevaTarea.descripcion.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }
        agregarTarea({ id: Date.now(), ...nuevaTarea, });
        // Limpiar los campos después de agregar la tarea
        setNuevaTarea({ nombre: '', descripcion: '' });
    };

    return (
        <div>
            <h2>Agregar Tarea</h2>
            {/* Formulario para agregar tarea */}
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" value={nuevaTarea.nombre} onChange={handleInputChange} />
                </label>
                <br/>
                <label>
                    Descripción:
                    <textarea name="descripcion" value={nuevaTarea.descripcion} onChange={handleInputChange}> </textarea>
                </label>
                <br/>
                <button type="button" onClick={handleAgregarTarea}>
                    Agregar Tarea
                </button>
            </form>
        </div>
    );
};

export default AgregarTarea;