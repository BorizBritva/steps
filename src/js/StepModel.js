import { nanoid } from 'nanoid'

class StepModel {
  constructor(date, way, del = false) {
    this.id = nanoid();
    this.date = date;
    this.way = way;
    this.del = del;
  }
}

export default StepModel
