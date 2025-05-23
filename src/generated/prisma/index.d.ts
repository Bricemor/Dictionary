
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
 * Model Dictionary
 * 
 */
export type Dictionary = $Result.DefaultSelection<Prisma.$DictionaryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dictionaries
 * const dictionaries = await prisma.dictionary.findMany()
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
   * // Fetch zero or more Dictionaries
   * const dictionaries = await prisma.dictionary.findMany()
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
   * `prisma.dictionary`: Exposes CRUD operations for the **Dictionary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dictionaries
    * const dictionaries = await prisma.dictionary.findMany()
    * ```
    */
  get dictionary(): Prisma.DictionaryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Dictionary: 'Dictionary'
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
      modelProps: "dictionary"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Dictionary: {
        payload: Prisma.$DictionaryPayload<ExtArgs>
        fields: Prisma.DictionaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DictionaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DictionaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>
          }
          findFirst: {
            args: Prisma.DictionaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DictionaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>
          }
          findMany: {
            args: Prisma.DictionaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>[]
          }
          create: {
            args: Prisma.DictionaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>
          }
          createMany: {
            args: Prisma.DictionaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DictionaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>[]
          }
          delete: {
            args: Prisma.DictionaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>
          }
          update: {
            args: Prisma.DictionaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>
          }
          deleteMany: {
            args: Prisma.DictionaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DictionaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DictionaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>[]
          }
          upsert: {
            args: Prisma.DictionaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DictionaryPayload>
          }
          aggregate: {
            args: Prisma.DictionaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDictionary>
          }
          groupBy: {
            args: Prisma.DictionaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DictionaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DictionaryCountArgs<ExtArgs>
            result: $Utils.Optional<DictionaryCountAggregateOutputType> | number
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
    dictionary?: DictionaryOmit
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
   * Models
   */

  /**
   * Model Dictionary
   */

  export type AggregateDictionary = {
    _count: DictionaryCountAggregateOutputType | null
    _avg: DictionaryAvgAggregateOutputType | null
    _sum: DictionarySumAggregateOutputType | null
    _min: DictionaryMinAggregateOutputType | null
    _max: DictionaryMaxAggregateOutputType | null
  }

  export type DictionaryAvgAggregateOutputType = {
    id: number | null
  }

  export type DictionarySumAggregateOutputType = {
    id: number | null
  }

  export type DictionaryMinAggregateOutputType = {
    id: number | null
    word: string | null
    cyrillic: string | null
    type: string | null
    gender: string | null
    definition: string | null
    definitionCyrillic: string | null
  }

  export type DictionaryMaxAggregateOutputType = {
    id: number | null
    word: string | null
    cyrillic: string | null
    type: string | null
    gender: string | null
    definition: string | null
    definitionCyrillic: string | null
  }

  export type DictionaryCountAggregateOutputType = {
    id: number
    word: number
    cyrillic: number
    type: number
    gender: number
    definition: number
    definitionCyrillic: number
    _all: number
  }


  export type DictionaryAvgAggregateInputType = {
    id?: true
  }

  export type DictionarySumAggregateInputType = {
    id?: true
  }

  export type DictionaryMinAggregateInputType = {
    id?: true
    word?: true
    cyrillic?: true
    type?: true
    gender?: true
    definition?: true
    definitionCyrillic?: true
  }

  export type DictionaryMaxAggregateInputType = {
    id?: true
    word?: true
    cyrillic?: true
    type?: true
    gender?: true
    definition?: true
    definitionCyrillic?: true
  }

  export type DictionaryCountAggregateInputType = {
    id?: true
    word?: true
    cyrillic?: true
    type?: true
    gender?: true
    definition?: true
    definitionCyrillic?: true
    _all?: true
  }

  export type DictionaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dictionary to aggregate.
     */
    where?: DictionaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictionaries to fetch.
     */
    orderBy?: DictionaryOrderByWithRelationInput | DictionaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DictionaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictionaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictionaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dictionaries
    **/
    _count?: true | DictionaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DictionaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DictionarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DictionaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DictionaryMaxAggregateInputType
  }

  export type GetDictionaryAggregateType<T extends DictionaryAggregateArgs> = {
        [P in keyof T & keyof AggregateDictionary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDictionary[P]>
      : GetScalarType<T[P], AggregateDictionary[P]>
  }




  export type DictionaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DictionaryWhereInput
    orderBy?: DictionaryOrderByWithAggregationInput | DictionaryOrderByWithAggregationInput[]
    by: DictionaryScalarFieldEnum[] | DictionaryScalarFieldEnum
    having?: DictionaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DictionaryCountAggregateInputType | true
    _avg?: DictionaryAvgAggregateInputType
    _sum?: DictionarySumAggregateInputType
    _min?: DictionaryMinAggregateInputType
    _max?: DictionaryMaxAggregateInputType
  }

  export type DictionaryGroupByOutputType = {
    id: number
    word: string
    cyrillic: string
    type: string
    gender: string | null
    definition: string
    definitionCyrillic: string
    _count: DictionaryCountAggregateOutputType | null
    _avg: DictionaryAvgAggregateOutputType | null
    _sum: DictionarySumAggregateOutputType | null
    _min: DictionaryMinAggregateOutputType | null
    _max: DictionaryMaxAggregateOutputType | null
  }

  type GetDictionaryGroupByPayload<T extends DictionaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DictionaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DictionaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DictionaryGroupByOutputType[P]>
            : GetScalarType<T[P], DictionaryGroupByOutputType[P]>
        }
      >
    >


  export type DictionarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    cyrillic?: boolean
    type?: boolean
    gender?: boolean
    definition?: boolean
    definitionCyrillic?: boolean
  }, ExtArgs["result"]["dictionary"]>

  export type DictionarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    cyrillic?: boolean
    type?: boolean
    gender?: boolean
    definition?: boolean
    definitionCyrillic?: boolean
  }, ExtArgs["result"]["dictionary"]>

  export type DictionarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    cyrillic?: boolean
    type?: boolean
    gender?: boolean
    definition?: boolean
    definitionCyrillic?: boolean
  }, ExtArgs["result"]["dictionary"]>

  export type DictionarySelectScalar = {
    id?: boolean
    word?: boolean
    cyrillic?: boolean
    type?: boolean
    gender?: boolean
    definition?: boolean
    definitionCyrillic?: boolean
  }

  export type DictionaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "cyrillic" | "type" | "gender" | "definition" | "definitionCyrillic", ExtArgs["result"]["dictionary"]>

  export type $DictionaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dictionary"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      word: string
      cyrillic: string
      type: string
      gender: string | null
      definition: string
      definitionCyrillic: string
    }, ExtArgs["result"]["dictionary"]>
    composites: {}
  }

  type DictionaryGetPayload<S extends boolean | null | undefined | DictionaryDefaultArgs> = $Result.GetResult<Prisma.$DictionaryPayload, S>

  type DictionaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DictionaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DictionaryCountAggregateInputType | true
    }

  export interface DictionaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dictionary'], meta: { name: 'Dictionary' } }
    /**
     * Find zero or one Dictionary that matches the filter.
     * @param {DictionaryFindUniqueArgs} args - Arguments to find a Dictionary
     * @example
     * // Get one Dictionary
     * const dictionary = await prisma.dictionary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DictionaryFindUniqueArgs>(args: SelectSubset<T, DictionaryFindUniqueArgs<ExtArgs>>): Prisma__DictionaryClient<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dictionary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DictionaryFindUniqueOrThrowArgs} args - Arguments to find a Dictionary
     * @example
     * // Get one Dictionary
     * const dictionary = await prisma.dictionary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DictionaryFindUniqueOrThrowArgs>(args: SelectSubset<T, DictionaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DictionaryClient<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dictionary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryFindFirstArgs} args - Arguments to find a Dictionary
     * @example
     * // Get one Dictionary
     * const dictionary = await prisma.dictionary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DictionaryFindFirstArgs>(args?: SelectSubset<T, DictionaryFindFirstArgs<ExtArgs>>): Prisma__DictionaryClient<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dictionary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryFindFirstOrThrowArgs} args - Arguments to find a Dictionary
     * @example
     * // Get one Dictionary
     * const dictionary = await prisma.dictionary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DictionaryFindFirstOrThrowArgs>(args?: SelectSubset<T, DictionaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DictionaryClient<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dictionaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dictionaries
     * const dictionaries = await prisma.dictionary.findMany()
     * 
     * // Get first 10 Dictionaries
     * const dictionaries = await prisma.dictionary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dictionaryWithIdOnly = await prisma.dictionary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DictionaryFindManyArgs>(args?: SelectSubset<T, DictionaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dictionary.
     * @param {DictionaryCreateArgs} args - Arguments to create a Dictionary.
     * @example
     * // Create one Dictionary
     * const Dictionary = await prisma.dictionary.create({
     *   data: {
     *     // ... data to create a Dictionary
     *   }
     * })
     * 
     */
    create<T extends DictionaryCreateArgs>(args: SelectSubset<T, DictionaryCreateArgs<ExtArgs>>): Prisma__DictionaryClient<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dictionaries.
     * @param {DictionaryCreateManyArgs} args - Arguments to create many Dictionaries.
     * @example
     * // Create many Dictionaries
     * const dictionary = await prisma.dictionary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DictionaryCreateManyArgs>(args?: SelectSubset<T, DictionaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dictionaries and returns the data saved in the database.
     * @param {DictionaryCreateManyAndReturnArgs} args - Arguments to create many Dictionaries.
     * @example
     * // Create many Dictionaries
     * const dictionary = await prisma.dictionary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dictionaries and only return the `id`
     * const dictionaryWithIdOnly = await prisma.dictionary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DictionaryCreateManyAndReturnArgs>(args?: SelectSubset<T, DictionaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dictionary.
     * @param {DictionaryDeleteArgs} args - Arguments to delete one Dictionary.
     * @example
     * // Delete one Dictionary
     * const Dictionary = await prisma.dictionary.delete({
     *   where: {
     *     // ... filter to delete one Dictionary
     *   }
     * })
     * 
     */
    delete<T extends DictionaryDeleteArgs>(args: SelectSubset<T, DictionaryDeleteArgs<ExtArgs>>): Prisma__DictionaryClient<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dictionary.
     * @param {DictionaryUpdateArgs} args - Arguments to update one Dictionary.
     * @example
     * // Update one Dictionary
     * const dictionary = await prisma.dictionary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DictionaryUpdateArgs>(args: SelectSubset<T, DictionaryUpdateArgs<ExtArgs>>): Prisma__DictionaryClient<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dictionaries.
     * @param {DictionaryDeleteManyArgs} args - Arguments to filter Dictionaries to delete.
     * @example
     * // Delete a few Dictionaries
     * const { count } = await prisma.dictionary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DictionaryDeleteManyArgs>(args?: SelectSubset<T, DictionaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dictionaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dictionaries
     * const dictionary = await prisma.dictionary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DictionaryUpdateManyArgs>(args: SelectSubset<T, DictionaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dictionaries and returns the data updated in the database.
     * @param {DictionaryUpdateManyAndReturnArgs} args - Arguments to update many Dictionaries.
     * @example
     * // Update many Dictionaries
     * const dictionary = await prisma.dictionary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dictionaries and only return the `id`
     * const dictionaryWithIdOnly = await prisma.dictionary.updateManyAndReturn({
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
    updateManyAndReturn<T extends DictionaryUpdateManyAndReturnArgs>(args: SelectSubset<T, DictionaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dictionary.
     * @param {DictionaryUpsertArgs} args - Arguments to update or create a Dictionary.
     * @example
     * // Update or create a Dictionary
     * const dictionary = await prisma.dictionary.upsert({
     *   create: {
     *     // ... data to create a Dictionary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dictionary we want to update
     *   }
     * })
     */
    upsert<T extends DictionaryUpsertArgs>(args: SelectSubset<T, DictionaryUpsertArgs<ExtArgs>>): Prisma__DictionaryClient<$Result.GetResult<Prisma.$DictionaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dictionaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryCountArgs} args - Arguments to filter Dictionaries to count.
     * @example
     * // Count the number of Dictionaries
     * const count = await prisma.dictionary.count({
     *   where: {
     *     // ... the filter for the Dictionaries we want to count
     *   }
     * })
    **/
    count<T extends DictionaryCountArgs>(
      args?: Subset<T, DictionaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DictionaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dictionary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DictionaryAggregateArgs>(args: Subset<T, DictionaryAggregateArgs>): Prisma.PrismaPromise<GetDictionaryAggregateType<T>>

    /**
     * Group by Dictionary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DictionaryGroupByArgs} args - Group by arguments.
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
      T extends DictionaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DictionaryGroupByArgs['orderBy'] }
        : { orderBy?: DictionaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DictionaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDictionaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dictionary model
   */
  readonly fields: DictionaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dictionary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DictionaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Dictionary model
   */
  interface DictionaryFieldRefs {
    readonly id: FieldRef<"Dictionary", 'Int'>
    readonly word: FieldRef<"Dictionary", 'String'>
    readonly cyrillic: FieldRef<"Dictionary", 'String'>
    readonly type: FieldRef<"Dictionary", 'String'>
    readonly gender: FieldRef<"Dictionary", 'String'>
    readonly definition: FieldRef<"Dictionary", 'String'>
    readonly definitionCyrillic: FieldRef<"Dictionary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dictionary findUnique
   */
  export type DictionaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * Filter, which Dictionary to fetch.
     */
    where: DictionaryWhereUniqueInput
  }

  /**
   * Dictionary findUniqueOrThrow
   */
  export type DictionaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * Filter, which Dictionary to fetch.
     */
    where: DictionaryWhereUniqueInput
  }

  /**
   * Dictionary findFirst
   */
  export type DictionaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * Filter, which Dictionary to fetch.
     */
    where?: DictionaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictionaries to fetch.
     */
    orderBy?: DictionaryOrderByWithRelationInput | DictionaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dictionaries.
     */
    cursor?: DictionaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictionaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictionaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dictionaries.
     */
    distinct?: DictionaryScalarFieldEnum | DictionaryScalarFieldEnum[]
  }

  /**
   * Dictionary findFirstOrThrow
   */
  export type DictionaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * Filter, which Dictionary to fetch.
     */
    where?: DictionaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictionaries to fetch.
     */
    orderBy?: DictionaryOrderByWithRelationInput | DictionaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dictionaries.
     */
    cursor?: DictionaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictionaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictionaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dictionaries.
     */
    distinct?: DictionaryScalarFieldEnum | DictionaryScalarFieldEnum[]
  }

  /**
   * Dictionary findMany
   */
  export type DictionaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * Filter, which Dictionaries to fetch.
     */
    where?: DictionaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dictionaries to fetch.
     */
    orderBy?: DictionaryOrderByWithRelationInput | DictionaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dictionaries.
     */
    cursor?: DictionaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dictionaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dictionaries.
     */
    skip?: number
    distinct?: DictionaryScalarFieldEnum | DictionaryScalarFieldEnum[]
  }

  /**
   * Dictionary create
   */
  export type DictionaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * The data needed to create a Dictionary.
     */
    data: XOR<DictionaryCreateInput, DictionaryUncheckedCreateInput>
  }

  /**
   * Dictionary createMany
   */
  export type DictionaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dictionaries.
     */
    data: DictionaryCreateManyInput | DictionaryCreateManyInput[]
  }

  /**
   * Dictionary createManyAndReturn
   */
  export type DictionaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * The data used to create many Dictionaries.
     */
    data: DictionaryCreateManyInput | DictionaryCreateManyInput[]
  }

  /**
   * Dictionary update
   */
  export type DictionaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * The data needed to update a Dictionary.
     */
    data: XOR<DictionaryUpdateInput, DictionaryUncheckedUpdateInput>
    /**
     * Choose, which Dictionary to update.
     */
    where: DictionaryWhereUniqueInput
  }

  /**
   * Dictionary updateMany
   */
  export type DictionaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dictionaries.
     */
    data: XOR<DictionaryUpdateManyMutationInput, DictionaryUncheckedUpdateManyInput>
    /**
     * Filter which Dictionaries to update
     */
    where?: DictionaryWhereInput
    /**
     * Limit how many Dictionaries to update.
     */
    limit?: number
  }

  /**
   * Dictionary updateManyAndReturn
   */
  export type DictionaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * The data used to update Dictionaries.
     */
    data: XOR<DictionaryUpdateManyMutationInput, DictionaryUncheckedUpdateManyInput>
    /**
     * Filter which Dictionaries to update
     */
    where?: DictionaryWhereInput
    /**
     * Limit how many Dictionaries to update.
     */
    limit?: number
  }

  /**
   * Dictionary upsert
   */
  export type DictionaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * The filter to search for the Dictionary to update in case it exists.
     */
    where: DictionaryWhereUniqueInput
    /**
     * In case the Dictionary found by the `where` argument doesn't exist, create a new Dictionary with this data.
     */
    create: XOR<DictionaryCreateInput, DictionaryUncheckedCreateInput>
    /**
     * In case the Dictionary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DictionaryUpdateInput, DictionaryUncheckedUpdateInput>
  }

  /**
   * Dictionary delete
   */
  export type DictionaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
    /**
     * Filter which Dictionary to delete.
     */
    where: DictionaryWhereUniqueInput
  }

  /**
   * Dictionary deleteMany
   */
  export type DictionaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dictionaries to delete
     */
    where?: DictionaryWhereInput
    /**
     * Limit how many Dictionaries to delete.
     */
    limit?: number
  }

  /**
   * Dictionary without action
   */
  export type DictionaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dictionary
     */
    select?: DictionarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dictionary
     */
    omit?: DictionaryOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DictionaryScalarFieldEnum: {
    id: 'id',
    word: 'word',
    cyrillic: 'cyrillic',
    type: 'type',
    gender: 'gender',
    definition: 'definition',
    definitionCyrillic: 'definitionCyrillic'
  };

  export type DictionaryScalarFieldEnum = (typeof DictionaryScalarFieldEnum)[keyof typeof DictionaryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DictionaryWhereInput = {
    AND?: DictionaryWhereInput | DictionaryWhereInput[]
    OR?: DictionaryWhereInput[]
    NOT?: DictionaryWhereInput | DictionaryWhereInput[]
    id?: IntFilter<"Dictionary"> | number
    word?: StringFilter<"Dictionary"> | string
    cyrillic?: StringFilter<"Dictionary"> | string
    type?: StringFilter<"Dictionary"> | string
    gender?: StringNullableFilter<"Dictionary"> | string | null
    definition?: StringFilter<"Dictionary"> | string
    definitionCyrillic?: StringFilter<"Dictionary"> | string
  }

  export type DictionaryOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    cyrillic?: SortOrder
    type?: SortOrder
    gender?: SortOrderInput | SortOrder
    definition?: SortOrder
    definitionCyrillic?: SortOrder
  }

  export type DictionaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DictionaryWhereInput | DictionaryWhereInput[]
    OR?: DictionaryWhereInput[]
    NOT?: DictionaryWhereInput | DictionaryWhereInput[]
    word?: StringFilter<"Dictionary"> | string
    cyrillic?: StringFilter<"Dictionary"> | string
    type?: StringFilter<"Dictionary"> | string
    gender?: StringNullableFilter<"Dictionary"> | string | null
    definition?: StringFilter<"Dictionary"> | string
    definitionCyrillic?: StringFilter<"Dictionary"> | string
  }, "id">

  export type DictionaryOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    cyrillic?: SortOrder
    type?: SortOrder
    gender?: SortOrderInput | SortOrder
    definition?: SortOrder
    definitionCyrillic?: SortOrder
    _count?: DictionaryCountOrderByAggregateInput
    _avg?: DictionaryAvgOrderByAggregateInput
    _max?: DictionaryMaxOrderByAggregateInput
    _min?: DictionaryMinOrderByAggregateInput
    _sum?: DictionarySumOrderByAggregateInput
  }

  export type DictionaryScalarWhereWithAggregatesInput = {
    AND?: DictionaryScalarWhereWithAggregatesInput | DictionaryScalarWhereWithAggregatesInput[]
    OR?: DictionaryScalarWhereWithAggregatesInput[]
    NOT?: DictionaryScalarWhereWithAggregatesInput | DictionaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dictionary"> | number
    word?: StringWithAggregatesFilter<"Dictionary"> | string
    cyrillic?: StringWithAggregatesFilter<"Dictionary"> | string
    type?: StringWithAggregatesFilter<"Dictionary"> | string
    gender?: StringNullableWithAggregatesFilter<"Dictionary"> | string | null
    definition?: StringWithAggregatesFilter<"Dictionary"> | string
    definitionCyrillic?: StringWithAggregatesFilter<"Dictionary"> | string
  }

  export type DictionaryCreateInput = {
    word: string
    cyrillic: string
    type: string
    gender?: string | null
    definition: string
    definitionCyrillic: string
  }

  export type DictionaryUncheckedCreateInput = {
    id?: number
    word: string
    cyrillic: string
    type: string
    gender?: string | null
    definition: string
    definitionCyrillic: string
  }

  export type DictionaryUpdateInput = {
    word?: StringFieldUpdateOperationsInput | string
    cyrillic?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    definitionCyrillic?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    cyrillic?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    definitionCyrillic?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryCreateManyInput = {
    id?: number
    word: string
    cyrillic: string
    type: string
    gender?: string | null
    definition: string
    definitionCyrillic: string
  }

  export type DictionaryUpdateManyMutationInput = {
    word?: StringFieldUpdateOperationsInput | string
    cyrillic?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    definitionCyrillic?: StringFieldUpdateOperationsInput | string
  }

  export type DictionaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    word?: StringFieldUpdateOperationsInput | string
    cyrillic?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    definition?: StringFieldUpdateOperationsInput | string
    definitionCyrillic?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DictionaryCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    cyrillic?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    definition?: SortOrder
    definitionCyrillic?: SortOrder
  }

  export type DictionaryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DictionaryMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    cyrillic?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    definition?: SortOrder
    definitionCyrillic?: SortOrder
  }

  export type DictionaryMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    cyrillic?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    definition?: SortOrder
    definitionCyrillic?: SortOrder
  }

  export type DictionarySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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