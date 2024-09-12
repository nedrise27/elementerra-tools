export type CheckReceipeResponse = {
  wasTried: boolean;
  wasSuccessful: boolean | null;
};

const baseUrl = import.meta.env.VITE_API_BASE_URL;

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
