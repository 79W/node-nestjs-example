import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';
/**
 * 继承日志
 */
@Injectable({ scope: Scope.TRANSIENT })
export class CustomLogger extends ConsoleLogger {}
