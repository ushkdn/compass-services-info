export class createServiceDto {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly price: number,
    readonly appointment: {
      readonly interval: number
      readonly timeStart: Date
      readonly retimeEnd: Date
    },
  ) {}
}
