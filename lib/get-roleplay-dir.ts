import { readdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

/**
 * Get the actual directory name for a roleplay event code
 * Handles cases where directory names have trailing spaces or different casing
 */
export async function getRoleplayDirName(
  clusterId: string,
  eventCode: string
): Promise<string | null> {
  try {
    const baseDir = join(
      process.cwd(),
      "public",
      "clusters",
      clusterId,
      "roleplays"
    )

    // Check if base directory exists
    if (!existsSync(baseDir)) {
      return null
    }

    // List all directories and find one that matches (case-insensitive, ignoring trailing spaces)
    const dirs = await readdir(baseDir, { withFileTypes: true })
    const matchingDir = dirs.find(
      (dir) => dir.isDirectory() && dir.name.trim().toUpperCase() === eventCode.trim().toUpperCase()
    )

    return matchingDir ? matchingDir.name : null
  } catch (error) {
    console.error(`Error finding roleplay directory for ${clusterId}/${eventCode}:`, error)
    return null
  }
}

