export class updateServiceDto {
  constructor(
    readonly name: string,
    readonly description: string,
    readonly price?: number,
  ) {}
}
