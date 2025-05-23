export interface Company{
  id: number;
  name: string,
  description: string,
  city: string,
  address: string
}
export interface Vacancy{
  id: number;
  name: string,
  description: string,
  salary: Float32Array,
  company: number;
}
