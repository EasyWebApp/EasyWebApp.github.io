declare module '*.module.less' {
    const map: Record<string, string>;

    export = map;
}

declare module '*.png' {
    const path: string;

    export default path;
}

declare module '*.jpg' {
    const path: string;

    export default path;
}

declare module '*.svg' {
    const path: string;

    export default path;
}
