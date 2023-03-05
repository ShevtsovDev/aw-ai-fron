

export type ProductDescriptionType = {
  readonly product_name: string,
  readonly short_description: string,
  readonly need_seo: boolean,
  readonly need_params: boolean
}

export const ProductDescriptionDataset = {
  fields: [
    {
      group: 'name',
      name: 'product_name',
      type: 'text',
      placeholder: 'Введите название товара'
    },
    {
      group: 'description',
      name: 'short_description',
      type: 'textarea',
      placeholder: 'Введите короткое описание'
    },
    {
      group: 'param',
      name: 'need_seo',
      type: 'checkbox',
      label: 'Добавить к результату список ключевых слов'
    },
    {
      group: 'param',
      name: 'need_params',
      type: 'checkbox',
      label: 'Добавить к результату список характеристик товара'
    },
  ],

  groups: [
    {
      name: 'name',
      title: 'Введите название товара',
      subtitle: 'Напишите название вашего товара. (прим.: Фен для волос ViteK-3000 Ultra Hair)',
      orientation: 'columns',
    },
    {
      name: 'description',
      title: 'Напишите короткое описание вашего товара',
      subtitle: 'Небольшое описание что-бы лучше полнять продукт. (прим.: Качественный фен для сушки и укладки волос. Множество насадок в комплекте. Мощность 2000 В)',
      orientation: 'columns',
    },
    {
      name: 'param',
      title: 'Дополнительные параметры',
      subtitle: 'Выберите какие дополнительные параметры вы хотите использовать',
      col: 2,
      orientation: 'columns',
    },
  ]
}






