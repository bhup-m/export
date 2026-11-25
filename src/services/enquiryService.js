
const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || ""
).replace(/\/+$/, "");

export async function submitEnquiry(data) {
  if (!API_BASE_URL) {
    throw new Error(
      "Online enquiry submission is not available yet. Please contact us by email."
    );
  }

  const response = await fetch(
    `${API_BASE_URL}/api/enquiries`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Unable to submit your enquiry. Please try again."
    );
  }

  return response.json();
}
