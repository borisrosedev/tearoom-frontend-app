import ButtonInterface from "./ButtonInterface"
import FieldInterface from "./FieldInterface"

export default interface FormInterface {
    formId: string
    formFields: FieldInterface[]
    formButtons: ButtonInterface[]
    formClassNames?: string
}