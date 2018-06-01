export class Claim {
  title: string;
  subject: string;
  status: number;
  category: { id: number };
  user_sender: { id_user: number };
  user_reciver: { id_user: number };
  id_property: number;
  id_partership: number;


  constructor() {
    this.status = 1;
    this.category = {
      id: 1,
    };
    this.user_sender =  {
      id_user: -1,
    };
    this.user_reciver =  {
      id_user: -1,
    };
    this.id_partership = 1;
    this.id_property = 1;
  }
}
