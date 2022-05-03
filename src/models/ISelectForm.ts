interface ISelectForm {
    id: string,
    title: string
    labelId: string
    value: string | number
    setFn: Function
    selectOptions: any[]
}

export default ISelectForm
