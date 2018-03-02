export class Quote implements IQuote {
  public author: string;
  public quote: string;
  public vote: number = 0;
}

export interface IQuote {
 author: string;
 quote: string;
 vote: number ;
}
