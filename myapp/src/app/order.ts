export class Order {
  constructor(
    public trailer: number,
    public details: string,
    public driver: number,
    public order: OrderDetail[],
    public priority?: number
  ) {}
}

export class OrderDetail {
  constructor(
    public palletType: string,
    public palletSize: string,
    public palletWay: string,
    public palletCondition: string,
    public palletTop: number,
    public palletBotton: number,
    public palletStringer: number,
    public palletQuantity: number,
    public palletPic?: string
  ) {}
}
