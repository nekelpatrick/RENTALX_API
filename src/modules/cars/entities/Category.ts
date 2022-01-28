import { v4 as uuidv4 } from "uuid";
import { Entity } from "typeorm";

@Entity("categories")
class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
