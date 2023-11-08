import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Nuevas Opciones:',
    description:
      'Impresionate con las nuevas opciones que tenemos para ti en el menú del invierno',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Aun no lo superas....',
    description: 'Entonces aun esta disponible el menu del verano para que recuerdes esos grandes momentos...',
    icon: LockClosedIcon,
  },
  {
    name: 'La vieja confiable...',
    description: 'Todos tenemos una vieja confiable... no te pierdas de la malteada de cafe y chocolate NEGRO....',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Aca vamos de nuevo...</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pero diferente... con lo nuevos sabores que tenemos para ti...</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  El que tenga miedo a vivir que no nazca... La vida es un aventura,prueba lo nuevo y deja lo viejo...
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              src="https://raw.githubusercontent.com/CampusLands/starbucksNodeJS/main/img/img1.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div id="exampleWrapper" class="flex justify-center">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <a href="/opc2">
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <img src="https://raw.githubusercontent.com/CampusLands/starbucksNodeJS/main/img/thumb1.png" alt="" />
          </button>
          </a>
          <a href="/">
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <img src="https://github.com/CampusLands/starbucksNodeJS/blob/main/img/thumb2.png?raw=true" alt="" />
          </button>
          </a>
          <a href="/opc3">
          <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <img src="https://github.com/CampusLands/starbucksNodeJS/blob/main/img/thumb3.png?raw=true" alt="" />
          </button>
          </a>
        </div>
      </div>

    </div>
  )
}
