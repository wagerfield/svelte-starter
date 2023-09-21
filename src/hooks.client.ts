import type { HandleClientError } from "@sveltejs/kit"

export const handleError: HandleClientError = async (context) => {
  console.log("handleError:", context)

  return { message: "Something went wrong" }
}
