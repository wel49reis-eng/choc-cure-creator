import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (timeLeft <= 0) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-3 px-4 font-bold text-lg">
        ⏰ OFERTA EXPIRADA!
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-3 px-4 font-bold text-lg animate-pulse">
      ⏰ OFERTA LIMITADA: {formatTime(timeLeft)} restantes!
    </div>
  );
};