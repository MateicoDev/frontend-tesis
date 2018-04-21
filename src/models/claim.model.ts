export class Claim {
  title: string;
  content: string;
  status: string | boolean;
  category: number;

  constructor() {
    this.status = "false";
    this.category = 1;
  }
}
