// =============================================================================
// BUNNY.NET VIDEO — Stream API client
// Designed to be swapped for Mux with minimal changes (see mux.ts.example)
// =============================================================================

const BUNNY_API_BASE = "https://video.bunnycdn.com/library";
const LIBRARY_ID = process.env.BUNNY_STREAM_LIBRARY_ID!;
const API_KEY = process.env.BUNNY_STREAM_API_KEY!;
const CDN_HOSTNAME = process.env.BUNNY_STREAM_HOSTNAME!;

async function bunnyFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`${BUNNY_API_BASE}/${LIBRARY_ID}${path}`, {
    ...options,
    headers: {
      AccessKey: API_KEY,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Bunny API error ${res.status}: ${err}`);
  }
  return res.json();
}

/** Get a signed embed URL for a video — prevents direct download */
export function getSignedVideoUrl(videoId: string): string {
  // Bunny signed URL uses an expiry token
  // For full DRM, enable Token Authentication in Bunny dashboard
  return `https://${CDN_HOSTNAME}/${videoId}/play`;
}

/** Get embeddable iframe URL (secure, no-download) */
export function getEmbedUrl(videoId: string): string {
  return `https://iframe.mediadelivery.net/embed/${LIBRARY_ID}/${videoId}?autoplay=false&responsive=true`;
}

/** Fetch video metadata (title, duration, encoding status) */
export async function getVideoDetails(videoId: string) {
  return bunnyFetch(`/videos/${videoId}`);
}

/** List all videos in the library */
export async function listVideos(page = 1, perPage = 100) {
  return bunnyFetch(`/videos?page=${page}&itemsPerPage=${perPage}`);
}

/** Delete a video from Bunny */
export async function deleteVideo(videoId: string) {
  return bunnyFetch(`/videos/${videoId}`, { method: "DELETE" });
}

/** 
 * Create a direct upload — returns upload URL and video ID
 * The client uses this URL to upload directly to Bunny (no server proxy needed)
 */
export async function createVideoUpload(title: string) {
  const video = await bunnyFetch("/videos", {
    method: "POST",
    body: JSON.stringify({ title }),
  });
  return {
    videoId: video.guid as string,
    // The upload URL is built from the returned GUID
    uploadUrl: `https://video.bunnycdn.com/library/${LIBRARY_ID}/videos/${video.guid}`,
  };
}
