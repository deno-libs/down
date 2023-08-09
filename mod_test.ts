import { describe, expect, it, run } from 'https://deno.land/x/tincan@1.0.1/mod.ts'
import { down } from './mod.ts'

describe('down', () => {
  it('returns true if website is down', async () => {
    const isDown = await down('this.is.down.v1rtl.site')

    expect(isDown).toBe(true)
  })
  it('supports custom timeout', async () => {
    const t = performance.now()
    const isDown = await down('this.is.down.v1rtl.site', 0.5)
    expect(performance.now() - t).not.toBeGreaterThan(500)

    expect(isDown).toBe(true)
  })
})

run()
