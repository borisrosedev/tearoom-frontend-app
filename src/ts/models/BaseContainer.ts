import { OnNavigateType } from "../interfaces/OnNavigateType";

class BaseContainer {
  onNavigate: OnNavigateType;
  constructor(onNavigate: OnNavigateType) {
    this.onNavigate = onNavigate;
  }
}

export default BaseContainer;
