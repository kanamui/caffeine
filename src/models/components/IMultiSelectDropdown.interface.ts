export interface IMultiSelectDropdown {
  data: string[];
  value?: string[];
  placeholder?: string;
  onChange?: (value: string[]) => void;
}