/* eslint-disable */
// @generated by protobuf-ts 2.9.1 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/runner/v1/runner.proto" (package "runme.runner.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { MessageType } from "@protobuf-ts/runtime";
import { UInt32Value } from "../../../google/protobuf/wrappers_pb";
/**
 * @generated from protobuf message runme.runner.v1.Session
 */
export interface Session {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * envs keeps track of session environment variables.
     * They can be modified by executing programs which
     * alter them through "export" and "unset" commands.
     *
     * @generated from protobuf field: repeated string envs = 2;
     */
    envs: string[];
    /**
     * metadata is a map of client specific metadata.
     *
     * @generated from protobuf field: map<string, string> metadata = 3;
     */
    metadata: {
        [key: string]: string;
    };
}
/**
 * @generated from protobuf message runme.runner.v1.Uri
 */
export interface Uri {
    /**
     * @generated from protobuf field: string scheme = 1;
     */
    scheme: string;
    /**
     * @generated from protobuf field: string authority = 2;
     */
    authority: string;
    /**
     * @generated from protobuf field: string path = 3;
     */
    path: string;
    /**
     * @generated from protobuf field: string query = 4;
     */
    query: string;
    /**
     * @generated from protobuf field: string fragment = 5;
     */
    fragment: string;
    /**
     * @generated from protobuf field: string fs_path = 6;
     */
    fsPath: string;
}
/**
 * @generated from protobuf message runme.runner.v1.CreateSessionRequest
 */
export interface CreateSessionRequest {
    /**
     * metadata is a map of client specific metadata.
     *
     * @generated from protobuf field: map<string, string> metadata = 1;
     */
    metadata: {
        [key: string]: string;
    };
    /**
     * envs field provides an initial set of environment variables
     * for a newly created session.
     *
     * @generated from protobuf field: repeated string envs = 2;
     */
    envs: string[];
    /**
     * optional project from which to immediately load environment variables
     *
     * @generated from protobuf field: optional runme.runner.v1.Project project = 3;
     */
    project?: Project;
}
/**
 * @generated from protobuf message runme.runner.v1.CreateSessionResponse
 */
export interface CreateSessionResponse {
    /**
     * @generated from protobuf field: runme.runner.v1.Session session = 1;
     */
    session?: Session;
}
/**
 * @generated from protobuf message runme.runner.v1.GetSessionRequest
 */
export interface GetSessionRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message runme.runner.v1.GetBlocksRequest
 */
export interface GetBlocksRequest {
    /**
     * @generated from protobuf field: optional bool allow_unnamed = 1;
     */
    allowUnnamed?: boolean;
    /**
     * optional project from which to immediately load environment variables
     *
     * @generated from protobuf field: optional runme.runner.v1.Project project = 3;
     */
    project?: Project;
}
/**
 * @generated from protobuf message runme.runner.v1.GetSessionResponse
 */
export interface GetSessionResponse {
    /**
     * @generated from protobuf field: runme.runner.v1.Session session = 1;
     */
    session?: Session;
}
/**
 * @generated from protobuf message runme.runner.v1.GetBlocksResponse
 */
export interface GetBlocksResponse {
    /**
     * @generated from protobuf field: repeated runme.runner.v1.Uri blocks = 1;
     */
    blocks: Uri[];
}
/**
 * @generated from protobuf message runme.runner.v1.ListSessionsRequest
 */
export interface ListSessionsRequest {
}
/**
 * @generated from protobuf message runme.runner.v1.ListSessionsResponse
 */
export interface ListSessionsResponse {
    /**
     * @generated from protobuf field: repeated runme.runner.v1.Session sessions = 1;
     */
    sessions: Session[];
}
/**
 * @generated from protobuf message runme.runner.v1.DeleteSessionRequest
 */
export interface DeleteSessionRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message runme.runner.v1.DeleteSessionResponse
 */
export interface DeleteSessionResponse {
}
/**
 * @generated from protobuf message runme.runner.v1.Project
 */
export interface Project {
    /**
     * project root folder
     *
     * @generated from protobuf field: string root = 1;
     */
    root: string;
    /**
     * list of environment files to try and load
     * start with
     *
     * @generated from protobuf field: repeated string env_load_order = 2;
     */
    envLoadOrder: string[];
}
/**
 * @generated from protobuf message runme.runner.v1.Winsize
 */
