interface DtoConverter<T, U> {

    convert(t: T): U;
}