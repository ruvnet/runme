// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file runme/runner/v1/runner.proto (package runme.runner.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, UInt32Value } from "@bufbuild/protobuf";

/**
 * @generated from enum runme.runner.v1.ExecuteStop
 */
export enum ExecuteStop {
  /**
   * @generated from enum value: EXECUTE_STOP_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: EXECUTE_STOP_INTERRUPT = 1;
   */
  INTERRUPT = 1,

  /**
   * @generated from enum value: EXECUTE_STOP_KILL = 2;
   */
  KILL = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(ExecuteStop)
proto3.util.setEnumType(ExecuteStop, "runme.runner.v1.ExecuteStop", [
  { no: 0, name: "EXECUTE_STOP_UNSPECIFIED" },
  { no: 1, name: "EXECUTE_STOP_INTERRUPT" },
  { no: 2, name: "EXECUTE_STOP_KILL" },
]);

/**
 * @generated from enum runme.runner.v1.CommandMode
 */
export enum CommandMode {
  /**
   * @generated from enum value: COMMAND_MODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: COMMAND_MODE_INLINE_SHELL = 1;
   */
  INLINE_SHELL = 1,

  /**
   * @generated from enum value: COMMAND_MODE_TEMP_FILE = 2;
   */
  TEMP_FILE = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(CommandMode)
proto3.util.setEnumType(CommandMode, "runme.runner.v1.CommandMode", [
  { no: 0, name: "COMMAND_MODE_UNSPECIFIED" },
  { no: 1, name: "COMMAND_MODE_INLINE_SHELL" },
  { no: 2, name: "COMMAND_MODE_TEMP_FILE" },
]);

/**
 * strategy for selecting a session in an initial execute request
 *
 * @generated from enum runme.runner.v1.SessionStrategy
 */
export enum SessionStrategy {
  /**
   * uses session_id field to determine session
   * if none is present, a new session is created
   *
   * @generated from enum value: SESSION_STRATEGY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * uses most recently used session on the grpc server
   * if there is none, a new one is created
   *
   * @generated from enum value: SESSION_STRATEGY_MOST_RECENT = 1;
   */
  MOST_RECENT = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(SessionStrategy)
proto3.util.setEnumType(SessionStrategy, "runme.runner.v1.SessionStrategy", [
  { no: 0, name: "SESSION_STRATEGY_UNSPECIFIED" },
  { no: 1, name: "SESSION_STRATEGY_MOST_RECENT" },
]);

/**
 * @generated from message runme.runner.v1.Session
 */
export class Session extends Message<Session> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * envs keeps track of session environment variables.
   * They can be modified by executing programs which
   * alter them through "export" and "unset" commands.
   *
   * @generated from field: repeated string envs = 2;
   */
  envs: string[] = [];

  /**
   * metadata is a map of client specific metadata.
   *
   * @generated from field: map<string, string> metadata = 3;
   */
  metadata: { [key: string]: string } = {};