export interface Winsize {
    /**
     * number of rows (in cells)
     *
     * @generated from protobuf field: uint32 rows = 1;
     */
    rows: number;
    /**
     * number of columns (in cells)
     *
     * @generated from protobuf field: uint32 cols = 2;
     */
    cols: number;
    /**
     * width in pixels
     *
     * @generated from protobuf field: uint32 x = 3;
     */
    x: number;
    /**
     * height in pixels
     *
     * @generated from protobuf field: uint32 y = 4;
     */
    y: number;
}
/**
 * @generated from protobuf message runme.runner.v1.ExecuteRequest
 */
export interface ExecuteRequest {
    /**
     * program_name is a name of the program to execute.
     * If it's not a path (relative or absolute), the runner
     * will try to resolve the name.
     * For example: "sh", "/bin/bash".
     *
     * @generated from protobuf field: string program_name = 1;
     */
    programName: string;
    /**
     * arguments is a list of arguments passed to the program.
     *
     * @generated from protobuf field: repeated string arguments = 2;
     */
    arguments: string[];
    /**
     * directory to execute the program in.
     *
     * @generated from protobuf field: string directory = 3;
     */
    directory: string;
    /**
     * envs is a list of additional environment variables
     * that will be injected to the executed program.
     *
     * @generated from protobuf field: repeated string envs = 4;
     */
    envs: string[];
    /**
     * commands are commands to be executed by the program.
     * The commands are joined and executed as a script.
     * For example: "echo 'Hello, World'", "ls -l /etc".
     * This is mutually exclusive with the script field.
     *
     * @generated from protobuf field: repeated string commands = 5;
     */
    commands: string[];
    /**
     * script is code to be executed by the program.
     * Individual lines are joined with the new line character.
     * This is mutually exclusive with the commands field.
     *
     * @generated from protobuf field: string script = 6;
     */
    script: string;
    /**
     * tty when true allocates a pseudo-TTY.
     *
     * @generated from protobuf field: bool tty = 7;
     */
    tty: boolean;
    /**
     * input_data is a byte array that will be send as input
     * to the program.
     *
     * @generated from protobuf field: bytes input_data = 8;
     */
    inputData: Uint8Array;
    /**
     * stop requests the running process to be stopped.
     * It is allowed only in the consecutive calls.
     *
     * @generated from protobuf field: runme.runner.v1.ExecuteStop stop = 9;
     */
    stop: ExecuteStop;
    /**
     * sets pty winsize
     * has no effect in non-interactive mode
     *
     * @generated from protobuf field: optional runme.runner.v1.Winsize winsize = 10;
     */
    winsize?: Winsize;
    /**
     * background indiciates a background process
     * this will send the process' PID as a first response
     *
     * @generated from protobuf field: bool background = 11;
     */
    background: boolean;
    /**
     * session_id indicates in which Session the program should execute.
     * Executing in a Session might provide additional context like
     * environment variables.
     *
     * @generated from protobuf field: string session_id = 20;
     */
    sessionId: string;
    /**
     * strategy for selecting session
     *
     * @generated from protobuf field: runme.runner.v1.SessionStrategy session_strategy = 21;
     */
    sessionStrategy: SessionStrategy;
    /**
     * project for this runner
     * used to load environment variables from .env files
     *
     * @generated from protobuf field: optional runme.runner.v1.Project project = 22;
     */
    project?: Project;
    /**
     * whether to store the stdout of the last ran
     * block in the environment variable `__`
     *
     * @generated from protobuf field: bool store_last_output = 23;
     */
    storeLastOutput: boolean;
    /**
     * @generated from protobuf field: runme.runner.v1.CommandMode command_mode = 24;
     */
    commandMode: CommandMode;
    /**
     * language id associated with script
     *
     * @generated from protobuf field: string language_id = 25;
     */
    languageId: string;
    /**
     * file extension associated with script
     *
     * @generated from protobuf field: string file_extension = 26;
     */
    fileExtension: string;
}
/**
 * @generated from protobuf message runme.runner.v1.ProcessPID
 */
export interface ProcessPID {
    /**
     * @generated from protobuf field: int64 pid = 1;
     */
    pid: string;
}
/**
 * @generated from protobuf message runme.runner.v1.ExecuteResponse
 */
export interface ExecuteResponse {
    /**
     * exit_code is sent only in the final message.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value exit_code = 1;
     */
    exitCode?: UInt32Value;
    /**
     * stdout_data contains bytes from stdout since the last response.
     *
     * @generated from protobuf field: bytes stdout_data = 2;
     */
    stdoutData: Uint8Array;
    /**
     * stderr_data contains bytes from stderr since the last response.
     *
     * @generated from protobuf field: bytes stderr_data = 3;
     */
    stderrData: Uint8Array;
    /**
     * pid contains the process' PID
     * this is only sent once in an initial response for background processes.
     *
     * @generated from protobuf field: runme.runner.v1.ProcessPID pid = 4;
     */
    pid?: ProcessPID;
}
/**
 * @generated from protobuf enum runme.runner.v1.ExecuteStop
 */
