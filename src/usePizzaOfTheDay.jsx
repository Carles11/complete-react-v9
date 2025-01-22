import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  // useDebugValue(
  //   pizzaOfTheDay
  //     ? `${pizzaOfTheDay.name} (${pizzaOfTheDay.category})`
  //     : "Loading...",
  // );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
