import { describe, expect, it, run } from 'https://deno.land/x/tincan@0.2.1/mod.ts'
import { down } from './mod.ts'

describe('down', () => {
  it('returns false if website is up', async () => {
    const isDown = await down('example.com')

    expect(isDown).toBe(false)
  })
  it('returns false if website is down', async () => {
    const isDown = await down('coom.finance')

    expect(isDown).toBe(true)
  })
  it('supports custom timeout', async () => {
    const t = performance.now()
    const isDown = await down('coom.finance', 0.5)
    expect(performance.now() - t).toBeGreaterThan(500)

    expect(isDown).toBe(true)
  })
})

run()
