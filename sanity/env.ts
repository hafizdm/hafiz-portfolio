export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION || '2026-09-22'

export const dataset =
  process.env.SANITY_STUDIO_DATASET || 'production'

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}