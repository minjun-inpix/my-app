"use client"
 
import { useState } from 'react';
import { Calendar } from "@/components/ui/calendar"

const onePage = () => {
    const [date, setDate] = useState<Date | undefined>(new Date(1900-01-01));
    return (
        <Calendar
        mode="single"
        disabled={(date) =>
          date > new Date() || date < new Date("1900-01-01")
        }
        initialFocus
      />
    );
};

export default onePage;
