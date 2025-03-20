import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-4 md:space-x-8 my-6">
      <div className="text-center">
        <div className="bg-gold text-white text-2xl md:text-4xl font-bold w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center">
          {timeLeft.days.toString().padStart(2, '0')}
        </div>
        <p className="mt-2 text-xs md:text-sm">Días</p>
      </div>

      <div className="text-center">
        <div className="bg-gold text-white text-2xl md:text-4xl font-bold w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <p className="mt-2 text-xs md:text-sm">Horas</p>
      </div>

      <div className="text-center">
        <div className="bg-gold text-white text-2xl md:text-4xl font-bold w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <p className="mt-2 text-xs md:text-sm">Minutos</p>
      </div>

      <div className="text-center">
        <div className="bg-gold text-white text-2xl md:text-4xl font-bold w-16 md:w-20 h-16 md:h-20 rounded-full flex items-center justify-center">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <p className="mt-2 text-xs md:text-sm">Segundos</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
