export interface Type {
  id: number;
  typename: string;
}

export interface Education {
  id: number;
  education: string;
}

export interface Staff {
  id?: number;
  name?: string;
  birthday?: Date;
  street?: string;
  postcode?: number;
  location?: string;
  coronaPositiv?: boolean;
  hiringDate?: Date;
  type?: Type[];
  education?: Education[];
}
