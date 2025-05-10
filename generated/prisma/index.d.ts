
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usina
 * 
 */
export type Usina = $Result.DefaultSelection<Prisma.$UsinaPayload>
/**
 * Model Inversor
 * 
 */
export type Inversor = $Result.DefaultSelection<Prisma.$InversorPayload>
/**
 * Model Metrica
 * 
 */
export type Metrica = $Result.DefaultSelection<Prisma.$MetricaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usinas
 * const usinas = await prisma.usina.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usinas
   * const usinas = await prisma.usina.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usina`: Exposes CRUD operations for the **Usina** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usinas
    * const usinas = await prisma.usina.findMany()
    * ```
    */
  get usina(): Prisma.UsinaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inversor`: Exposes CRUD operations for the **Inversor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inversors
    * const inversors = await prisma.inversor.findMany()
    * ```
    */
  get inversor(): Prisma.InversorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metrica`: Exposes CRUD operations for the **Metrica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metricas
    * const metricas = await prisma.metrica.findMany()
    * ```
    */
  get metrica(): Prisma.MetricaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usina: 'Usina',
    Inversor: 'Inversor',
    Metrica: 'Metrica'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usina" | "inversor" | "metrica"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usina: {
        payload: Prisma.$UsinaPayload<ExtArgs>
        fields: Prisma.UsinaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsinaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsinaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>
          }
          findFirst: {
            args: Prisma.UsinaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsinaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>
          }
          findMany: {
            args: Prisma.UsinaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>[]
          }
          create: {
            args: Prisma.UsinaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>
          }
          createMany: {
            args: Prisma.UsinaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsinaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>[]
          }
          delete: {
            args: Prisma.UsinaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>
          }
          update: {
            args: Prisma.UsinaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>
          }
          deleteMany: {
            args: Prisma.UsinaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsinaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsinaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>[]
          }
          upsert: {
            args: Prisma.UsinaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsinaPayload>
          }
          aggregate: {
            args: Prisma.UsinaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsina>
          }
          groupBy: {
            args: Prisma.UsinaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsinaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsinaCountArgs<ExtArgs>
            result: $Utils.Optional<UsinaCountAggregateOutputType> | number
          }
        }
      }
      Inversor: {
        payload: Prisma.$InversorPayload<ExtArgs>
        fields: Prisma.InversorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InversorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InversorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>
          }
          findFirst: {
            args: Prisma.InversorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InversorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>
          }
          findMany: {
            args: Prisma.InversorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>[]
          }
          create: {
            args: Prisma.InversorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>
          }
          createMany: {
            args: Prisma.InversorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InversorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>[]
          }
          delete: {
            args: Prisma.InversorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>
          }
          update: {
            args: Prisma.InversorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>
          }
          deleteMany: {
            args: Prisma.InversorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InversorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InversorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>[]
          }
          upsert: {
            args: Prisma.InversorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InversorPayload>
          }
          aggregate: {
            args: Prisma.InversorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInversor>
          }
          groupBy: {
            args: Prisma.InversorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InversorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InversorCountArgs<ExtArgs>
            result: $Utils.Optional<InversorCountAggregateOutputType> | number
          }
        }
      }
      Metrica: {
        payload: Prisma.$MetricaPayload<ExtArgs>
        fields: Prisma.MetricaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetricaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetricaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>
          }
          findFirst: {
            args: Prisma.MetricaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetricaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>
          }
          findMany: {
            args: Prisma.MetricaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>[]
          }
          create: {
            args: Prisma.MetricaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>
          }
          createMany: {
            args: Prisma.MetricaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetricaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>[]
          }
          delete: {
            args: Prisma.MetricaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>
          }
          update: {
            args: Prisma.MetricaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>
          }
          deleteMany: {
            args: Prisma.MetricaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetricaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetricaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>[]
          }
          upsert: {
            args: Prisma.MetricaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetricaPayload>
          }
          aggregate: {
            args: Prisma.MetricaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrica>
          }
          groupBy: {
            args: Prisma.MetricaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetricaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetricaCountArgs<ExtArgs>
            result: $Utils.Optional<MetricaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usina?: UsinaOmit
    inversor?: InversorOmit
    metrica?: MetricaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsinaCountOutputType
   */

  export type UsinaCountOutputType = {
    inversores: number
  }

  export type UsinaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inversores?: boolean | UsinaCountOutputTypeCountInversoresArgs
  }

  // Custom InputTypes
  /**
   * UsinaCountOutputType without action
   */
  export type UsinaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsinaCountOutputType
     */
    select?: UsinaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsinaCountOutputType without action
   */
  export type UsinaCountOutputTypeCountInversoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InversorWhereInput
  }


  /**
   * Count Type InversorCountOutputType
   */

  export type InversorCountOutputType = {
    metricas: number
  }

  export type InversorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metricas?: boolean | InversorCountOutputTypeCountMetricasArgs
  }

  // Custom InputTypes
  /**
   * InversorCountOutputType without action
   */
  export type InversorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InversorCountOutputType
     */
    select?: InversorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InversorCountOutputType without action
   */
  export type InversorCountOutputTypeCountMetricasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usina
   */

  export type AggregateUsina = {
    _count: UsinaCountAggregateOutputType | null
    _avg: UsinaAvgAggregateOutputType | null
    _sum: UsinaSumAggregateOutputType | null
    _min: UsinaMinAggregateOutputType | null
    _max: UsinaMaxAggregateOutputType | null
  }

  export type UsinaAvgAggregateOutputType = {
    id: number | null
  }

  export type UsinaSumAggregateOutputType = {
    id: number | null
  }

  export type UsinaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsinaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsinaCountAggregateOutputType = {
    id: number
    nome: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsinaAvgAggregateInputType = {
    id?: true
  }

  export type UsinaSumAggregateInputType = {
    id?: true
  }

  export type UsinaMinAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsinaMaxAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsinaCountAggregateInputType = {
    id?: true
    nome?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsinaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usina to aggregate.
     */
    where?: UsinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usinas to fetch.
     */
    orderBy?: UsinaOrderByWithRelationInput | UsinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usinas
    **/
    _count?: true | UsinaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsinaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsinaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsinaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsinaMaxAggregateInputType
  }

  export type GetUsinaAggregateType<T extends UsinaAggregateArgs> = {
        [P in keyof T & keyof AggregateUsina]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsina[P]>
      : GetScalarType<T[P], AggregateUsina[P]>
  }




  export type UsinaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsinaWhereInput
    orderBy?: UsinaOrderByWithAggregationInput | UsinaOrderByWithAggregationInput[]
    by: UsinaScalarFieldEnum[] | UsinaScalarFieldEnum
    having?: UsinaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsinaCountAggregateInputType | true
    _avg?: UsinaAvgAggregateInputType
    _sum?: UsinaSumAggregateInputType
    _min?: UsinaMinAggregateInputType
    _max?: UsinaMaxAggregateInputType
  }

  export type UsinaGroupByOutputType = {
    id: number
    nome: string
    createdAt: Date
    updatedAt: Date
    _count: UsinaCountAggregateOutputType | null
    _avg: UsinaAvgAggregateOutputType | null
    _sum: UsinaSumAggregateOutputType | null
    _min: UsinaMinAggregateOutputType | null
    _max: UsinaMaxAggregateOutputType | null
  }

  type GetUsinaGroupByPayload<T extends UsinaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsinaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsinaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsinaGroupByOutputType[P]>
            : GetScalarType<T[P], UsinaGroupByOutputType[P]>
        }
      >
    >


  export type UsinaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inversores?: boolean | Usina$inversoresArgs<ExtArgs>
    _count?: boolean | UsinaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usina"]>

  export type UsinaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usina"]>

  export type UsinaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usina"]>

  export type UsinaSelectScalar = {
    id?: boolean
    nome?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsinaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "createdAt" | "updatedAt", ExtArgs["result"]["usina"]>
  export type UsinaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inversores?: boolean | Usina$inversoresArgs<ExtArgs>
    _count?: boolean | UsinaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsinaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsinaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsinaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usina"
    objects: {
      inversores: Prisma.$InversorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usina"]>
    composites: {}
  }

  type UsinaGetPayload<S extends boolean | null | undefined | UsinaDefaultArgs> = $Result.GetResult<Prisma.$UsinaPayload, S>

  type UsinaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsinaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsinaCountAggregateInputType | true
    }

  export interface UsinaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usina'], meta: { name: 'Usina' } }
    /**
     * Find zero or one Usina that matches the filter.
     * @param {UsinaFindUniqueArgs} args - Arguments to find a Usina
     * @example
     * // Get one Usina
     * const usina = await prisma.usina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsinaFindUniqueArgs>(args: SelectSubset<T, UsinaFindUniqueArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsinaFindUniqueOrThrowArgs} args - Arguments to find a Usina
     * @example
     * // Get one Usina
     * const usina = await prisma.usina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsinaFindUniqueOrThrowArgs>(args: SelectSubset<T, UsinaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsinaFindFirstArgs} args - Arguments to find a Usina
     * @example
     * // Get one Usina
     * const usina = await prisma.usina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsinaFindFirstArgs>(args?: SelectSubset<T, UsinaFindFirstArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsinaFindFirstOrThrowArgs} args - Arguments to find a Usina
     * @example
     * // Get one Usina
     * const usina = await prisma.usina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsinaFindFirstOrThrowArgs>(args?: SelectSubset<T, UsinaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsinaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usinas
     * const usinas = await prisma.usina.findMany()
     * 
     * // Get first 10 Usinas
     * const usinas = await prisma.usina.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usinaWithIdOnly = await prisma.usina.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsinaFindManyArgs>(args?: SelectSubset<T, UsinaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usina.
     * @param {UsinaCreateArgs} args - Arguments to create a Usina.
     * @example
     * // Create one Usina
     * const Usina = await prisma.usina.create({
     *   data: {
     *     // ... data to create a Usina
     *   }
     * })
     * 
     */
    create<T extends UsinaCreateArgs>(args: SelectSubset<T, UsinaCreateArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usinas.
     * @param {UsinaCreateManyArgs} args - Arguments to create many Usinas.
     * @example
     * // Create many Usinas
     * const usina = await prisma.usina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsinaCreateManyArgs>(args?: SelectSubset<T, UsinaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usinas and returns the data saved in the database.
     * @param {UsinaCreateManyAndReturnArgs} args - Arguments to create many Usinas.
     * @example
     * // Create many Usinas
     * const usina = await prisma.usina.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usinas and only return the `id`
     * const usinaWithIdOnly = await prisma.usina.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsinaCreateManyAndReturnArgs>(args?: SelectSubset<T, UsinaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usina.
     * @param {UsinaDeleteArgs} args - Arguments to delete one Usina.
     * @example
     * // Delete one Usina
     * const Usina = await prisma.usina.delete({
     *   where: {
     *     // ... filter to delete one Usina
     *   }
     * })
     * 
     */
    delete<T extends UsinaDeleteArgs>(args: SelectSubset<T, UsinaDeleteArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usina.
     * @param {UsinaUpdateArgs} args - Arguments to update one Usina.
     * @example
     * // Update one Usina
     * const usina = await prisma.usina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsinaUpdateArgs>(args: SelectSubset<T, UsinaUpdateArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usinas.
     * @param {UsinaDeleteManyArgs} args - Arguments to filter Usinas to delete.
     * @example
     * // Delete a few Usinas
     * const { count } = await prisma.usina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsinaDeleteManyArgs>(args?: SelectSubset<T, UsinaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsinaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usinas
     * const usina = await prisma.usina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsinaUpdateManyArgs>(args: SelectSubset<T, UsinaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usinas and returns the data updated in the database.
     * @param {UsinaUpdateManyAndReturnArgs} args - Arguments to update many Usinas.
     * @example
     * // Update many Usinas
     * const usina = await prisma.usina.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usinas and only return the `id`
     * const usinaWithIdOnly = await prisma.usina.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsinaUpdateManyAndReturnArgs>(args: SelectSubset<T, UsinaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usina.
     * @param {UsinaUpsertArgs} args - Arguments to update or create a Usina.
     * @example
     * // Update or create a Usina
     * const usina = await prisma.usina.upsert({
     *   create: {
     *     // ... data to create a Usina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usina we want to update
     *   }
     * })
     */
    upsert<T extends UsinaUpsertArgs>(args: SelectSubset<T, UsinaUpsertArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsinaCountArgs} args - Arguments to filter Usinas to count.
     * @example
     * // Count the number of Usinas
     * const count = await prisma.usina.count({
     *   where: {
     *     // ... the filter for the Usinas we want to count
     *   }
     * })
    **/
    count<T extends UsinaCountArgs>(
      args?: Subset<T, UsinaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsinaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsinaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsinaAggregateArgs>(args: Subset<T, UsinaAggregateArgs>): Prisma.PrismaPromise<GetUsinaAggregateType<T>>

    /**
     * Group by Usina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsinaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsinaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsinaGroupByArgs['orderBy'] }
        : { orderBy?: UsinaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsinaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsinaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usina model
   */
  readonly fields: UsinaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usina.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsinaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inversores<T extends Usina$inversoresArgs<ExtArgs> = {}>(args?: Subset<T, Usina$inversoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usina model
   */
  interface UsinaFieldRefs {
    readonly id: FieldRef<"Usina", 'Int'>
    readonly nome: FieldRef<"Usina", 'String'>
    readonly createdAt: FieldRef<"Usina", 'DateTime'>
    readonly updatedAt: FieldRef<"Usina", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usina findUnique
   */
  export type UsinaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * Filter, which Usina to fetch.
     */
    where: UsinaWhereUniqueInput
  }

  /**
   * Usina findUniqueOrThrow
   */
  export type UsinaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * Filter, which Usina to fetch.
     */
    where: UsinaWhereUniqueInput
  }

  /**
   * Usina findFirst
   */
  export type UsinaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * Filter, which Usina to fetch.
     */
    where?: UsinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usinas to fetch.
     */
    orderBy?: UsinaOrderByWithRelationInput | UsinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usinas.
     */
    cursor?: UsinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usinas.
     */
    distinct?: UsinaScalarFieldEnum | UsinaScalarFieldEnum[]
  }

  /**
   * Usina findFirstOrThrow
   */
  export type UsinaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * Filter, which Usina to fetch.
     */
    where?: UsinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usinas to fetch.
     */
    orderBy?: UsinaOrderByWithRelationInput | UsinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usinas.
     */
    cursor?: UsinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usinas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usinas.
     */
    distinct?: UsinaScalarFieldEnum | UsinaScalarFieldEnum[]
  }

  /**
   * Usina findMany
   */
  export type UsinaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * Filter, which Usinas to fetch.
     */
    where?: UsinaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usinas to fetch.
     */
    orderBy?: UsinaOrderByWithRelationInput | UsinaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usinas.
     */
    cursor?: UsinaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usinas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usinas.
     */
    skip?: number
    distinct?: UsinaScalarFieldEnum | UsinaScalarFieldEnum[]
  }

  /**
   * Usina create
   */
  export type UsinaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * The data needed to create a Usina.
     */
    data: XOR<UsinaCreateInput, UsinaUncheckedCreateInput>
  }

  /**
   * Usina createMany
   */
  export type UsinaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usinas.
     */
    data: UsinaCreateManyInput | UsinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usina createManyAndReturn
   */
  export type UsinaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * The data used to create many Usinas.
     */
    data: UsinaCreateManyInput | UsinaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usina update
   */
  export type UsinaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * The data needed to update a Usina.
     */
    data: XOR<UsinaUpdateInput, UsinaUncheckedUpdateInput>
    /**
     * Choose, which Usina to update.
     */
    where: UsinaWhereUniqueInput
  }

  /**
   * Usina updateMany
   */
  export type UsinaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usinas.
     */
    data: XOR<UsinaUpdateManyMutationInput, UsinaUncheckedUpdateManyInput>
    /**
     * Filter which Usinas to update
     */
    where?: UsinaWhereInput
    /**
     * Limit how many Usinas to update.
     */
    limit?: number
  }

  /**
   * Usina updateManyAndReturn
   */
  export type UsinaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * The data used to update Usinas.
     */
    data: XOR<UsinaUpdateManyMutationInput, UsinaUncheckedUpdateManyInput>
    /**
     * Filter which Usinas to update
     */
    where?: UsinaWhereInput
    /**
     * Limit how many Usinas to update.
     */
    limit?: number
  }

  /**
   * Usina upsert
   */
  export type UsinaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * The filter to search for the Usina to update in case it exists.
     */
    where: UsinaWhereUniqueInput
    /**
     * In case the Usina found by the `where` argument doesn't exist, create a new Usina with this data.
     */
    create: XOR<UsinaCreateInput, UsinaUncheckedCreateInput>
    /**
     * In case the Usina was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsinaUpdateInput, UsinaUncheckedUpdateInput>
  }

  /**
   * Usina delete
   */
  export type UsinaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
    /**
     * Filter which Usina to delete.
     */
    where: UsinaWhereUniqueInput
  }

  /**
   * Usina deleteMany
   */
  export type UsinaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usinas to delete
     */
    where?: UsinaWhereInput
    /**
     * Limit how many Usinas to delete.
     */
    limit?: number
  }

  /**
   * Usina.inversores
   */
  export type Usina$inversoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    where?: InversorWhereInput
    orderBy?: InversorOrderByWithRelationInput | InversorOrderByWithRelationInput[]
    cursor?: InversorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InversorScalarFieldEnum | InversorScalarFieldEnum[]
  }

  /**
   * Usina without action
   */
  export type UsinaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usina
     */
    select?: UsinaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usina
     */
    omit?: UsinaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsinaInclude<ExtArgs> | null
  }


  /**
   * Model Inversor
   */

  export type AggregateInversor = {
    _count: InversorCountAggregateOutputType | null
    _avg: InversorAvgAggregateOutputType | null
    _sum: InversorSumAggregateOutputType | null
    _min: InversorMinAggregateOutputType | null
    _max: InversorMaxAggregateOutputType | null
  }

  export type InversorAvgAggregateOutputType = {
    id: number | null
    usinaId: number | null
  }

  export type InversorSumAggregateOutputType = {
    id: number | null
    usinaId: number | null
  }

  export type InversorMinAggregateOutputType = {
    id: number | null
    usinaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InversorMaxAggregateOutputType = {
    id: number | null
    usinaId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InversorCountAggregateOutputType = {
    id: number
    usinaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InversorAvgAggregateInputType = {
    id?: true
    usinaId?: true
  }

  export type InversorSumAggregateInputType = {
    id?: true
    usinaId?: true
  }

  export type InversorMinAggregateInputType = {
    id?: true
    usinaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InversorMaxAggregateInputType = {
    id?: true
    usinaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InversorCountAggregateInputType = {
    id?: true
    usinaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InversorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inversor to aggregate.
     */
    where?: InversorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inversors to fetch.
     */
    orderBy?: InversorOrderByWithRelationInput | InversorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InversorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inversors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inversors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inversors
    **/
    _count?: true | InversorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InversorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InversorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InversorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InversorMaxAggregateInputType
  }

  export type GetInversorAggregateType<T extends InversorAggregateArgs> = {
        [P in keyof T & keyof AggregateInversor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInversor[P]>
      : GetScalarType<T[P], AggregateInversor[P]>
  }




  export type InversorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InversorWhereInput
    orderBy?: InversorOrderByWithAggregationInput | InversorOrderByWithAggregationInput[]
    by: InversorScalarFieldEnum[] | InversorScalarFieldEnum
    having?: InversorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InversorCountAggregateInputType | true
    _avg?: InversorAvgAggregateInputType
    _sum?: InversorSumAggregateInputType
    _min?: InversorMinAggregateInputType
    _max?: InversorMaxAggregateInputType
  }

  export type InversorGroupByOutputType = {
    id: number
    usinaId: number
    createdAt: Date
    updatedAt: Date
    _count: InversorCountAggregateOutputType | null
    _avg: InversorAvgAggregateOutputType | null
    _sum: InversorSumAggregateOutputType | null
    _min: InversorMinAggregateOutputType | null
    _max: InversorMaxAggregateOutputType | null
  }

  type GetInversorGroupByPayload<T extends InversorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InversorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InversorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InversorGroupByOutputType[P]>
            : GetScalarType<T[P], InversorGroupByOutputType[P]>
        }
      >
    >


  export type InversorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usinaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usina?: boolean | UsinaDefaultArgs<ExtArgs>
    metricas?: boolean | Inversor$metricasArgs<ExtArgs>
    _count?: boolean | InversorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inversor"]>

  export type InversorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usinaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usina?: boolean | UsinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inversor"]>

  export type InversorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usinaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usina?: boolean | UsinaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inversor"]>

  export type InversorSelectScalar = {
    id?: boolean
    usinaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InversorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usinaId" | "createdAt" | "updatedAt", ExtArgs["result"]["inversor"]>
  export type InversorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usina?: boolean | UsinaDefaultArgs<ExtArgs>
    metricas?: boolean | Inversor$metricasArgs<ExtArgs>
    _count?: boolean | InversorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InversorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usina?: boolean | UsinaDefaultArgs<ExtArgs>
  }
  export type InversorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usina?: boolean | UsinaDefaultArgs<ExtArgs>
  }

  export type $InversorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inversor"
    objects: {
      usina: Prisma.$UsinaPayload<ExtArgs>
      metricas: Prisma.$MetricaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usinaId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inversor"]>
    composites: {}
  }

  type InversorGetPayload<S extends boolean | null | undefined | InversorDefaultArgs> = $Result.GetResult<Prisma.$InversorPayload, S>

  type InversorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InversorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InversorCountAggregateInputType | true
    }

  export interface InversorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inversor'], meta: { name: 'Inversor' } }
    /**
     * Find zero or one Inversor that matches the filter.
     * @param {InversorFindUniqueArgs} args - Arguments to find a Inversor
     * @example
     * // Get one Inversor
     * const inversor = await prisma.inversor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InversorFindUniqueArgs>(args: SelectSubset<T, InversorFindUniqueArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inversor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InversorFindUniqueOrThrowArgs} args - Arguments to find a Inversor
     * @example
     * // Get one Inversor
     * const inversor = await prisma.inversor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InversorFindUniqueOrThrowArgs>(args: SelectSubset<T, InversorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inversor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InversorFindFirstArgs} args - Arguments to find a Inversor
     * @example
     * // Get one Inversor
     * const inversor = await prisma.inversor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InversorFindFirstArgs>(args?: SelectSubset<T, InversorFindFirstArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inversor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InversorFindFirstOrThrowArgs} args - Arguments to find a Inversor
     * @example
     * // Get one Inversor
     * const inversor = await prisma.inversor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InversorFindFirstOrThrowArgs>(args?: SelectSubset<T, InversorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inversors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InversorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inversors
     * const inversors = await prisma.inversor.findMany()
     * 
     * // Get first 10 Inversors
     * const inversors = await prisma.inversor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inversorWithIdOnly = await prisma.inversor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InversorFindManyArgs>(args?: SelectSubset<T, InversorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inversor.
     * @param {InversorCreateArgs} args - Arguments to create a Inversor.
     * @example
     * // Create one Inversor
     * const Inversor = await prisma.inversor.create({
     *   data: {
     *     // ... data to create a Inversor
     *   }
     * })
     * 
     */
    create<T extends InversorCreateArgs>(args: SelectSubset<T, InversorCreateArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inversors.
     * @param {InversorCreateManyArgs} args - Arguments to create many Inversors.
     * @example
     * // Create many Inversors
     * const inversor = await prisma.inversor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InversorCreateManyArgs>(args?: SelectSubset<T, InversorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inversors and returns the data saved in the database.
     * @param {InversorCreateManyAndReturnArgs} args - Arguments to create many Inversors.
     * @example
     * // Create many Inversors
     * const inversor = await prisma.inversor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inversors and only return the `id`
     * const inversorWithIdOnly = await prisma.inversor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InversorCreateManyAndReturnArgs>(args?: SelectSubset<T, InversorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inversor.
     * @param {InversorDeleteArgs} args - Arguments to delete one Inversor.
     * @example
     * // Delete one Inversor
     * const Inversor = await prisma.inversor.delete({
     *   where: {
     *     // ... filter to delete one Inversor
     *   }
     * })
     * 
     */
    delete<T extends InversorDeleteArgs>(args: SelectSubset<T, InversorDeleteArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inversor.
     * @param {InversorUpdateArgs} args - Arguments to update one Inversor.
     * @example
     * // Update one Inversor
     * const inversor = await prisma.inversor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InversorUpdateArgs>(args: SelectSubset<T, InversorUpdateArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inversors.
     * @param {InversorDeleteManyArgs} args - Arguments to filter Inversors to delete.
     * @example
     * // Delete a few Inversors
     * const { count } = await prisma.inversor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InversorDeleteManyArgs>(args?: SelectSubset<T, InversorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inversors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InversorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inversors
     * const inversor = await prisma.inversor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InversorUpdateManyArgs>(args: SelectSubset<T, InversorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inversors and returns the data updated in the database.
     * @param {InversorUpdateManyAndReturnArgs} args - Arguments to update many Inversors.
     * @example
     * // Update many Inversors
     * const inversor = await prisma.inversor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inversors and only return the `id`
     * const inversorWithIdOnly = await prisma.inversor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InversorUpdateManyAndReturnArgs>(args: SelectSubset<T, InversorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inversor.
     * @param {InversorUpsertArgs} args - Arguments to update or create a Inversor.
     * @example
     * // Update or create a Inversor
     * const inversor = await prisma.inversor.upsert({
     *   create: {
     *     // ... data to create a Inversor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inversor we want to update
     *   }
     * })
     */
    upsert<T extends InversorUpsertArgs>(args: SelectSubset<T, InversorUpsertArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inversors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InversorCountArgs} args - Arguments to filter Inversors to count.
     * @example
     * // Count the number of Inversors
     * const count = await prisma.inversor.count({
     *   where: {
     *     // ... the filter for the Inversors we want to count
     *   }
     * })
    **/
    count<T extends InversorCountArgs>(
      args?: Subset<T, InversorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InversorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inversor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InversorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InversorAggregateArgs>(args: Subset<T, InversorAggregateArgs>): Prisma.PrismaPromise<GetInversorAggregateType<T>>

    /**
     * Group by Inversor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InversorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InversorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InversorGroupByArgs['orderBy'] }
        : { orderBy?: InversorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InversorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInversorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inversor model
   */
  readonly fields: InversorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inversor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InversorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usina<T extends UsinaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsinaDefaultArgs<ExtArgs>>): Prisma__UsinaClient<$Result.GetResult<Prisma.$UsinaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metricas<T extends Inversor$metricasArgs<ExtArgs> = {}>(args?: Subset<T, Inversor$metricasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inversor model
   */
  interface InversorFieldRefs {
    readonly id: FieldRef<"Inversor", 'Int'>
    readonly usinaId: FieldRef<"Inversor", 'Int'>
    readonly createdAt: FieldRef<"Inversor", 'DateTime'>
    readonly updatedAt: FieldRef<"Inversor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inversor findUnique
   */
  export type InversorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * Filter, which Inversor to fetch.
     */
    where: InversorWhereUniqueInput
  }

  /**
   * Inversor findUniqueOrThrow
   */
  export type InversorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * Filter, which Inversor to fetch.
     */
    where: InversorWhereUniqueInput
  }

  /**
   * Inversor findFirst
   */
  export type InversorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * Filter, which Inversor to fetch.
     */
    where?: InversorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inversors to fetch.
     */
    orderBy?: InversorOrderByWithRelationInput | InversorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inversors.
     */
    cursor?: InversorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inversors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inversors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inversors.
     */
    distinct?: InversorScalarFieldEnum | InversorScalarFieldEnum[]
  }

  /**
   * Inversor findFirstOrThrow
   */
  export type InversorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * Filter, which Inversor to fetch.
     */
    where?: InversorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inversors to fetch.
     */
    orderBy?: InversorOrderByWithRelationInput | InversorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inversors.
     */
    cursor?: InversorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inversors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inversors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inversors.
     */
    distinct?: InversorScalarFieldEnum | InversorScalarFieldEnum[]
  }

  /**
   * Inversor findMany
   */
  export type InversorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * Filter, which Inversors to fetch.
     */
    where?: InversorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inversors to fetch.
     */
    orderBy?: InversorOrderByWithRelationInput | InversorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inversors.
     */
    cursor?: InversorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inversors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inversors.
     */
    skip?: number
    distinct?: InversorScalarFieldEnum | InversorScalarFieldEnum[]
  }

  /**
   * Inversor create
   */
  export type InversorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * The data needed to create a Inversor.
     */
    data: XOR<InversorCreateInput, InversorUncheckedCreateInput>
  }

  /**
   * Inversor createMany
   */
  export type InversorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inversors.
     */
    data: InversorCreateManyInput | InversorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inversor createManyAndReturn
   */
  export type InversorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * The data used to create many Inversors.
     */
    data: InversorCreateManyInput | InversorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inversor update
   */
  export type InversorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * The data needed to update a Inversor.
     */
    data: XOR<InversorUpdateInput, InversorUncheckedUpdateInput>
    /**
     * Choose, which Inversor to update.
     */
    where: InversorWhereUniqueInput
  }

  /**
   * Inversor updateMany
   */
  export type InversorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inversors.
     */
    data: XOR<InversorUpdateManyMutationInput, InversorUncheckedUpdateManyInput>
    /**
     * Filter which Inversors to update
     */
    where?: InversorWhereInput
    /**
     * Limit how many Inversors to update.
     */
    limit?: number
  }

  /**
   * Inversor updateManyAndReturn
   */
  export type InversorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * The data used to update Inversors.
     */
    data: XOR<InversorUpdateManyMutationInput, InversorUncheckedUpdateManyInput>
    /**
     * Filter which Inversors to update
     */
    where?: InversorWhereInput
    /**
     * Limit how many Inversors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inversor upsert
   */
  export type InversorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * The filter to search for the Inversor to update in case it exists.
     */
    where: InversorWhereUniqueInput
    /**
     * In case the Inversor found by the `where` argument doesn't exist, create a new Inversor with this data.
     */
    create: XOR<InversorCreateInput, InversorUncheckedCreateInput>
    /**
     * In case the Inversor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InversorUpdateInput, InversorUncheckedUpdateInput>
  }

  /**
   * Inversor delete
   */
  export type InversorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
    /**
     * Filter which Inversor to delete.
     */
    where: InversorWhereUniqueInput
  }

  /**
   * Inversor deleteMany
   */
  export type InversorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inversors to delete
     */
    where?: InversorWhereInput
    /**
     * Limit how many Inversors to delete.
     */
    limit?: number
  }

  /**
   * Inversor.metricas
   */
  export type Inversor$metricasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    where?: MetricaWhereInput
    orderBy?: MetricaOrderByWithRelationInput | MetricaOrderByWithRelationInput[]
    cursor?: MetricaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetricaScalarFieldEnum | MetricaScalarFieldEnum[]
  }

  /**
   * Inversor without action
   */
  export type InversorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inversor
     */
    select?: InversorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inversor
     */
    omit?: InversorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InversorInclude<ExtArgs> | null
  }


  /**
   * Model Metrica
   */

  export type AggregateMetrica = {
    _count: MetricaCountAggregateOutputType | null
    _avg: MetricaAvgAggregateOutputType | null
    _sum: MetricaSumAggregateOutputType | null
    _min: MetricaMinAggregateOutputType | null
    _max: MetricaMaxAggregateOutputType | null
  }

  export type MetricaAvgAggregateOutputType = {
    id: number | null
    inversorId: number | null
    potenciaAtivaWatt: number | null
    temperaturaCelsius: number | null
  }

  export type MetricaSumAggregateOutputType = {
    id: number | null
    inversorId: number | null
    potenciaAtivaWatt: number | null
    temperaturaCelsius: number | null
  }

  export type MetricaMinAggregateOutputType = {
    id: number | null
    inversorId: number | null
    potenciaAtivaWatt: number | null
    temperaturaCelsius: number | null
    datetime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetricaMaxAggregateOutputType = {
    id: number | null
    inversorId: number | null
    potenciaAtivaWatt: number | null
    temperaturaCelsius: number | null
    datetime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetricaCountAggregateOutputType = {
    id: number
    inversorId: number
    potenciaAtivaWatt: number
    temperaturaCelsius: number
    datetime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetricaAvgAggregateInputType = {
    id?: true
    inversorId?: true
    potenciaAtivaWatt?: true
    temperaturaCelsius?: true
  }

  export type MetricaSumAggregateInputType = {
    id?: true
    inversorId?: true
    potenciaAtivaWatt?: true
    temperaturaCelsius?: true
  }

  export type MetricaMinAggregateInputType = {
    id?: true
    inversorId?: true
    potenciaAtivaWatt?: true
    temperaturaCelsius?: true
    datetime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetricaMaxAggregateInputType = {
    id?: true
    inversorId?: true
    potenciaAtivaWatt?: true
    temperaturaCelsius?: true
    datetime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetricaCountAggregateInputType = {
    id?: true
    inversorId?: true
    potenciaAtivaWatt?: true
    temperaturaCelsius?: true
    datetime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetricaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrica to aggregate.
     */
    where?: MetricaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metricas to fetch.
     */
    orderBy?: MetricaOrderByWithRelationInput | MetricaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetricaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metricas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metricas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metricas
    **/
    _count?: true | MetricaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MetricaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MetricaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetricaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetricaMaxAggregateInputType
  }

  export type GetMetricaAggregateType<T extends MetricaAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrica[P]>
      : GetScalarType<T[P], AggregateMetrica[P]>
  }




  export type MetricaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetricaWhereInput
    orderBy?: MetricaOrderByWithAggregationInput | MetricaOrderByWithAggregationInput[]
    by: MetricaScalarFieldEnum[] | MetricaScalarFieldEnum
    having?: MetricaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetricaCountAggregateInputType | true
    _avg?: MetricaAvgAggregateInputType
    _sum?: MetricaSumAggregateInputType
    _min?: MetricaMinAggregateInputType
    _max?: MetricaMaxAggregateInputType
  }

  export type MetricaGroupByOutputType = {
    id: number
    inversorId: number
    potenciaAtivaWatt: number | null
    temperaturaCelsius: number | null
    datetime: Date
    createdAt: Date
    updatedAt: Date
    _count: MetricaCountAggregateOutputType | null
    _avg: MetricaAvgAggregateOutputType | null
    _sum: MetricaSumAggregateOutputType | null
    _min: MetricaMinAggregateOutputType | null
    _max: MetricaMaxAggregateOutputType | null
  }

  type GetMetricaGroupByPayload<T extends MetricaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetricaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetricaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetricaGroupByOutputType[P]>
            : GetScalarType<T[P], MetricaGroupByOutputType[P]>
        }
      >
    >


  export type MetricaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inversorId?: boolean
    potenciaAtivaWatt?: boolean
    temperaturaCelsius?: boolean
    datetime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inversor?: boolean | InversorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrica"]>

  export type MetricaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inversorId?: boolean
    potenciaAtivaWatt?: boolean
    temperaturaCelsius?: boolean
    datetime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inversor?: boolean | InversorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrica"]>

  export type MetricaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inversorId?: boolean
    potenciaAtivaWatt?: boolean
    temperaturaCelsius?: boolean
    datetime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inversor?: boolean | InversorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrica"]>

  export type MetricaSelectScalar = {
    id?: boolean
    inversorId?: boolean
    potenciaAtivaWatt?: boolean
    temperaturaCelsius?: boolean
    datetime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetricaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inversorId" | "potenciaAtivaWatt" | "temperaturaCelsius" | "datetime" | "createdAt" | "updatedAt", ExtArgs["result"]["metrica"]>
  export type MetricaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inversor?: boolean | InversorDefaultArgs<ExtArgs>
  }
  export type MetricaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inversor?: boolean | InversorDefaultArgs<ExtArgs>
  }
  export type MetricaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inversor?: boolean | InversorDefaultArgs<ExtArgs>
  }

  export type $MetricaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metrica"
    objects: {
      inversor: Prisma.$InversorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      inversorId: number
      potenciaAtivaWatt: number | null
      temperaturaCelsius: number | null
      datetime: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metrica"]>
    composites: {}
  }

  type MetricaGetPayload<S extends boolean | null | undefined | MetricaDefaultArgs> = $Result.GetResult<Prisma.$MetricaPayload, S>

  type MetricaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetricaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetricaCountAggregateInputType | true
    }

  export interface MetricaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metrica'], meta: { name: 'Metrica' } }
    /**
     * Find zero or one Metrica that matches the filter.
     * @param {MetricaFindUniqueArgs} args - Arguments to find a Metrica
     * @example
     * // Get one Metrica
     * const metrica = await prisma.metrica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetricaFindUniqueArgs>(args: SelectSubset<T, MetricaFindUniqueArgs<ExtArgs>>): Prisma__MetricaClient<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metrica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetricaFindUniqueOrThrowArgs} args - Arguments to find a Metrica
     * @example
     * // Get one Metrica
     * const metrica = await prisma.metrica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetricaFindUniqueOrThrowArgs>(args: SelectSubset<T, MetricaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetricaClient<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metrica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaFindFirstArgs} args - Arguments to find a Metrica
     * @example
     * // Get one Metrica
     * const metrica = await prisma.metrica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetricaFindFirstArgs>(args?: SelectSubset<T, MetricaFindFirstArgs<ExtArgs>>): Prisma__MetricaClient<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metrica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaFindFirstOrThrowArgs} args - Arguments to find a Metrica
     * @example
     * // Get one Metrica
     * const metrica = await prisma.metrica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetricaFindFirstOrThrowArgs>(args?: SelectSubset<T, MetricaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetricaClient<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metricas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metricas
     * const metricas = await prisma.metrica.findMany()
     * 
     * // Get first 10 Metricas
     * const metricas = await prisma.metrica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metricaWithIdOnly = await prisma.metrica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetricaFindManyArgs>(args?: SelectSubset<T, MetricaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metrica.
     * @param {MetricaCreateArgs} args - Arguments to create a Metrica.
     * @example
     * // Create one Metrica
     * const Metrica = await prisma.metrica.create({
     *   data: {
     *     // ... data to create a Metrica
     *   }
     * })
     * 
     */
    create<T extends MetricaCreateArgs>(args: SelectSubset<T, MetricaCreateArgs<ExtArgs>>): Prisma__MetricaClient<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metricas.
     * @param {MetricaCreateManyArgs} args - Arguments to create many Metricas.
     * @example
     * // Create many Metricas
     * const metrica = await prisma.metrica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetricaCreateManyArgs>(args?: SelectSubset<T, MetricaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metricas and returns the data saved in the database.
     * @param {MetricaCreateManyAndReturnArgs} args - Arguments to create many Metricas.
     * @example
     * // Create many Metricas
     * const metrica = await prisma.metrica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metricas and only return the `id`
     * const metricaWithIdOnly = await prisma.metrica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetricaCreateManyAndReturnArgs>(args?: SelectSubset<T, MetricaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metrica.
     * @param {MetricaDeleteArgs} args - Arguments to delete one Metrica.
     * @example
     * // Delete one Metrica
     * const Metrica = await prisma.metrica.delete({
     *   where: {
     *     // ... filter to delete one Metrica
     *   }
     * })
     * 
     */
    delete<T extends MetricaDeleteArgs>(args: SelectSubset<T, MetricaDeleteArgs<ExtArgs>>): Prisma__MetricaClient<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metrica.
     * @param {MetricaUpdateArgs} args - Arguments to update one Metrica.
     * @example
     * // Update one Metrica
     * const metrica = await prisma.metrica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetricaUpdateArgs>(args: SelectSubset<T, MetricaUpdateArgs<ExtArgs>>): Prisma__MetricaClient<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metricas.
     * @param {MetricaDeleteManyArgs} args - Arguments to filter Metricas to delete.
     * @example
     * // Delete a few Metricas
     * const { count } = await prisma.metrica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetricaDeleteManyArgs>(args?: SelectSubset<T, MetricaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metricas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metricas
     * const metrica = await prisma.metrica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetricaUpdateManyArgs>(args: SelectSubset<T, MetricaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metricas and returns the data updated in the database.
     * @param {MetricaUpdateManyAndReturnArgs} args - Arguments to update many Metricas.
     * @example
     * // Update many Metricas
     * const metrica = await prisma.metrica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metricas and only return the `id`
     * const metricaWithIdOnly = await prisma.metrica.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetricaUpdateManyAndReturnArgs>(args: SelectSubset<T, MetricaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metrica.
     * @param {MetricaUpsertArgs} args - Arguments to update or create a Metrica.
     * @example
     * // Update or create a Metrica
     * const metrica = await prisma.metrica.upsert({
     *   create: {
     *     // ... data to create a Metrica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metrica we want to update
     *   }
     * })
     */
    upsert<T extends MetricaUpsertArgs>(args: SelectSubset<T, MetricaUpsertArgs<ExtArgs>>): Prisma__MetricaClient<$Result.GetResult<Prisma.$MetricaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metricas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaCountArgs} args - Arguments to filter Metricas to count.
     * @example
     * // Count the number of Metricas
     * const count = await prisma.metrica.count({
     *   where: {
     *     // ... the filter for the Metricas we want to count
     *   }
     * })
    **/
    count<T extends MetricaCountArgs>(
      args?: Subset<T, MetricaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetricaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metrica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MetricaAggregateArgs>(args: Subset<T, MetricaAggregateArgs>): Prisma.PrismaPromise<GetMetricaAggregateType<T>>

    /**
     * Group by Metrica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetricaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MetricaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetricaGroupByArgs['orderBy'] }
        : { orderBy?: MetricaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MetricaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetricaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metrica model
   */
  readonly fields: MetricaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metrica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetricaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inversor<T extends InversorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InversorDefaultArgs<ExtArgs>>): Prisma__InversorClient<$Result.GetResult<Prisma.$InversorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Metrica model
   */
  interface MetricaFieldRefs {
    readonly id: FieldRef<"Metrica", 'Int'>
    readonly inversorId: FieldRef<"Metrica", 'Int'>
    readonly potenciaAtivaWatt: FieldRef<"Metrica", 'Float'>
    readonly temperaturaCelsius: FieldRef<"Metrica", 'Float'>
    readonly datetime: FieldRef<"Metrica", 'DateTime'>
    readonly createdAt: FieldRef<"Metrica", 'DateTime'>
    readonly updatedAt: FieldRef<"Metrica", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Metrica findUnique
   */
  export type MetricaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * Filter, which Metrica to fetch.
     */
    where: MetricaWhereUniqueInput
  }

  /**
   * Metrica findUniqueOrThrow
   */
  export type MetricaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * Filter, which Metrica to fetch.
     */
    where: MetricaWhereUniqueInput
  }

  /**
   * Metrica findFirst
   */
  export type MetricaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * Filter, which Metrica to fetch.
     */
    where?: MetricaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metricas to fetch.
     */
    orderBy?: MetricaOrderByWithRelationInput | MetricaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metricas.
     */
    cursor?: MetricaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metricas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metricas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metricas.
     */
    distinct?: MetricaScalarFieldEnum | MetricaScalarFieldEnum[]
  }

  /**
   * Metrica findFirstOrThrow
   */
  export type MetricaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * Filter, which Metrica to fetch.
     */
    where?: MetricaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metricas to fetch.
     */
    orderBy?: MetricaOrderByWithRelationInput | MetricaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metricas.
     */
    cursor?: MetricaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metricas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metricas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metricas.
     */
    distinct?: MetricaScalarFieldEnum | MetricaScalarFieldEnum[]
  }

  /**
   * Metrica findMany
   */
  export type MetricaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * Filter, which Metricas to fetch.
     */
    where?: MetricaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metricas to fetch.
     */
    orderBy?: MetricaOrderByWithRelationInput | MetricaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metricas.
     */
    cursor?: MetricaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metricas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metricas.
     */
    skip?: number
    distinct?: MetricaScalarFieldEnum | MetricaScalarFieldEnum[]
  }

  /**
   * Metrica create
   */
  export type MetricaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * The data needed to create a Metrica.
     */
    data: XOR<MetricaCreateInput, MetricaUncheckedCreateInput>
  }

  /**
   * Metrica createMany
   */
  export type MetricaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metricas.
     */
    data: MetricaCreateManyInput | MetricaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metrica createManyAndReturn
   */
  export type MetricaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * The data used to create many Metricas.
     */
    data: MetricaCreateManyInput | MetricaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metrica update
   */
  export type MetricaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * The data needed to update a Metrica.
     */
    data: XOR<MetricaUpdateInput, MetricaUncheckedUpdateInput>
    /**
     * Choose, which Metrica to update.
     */
    where: MetricaWhereUniqueInput
  }

  /**
   * Metrica updateMany
   */
  export type MetricaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metricas.
     */
    data: XOR<MetricaUpdateManyMutationInput, MetricaUncheckedUpdateManyInput>
    /**
     * Filter which Metricas to update
     */
    where?: MetricaWhereInput
    /**
     * Limit how many Metricas to update.
     */
    limit?: number
  }

  /**
   * Metrica updateManyAndReturn
   */
  export type MetricaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * The data used to update Metricas.
     */
    data: XOR<MetricaUpdateManyMutationInput, MetricaUncheckedUpdateManyInput>
    /**
     * Filter which Metricas to update
     */
    where?: MetricaWhereInput
    /**
     * Limit how many Metricas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Metrica upsert
   */
  export type MetricaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * The filter to search for the Metrica to update in case it exists.
     */
    where: MetricaWhereUniqueInput
    /**
     * In case the Metrica found by the `where` argument doesn't exist, create a new Metrica with this data.
     */
    create: XOR<MetricaCreateInput, MetricaUncheckedCreateInput>
    /**
     * In case the Metrica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetricaUpdateInput, MetricaUncheckedUpdateInput>
  }

  /**
   * Metrica delete
   */
  export type MetricaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
    /**
     * Filter which Metrica to delete.
     */
    where: MetricaWhereUniqueInput
  }

  /**
   * Metrica deleteMany
   */
  export type MetricaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metricas to delete
     */
    where?: MetricaWhereInput
    /**
     * Limit how many Metricas to delete.
     */
    limit?: number
  }

  /**
   * Metrica without action
   */
  export type MetricaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrica
     */
    select?: MetricaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrica
     */
    omit?: MetricaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetricaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsinaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsinaScalarFieldEnum = (typeof UsinaScalarFieldEnum)[keyof typeof UsinaScalarFieldEnum]


  export const InversorScalarFieldEnum: {
    id: 'id',
    usinaId: 'usinaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InversorScalarFieldEnum = (typeof InversorScalarFieldEnum)[keyof typeof InversorScalarFieldEnum]


  export const MetricaScalarFieldEnum: {
    id: 'id',
    inversorId: 'inversorId',
    potenciaAtivaWatt: 'potenciaAtivaWatt',
    temperaturaCelsius: 'temperaturaCelsius',
    datetime: 'datetime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetricaScalarFieldEnum = (typeof MetricaScalarFieldEnum)[keyof typeof MetricaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsinaWhereInput = {
    AND?: UsinaWhereInput | UsinaWhereInput[]
    OR?: UsinaWhereInput[]
    NOT?: UsinaWhereInput | UsinaWhereInput[]
    id?: IntFilter<"Usina"> | number
    nome?: StringFilter<"Usina"> | string
    createdAt?: DateTimeFilter<"Usina"> | Date | string
    updatedAt?: DateTimeFilter<"Usina"> | Date | string
    inversores?: InversorListRelationFilter
  }

  export type UsinaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inversores?: InversorOrderByRelationAggregateInput
  }

  export type UsinaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: UsinaWhereInput | UsinaWhereInput[]
    OR?: UsinaWhereInput[]
    NOT?: UsinaWhereInput | UsinaWhereInput[]
    createdAt?: DateTimeFilter<"Usina"> | Date | string
    updatedAt?: DateTimeFilter<"Usina"> | Date | string
    inversores?: InversorListRelationFilter
  }, "id" | "nome">

  export type UsinaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsinaCountOrderByAggregateInput
    _avg?: UsinaAvgOrderByAggregateInput
    _max?: UsinaMaxOrderByAggregateInput
    _min?: UsinaMinOrderByAggregateInput
    _sum?: UsinaSumOrderByAggregateInput
  }

  export type UsinaScalarWhereWithAggregatesInput = {
    AND?: UsinaScalarWhereWithAggregatesInput | UsinaScalarWhereWithAggregatesInput[]
    OR?: UsinaScalarWhereWithAggregatesInput[]
    NOT?: UsinaScalarWhereWithAggregatesInput | UsinaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usina"> | number
    nome?: StringWithAggregatesFilter<"Usina"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usina"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usina"> | Date | string
  }

  export type InversorWhereInput = {
    AND?: InversorWhereInput | InversorWhereInput[]
    OR?: InversorWhereInput[]
    NOT?: InversorWhereInput | InversorWhereInput[]
    id?: IntFilter<"Inversor"> | number
    usinaId?: IntFilter<"Inversor"> | number
    createdAt?: DateTimeFilter<"Inversor"> | Date | string
    updatedAt?: DateTimeFilter<"Inversor"> | Date | string
    usina?: XOR<UsinaScalarRelationFilter, UsinaWhereInput>
    metricas?: MetricaListRelationFilter
  }

  export type InversorOrderByWithRelationInput = {
    id?: SortOrder
    usinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usina?: UsinaOrderByWithRelationInput
    metricas?: MetricaOrderByRelationAggregateInput
  }

  export type InversorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InversorWhereInput | InversorWhereInput[]
    OR?: InversorWhereInput[]
    NOT?: InversorWhereInput | InversorWhereInput[]
    usinaId?: IntFilter<"Inversor"> | number
    createdAt?: DateTimeFilter<"Inversor"> | Date | string
    updatedAt?: DateTimeFilter<"Inversor"> | Date | string
    usina?: XOR<UsinaScalarRelationFilter, UsinaWhereInput>
    metricas?: MetricaListRelationFilter
  }, "id">

  export type InversorOrderByWithAggregationInput = {
    id?: SortOrder
    usinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InversorCountOrderByAggregateInput
    _avg?: InversorAvgOrderByAggregateInput
    _max?: InversorMaxOrderByAggregateInput
    _min?: InversorMinOrderByAggregateInput
    _sum?: InversorSumOrderByAggregateInput
  }

  export type InversorScalarWhereWithAggregatesInput = {
    AND?: InversorScalarWhereWithAggregatesInput | InversorScalarWhereWithAggregatesInput[]
    OR?: InversorScalarWhereWithAggregatesInput[]
    NOT?: InversorScalarWhereWithAggregatesInput | InversorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Inversor"> | number
    usinaId?: IntWithAggregatesFilter<"Inversor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Inversor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inversor"> | Date | string
  }

  export type MetricaWhereInput = {
    AND?: MetricaWhereInput | MetricaWhereInput[]
    OR?: MetricaWhereInput[]
    NOT?: MetricaWhereInput | MetricaWhereInput[]
    id?: IntFilter<"Metrica"> | number
    inversorId?: IntFilter<"Metrica"> | number
    potenciaAtivaWatt?: FloatNullableFilter<"Metrica"> | number | null
    temperaturaCelsius?: FloatNullableFilter<"Metrica"> | number | null
    datetime?: DateTimeFilter<"Metrica"> | Date | string
    createdAt?: DateTimeFilter<"Metrica"> | Date | string
    updatedAt?: DateTimeFilter<"Metrica"> | Date | string
    inversor?: XOR<InversorScalarRelationFilter, InversorWhereInput>
  }

  export type MetricaOrderByWithRelationInput = {
    id?: SortOrder
    inversorId?: SortOrder
    potenciaAtivaWatt?: SortOrderInput | SortOrder
    temperaturaCelsius?: SortOrderInput | SortOrder
    datetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inversor?: InversorOrderByWithRelationInput
  }

  export type MetricaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MetricaWhereInput | MetricaWhereInput[]
    OR?: MetricaWhereInput[]
    NOT?: MetricaWhereInput | MetricaWhereInput[]
    inversorId?: IntFilter<"Metrica"> | number
    potenciaAtivaWatt?: FloatNullableFilter<"Metrica"> | number | null
    temperaturaCelsius?: FloatNullableFilter<"Metrica"> | number | null
    datetime?: DateTimeFilter<"Metrica"> | Date | string
    createdAt?: DateTimeFilter<"Metrica"> | Date | string
    updatedAt?: DateTimeFilter<"Metrica"> | Date | string
    inversor?: XOR<InversorScalarRelationFilter, InversorWhereInput>
  }, "id">

  export type MetricaOrderByWithAggregationInput = {
    id?: SortOrder
    inversorId?: SortOrder
    potenciaAtivaWatt?: SortOrderInput | SortOrder
    temperaturaCelsius?: SortOrderInput | SortOrder
    datetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetricaCountOrderByAggregateInput
    _avg?: MetricaAvgOrderByAggregateInput
    _max?: MetricaMaxOrderByAggregateInput
    _min?: MetricaMinOrderByAggregateInput
    _sum?: MetricaSumOrderByAggregateInput
  }

  export type MetricaScalarWhereWithAggregatesInput = {
    AND?: MetricaScalarWhereWithAggregatesInput | MetricaScalarWhereWithAggregatesInput[]
    OR?: MetricaScalarWhereWithAggregatesInput[]
    NOT?: MetricaScalarWhereWithAggregatesInput | MetricaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Metrica"> | number
    inversorId?: IntWithAggregatesFilter<"Metrica"> | number
    potenciaAtivaWatt?: FloatNullableWithAggregatesFilter<"Metrica"> | number | null
    temperaturaCelsius?: FloatNullableWithAggregatesFilter<"Metrica"> | number | null
    datetime?: DateTimeWithAggregatesFilter<"Metrica"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Metrica"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Metrica"> | Date | string
  }

  export type UsinaCreateInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inversores?: InversorCreateNestedManyWithoutUsinaInput
  }

  export type UsinaUncheckedCreateInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inversores?: InversorUncheckedCreateNestedManyWithoutUsinaInput
  }

  export type UsinaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inversores?: InversorUpdateManyWithoutUsinaNestedInput
  }

  export type UsinaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inversores?: InversorUncheckedUpdateManyWithoutUsinaNestedInput
  }

  export type UsinaCreateManyInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsinaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsinaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InversorCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usina: UsinaCreateNestedOneWithoutInversoresInput
    metricas?: MetricaCreateNestedManyWithoutInversorInput
  }

  export type InversorUncheckedCreateInput = {
    id?: number
    usinaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metricas?: MetricaUncheckedCreateNestedManyWithoutInversorInput
  }

  export type InversorUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usina?: UsinaUpdateOneRequiredWithoutInversoresNestedInput
    metricas?: MetricaUpdateManyWithoutInversorNestedInput
  }

  export type InversorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usinaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricas?: MetricaUncheckedUpdateManyWithoutInversorNestedInput
  }

  export type InversorCreateManyInput = {
    id?: number
    usinaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InversorUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InversorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usinaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricaCreateInput = {
    potenciaAtivaWatt?: number | null
    temperaturaCelsius?: number | null
    datetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    inversor: InversorCreateNestedOneWithoutMetricasInput
  }

  export type MetricaUncheckedCreateInput = {
    id?: number
    inversorId: number
    potenciaAtivaWatt?: number | null
    temperaturaCelsius?: number | null
    datetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricaUpdateInput = {
    potenciaAtivaWatt?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inversor?: InversorUpdateOneRequiredWithoutMetricasNestedInput
  }

  export type MetricaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    inversorId?: IntFieldUpdateOperationsInput | number
    potenciaAtivaWatt?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricaCreateManyInput = {
    id?: number
    inversorId: number
    potenciaAtivaWatt?: number | null
    temperaturaCelsius?: number | null
    datetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricaUpdateManyMutationInput = {
    potenciaAtivaWatt?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    inversorId?: IntFieldUpdateOperationsInput | number
    potenciaAtivaWatt?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InversorListRelationFilter = {
    every?: InversorWhereInput
    some?: InversorWhereInput
    none?: InversorWhereInput
  }

  export type InversorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsinaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsinaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsinaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsinaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsinaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsinaScalarRelationFilter = {
    is?: UsinaWhereInput
    isNot?: UsinaWhereInput
  }

  export type MetricaListRelationFilter = {
    every?: MetricaWhereInput
    some?: MetricaWhereInput
    none?: MetricaWhereInput
  }

  export type MetricaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InversorCountOrderByAggregateInput = {
    id?: SortOrder
    usinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InversorAvgOrderByAggregateInput = {
    id?: SortOrder
    usinaId?: SortOrder
  }

  export type InversorMaxOrderByAggregateInput = {
    id?: SortOrder
    usinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InversorMinOrderByAggregateInput = {
    id?: SortOrder
    usinaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InversorSumOrderByAggregateInput = {
    id?: SortOrder
    usinaId?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type InversorScalarRelationFilter = {
    is?: InversorWhereInput
    isNot?: InversorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MetricaCountOrderByAggregateInput = {
    id?: SortOrder
    inversorId?: SortOrder
    potenciaAtivaWatt?: SortOrder
    temperaturaCelsius?: SortOrder
    datetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetricaAvgOrderByAggregateInput = {
    id?: SortOrder
    inversorId?: SortOrder
    potenciaAtivaWatt?: SortOrder
    temperaturaCelsius?: SortOrder
  }

  export type MetricaMaxOrderByAggregateInput = {
    id?: SortOrder
    inversorId?: SortOrder
    potenciaAtivaWatt?: SortOrder
    temperaturaCelsius?: SortOrder
    datetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetricaMinOrderByAggregateInput = {
    id?: SortOrder
    inversorId?: SortOrder
    potenciaAtivaWatt?: SortOrder
    temperaturaCelsius?: SortOrder
    datetime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetricaSumOrderByAggregateInput = {
    id?: SortOrder
    inversorId?: SortOrder
    potenciaAtivaWatt?: SortOrder
    temperaturaCelsius?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type InversorCreateNestedManyWithoutUsinaInput = {
    create?: XOR<InversorCreateWithoutUsinaInput, InversorUncheckedCreateWithoutUsinaInput> | InversorCreateWithoutUsinaInput[] | InversorUncheckedCreateWithoutUsinaInput[]
    connectOrCreate?: InversorCreateOrConnectWithoutUsinaInput | InversorCreateOrConnectWithoutUsinaInput[]
    createMany?: InversorCreateManyUsinaInputEnvelope
    connect?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
  }

  export type InversorUncheckedCreateNestedManyWithoutUsinaInput = {
    create?: XOR<InversorCreateWithoutUsinaInput, InversorUncheckedCreateWithoutUsinaInput> | InversorCreateWithoutUsinaInput[] | InversorUncheckedCreateWithoutUsinaInput[]
    connectOrCreate?: InversorCreateOrConnectWithoutUsinaInput | InversorCreateOrConnectWithoutUsinaInput[]
    createMany?: InversorCreateManyUsinaInputEnvelope
    connect?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InversorUpdateManyWithoutUsinaNestedInput = {
    create?: XOR<InversorCreateWithoutUsinaInput, InversorUncheckedCreateWithoutUsinaInput> | InversorCreateWithoutUsinaInput[] | InversorUncheckedCreateWithoutUsinaInput[]
    connectOrCreate?: InversorCreateOrConnectWithoutUsinaInput | InversorCreateOrConnectWithoutUsinaInput[]
    upsert?: InversorUpsertWithWhereUniqueWithoutUsinaInput | InversorUpsertWithWhereUniqueWithoutUsinaInput[]
    createMany?: InversorCreateManyUsinaInputEnvelope
    set?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
    disconnect?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
    delete?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
    connect?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
    update?: InversorUpdateWithWhereUniqueWithoutUsinaInput | InversorUpdateWithWhereUniqueWithoutUsinaInput[]
    updateMany?: InversorUpdateManyWithWhereWithoutUsinaInput | InversorUpdateManyWithWhereWithoutUsinaInput[]
    deleteMany?: InversorScalarWhereInput | InversorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InversorUncheckedUpdateManyWithoutUsinaNestedInput = {
    create?: XOR<InversorCreateWithoutUsinaInput, InversorUncheckedCreateWithoutUsinaInput> | InversorCreateWithoutUsinaInput[] | InversorUncheckedCreateWithoutUsinaInput[]
    connectOrCreate?: InversorCreateOrConnectWithoutUsinaInput | InversorCreateOrConnectWithoutUsinaInput[]
    upsert?: InversorUpsertWithWhereUniqueWithoutUsinaInput | InversorUpsertWithWhereUniqueWithoutUsinaInput[]
    createMany?: InversorCreateManyUsinaInputEnvelope
    set?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
    disconnect?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
    delete?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
    connect?: InversorWhereUniqueInput | InversorWhereUniqueInput[]
    update?: InversorUpdateWithWhereUniqueWithoutUsinaInput | InversorUpdateWithWhereUniqueWithoutUsinaInput[]
    updateMany?: InversorUpdateManyWithWhereWithoutUsinaInput | InversorUpdateManyWithWhereWithoutUsinaInput[]
    deleteMany?: InversorScalarWhereInput | InversorScalarWhereInput[]
  }

  export type UsinaCreateNestedOneWithoutInversoresInput = {
    create?: XOR<UsinaCreateWithoutInversoresInput, UsinaUncheckedCreateWithoutInversoresInput>
    connectOrCreate?: UsinaCreateOrConnectWithoutInversoresInput
    connect?: UsinaWhereUniqueInput
  }

  export type MetricaCreateNestedManyWithoutInversorInput = {
    create?: XOR<MetricaCreateWithoutInversorInput, MetricaUncheckedCreateWithoutInversorInput> | MetricaCreateWithoutInversorInput[] | MetricaUncheckedCreateWithoutInversorInput[]
    connectOrCreate?: MetricaCreateOrConnectWithoutInversorInput | MetricaCreateOrConnectWithoutInversorInput[]
    createMany?: MetricaCreateManyInversorInputEnvelope
    connect?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
  }

  export type MetricaUncheckedCreateNestedManyWithoutInversorInput = {
    create?: XOR<MetricaCreateWithoutInversorInput, MetricaUncheckedCreateWithoutInversorInput> | MetricaCreateWithoutInversorInput[] | MetricaUncheckedCreateWithoutInversorInput[]
    connectOrCreate?: MetricaCreateOrConnectWithoutInversorInput | MetricaCreateOrConnectWithoutInversorInput[]
    createMany?: MetricaCreateManyInversorInputEnvelope
    connect?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
  }

  export type UsinaUpdateOneRequiredWithoutInversoresNestedInput = {
    create?: XOR<UsinaCreateWithoutInversoresInput, UsinaUncheckedCreateWithoutInversoresInput>
    connectOrCreate?: UsinaCreateOrConnectWithoutInversoresInput
    upsert?: UsinaUpsertWithoutInversoresInput
    connect?: UsinaWhereUniqueInput
    update?: XOR<XOR<UsinaUpdateToOneWithWhereWithoutInversoresInput, UsinaUpdateWithoutInversoresInput>, UsinaUncheckedUpdateWithoutInversoresInput>
  }

  export type MetricaUpdateManyWithoutInversorNestedInput = {
    create?: XOR<MetricaCreateWithoutInversorInput, MetricaUncheckedCreateWithoutInversorInput> | MetricaCreateWithoutInversorInput[] | MetricaUncheckedCreateWithoutInversorInput[]
    connectOrCreate?: MetricaCreateOrConnectWithoutInversorInput | MetricaCreateOrConnectWithoutInversorInput[]
    upsert?: MetricaUpsertWithWhereUniqueWithoutInversorInput | MetricaUpsertWithWhereUniqueWithoutInversorInput[]
    createMany?: MetricaCreateManyInversorInputEnvelope
    set?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
    disconnect?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
    delete?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
    connect?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
    update?: MetricaUpdateWithWhereUniqueWithoutInversorInput | MetricaUpdateWithWhereUniqueWithoutInversorInput[]
    updateMany?: MetricaUpdateManyWithWhereWithoutInversorInput | MetricaUpdateManyWithWhereWithoutInversorInput[]
    deleteMany?: MetricaScalarWhereInput | MetricaScalarWhereInput[]
  }

  export type MetricaUncheckedUpdateManyWithoutInversorNestedInput = {
    create?: XOR<MetricaCreateWithoutInversorInput, MetricaUncheckedCreateWithoutInversorInput> | MetricaCreateWithoutInversorInput[] | MetricaUncheckedCreateWithoutInversorInput[]
    connectOrCreate?: MetricaCreateOrConnectWithoutInversorInput | MetricaCreateOrConnectWithoutInversorInput[]
    upsert?: MetricaUpsertWithWhereUniqueWithoutInversorInput | MetricaUpsertWithWhereUniqueWithoutInversorInput[]
    createMany?: MetricaCreateManyInversorInputEnvelope
    set?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
    disconnect?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
    delete?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
    connect?: MetricaWhereUniqueInput | MetricaWhereUniqueInput[]
    update?: MetricaUpdateWithWhereUniqueWithoutInversorInput | MetricaUpdateWithWhereUniqueWithoutInversorInput[]
    updateMany?: MetricaUpdateManyWithWhereWithoutInversorInput | MetricaUpdateManyWithWhereWithoutInversorInput[]
    deleteMany?: MetricaScalarWhereInput | MetricaScalarWhereInput[]
  }

  export type InversorCreateNestedOneWithoutMetricasInput = {
    create?: XOR<InversorCreateWithoutMetricasInput, InversorUncheckedCreateWithoutMetricasInput>
    connectOrCreate?: InversorCreateOrConnectWithoutMetricasInput
    connect?: InversorWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InversorUpdateOneRequiredWithoutMetricasNestedInput = {
    create?: XOR<InversorCreateWithoutMetricasInput, InversorUncheckedCreateWithoutMetricasInput>
    connectOrCreate?: InversorCreateOrConnectWithoutMetricasInput
    upsert?: InversorUpsertWithoutMetricasInput
    connect?: InversorWhereUniqueInput
    update?: XOR<XOR<InversorUpdateToOneWithWhereWithoutMetricasInput, InversorUpdateWithoutMetricasInput>, InversorUncheckedUpdateWithoutMetricasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InversorCreateWithoutUsinaInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    metricas?: MetricaCreateNestedManyWithoutInversorInput
  }

  export type InversorUncheckedCreateWithoutUsinaInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metricas?: MetricaUncheckedCreateNestedManyWithoutInversorInput
  }

  export type InversorCreateOrConnectWithoutUsinaInput = {
    where: InversorWhereUniqueInput
    create: XOR<InversorCreateWithoutUsinaInput, InversorUncheckedCreateWithoutUsinaInput>
  }

  export type InversorCreateManyUsinaInputEnvelope = {
    data: InversorCreateManyUsinaInput | InversorCreateManyUsinaInput[]
    skipDuplicates?: boolean
  }

  export type InversorUpsertWithWhereUniqueWithoutUsinaInput = {
    where: InversorWhereUniqueInput
    update: XOR<InversorUpdateWithoutUsinaInput, InversorUncheckedUpdateWithoutUsinaInput>
    create: XOR<InversorCreateWithoutUsinaInput, InversorUncheckedCreateWithoutUsinaInput>
  }

  export type InversorUpdateWithWhereUniqueWithoutUsinaInput = {
    where: InversorWhereUniqueInput
    data: XOR<InversorUpdateWithoutUsinaInput, InversorUncheckedUpdateWithoutUsinaInput>
  }

  export type InversorUpdateManyWithWhereWithoutUsinaInput = {
    where: InversorScalarWhereInput
    data: XOR<InversorUpdateManyMutationInput, InversorUncheckedUpdateManyWithoutUsinaInput>
  }

  export type InversorScalarWhereInput = {
    AND?: InversorScalarWhereInput | InversorScalarWhereInput[]
    OR?: InversorScalarWhereInput[]
    NOT?: InversorScalarWhereInput | InversorScalarWhereInput[]
    id?: IntFilter<"Inversor"> | number
    usinaId?: IntFilter<"Inversor"> | number
    createdAt?: DateTimeFilter<"Inversor"> | Date | string
    updatedAt?: DateTimeFilter<"Inversor"> | Date | string
  }

  export type UsinaCreateWithoutInversoresInput = {
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsinaUncheckedCreateWithoutInversoresInput = {
    id?: number
    nome: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsinaCreateOrConnectWithoutInversoresInput = {
    where: UsinaWhereUniqueInput
    create: XOR<UsinaCreateWithoutInversoresInput, UsinaUncheckedCreateWithoutInversoresInput>
  }

  export type MetricaCreateWithoutInversorInput = {
    potenciaAtivaWatt?: number | null
    temperaturaCelsius?: number | null
    datetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricaUncheckedCreateWithoutInversorInput = {
    id?: number
    potenciaAtivaWatt?: number | null
    temperaturaCelsius?: number | null
    datetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricaCreateOrConnectWithoutInversorInput = {
    where: MetricaWhereUniqueInput
    create: XOR<MetricaCreateWithoutInversorInput, MetricaUncheckedCreateWithoutInversorInput>
  }

  export type MetricaCreateManyInversorInputEnvelope = {
    data: MetricaCreateManyInversorInput | MetricaCreateManyInversorInput[]
    skipDuplicates?: boolean
  }

  export type UsinaUpsertWithoutInversoresInput = {
    update: XOR<UsinaUpdateWithoutInversoresInput, UsinaUncheckedUpdateWithoutInversoresInput>
    create: XOR<UsinaCreateWithoutInversoresInput, UsinaUncheckedCreateWithoutInversoresInput>
    where?: UsinaWhereInput
  }

  export type UsinaUpdateToOneWithWhereWithoutInversoresInput = {
    where?: UsinaWhereInput
    data: XOR<UsinaUpdateWithoutInversoresInput, UsinaUncheckedUpdateWithoutInversoresInput>
  }

  export type UsinaUpdateWithoutInversoresInput = {
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsinaUncheckedUpdateWithoutInversoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricaUpsertWithWhereUniqueWithoutInversorInput = {
    where: MetricaWhereUniqueInput
    update: XOR<MetricaUpdateWithoutInversorInput, MetricaUncheckedUpdateWithoutInversorInput>
    create: XOR<MetricaCreateWithoutInversorInput, MetricaUncheckedCreateWithoutInversorInput>
  }

  export type MetricaUpdateWithWhereUniqueWithoutInversorInput = {
    where: MetricaWhereUniqueInput
    data: XOR<MetricaUpdateWithoutInversorInput, MetricaUncheckedUpdateWithoutInversorInput>
  }

  export type MetricaUpdateManyWithWhereWithoutInversorInput = {
    where: MetricaScalarWhereInput
    data: XOR<MetricaUpdateManyMutationInput, MetricaUncheckedUpdateManyWithoutInversorInput>
  }

  export type MetricaScalarWhereInput = {
    AND?: MetricaScalarWhereInput | MetricaScalarWhereInput[]
    OR?: MetricaScalarWhereInput[]
    NOT?: MetricaScalarWhereInput | MetricaScalarWhereInput[]
    id?: IntFilter<"Metrica"> | number
    inversorId?: IntFilter<"Metrica"> | number
    potenciaAtivaWatt?: FloatNullableFilter<"Metrica"> | number | null
    temperaturaCelsius?: FloatNullableFilter<"Metrica"> | number | null
    datetime?: DateTimeFilter<"Metrica"> | Date | string
    createdAt?: DateTimeFilter<"Metrica"> | Date | string
    updatedAt?: DateTimeFilter<"Metrica"> | Date | string
  }

  export type InversorCreateWithoutMetricasInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    usina: UsinaCreateNestedOneWithoutInversoresInput
  }

  export type InversorUncheckedCreateWithoutMetricasInput = {
    id?: number
    usinaId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InversorCreateOrConnectWithoutMetricasInput = {
    where: InversorWhereUniqueInput
    create: XOR<InversorCreateWithoutMetricasInput, InversorUncheckedCreateWithoutMetricasInput>
  }

  export type InversorUpsertWithoutMetricasInput = {
    update: XOR<InversorUpdateWithoutMetricasInput, InversorUncheckedUpdateWithoutMetricasInput>
    create: XOR<InversorCreateWithoutMetricasInput, InversorUncheckedCreateWithoutMetricasInput>
    where?: InversorWhereInput
  }

  export type InversorUpdateToOneWithWhereWithoutMetricasInput = {
    where?: InversorWhereInput
    data: XOR<InversorUpdateWithoutMetricasInput, InversorUncheckedUpdateWithoutMetricasInput>
  }

  export type InversorUpdateWithoutMetricasInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usina?: UsinaUpdateOneRequiredWithoutInversoresNestedInput
  }

  export type InversorUncheckedUpdateWithoutMetricasInput = {
    id?: IntFieldUpdateOperationsInput | number
    usinaId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InversorCreateManyUsinaInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InversorUpdateWithoutUsinaInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricas?: MetricaUpdateManyWithoutInversorNestedInput
  }

  export type InversorUncheckedUpdateWithoutUsinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metricas?: MetricaUncheckedUpdateManyWithoutInversorNestedInput
  }

  export type InversorUncheckedUpdateManyWithoutUsinaInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricaCreateManyInversorInput = {
    id?: number
    potenciaAtivaWatt?: number | null
    temperaturaCelsius?: number | null
    datetime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetricaUpdateWithoutInversorInput = {
    potenciaAtivaWatt?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricaUncheckedUpdateWithoutInversorInput = {
    id?: IntFieldUpdateOperationsInput | number
    potenciaAtivaWatt?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetricaUncheckedUpdateManyWithoutInversorInput = {
    id?: IntFieldUpdateOperationsInput | number
    potenciaAtivaWatt?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaCelsius?: NullableFloatFieldUpdateOperationsInput | number | null
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}