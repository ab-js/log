import { AbstractLogger } from "../AbstractLogger";
import { LoggerInterface } from "../LoggerInterface";
import { logContext, logLevelValue, logMessage } from "../Logger";

/**
 * An extension upon the base AbstractLogger which allows you to create a logger which wraps a single other logger quickly.
 */
export abstract class ProxyingLogger extends AbstractLogger
{
    _downstream: LoggerInterface;

    constructor(downstreamLogger: LoggerInterface)
    {
        super();
        this._downstream = downstreamLogger;
    }

    public log(level: logLevelValue, message: logMessage, context: logContext): any
    {
        this._downstream.log(level,  message,  context);
    }
}
