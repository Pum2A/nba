import { catchError, Observable } from "rxjs";

export class Perform<T> {
  data: T | undefined;
  isLoading = false;
  hasError = false;
  private action$: Observable<T> | undefined;


}
