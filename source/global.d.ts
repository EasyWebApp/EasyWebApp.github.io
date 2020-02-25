declare module '*.less' {
    const map: { [key: string]: string };

    export default map;
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