export declare enum ExecuteStop {
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_INTERRUPT = 1;
     */
    INTERRUPT = 1,
    /**
     * @generated from protobuf enum value: EXECUTE_STOP_KILL = 2;
     */
    KILL = 2
}
/**
 * @generated from protobuf enum runme.runner.v1.CommandMode
 */
export declare enum CommandMode {
    /**
     * @generated from protobuf enum value: COMMAND_MODE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from protobuf enum value: COMMAND_MODE_INLINE_SHELL = 1;
     */
    INLINE_SHELL = 1,
    /**
     * @generated from protobuf enum value: COMMAND_MODE_TEMP_FILE = 2;
     */
    TEMP_FILE = 2
}
/**
 * strategy for selecting a session in an initial execute request
 *
 * @generated from protobuf enum runme.runner.v1.SessionStrategy
 */
export declare enum SessionStrategy {
    /**
     * uses session_id field to determine session
     * if none is present, a new session is created
     *
     * @generated from protobuf enum value: SESSION_STRATEGY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * uses most recently used session on the grpc server
     * if there is none, a new one is created
     *
     * @generated from protobuf enum value: SESSION_STRATEGY_MOST_RECENT = 1;
     */
    MOST_RECENT = 1
}
declare class Session$Type extends MessageType<Session> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.Session
 */
export declare const Session: Session$Type;
declare class Uri$Type extends MessageType<Uri> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.Uri
 */
export declare const Uri: Uri$Type;
declare class CreateSessionRequest$Type extends MessageType<CreateSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.CreateSessionRequest
 */
export declare const CreateSessionRequest: CreateSessionRequest$Type;
declare class CreateSessionResponse$Type extends MessageType<CreateSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.CreateSessionResponse
 */
export declare const CreateSessionResponse: CreateSessionResponse$Type;
declare class GetSessionRequest$Type extends MessageType<GetSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.GetSessionRequest
 */
export declare const GetSessionRequest: GetSessionRequest$Type;
declare class GetBlocksRequest$Type extends MessageType<GetBlocksRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.GetBlocksRequest
 */
export declare const GetBlocksRequest: GetBlocksRequest$Type;
declare class GetSessionResponse$Type extends MessageType<GetSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.GetSessionResponse
 */
export declare const GetSessionResponse: GetSessionResponse$Type;
declare class GetBlocksResponse$Type extends MessageType<GetBlocksResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.GetBlocksResponse
 */
export declare const GetBlocksResponse: GetBlocksResponse$Type;
declare class ListSessionsRequest$Type extends MessageType<ListSessionsRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ListSessionsRequest
 */
export declare const ListSessionsRequest: ListSessionsRequest$Type;
declare class ListSessionsResponse$Type extends MessageType<ListSessionsResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ListSessionsResponse
 */
export declare const ListSessionsResponse: ListSessionsResponse$Type;
declare class DeleteSessionRequest$Type extends MessageType<DeleteSessionRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.DeleteSessionRequest
 */
export declare const DeleteSessionRequest: DeleteSessionRequest$Type;
declare class DeleteSessionResponse$Type extends MessageType<DeleteSessionResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.DeleteSessionResponse
 */
export declare const DeleteSessionResponse: DeleteSessionResponse$Type;
declare class Project$Type extends MessageType<Project> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.Project
 */
export declare const Project: Project$Type;
declare class Winsize$Type extends MessageType<Winsize> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.Winsize
 */
export declare const Winsize: Winsize$Type;
declare class ExecuteRequest$Type extends MessageType<ExecuteRequest> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ExecuteRequest
 */
export declare const ExecuteRequest: ExecuteRequest$Type;
declare class ProcessPID$Type extends MessageType<ProcessPID> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ProcessPID
 */
export declare const ProcessPID: ProcessPID$Type;
declare class ExecuteResponse$Type extends MessageType<ExecuteResponse> {
    constructor();
}
/**
 * @generated MessageType for protobuf message runme.runner.v1.ExecuteResponse
 */
export declare const ExecuteResponse: ExecuteResponse$Type;
/**
 * @generated ServiceType for protobuf service runme.runner.v1.RunnerService
 */
export declare const RunnerService: any;
export {};
