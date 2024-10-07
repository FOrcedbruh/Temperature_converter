

const CtoF = (value: number) => {
    return value * 1.8 + 32
}

const FtoC = (value: number) => {
    return (value - 32) / 1.8
}

const CtoK = (value: number) => {
    return value + 273.15
}

const KtoC = (value: number) => {
    return value - 273.15
}

const FtoK = (value: number) => {
    return (value - 32) * 1.8 + 273.15
}

const KtoF = (value: number) => {
    return (value - 273.15) * 1.8 + 32
}


export const convert = (from: string, to: string, value: number) => {
    if (from === "Fahrenheit" && to === "Celseus") {
        return FtoC(value)
    }
    if (from === "Celseus" && to ==="Fahrenheit") {
        return CtoF(value)
    }
    if (from === "Celseus" && to === "Kelvin") {
        return CtoK(value)
    }
    if (from === "Kevin" && to === "Celseus") {
        return KtoC(value)
    }
    if (from === "Fehrenheit" && to === "Kelvin") {
        return FtoK(value)
    }
    if (from === "Kelvin" && to === "Fehrenheit") {
        return KtoF(value)
    }
}