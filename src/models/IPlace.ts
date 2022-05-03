interface IPlace {
    address: string,
    price: number,
    sqm: number,
    num_rooms: number | string,
    floor: number,
    num_floors: number,
    elevator: boolean,
    parking: string,
    id: string,
}

export default IPlace
