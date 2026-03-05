import React, { useMemo } from "react";
import "./AnimatedBackground.scss";

const AnimatedBackground = () => {
  // Generar cuadros con posiciones y delays aleatorios (solo una vez)
  const squares = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 40, // Entre 40px y 120px
      left: Math.random() * 100, // Posición horizontal aleatoria
      animationDuration: Math.random() * 20 + 15, // Entre 15s y 35s
      animationDelay: Math.random() * -20, // Delay negativo para empezar en diferentes puntos
      opacity: Math.random() * 0.3 + 0.1, // Entre 0.1 y 0.4
    }));
  }, []);

  return (
    <div className="animated-background">
      {squares.map((square) => (
        <div
          key={square.id}
          className="floating-square"
          style={{
            width: `${square.size}px`,
            height: `${square.size}px`,
            left: `${square.left}%`,
            animationDuration: `${square.animationDuration}s`,
            animationDelay: `${square.animationDelay}s`,
            opacity: square.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
