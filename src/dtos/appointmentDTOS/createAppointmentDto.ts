export class createAppointmentDto {
  constructor(
    readonly interval: number,
    readonly timeStart: Date,
    readonly timeEnd: Date,
  ) {}
}