  constructor(data?: PartialMessage<Session>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.Session";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "envs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Session {
    return new Session().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Session {
    return new Session().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Session {
    return new Session().fromJsonString(jsonString, options);
  }

  static equals(a: Session | PlainMessage<Session> | undefined, b: Session | PlainMessage<Session> | undefined): boolean {
    return proto3.util.equals(Session, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.Uri
 */
export class Uri extends Message<Uri> {
  /**
   * @generated from field: string scheme = 1;
   */
  scheme = "";

  /**
   * @generated from field: string authority = 2;
   */
  authority = "";

  /**
   * @generated from field: string path = 3;
   */
  path = "";

  /**
   * @generated from field: string query = 4;
   */
  query = "";

  /**
   * @generated from field: string fragment = 5;
   */
  fragment = "";

  /**
   * @generated from field: string fs_path = 6;
   */
  fsPath = "";

  constructor(data?: PartialMessage<Uri>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.Uri";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "scheme", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "fragment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "fs_path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Uri {
    return new Uri().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Uri {
    return new Uri().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Uri {
    return new Uri().fromJsonString(jsonString, options);
  }

  static equals(a: Uri | PlainMessage<Uri> | undefined, b: Uri | PlainMessage<Uri> | undefined): boolean {
    return proto3.util.equals(Uri, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.CreateSessionRequest
 */
export class CreateSessionRequest extends Message<CreateSessionRequest> {
  /**
   * metadata is a map of client specific metadata.
   *
   * @generated from field: map<string, string> metadata = 1;
   */
  metadata: { [key: string]: string } = {};

  /**
   * envs field provides an initial set of environment variables
   * for a newly created session.
   *
   * @generated from field: repeated string envs = 2;
   */
  envs: string[] = [];

  /**
   * optional project from which to immediately load environment variables
   *
   * @generated from field: optional runme.runner.v1.Project project = 3;
   */
  project?: Project;

  constructor(data?: PartialMessage<CreateSessionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.CreateSessionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "metadata", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 2, name: "envs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "project", kind: "message", T: Project, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSessionRequest {
    return new CreateSessionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSessionRequest {
    return new CreateSessionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSessionRequest {
    return new CreateSessionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSessionRequest | PlainMessage<CreateSessionRequest> | undefined, b: CreateSessionRequest | PlainMessage<CreateSessionRequest> | undefined): boolean {
    return proto3.util.equals(CreateSessionRequest, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.CreateSessionResponse
 */
export class CreateSessionResponse extends Message<CreateSessionResponse> {
  /**
   * @generated from field: runme.runner.v1.Session session = 1;
   */
  session?: Session;

  constructor(data?: PartialMessage<CreateSessionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.CreateSessionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "session", kind: "message", T: Session },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateSessionResponse {
    return new CreateSessionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateSessionResponse {
    return new CreateSessionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateSessionResponse {
    return new CreateSessionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreateSessionResponse | PlainMessage<CreateSessionResponse> | undefined, b: CreateSessionResponse | PlainMessage<CreateSessionResponse> | undefined): boolean {
    return proto3.util.equals(CreateSessionResponse, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.GetSessionRequest
 */
export class GetSessionRequest extends Message<GetSessionRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<GetSessionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.GetSessionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSessionRequest {
    return new GetSessionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSessionRequest {
    return new GetSessionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSessionRequest {
    return new GetSessionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetSessionRequest | PlainMessage<GetSessionRequest> | undefined, b: GetSessionRequest | PlainMessage<GetSessionRequest> | undefined): boolean {
    return proto3.util.equals(GetSessionRequest, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.GetBlocksRequest
 */
export class GetBlocksRequest extends Message<GetBlocksRequest> {
  /**
   * @generated from field: optional bool allow_unnamed = 1;
   */
  allowUnnamed?: boolean;

  /**
   * optional project from which to immediately load environment variables
   *
   * @generated from field: optional runme.runner.v1.Project project = 3;
   */
  project?: Project;

  constructor(data?: PartialMessage<GetBlocksRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.GetBlocksRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allow_unnamed", kind: "scalar", T: 8 /* ScalarType.BOOL */, opt: true },
    { no: 3, name: "project", kind: "message", T: Project, opt: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBlocksRequest {
    return new GetBlocksRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBlocksRequest {
    return new GetBlocksRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBlocksRequest {
    return new GetBlocksRequest().fromJsonString(jsonString, options);
  }

  static equals(a: GetBlocksRequest | PlainMessage<GetBlocksRequest> | undefined, b: GetBlocksRequest | PlainMessage<GetBlocksRequest> | undefined): boolean {
    return proto3.util.equals(GetBlocksRequest, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.GetSessionResponse
 */
export class GetSessionResponse extends Message<GetSessionResponse> {
  /**
   * @generated from field: runme.runner.v1.Session session = 1;
   */
  session?: Session;

  constructor(data?: PartialMessage<GetSessionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.GetSessionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "session", kind: "message", T: Session },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSessionResponse {
    return new GetSessionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSessionResponse {
    return new GetSessionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSessionResponse {
    return new GetSessionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetSessionResponse | PlainMessage<GetSessionResponse> | undefined, b: GetSessionResponse | PlainMessage<GetSessionResponse> | undefined): boolean {
    return proto3.util.equals(GetSessionResponse, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.GetBlocksResponse
 */
export class GetBlocksResponse extends Message<GetBlocksResponse> {
  /**
   * @generated from field: repeated runme.runner.v1.Uri blocks = 1;
   */
  blocks: Uri[] = [];

  constructor(data?: PartialMessage<GetBlocksResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.GetBlocksResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "blocks", kind: "message", T: Uri, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBlocksResponse {
    return new GetBlocksResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBlocksResponse {
    return new GetBlocksResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBlocksResponse {
    return new GetBlocksResponse().fromJsonString(jsonString, options);
  }

  static equals(a: GetBlocksResponse | PlainMessage<GetBlocksResponse> | undefined, b: GetBlocksResponse | PlainMessage<GetBlocksResponse> | undefined): boolean {
    return proto3.util.equals(GetBlocksResponse, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.ListSessionsRequest
 */
export class ListSessionsRequest extends Message<ListSessionsRequest> {
  constructor(data?: PartialMessage<ListSessionsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.ListSessionsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSessionsRequest {
    return new ListSessionsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSessionsRequest {
    return new ListSessionsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSessionsRequest {
    return new ListSessionsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ListSessionsRequest | PlainMessage<ListSessionsRequest> | undefined, b: ListSessionsRequest | PlainMessage<ListSessionsRequest> | undefined): boolean {
    return proto3.util.equals(ListSessionsRequest, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.ListSessionsResponse
 */
export class ListSessionsResponse extends Message<ListSessionsResponse> {
  /**
   * @generated from field: repeated runme.runner.v1.Session sessions = 1;
   */
  sessions: Session[] = [];

  constructor(data?: PartialMessage<ListSessionsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.ListSessionsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sessions", kind: "message", T: Session, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListSessionsResponse {
    return new ListSessionsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListSessionsResponse {
    return new ListSessionsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListSessionsResponse {
    return new ListSessionsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ListSessionsResponse | PlainMessage<ListSessionsResponse> | undefined, b: ListSessionsResponse | PlainMessage<ListSessionsResponse> | undefined): boolean {
    return proto3.util.equals(ListSessionsResponse, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.DeleteSessionRequest
 */
export class DeleteSessionRequest extends Message<DeleteSessionRequest> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  constructor(data?: PartialMessage<DeleteSessionRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.DeleteSessionRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSessionRequest {
    return new DeleteSessionRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSessionRequest {
    return new DeleteSessionRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSessionRequest {
    return new DeleteSessionRequest().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSessionRequest | PlainMessage<DeleteSessionRequest> | undefined, b: DeleteSessionRequest | PlainMessage<DeleteSessionRequest> | undefined): boolean {
    return proto3.util.equals(DeleteSessionRequest, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.DeleteSessionResponse
 */
export class DeleteSessionResponse extends Message<DeleteSessionResponse> {
  constructor(data?: PartialMessage<DeleteSessionResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.DeleteSessionResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteSessionResponse {
    return new DeleteSessionResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteSessionResponse {
    return new DeleteSessionResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteSessionResponse {
    return new DeleteSessionResponse().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteSessionResponse | PlainMessage<DeleteSessionResponse> | undefined, b: DeleteSessionResponse | PlainMessage<DeleteSessionResponse> | undefined): boolean {
    return proto3.util.equals(DeleteSessionResponse, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.Project
 */
export class Project extends Message<Project> {
  /**
   * project root folder
   *
   * @generated from field: string root = 1;
   */
  root = "";

  /**
   * list of environment files to try and load
   * start with
   *
   * @generated from field: repeated string env_load_order = 2;
   */
  envLoadOrder: string[] = [];

  constructor(data?: PartialMessage<Project>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.Project";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "root", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "env_load_order", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Project {
    return new Project().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Project {
    return new Project().fromJsonString(jsonString, options);
  }

  static equals(a: Project | PlainMessage<Project> | undefined, b: Project | PlainMessage<Project> | undefined): boolean {
    return proto3.util.equals(Project, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.Winsize
 */
export class Winsize extends Message<Winsize> {
  /**
   * number of rows (in cells)
   *
   * @generated from field: uint32 rows = 1;
   */
  rows = 0;

  /**
   * number of columns (in cells)
   *
   * @generated from field: uint32 cols = 2;
   */
  cols = 0;

  /**
   * width in pixels
   *
   * @generated from field: uint32 x = 3;
   */
  x = 0;

  /**
   * height in pixels
   *
   * @generated from field: uint32 y = 4;
   */
  y = 0;

  constructor(data?: PartialMessage<Winsize>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.Winsize";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "rows", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "cols", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "x", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "y", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Winsize {
    return new Winsize().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Winsize {
    return new Winsize().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Winsize {
    return new Winsize().fromJsonString(jsonString, options);
  }

  static equals(a: Winsize | PlainMessage<Winsize> | undefined, b: Winsize | PlainMessage<Winsize> | undefined): boolean {
    return proto3.util.equals(Winsize, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.ExecuteRequest
 */
export class ExecuteRequest extends Message<ExecuteRequest> {
  /**
   * program_name is a name of the program to execute.
   * If it's not a path (relative or absolute), the runner
   * will try to resolve the name.
   * For example: "sh", "/bin/bash".
   *
   * @generated from field: string program_name = 1;
   */
  programName = "";

  /**
   * arguments is a list of arguments passed to the program.
   *
   * @generated from field: repeated string arguments = 2;
   */
  arguments: string[] = [];

  /**
   * directory to execute the program in.
   *
   * @generated from field: string directory = 3;
   */
  directory = "";

  /**
   * envs is a list of additional environment variables
   * that will be injected to the executed program.
   *
   * @generated from field: repeated string envs = 4;
   */
  envs: string[] = [];

  /**
   * commands are commands to be executed by the program.
   * The commands are joined and executed as a script.
   * For example: "echo 'Hello, World'", "ls -l /etc".
   * This is mutually exclusive with the script field.
   *
   * @generated from field: repeated string commands = 5;
   */
  commands: string[] = [];

  /**
   * script is code to be executed by the program.
   * Individual lines are joined with the new line character.
   * This is mutually exclusive with the commands field.
   *
   * @generated from field: string script = 6;
   */
  script = "";

  /**
   * tty when true allocates a pseudo-TTY.
   *
   * @generated from field: bool tty = 7;
   */
  tty = false;

  /**
   * input_data is a byte array that will be send as input
   * to the program.
   *
   * @generated from field: bytes input_data = 8;
   */
  inputData = new Uint8Array(0);

  /**
   * stop requests the running process to be stopped.
   * It is allowed only in the consecutive calls.
   *
   * @generated from field: runme.runner.v1.ExecuteStop stop = 9;
   */
  stop = ExecuteStop.UNSPECIFIED;

  /**
   * sets pty winsize
   * has no effect in non-interactive mode
   *
   * @generated from field: optional runme.runner.v1.Winsize winsize = 10;
   */
  winsize?: Winsize;

  /**
   * background indiciates a background process
   * this will send the process' PID as a first response
   *
   * @generated from field: bool background = 11;
   */
  background = false;

  /**
   * session_id indicates in which Session the program should execute.
   * Executing in a Session might provide additional context like
   * environment variables.
   *
   * @generated from field: string session_id = 20;
   */
  sessionId = "";

  /**
   * strategy for selecting session
   *
   * @generated from field: runme.runner.v1.SessionStrategy session_strategy = 21;
   */
  sessionStrategy = SessionStrategy.UNSPECIFIED;

  /**
   * project for this runner
   * used to load environment variables from .env files
   *
   * @generated from field: optional runme.runner.v1.Project project = 22;
   */
  project?: Project;

  /**
   * whether to store the stdout of the last ran
   * block in the environment variable `__`
   *
   * @generated from field: bool store_last_output = 23;
   */
  storeLastOutput = false;

  /**
   * @generated from field: runme.runner.v1.CommandMode command_mode = 24;
   */
  commandMode = CommandMode.UNSPECIFIED;

  /**
   * language id associated with script
   *
   * @generated from field: string language_id = 25;
   */
  languageId = "";

  /**
   * file extension associated with script
   *
   * @generated from field: string file_extension = 26;
   */
  fileExtension = "";

  constructor(data?: PartialMessage<ExecuteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.ExecuteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "program_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "arguments", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "directory", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "envs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "commands", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "script", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "tty", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "input_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "stop", kind: "enum", T: proto3.getEnumType(ExecuteStop) },
    { no: 10, name: "winsize", kind: "message", T: Winsize, opt: true },
    { no: 11, name: "background", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 20, name: "session_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "session_strategy", kind: "enum", T: proto3.getEnumType(SessionStrategy) },
    { no: 22, name: "project", kind: "message", T: Project, opt: true },
    { no: 23, name: "store_last_output", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 24, name: "command_mode", kind: "enum", T: proto3.getEnumType(CommandMode) },
    { no: 25, name: "language_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 26, name: "file_extension", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteRequest {
    return new ExecuteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteRequest {
    return new ExecuteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteRequest {
    return new ExecuteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ExecuteRequest | PlainMessage<ExecuteRequest> | undefined, b: ExecuteRequest | PlainMessage<ExecuteRequest> | undefined): boolean {
    return proto3.util.equals(ExecuteRequest, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.ProcessPID
 */
export class ProcessPID extends Message<ProcessPID> {
  /**
   * @generated from field: int64 pid = 1;
   */
  pid = protoInt64.zero;

  constructor(data?: PartialMessage<ProcessPID>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.ProcessPID";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pid", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProcessPID {
    return new ProcessPID().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProcessPID {
    return new ProcessPID().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProcessPID {
    return new ProcessPID().fromJsonString(jsonString, options);
  }

  static equals(a: ProcessPID | PlainMessage<ProcessPID> | undefined, b: ProcessPID | PlainMessage<ProcessPID> | undefined): boolean {
    return proto3.util.equals(ProcessPID, a, b);
  }
}

/**
 * @generated from message runme.runner.v1.ExecuteResponse
 */
export class ExecuteResponse extends Message<ExecuteResponse> {
  /**
   * exit_code is sent only in the final message.
   *
   * @generated from field: google.protobuf.UInt32Value exit_code = 1;
   */
  exitCode?: number;

  /**
   * stdout_data contains bytes from stdout since the last response.
   *
   * @generated from field: bytes stdout_data = 2;
   */
  stdoutData = new Uint8Array(0);

  /**
   * stderr_data contains bytes from stderr since the last response.
   *
   * @generated from field: bytes stderr_data = 3;
   */
  stderrData = new Uint8Array(0);

  /**
   * pid contains the process' PID
   * this is only sent once in an initial response for background processes.
   *
   * @generated from field: runme.runner.v1.ProcessPID pid = 4;
   */
  pid?: ProcessPID;

  constructor(data?: PartialMessage<ExecuteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "runme.runner.v1.ExecuteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "exit_code", kind: "message", T: UInt32Value },
    { no: 2, name: "stdout_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "stderr_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "pid", kind: "message", T: ProcessPID },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteResponse {
    return new ExecuteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteResponse {
    return new ExecuteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteResponse {
    return new ExecuteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ExecuteResponse | PlainMessage<ExecuteResponse> | undefined, b: ExecuteResponse | PlainMessage<ExecuteResponse> | undefined): boolean {
    return proto3.util.equals(ExecuteResponse, a, b);
  }
}

