import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

const KEY = "page_views"

function normalizeEnvValue(value: string | undefined) {
  if (!value) {
    return null
  }

  const trimmed = value.trim()
  return trimmed.replace(/^['"]|['"]$/g, "")
}

function getRedisClient() {
  const url = normalizeEnvValue(process.env.UPSTASH_REDIS_REST_URL)
  const token = normalizeEnvValue(process.env.UPSTASH_REDIS_REST_TOKEN)

  if (!url || !token) {
    return null
  }

  return new Redis({ url, token })
}

export async function POST() {
  const redis = getRedisClient()

  if (!redis) {
    return NextResponse.json(
      { error: "Missing Upstash environment variables." },
      { status: 500 },
    )
  }

  const views = await redis.incr(KEY)
  return NextResponse.json({ views })
}

export async function GET() {
  const redis = getRedisClient()

  if (!redis) {
    return NextResponse.json(
      { error: "Missing Upstash environment variables." },
      { status: 500 },
    )
  }

  const views = (await redis.get<number>(KEY)) ?? 0
  return NextResponse.json({ views })
}
