export const ErrorType = {
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  Unprocessable: 422,
}

type TabItems<T> = Readonly<
  {
    type: T
    name: string
  }[]
>
