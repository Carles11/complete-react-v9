import { expect, test, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";

import { usePizzaOfTheDay } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "Teh pizza calabrese",
  category: "Supreme",
  description: "A spicy pizza with salami, peppers, and onions",
  image: "/public/pizzas/calaberese.webp",
  size: { S: 12.25, M: 14.5, L: 16.75 },
};

test("gives null when first called", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  expect(result.current).toBeNull();
});

test("to call the API and five back the pizza of the day", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay());
  await waitFor(() => expect(result.current).toEqual(testPizza));

  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});
