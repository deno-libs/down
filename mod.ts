/**
 * Check if website is down
 * @param host website host, e.g. example.com
 * @param timeout custom timeout in seconds
 * @returns whether website is down or not
 */
export const down = async (host: string, timeout = 1): Promise<boolean> => {
  const cmd = Deno.run({
    cmd: ['ping', `-W ${timeout}`, '-c 1', host],
    stdout: 'null'
  })

  const { code } = await cmd.status()

  return code !== 0
}
