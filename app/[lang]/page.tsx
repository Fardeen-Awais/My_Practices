import { getDictionary } from '@/dictionaries'
import { Locale } from '@/i8n-config'
import Counter from './components/counter'
import LocaleSwitcher from './components/locale-switcher'

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)

  return (
    <div className='bg-gray-900 flex justify-center items-center min-h-screen text-gray-400 flex-col'>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p className='text-lg'>
        This text is rendered on the server:{' '}
        <span className='text-xl text-white'>{dictionary['server-component'].welcome}</span>
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  )
}
