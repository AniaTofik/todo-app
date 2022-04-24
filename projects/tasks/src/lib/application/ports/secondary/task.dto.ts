export interface TaskDTO {
  readonly text: string;
  readonly id: string;
  readonly checked: boolean;
  readonly isCounted: boolean;
  readonly count: number;
}
