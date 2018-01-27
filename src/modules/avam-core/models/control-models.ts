export interface ComponentState {
  id : string | number;
  title : string;
  state? : any;
}
export interface ComponentDefinition {
  name: string;
  type: any;
  height?: number;
  width?: number;
}
