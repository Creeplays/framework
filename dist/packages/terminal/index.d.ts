export declare function startBuffering(): void;
export declare function flushBuffer(): void;
export declare function writeStdout(string: string): void;
export declare function writeEscape(args: string): void;
export declare function moveCursor(line: any, col?: number): void;
export declare function hideCursor(): void;
export declare function showCursor(): void;
export declare function clearLine(line?: any): void;
export declare function clearScreen(): void;
export declare function save(): void;
export declare function restore(): void;
