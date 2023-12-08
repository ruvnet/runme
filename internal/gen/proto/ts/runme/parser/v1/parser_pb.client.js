/* eslint-disable */
// @generated by protobuf-ts 2.9.2 with parameter output_javascript,optimize_code_size,long_type_string,add_pb_suffix,ts_nocheck,eslint_disable
// @generated from protobuf file "runme/parser/v1/parser.proto" (package "runme.parser.v1", syntax proto3)
// tslint:disable
// @ts-nocheck
import { ParserService } from "./parser_pb";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service runme.parser.v1.ParserService
 */
export class ParserServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = ParserService.typeName;
        this.methods = ParserService.methods;
        this.options = ParserService.options;
    }
    /**
     * @generated from protobuf rpc: Deserialize(runme.parser.v1.DeserializeRequest) returns (runme.parser.v1.DeserializeResponse);
     */
    deserialize(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Serialize(runme.parser.v1.SerializeRequest) returns (runme.parser.v1.SerializeResponse);
     */
    serialize(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
