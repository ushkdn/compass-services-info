export class createBookingDto {
  constructor(
    readonly dateStart: Date,
    readonly dateEnd: Date,
    readonly clientId: number,
  ) {}
}
