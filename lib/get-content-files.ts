import { readdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

/**
 * Get available roleplay numbers for a specific cluster and event
 */
export async function getAvailableRoleplays(
  clusterId: string,
  eventCode: string
): Promise<number[]> {
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
      return []
    }

    // List all directories and find one that matches (case-insensitive, ignoring trailing spaces)
    const dirs = await readdir(baseDir, { withFileTypes: true })
    const matchingDir = dirs.find(
      (dir) => dir.isDirectory() && dir.name.trim().toUpperCase() === eventCode.trim().toUpperCase()
    )

    if (!matchingDir) {
      return []
    }

    const roleplayDir = join(baseDir, matchingDir.name)

    const files = await readdir(roleplayDir)
    const roleplayNumbers = files
      .filter((file) => file.startsWith("roleplay-") && file.endsWith(".pdf"))
      .map((file) => {
        const match = file.match(/roleplay-(\d+)\.pdf/)
        return match ? parseInt(match[1], 10) : null
      })
      .filter((num): num is number => num !== null)
      .sort((a, b) => a - b)

    return roleplayNumbers
  } catch (error) {
    // Directory doesn't exist or no files
    console.error(`Error reading roleplays for ${clusterId}/${eventCode}:`, error)
    return []
  }
}

/**
 * Get available test numbers for a specific cluster
 */
export async function getAvailableTests(clusterId: string): Promise<number[]> {
  try {
    const testDir = join(
      process.cwd(),
      "public",
      "clusters",
      clusterId,
      "tests"
    )

    // Check if directory exists first
    if (!existsSync(testDir)) {
      return []
    }

    const files = await readdir(testDir)
    const testNumbers = files
      .filter((file) => file.startsWith("test-") && file.endsWith(".pdf"))
      .map((file) => {
        const match = file.match(/test-(\d+)\.pdf/)
        return match ? parseInt(match[1], 10) : null
      })
      .filter((num): num is number => num !== null)
      .sort((a, b) => a - b)

    return testNumbers
  } catch (error) {
    // Directory doesn't exist or no files
    console.error(`Error reading tests for ${clusterId}:`, error)
    return []
  }
}

