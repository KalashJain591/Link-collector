export type Success <T> = {ok: true, value: T}
export type Failure <T> = {ok: false, reason: StringLiteral<T>}

export function failure<T>(reason: StringLiteral<T>): Failure<T> {
    return {
        ok: false,
        reason:reason
    }
}

export function success<T>(value: T): Success<T> {
    return {
        ok: true,
        value: value
    }
}

type StringLiteral<T> = T extends string ? T : never

export type AccessToken = {
    access_token: string;
  }
