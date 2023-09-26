export class updateServiceDto {
  constructor(
    readonly name?: string,
    readonly description?: string,
    readonly price?: number,
    readonly appointment?: {
      readonly interval?: number
      readonly timeStart?: Date
      readonly timeEnd?: Date
    },
  ) {}
}
