type formId =
  | ''
  | 'perdida-de-peso'
  | 'ganar-musculo'
  | 'mejorar-resistencia'
  | 'condicion-fisica'

type formName =
  | 'Selecciona tu objetivo'
  | 'Pérdida de peso'
  | 'Ganar músculo'
  | 'Mejorar resistencia'
  | 'Condición física general'

export interface Form {
  id?: formId
  name: formName
}
