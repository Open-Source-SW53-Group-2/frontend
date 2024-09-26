export class ReserveEntity {
  id: string;
  driver: string;
  date: string;
  time: string;
  location: string;
  licensePlate: string;
  insurance: string;
  discountCode: string;
  price: number;
  status: string;


  constructor(){
    this.id = ' ';
    this.driver = ' ';
    this.date = ' ';
    this.time = ' ';
    this.location =  ' ';
    this.licensePlate = ' ';
    this.insurance = ' ';
    this.discountCode = ' ';
    this.price = 0 ;
    this.status = '';
  }
}
