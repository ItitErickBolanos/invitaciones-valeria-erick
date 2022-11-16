import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import flechaIzquierda from '../../images/flecha-izquierda.svg';
import flechaDerecha from '../../images/flecha-derecha.svg';
import './Carrusel.css';

const Carrusel = ({
    elementos,
    elementosMostrados,
    tipo,
    children
}) => {
    /* const [ paginaMostrada, setPaginaMostrada ] = useState(0);
    const numeroPaginas = Math.floor(elementos.length / elementosMostrados); */
    const [ elementosActuales, setElementosActuales ] = useState(children.slice(elementosMostrados > 1 && tipo !== 'timeline' ? 0 : 2, elementosMostrados > 1 && tipo !== 'timeline' ? elementosMostrados : elementosMostrados + 2));

    const handleArrowClick = (direction) => {
        setElementosActuales((prev) => {
            if (direction === 'left') {
                console.log(elementosActuales.map((elemento, index) => {
                    const currentElementindex = children.findIndex(child => elemento.key === child.key);
                    return {
                        ...children[elementos[currentElementindex].prev], 
                        props: 
                            { 
                                ...children[elementos[currentElementindex].prev].props, 
                                className: tipo === 'timeline' && index !== 2 && elementosMostrados > 1 
                                ? children[elementos[currentElementindex].prev].props + ' non-active' 
                                : children[elementos[currentElementindex].prev].props
                            }
                        }
                }))
                return elementosActuales.map((elemento, index) => {
                    const currentElementindex = children.findIndex(child => elemento.key === child.key);
                    return {
                        ...children[elementos[currentElementindex].prev], 
                        props: 
                            { 
                                ...children[elementos[currentElementindex].prev].props, 
                                className: tipo === 'timeline' && index !== 2 && elementosMostrados > 1 
                                ? children[elementos[currentElementindex].prev].props.className + ' non-active' 
                                : children[elementos[currentElementindex].prev].props.className
                            }
                        }
                });
            } else {
                return elementosActuales.map((elemento, index) => {
                    const currentElementindex = children.findIndex(child => elemento.key === child.key);
                    return {
                        ...children[elementos[currentElementindex].next], 
                        props: {
                            ...children[elementos[currentElementindex].next].props, 
                            className: tipo === 'timeline' && index !== 2 && elementosMostrados > 1 
                            ? children[elementos[currentElementindex].next].props.className + ' non-active' 
                            : children[elementos[currentElementindex].next].props.className
                        }
                    };
                });
            }
        });
    };

    useEffect(() => {
        setElementosActuales(children.slice(elementosMostrados > 1 && tipo !== 'timeline' ? 0 : 2, elementosMostrados > 1 && tipo !== 'timeline' ? elementosMostrados : elementosMostrados + 2));
    }, [elementosMostrados, children, tipo]);

    return (
        <>
            <div className="carrusel-container">
                { tipo === 'fotos' && <img src={flechaIzquierda} className="flecha" alt='flecha-izquierda' onClick={() => handleArrowClick('left')}/> }
                <div className="elementos">
                    {elementosActuales}
                </div>
                { tipo === 'fotos' && <img src={flechaDerecha} className="flecha" alt='flecha-derecha' onClick={() => handleArrowClick('right')}/> }
            </div>
            { tipo === 'timeline' && <div className="flechas-container">
                <img src={flechaIzquierda} className="flecha" alt='flecha-izquierda' onClick={() => handleArrowClick('left')}/>
                <img src={flechaDerecha} className="flecha" alt='flecha-derecha' onClick={() => handleArrowClick('right')}/>
            </div> }
        </>
    );
};

Carrusel.propTypes = {
    elementos: PropTypes.array.isRequired,
    elementosMostrados: PropTypes.number.isRequired,
    tipo: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

export default Carrusel;