const baseUrl = import.meta.env.VITE_API_BASE_URL;

export type CheckReceipeResponse = {
  wasTried: boolean;
  wasSuccessful: boolean | null;
};

export async function checkReceipe(
  elements: [string, string, string, string]
): Promise<CheckReceipeResponse> {
  const body = JSON.stringify({ elements });

  const res = await fetch(`${baseUrl}/recipes/check-recipe`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  });

  return res.json();
}

export type RecipeSuggestionsResponse = {
  numberOfPossibilies: number;
  possibilities: string[][];
  alreadyTried: string[][];
};

export type GetRecipeSuggestionRequest = {
  elements: {
    element: string;
    minAmount: number;
    maxAmount: number;
  }[];
  tier: number;
};

export async function getRecipeSuggestions(
  request: GetRecipeSuggestionRequest
): Promise<RecipeSuggestionsResponse> {
  const body = JSON.stringify(request);

  const res = await fetch(`${baseUrl}/recipes/get-available-recipes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body,
  });

  return res.json();
}
