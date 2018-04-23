export class Claim {
  title: string;
  content: string;
  status: number;
  id_category: number;

  constructor() {
    this.status = 1;
    this.id_category = 1;
  }
}
