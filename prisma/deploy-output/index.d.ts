
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
 * Model TriggerWarning
 * 
 */
export type TriggerWarning = $Result.DefaultSelection<Prisma.$TriggerWarningPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Price
 * 
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model StaticLink
 * 
 */
export type StaticLink = $Result.DefaultSelection<Prisma.$StaticLinkPayload>
/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const kind: {
  TeraByte: 'TeraByte',
  Pichau: 'Pichau',
  Kabum: 'Kabum'
};

export type kind = (typeof kind)[keyof typeof kind]

}

export type kind = $Enums.kind

export const kind: typeof $Enums.kind

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TriggerWarnings
 * const triggerWarnings = await prisma.triggerWarning.findMany()
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
   * // Fetch zero or more TriggerWarnings
   * const triggerWarnings = await prisma.triggerWarning.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.triggerWarning`: Exposes CRUD operations for the **TriggerWarning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriggerWarnings
    * const triggerWarnings = await prisma.triggerWarning.findMany()
    * ```
    */
  get triggerWarning(): Prisma.TriggerWarningDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs>;

  /**
   * `prisma.staticLink`: Exposes CRUD operations for the **StaticLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaticLinks
    * const staticLinks = await prisma.staticLink.findMany()
    * ```
    */
  get staticLink(): Prisma.StaticLinkDelegate<ExtArgs>;

  /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    TriggerWarning: 'TriggerWarning',
    User: 'User',
    Product: 'Product',
    Price: 'Price',
    StaticLink: 'StaticLink',
    Issue: 'Issue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "triggerWarning" | "user" | "product" | "price" | "staticLink" | "issue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TriggerWarning: {
        payload: Prisma.$TriggerWarningPayload<ExtArgs>
        fields: Prisma.TriggerWarningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerWarningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerWarningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload>
          }
          findFirst: {
            args: Prisma.TriggerWarningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerWarningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload>
          }
          findMany: {
            args: Prisma.TriggerWarningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload>[]
          }
          create: {
            args: Prisma.TriggerWarningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload>
          }
          createMany: {
            args: Prisma.TriggerWarningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerWarningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload>[]
          }
          delete: {
            args: Prisma.TriggerWarningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload>
          }
          update: {
            args: Prisma.TriggerWarningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload>
          }
          deleteMany: {
            args: Prisma.TriggerWarningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerWarningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TriggerWarningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerWarningPayload>
          }
          aggregate: {
            args: Prisma.TriggerWarningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriggerWarning>
          }
          groupBy: {
            args: Prisma.TriggerWarningGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerWarningGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerWarningCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerWarningCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      StaticLink: {
        payload: Prisma.$StaticLinkPayload<ExtArgs>
        fields: Prisma.StaticLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaticLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaticLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          findFirst: {
            args: Prisma.StaticLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaticLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          findMany: {
            args: Prisma.StaticLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>[]
          }
          create: {
            args: Prisma.StaticLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          createMany: {
            args: Prisma.StaticLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaticLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>[]
          }
          delete: {
            args: Prisma.StaticLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          update: {
            args: Prisma.StaticLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          deleteMany: {
            args: Prisma.StaticLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaticLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaticLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticLinkPayload>
          }
          aggregate: {
            args: Prisma.StaticLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaticLink>
          }
          groupBy: {
            args: Prisma.StaticLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaticLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaticLinkCountArgs<ExtArgs>
            result: $Utils.Optional<StaticLinkCountAggregateOutputType> | number
          }
        }
      }
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Triggers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Triggers?: boolean | UserCountOutputTypeCountTriggersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWarningWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    PriceHistory: number
    TrackerList: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PriceHistory?: boolean | ProductCountOutputTypeCountPriceHistoryArgs
    TrackerList?: boolean | ProductCountOutputTypeCountTrackerListArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTrackerListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWarningWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TriggerWarning
   */

  export type AggregateTriggerWarning = {
    _count: TriggerWarningCountAggregateOutputType | null
    _avg: TriggerWarningAvgAggregateOutputType | null
    _sum: TriggerWarningSumAggregateOutputType | null
    _min: TriggerWarningMinAggregateOutputType | null
    _max: TriggerWarningMaxAggregateOutputType | null
  }

  export type TriggerWarningAvgAggregateOutputType = {
    TargetPrice: number | null
  }

  export type TriggerWarningSumAggregateOutputType = {
    TargetPrice: number | null
  }

  export type TriggerWarningMinAggregateOutputType = {
    Id: string | null
    TargetPrice: number | null
    UserId: string | null
    ProdId: string | null
  }

  export type TriggerWarningMaxAggregateOutputType = {
    Id: string | null
    TargetPrice: number | null
    UserId: string | null
    ProdId: string | null
  }

  export type TriggerWarningCountAggregateOutputType = {
    Id: number
    TargetPrice: number
    UserId: number
    ProdId: number
    _all: number
  }


  export type TriggerWarningAvgAggregateInputType = {
    TargetPrice?: true
  }

  export type TriggerWarningSumAggregateInputType = {
    TargetPrice?: true
  }

  export type TriggerWarningMinAggregateInputType = {
    Id?: true
    TargetPrice?: true
    UserId?: true
    ProdId?: true
  }

  export type TriggerWarningMaxAggregateInputType = {
    Id?: true
    TargetPrice?: true
    UserId?: true
    ProdId?: true
  }

  export type TriggerWarningCountAggregateInputType = {
    Id?: true
    TargetPrice?: true
    UserId?: true
    ProdId?: true
    _all?: true
  }

  export type TriggerWarningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerWarning to aggregate.
     */
    where?: TriggerWarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerWarnings to fetch.
     */
    orderBy?: TriggerWarningOrderByWithRelationInput | TriggerWarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerWarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerWarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriggerWarnings
    **/
    _count?: true | TriggerWarningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TriggerWarningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TriggerWarningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerWarningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerWarningMaxAggregateInputType
  }

  export type GetTriggerWarningAggregateType<T extends TriggerWarningAggregateArgs> = {
        [P in keyof T & keyof AggregateTriggerWarning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriggerWarning[P]>
      : GetScalarType<T[P], AggregateTriggerWarning[P]>
  }




  export type TriggerWarningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWarningWhereInput
    orderBy?: TriggerWarningOrderByWithAggregationInput | TriggerWarningOrderByWithAggregationInput[]
    by: TriggerWarningScalarFieldEnum[] | TriggerWarningScalarFieldEnum
    having?: TriggerWarningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerWarningCountAggregateInputType | true
    _avg?: TriggerWarningAvgAggregateInputType
    _sum?: TriggerWarningSumAggregateInputType
    _min?: TriggerWarningMinAggregateInputType
    _max?: TriggerWarningMaxAggregateInputType
  }

  export type TriggerWarningGroupByOutputType = {
    Id: string
    TargetPrice: number
    UserId: string
    ProdId: string
    _count: TriggerWarningCountAggregateOutputType | null
    _avg: TriggerWarningAvgAggregateOutputType | null
    _sum: TriggerWarningSumAggregateOutputType | null
    _min: TriggerWarningMinAggregateOutputType | null
    _max: TriggerWarningMaxAggregateOutputType | null
  }

  type GetTriggerWarningGroupByPayload<T extends TriggerWarningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerWarningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerWarningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerWarningGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerWarningGroupByOutputType[P]>
        }
      >
    >


  export type TriggerWarningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    TargetPrice?: boolean
    UserId?: boolean
    ProdId?: boolean
    uRef?: boolean | UserDefaultArgs<ExtArgs>
    pRef?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerWarning"]>

  export type TriggerWarningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    TargetPrice?: boolean
    UserId?: boolean
    ProdId?: boolean
    uRef?: boolean | UserDefaultArgs<ExtArgs>
    pRef?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerWarning"]>

  export type TriggerWarningSelectScalar = {
    Id?: boolean
    TargetPrice?: boolean
    UserId?: boolean
    ProdId?: boolean
  }

  export type TriggerWarningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uRef?: boolean | UserDefaultArgs<ExtArgs>
    pRef?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type TriggerWarningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uRef?: boolean | UserDefaultArgs<ExtArgs>
    pRef?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $TriggerWarningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TriggerWarning"
    objects: {
      uRef: Prisma.$UserPayload<ExtArgs>
      pRef: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      TargetPrice: number
      UserId: string
      ProdId: string
    }, ExtArgs["result"]["triggerWarning"]>
    composites: {}
  }

  type TriggerWarningGetPayload<S extends boolean | null | undefined | TriggerWarningDefaultArgs> = $Result.GetResult<Prisma.$TriggerWarningPayload, S>

  type TriggerWarningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TriggerWarningFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TriggerWarningCountAggregateInputType | true
    }

  export interface TriggerWarningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TriggerWarning'], meta: { name: 'TriggerWarning' } }
    /**
     * Find zero or one TriggerWarning that matches the filter.
     * @param {TriggerWarningFindUniqueArgs} args - Arguments to find a TriggerWarning
     * @example
     * // Get one TriggerWarning
     * const triggerWarning = await prisma.triggerWarning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerWarningFindUniqueArgs>(args: SelectSubset<T, TriggerWarningFindUniqueArgs<ExtArgs>>): Prisma__TriggerWarningClient<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TriggerWarning that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TriggerWarningFindUniqueOrThrowArgs} args - Arguments to find a TriggerWarning
     * @example
     * // Get one TriggerWarning
     * const triggerWarning = await prisma.triggerWarning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerWarningFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerWarningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerWarningClient<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TriggerWarning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerWarningFindFirstArgs} args - Arguments to find a TriggerWarning
     * @example
     * // Get one TriggerWarning
     * const triggerWarning = await prisma.triggerWarning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerWarningFindFirstArgs>(args?: SelectSubset<T, TriggerWarningFindFirstArgs<ExtArgs>>): Prisma__TriggerWarningClient<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TriggerWarning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerWarningFindFirstOrThrowArgs} args - Arguments to find a TriggerWarning
     * @example
     * // Get one TriggerWarning
     * const triggerWarning = await prisma.triggerWarning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerWarningFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerWarningFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerWarningClient<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TriggerWarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerWarningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriggerWarnings
     * const triggerWarnings = await prisma.triggerWarning.findMany()
     * 
     * // Get first 10 TriggerWarnings
     * const triggerWarnings = await prisma.triggerWarning.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const triggerWarningWithIdOnly = await prisma.triggerWarning.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends TriggerWarningFindManyArgs>(args?: SelectSubset<T, TriggerWarningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TriggerWarning.
     * @param {TriggerWarningCreateArgs} args - Arguments to create a TriggerWarning.
     * @example
     * // Create one TriggerWarning
     * const TriggerWarning = await prisma.triggerWarning.create({
     *   data: {
     *     // ... data to create a TriggerWarning
     *   }
     * })
     * 
     */
    create<T extends TriggerWarningCreateArgs>(args: SelectSubset<T, TriggerWarningCreateArgs<ExtArgs>>): Prisma__TriggerWarningClient<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TriggerWarnings.
     * @param {TriggerWarningCreateManyArgs} args - Arguments to create many TriggerWarnings.
     * @example
     * // Create many TriggerWarnings
     * const triggerWarning = await prisma.triggerWarning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerWarningCreateManyArgs>(args?: SelectSubset<T, TriggerWarningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TriggerWarnings and returns the data saved in the database.
     * @param {TriggerWarningCreateManyAndReturnArgs} args - Arguments to create many TriggerWarnings.
     * @example
     * // Create many TriggerWarnings
     * const triggerWarning = await prisma.triggerWarning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TriggerWarnings and only return the `Id`
     * const triggerWarningWithIdOnly = await prisma.triggerWarning.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerWarningCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerWarningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TriggerWarning.
     * @param {TriggerWarningDeleteArgs} args - Arguments to delete one TriggerWarning.
     * @example
     * // Delete one TriggerWarning
     * const TriggerWarning = await prisma.triggerWarning.delete({
     *   where: {
     *     // ... filter to delete one TriggerWarning
     *   }
     * })
     * 
     */
    delete<T extends TriggerWarningDeleteArgs>(args: SelectSubset<T, TriggerWarningDeleteArgs<ExtArgs>>): Prisma__TriggerWarningClient<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TriggerWarning.
     * @param {TriggerWarningUpdateArgs} args - Arguments to update one TriggerWarning.
     * @example
     * // Update one TriggerWarning
     * const triggerWarning = await prisma.triggerWarning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerWarningUpdateArgs>(args: SelectSubset<T, TriggerWarningUpdateArgs<ExtArgs>>): Prisma__TriggerWarningClient<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TriggerWarnings.
     * @param {TriggerWarningDeleteManyArgs} args - Arguments to filter TriggerWarnings to delete.
     * @example
     * // Delete a few TriggerWarnings
     * const { count } = await prisma.triggerWarning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerWarningDeleteManyArgs>(args?: SelectSubset<T, TriggerWarningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerWarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerWarningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriggerWarnings
     * const triggerWarning = await prisma.triggerWarning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerWarningUpdateManyArgs>(args: SelectSubset<T, TriggerWarningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TriggerWarning.
     * @param {TriggerWarningUpsertArgs} args - Arguments to update or create a TriggerWarning.
     * @example
     * // Update or create a TriggerWarning
     * const triggerWarning = await prisma.triggerWarning.upsert({
     *   create: {
     *     // ... data to create a TriggerWarning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriggerWarning we want to update
     *   }
     * })
     */
    upsert<T extends TriggerWarningUpsertArgs>(args: SelectSubset<T, TriggerWarningUpsertArgs<ExtArgs>>): Prisma__TriggerWarningClient<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TriggerWarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerWarningCountArgs} args - Arguments to filter TriggerWarnings to count.
     * @example
     * // Count the number of TriggerWarnings
     * const count = await prisma.triggerWarning.count({
     *   where: {
     *     // ... the filter for the TriggerWarnings we want to count
     *   }
     * })
    **/
    count<T extends TriggerWarningCountArgs>(
      args?: Subset<T, TriggerWarningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerWarningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriggerWarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerWarningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriggerWarningAggregateArgs>(args: Subset<T, TriggerWarningAggregateArgs>): Prisma.PrismaPromise<GetTriggerWarningAggregateType<T>>

    /**
     * Group by TriggerWarning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerWarningGroupByArgs} args - Group by arguments.
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
      T extends TriggerWarningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerWarningGroupByArgs['orderBy'] }
        : { orderBy?: TriggerWarningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriggerWarningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerWarningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TriggerWarning model
   */
  readonly fields: TriggerWarningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TriggerWarning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerWarningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uRef<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pRef<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the TriggerWarning model
   */ 
  interface TriggerWarningFieldRefs {
    readonly Id: FieldRef<"TriggerWarning", 'String'>
    readonly TargetPrice: FieldRef<"TriggerWarning", 'Int'>
    readonly UserId: FieldRef<"TriggerWarning", 'String'>
    readonly ProdId: FieldRef<"TriggerWarning", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TriggerWarning findUnique
   */
  export type TriggerWarningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * Filter, which TriggerWarning to fetch.
     */
    where: TriggerWarningWhereUniqueInput
  }

  /**
   * TriggerWarning findUniqueOrThrow
   */
  export type TriggerWarningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * Filter, which TriggerWarning to fetch.
     */
    where: TriggerWarningWhereUniqueInput
  }

  /**
   * TriggerWarning findFirst
   */
  export type TriggerWarningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * Filter, which TriggerWarning to fetch.
     */
    where?: TriggerWarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerWarnings to fetch.
     */
    orderBy?: TriggerWarningOrderByWithRelationInput | TriggerWarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerWarnings.
     */
    cursor?: TriggerWarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerWarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerWarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerWarnings.
     */
    distinct?: TriggerWarningScalarFieldEnum | TriggerWarningScalarFieldEnum[]
  }

  /**
   * TriggerWarning findFirstOrThrow
   */
  export type TriggerWarningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * Filter, which TriggerWarning to fetch.
     */
    where?: TriggerWarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerWarnings to fetch.
     */
    orderBy?: TriggerWarningOrderByWithRelationInput | TriggerWarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerWarnings.
     */
    cursor?: TriggerWarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerWarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerWarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerWarnings.
     */
    distinct?: TriggerWarningScalarFieldEnum | TriggerWarningScalarFieldEnum[]
  }

  /**
   * TriggerWarning findMany
   */
  export type TriggerWarningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * Filter, which TriggerWarnings to fetch.
     */
    where?: TriggerWarningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerWarnings to fetch.
     */
    orderBy?: TriggerWarningOrderByWithRelationInput | TriggerWarningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriggerWarnings.
     */
    cursor?: TriggerWarningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerWarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerWarnings.
     */
    skip?: number
    distinct?: TriggerWarningScalarFieldEnum | TriggerWarningScalarFieldEnum[]
  }

  /**
   * TriggerWarning create
   */
  export type TriggerWarningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * The data needed to create a TriggerWarning.
     */
    data: XOR<TriggerWarningCreateInput, TriggerWarningUncheckedCreateInput>
  }

  /**
   * TriggerWarning createMany
   */
  export type TriggerWarningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TriggerWarnings.
     */
    data: TriggerWarningCreateManyInput | TriggerWarningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TriggerWarning createManyAndReturn
   */
  export type TriggerWarningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TriggerWarnings.
     */
    data: TriggerWarningCreateManyInput | TriggerWarningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerWarning update
   */
  export type TriggerWarningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * The data needed to update a TriggerWarning.
     */
    data: XOR<TriggerWarningUpdateInput, TriggerWarningUncheckedUpdateInput>
    /**
     * Choose, which TriggerWarning to update.
     */
    where: TriggerWarningWhereUniqueInput
  }

  /**
   * TriggerWarning updateMany
   */
  export type TriggerWarningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TriggerWarnings.
     */
    data: XOR<TriggerWarningUpdateManyMutationInput, TriggerWarningUncheckedUpdateManyInput>
    /**
     * Filter which TriggerWarnings to update
     */
    where?: TriggerWarningWhereInput
  }

  /**
   * TriggerWarning upsert
   */
  export type TriggerWarningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * The filter to search for the TriggerWarning to update in case it exists.
     */
    where: TriggerWarningWhereUniqueInput
    /**
     * In case the TriggerWarning found by the `where` argument doesn't exist, create a new TriggerWarning with this data.
     */
    create: XOR<TriggerWarningCreateInput, TriggerWarningUncheckedCreateInput>
    /**
     * In case the TriggerWarning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerWarningUpdateInput, TriggerWarningUncheckedUpdateInput>
  }

  /**
   * TriggerWarning delete
   */
  export type TriggerWarningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    /**
     * Filter which TriggerWarning to delete.
     */
    where: TriggerWarningWhereUniqueInput
  }

  /**
   * TriggerWarning deleteMany
   */
  export type TriggerWarningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerWarnings to delete
     */
    where?: TriggerWarningWhereInput
  }

  /**
   * TriggerWarning without action
   */
  export type TriggerWarningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    Id: string | null
    Email: string | null
    Password: string | null
  }

  export type UserMaxAggregateOutputType = {
    Id: string | null
    Email: string | null
    Password: string | null
  }

  export type UserCountAggregateOutputType = {
    Id: number
    Email: number
    Password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    Id?: true
    Email?: true
    Password?: true
  }

  export type UserMaxAggregateInputType = {
    Id?: true
    Email?: true
    Password?: true
  }

  export type UserCountAggregateInputType = {
    Id?: true
    Email?: true
    Password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    Id: string
    Email: string
    Password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Email?: boolean
    Password?: boolean
    Triggers?: boolean | User$TriggersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Email?: boolean
    Password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    Id?: boolean
    Email?: boolean
    Password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Triggers?: boolean | User$TriggersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Triggers: Prisma.$TriggerWarningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Email: string
      Password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `Id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Triggers<T extends User$TriggersArgs<ExtArgs> = {}>(args?: Subset<T, User$TriggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly Id: FieldRef<"User", 'String'>
    readonly Email: FieldRef<"User", 'String'>
    readonly Password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Triggers
   */
  export type User$TriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    where?: TriggerWarningWhereInput
    orderBy?: TriggerWarningOrderByWithRelationInput | TriggerWarningOrderByWithRelationInput[]
    cursor?: TriggerWarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerWarningScalarFieldEnum | TriggerWarningScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    Value: number | null
  }

  export type ProductSumAggregateOutputType = {
    Value: number | null
  }

  export type ProductMinAggregateOutputType = {
    Id: string | null
    Title: string | null
    Description: string | null
    Value: number | null
    Link: string | null
    Where: string | null
    Kind: $Enums.kind | null
    ImageUrl: string | null
    Slug: string | null
  }

  export type ProductMaxAggregateOutputType = {
    Id: string | null
    Title: string | null
    Description: string | null
    Value: number | null
    Link: string | null
    Where: string | null
    Kind: $Enums.kind | null
    ImageUrl: string | null
    Slug: string | null
  }

  export type ProductCountAggregateOutputType = {
    Id: number
    Title: number
    Description: number
    Value: number
    Link: number
    Where: number
    Kind: number
    ImageUrl: number
    Slug: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    Value?: true
  }

  export type ProductSumAggregateInputType = {
    Value?: true
  }

  export type ProductMinAggregateInputType = {
    Id?: true
    Title?: true
    Description?: true
    Value?: true
    Link?: true
    Where?: true
    Kind?: true
    ImageUrl?: true
    Slug?: true
  }

  export type ProductMaxAggregateInputType = {
    Id?: true
    Title?: true
    Description?: true
    Value?: true
    Link?: true
    Where?: true
    Kind?: true
    ImageUrl?: true
    Slug?: true
  }

  export type ProductCountAggregateInputType = {
    Id?: true
    Title?: true
    Description?: true
    Value?: true
    Link?: true
    Where?: true
    Kind?: true
    ImageUrl?: true
    Slug?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    Id: string
    Title: string | null
    Description: string | null
    Value: number
    Link: string
    Where: string
    Kind: $Enums.kind
    ImageUrl: string | null
    Slug: string
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Title?: boolean
    Description?: boolean
    Value?: boolean
    Link?: boolean
    Where?: boolean
    Kind?: boolean
    ImageUrl?: boolean
    Slug?: boolean
    PriceHistory?: boolean | Product$PriceHistoryArgs<ExtArgs>
    TrackerList?: boolean | Product$TrackerListArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Title?: boolean
    Description?: boolean
    Value?: boolean
    Link?: boolean
    Where?: boolean
    Kind?: boolean
    ImageUrl?: boolean
    Slug?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    Id?: boolean
    Title?: boolean
    Description?: boolean
    Value?: boolean
    Link?: boolean
    Where?: boolean
    Kind?: boolean
    ImageUrl?: boolean
    Slug?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PriceHistory?: boolean | Product$PriceHistoryArgs<ExtArgs>
    TrackerList?: boolean | Product$TrackerListArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      PriceHistory: Prisma.$PricePayload<ExtArgs>[]
      TrackerList: Prisma.$TriggerWarningPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      Title: string | null
      Description: string | null
      Value: number
      Link: string
      Where: string
      Kind: $Enums.kind
      ImageUrl: string | null
      Slug: string
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `Id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PriceHistory<T extends Product$PriceHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$PriceHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany"> | Null>
    TrackerList<T extends Product$TrackerListArgs<ExtArgs> = {}>(args?: Subset<T, Product$TrackerListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerWarningPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly Id: FieldRef<"Product", 'String'>
    readonly Title: FieldRef<"Product", 'String'>
    readonly Description: FieldRef<"Product", 'String'>
    readonly Value: FieldRef<"Product", 'Float'>
    readonly Link: FieldRef<"Product", 'String'>
    readonly Where: FieldRef<"Product", 'String'>
    readonly Kind: FieldRef<"Product", 'kind'>
    readonly ImageUrl: FieldRef<"Product", 'String'>
    readonly Slug: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.PriceHistory
   */
  export type Product$PriceHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Product.TrackerList
   */
  export type Product$TrackerListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerWarning
     */
    select?: TriggerWarningSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerWarningInclude<ExtArgs> | null
    where?: TriggerWarningWhereInput
    orderBy?: TriggerWarningOrderByWithRelationInput | TriggerWarningOrderByWithRelationInput[]
    cursor?: TriggerWarningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerWarningScalarFieldEnum | TriggerWarningScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    Price: number | null
  }

  export type PriceSumAggregateOutputType = {
    Price: number | null
  }

  export type PriceMinAggregateOutputType = {
    Id: string | null
    AtDate: Date | null
    Price: number | null
    ProdId: string | null
  }

  export type PriceMaxAggregateOutputType = {
    Id: string | null
    AtDate: Date | null
    Price: number | null
    ProdId: string | null
  }

  export type PriceCountAggregateOutputType = {
    Id: number
    AtDate: number
    Price: number
    ProdId: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    Price?: true
  }

  export type PriceSumAggregateInputType = {
    Price?: true
  }

  export type PriceMinAggregateInputType = {
    Id?: true
    AtDate?: true
    Price?: true
    ProdId?: true
  }

  export type PriceMaxAggregateInputType = {
    Id?: true
    AtDate?: true
    Price?: true
    ProdId?: true
  }

  export type PriceCountAggregateInputType = {
    Id?: true
    AtDate?: true
    Price?: true
    ProdId?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    Id: string
    AtDate: Date
    Price: number
    ProdId: string
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    AtDate?: boolean
    Price?: boolean
    ProdId?: boolean
    prodRef?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    AtDate?: boolean
    Price?: boolean
    ProdId?: boolean
    prodRef?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    Id?: boolean
    AtDate?: boolean
    Price?: boolean
    ProdId?: boolean
  }

  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prodRef?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type PriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prodRef?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      prodRef: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      AtDate: Date
      Price: number
      ProdId: string
    }, ExtArgs["result"]["price"]>
    composites: {}
  }

  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceFindUniqueArgs>(args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Price that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceFindFirstArgs>(args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const priceWithIdOnly = await prisma.price.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends PriceFindManyArgs>(args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
     */
    create<T extends PriceCreateArgs>(args: SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Prices.
     * @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceCreateManyArgs>(args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PriceCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `Id`
     * const priceWithIdOnly = await prisma.price.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
     */
    delete<T extends PriceDeleteArgs>(args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceUpdateArgs>(args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDeleteManyArgs>(args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceUpdateManyArgs>(args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     */
    upsert<T extends PriceUpsertArgs>(args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
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
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prodRef<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Price model
   */ 
  interface PriceFieldRefs {
    readonly Id: FieldRef<"Price", 'String'>
    readonly AtDate: FieldRef<"Price", 'DateTime'>
    readonly Price: FieldRef<"Price", 'Float'>
    readonly ProdId: FieldRef<"Price", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Price createManyAndReturn
   */
  export type PriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
  }

  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
  }


  /**
   * Model StaticLink
   */

  export type AggregateStaticLink = {
    _count: StaticLinkCountAggregateOutputType | null
    _avg: StaticLinkAvgAggregateOutputType | null
    _sum: StaticLinkSumAggregateOutputType | null
    _min: StaticLinkMinAggregateOutputType | null
    _max: StaticLinkMaxAggregateOutputType | null
  }

  export type StaticLinkAvgAggregateOutputType = {
    Id: number | null
  }

  export type StaticLinkSumAggregateOutputType = {
    Id: number | null
  }

  export type StaticLinkMinAggregateOutputType = {
    Id: number | null
    Link: string | null
    GeneratedAt: Date | null
    Where: string | null
  }

  export type StaticLinkMaxAggregateOutputType = {
    Id: number | null
    Link: string | null
    GeneratedAt: Date | null
    Where: string | null
  }

  export type StaticLinkCountAggregateOutputType = {
    Id: number
    Link: number
    GeneratedAt: number
    Where: number
    _all: number
  }


  export type StaticLinkAvgAggregateInputType = {
    Id?: true
  }

  export type StaticLinkSumAggregateInputType = {
    Id?: true
  }

  export type StaticLinkMinAggregateInputType = {
    Id?: true
    Link?: true
    GeneratedAt?: true
    Where?: true
  }

  export type StaticLinkMaxAggregateInputType = {
    Id?: true
    Link?: true
    GeneratedAt?: true
    Where?: true
  }

  export type StaticLinkCountAggregateInputType = {
    Id?: true
    Link?: true
    GeneratedAt?: true
    Where?: true
    _all?: true
  }

  export type StaticLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticLink to aggregate.
     */
    where?: StaticLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticLinks to fetch.
     */
    orderBy?: StaticLinkOrderByWithRelationInput | StaticLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaticLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaticLinks
    **/
    _count?: true | StaticLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaticLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaticLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaticLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaticLinkMaxAggregateInputType
  }

  export type GetStaticLinkAggregateType<T extends StaticLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateStaticLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaticLink[P]>
      : GetScalarType<T[P], AggregateStaticLink[P]>
  }




  export type StaticLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaticLinkWhereInput
    orderBy?: StaticLinkOrderByWithAggregationInput | StaticLinkOrderByWithAggregationInput[]
    by: StaticLinkScalarFieldEnum[] | StaticLinkScalarFieldEnum
    having?: StaticLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaticLinkCountAggregateInputType | true
    _avg?: StaticLinkAvgAggregateInputType
    _sum?: StaticLinkSumAggregateInputType
    _min?: StaticLinkMinAggregateInputType
    _max?: StaticLinkMaxAggregateInputType
  }

  export type StaticLinkGroupByOutputType = {
    Id: number
    Link: string
    GeneratedAt: Date
    Where: string
    _count: StaticLinkCountAggregateOutputType | null
    _avg: StaticLinkAvgAggregateOutputType | null
    _sum: StaticLinkSumAggregateOutputType | null
    _min: StaticLinkMinAggregateOutputType | null
    _max: StaticLinkMaxAggregateOutputType | null
  }

  type GetStaticLinkGroupByPayload<T extends StaticLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaticLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaticLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaticLinkGroupByOutputType[P]>
            : GetScalarType<T[P], StaticLinkGroupByOutputType[P]>
        }
      >
    >


  export type StaticLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Link?: boolean
    GeneratedAt?: boolean
    Where?: boolean
  }, ExtArgs["result"]["staticLink"]>

  export type StaticLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    Link?: boolean
    GeneratedAt?: boolean
    Where?: boolean
  }, ExtArgs["result"]["staticLink"]>

  export type StaticLinkSelectScalar = {
    Id?: boolean
    Link?: boolean
    GeneratedAt?: boolean
    Where?: boolean
  }


  export type $StaticLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaticLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: number
      Link: string
      GeneratedAt: Date
      Where: string
    }, ExtArgs["result"]["staticLink"]>
    composites: {}
  }

  type StaticLinkGetPayload<S extends boolean | null | undefined | StaticLinkDefaultArgs> = $Result.GetResult<Prisma.$StaticLinkPayload, S>

  type StaticLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StaticLinkFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StaticLinkCountAggregateInputType | true
    }

  export interface StaticLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaticLink'], meta: { name: 'StaticLink' } }
    /**
     * Find zero or one StaticLink that matches the filter.
     * @param {StaticLinkFindUniqueArgs} args - Arguments to find a StaticLink
     * @example
     * // Get one StaticLink
     * const staticLink = await prisma.staticLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaticLinkFindUniqueArgs>(args: SelectSubset<T, StaticLinkFindUniqueArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StaticLink that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StaticLinkFindUniqueOrThrowArgs} args - Arguments to find a StaticLink
     * @example
     * // Get one StaticLink
     * const staticLink = await prisma.staticLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaticLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, StaticLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StaticLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkFindFirstArgs} args - Arguments to find a StaticLink
     * @example
     * // Get one StaticLink
     * const staticLink = await prisma.staticLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaticLinkFindFirstArgs>(args?: SelectSubset<T, StaticLinkFindFirstArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StaticLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkFindFirstOrThrowArgs} args - Arguments to find a StaticLink
     * @example
     * // Get one StaticLink
     * const staticLink = await prisma.staticLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaticLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, StaticLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StaticLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaticLinks
     * const staticLinks = await prisma.staticLink.findMany()
     * 
     * // Get first 10 StaticLinks
     * const staticLinks = await prisma.staticLink.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const staticLinkWithIdOnly = await prisma.staticLink.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends StaticLinkFindManyArgs>(args?: SelectSubset<T, StaticLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StaticLink.
     * @param {StaticLinkCreateArgs} args - Arguments to create a StaticLink.
     * @example
     * // Create one StaticLink
     * const StaticLink = await prisma.staticLink.create({
     *   data: {
     *     // ... data to create a StaticLink
     *   }
     * })
     * 
     */
    create<T extends StaticLinkCreateArgs>(args: SelectSubset<T, StaticLinkCreateArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StaticLinks.
     * @param {StaticLinkCreateManyArgs} args - Arguments to create many StaticLinks.
     * @example
     * // Create many StaticLinks
     * const staticLink = await prisma.staticLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaticLinkCreateManyArgs>(args?: SelectSubset<T, StaticLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaticLinks and returns the data saved in the database.
     * @param {StaticLinkCreateManyAndReturnArgs} args - Arguments to create many StaticLinks.
     * @example
     * // Create many StaticLinks
     * const staticLink = await prisma.staticLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaticLinks and only return the `Id`
     * const staticLinkWithIdOnly = await prisma.staticLink.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaticLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, StaticLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StaticLink.
     * @param {StaticLinkDeleteArgs} args - Arguments to delete one StaticLink.
     * @example
     * // Delete one StaticLink
     * const StaticLink = await prisma.staticLink.delete({
     *   where: {
     *     // ... filter to delete one StaticLink
     *   }
     * })
     * 
     */
    delete<T extends StaticLinkDeleteArgs>(args: SelectSubset<T, StaticLinkDeleteArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StaticLink.
     * @param {StaticLinkUpdateArgs} args - Arguments to update one StaticLink.
     * @example
     * // Update one StaticLink
     * const staticLink = await prisma.staticLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaticLinkUpdateArgs>(args: SelectSubset<T, StaticLinkUpdateArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StaticLinks.
     * @param {StaticLinkDeleteManyArgs} args - Arguments to filter StaticLinks to delete.
     * @example
     * // Delete a few StaticLinks
     * const { count } = await prisma.staticLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaticLinkDeleteManyArgs>(args?: SelectSubset<T, StaticLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaticLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaticLinks
     * const staticLink = await prisma.staticLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaticLinkUpdateManyArgs>(args: SelectSubset<T, StaticLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StaticLink.
     * @param {StaticLinkUpsertArgs} args - Arguments to update or create a StaticLink.
     * @example
     * // Update or create a StaticLink
     * const staticLink = await prisma.staticLink.upsert({
     *   create: {
     *     // ... data to create a StaticLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaticLink we want to update
     *   }
     * })
     */
    upsert<T extends StaticLinkUpsertArgs>(args: SelectSubset<T, StaticLinkUpsertArgs<ExtArgs>>): Prisma__StaticLinkClient<$Result.GetResult<Prisma.$StaticLinkPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StaticLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkCountArgs} args - Arguments to filter StaticLinks to count.
     * @example
     * // Count the number of StaticLinks
     * const count = await prisma.staticLink.count({
     *   where: {
     *     // ... the filter for the StaticLinks we want to count
     *   }
     * })
    **/
    count<T extends StaticLinkCountArgs>(
      args?: Subset<T, StaticLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaticLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaticLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaticLinkAggregateArgs>(args: Subset<T, StaticLinkAggregateArgs>): Prisma.PrismaPromise<GetStaticLinkAggregateType<T>>

    /**
     * Group by StaticLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticLinkGroupByArgs} args - Group by arguments.
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
      T extends StaticLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaticLinkGroupByArgs['orderBy'] }
        : { orderBy?: StaticLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaticLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaticLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaticLink model
   */
  readonly fields: StaticLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaticLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaticLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StaticLink model
   */ 
  interface StaticLinkFieldRefs {
    readonly Id: FieldRef<"StaticLink", 'Int'>
    readonly Link: FieldRef<"StaticLink", 'String'>
    readonly GeneratedAt: FieldRef<"StaticLink", 'DateTime'>
    readonly Where: FieldRef<"StaticLink", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StaticLink findUnique
   */
  export type StaticLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLink to fetch.
     */
    where: StaticLinkWhereUniqueInput
  }

  /**
   * StaticLink findUniqueOrThrow
   */
  export type StaticLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLink to fetch.
     */
    where: StaticLinkWhereUniqueInput
  }

  /**
   * StaticLink findFirst
   */
  export type StaticLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLink to fetch.
     */
    where?: StaticLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticLinks to fetch.
     */
    orderBy?: StaticLinkOrderByWithRelationInput | StaticLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticLinks.
     */
    cursor?: StaticLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticLinks.
     */
    distinct?: StaticLinkScalarFieldEnum | StaticLinkScalarFieldEnum[]
  }

  /**
   * StaticLink findFirstOrThrow
   */
  export type StaticLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLink to fetch.
     */
    where?: StaticLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticLinks to fetch.
     */
    orderBy?: StaticLinkOrderByWithRelationInput | StaticLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticLinks.
     */
    cursor?: StaticLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticLinks.
     */
    distinct?: StaticLinkScalarFieldEnum | StaticLinkScalarFieldEnum[]
  }

  /**
   * StaticLink findMany
   */
  export type StaticLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter, which StaticLinks to fetch.
     */
    where?: StaticLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticLinks to fetch.
     */
    orderBy?: StaticLinkOrderByWithRelationInput | StaticLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaticLinks.
     */
    cursor?: StaticLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticLinks.
     */
    skip?: number
    distinct?: StaticLinkScalarFieldEnum | StaticLinkScalarFieldEnum[]
  }

  /**
   * StaticLink create
   */
  export type StaticLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * The data needed to create a StaticLink.
     */
    data: XOR<StaticLinkCreateInput, StaticLinkUncheckedCreateInput>
  }

  /**
   * StaticLink createMany
   */
  export type StaticLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaticLinks.
     */
    data: StaticLinkCreateManyInput | StaticLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaticLink createManyAndReturn
   */
  export type StaticLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StaticLinks.
     */
    data: StaticLinkCreateManyInput | StaticLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaticLink update
   */
  export type StaticLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * The data needed to update a StaticLink.
     */
    data: XOR<StaticLinkUpdateInput, StaticLinkUncheckedUpdateInput>
    /**
     * Choose, which StaticLink to update.
     */
    where: StaticLinkWhereUniqueInput
  }

  /**
   * StaticLink updateMany
   */
  export type StaticLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaticLinks.
     */
    data: XOR<StaticLinkUpdateManyMutationInput, StaticLinkUncheckedUpdateManyInput>
    /**
     * Filter which StaticLinks to update
     */
    where?: StaticLinkWhereInput
  }

  /**
   * StaticLink upsert
   */
  export type StaticLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * The filter to search for the StaticLink to update in case it exists.
     */
    where: StaticLinkWhereUniqueInput
    /**
     * In case the StaticLink found by the `where` argument doesn't exist, create a new StaticLink with this data.
     */
    create: XOR<StaticLinkCreateInput, StaticLinkUncheckedCreateInput>
    /**
     * In case the StaticLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaticLinkUpdateInput, StaticLinkUncheckedUpdateInput>
  }

  /**
   * StaticLink delete
   */
  export type StaticLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
    /**
     * Filter which StaticLink to delete.
     */
    where: StaticLinkWhereUniqueInput
  }

  /**
   * StaticLink deleteMany
   */
  export type StaticLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticLinks to delete
     */
    where?: StaticLinkWhereInput
  }

  /**
   * StaticLink without action
   */
  export type StaticLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticLink
     */
    select?: StaticLinkSelect<ExtArgs> | null
  }


  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueMinAggregateOutputType = {
    Id: string | null
    When: Date | null
    Reason: string | null
    At: string | null
  }

  export type IssueMaxAggregateOutputType = {
    Id: string | null
    When: Date | null
    Reason: string | null
    At: string | null
  }

  export type IssueCountAggregateOutputType = {
    Id: number
    When: number
    Reason: number
    At: number
    _all: number
  }


  export type IssueMinAggregateInputType = {
    Id?: true
    When?: true
    Reason?: true
    At?: true
  }

  export type IssueMaxAggregateInputType = {
    Id?: true
    When?: true
    Reason?: true
    At?: true
  }

  export type IssueCountAggregateInputType = {
    Id?: true
    When?: true
    Reason?: true
    At?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    Id: string
    When: Date
    Reason: string | null
    At: string | null
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    When?: boolean
    Reason?: boolean
    At?: boolean
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    Id?: boolean
    When?: boolean
    Reason?: boolean
    At?: boolean
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    Id?: boolean
    When?: boolean
    Reason?: boolean
    At?: boolean
  }


  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      Id: string
      When: Date
      Reason: string | null
      At: string | null
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }

  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `Id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { Id: true } })
     * 
     */
    findMany<T extends IssueFindManyArgs>(args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
     */
    create<T extends IssueCreateArgs>(args: SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueCreateManyArgs>(args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssueCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `Id`
     * const issueWithIdOnly = await prisma.issue.createManyAndReturn({ 
     *   select: { Id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
     */
    delete<T extends IssueDeleteArgs>(args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueUpdateArgs>(args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueUpdateManyArgs>(args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
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
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Issue model
   */ 
  interface IssueFieldRefs {
    readonly Id: FieldRef<"Issue", 'String'>
    readonly When: FieldRef<"Issue", 'DateTime'>
    readonly Reason: FieldRef<"Issue", 'String'>
    readonly At: FieldRef<"Issue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data?: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }

  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue createManyAndReturn
   */
  export type IssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
  }

  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }

  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
  }

  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
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


  export const TriggerWarningScalarFieldEnum: {
    Id: 'Id',
    TargetPrice: 'TargetPrice',
    UserId: 'UserId',
    ProdId: 'ProdId'
  };

  export type TriggerWarningScalarFieldEnum = (typeof TriggerWarningScalarFieldEnum)[keyof typeof TriggerWarningScalarFieldEnum]


  export const UserScalarFieldEnum: {
    Id: 'Id',
    Email: 'Email',
    Password: 'Password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    Id: 'Id',
    Title: 'Title',
    Description: 'Description',
    Value: 'Value',
    Link: 'Link',
    Where: 'Where',
    Kind: 'Kind',
    ImageUrl: 'ImageUrl',
    Slug: 'Slug'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PriceScalarFieldEnum: {
    Id: 'Id',
    AtDate: 'AtDate',
    Price: 'Price',
    ProdId: 'ProdId'
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const StaticLinkScalarFieldEnum: {
    Id: 'Id',
    Link: 'Link',
    GeneratedAt: 'GeneratedAt',
    Where: 'Where'
  };

  export type StaticLinkScalarFieldEnum = (typeof StaticLinkScalarFieldEnum)[keyof typeof StaticLinkScalarFieldEnum]


  export const IssueScalarFieldEnum: {
    Id: 'Id',
    When: 'When',
    Reason: 'Reason',
    At: 'At'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'kind'
   */
  export type EnumkindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'kind'>
    


  /**
   * Reference to a field of type 'kind[]'
   */
  export type ListEnumkindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'kind[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type TriggerWarningWhereInput = {
    AND?: TriggerWarningWhereInput | TriggerWarningWhereInput[]
    OR?: TriggerWarningWhereInput[]
    NOT?: TriggerWarningWhereInput | TriggerWarningWhereInput[]
    Id?: StringFilter<"TriggerWarning"> | string
    TargetPrice?: IntFilter<"TriggerWarning"> | number
    UserId?: StringFilter<"TriggerWarning"> | string
    ProdId?: StringFilter<"TriggerWarning"> | string
    uRef?: XOR<UserRelationFilter, UserWhereInput>
    pRef?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type TriggerWarningOrderByWithRelationInput = {
    Id?: SortOrder
    TargetPrice?: SortOrder
    UserId?: SortOrder
    ProdId?: SortOrder
    uRef?: UserOrderByWithRelationInput
    pRef?: ProductOrderByWithRelationInput
  }

  export type TriggerWarningWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: TriggerWarningWhereInput | TriggerWarningWhereInput[]
    OR?: TriggerWarningWhereInput[]
    NOT?: TriggerWarningWhereInput | TriggerWarningWhereInput[]
    TargetPrice?: IntFilter<"TriggerWarning"> | number
    UserId?: StringFilter<"TriggerWarning"> | string
    ProdId?: StringFilter<"TriggerWarning"> | string
    uRef?: XOR<UserRelationFilter, UserWhereInput>
    pRef?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "Id">

  export type TriggerWarningOrderByWithAggregationInput = {
    Id?: SortOrder
    TargetPrice?: SortOrder
    UserId?: SortOrder
    ProdId?: SortOrder
    _count?: TriggerWarningCountOrderByAggregateInput
    _avg?: TriggerWarningAvgOrderByAggregateInput
    _max?: TriggerWarningMaxOrderByAggregateInput
    _min?: TriggerWarningMinOrderByAggregateInput
    _sum?: TriggerWarningSumOrderByAggregateInput
  }

  export type TriggerWarningScalarWhereWithAggregatesInput = {
    AND?: TriggerWarningScalarWhereWithAggregatesInput | TriggerWarningScalarWhereWithAggregatesInput[]
    OR?: TriggerWarningScalarWhereWithAggregatesInput[]
    NOT?: TriggerWarningScalarWhereWithAggregatesInput | TriggerWarningScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"TriggerWarning"> | string
    TargetPrice?: IntWithAggregatesFilter<"TriggerWarning"> | number
    UserId?: StringWithAggregatesFilter<"TriggerWarning"> | string
    ProdId?: StringWithAggregatesFilter<"TriggerWarning"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Id?: StringFilter<"User"> | string
    Email?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    Triggers?: TriggerWarningListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    Id?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Triggers?: TriggerWarningOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    Email?: StringFilter<"User"> | string
    Password?: StringFilter<"User"> | string
    Triggers?: TriggerWarningListRelationFilter
  }, "Id">

  export type UserOrderByWithAggregationInput = {
    Id?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"User"> | string
    Email?: StringWithAggregatesFilter<"User"> | string
    Password?: StringWithAggregatesFilter<"User"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    Id?: StringFilter<"Product"> | string
    Title?: StringNullableFilter<"Product"> | string | null
    Description?: StringNullableFilter<"Product"> | string | null
    Value?: FloatFilter<"Product"> | number
    Link?: StringFilter<"Product"> | string
    Where?: StringFilter<"Product"> | string
    Kind?: EnumkindFilter<"Product"> | $Enums.kind
    ImageUrl?: StringNullableFilter<"Product"> | string | null
    Slug?: StringFilter<"Product"> | string
    PriceHistory?: PriceListRelationFilter
    TrackerList?: TriggerWarningListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    Id?: SortOrder
    Title?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Value?: SortOrder
    Link?: SortOrder
    Where?: SortOrder
    Kind?: SortOrder
    ImageUrl?: SortOrderInput | SortOrder
    Slug?: SortOrder
    PriceHistory?: PriceOrderByRelationAggregateInput
    TrackerList?: TriggerWarningOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    Link?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    Title?: StringNullableFilter<"Product"> | string | null
    Description?: StringNullableFilter<"Product"> | string | null
    Value?: FloatFilter<"Product"> | number
    Where?: StringFilter<"Product"> | string
    Kind?: EnumkindFilter<"Product"> | $Enums.kind
    ImageUrl?: StringNullableFilter<"Product"> | string | null
    Slug?: StringFilter<"Product"> | string
    PriceHistory?: PriceListRelationFilter
    TrackerList?: TriggerWarningListRelationFilter
  }, "Id" | "Link">

  export type ProductOrderByWithAggregationInput = {
    Id?: SortOrder
    Title?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Value?: SortOrder
    Link?: SortOrder
    Where?: SortOrder
    Kind?: SortOrder
    ImageUrl?: SortOrderInput | SortOrder
    Slug?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Product"> | string
    Title?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Value?: FloatWithAggregatesFilter<"Product"> | number
    Link?: StringWithAggregatesFilter<"Product"> | string
    Where?: StringWithAggregatesFilter<"Product"> | string
    Kind?: EnumkindWithAggregatesFilter<"Product"> | $Enums.kind
    ImageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    Slug?: StringWithAggregatesFilter<"Product"> | string
  }

  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    Id?: StringFilter<"Price"> | string
    AtDate?: DateTimeFilter<"Price"> | Date | string
    Price?: FloatFilter<"Price"> | number
    ProdId?: StringFilter<"Price"> | string
    prodRef?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type PriceOrderByWithRelationInput = {
    Id?: SortOrder
    AtDate?: SortOrder
    Price?: SortOrder
    ProdId?: SortOrder
    prodRef?: ProductOrderByWithRelationInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    AtDate?: DateTimeFilter<"Price"> | Date | string
    Price?: FloatFilter<"Price"> | number
    ProdId?: StringFilter<"Price"> | string
    prodRef?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "Id">

  export type PriceOrderByWithAggregationInput = {
    Id?: SortOrder
    AtDate?: SortOrder
    Price?: SortOrder
    ProdId?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Price"> | string
    AtDate?: DateTimeWithAggregatesFilter<"Price"> | Date | string
    Price?: FloatWithAggregatesFilter<"Price"> | number
    ProdId?: StringWithAggregatesFilter<"Price"> | string
  }

  export type StaticLinkWhereInput = {
    AND?: StaticLinkWhereInput | StaticLinkWhereInput[]
    OR?: StaticLinkWhereInput[]
    NOT?: StaticLinkWhereInput | StaticLinkWhereInput[]
    Id?: IntFilter<"StaticLink"> | number
    Link?: StringFilter<"StaticLink"> | string
    GeneratedAt?: DateTimeFilter<"StaticLink"> | Date | string
    Where?: StringFilter<"StaticLink"> | string
  }

  export type StaticLinkOrderByWithRelationInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
    Where?: SortOrder
  }

  export type StaticLinkWhereUniqueInput = Prisma.AtLeast<{
    Id?: number
    AND?: StaticLinkWhereInput | StaticLinkWhereInput[]
    OR?: StaticLinkWhereInput[]
    NOT?: StaticLinkWhereInput | StaticLinkWhereInput[]
    Link?: StringFilter<"StaticLink"> | string
    GeneratedAt?: DateTimeFilter<"StaticLink"> | Date | string
    Where?: StringFilter<"StaticLink"> | string
  }, "Id">

  export type StaticLinkOrderByWithAggregationInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
    Where?: SortOrder
    _count?: StaticLinkCountOrderByAggregateInput
    _avg?: StaticLinkAvgOrderByAggregateInput
    _max?: StaticLinkMaxOrderByAggregateInput
    _min?: StaticLinkMinOrderByAggregateInput
    _sum?: StaticLinkSumOrderByAggregateInput
  }

  export type StaticLinkScalarWhereWithAggregatesInput = {
    AND?: StaticLinkScalarWhereWithAggregatesInput | StaticLinkScalarWhereWithAggregatesInput[]
    OR?: StaticLinkScalarWhereWithAggregatesInput[]
    NOT?: StaticLinkScalarWhereWithAggregatesInput | StaticLinkScalarWhereWithAggregatesInput[]
    Id?: IntWithAggregatesFilter<"StaticLink"> | number
    Link?: StringWithAggregatesFilter<"StaticLink"> | string
    GeneratedAt?: DateTimeWithAggregatesFilter<"StaticLink"> | Date | string
    Where?: StringWithAggregatesFilter<"StaticLink"> | string
  }

  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    Id?: StringFilter<"Issue"> | string
    When?: DateTimeFilter<"Issue"> | Date | string
    Reason?: StringNullableFilter<"Issue"> | string | null
    At?: StringNullableFilter<"Issue"> | string | null
  }

  export type IssueOrderByWithRelationInput = {
    Id?: SortOrder
    When?: SortOrder
    Reason?: SortOrderInput | SortOrder
    At?: SortOrderInput | SortOrder
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    Id?: string
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    When?: DateTimeFilter<"Issue"> | Date | string
    Reason?: StringNullableFilter<"Issue"> | string | null
    At?: StringNullableFilter<"Issue"> | string | null
  }, "Id">

  export type IssueOrderByWithAggregationInput = {
    Id?: SortOrder
    When?: SortOrder
    Reason?: SortOrderInput | SortOrder
    At?: SortOrderInput | SortOrder
    _count?: IssueCountOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    Id?: StringWithAggregatesFilter<"Issue"> | string
    When?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    Reason?: StringNullableWithAggregatesFilter<"Issue"> | string | null
    At?: StringNullableWithAggregatesFilter<"Issue"> | string | null
  }

  export type TriggerWarningCreateInput = {
    Id?: string
    TargetPrice: number
    uRef: UserCreateNestedOneWithoutTriggersInput
    pRef: ProductCreateNestedOneWithoutTrackerListInput
  }

  export type TriggerWarningUncheckedCreateInput = {
    Id?: string
    TargetPrice: number
    UserId: string
    ProdId: string
  }

  export type TriggerWarningUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    uRef?: UserUpdateOneRequiredWithoutTriggersNestedInput
    pRef?: ProductUpdateOneRequiredWithoutTrackerListNestedInput
  }

  export type TriggerWarningUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    ProdId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerWarningCreateManyInput = {
    Id?: string
    TargetPrice: number
    UserId: string
    ProdId: string
  }

  export type TriggerWarningUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
  }

  export type TriggerWarningUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
    ProdId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    Id?: string
    Email: string
    Password: string
    Triggers?: TriggerWarningCreateNestedManyWithoutURefInput
  }

  export type UserUncheckedCreateInput = {
    Id?: string
    Email: string
    Password: string
    Triggers?: TriggerWarningUncheckedCreateNestedManyWithoutURefInput
  }

  export type UserUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Triggers?: TriggerWarningUpdateManyWithoutURefNestedInput
  }

  export type UserUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Triggers?: TriggerWarningUncheckedUpdateManyWithoutURefNestedInput
  }

  export type UserCreateManyInput = {
    Id?: string
    Email: string
    Password: string
  }

  export type UserUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    Id?: string
    Title?: string | null
    Description?: string | null
    Value: number
    Link: string
    Where: string
    Kind: $Enums.kind
    ImageUrl?: string | null
    Slug: string
    PriceHistory?: PriceCreateNestedManyWithoutProdRefInput
    TrackerList?: TriggerWarningCreateNestedManyWithoutPRefInput
  }

  export type ProductUncheckedCreateInput = {
    Id?: string
    Title?: string | null
    Description?: string | null
    Value: number
    Link: string
    Where: string
    Kind: $Enums.kind
    ImageUrl?: string | null
    Slug: string
    PriceHistory?: PriceUncheckedCreateNestedManyWithoutProdRefInput
    TrackerList?: TriggerWarningUncheckedCreateNestedManyWithoutPRefInput
  }

  export type ProductUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Value?: FloatFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    Where?: StringFieldUpdateOperationsInput | string
    Kind?: EnumkindFieldUpdateOperationsInput | $Enums.kind
    ImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    PriceHistory?: PriceUpdateManyWithoutProdRefNestedInput
    TrackerList?: TriggerWarningUpdateManyWithoutPRefNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Value?: FloatFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    Where?: StringFieldUpdateOperationsInput | string
    Kind?: EnumkindFieldUpdateOperationsInput | $Enums.kind
    ImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    PriceHistory?: PriceUncheckedUpdateManyWithoutProdRefNestedInput
    TrackerList?: TriggerWarningUncheckedUpdateManyWithoutPRefNestedInput
  }

  export type ProductCreateManyInput = {
    Id?: string
    Title?: string | null
    Description?: string | null
    Value: number
    Link: string
    Where: string
    Kind: $Enums.kind
    ImageUrl?: string | null
    Slug: string
  }

  export type ProductUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Value?: FloatFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    Where?: StringFieldUpdateOperationsInput | string
    Kind?: EnumkindFieldUpdateOperationsInput | $Enums.kind
    ImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Value?: FloatFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    Where?: StringFieldUpdateOperationsInput | string
    Kind?: EnumkindFieldUpdateOperationsInput | $Enums.kind
    ImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateInput = {
    Id?: string
    AtDate?: Date | string
    Price: number
    prodRef: ProductCreateNestedOneWithoutPriceHistoryInput
  }

  export type PriceUncheckedCreateInput = {
    Id?: string
    AtDate?: Date | string
    Price: number
    ProdId: string
  }

  export type PriceUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    AtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: FloatFieldUpdateOperationsInput | number
    prodRef?: ProductUpdateOneRequiredWithoutPriceHistoryNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    AtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: FloatFieldUpdateOperationsInput | number
    ProdId?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateManyInput = {
    Id?: string
    AtDate?: Date | string
    Price: number
    ProdId: string
  }

  export type PriceUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    AtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type PriceUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    AtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: FloatFieldUpdateOperationsInput | number
    ProdId?: StringFieldUpdateOperationsInput | string
  }

  export type StaticLinkCreateInput = {
    Link: string
    GeneratedAt?: Date | string
    Where: string
  }

  export type StaticLinkUncheckedCreateInput = {
    Id?: number
    Link: string
    GeneratedAt?: Date | string
    Where: string
  }

  export type StaticLinkUpdateInput = {
    Link?: StringFieldUpdateOperationsInput | string
    GeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Where?: StringFieldUpdateOperationsInput | string
  }

  export type StaticLinkUncheckedUpdateInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    GeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Where?: StringFieldUpdateOperationsInput | string
  }

  export type StaticLinkCreateManyInput = {
    Id?: number
    Link: string
    GeneratedAt?: Date | string
    Where: string
  }

  export type StaticLinkUpdateManyMutationInput = {
    Link?: StringFieldUpdateOperationsInput | string
    GeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Where?: StringFieldUpdateOperationsInput | string
  }

  export type StaticLinkUncheckedUpdateManyInput = {
    Id?: IntFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    GeneratedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Where?: StringFieldUpdateOperationsInput | string
  }

  export type IssueCreateInput = {
    Id?: string
    When?: Date | string
    Reason?: string | null
    At?: string | null
  }

  export type IssueUncheckedCreateInput = {
    Id?: string
    When?: Date | string
    Reason?: string | null
    At?: string | null
  }

  export type IssueUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    When?: DateTimeFieldUpdateOperationsInput | Date | string
    Reason?: NullableStringFieldUpdateOperationsInput | string | null
    At?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IssueUncheckedUpdateInput = {
    Id?: StringFieldUpdateOperationsInput | string
    When?: DateTimeFieldUpdateOperationsInput | Date | string
    Reason?: NullableStringFieldUpdateOperationsInput | string | null
    At?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IssueCreateManyInput = {
    Id?: string
    When?: Date | string
    Reason?: string | null
    At?: string | null
  }

  export type IssueUpdateManyMutationInput = {
    Id?: StringFieldUpdateOperationsInput | string
    When?: DateTimeFieldUpdateOperationsInput | Date | string
    Reason?: NullableStringFieldUpdateOperationsInput | string | null
    At?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IssueUncheckedUpdateManyInput = {
    Id?: StringFieldUpdateOperationsInput | string
    When?: DateTimeFieldUpdateOperationsInput | Date | string
    Reason?: NullableStringFieldUpdateOperationsInput | string | null
    At?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type TriggerWarningCountOrderByAggregateInput = {
    Id?: SortOrder
    TargetPrice?: SortOrder
    UserId?: SortOrder
    ProdId?: SortOrder
  }

  export type TriggerWarningAvgOrderByAggregateInput = {
    TargetPrice?: SortOrder
  }

  export type TriggerWarningMaxOrderByAggregateInput = {
    Id?: SortOrder
    TargetPrice?: SortOrder
    UserId?: SortOrder
    ProdId?: SortOrder
  }

  export type TriggerWarningMinOrderByAggregateInput = {
    Id?: SortOrder
    TargetPrice?: SortOrder
    UserId?: SortOrder
    ProdId?: SortOrder
  }

  export type TriggerWarningSumOrderByAggregateInput = {
    TargetPrice?: SortOrder
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

  export type TriggerWarningListRelationFilter = {
    every?: TriggerWarningWhereInput
    some?: TriggerWarningWhereInput
    none?: TriggerWarningWhereInput
  }

  export type TriggerWarningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    Id?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    Id?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    Id?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumkindFilter<$PrismaModel = never> = {
    equals?: $Enums.kind | EnumkindFieldRefInput<$PrismaModel>
    in?: $Enums.kind[] | ListEnumkindFieldRefInput<$PrismaModel>
    notIn?: $Enums.kind[] | ListEnumkindFieldRefInput<$PrismaModel>
    not?: NestedEnumkindFilter<$PrismaModel> | $Enums.kind
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    Id?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    Value?: SortOrder
    Link?: SortOrder
    Where?: SortOrder
    Kind?: SortOrder
    ImageUrl?: SortOrder
    Slug?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    Value?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    Id?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    Value?: SortOrder
    Link?: SortOrder
    Where?: SortOrder
    Kind?: SortOrder
    ImageUrl?: SortOrder
    Slug?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    Id?: SortOrder
    Title?: SortOrder
    Description?: SortOrder
    Value?: SortOrder
    Link?: SortOrder
    Where?: SortOrder
    Kind?: SortOrder
    ImageUrl?: SortOrder
    Slug?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    Value?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumkindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kind | EnumkindFieldRefInput<$PrismaModel>
    in?: $Enums.kind[] | ListEnumkindFieldRefInput<$PrismaModel>
    notIn?: $Enums.kind[] | ListEnumkindFieldRefInput<$PrismaModel>
    not?: NestedEnumkindWithAggregatesFilter<$PrismaModel> | $Enums.kind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumkindFilter<$PrismaModel>
    _max?: NestedEnumkindFilter<$PrismaModel>
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

  export type PriceCountOrderByAggregateInput = {
    Id?: SortOrder
    AtDate?: SortOrder
    Price?: SortOrder
    ProdId?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    Price?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    Id?: SortOrder
    AtDate?: SortOrder
    Price?: SortOrder
    ProdId?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    Id?: SortOrder
    AtDate?: SortOrder
    Price?: SortOrder
    ProdId?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    Price?: SortOrder
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

  export type StaticLinkCountOrderByAggregateInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
    Where?: SortOrder
  }

  export type StaticLinkAvgOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type StaticLinkMaxOrderByAggregateInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
    Where?: SortOrder
  }

  export type StaticLinkMinOrderByAggregateInput = {
    Id?: SortOrder
    Link?: SortOrder
    GeneratedAt?: SortOrder
    Where?: SortOrder
  }

  export type StaticLinkSumOrderByAggregateInput = {
    Id?: SortOrder
  }

  export type IssueCountOrderByAggregateInput = {
    Id?: SortOrder
    When?: SortOrder
    Reason?: SortOrder
    At?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    Id?: SortOrder
    When?: SortOrder
    Reason?: SortOrder
    At?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    Id?: SortOrder
    When?: SortOrder
    Reason?: SortOrder
    At?: SortOrder
  }

  export type UserCreateNestedOneWithoutTriggersInput = {
    create?: XOR<UserCreateWithoutTriggersInput, UserUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTriggersInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutTrackerListInput = {
    create?: XOR<ProductCreateWithoutTrackerListInput, ProductUncheckedCreateWithoutTrackerListInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTrackerListInput
    connect?: ProductWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<UserCreateWithoutTriggersInput, UserUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTriggersInput
    upsert?: UserUpsertWithoutTriggersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTriggersInput, UserUpdateWithoutTriggersInput>, UserUncheckedUpdateWithoutTriggersInput>
  }

  export type ProductUpdateOneRequiredWithoutTrackerListNestedInput = {
    create?: XOR<ProductCreateWithoutTrackerListInput, ProductUncheckedCreateWithoutTrackerListInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTrackerListInput
    upsert?: ProductUpsertWithoutTrackerListInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTrackerListInput, ProductUpdateWithoutTrackerListInput>, ProductUncheckedUpdateWithoutTrackerListInput>
  }

  export type TriggerWarningCreateNestedManyWithoutURefInput = {
    create?: XOR<TriggerWarningCreateWithoutURefInput, TriggerWarningUncheckedCreateWithoutURefInput> | TriggerWarningCreateWithoutURefInput[] | TriggerWarningUncheckedCreateWithoutURefInput[]
    connectOrCreate?: TriggerWarningCreateOrConnectWithoutURefInput | TriggerWarningCreateOrConnectWithoutURefInput[]
    createMany?: TriggerWarningCreateManyURefInputEnvelope
    connect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
  }

  export type TriggerWarningUncheckedCreateNestedManyWithoutURefInput = {
    create?: XOR<TriggerWarningCreateWithoutURefInput, TriggerWarningUncheckedCreateWithoutURefInput> | TriggerWarningCreateWithoutURefInput[] | TriggerWarningUncheckedCreateWithoutURefInput[]
    connectOrCreate?: TriggerWarningCreateOrConnectWithoutURefInput | TriggerWarningCreateOrConnectWithoutURefInput[]
    createMany?: TriggerWarningCreateManyURefInputEnvelope
    connect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
  }

  export type TriggerWarningUpdateManyWithoutURefNestedInput = {
    create?: XOR<TriggerWarningCreateWithoutURefInput, TriggerWarningUncheckedCreateWithoutURefInput> | TriggerWarningCreateWithoutURefInput[] | TriggerWarningUncheckedCreateWithoutURefInput[]
    connectOrCreate?: TriggerWarningCreateOrConnectWithoutURefInput | TriggerWarningCreateOrConnectWithoutURefInput[]
    upsert?: TriggerWarningUpsertWithWhereUniqueWithoutURefInput | TriggerWarningUpsertWithWhereUniqueWithoutURefInput[]
    createMany?: TriggerWarningCreateManyURefInputEnvelope
    set?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    disconnect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    delete?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    connect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    update?: TriggerWarningUpdateWithWhereUniqueWithoutURefInput | TriggerWarningUpdateWithWhereUniqueWithoutURefInput[]
    updateMany?: TriggerWarningUpdateManyWithWhereWithoutURefInput | TriggerWarningUpdateManyWithWhereWithoutURefInput[]
    deleteMany?: TriggerWarningScalarWhereInput | TriggerWarningScalarWhereInput[]
  }

  export type TriggerWarningUncheckedUpdateManyWithoutURefNestedInput = {
    create?: XOR<TriggerWarningCreateWithoutURefInput, TriggerWarningUncheckedCreateWithoutURefInput> | TriggerWarningCreateWithoutURefInput[] | TriggerWarningUncheckedCreateWithoutURefInput[]
    connectOrCreate?: TriggerWarningCreateOrConnectWithoutURefInput | TriggerWarningCreateOrConnectWithoutURefInput[]
    upsert?: TriggerWarningUpsertWithWhereUniqueWithoutURefInput | TriggerWarningUpsertWithWhereUniqueWithoutURefInput[]
    createMany?: TriggerWarningCreateManyURefInputEnvelope
    set?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    disconnect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    delete?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    connect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    update?: TriggerWarningUpdateWithWhereUniqueWithoutURefInput | TriggerWarningUpdateWithWhereUniqueWithoutURefInput[]
    updateMany?: TriggerWarningUpdateManyWithWhereWithoutURefInput | TriggerWarningUpdateManyWithWhereWithoutURefInput[]
    deleteMany?: TriggerWarningScalarWhereInput | TriggerWarningScalarWhereInput[]
  }

  export type PriceCreateNestedManyWithoutProdRefInput = {
    create?: XOR<PriceCreateWithoutProdRefInput, PriceUncheckedCreateWithoutProdRefInput> | PriceCreateWithoutProdRefInput[] | PriceUncheckedCreateWithoutProdRefInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProdRefInput | PriceCreateOrConnectWithoutProdRefInput[]
    createMany?: PriceCreateManyProdRefInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type TriggerWarningCreateNestedManyWithoutPRefInput = {
    create?: XOR<TriggerWarningCreateWithoutPRefInput, TriggerWarningUncheckedCreateWithoutPRefInput> | TriggerWarningCreateWithoutPRefInput[] | TriggerWarningUncheckedCreateWithoutPRefInput[]
    connectOrCreate?: TriggerWarningCreateOrConnectWithoutPRefInput | TriggerWarningCreateOrConnectWithoutPRefInput[]
    createMany?: TriggerWarningCreateManyPRefInputEnvelope
    connect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutProdRefInput = {
    create?: XOR<PriceCreateWithoutProdRefInput, PriceUncheckedCreateWithoutProdRefInput> | PriceCreateWithoutProdRefInput[] | PriceUncheckedCreateWithoutProdRefInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProdRefInput | PriceCreateOrConnectWithoutProdRefInput[]
    createMany?: PriceCreateManyProdRefInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type TriggerWarningUncheckedCreateNestedManyWithoutPRefInput = {
    create?: XOR<TriggerWarningCreateWithoutPRefInput, TriggerWarningUncheckedCreateWithoutPRefInput> | TriggerWarningCreateWithoutPRefInput[] | TriggerWarningUncheckedCreateWithoutPRefInput[]
    connectOrCreate?: TriggerWarningCreateOrConnectWithoutPRefInput | TriggerWarningCreateOrConnectWithoutPRefInput[]
    createMany?: TriggerWarningCreateManyPRefInputEnvelope
    connect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumkindFieldUpdateOperationsInput = {
    set?: $Enums.kind
  }

  export type PriceUpdateManyWithoutProdRefNestedInput = {
    create?: XOR<PriceCreateWithoutProdRefInput, PriceUncheckedCreateWithoutProdRefInput> | PriceCreateWithoutProdRefInput[] | PriceUncheckedCreateWithoutProdRefInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProdRefInput | PriceCreateOrConnectWithoutProdRefInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProdRefInput | PriceUpsertWithWhereUniqueWithoutProdRefInput[]
    createMany?: PriceCreateManyProdRefInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProdRefInput | PriceUpdateWithWhereUniqueWithoutProdRefInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProdRefInput | PriceUpdateManyWithWhereWithoutProdRefInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type TriggerWarningUpdateManyWithoutPRefNestedInput = {
    create?: XOR<TriggerWarningCreateWithoutPRefInput, TriggerWarningUncheckedCreateWithoutPRefInput> | TriggerWarningCreateWithoutPRefInput[] | TriggerWarningUncheckedCreateWithoutPRefInput[]
    connectOrCreate?: TriggerWarningCreateOrConnectWithoutPRefInput | TriggerWarningCreateOrConnectWithoutPRefInput[]
    upsert?: TriggerWarningUpsertWithWhereUniqueWithoutPRefInput | TriggerWarningUpsertWithWhereUniqueWithoutPRefInput[]
    createMany?: TriggerWarningCreateManyPRefInputEnvelope
    set?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    disconnect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    delete?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    connect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    update?: TriggerWarningUpdateWithWhereUniqueWithoutPRefInput | TriggerWarningUpdateWithWhereUniqueWithoutPRefInput[]
    updateMany?: TriggerWarningUpdateManyWithWhereWithoutPRefInput | TriggerWarningUpdateManyWithWhereWithoutPRefInput[]
    deleteMany?: TriggerWarningScalarWhereInput | TriggerWarningScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutProdRefNestedInput = {
    create?: XOR<PriceCreateWithoutProdRefInput, PriceUncheckedCreateWithoutProdRefInput> | PriceCreateWithoutProdRefInput[] | PriceUncheckedCreateWithoutProdRefInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutProdRefInput | PriceCreateOrConnectWithoutProdRefInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutProdRefInput | PriceUpsertWithWhereUniqueWithoutProdRefInput[]
    createMany?: PriceCreateManyProdRefInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutProdRefInput | PriceUpdateWithWhereUniqueWithoutProdRefInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutProdRefInput | PriceUpdateManyWithWhereWithoutProdRefInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type TriggerWarningUncheckedUpdateManyWithoutPRefNestedInput = {
    create?: XOR<TriggerWarningCreateWithoutPRefInput, TriggerWarningUncheckedCreateWithoutPRefInput> | TriggerWarningCreateWithoutPRefInput[] | TriggerWarningUncheckedCreateWithoutPRefInput[]
    connectOrCreate?: TriggerWarningCreateOrConnectWithoutPRefInput | TriggerWarningCreateOrConnectWithoutPRefInput[]
    upsert?: TriggerWarningUpsertWithWhereUniqueWithoutPRefInput | TriggerWarningUpsertWithWhereUniqueWithoutPRefInput[]
    createMany?: TriggerWarningCreateManyPRefInputEnvelope
    set?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    disconnect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    delete?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    connect?: TriggerWarningWhereUniqueInput | TriggerWarningWhereUniqueInput[]
    update?: TriggerWarningUpdateWithWhereUniqueWithoutPRefInput | TriggerWarningUpdateWithWhereUniqueWithoutPRefInput[]
    updateMany?: TriggerWarningUpdateManyWithWhereWithoutPRefInput | TriggerWarningUpdateManyWithWhereWithoutPRefInput[]
    deleteMany?: TriggerWarningScalarWhereInput | TriggerWarningScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPriceHistoryInput = {
    create?: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceHistoryInput
    connect?: ProductWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateOneRequiredWithoutPriceHistoryNestedInput = {
    create?: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPriceHistoryInput
    upsert?: ProductUpsertWithoutPriceHistoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPriceHistoryInput, ProductUpdateWithoutPriceHistoryInput>, ProductUncheckedUpdateWithoutPriceHistoryInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumkindFilter<$PrismaModel = never> = {
    equals?: $Enums.kind | EnumkindFieldRefInput<$PrismaModel>
    in?: $Enums.kind[] | ListEnumkindFieldRefInput<$PrismaModel>
    notIn?: $Enums.kind[] | ListEnumkindFieldRefInput<$PrismaModel>
    not?: NestedEnumkindFilter<$PrismaModel> | $Enums.kind
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumkindWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.kind | EnumkindFieldRefInput<$PrismaModel>
    in?: $Enums.kind[] | ListEnumkindFieldRefInput<$PrismaModel>
    notIn?: $Enums.kind[] | ListEnumkindFieldRefInput<$PrismaModel>
    not?: NestedEnumkindWithAggregatesFilter<$PrismaModel> | $Enums.kind
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumkindFilter<$PrismaModel>
    _max?: NestedEnumkindFilter<$PrismaModel>
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

  export type UserCreateWithoutTriggersInput = {
    Id?: string
    Email: string
    Password: string
  }

  export type UserUncheckedCreateWithoutTriggersInput = {
    Id?: string
    Email: string
    Password: string
  }

  export type UserCreateOrConnectWithoutTriggersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTriggersInput, UserUncheckedCreateWithoutTriggersInput>
  }

  export type ProductCreateWithoutTrackerListInput = {
    Id?: string
    Title?: string | null
    Description?: string | null
    Value: number
    Link: string
    Where: string
    Kind: $Enums.kind
    ImageUrl?: string | null
    Slug: string
    PriceHistory?: PriceCreateNestedManyWithoutProdRefInput
  }

  export type ProductUncheckedCreateWithoutTrackerListInput = {
    Id?: string
    Title?: string | null
    Description?: string | null
    Value: number
    Link: string
    Where: string
    Kind: $Enums.kind
    ImageUrl?: string | null
    Slug: string
    PriceHistory?: PriceUncheckedCreateNestedManyWithoutProdRefInput
  }

  export type ProductCreateOrConnectWithoutTrackerListInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTrackerListInput, ProductUncheckedCreateWithoutTrackerListInput>
  }

  export type UserUpsertWithoutTriggersInput = {
    update: XOR<UserUpdateWithoutTriggersInput, UserUncheckedUpdateWithoutTriggersInput>
    create: XOR<UserCreateWithoutTriggersInput, UserUncheckedCreateWithoutTriggersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTriggersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTriggersInput, UserUncheckedUpdateWithoutTriggersInput>
  }

  export type UserUpdateWithoutTriggersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutTriggersInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutTrackerListInput = {
    update: XOR<ProductUpdateWithoutTrackerListInput, ProductUncheckedUpdateWithoutTrackerListInput>
    create: XOR<ProductCreateWithoutTrackerListInput, ProductUncheckedCreateWithoutTrackerListInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTrackerListInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTrackerListInput, ProductUncheckedUpdateWithoutTrackerListInput>
  }

  export type ProductUpdateWithoutTrackerListInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Value?: FloatFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    Where?: StringFieldUpdateOperationsInput | string
    Kind?: EnumkindFieldUpdateOperationsInput | $Enums.kind
    ImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    PriceHistory?: PriceUpdateManyWithoutProdRefNestedInput
  }

  export type ProductUncheckedUpdateWithoutTrackerListInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Value?: FloatFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    Where?: StringFieldUpdateOperationsInput | string
    Kind?: EnumkindFieldUpdateOperationsInput | $Enums.kind
    ImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    PriceHistory?: PriceUncheckedUpdateManyWithoutProdRefNestedInput
  }

  export type TriggerWarningCreateWithoutURefInput = {
    Id?: string
    TargetPrice: number
    pRef: ProductCreateNestedOneWithoutTrackerListInput
  }

  export type TriggerWarningUncheckedCreateWithoutURefInput = {
    Id?: string
    TargetPrice: number
    ProdId: string
  }

  export type TriggerWarningCreateOrConnectWithoutURefInput = {
    where: TriggerWarningWhereUniqueInput
    create: XOR<TriggerWarningCreateWithoutURefInput, TriggerWarningUncheckedCreateWithoutURefInput>
  }

  export type TriggerWarningCreateManyURefInputEnvelope = {
    data: TriggerWarningCreateManyURefInput | TriggerWarningCreateManyURefInput[]
    skipDuplicates?: boolean
  }

  export type TriggerWarningUpsertWithWhereUniqueWithoutURefInput = {
    where: TriggerWarningWhereUniqueInput
    update: XOR<TriggerWarningUpdateWithoutURefInput, TriggerWarningUncheckedUpdateWithoutURefInput>
    create: XOR<TriggerWarningCreateWithoutURefInput, TriggerWarningUncheckedCreateWithoutURefInput>
  }

  export type TriggerWarningUpdateWithWhereUniqueWithoutURefInput = {
    where: TriggerWarningWhereUniqueInput
    data: XOR<TriggerWarningUpdateWithoutURefInput, TriggerWarningUncheckedUpdateWithoutURefInput>
  }

  export type TriggerWarningUpdateManyWithWhereWithoutURefInput = {
    where: TriggerWarningScalarWhereInput
    data: XOR<TriggerWarningUpdateManyMutationInput, TriggerWarningUncheckedUpdateManyWithoutURefInput>
  }

  export type TriggerWarningScalarWhereInput = {
    AND?: TriggerWarningScalarWhereInput | TriggerWarningScalarWhereInput[]
    OR?: TriggerWarningScalarWhereInput[]
    NOT?: TriggerWarningScalarWhereInput | TriggerWarningScalarWhereInput[]
    Id?: StringFilter<"TriggerWarning"> | string
    TargetPrice?: IntFilter<"TriggerWarning"> | number
    UserId?: StringFilter<"TriggerWarning"> | string
    ProdId?: StringFilter<"TriggerWarning"> | string
  }

  export type PriceCreateWithoutProdRefInput = {
    Id?: string
    AtDate?: Date | string
    Price: number
  }

  export type PriceUncheckedCreateWithoutProdRefInput = {
    Id?: string
    AtDate?: Date | string
    Price: number
  }

  export type PriceCreateOrConnectWithoutProdRefInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutProdRefInput, PriceUncheckedCreateWithoutProdRefInput>
  }

  export type PriceCreateManyProdRefInputEnvelope = {
    data: PriceCreateManyProdRefInput | PriceCreateManyProdRefInput[]
    skipDuplicates?: boolean
  }

  export type TriggerWarningCreateWithoutPRefInput = {
    Id?: string
    TargetPrice: number
    uRef: UserCreateNestedOneWithoutTriggersInput
  }

  export type TriggerWarningUncheckedCreateWithoutPRefInput = {
    Id?: string
    TargetPrice: number
    UserId: string
  }

  export type TriggerWarningCreateOrConnectWithoutPRefInput = {
    where: TriggerWarningWhereUniqueInput
    create: XOR<TriggerWarningCreateWithoutPRefInput, TriggerWarningUncheckedCreateWithoutPRefInput>
  }

  export type TriggerWarningCreateManyPRefInputEnvelope = {
    data: TriggerWarningCreateManyPRefInput | TriggerWarningCreateManyPRefInput[]
    skipDuplicates?: boolean
  }

  export type PriceUpsertWithWhereUniqueWithoutProdRefInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutProdRefInput, PriceUncheckedUpdateWithoutProdRefInput>
    create: XOR<PriceCreateWithoutProdRefInput, PriceUncheckedCreateWithoutProdRefInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutProdRefInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutProdRefInput, PriceUncheckedUpdateWithoutProdRefInput>
  }

  export type PriceUpdateManyWithWhereWithoutProdRefInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutProdRefInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    Id?: StringFilter<"Price"> | string
    AtDate?: DateTimeFilter<"Price"> | Date | string
    Price?: FloatFilter<"Price"> | number
    ProdId?: StringFilter<"Price"> | string
  }

  export type TriggerWarningUpsertWithWhereUniqueWithoutPRefInput = {
    where: TriggerWarningWhereUniqueInput
    update: XOR<TriggerWarningUpdateWithoutPRefInput, TriggerWarningUncheckedUpdateWithoutPRefInput>
    create: XOR<TriggerWarningCreateWithoutPRefInput, TriggerWarningUncheckedCreateWithoutPRefInput>
  }

  export type TriggerWarningUpdateWithWhereUniqueWithoutPRefInput = {
    where: TriggerWarningWhereUniqueInput
    data: XOR<TriggerWarningUpdateWithoutPRefInput, TriggerWarningUncheckedUpdateWithoutPRefInput>
  }

  export type TriggerWarningUpdateManyWithWhereWithoutPRefInput = {
    where: TriggerWarningScalarWhereInput
    data: XOR<TriggerWarningUpdateManyMutationInput, TriggerWarningUncheckedUpdateManyWithoutPRefInput>
  }

  export type ProductCreateWithoutPriceHistoryInput = {
    Id?: string
    Title?: string | null
    Description?: string | null
    Value: number
    Link: string
    Where: string
    Kind: $Enums.kind
    ImageUrl?: string | null
    Slug: string
    TrackerList?: TriggerWarningCreateNestedManyWithoutPRefInput
  }

  export type ProductUncheckedCreateWithoutPriceHistoryInput = {
    Id?: string
    Title?: string | null
    Description?: string | null
    Value: number
    Link: string
    Where: string
    Kind: $Enums.kind
    ImageUrl?: string | null
    Slug: string
    TrackerList?: TriggerWarningUncheckedCreateNestedManyWithoutPRefInput
  }

  export type ProductCreateOrConnectWithoutPriceHistoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
  }

  export type ProductUpsertWithoutPriceHistoryInput = {
    update: XOR<ProductUpdateWithoutPriceHistoryInput, ProductUncheckedUpdateWithoutPriceHistoryInput>
    create: XOR<ProductCreateWithoutPriceHistoryInput, ProductUncheckedCreateWithoutPriceHistoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPriceHistoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPriceHistoryInput, ProductUncheckedUpdateWithoutPriceHistoryInput>
  }

  export type ProductUpdateWithoutPriceHistoryInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Value?: FloatFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    Where?: StringFieldUpdateOperationsInput | string
    Kind?: EnumkindFieldUpdateOperationsInput | $Enums.kind
    ImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    TrackerList?: TriggerWarningUpdateManyWithoutPRefNestedInput
  }

  export type ProductUncheckedUpdateWithoutPriceHistoryInput = {
    Id?: StringFieldUpdateOperationsInput | string
    Title?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Value?: FloatFieldUpdateOperationsInput | number
    Link?: StringFieldUpdateOperationsInput | string
    Where?: StringFieldUpdateOperationsInput | string
    Kind?: EnumkindFieldUpdateOperationsInput | $Enums.kind
    ImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Slug?: StringFieldUpdateOperationsInput | string
    TrackerList?: TriggerWarningUncheckedUpdateManyWithoutPRefNestedInput
  }

  export type TriggerWarningCreateManyURefInput = {
    Id?: string
    TargetPrice: number
    ProdId: string
  }

  export type TriggerWarningUpdateWithoutURefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    pRef?: ProductUpdateOneRequiredWithoutTrackerListNestedInput
  }

  export type TriggerWarningUncheckedUpdateWithoutURefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    ProdId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerWarningUncheckedUpdateManyWithoutURefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    ProdId?: StringFieldUpdateOperationsInput | string
  }

  export type PriceCreateManyProdRefInput = {
    Id?: string
    AtDate?: Date | string
    Price: number
  }

  export type TriggerWarningCreateManyPRefInput = {
    Id?: string
    TargetPrice: number
    UserId: string
  }

  export type PriceUpdateWithoutProdRefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    AtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type PriceUncheckedUpdateWithoutProdRefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    AtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type PriceUncheckedUpdateManyWithoutProdRefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    AtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Price?: FloatFieldUpdateOperationsInput | number
  }

  export type TriggerWarningUpdateWithoutPRefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    uRef?: UserUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerWarningUncheckedUpdateWithoutPRefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerWarningUncheckedUpdateManyWithoutPRefInput = {
    Id?: StringFieldUpdateOperationsInput | string
    TargetPrice?: IntFieldUpdateOperationsInput | number
    UserId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TriggerWarningDefaultArgs instead
     */
    export type TriggerWarningArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TriggerWarningDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceDefaultArgs instead
     */
    export type PriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StaticLinkDefaultArgs instead
     */
    export type StaticLinkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StaticLinkDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IssueDefaultArgs instead
     */
    export type IssueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IssueDefaultArgs<ExtArgs>

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