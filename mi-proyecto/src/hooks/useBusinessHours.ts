import { useState, useEffect } from 'react';
import { BUSINESS_HOURS } from '../utils/constants';

export const useBusinessHours = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkBusinessHours = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();

            const isDayValid = BUSINESS_HOURS.days.includes(day);
            const isHourValid = hour >= BUSINESS_HOURS.start && hour < BUSINESS_HOURS.end;

            setIsOpen(isDayValid && isHourValid);
        };

        checkBusinessHours();
        // Check every minute
        const interval = setInterval(checkBusinessHours, 60000);

        return () => clearInterval(interval);
    }, []);

    return isOpen;
};
