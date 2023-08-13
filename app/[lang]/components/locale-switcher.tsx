'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i8n-config'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className='flex flex-col justify-center items-center gap-3'>
      <p className='text-3xl p-3 text-white font-semibold'>Locale switcher:</p>
      <ul className='flex gap-10 p-4'>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link className='transition-all opacity-70 hover:text-white' href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
