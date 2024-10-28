import { NextResponse } from 'next/server'
import { Novu } from '@novu/node'


export async function POST() {

  const novu = new Novu(process.env.NEXT_PUBLIC_NOVU_API_KEY || '')

  try {
    await novu.trigger('NextJsStarter', {
      to: process.env.NEXT_PUBLIC_NOVU_SUBSCRIBER_ID || "",
      payload: {},
    })

    return NextResponse.json({ message: 'Notification triggered successfully' })
  } catch (error) {
    console.error('Error triggering notification:', error)
    return NextResponse.json({ message: 'Error triggering notification' }, { status: 500 })
  }
}

