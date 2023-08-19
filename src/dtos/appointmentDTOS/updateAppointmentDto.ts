export class updateAppointmentDto {
  constructor(
    readonly timeStart?: Date,
    readonly timeEnd?: Date,
  ) {}
}
